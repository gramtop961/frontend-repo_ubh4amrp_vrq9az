import { useState, useEffect } from 'react';
import { Menu, X, Download, Github, Linkedin, Mail } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Blog', href: '#blog' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all ${
      scrolled ? 'backdrop-blur-md bg-black/50 border-b border-white/10' : 'bg-transparent'
    }`}>
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="flex items-center gap-2 text-white font-semibold">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-indigo-500 via-sky-500 to-cyan-400" />
            <span className="tracking-tight">yashvinthan.dev</span>
          </a>

          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-white/80 hover:text-white transition-colors"
              >
                {item.label}
              </a>
            ))}
            <div className="h-6 w-px bg-white/10" />
            <a
              href="/resume.pdf"
              className="inline-flex items-center gap-2 rounded-md bg-white/10 px-3 py-1.5 text-sm text-white hover:bg-white/20 transition-colors"
            >
              <Download className="h-4 w-4" /> Resume
            </a>
            <a href="https://github.com/yashvinthan" target="_blank" rel="noreferrer" aria-label="GitHub" className="text-white/80 hover:text-white">
              <Github className="h-5 w-5" />
            </a>
            <a href="https://linkedin.com/in/yashvinthan" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-white/80 hover:text-white">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="mailto:hello@yashvinthan.dev" aria-label="Email" className="text-white/80 hover:text-white">
              <Mail className="h-5 w-5" />
            </a>
          </div>

          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-white/10"
            aria-label="Toggle Menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col gap-2 rounded-lg border border-white/10 bg-black/60 p-3">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-3 py-2 text-white/80 hover:text-white hover:bg-white/10"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="/resume.pdf"
                className="mt-2 inline-flex items-center gap-2 rounded-md bg-white/10 px-3 py-2 text-white hover:bg-white/20"
              >
                <Download className="h-4 w-4" /> Resume
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
