import pg from "pg";

let db: pg.Pool | null = null;

export async function getDB(): Promise<pg.Pool> {
  if (!db) {
    // Create a new pool instance
    db = new pg.Pool({
      user: process.env.POSTGRES_USER,
      host: process.env.POSTGRES_HOST ?? "127.0.0.1",
      database: process.env.POSTGRES_DB,
      password: process.env.POSTGRES_PASSWORD,
      port: Number.parseInt(process.env.POSTGRES_PORT ?? "") ?? 5432,
    });
  }

  return db;
}
