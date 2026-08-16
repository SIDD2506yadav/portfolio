import { useEffect, useRef, useState } from "react";
import type { FormEvent } from "react";
import { ArrowUpRight, Bot, Loader2, MessageCircle, Send, X } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { sendChatMessage } from "@/services/chatApi";
import { useChatCommands } from "@/hooks/useChat";
import type { ChatMessage } from "@/types/chat";
import { Markdown } from "@/components/Markdown";
import { Button } from "../ui/button";

type Message = ChatMessage & { id: number };

const INITIAL_MESSAGE: Message = { id: 1, role: "assistant", content: "Hi — I'm Siddhartha's portfolio assistant. Ask me about his experience, projects, technical skills, or how he can help with your next product." };
const SUGGESTIONS = ["What's your experience?", "What technologies do you use?", "Tell me about your projects", "Are you available for work?"];

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE]);
  const chatRef = useRef<HTMLDivElement | null>(null);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const { openRequest, closeRequest, openOptions } = useChatCommands();
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (openRequest === 0) return;
    setIsOpen(true);
    if (openOptions?.initialPrompt) setInput(openOptions.initialPrompt);
  }, [openRequest, openOptions]);

  useEffect(() => {
    if (closeRequest === 0) return;
    setIsOpen(false);
  }, [closeRequest]);

  useEffect(() => {
    if (!isOpen) return;
    const handleClickOutside = (event: PointerEvent) => {
      const target = event.target as Node;
      if (chatRef.current && !chatRef.current.contains(target)) setIsOpen(false);
    };
    document.addEventListener("pointerdown", handleClickOutside);
    return () => document.removeEventListener("pointerdown", handleClickOutside);
  }, [isOpen]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth" });
  }, [messages, isLoading, reducedMotion]);

  useEffect(() => {
    if (!isOpen) return;
    const timeout = window.setTimeout(() => inputRef.current?.focus(), 180);
    return () => window.clearTimeout(timeout);
  }, [isOpen]);

  async function sendMessage(message: string) {
    const trimmedMessage = message.trim();
    if (!trimmedMessage || isLoading) return;
    const userMessage: Message = { id: Date.now(), role: "user", content: trimmedMessage };
    setMessages((current) => [...current, userMessage]);
    setInput("");
    setIsLoading(true);
    try {
      const reply = await sendChatMessage([...messages, userMessage]);
      setMessages((current) => [...current, { id: Date.now() + 1, role: "assistant", content: reply }]);
    } catch (error) {
      console.error("Chat error:", error);
      const errorMessage = error instanceof Error ? error.message : "Sorry, I couldn't process that right now. Please try again.";
      setMessages((current) => [...current, { id: Date.now() + 1, role: "assistant", content: errorMessage }]);
    } finally {
      setIsLoading(false);
    }
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    void sendMessage(input);
  }

  function handleSuggestion(suggestion: string) {
    void sendMessage(suggestion);
  }

  return (
    <div className="fixed bottom-5 right-4 z-50 sm:bottom-7 sm:right-7">
      <AnimatePresence mode="wait">
        {isOpen ? (
          <motion.div ref={chatRef} key="chat-window" initial={reducedMotion ? false : { opacity: 0, y: 18, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={reducedMotion ? undefined : { opacity: 0, y: 18, scale: 0.98 }} transition={{ duration: 0.24, ease: "easeOut" }} className="mb-3 flex h-[min(620px,calc(100svh-120px))] w-[calc(100vw-2rem)] flex-col overflow-hidden border border-line bg-panel/95 shadow-2xl shadow-black/50 backdrop-blur-md sm:w-[460px]">
            <div className="relative border-b border-line">
              <div className="pointer-events-none absolute inset-0 technical-grid opacity-[0.18]" aria-hidden="true" />
              <div className="relative flex items-center justify-between px-5 py-4">
                <div className="flex items-center gap-3"><div className="relative flex h-10 w-10 items-center justify-center border border-cyan/40 bg-cyan/5"><Bot className="h-4 w-4 text-cyan" /><span className="absolute -right-1 -top-1 h-2 w-2 bg-cyan shadow-[0_0_8px_rgba(34,211,238,0.65)]" /></div><div><div className="flex items-center gap-2"><span className="font-mono text-[10px] uppercase tracking-[0.16em] text-cyan">AI assistant</span><span className="font-mono text-[9px] text-mist">/ online</span></div><p className="mt-1 text-sm text-slate-100">Ask me anything</p></div></div>
                <Button type="button" onClick={() => setIsOpen(false)} aria-label="Close chat" variant="ghost" className="h-8 w-8 rounded-none border border-transparent p-0 text-mist hover:border-line hover:text-slate-100"><X className="h-4 w-4" /></Button>
              </div>
              <div className="relative border-t border-line px-5 py-2.5"><div className="flex items-center justify-between"><span className="font-mono text-[9px] uppercase tracking-[0.12em] text-mist">portfolio.chat</span><span className="font-mono text-[9px] text-mist">OpenAI API</span></div></div>
            </div>
            <div className="relative min-h-0 flex-1 overflow-y-auto overscroll-contain" aria-live="polite">
              <div className="pointer-events-none absolute inset-0 technical-grid opacity-[0.10]" aria-hidden="true" />
              <div className="relative space-y-5 px-5 py-5">
                {messages.map((message) => <motion.div key={message.id} initial={reducedMotion ? false : { opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.2 }} className={message.role === "user" ? "flex justify-end" : "flex justify-start"}><div className={`max-w-[88%] border ${message.role === "user" ? "border-cyan/40 bg-cyan/5" : "border-line bg-ink/60"}`}><div className={`flex items-center justify-between border-b px-3 py-2 ${message.role === "user" ? "border-cyan/20" : "border-line"}`}><span className={`font-mono text-[9px] uppercase tracking-[0.14em] ${message.role === "user" ? "text-cyan" : "text-mist"}`}>{message.role === "user" ? "you" : "assistant"}</span><span className="font-mono text-[8px] text-mist/60">{message.role === "user" ? "INPUT" : "RESPONSE"}</span></div><div className="chat-markdown px-3.5 py-3 text-sm leading-6 text-slate-200"><Markdown content={message.content} /></div></div></motion.div>)}
                <AnimatePresence>{isLoading && <motion.div initial={reducedMotion ? false : { opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="flex justify-start"><div className="border border-line bg-ink/60"><div className="border-b border-line px-3 py-2"><span className="font-mono text-[9px] uppercase tracking-[0.14em] text-mist">assistant</span></div><div className="flex items-center gap-2 px-3.5 py-3 text-sm text-mist"><Loader2 className="h-3.5 w-3.5 animate-spin text-cyan" />Thinking...</div></div></motion.div>}</AnimatePresence>
                <div ref={messagesEndRef} />
              </div>
            </div>
            {messages.length === 1 && <div className="border-t border-line px-5 py-4"><div className="mb-3 flex items-center justify-between"><span className="font-mono text-[9px] uppercase tracking-[0.14em] text-mist">Suggested queries</span><span className="font-mono text-[8px] text-mist/60">04</span></div><div className="grid grid-cols-2 gap-2">{SUGGESTIONS.map((suggestion, index) => <Button key={suggestion} type="button" disabled={isLoading} onClick={() => handleSuggestion(suggestion)} variant="ghost" className="group h-auto w-full justify-start rounded-none border border-line bg-ink/50 px-3 py-2.5 text-left font-normal hover:border-cyan/60 hover:bg-cyan/5 disabled:cursor-not-allowed disabled:opacity-40"><div className="mb-1 flex w-full items-center justify-between"><span className="font-mono text-[8px] text-cyan/70">0{index + 1}</span><ArrowUpRight className="h-3 w-3 text-mist/50 transition-colors group-hover:text-cyan" /></div><span className="font-mono text-[9px] leading-4 text-mist transition-colors group-hover:text-slate-100">{suggestion}</span></Button>)}</div></div>}
            <form onSubmit={handleSubmit} className="border-t border-line bg-ink/40 p-4"><div className="flex items-center border border-line bg-ink transition-colors focus-within:border-cyan/60"><span className="pl-3 font-mono text-xs text-cyan">&gt;</span><input ref={inputRef} value={input} onChange={(event) => setInput(event.target.value)} maxLength={300} disabled={isLoading} placeholder="Ask about my work..." aria-label="Chat message" className="min-w-0 flex-1 bg-transparent px-2 py-3.5 text-sm text-slate-100 outline-none placeholder:text-mist/60 disabled:opacity-50" /><Button type="submit" disabled={!input.trim() || isLoading} aria-label="Send message" variant="ghost" className="mr-1.5 h-9 w-9 shrink-0 rounded-none border border-cyan/40 bg-cyan/5 p-0 text-cyan hover:border-cyan hover:bg-cyan/10 disabled:cursor-not-allowed disabled:opacity-30">{isLoading ? <Loader2 className="h-3.5 w-3.5 animate-spin" /> : <Send className="h-3.5 w-3.5" />}</Button></div><div className="mt-2 flex items-center justify-between"><span className="font-mono text-[8px] uppercase tracking-[0.1em] text-mist/60">AI-powered portfolio assistant</span><span className="font-mono text-[8px] text-mist/60">{input.length}/300</span></div></form>
          </motion.div>
        ) : (
          <Button asChild variant="ghost" className="group relative h-auto w-[260px] justify-start overflow-hidden rounded-none border border-line bg-panel/95 p-0 text-left shadow-2xl shadow-black/40 backdrop-blur-md transition-colors hover:border-cyan/50 sm:w-[300px]">
            <motion.button type="button" onClick={() => setIsOpen(true)} initial={reducedMotion ? false : { opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} whileHover={reducedMotion ? undefined : { y: -2 }} whileTap={reducedMotion ? undefined : { scale: 0.985 }} aria-label="Ask me about my work — open Siddhartha's AI assistant">
              <div className="pointer-events-none absolute inset-0 technical-grid opacity-[0.14]" aria-hidden="true" /><div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-cyan/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" aria-hidden="true" />
              <div className="relative w-full"><div className="flex items-center justify-between border-b border-line px-3.5 py-2"><div className="flex items-center gap-2"><span className="font-mono text-[8px] uppercase tracking-[0.15em] text-cyan">AI assistant</span><span className="font-mono text-[8px] text-mist">/ interactive</span></div><div className="flex items-center gap-1.5"><span className="h-1.5 w-1.5 bg-cyan shadow-[0_0_7px_rgba(34,211,238,0.7)]" /><span className="font-mono text-[8px] uppercase tracking-[0.1em] text-cyan">online</span></div></div><div className="flex items-center justify-between gap-3 px-3.5 py-3"><div className="flex min-w-0 items-center gap-2.5"><div className="flex h-8 w-8 shrink-0 items-center justify-center border border-line bg-ink/60 transition-colors group-hover:border-cyan/40"><MessageCircle className="h-3.5 w-3.5 text-cyan" /></div><div className="min-w-0"><p className="truncate text-xs font-medium text-slate-100">Ask me about my work</p><p className="mt-0.5 truncate font-mono text-[7px] uppercase tracking-[0.08em] text-mist">Experience · projects · skills</p></div></div><ArrowUpRight className="h-3.5 w-3.5 shrink-0 text-cyan transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></div><div className="border-t border-line px-3.5 py-1.5"><div className="flex items-center justify-between"><span className="font-mono text-[7px] text-mist/60">portfolio.chat</span><span className="font-mono text-[7px] text-mist/60">powered by OpenAI</span></div></div></div>
            </motion.button>
          </Button>
        )}
      </AnimatePresence>
    </div>
  );
}
