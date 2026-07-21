import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { isValidSessionToken, ADMIN_COOKIE_NAME } from "@/lib/adminAuth";
import { setMessageRead, deleteMessage } from "@/lib/db";

export const runtime = "nodejs";

function requireAdmin() {
  const token = cookies().get(ADMIN_COOKIE_NAME)?.value;
  return isValidSessionToken(token);
}

// Mark a message read/unread, or delete it. Body: { id, action: "read" | "unread" | "delete" }
export async function PATCH(req: NextRequest) {
  if (!requireAdmin()) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const body = await req.json().catch(() => null);
  const id = Number(body?.id);
  const action = body?.action;
  if (!id || !["read", "unread", "delete"].includes(action)) {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  if (action === "delete") {
    await deleteMessage(id).catch(() => null);
  } else {
    await setMessageRead(id, action === "read").catch(() => null);
  }

  return NextResponse.json({ ok: true });
}
