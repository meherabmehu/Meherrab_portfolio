/**
 * Tiny, dependency-light data layer for the contact-form "messages" table.
 *
 * - Local dev (DATABASE_URL="file:...")  → Node's built-in SQLite (node:sqlite,
 *   stable in Node 22.5+). Zero extra packages, zero setup.
 * - Production (DATABASE_URL="postgresql://...") → the `pg` driver, pure
 *   JavaScript, no native build step. Point it at any hosted Postgres
 *   (Neon, Supabase, Vercel Postgres, etc.) — see README.md.
 *
 * Both branches expose the same functions below, so the rest of the app
 * never needs to know which database is actually in use.
 */
import path from "node:path";
import { Pool } from "pg";

export type Message = {
  id: number;
  name: string;
  email: string;
  subject: string | null;
  message: string;
  createdAt: string;
  read: boolean;
};

const DATABASE_URL = process.env.DATABASE_URL || "file:./dev.db";
const IS_POSTGRES = DATABASE_URL.startsWith("postgres://") || DATABASE_URL.startsWith("postgresql://");

// ---------------------------------------------------------------------------
// SQLite branch (local development)
// ---------------------------------------------------------------------------
let sqliteDb: import("node:sqlite").DatabaseSync | null = null;

function getSqlite() {
  if (sqliteDb) return sqliteDb;
  // Lazily required so this line never executes (and node:sqlite never needs
  // to exist) when the app is running against Postgres in production.
  const { DatabaseSync } = require("node:sqlite") as typeof import("node:sqlite");
  const filePath = DATABASE_URL.replace(/^file:/, "");
  sqliteDb = new DatabaseSync(path.isAbsolute(filePath) ? filePath : path.resolve(process.cwd(), filePath));
  sqliteDb.exec(`
    CREATE TABLE IF NOT EXISTS messages (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      subject TEXT,
      message TEXT NOT NULL,
      createdAt TEXT NOT NULL DEFAULT (datetime('now')),
      read INTEGER NOT NULL DEFAULT 0
    )
  `);
  return sqliteDb;
}

// ---------------------------------------------------------------------------
// Postgres branch (production)
// ---------------------------------------------------------------------------
let pgPool: Pool | null = null;
let pgReady: Promise<void> | null = null;

function getPg() {
  if (!pgPool) {
    pgPool = new Pool({
      connectionString: DATABASE_URL,
      ssl: DATABASE_URL.includes("localhost") ? undefined : { rejectUnauthorized: false },
    });
  }
  if (!pgReady) {
    pgReady = pgPool.query(`
      CREATE TABLE IF NOT EXISTS messages (
        id SERIAL PRIMARY KEY,
        name TEXT NOT NULL,
        email TEXT NOT NULL,
        subject TEXT,
        message TEXT NOT NULL,
        created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
        read BOOLEAN NOT NULL DEFAULT false
      )
    `).then(() => undefined);
  }
  return { pool: pgPool, ready: pgReady };
}

// ---------------------------------------------------------------------------
// Public API
// ---------------------------------------------------------------------------
export async function createMessage(input: { name: string; email: string; subject: string | null; message: string }) {
  if (IS_POSTGRES) {
    const { pool, ready } = getPg();
    await ready;
    await pool.query(
      `INSERT INTO messages (name, email, subject, message) VALUES ($1, $2, $3, $4)`,
      [input.name, input.email, input.subject, input.message]
    );
    return;
  }
  const db = getSqlite();
  db.prepare(`INSERT INTO messages (name, email, subject, message) VALUES (?, ?, ?, ?)`).run(
    input.name, input.email, input.subject, input.message
  );
}

export async function listMessages(): Promise<Message[]> {
  if (IS_POSTGRES) {
    const { pool, ready } = getPg();
    await ready;
    const { rows } = await pool.query(
      `SELECT id, name, email, subject, message, created_at AS "createdAt", read FROM messages ORDER BY created_at DESC`
    );
    return rows.map((r) => ({ ...r, createdAt: new Date(r.createdAt).toISOString() }));
  }
  const db = getSqlite();
  const rows = db.prepare(`SELECT * FROM messages ORDER BY createdAt DESC`).all();
  return rows.map((r: any) => ({
    id: r.id,
    name: r.name,
    email: r.email,
    subject: r.subject,
    message: r.message,
    createdAt: r.createdAt,
    read: !!r.read,
  }));
}

export async function setMessageRead(id: number, read: boolean) {
  if (IS_POSTGRES) {
    const { pool, ready } = getPg();
    await ready;
    await pool.query(`UPDATE messages SET read = $1 WHERE id = $2`, [read, id]);
    return;
  }
  const db = getSqlite();
  db.prepare(`UPDATE messages SET read = ? WHERE id = ?`).run(read ? 1 : 0, id);
}

export async function deleteMessage(id: number) {
  if (IS_POSTGRES) {
    const { pool, ready } = getPg();
    await ready;
    await pool.query(`DELETE FROM messages WHERE id = $1`, [id]);
    return;
  }
  const db = getSqlite();
  db.prepare(`DELETE FROM messages WHERE id = ?`).run(id);
}
