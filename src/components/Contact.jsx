import { Mail, Linkedin, Github } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative border-t border-white/10 bg-black py-20 text-white">
      <div className="absolute inset-0 -z-0 bg-[radial-gradient(ellipse_at_bottom,rgba(99,102,241,0.12),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold sm:text-4xl">Let’s build something great</h2>
          <p className="mt-2 text-white/70">
            Open to internships, freelance, and collaborations. Reach out via email or connect on socials.
          </p>
        </div>

        <div className="mx-auto mt-8 grid max-w-xl gap-3 sm:grid-cols-3">
          <a
            href="mailto:hello@yashvinthan.dev"
            className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white hover:bg-white/10"
          >
            <Mail className="h-5 w-5" /> Email
          </a>
          <a
            href="https://linkedin.com/in/yashvinthan"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white hover:bg-white/10"
          >
            <Linkedin className="h-5 w-5" /> LinkedIn
          </a>
          <a
            href="https://github.com/yashvinthan"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white hover:bg-white/10"
          >
            <Github className="h-5 w-5" /> GitHub
          </a>
        </div>

        <div id="skills" className="mx-auto mt-16 max-w-5xl rounded-2xl border border-white/10 bg-white/[0.03] p-6">
          <h3 className="text-lg font-semibold">Skills</h3>
          <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
            {[ 'JavaScript', 'TypeScript', 'React', 'Node.js', 'Python', 'FastAPI', 'C/C++', 'Data Structures', 'Algorithms', 'MongoDB', 'SQL', 'Docker', 'Git', 'CI/CD', 'Testing', 'Figma' ].map((s) => (
              <div key={s} className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/80">
                {s}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
