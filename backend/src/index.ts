import { env } from "@/common/utils/envConfig";
import { initializeDatabase, pool, seedUsersIfEmpty } from "@/database/postgres";
import { app, logger } from "@/server";

async function main() {
	try {
		if (env.DATABASE_INIT_ON_STARTUP) {
			await initializeDatabase();
		}

		if (env.DATABASE_SEED_ON_STARTUP) {
			await seedUsersIfEmpty();
		}

		const server = app.listen(env.PORT, () => {
			const { NODE_ENV, HOST, PORT } = env;
			logger.info(`Server (${NODE_ENV}) running on port http://${HOST}:${PORT}`);
		});

		const onCloseSignal = () => {
			logger.info("sigint received, shutting down");
			server.close(async () => {
				await pool.end();
				logger.info("server closed");
				process.exit();
			});
			setTimeout(() => process.exit(1), 10000).unref(); // Force shutdown after 10s
		};

		process.on("SIGINT", onCloseSignal);
		process.on("SIGTERM", onCloseSignal);
	} catch (error) {
		logger.error(error, "Failed to start the server");
		await pool.end();
		process.exit(1);
	}
}

void main();
