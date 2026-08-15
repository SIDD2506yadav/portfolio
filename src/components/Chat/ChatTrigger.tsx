import type { ButtonHTMLAttributes, ReactNode } from "react";
import { useChat } from "@/hooks/useChat";
import type { ChatOpenOptions } from "@/types/chat";

type ChatTriggerProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  chatOptions?: ChatOpenOptions;
};

export function ChatTrigger({ children, onClick, chatOptions, ...props }: ChatTriggerProps) {
  const { openChat } = useChat();
  return <button {...props} type={props.type ?? "button"} onClick={(event) => { openChat(chatOptions); onClick?.(event); }}>{children}</button>;
}
