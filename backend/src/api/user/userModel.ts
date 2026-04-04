import { extendZodWithOpenApi } from "@asteasolutions/zod-to-openapi";
import { z } from "zod";

import { commonValidations } from "@/common/utils/commonValidation";

extendZodWithOpenApi(z);

export const UserInputSchema = z.object({
	name: z.string().trim().min(1).max(255),
	email: z.string().trim().email().max(255),
	age: z.number().int().min(0),
});

export type User = z.infer<typeof UserSchema>;
export type UserInput = z.infer<typeof UserInputSchema>;
export type CreateUser = UserInput;
export type UpdateUser = UserInput;

export const UserSchema = z.object({
	id: z.number(),
	name: z.string(),
	email: z.string().email(),
	age: z.number(),
	createdAt: z.date(),
	updatedAt: z.date(),
});

// Input Validation for 'GET users/:id' endpoint
export const GetUserSchema = z.object({
	params: z.object({ id: commonValidations.id }),
});

export const CreateUserSchema = z.object({
	body: UserInputSchema,
});

export const UpdateUserSchema = z.object({
	params: z.object({ id: commonValidations.id }),
	body: UserInputSchema,
});

export const DeleteUserSchema = z.object({
	params: z.object({ id: commonValidations.id }),
});
