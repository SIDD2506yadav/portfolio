import { createContext, useCallback, useMemo, useState } from "react";
import type { ReactNode } from "react";
import type { ChatController, ChatOpenOptions } from "@/types/chat";

export type ChatCommandState = {
  openRequest: number;
  closeRequest: number;
  openOptions?: ChatOpenOptions;
};

export const ChatContext = createContext<ChatController | null>(null);
export const ChatCommandContext = createContext<ChatCommandState | null>(null);

export function ChatProvider({ children }: { children: ReactNode }) {
  const [openRequest, setOpenRequest] = useState(0);
  const [closeRequest, setCloseRequest] = useState(0);
  const [openOptions, setOpenOptions] = useState<ChatOpenOptions | undefined>();

  const openChat = useCallback((options?: ChatOpenOptions) => {
    setOpenOptions(options);
    setOpenRequest((request) => request + 1);
  }, []);

  const closeChat = useCallback(() => setCloseRequest((request) => request + 1), []);
  const controller = useMemo<ChatController>(() => ({ openChat, closeChat }), [openChat, closeChat]);
  const commands = useMemo(() => ({ openRequest, closeRequest, openOptions }), [openRequest, closeRequest, openOptions]);

  return <ChatContext.Provider value={controller}><ChatCommandContext.Provider value={commands}>{children}</ChatCommandContext.Provider></ChatContext.Provider>;
}
