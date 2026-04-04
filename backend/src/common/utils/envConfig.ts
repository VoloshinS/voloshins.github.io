import dotenv from "dotenv";
import { z } from "zod";

dotenv.config();

const envSchema = z.object({
	NODE_ENV: z.enum(["development", "production", "test"]).default("production"),

	HOST: z.string().min(1).default("localhost"),

	PORT: z.coerce.number().int().positive().default(8080),

	CORS_ORIGIN: z.string().url().default("http://localhost:8080"),

	COMMON_RATE_LIMIT_MAX_REQUESTS: z.coerce.number().int().positive().default(1000),

	COMMON_RATE_LIMIT_WINDOW_MS: z.coerce.number().int().positive().default(1000),

	DATABASE_URL: z.string().url().optional(),

	DATABASE_HOST: z.string().min(1).default("127.0.0.1"),

	DATABASE_PORT: z.coerce.number().int().positive().default(5432),

	DATABASE_NAME: z.string().min(1).default("portfolio_db"),

	DATABASE_USER: z.string().min(1).default(process.env.USER ?? "postgres"),

	DATABASE_PASSWORD: z.string().default(""),

	DATABASE_ADMIN_DB: z.string().min(1).default("postgres"),

	DATABASE_SSL: z
		.string()
		.transform((value) => value === "true")
		.pipe(z.boolean())
		.default("false"),

	DATABASE_INIT_ON_STARTUP: z
		.string()
		.transform((value) => value === "true")
		.pipe(z.boolean())
		.default("true"),

	DATABASE_SEED_ON_STARTUP: z
		.string()
		.transform((value) => value === "true")
		.pipe(z.boolean())
		.default("false"),
});

const parsedEnv = envSchema.safeParse(process.env);

if (!parsedEnv.success) {
	console.error("❌ Invalid environment variables:", parsedEnv.error.format());
	throw new Error("Invalid environment variables");
}

export const env = {
	...parsedEnv.data,
	isDevelopment: parsedEnv.data.NODE_ENV === "development",
	isProduction: parsedEnv.data.NODE_ENV === "production",
	isTest: parsedEnv.data.NODE_ENV === "test",
};
