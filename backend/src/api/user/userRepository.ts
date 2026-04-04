import type { CreateUser, UpdateUser, User } from "@/api/user/userModel";
import { pool } from "@/database/postgres";

type UserRow = {
	id: number;
	name: string;
	email: string;
	age: number;
	createdAt: Date;
	updatedAt: Date;
};

export class UserRepository {
	async findAllAsync(): Promise<User[]> {
		const result = await pool.query<UserRow>('SELECT id, name, email, age, "createdAt", "updatedAt" FROM "User" ORDER BY id');
		return result.rows;
	}

	async findByIdAsync(id: number): Promise<User | null> {
		const result = await pool.query<UserRow>(
			'SELECT id, name, email, age, "createdAt", "updatedAt" FROM "User" WHERE id = $1',
			[id],
		);
		return result.rows[0] ?? null;
	}

	async createAsync(payload: CreateUser): Promise<User> {
		const result = await pool.query<UserRow>(
			`
				INSERT INTO "User" (name, email, age)
				VALUES ($1, $2, $3)
				RETURNING id, name, email, age, "createdAt", "updatedAt"
			`,
			[payload.name, payload.email, payload.age],
		);
		return result.rows[0] as User;
	}

	async updateAsync(id: number, payload: UpdateUser): Promise<User | null> {
		const result = await pool.query<UserRow>(
			`
				UPDATE "User"
				SET
					name = $2,
					email = $3,
					age = $4,
					"updatedAt" = NOW()
				WHERE id = $1
				RETURNING id, name, email, age, "createdAt", "updatedAt"
			`,
			[id, payload.name, payload.email, payload.age],
		);
		return result.rows[0] ?? null;
	}

	async deleteAsync(id: number): Promise<User | null> {
		const result = await pool.query<UserRow>(
			'DELETE FROM "User" WHERE id = $1 RETURNING id, name, email, age, "createdAt", "updatedAt"',
			[id],
		);
		return result.rows[0] ?? null;
	}
}
