import { motion, useScroll, useTransform } from "framer-motion";
import { CursorGlow } from "@/components/CursorGlow";
import { ScrollProgress } from "@/components/ScrollProgress";
import { ChatWidget } from "@/components/Chat/ChatWidget";
import { ChatProvider } from "@/providers/ChatProvider";
import Home from "@/pages/Home";
import { AppShell } from "@/layout/AppShell";

export default function App() {
  const { scrollYProgress } = useScroll();
  const gridOpacity = useTransform(scrollYProgress, [0, 0.3], [0.5, 0]);

  return (
    <ChatProvider>
      <div className="min-h-screen overflow-x-clip bg-ink text-slate-100 selection:bg-cyan selection:text-ink">
        <motion.div
          className="pointer-events-none fixed inset-0 technical-grid"
          aria-hidden="true"
          style={{ opacity: gridOpacity }}
        />

        <div
          className="pointer-events-none fixed left-1/2 top-0 h-[520px] w-[760px] -translate-x-1/2 rounded-full bg-cyan/10 blur-[150px]"
          aria-hidden="true"
        />

        <CursorGlow />
        <ScrollProgress />

        <AppShell>
          <Home />
        </AppShell>

        <ChatWidget />
      </div>
    </ChatProvider>
  );
}
