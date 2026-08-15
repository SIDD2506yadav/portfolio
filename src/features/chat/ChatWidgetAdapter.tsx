import { lazy, Suspense } from "react";

const ChatWidget = lazy(() =>
  import("./components/ChatWidget").then((module) => ({
    default: module.ChatWidget,
  })),
);

export function ChatWidgetAdapter() {
  return (
    <Suspense fallback={null}>
      <ChatWidget />
    </Suspense>
  );
}
