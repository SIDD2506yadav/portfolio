import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export function Markdown({ content }: { content: string }) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        p: ({ children }) => (
          <p className="mb-2.5 last:mb-0 text-[13px] leading-6 text-slate-300">
            {children}
          </p>
        ),

        // text-slate-100 
        strong: ({ children }) => (
          <strong className="font-semibold text-cyan">{children}</strong>
        ),

        em: ({ children }) => <em className="text-slate-300">{children}</em>,

        h1: ({ children }) => (
          <h1 className="mb-3 mt-1 text-base font-semibold tracking-tight text-white">
            {children}
          </h1>
        ),

        h2: ({ children }) => (
          <h2 className="mb-2.5 mt-4 text-sm font-semibold uppercase tracking-[0.08em] text-cyan">
            {children}
          </h2>
        ),

        h3: ({ children }) => (
          <h3 className="mb-2 mt-3 text-[13px] font-semibold text-cyan">
            {children}
          </h3>
        ),

        ul: ({ children }) => (
          <ul className="my-2.5 space-y-1.5 pl-4 text-[13px] leading-5 text-slate-300 marker:text-cyan" style={{ listStyleType: "disc" }}>
            {children}
          </ul>
        ),

        ol: ({ children }) => (
          <ol className="my-2.5 list-decimal space-y-1.5 pl-5 text-[13px] leading-5 text-slate-300">
            {children}
          </ol>
        ),

        li: ({ children }) => (
          <li className="pl-1 marker:text-cyan">{children}</li>
        ),

        a: ({ href, children }) => (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="
          text-cyan
          underline
          decoration-cyan/30
          underline-offset-4
          transition-colors
          hover:text-white
          hover:decoration-cyan
        "
          >
            {children}
          </a>
        ),

        code: ({ children }) => (
          <code
            className="
          rounded
          border
          border-line
          bg-ink
          px-1.5
          py-0.5
          font-mono
          text-[11px]
          text-cyan
        "
          >
            {children}
          </code>
        ),

        pre: ({ children }) => (
          <pre
            className="
          my-3
          overflow-x-auto
          border
          border-line
          bg-ink/80
          p-3
          font-mono
          text-[11px]
          leading-5
          text-slate-300
        "
          >
            {children}
          </pre>
        ),

        blockquote: ({ children }) => (
          <blockquote
            className="
          my-3
          border-l-2
          border-cyan/40
          pl-3
          text-slate-400
        "
          >
            {children}
          </blockquote>
        ),

        hr: () => <hr className="my-4 border-0 border-t border-line" />,
      }}
    >
      {content}
    </ReactMarkdown>
  );
}
