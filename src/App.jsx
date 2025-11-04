import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import ExperienceBlog from './components/ExperienceBlog';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <ExperienceBlog />
        <Contact />
      </main>
      <footer className="border-t border-white/10 bg-black/80 py-8 text-center text-sm text-white/60">
        <div className="mx-auto max-w-7xl px-4">
          <p>
            © {new Date().getFullYear()} • yashvinthan.dev — Built with React, Tailwind, and a playful 3D touch.
          </p>
        </div>
      </footer>
    </div>
  );
}
