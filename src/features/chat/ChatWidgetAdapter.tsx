import { lazy, Suspense, useEffect } from "react";
import { useChatCommands } from "./ChatProvider";

const LegacyChatWidget = lazy(() =>
  import("../../components/portfolio/ChatWidget").then((mod) => ({
    default: mod.ChatWidget,
  })),
);

const OPEN_SELECTOR = '[aria-label^="Ask me about my work"]';
const CLOSE_SELECTOR = '[aria-label="Close chat"]';

/**
 * Transitional adapter for the existing chat UI.
 *
 * The portfolio now talks to chat through a feature-level command API. The
 * legacy widget remains visually untouched while its internal state is moved
 * behind this boundary. This lets other features call `useChat().openChat()`
 * without importing or knowing about ChatWidget.
 */
export function ChatWidgetAdapter() {
  const { openRequest, closeRequest } = useChatCommands();

  useEffect(() => {
    if (openRequest === 0) return;

    const button = document.querySelector<HTMLButtonElement>(OPEN_SELECTOR);
    button?.click();
  }, [openRequest]);

  useEffect(() => {
    if (closeRequest === 0) return;

    const button = document.querySelector<HTMLButtonElement>(CLOSE_SELECTOR);
    button?.click();
  }, [closeRequest]);

  return (
    <Suspense fallback={null}>
      <LegacyChatWidget />
    </Suspense>
  );
}
