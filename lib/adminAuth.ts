import crypto from "crypto";

const COOKIE_NAME = "admin_session";

function getSecret() {
  // Falls back to the admin password itself if no separate secret is set —
  // fine for a low-traffic personal portfolio, but you can set a distinct
  // ADMIN_SESSION_SECRET env var for a bit of extra separation.
  return process.env.ADMIN_SESSION_SECRET || process.env.ADMIN_PASSWORD || "dev-secret";
}

function sign(value: string) {
  return crypto.createHmac("sha256", getSecret()).update(value).digest("hex");
}

/** Builds the signed cookie value to set after a correct password. */
export function createSessionToken() {
  const payload = "admin-ok";
  return `${payload}.${sign(payload)}`;
}

/** Verifies a cookie value came from createSessionToken() with the current secret. */
export function isValidSessionToken(token: string | undefined | null): boolean {
  if (!token) return false;
  const [payload, sig] = token.split(".");
  if (!payload || !sig) return false;
  const expected = sign(payload);
  try {
    return crypto.timingSafeEqual(Buffer.from(sig), Buffer.from(expected));
  } catch {
    return false;
  }
}

export function checkPassword(candidate: string): boolean {
  const real = process.env.ADMIN_PASSWORD;
  if (!real) return false;
  const a = Buffer.from(candidate);
  const b = Buffer.from(real);
  if (a.length !== b.length) return false;
  return crypto.timingSafeEqual(a, b);
}

export const ADMIN_COOKIE_NAME = COOKIE_NAME;
