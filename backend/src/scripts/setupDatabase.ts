import { createDatabaseIfMissing, initializeDatabase, pool, seedUsersIfEmpty } from "@/database/postgres";

async function setupDatabase() {
	await createDatabaseIfMissing();
	await initializeDatabase();
	await seedUsersIfEmpty();
}

setupDatabase()
	.then(async () => {
		console.log("Database setup completed successfully.");
		await pool.end();
	})
	.catch(async (error) => {
		console.error("Database setup failed.", error);
		await pool.end();
		process.exit(1);
	});
