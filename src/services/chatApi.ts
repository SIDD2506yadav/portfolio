import type { ChatMessage } from "@/types/chat";

type ChatApiResponse = { reply?: string; error?: string };

export class ChatApiError extends Error {
  status: number;
  constructor(message: string, status: number) {
    super(message);
    this.name = "ChatApiError";
    this.status = status;
  }
}

export async function sendChatMessage(
  messages: ChatMessage[],
): Promise<string> {
  const response = await fetch("/api/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ messages }),
  });

  let data: ChatApiResponse = {};
  try {
    data = (await response.json()) as ChatApiResponse;
  } catch {
    throw new ChatApiError(
      "The server returned an invalid response.",
      response.status,
    );
  }

  if (!response.ok)
    throw new ChatApiError(
      data.error || "Unable to get a response right now.",
      response.status,
    );
  if (!data.reply)
    throw new ChatApiError(
      "The assistant returned an empty response.",
      response.status,
    );
  return data.reply;
}
