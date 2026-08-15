import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import type { ReactNode } from "react";
import type { ChatController, ChatOpenOptions } from "./types";

export type ChatCommandState = {
  openRequest: number;
  closeRequest: number;
  openOptions?: ChatOpenOptions;
};

const ChatContext = createContext<ChatController | null>(null);
const ChatCommandContext = createContext<ChatCommandState | null>(null);

export function ChatProvider({ children }: { children: ReactNode }) {
  const [openRequest, setOpenRequest] = useState(0);
  const [closeRequest, setCloseRequest] = useState(0);
  const [openOptions, setOpenOptions] = useState<ChatOpenOptions | undefined>();

  const openChat = useCallback((options?: ChatOpenOptions) => {
    setOpenOptions(options);
    setOpenRequest((request) => request + 1);
  }, []);

  const closeChat = useCallback(() => setCloseRequest((request) => request + 1), []);

  const controller = useMemo<ChatController>(
    () => ({ openChat, closeChat }),
    [openChat, closeChat],
  );

  const commands = useMemo(
    () => ({ openRequest, closeRequest, openOptions }),
    [openRequest, closeRequest, openOptions],
  );

  return (
    <ChatContext.Provider value={controller}>
      <ChatCommandContext.Provider value={commands}>
        {children}
      </ChatCommandContext.Provider>
    </ChatContext.Provider>
  );
}

export function useChat(): ChatController {
  const context = useContext(ChatContext);

  if (!context) {
    throw new Error("useChat must be used within a ChatProvider");
  }

  return context;
}

export function useChatCommands(): ChatCommandState {
  const context = useContext(ChatCommandContext);

  if (!context) {
    throw new Error("useChatCommands must be used within a ChatProvider");
  }

  return context;
}
