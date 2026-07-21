import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { isValidSessionToken, ADMIN_COOKIE_NAME } from "@/lib/adminAuth";
import { listMessages } from "@/lib/db";
import MessagesTable from "@/components/MessagesTable";
import LogoutButton from "@/components/LogoutButton";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export default async function AdminMessagesPage() {
  const token = cookies().get(ADMIN_COOKIE_NAME)?.value;
  if (!isValidSessionToken(token)) {
    redirect("/admin/login");
  }

  const messages = await listMessages();

  return (
    <main className="min-h-screen bg-surface bg-grid-pattern bg-[length:32px_32px] px-4 py-12 sm:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-ink">Contact Messages</h1>
            <p className="text-sm text-muted">
              {messages.length} message{messages.length === 1 ? "" : "s"} submitted through your portfolio's contact form.
            </p>
          </div>
          <LogoutButton />
        </div>

        <MessagesTable initialMessages={JSON.parse(JSON.stringify(messages))} />
      </div>
    </main>
  );
}
