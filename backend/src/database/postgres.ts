import { Pool, type PoolConfig } from "pg";

import { env } from "@/common/utils/envConfig";

const seedUsers = [
	{ name: "Alice Johnson", email: "alice@example.com", age: 42 },
	{ name: "Robert Miles", email: "robert@example.com", age: 21 },
	{ name: "Maya Chen", email: "maya@example.com", age: 35 },
];

function getSslConfig() {
	return env.DATABASE_SSL ? { rejectUnauthorized: false } : undefined;
}

function getConnectionConfig(databaseName = env.DATABASE_NAME): PoolConfig {
	if (env.DATABASE_URL) {
		const databaseUrl = new URL(env.DATABASE_URL);
		databaseUrl.pathname = `/${databaseName}`;

		return {
			connectionString: databaseUrl.toString(),
			ssl: getSslConfig(),
		};
	}

	return {
		host: env.DATABASE_HOST,
		port: env.DATABASE_PORT,
		database: databaseName,
		user: env.DATABASE_USER,
		password: env.DATABASE_PASSWORD || undefined,
		ssl: getSslConfig(),
	};
}

export const pool = new Pool(getConnectionConfig());

export async function createDatabaseIfMissing() {
	const adminPool = new Pool(getConnectionConfig(env.DATABASE_ADMIN_DB));

	try {
		const existingDatabase = await adminPool.query<{ datname: string }>("SELECT datname FROM pg_database WHERE datname = $1", [
			env.DATABASE_NAME,
		]);

		if (existingDatabase.rowCount === 0) {
			await adminPool.query(`CREATE DATABASE "${env.DATABASE_NAME}"`);
		}
	} finally {
		await adminPool.end();
	}
}

export async function initializeDatabase() {
	await pool.query(`
		CREATE TABLE IF NOT EXISTS "User" (
			id SERIAL PRIMARY KEY,
			name VARCHAR(255) NOT NULL,
			email VARCHAR(255) NOT NULL UNIQUE,
			age INTEGER NOT NULL CHECK (age >= 0),
			"createdAt" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
			"updatedAt" TIMESTAMPTZ NOT NULL DEFAULT NOW()
		)
	`);
}

export async function seedUsersIfEmpty() {
	const existingUsers = await pool.query<{ count: string }>('SELECT COUNT(*) AS count FROM "User"');
	if (Number(existingUsers.rows[0]?.count ?? "0") > 0) {
		return;
	}

	const values = seedUsers.flatMap((user) => [user.name, user.email, user.age]);
	await pool.query(
		`
			INSERT INTO "User" (name, email, age)
			VALUES ($1, $2, $3), ($4, $5, $6), ($7, $8, $9)
		`,
		values,
	);
}
