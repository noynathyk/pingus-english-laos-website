import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Globe, Menu, X } from 'lucide-react';
import { Language } from '../translations';

interface NavigationProps {
  lang: Language;
  toggleLang: () => void;
  t: any; // Using any for now, or typeof translations.en
}

export default function Navigation({ lang, toggleLang, t }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: t.nav.home, href: '#' },
    { name: t.nav.about, href: '#about' },
    { name: t.nav.programs, href: '#programs' },
    { name: t.nav.team, href: '#team' },
    { name: t.nav.students, href: '#students' },
    { name: t.nav.parents, href: '#parents' },
    { name: t.nav.contact, href: '#contact' },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-white shadow-xl py-2' : 'bg-pingu-purple shadow-none py-3'
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center">
            <div className="flex items-center gap-0 transition-all duration-300">
              <div className="w-16 h-16 lg:w-20 lg:h-20 flex items-center justify-center relative z-10">
                <img src="./pingu-images/pingu-logo-1.webp" alt="Pingu Circular Logo" className="w-full h-full object-contain drop-shadow-md m-0 p-0" style={{ margin: 0, padding: 0 }} />
              </div>
              <div className="w-24 h-12 lg:w-32 lg:h-16 flex items-center justify-center relative z-20 -ml-2 lg:-ml-4">
                <img src="./pingu-images/pingu-logo-2.webp" alt="Pingu Text Logo" className="w-full h-full object-contain drop-shadow-md m-0 p-0" style={{ margin: 0, padding: 0 }} />
              </div>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`text-sm font-display tracking-wider hover:opacity-70 transition-opacity ${scrolled ? 'text-slate-700' : 'text-white'}`}
              >
                {item.name}
              </a>
            ))}

            <button
              onClick={toggleLang}
              aria-label="Toggle Language"
              className={`flex items-center gap-2 px-4 py-2 rounded-full border-2 text-xs font-black transition-all ${scrolled ? 'border-pingu-purple text-pingu-purple hover:bg-pingu-purple hover:text-white' : 'border-white/40 text-white hover:bg-white hover:text-pingu-purple'
                }`}
            >
              <Globe className="w-3.5 h-3.5" aria-hidden="true" />
              {lang === 'en' ? 'ພາສາລາວ' : 'ENGLISH'}
            </button>
          </div>

          <button 
            className={`lg:hidden p-2 rounded-lg ${scrolled ? 'bg-pingu-purple/10 text-pingu-purple' : 'bg-white/20 text-white'}`} 
            onClick={() => setIsMenuOpen(true)}
            aria-label="Open Mobile Menu"
            aria-expanded={isMenuOpen}
          >
            <Menu className="w-6 h-6" aria-hidden="true" />
          </button>
        </div>
      </nav>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            className="fixed inset-0 z-[60] bg-pingu-purple text-white p-8 flex flex-col items-center justify-center text-center"
          >
            <button 
              className="absolute top-8 right-8 p-4 bg-white/10 rounded-full" 
              onClick={() => setIsMenuOpen(false)}
              aria-label="Close Mobile Menu"
            >
              <X className="w-8 h-8" aria-hidden="true" />
            </button>
            <div className="flex flex-col gap-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-4xl font-display uppercase tracking-widest hover:text-pingu-blue-light"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <button
                onClick={() => { toggleLang(); setIsMenuOpen(false); }}
                aria-label="Toggle Language Mobile"
                className="mt-8 px-10 py-4 rounded-full border-2 border-white font-black uppercase text-xl"
              >
                {lang === 'en' ? 'ພາສາລາວ' : 'English'}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
