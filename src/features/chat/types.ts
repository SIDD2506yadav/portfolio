export type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

export type ChatOpenOptions = {
  initialPrompt?: string;
};

export type ChatController = {
  openChat: (options?: ChatOpenOptions) => void;
  closeChat: () => void;
};
