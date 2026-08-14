export function Footer() {
  return (
    <footer className="border-t border-line px-5 py-6 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col justify-between gap-2 font-mono text-[10px] uppercase tracking-[0.13em] text-mist sm:flex-row">
        <span>© {new Date().getFullYear()} Siddhartha</span>
        <span>Designed & built for the web</span>
      </div>
    </footer>
  );
}
