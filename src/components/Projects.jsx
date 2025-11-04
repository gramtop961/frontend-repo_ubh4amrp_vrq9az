import { ExternalLink, Github, Code2 } from 'lucide-react';

const projects = [
  {
    title: 'AlgoViz — Interactive Algorithms',
    description:
      'Visualize pathfinding and sorting algorithms in real time with adjustable parameters and performance metrics.',
    tech: ['React', 'TypeScript', 'D3.js'],
    links: { github: '#', demo: '#' },
  },
  {
    title: 'DevNotes — Markdown Knowledge Base',
    description:
      'A fast, local‑first note app with full‑text search, tagging, and keyboard‑first navigation.',
    tech: ['Vite', 'IndexedDB', 'Tailwind'],
    links: { github: '#', demo: '#' },
  },
  {
    title: 'CloudQueue — Distributed Job Runner',
    description:
      'Horizontally scalable job queue with retry logic, dead‑lettering, and observability dashboard.',
    tech: ['FastAPI', 'Redis', 'Docker'],
    links: { github: '#', demo: '#' },
  },
];

function TechPill({ label }) {
  return (
    <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] text-white/80">
      {label}
    </span>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-20 text-white">
      <div className="absolute inset-0 -z-0 bg-[radial-gradient(ellipse_at_top,rgba(56,189,248,0.12),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
            <Code2 className="h-3.5 w-3.5 text-sky-300" /> Selected Work
          </div>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">Projects</h2>
          <p className="mt-2 text-white/70">
            A mix of systems, frontend, and tooling that highlights problem solving and polish.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article
              key={p.title}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.03] p-5"
            >
              <div className="absolute right-0 top-0 h-24 w-24 translate-x-10 -translate-y-10 rounded-full bg-cyan-400/20 blur-3xl transition-all group-hover:translate-x-6 group-hover:-translate-y-6" />

              <h3 className="text-lg font-semibold tracking-tight">{p.title}</h3>
              <p className="mt-2 text-sm text-white/70">{p.description}</p>

              <div className="mt-3 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <TechPill key={t} label={t} />
                ))}
              </div>

              <div className="mt-4 flex items-center gap-3">
                <a
                  href={p.links.github}
                  className="inline-flex items-center gap-1.5 rounded-md border border-white/10 bg-white/5 px-3 py-1.5 text-sm hover:bg-white/10"
                >
                  <Github className="h-4 w-4" /> Code
                </a>
                <a
                  href={p.links.demo}
                  className="inline-flex items-center gap-1.5 rounded-md bg-white px-3 py-1.5 text-sm text-black hover:bg-white/90"
                >
                  <ExternalLink className="h-4 w-4" /> Live
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
