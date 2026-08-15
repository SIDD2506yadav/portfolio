import type { ReactNode } from "react";
import { Footer } from "../components/portfolio/Footer";
import { Header } from "../components/portfolio/Header";

export function AppShell({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <main id="top" className="relative">
        {children}
      </main>
      <Footer />
    </>
  );
}
