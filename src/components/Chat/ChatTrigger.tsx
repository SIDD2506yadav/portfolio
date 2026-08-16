import type { ButtonHTMLAttributes, ReactNode } from "react";
import { useChat } from "@/hooks/useChat";
import type { ChatOpenOptions } from "@/types/chat";
import { Button } from "../ui/button";

type ChatTriggerProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  chatOptions?: ChatOpenOptions;
};

export function ChatTrigger({ children, onClick, chatOptions, ...props }: ChatTriggerProps) {
  const { openChat } = useChat();
  return <Button {...props} variant="ghost" type={props.type ?? "button"} onClick={(event) => { openChat(chatOptions); onClick?.(event); }}>{children}</Button>;
}
