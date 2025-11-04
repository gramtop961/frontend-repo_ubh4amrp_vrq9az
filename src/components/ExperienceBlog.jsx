import { Briefcase, Calendar, ExternalLink, BookOpen, Github } from 'lucide-react';

const timeline = [
  {
    role: 'Full-Stack Intern',
    org: 'TechNova Labs',
    period: 'May 2024 — Aug 2024',
    points: [
      'Built internal dashboards with authentication and role-based access.',
      'Shipped REST APIs with FastAPI and integrated CI/CD.',
    ],
  },
  {
    role: 'Open Source Contributor',
    org: 'Various GitHub Repos',
    period: '2023 — Present',
    points: [
      'Merged PRs improving docs, tests, and performance for JS and Python projects.',
      'Advocated for accessibility and DX improvements.',
    ],
  },
];

const posts = [
  {
    title: 'From Idea to Deploy: A FastAPI + React Starter',
    excerpt: 'My approach to structuring full‑stack projects for velocity and clarity, with tips on testing and CI.',
    href: '#',
  },
  {
    title: 'Algorithms that Matter: Practical DS&A for Web Devs',
    excerpt: 'A hands‑on look at where Big‑O actually shows up in frontend and backend systems.',
    href: '#',
  },
  {
    title: 'Designing for Delight: Micro‑interactions with Framer Motion',
    excerpt: 'Thoughtful motion can reduce cognitive load and make experiences feel alive.',
    href: '#',
  },
];

export default function ExperienceBlog() {
  return (
    <section id="experience" className="relative py-20 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(14,165,233,0.12),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Experience Timeline */}
        <div className="mx-auto max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
            <Briefcase className="h-3.5 w-3.5 text-cyan-300" /> Experience
          </div>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">Journey</h2>
          <ol className="mt-6 space-y-6">
            {timeline.map((item) => (
              <li key={item.role} className="relative rounded-xl border border-white/10 bg-white/[0.03] p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-semibold">{item.role} • {item.org}</h3>
                    <div className="mt-1 flex items-center gap-2 text-sm text-white/70">
                      <Calendar className="h-4 w-4" /> {item.period}
                    </div>
                  </div>
                </div>
                <ul className="mt-3 list-inside list-disc space-y-1 text-white/80">
                  {item.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </div>

        {/* GitHub Highlights */}
        <div id="github" className="mx-auto mt-16 max-w-5xl">
          <div className="flex items-center gap-2 text-white/80">
            <Github className="h-5 w-5 text-white" />
            <h3 className="text-xl font-semibold">GitHub Highlights</h3>
          </div>
          <p className="mt-1 text-sm text-white/70">Recent activity and contribution overview</p>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="overflow-hidden rounded-xl border border-white/10 bg-white/5 p-3">
              <img
                src="https://github-readme-stats.vercel.app/api?username=yashvinthan&show_icons=true&theme=tokyonight&hide_border=true"
                alt="GitHub Stats"
                className="h-full w-full rounded-lg"
              />
            </div>
            <div className="overflow-hidden rounded-xl border border-white/10 bg-white/5 p-3">
              <img
                src="https://github-readme-streak-stats.herokuapp.com?user=yashvinthan&theme=tokyonight&hide_border=true"
                alt="GitHub Streak"
                className="h-full w-full rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* Blog Writeups */}
        <div id="blog" className="mx-auto mt-16 max-w-6xl">
          <div className="flex items-center gap-2 text-white/80">
            <BookOpen className="h-5 w-5 text-white" />
            <h3 className="text-xl font-semibold">Blog Writeups</h3>
          </div>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <article
                key={post.title}
                className="group rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.03] p-5"
              >
                <h4 className="text-lg font-semibold group-hover:underline">{post.title}</h4>
                <p className="mt-2 text-sm text-white/70">{post.excerpt}</p>
                <a
                  href={post.href}
                  className="mt-4 inline-flex items-center gap-1.5 text-sm text-cyan-300 hover:text-cyan-200"
                >
                  Read more <ExternalLink className="h-4 w-4" />
                </a>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
