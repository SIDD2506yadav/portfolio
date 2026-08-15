export type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

export type ChatController = {
  openChat: () => void;
  closeChat: () => void;
};
