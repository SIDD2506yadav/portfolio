import { ArrowUpRight, Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "../ui/button";
import { navItems } from "./data";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-line/70 bg-ink/75 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
          <a
            href="#top"
            className="font-display text-lg font-semibold tracking-[-0.06em] text-slate-50"
            onClick={closeMenu}
          >
            siddhartha<span className="text-cyan">.</span>
          </a>
          <nav
            className="hidden items-center gap-1 md:flex"
            aria-label="Main navigation"
          >
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="nav-link"
              >
                {item}
              </a>
            ))}
          </nav>
          <a
            className="hidden font-mono text-xs text-cyan hover:text-white sm:inline-flex"
            href="mailto:siddhartha.yadav.1042@gmail.com"
          >
            say hello <ArrowUpRight className="ml-1 h-3.5 w-3.5" />
          </a>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            aria-label={
              isMenuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            {isMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
      </header>
      <motion.button
        aria-label="Close navigation menu"
        aria-hidden={!isMenuOpen}
        tabIndex={isMenuOpen ? 0 : -1}
        className="fixed inset-0 z-[60] cursor-default bg-ink/75 backdrop-blur-[2px] md:hidden"
        initial={false}
        animate={{
          opacity: isMenuOpen ? 1 : 0,
          pointerEvents: isMenuOpen ? "auto" : "none",
        }}
        transition={{ duration: 0.2 }}
        onClick={closeMenu}
      />
      <motion.nav
        aria-label="Mobile navigation"
        aria-hidden={!isMenuOpen}
        className="fixed right-0 top-0 z-[70] flex h-[100dvh] min-h-[100svh] w-[min(82vw,360px)] flex-col border-l border-line bg-[#12151C] p-5 shadow-2xl shadow-black/50 md:hidden"
        initial={false}
        animate={{ x: isMenuOpen ? 0 : "100%" }}
        transition={{ type: "spring", stiffness: 340, damping: 32 }}
      >
        <div className="flex items-center justify-between border-b border-line pb-5">
          <span className="font-display text-lg font-semibold tracking-[-0.06em] text-slate-50">
            menu<span className="text-cyan">.</span>
          </span>
          <Button
            variant="ghost"
            size="icon"
            aria-label="Close navigation menu"
            onClick={closeMenu}
          >
            <X className="h-5 w-5" />
          </Button>
        </div>
        <div className="mt-7 grid gap-1">
          {navItems.map((item, index) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={closeMenu}
              className="group flex items-center justify-between rounded-sm border-b border-line/70 py-4 font-display text-2xl tracking-[-0.045em] text-slate-200 transition-colors hover:text-cyan"
            >
              <span>{item}</span>
              <span className="font-mono text-[10px] text-mist transition-colors group-hover:text-cyan">
                0{index + 1}
              </span>
            </a>
          ))}
        </div>
        <a
          className="mt-auto inline-flex items-center gap-2 font-mono text-xs text-cyan hover:text-white"
          href="mailto:siddhartha.yadav.1042@gmail.com"
          onClick={closeMenu}
        >
          say hello <ArrowUpRight className="h-3.5 w-3.5" />
        </a>
      </motion.nav>
    </>
  );
}
