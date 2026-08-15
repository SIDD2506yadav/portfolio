export type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

export type ChatController = {
  isOpen: boolean;
  openChat: () => void;
  closeChat: () => void;
  toggleChat: () => void;
};
