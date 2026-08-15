import type { ButtonHTMLAttributes, ReactNode } from "react";
import { useChat } from "../ChatProvider";

type ChatTriggerProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
};

/** Reusable trigger for opening the portfolio assistant from any feature. */
export function ChatTrigger({ children, onClick, ...props }: ChatTriggerProps) {
  const { openChat } = useChat();

  return (
    <button
      {...props}
      type={props.type ?? "button"}
      onClick={(event) => {
        openChat();
        onClick?.(event);
      }}
    >
      {children}
    </button>
  );
}
