import Spline from '@splinetool/react-spline';
import { Sparkles, Code2, Cpu, Rocket } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden bg-gradient-to-b from-black via-[#05060B] to-black text-white">
      {/* Spline 3D Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlays that don't block interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80" />
      <div className="pointer-events-none absolute -inset-x-20 top-0 h-40 bg-gradient-to-b from-black/80 to-transparent" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-4 pt-32 sm:pt-36 lg:pt-40">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
          <Sparkles className="h-3.5 w-3.5 text-cyan-300" />
          Building interactive, performant web experiences
        </div>

        <h1 className="mt-6 text-center text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">
          Computer Science Engineering Student
          <span className="block bg-gradient-to-r from-cyan-300 via-sky-400 to-indigo-400 bg-clip-text text-transparent">Crafting Code & Creative Interfaces</span>
        </h1>

        <p className="mt-4 max-w-2xl text-center text-white/80">
          I blend algorithms with aesthetics to ship reliable, accessible, and delightful products. Passionate about full‑stack development, systems design, and human‑computer interaction.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-lg bg-white text-black px-5 py-3 text-sm font-medium hover:bg-white/90"
          >
            <Rocket className="h-4 w-4" /> Explore Projects
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-5 py-3 text-sm font-medium text-white hover:bg-white/10"
          >
            <Code2 className="h-4 w-4" /> Get in touch
          </a>
        </div>

        <div className="mt-12 grid w-full max-w-3xl grid-cols-2 gap-3 sm:grid-cols-4">
          {[
            { label: 'Frontend', stat: 'React • Vite' },
            { label: 'Backend', stat: 'FastAPI • Node' },
            { label: 'Systems', stat: 'C++ • OS' },
            { label: 'AI/DS', stat: 'Python • ML' },
          ].map((item) => (
            <div key={item.label} className="rounded-xl border border-white/10 bg-white/5 p-4 text-center">
              <div className="text-xs uppercase tracking-wide text-white/60">{item.label}</div>
              <div className="mt-1 text-sm font-medium text-white">{item.stat}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom wave divider */}
      <div className="pointer-events-none relative z-10 mt-20">
        <svg className="block w-full" height="40" viewBox="0 0 1440 40" preserveAspectRatio="none" aria-hidden>
          <path fill="currentColor" className="text-black/90" d="M0,0 C480,40 960,0 1440,40 L1440,40 L0,40 Z" />
        </svg>
      </div>
    </section>
  );
}
