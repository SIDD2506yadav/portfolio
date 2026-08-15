export type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

export type ChatOpenOptions = {
  initialPrompt?: string;
};

export type ChatController = {
  isOpen: boolean;
  initialPrompt?: string;
  openChat: (options?: ChatOpenOptions) => void;
  closeChat: () => void;
  toggleChat: () => void;
};
