import { Pool } from "pg";

/**
 * Seed the database with tables/data, if you like
 */
export async function seed(db: Pool): Promise<void> {
  console.log("Seeding the database");
  const result = await db.query(`SELECT TRUE AS message`);
  console.log("DB Query Result:", result.rows[0].message);
}
