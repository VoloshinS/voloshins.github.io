import { StatusCodes } from "http-status-codes";
import request from "supertest";
import type { Mock } from "vitest";

import type { User } from "@/api/user/userModel";
import { userService } from "@/api/user/userService";
import type { ServiceResponse } from "@/common/models/serviceResponse";
import { ServiceResponse as ServiceResponseBuilder } from "@/common/models/serviceResponse";
import { app } from "@/server";

vi.mock("@/api/user/userService", () => ({
	userService: {
		create: vi.fn(),
		delete: vi.fn(),
		findAll: vi.fn(),
		findById: vi.fn(),
		update: vi.fn(),
	},
}));

describe("User API Endpoints", () => {
	const users: User[] = [
		{
			id: 1,
			name: "Alice",
			email: "alice@example.com",
			age: 42,
			createdAt: new Date(),
			updatedAt: new Date(),
		},
		{
			id: 2,
			name: "Bob",
			email: "bob@example.com",
			age: 21,
			createdAt: new Date(),
			updatedAt: new Date(),
		},
	];
	const createPayload = {
		name: "Charlie",
		email: "charlie@example.com",
		age: 30,
	};
	const updatePayload = {
		name: "Alice Updated",
		email: "alice.updated@example.com",
		age: 43,
	};
	const createdUser: User = {
		id: 3,
		...createPayload,
		createdAt: new Date(),
		updatedAt: new Date(),
	};

	beforeEach(() => {
		(userService.findAll as Mock).mockResolvedValue(ServiceResponseBuilder.success("Users found", users));
		(userService.findById as Mock).mockImplementation(async (id: number) => {
			const user = users.find((entry) => entry.id === id);
			return user
				? ServiceResponseBuilder.success("User found", user)
				: ServiceResponseBuilder.failure("User not found", null, StatusCodes.NOT_FOUND);
		});
		(userService.create as Mock).mockResolvedValue(
			ServiceResponseBuilder.success("User created", createdUser, StatusCodes.CREATED),
		);
		(userService.update as Mock).mockImplementation(async (id: number, payload: typeof updatePayload) => {
			const user = users.find((entry) => entry.id === id);
			return user
				? ServiceResponseBuilder.success("User updated", { ...user, ...payload })
				: ServiceResponseBuilder.failure("User not found", null, StatusCodes.NOT_FOUND);
		});
		(userService.delete as Mock).mockImplementation(async (id: number) => {
			const user = users.find((entry) => entry.id === id);
			return user
				? ServiceResponseBuilder.success("User deleted", user)
				: ServiceResponseBuilder.failure("User not found", null, StatusCodes.NOT_FOUND);
		});
	});

	describe("GET /users", () => {
		it("should return a list of users", async () => {
			// Act
			const response = await request(app).get("/users");
			const responseBody: ServiceResponse<User[]> = response.body;

			// Assert
			expect(response.statusCode).toEqual(StatusCodes.OK);
			expect(responseBody.success).toBeTruthy();
			expect(responseBody.message).toContain("Users found");
			expect(responseBody.responseObject.length).toEqual(users.length);
			responseBody.responseObject.forEach((user, index) => compareUsers(users[index] as User, user));
		});
	});

	describe("GET /users/:id", () => {
		it("should return a user for a valid ID", async () => {
			// Arrange
			const testId = 1;
			const expectedUser = users.find((user) => user.id === testId) as User;

			// Act
			const response = await request(app).get(`/users/${testId}`);
			const responseBody: ServiceResponse<User> = response.body;

			// Assert
			expect(response.statusCode).toEqual(StatusCodes.OK);
			expect(responseBody.success).toBeTruthy();
			expect(responseBody.message).toContain("User found");
			if (!expectedUser) throw new Error("Invalid test data: expectedUser is undefined");
			compareUsers(expectedUser, responseBody.responseObject);
		});

		it("should return a not found error for non-existent ID", async () => {
			// Arrange
			const testId = Number.MAX_SAFE_INTEGER;

			// Act
			const response = await request(app).get(`/users/${testId}`);
			const responseBody: ServiceResponse = response.body;

			// Assert
			expect(response.statusCode).toEqual(StatusCodes.NOT_FOUND);
			expect(responseBody.success).toBeFalsy();
			expect(responseBody.message).toContain("User not found");
			expect(responseBody.responseObject).toBeNull();
		});

		it("should return a bad request for invalid ID format", async () => {
			// Act
			const invalidInput = "abc";
			const response = await request(app).get(`/users/${invalidInput}`);
			const responseBody: ServiceResponse = response.body;

			// Assert
			expect(response.statusCode).toEqual(StatusCodes.BAD_REQUEST);
			expect(responseBody.success).toBeFalsy();
			expect(responseBody.message).toContain("Invalid input");
			expect(responseBody.responseObject).toBeNull();
		});
	});

	describe("POST /users", () => {
		it("should create a user", async () => {
			const response = await request(app).post("/users").send(createPayload);
			const responseBody: ServiceResponse<User> = response.body;

			expect(response.statusCode).toEqual(StatusCodes.CREATED);
			expect(responseBody.success).toBeTruthy();
			expect(responseBody.message).toContain("User created");
			compareUsers(createdUser, responseBody.responseObject);
		});

		it("should return a bad request for invalid payload", async () => {
			const response = await request(app).post("/users").send({ name: "", email: "nope", age: -1 });
			const responseBody: ServiceResponse = response.body;

			expect(response.statusCode).toEqual(StatusCodes.BAD_REQUEST);
			expect(responseBody.success).toBeFalsy();
			expect(responseBody.message).toContain("Invalid input");
		});
	});

	describe("PUT /users/:id", () => {
		it("should update a user", async () => {
			const response = await request(app).put("/users/1").send(updatePayload);
			const responseBody: ServiceResponse<User> = response.body;

			expect(response.statusCode).toEqual(StatusCodes.OK);
			expect(responseBody.success).toBeTruthy();
			expect(responseBody.message).toContain("User updated");
			compareUsers({ ...users[0], ...updatePayload }, responseBody.responseObject);
		});

		it("should return not found for missing user", async () => {
			const response = await request(app).put("/users/999").send(updatePayload);
			const responseBody: ServiceResponse = response.body;

			expect(response.statusCode).toEqual(StatusCodes.NOT_FOUND);
			expect(responseBody.success).toBeFalsy();
			expect(responseBody.message).toContain("User not found");
		});
	});

	describe("DELETE /users/:id", () => {
		it("should delete a user", async () => {
			const response = await request(app).delete("/users/1");
			const responseBody: ServiceResponse<User> = response.body;

			expect(response.statusCode).toEqual(StatusCodes.OK);
			expect(responseBody.success).toBeTruthy();
			expect(responseBody.message).toContain("User deleted");
			compareUsers(users[0] as User, responseBody.responseObject);
		});

		it("should return not found for missing user", async () => {
			const response = await request(app).delete("/users/999");
			const responseBody: ServiceResponse = response.body;

			expect(response.statusCode).toEqual(StatusCodes.NOT_FOUND);
			expect(responseBody.success).toBeFalsy();
			expect(responseBody.message).toContain("User not found");
		});
	});
});

function compareUsers(mockUser: User, responseUser: User) {
	if (!mockUser || !responseUser) {
		throw new Error("Invalid test data: mockUser or responseUser is undefined");
	}

	expect(responseUser.id).toEqual(mockUser.id);
	expect(responseUser.name).toEqual(mockUser.name);
	expect(responseUser.email).toEqual(mockUser.email);
	expect(responseUser.age).toEqual(mockUser.age);
	expect(new Date(responseUser.createdAt)).toEqual(mockUser.createdAt);
	expect(new Date(responseUser.updatedAt)).toEqual(mockUser.updatedAt);
}
