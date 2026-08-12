"use client";

import { useSearchParams } from "next/navigation";
import { Chat } from "@/components/Chat";
import { Suspense } from "react";

function ChatContent() {
  const searchParams = useSearchParams();
  const context = searchParams.get("context") || undefined;

  return (
    <div className="mx-auto max-w-4xl py-6 px-4">
      <div className="mb-8">
        <h1 className="font-display text-3xl font-bold text-ink">
          Fluenza Chat
        </h1>
        <p className="mt-2 text-ink/60">
          Chat, speak, and learn German with your personal AI assistant.
        </p>
      </div>

      <Chat initialContext={context} />
    </div>
  );
}

export default function ChatPage() {
  return (
    <Suspense>
      <ChatContent />
    </Suspense>
  );
}
