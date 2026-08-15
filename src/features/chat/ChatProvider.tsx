import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import type { ReactNode } from "react";
import type { ChatController, ChatOpenOptions } from "./types";

const ChatContext = createContext<ChatController | null>(null);

export function ChatProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [initialPrompt, setInitialPrompt] = useState<string | undefined>();

  const openChat = useCallback((options?: ChatOpenOptions) => {
    setInitialPrompt(options?.initialPrompt);
    setIsOpen(true);
  }, []);

  const closeChat = useCallback(() => {
    setIsOpen(false);
  }, []);

  const toggleChat = useCallback(() => {
    setIsOpen((open) => !open);
  }, []);

  const value = useMemo<ChatController>(
    () => ({ isOpen, initialPrompt, openChat, closeChat, toggleChat }),
    [isOpen, initialPrompt, openChat, closeChat, toggleChat],
  );

  return <ChatContext.Provider value={value}>{children}</ChatContext.Provider>;
}

export function useChat(): ChatController {
  const context = useContext(ChatContext);

  if (!context) {
    throw new Error("useChat must be used within a ChatProvider");
  }

  return context;
}
