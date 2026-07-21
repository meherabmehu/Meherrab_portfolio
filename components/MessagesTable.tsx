"use client";

import { useState } from "react";
import { Mail, MailOpen, Trash2 } from "lucide-react";

type Message = {
  id: number;
  name: string;
  email: string;
  subject: string | null;
  message: string;
  createdAt: string;
  read: boolean;
};

export default function MessagesTable({ initialMessages }: { initialMessages: Message[] }) {
  const [messages, setMessages] = useState(initialMessages);

  async function act(id: number, action: "read" | "unread" | "delete") {
    await fetch("/api/admin/messages", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, action }),
    });
    if (action === "delete") {
      setMessages((m) => m.filter((msg) => msg.id !== id));
    } else {
      setMessages((m) => m.map((msg) => (msg.id === id ? { ...msg, read: action === "read" } : msg)));
    }
  }

  if (messages.length === 0) {
    return (
      <div className="rounded-2xl border border-border bg-card/60 p-10 text-center text-muted">
        No messages yet — submissions from your Contact form will appear here.
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {messages.map((m) => (
        <div
          key={m.id}
          className={`rounded-2xl border p-5 transition ${
            m.read ? "border-border bg-card/40" : "border-accent/40 bg-card/70"
          }`}
        >
          <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
            <div>
              <span className="font-medium text-ink">{m.name}</span>{" "}
              <a href={`mailto:${m.email}`} className="text-sm text-accent hover:underline">
                {m.email}
              </a>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs text-muted">{new Date(m.createdAt).toLocaleString()}</span>
              <button
                title={m.read ? "Mark unread" : "Mark read"}
                onClick={() => act(m.id, m.read ? "unread" : "read")}
                className="rounded-md p-1.5 text-muted transition hover:bg-surface2 hover:text-ink"
              >
                {m.read ? <MailOpen size={16} /> : <Mail size={16} />}
              </button>
              <button
                title="Delete"
                onClick={() => act(m.id, "delete")}
                className="rounded-md p-1.5 text-muted transition hover:bg-red-500/10 hover:text-red-400"
              >
                <Trash2 size={16} />
              </button>
            </div>
          </div>
          {m.subject && <p className="mb-1 text-sm font-medium text-ink/90">{m.subject}</p>}
          <p className="whitespace-pre-wrap text-sm text-muted">{m.message}</p>
        </div>
      ))}
    </div>
  );
}
