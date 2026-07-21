// Minimal ambient types for Node's built-in `node:sqlite` module (stable
// as of Node 22.5+, used here only for local development). We declare our
// own small surface instead of depending on @types/node matching Node 22
// exactly, since the app only needs a handful of synchronous methods.
declare module "node:sqlite" {
  export class DatabaseSync {
    constructor(path: string, options?: Record<string, unknown>);
    exec(sql: string): void;
    prepare(sql: string): {
      run(...params: unknown[]): { lastInsertRowid: number | bigint; changes: number | bigint };
      get(...params: unknown[]): Record<string, unknown> | undefined;
      all(...params: unknown[]): Record<string, unknown>[];
    };
    close(): void;
  }
}
