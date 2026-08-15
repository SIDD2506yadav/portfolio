import type { ButtonHTMLAttributes, ReactNode } from "react";
import { useChat } from "../ChatProvider";
import type { ChatOpenOptions } from "../types";

type ChatTriggerProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  chatOptions?: ChatOpenOptions;
};

/** Reusable trigger for opening the portfolio assistant from any feature. */
export function ChatTrigger({ children, onClick, chatOptions, ...props }: ChatTriggerProps) {
  const { openChat } = useChat();

  return (
    <button
      {...props}
      type={props.type ?? "button"}
      onClick={(event) => {
        openChat(chatOptions);
        onClick?.(event);
      }}
    >
      {children}
    </button>
  );
}
