import { useState, type ReactNode } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import {
  ArrowDownRight,
  ArrowUpRight,
  Bot,
  Braces,
  CheckCircle2,
  Cloud,
  Code2,
  Download,
  Github,
  Layers3,
  Linkedin,
  Mail,
  Menu,
  Network,
  Server,
  X,
} from 'lucide-react'
import { Button } from './components/ui/button'

const navItems = ['About', 'Experience', 'Capabilities', 'Work', 'Contact'] as const

const buildOptions = [
  { id: 'ai-chatbot', label: 'AI chatbot', response: 'Embed a useful AI assistant with OpenAI APIs, a secure backend, and a polished chat experience.', stack: 'React · OpenAI APIs · Node.js' },
  { id: 'dashboard', label: 'Dashboard', response: 'Turn product or business data into a clear, fast dashboard people can use to make decisions.', stack: 'React · shadcn/ui · Data visualization' },
  { id: 'saas-app', label: 'SaaS app', response: 'Take a product from core UI and backend APIs through integrations, testing, and launch.', stack: 'React · Node.js · Express' },
  { id: 'api-integration', label: 'API integration', response: 'Connect services reliably with thoughtful API design, event workflows, and observability.', stack: 'Node.js · REST APIs · Cloud' },
] as const

const experience = [
  {
    role: 'Software Development Engineer 2',
    company: 'Devo',
    range: 'Mar 2024 — Present',
    highlights: [
      'Migrated a 50K+ line production codebase from React 16 to React 18 with zero downtime.',
      'Built visual automation workflows with JointJS for complex logic design.',
      'Reduced initial bundle size by 50% through Webpack optimization and lazy loading.',
    ],
  },
  {
    role: 'Founding Software Engineer',
    company: 'Lumino Labs',
    range: 'Sep 2023 — Feb 2024',
    highlights: [
      'Launched a Shopify app combining revenue optimization mini-apps and analytics dashboards.',
      'Partnered with founders to define requirements and deliver an MVP in under six weeks.',
      'Built analytics pipelines, data visualizations, caching, and API improvements.',
    ],
  },
  {
    role: 'Software Developer Intern',
    company: "Byju's Exam Prep",
    range: 'Jan 2023 — Sep 2023',
    highlights: [
      'Built a mock-test creation and assignment experience for teachers.',
      'Redesigned live class components, improving engagement and interaction by 30%.',
      'Delivered full-stack modules with React, Express, and GraphQL.',
    ],
  },
]

const capabilities = [
  { icon: Code2, label: 'Frontend systems', detail: 'React · TypeScript · shadcn/ui · Redux' },
  { icon: Server, label: 'Backend & APIs', detail: 'Node.js · Express · GraphQL · REST' },
  { icon: Bot, label: 'AI experiences', detail: 'OpenAI APIs · chatbots · workflow automation' },
  { icon: Layers3, label: 'Dashboards', detail: 'Analytics · data visualization · Shopify' },
  { icon: Cloud, label: 'Cloud & delivery', detail: 'AWS Lambda · Pub/Sub · CI/CD · Cloudflare' },
  { icon: Network, label: 'Data & integrations', detail: 'PostgreSQL · Redis · GA4 · webhooks' },
]

const projects = [
  {
    number: '01',
    title: 'Koflip',
    type: 'Real-estate investment platform',
    description: 'A Miami real-estate platform connecting homeowners and investors, with interactive deal tools, portfolio views, and a ChatGPT-powered AI assistant.',
    stack: ['React', 'shadcn/ui', 'Node.js', 'OpenAI APIs'],
    icon: Bot,
    url: 'https://koflip.com/',
    image: '/koflip-preview.png',
  },
  {
    number: '02',
    title: 'Analytics Command Center',
    type: 'Dashboard platform',
    description: 'A decision-ready dashboard for turning scattered business signals into one clear operating view.',
    stack: ['React', 'shadcn/ui', 'Express'],
    icon: Layers3,
  },
  {
    number: '03',
    title: 'Connected SaaS Workflow',
    type: 'End-to-end integration',
    description: 'A reliable web product that connects services, processes events, and moves work forward automatically.',
    stack: ['Node.js', 'APIs', 'Cloud'],
    icon: Braces,
  },
]

function Reveal({ children, className = '', delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const reducedMotion = useReducedMotion()
  return (
    <motion.div
      className={className}
      initial={reducedMotion ? false : { opacity: 0, y: 24 }}
      whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  )
}

function SectionIntro({ index, eyebrow, title, copy }: { index: string; eyebrow: string; title: string; copy?: string }) {
  return (
    <div className="mb-10 flex flex-col gap-4 md:mb-14 md:flex-row md:items-end md:justify-between">
      <div>
        <p className="eyebrow"><span>{index}</span>{eyebrow}</p>
        <h2 className="mt-4 max-w-xl font-display text-4xl font-medium tracking-[-0.055em] text-slate-50 sm:text-5xl">{title}</h2>
      </div>
      {copy && <p className="max-w-sm text-sm leading-6 text-mist">{copy}</p>}
    </div>
  )
}

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [selectedBuild, setSelectedBuild] = useState<(typeof buildOptions)[number]['id']>('ai-chatbot')
  const reducedMotion = useReducedMotion()

  const closeMenu = () => setIsMenuOpen(false)
  const activeBuild = buildOptions.find((option) => option.id === selectedBuild) ?? buildOptions[0]

  return (
    <div className="min-h-screen overflow-x-clip bg-ink text-slate-100 selection:bg-cyan selection:text-ink">
      <div className="pointer-events-none fixed inset-0 technical-grid opacity-50" aria-hidden="true" />
      <div className="pointer-events-none fixed left-1/2 top-0 h-[520px] w-[760px] -translate-x-1/2 rounded-full bg-cyan/10 blur-[150px]" aria-hidden="true" />

      <header className="sticky top-0 z-50 border-b border-line/70 bg-ink/75 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
          <a href="#top" className="font-display text-lg font-semibold tracking-[-0.06em] text-slate-50" onClick={closeMenu}>
            siddhartha<span className="text-cyan">.</span>
          </a>
          <nav className="hidden items-center gap-1 md:flex" aria-label="Main navigation">
            {navItems.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="nav-link">{item}</a>
            ))}
          </nav>
          <a className="hidden font-mono text-xs text-cyan hover:text-white sm:inline-flex" href="mailto:siddhartha.yadav.1042@gmail.com">
            say hello <ArrowUpRight className="ml-1 h-3.5 w-3.5" />
          </a>
          <Button variant="ghost" size="icon" className="md:hidden" aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'} onClick={() => setIsMenuOpen((open) => !open)}>
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </header>

      <motion.button
        aria-label="Close navigation menu"
        aria-hidden={!isMenuOpen}
        tabIndex={isMenuOpen ? 0 : -1}
        className="fixed inset-0 z-[60] cursor-default bg-ink/75 backdrop-blur-[2px] md:hidden"
        initial={false}
        animate={{ opacity: isMenuOpen ? 1 : 0, pointerEvents: isMenuOpen ? 'auto' : 'none' }}
        transition={{ duration: 0.2 }}
        onClick={closeMenu}
      />
      <motion.nav
        aria-label="Mobile navigation"
        aria-hidden={!isMenuOpen}
        className="fixed right-0 top-0 z-[70] flex h-[100dvh] min-h-[100svh] w-[min(82vw,360px)] flex-col border-l border-line bg-[#12151C] p-5 shadow-2xl shadow-black/50 md:hidden"
        initial={false}
        animate={{ x: isMenuOpen ? 0 : '100%' }}
        transition={{ type: 'spring', stiffness: 340, damping: 32 }}
      >
        <div className="flex items-center justify-between border-b border-line pb-5">
          <span className="font-display text-lg font-semibold tracking-[-0.06em] text-slate-50">menu<span className="text-cyan">.</span></span>
          <Button variant="ghost" size="icon" aria-label="Close navigation menu" onClick={closeMenu}><X className="h-5 w-5" /></Button>
        </div>
        <div className="mt-7 grid gap-1">
          {navItems.map((item, index) => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu} className="group flex items-center justify-between rounded-sm border-b border-line/70 py-4 font-display text-2xl tracking-[-0.045em] text-slate-200 transition-colors hover:text-cyan">
              <span>{item}</span><span className="font-mono text-[10px] text-mist transition-colors group-hover:text-cyan">0{index + 1}</span>
            </a>
          ))}
        </div>
        <a className="mt-auto inline-flex items-center gap-2 font-mono text-xs text-cyan hover:text-white" href="mailto:siddhartha.yadav.1042@gmail.com" onClick={closeMenu}>say hello <ArrowUpRight className="h-3.5 w-3.5" /></a>
      </motion.nav>

      <main id="top" className="relative">
        <section className="mx-auto grid min-h-[calc(100svh-4rem)] max-w-6xl items-center px-5 py-20 sm:px-8 md:py-28">
          <div className="grid items-end gap-12 lg:grid-cols-[1.25fr_0.75fr]">
            <Reveal>
              <p className="eyebrow"><span>01</span>Full-stack developer / Noida, India</p>
              <h1 className="mt-7 max-w-4xl font-display text-[clamp(3.5rem,9vw,7.25rem)] font-medium leading-[0.91] tracking-[-0.075em] text-slate-50">
                I build <span className="text-cyan">end-to-end</span> web products.
              </h1>
              <p className="mt-8 max-w-xl text-base leading-7 text-mist sm:text-lg">
                From polished React interfaces to scalable Node.js services and AI-powered experiences, I turn product requirements into dependable software.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <Button asChild><a href="#work">View my work <ArrowDownRight className="h-4 w-4" /></a></Button>
                <Button asChild variant="outline"><a href="#contact">Let’s work together <ArrowUpRight className="h-4 w-4" /></a></Button>
              </div>
            </Reveal>

            <Reveal delay={0.12} className="w-full lg:ml-auto lg:max-w-[360px]">
              <div className="relative overflow-hidden border border-line bg-panel/95 p-5 shadow-2xl shadow-black/30">
                <div className="flex items-center justify-between border-b border-line pb-4 font-mono text-[10px] uppercase tracking-[0.18em] text-mist"><span>project.config</span><span className="text-cyan">interactive</span></div>
                <div className="mt-5">
                  <p className="font-mono text-xs text-slate-300"><span className="mr-2 text-cyan">&gt;</span>what do you need built?</p>
                  <div className="mt-4 grid grid-cols-2 gap-2">
                    {buildOptions.map((option) => (
                      <button key={option.id} type="button" onClick={() => setSelectedBuild(option.id)} aria-pressed={selectedBuild === option.id} className={`border px-3 py-2 text-left font-mono text-[10px] uppercase tracking-[0.08em] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan ${selectedBuild === option.id ? 'border-cyan bg-cyan/10 text-cyan' : 'border-line bg-ink/60 text-mist hover:border-cyan/70 hover:text-slate-100'}`}>{option.label}</button>
                    ))}
                  </div>
                </div>
                <motion.div key={activeBuild.id} initial={reducedMotion ? false : { opacity: 0, y: 8 }} animate={reducedMotion ? undefined : { opacity: 1, y: 0 }} transition={{ duration: 0.22 }} className="mt-5 border border-line bg-ink/65 p-4">
                  <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.14em] text-cyan"><CheckCircle2 className="h-3.5 w-3.5" />build path selected</div>
                  <p className="mt-3 text-sm leading-6 text-slate-200">{activeBuild.response}</p>
                  <p className="mt-4 border-t border-line pt-3 font-mono text-[10px] text-mist">{activeBuild.stack}</p>
                </motion.div>
              </div>
            </Reveal>
          </div>
        </section>

        <section id="about" className="border-y border-line/70 bg-panel/30">
          <Reveal className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-28">
            <SectionIntro index="02" eyebrow="About" title="A practical product partner, from first brief to release." />
            <div className="grid gap-8 md:grid-cols-[1.05fr_0.95fr] md:gap-16">
              <p className="font-display text-2xl leading-[1.25] tracking-[-0.04em] text-slate-100 sm:text-3xl">I’m Siddhartha, a software engineer with 3+ years of experience building web applications that are fast, useful, and ready to scale.</p>
              <div className="space-y-5 text-base leading-7 text-mist"><p>I work across the product surface—shaping a thoughtful frontend, designing APIs and integrations, and getting the final experience into users’ hands.</p><p>That range lets me move from a rough requirement to a complete, maintainable product without losing sight of the details that make it feel great to use.</p></div>
            </div>
          </Reveal>
        </section>

        <section id="experience" className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-28">
          <Reveal><SectionIntro index="03" eyebrow="Experience" title="Built in the real world." copy="Product work shaped by scale, speed, and the people who use it." /></Reveal>
          <div className="divide-y divide-line border-y border-line">
            {experience.map((job, index) => (
              <Reveal key={job.company} delay={index * 0.08}>
                <article className="grid gap-6 py-8 md:grid-cols-[0.8fr_1.4fr] md:py-10">
                  <div><p className="font-display text-xl tracking-[-0.03em] text-slate-100">{job.role}</p><p className="mt-1 text-sm text-cyan">{job.company}</p><p className="mt-4 font-mono text-[11px] uppercase tracking-[0.12em] text-mist">{job.range}</p></div>
                  <ul className="space-y-3">{job.highlights.map((highlight) => <li key={highlight} className="flex gap-3 text-sm leading-6 text-mist"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan" />{highlight}</li>)}</ul>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="capabilities" className="border-y border-line/70 bg-panel/30">
          <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-28">
            <Reveal><SectionIntro index="04" eyebrow="Capabilities" title="The tools behind the outcomes." copy="A focused stack for building complete product experiences." /></Reveal>
            <div className="grid border-l border-t border-line sm:grid-cols-2 lg:grid-cols-3">
              {capabilities.map(({ icon: Icon, label, detail }, index) => (
                <Reveal key={label} delay={index * 0.04} className="border-b border-r border-line">
                  <div className="group h-full p-6 transition-colors hover:bg-cyan/[0.035] sm:p-7"><Icon className="h-5 w-5 text-cyan transition-transform duration-300 group-hover:scale-110" strokeWidth={1.5} /><h3 className="mt-10 font-display text-xl tracking-[-0.035em] text-slate-100">{label}</h3><p className="mt-2 font-mono text-xs leading-5 text-mist">{detail}</p></div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="work" className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-28">
          <Reveal><SectionIntro index="05" eyebrow="Selected work" title="What I’m building." copy="A selection of product work, with deeper case studies on the way." /></Reveal>
          <div className="grid gap-4 lg:grid-cols-3">
            {projects.map((project, index) => {
              const Icon = project.icon
              return (
                <Reveal key={project.number} delay={index * 0.08}>
                  <motion.article whileHover={reducedMotion ? undefined : { y: -7 }} transition={{ type: 'spring', stiffness: 280, damping: 22 }} className="group relative flex min-h-[360px] flex-col overflow-hidden border border-line bg-panel/70 p-6 transition-colors hover:border-cyan/70 sm:p-7">
                    <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-cyan/0 blur-3xl transition-all duration-500 group-hover:bg-cyan/15" /><div className="relative flex items-start justify-between"><span className="font-mono text-xs text-cyan">{project.number}</span><Icon className="h-5 w-5 text-mist transition-colors group-hover:text-cyan" strokeWidth={1.5} /></div>
                    {project.image && <a href={project.url} target="_blank" rel="noreferrer" className="relative mt-5 block overflow-hidden border border-line focus-visible:outline-none"><img src={project.image} alt="Koflip website home page" className="aspect-[16/8.5] w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]" /></a>}
                    <div className="relative mt-auto"><p className="font-mono text-[10px] uppercase tracking-[0.16em] text-cyan">{project.type}</p><h3 className="mt-3 font-display text-3xl leading-none tracking-[-0.055em] text-slate-50">{project.title}</h3><p className="mt-4 text-sm leading-6 text-mist">{project.description}</p><div className="mt-6 flex flex-wrap gap-2">{project.stack.map((tech) => <span key={tech} className="border border-line px-2 py-1 font-mono text-[10px] text-slate-300">{tech}</span>)}</div></div>
                    <div className="relative mt-6 flex items-center justify-between border-t border-line pt-4">{project.url ? <a className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.12em] text-cyan transition-colors hover:text-white" href={project.url} target="_blank" rel="noreferrer">Visit live site <ArrowUpRight className="h-3.5 w-3.5" /></a> : <><span className="font-mono text-[10px] uppercase tracking-[0.12em] text-mist">Case study coming soon</span><ArrowUpRight className="h-4 w-4 text-cyan" /></>}</div>
                  </motion.article>
                </Reveal>
              )
            })}
          </div>
        </section>

        <section className="border-y border-line/70 bg-panel/30">
          <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-28">
            <Reveal><SectionIntro index="06" eyebrow="How I work" title="Clear process. Reliable delivery." /></Reveal>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {['Discover', 'Design', 'Build', 'Launch'].map((step, index) => <Reveal key={step} delay={index * 0.08}><div className="border-l border-line pl-5"><p className="font-mono text-xs text-cyan">0{index + 1}</p><h3 className="mt-6 font-display text-2xl tracking-[-0.04em] text-slate-100">{step}</h3><p className="mt-2 text-sm leading-6 text-mist">{['Clarify the problem, goals, and the people using it.', 'Shape a simple, usable solution and the technical path.', 'Build responsive interfaces, services, and integrations.', 'Test, refine, and ship a product ready for real use.'][index]}</p></div></Reveal>)}
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-28">
          <Reveal className="relative overflow-hidden border border-line bg-panel px-6 py-12 sm:px-10 sm:py-16"><div className="pointer-events-none absolute right-0 top-0 h-64 w-64 rounded-full bg-cyan/10 blur-[90px]" /><div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end"><div><p className="eyebrow"><span>07</span>Contact</p><h2 className="mt-5 max-w-3xl font-display text-5xl leading-[0.92] tracking-[-0.065em] text-slate-50 sm:text-6xl">Have a role or a product in mind?</h2><p className="mt-6 max-w-xl text-base leading-7 text-mist">I’m open to thoughtful engineering opportunities and product collaborations. Let’s make something useful.</p></div><div className="flex flex-col items-start gap-3"><Button asChild><a href="mailto:siddhartha.yadav.1042@gmail.com">Start a conversation <Mail className="h-4 w-4" /></a></Button><Button asChild variant="outline"><a href="/Resume.pdf" download="Resume.pdf">Download Resume <Download className="h-4 w-4" /></a></Button></div></div><div className="relative mt-12 flex flex-wrap gap-x-6 gap-y-3 border-t border-line pt-5"><a className="contact-link" href="https://github.com/SIDD2506yadav" target="_blank" rel="noreferrer"><Github className="h-4 w-4" /> GitHub <ArrowUpRight className="h-3.5 w-3.5" /></a><a className="contact-link" href="https://www.linkedin.com/in/sidyadav2506/" target="_blank" rel="noreferrer"><Linkedin className="h-4 w-4" /> LinkedIn <ArrowUpRight className="h-3.5 w-3.5" /></a><a className="contact-link" href="mailto:siddhartha.yadav.1042@gmail.com"><Mail className="h-4 w-4" /> Email <ArrowUpRight className="h-3.5 w-3.5" /></a></div></Reveal>
        </section>
      </main>
      <footer className="border-t border-line px-5 py-6 sm:px-8"><div className="mx-auto flex max-w-6xl flex-col justify-between gap-2 font-mono text-[10px] uppercase tracking-[0.13em] text-mist sm:flex-row"><span>© {new Date().getFullYear()} Siddhartha</span><span>Designed & built for the web</span></div></footer>
    </div>
  )
}
