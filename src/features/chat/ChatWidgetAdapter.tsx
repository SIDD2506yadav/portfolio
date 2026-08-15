import { lazy, Suspense, useEffect } from "react";
import { useChatCommands } from "./ChatProvider";

const LegacyChatWidget = lazy(() =>
  import("../../components/portfolio/ChatWidget").then((mod) => ({
    default: mod.ChatWidget,
  })),
);

const OPEN_SELECTOR = '[aria-label^="Ask me about my work"]';
const CLOSE_SELECTOR = '[aria-label="Close chat"]';

function clickWhenAvailable(selector: string) {
  let attempts = 0;

  const tryClick = () => {
    const button = document.querySelector<HTMLButtonElement>(selector);

    if (button) {
      button.click();
      return;
    }

    attempts += 1;
    if (attempts < 30) {
      window.requestAnimationFrame(tryClick);
    }
  };

  window.requestAnimationFrame(tryClick);
}

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
    if (openRequest > 0) clickWhenAvailable(OPEN_SELECTOR);
  }, [openRequest]);

  useEffect(() => {
    if (closeRequest > 0) clickWhenAvailable(CLOSE_SELECTOR);
  }, [closeRequest]);

  return (
    <Suspense fallback={null}>
      <LegacyChatWidget />
    </Suspense>
  );
}
