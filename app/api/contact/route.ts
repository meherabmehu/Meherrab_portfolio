import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { createMessage } from "@/lib/db";

export const runtime = "nodejs";

const ContactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(120),
  email: z.string().trim().email("Enter a valid email").max(200),
  subject: z.string().trim().max(200).optional().or(z.literal("")),
  message: z.string().trim().min(5, "Message is too short").max(5000),
  // Honeypot field: real users never fill this in. Bots that auto-fill every
  // input will, so silently drop the submission if it has a value.
  company: z.string().max(0).optional().or(z.literal("")),
});

export async function POST(req: NextRequest) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const parsed = ContactSchema.safeParse(body);
  if (!parsed.success) {
    const firstIssue = parsed.error.issues[0]?.message ?? "Invalid input";
    return NextResponse.json({ error: firstIssue }, { status: 400 });
  }

  const { name, email, subject, message, company } = parsed.data;
  if (company) {
    // Honeypot tripped — pretend success so bots don't learn anything.
    return NextResponse.json({ ok: true });
  }

  try {
    await createMessage({ name, email, subject: subject || null, message });
  } catch (err) {
    console.error("Failed to save contact message:", err);
    return NextResponse.json(
      { error: "Something went wrong saving your message. Please try again shortly." },
      { status: 500 }
    );
  }

  return NextResponse.json({ ok: true });
}
