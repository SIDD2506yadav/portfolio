import { useContext } from "react";
import { ChatCommandContext, ChatContext } from "@/providers/ChatProvider";
import type { ChatController } from "@/types/chat";
import type { ChatCommandState } from "@/providers/ChatProvider";

export function useChat(): ChatController {
  const context = useContext(ChatContext);
  if (!context) throw new Error("useChat must be used within a ChatProvider");
  return context;
}

export function useChatCommands(): ChatCommandState {
  const context = useContext(ChatCommandContext);
  if (!context) throw new Error("useChatCommands must be used within a ChatProvider");
  return context;
}
