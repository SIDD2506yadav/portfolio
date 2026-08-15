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
    () => ({ openChat, closeChat, toggleChat }),
    [openChat, closeChat, toggleChat],
  );

  return (
    <ChatContext.Provider value={value}>
      <ChatStateBridge isOpen={isOpen} initialPrompt={initialPrompt} />
      {children}
    </ChatContext.Provider>
  );
}

/**
 * The legacy ChatWidget currently owns its visual state. This bridge exposes
 * the feature-level controller without coupling callers to that component.
 * The widget migration can consume this state directly in the next step.
 */
function ChatStateBridge({
  isOpen,
  initialPrompt,
}: {
  isOpen: boolean;
  initialPrompt?: string;
}) {
  if (typeof window !== "undefined") {
    window.__portfolioChat = { isOpen, initialPrompt };
  }

  return null;
}

export function useChat(): ChatController {
  const context = useContext(ChatContext);

  if (!context) {
    throw new Error("useChat must be used within a ChatProvider");
  }

  return context;
}
