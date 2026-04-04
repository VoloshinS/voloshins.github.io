import { StatusCodes } from "http-status-codes";
import type { Mock } from "vitest";

import type { CreateUser, UpdateUser, User } from "@/api/user/userModel";
import { UserRepository } from "@/api/user/userRepository";
import { UserService } from "@/api/user/userService";

vi.mock("@/api/user/userRepository");

describe("userService", () => {
	let userServiceInstance: UserService;
	let userRepositoryInstance: UserRepository;

	const mockUsers: User[] = [
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
	const createPayload: CreateUser = {
		name: "Charlie",
		email: "charlie@example.com",
		age: 30,
	};
	const updatePayload: UpdateUser = {
		name: "Alice Updated",
		email: "alice.updated@example.com",
		age: 43,
	};

	beforeEach(() => {
		userRepositoryInstance = new UserRepository();
		userServiceInstance = new UserService(userRepositoryInstance);
	});

	describe("findAll", () => {
		it("return all users", async () => {
			// Arrange
			(userRepositoryInstance.findAllAsync as Mock).mockReturnValue(mockUsers);

			// Act
			const result = await userServiceInstance.findAll();

			// Assert
			expect(result.statusCode).toEqual(StatusCodes.OK);
			expect(result.success).toBeTruthy();
			expect(result.message).equals("Users found");
			expect(result.responseObject).toEqual(mockUsers);
		});

		it("returns a not found error for no users found", async () => {
			// Arrange
			(userRepositoryInstance.findAllAsync as Mock).mockReturnValue(null);

			// Act
			const result = await userServiceInstance.findAll();

			// Assert
			expect(result.statusCode).toEqual(StatusCodes.NOT_FOUND);
			expect(result.success).toBeFalsy();
			expect(result.message).equals("No Users found");
			expect(result.responseObject).toBeNull();
		});

		it("handles errors for findAllAsync", async () => {
			// Arrange
			(userRepositoryInstance.findAllAsync as Mock).mockRejectedValue(new Error("Database error"));

			// Act
			const result = await userServiceInstance.findAll();

			// Assert
			expect(result.statusCode).toEqual(StatusCodes.INTERNAL_SERVER_ERROR);
			expect(result.success).toBeFalsy();
			expect(result.message).equals("An error occurred while retrieving users.");
			expect(result.responseObject).toBeNull();
		});
	});

	describe("findById", () => {
		it("returns a user for a valid ID", async () => {
			// Arrange
			const testId = 1;
			const mockUser = mockUsers.find((user) => user.id === testId);
			(userRepositoryInstance.findByIdAsync as Mock).mockReturnValue(mockUser);

			// Act
			const result = await userServiceInstance.findById(testId);

			// Assert
			expect(result.statusCode).toEqual(StatusCodes.OK);
			expect(result.success).toBeTruthy();
			expect(result.message).equals("User found");
			expect(result.responseObject).toEqual(mockUser);
		});

		it("handles errors for findByIdAsync", async () => {
			// Arrange
			const testId = 1;
			(userRepositoryInstance.findByIdAsync as Mock).mockRejectedValue(new Error("Database error"));

			// Act
			const result = await userServiceInstance.findById(testId);

			// Assert
			expect(result.statusCode).toEqual(StatusCodes.INTERNAL_SERVER_ERROR);
			expect(result.success).toBeFalsy();
			expect(result.message).equals("An error occurred while finding user.");
			expect(result.responseObject).toBeNull();
		});

		it("returns a not found error for non-existent ID", async () => {
			// Arrange
			const testId = 1;
			(userRepositoryInstance.findByIdAsync as Mock).mockReturnValue(null);

			// Act
			const result = await userServiceInstance.findById(testId);

			// Assert
			expect(result.statusCode).toEqual(StatusCodes.NOT_FOUND);
			expect(result.success).toBeFalsy();
			expect(result.message).equals("User not found");
			expect(result.responseObject).toBeNull();
		});
	});

	describe("create", () => {
		it("creates a user", async () => {
			const createdUser = { ...mockUsers[0], ...createPayload, id: 3 };
			(userRepositoryInstance.createAsync as Mock).mockResolvedValue(createdUser);

			const result = await userServiceInstance.create(createPayload);

			expect(result.statusCode).toEqual(StatusCodes.CREATED);
			expect(result.success).toBeTruthy();
			expect(result.message).equals("User created");
			expect(result.responseObject).toEqual(createdUser);
		});

		it("handles errors for createAsync", async () => {
			(userRepositoryInstance.createAsync as Mock).mockRejectedValue(new Error("Database error"));

			const result = await userServiceInstance.create(createPayload);

			expect(result.statusCode).toEqual(StatusCodes.INTERNAL_SERVER_ERROR);
			expect(result.success).toBeFalsy();
			expect(result.message).equals("An error occurred while creating user.");
			expect(result.responseObject).toBeNull();
		});
	});

	describe("update", () => {
		it("updates an existing user", async () => {
			const updatedUser = { ...mockUsers[0], ...updatePayload };
			(userRepositoryInstance.updateAsync as Mock).mockResolvedValue(updatedUser);

			const result = await userServiceInstance.update(1, updatePayload);

			expect(result.statusCode).toEqual(StatusCodes.OK);
			expect(result.success).toBeTruthy();
			expect(result.message).equals("User updated");
			expect(result.responseObject).toEqual(updatedUser);
		});

		it("returns not found when updating a missing user", async () => {
			(userRepositoryInstance.updateAsync as Mock).mockResolvedValue(null);

			const result = await userServiceInstance.update(999, updatePayload);

			expect(result.statusCode).toEqual(StatusCodes.NOT_FOUND);
			expect(result.success).toBeFalsy();
			expect(result.message).equals("User not found");
			expect(result.responseObject).toBeNull();
		});

		it("handles errors for updateAsync", async () => {
			(userRepositoryInstance.updateAsync as Mock).mockRejectedValue(new Error("Database error"));

			const result = await userServiceInstance.update(1, updatePayload);

			expect(result.statusCode).toEqual(StatusCodes.INTERNAL_SERVER_ERROR);
			expect(result.success).toBeFalsy();
			expect(result.message).equals("An error occurred while updating user.");
			expect(result.responseObject).toBeNull();
		});
	});

	describe("delete", () => {
		it("deletes an existing user", async () => {
			(userRepositoryInstance.deleteAsync as Mock).mockResolvedValue(mockUsers[0]);

			const result = await userServiceInstance.delete(1);

			expect(result.statusCode).toEqual(StatusCodes.OK);
			expect(result.success).toBeTruthy();
			expect(result.message).equals("User deleted");
			expect(result.responseObject).toEqual(mockUsers[0]);
		});

		it("returns not found when deleting a missing user", async () => {
			(userRepositoryInstance.deleteAsync as Mock).mockResolvedValue(null);

			const result = await userServiceInstance.delete(999);

			expect(result.statusCode).toEqual(StatusCodes.NOT_FOUND);
			expect(result.success).toBeFalsy();
			expect(result.message).equals("User not found");
			expect(result.responseObject).toBeNull();
		});

		it("handles errors for deleteAsync", async () => {
			(userRepositoryInstance.deleteAsync as Mock).mockRejectedValue(new Error("Database error"));

			const result = await userServiceInstance.delete(1);

			expect(result.statusCode).toEqual(StatusCodes.INTERNAL_SERVER_ERROR);
			expect(result.success).toBeFalsy();
			expect(result.message).equals("An error occurred while deleting user.");
			expect(result.responseObject).toBeNull();
		});
	});
});
