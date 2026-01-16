'use client';
import React, { useEffect, useState } from 'react';
import { Menu, X, Instagram, Facebook } from 'lucide-react';
import { useLanguage } from './LanguageContext';

export const MobileBottomBar: React.FC = () => {
  // Hidden on purpose as per new design request, but keeping empty component to avoid breaking imports
  return null;
};

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Active Section Tracking
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 } // 50% visible to count as active
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileMenuOpen]);

  const NavLink: React.FC<{
    href: string;
    label: string;
    mobile?: boolean;
    id?: string;
  }> = ({ href, label, mobile, id }) => {
    const isActive = activeSection === id;

    if (mobile) {
      return (
        <a
          href={href}
          onClick={() => setMobileMenuOpen(false)}
          className={`
            relative group overflow-hidden transition-all duration-300
            text-4xl font-serif font-medium text-wood-dark
          `}
        >
          <span className="relative z-10 block transition-transform duration-500 group-hover:-translate-y-[120%]">
            {label}
          </span>
          <span className="absolute top-0 left-0 z-10 block transition-transform duration-500 translate-y-[120%] group-hover:translate-y-0 text-amber">
            {label}
          </span>
        </a>
      );
    }

    return (
      <a
        href={href}
        className={`
          relative text-sm font-bold uppercase tracking-widest py-2 transition-all duration-300 group
          ${isActive ? 'text-amber scale-105' : scrolled ? 'text-cream/80 hover:text-white' : 'text-white/90 hover:text-white'}
        `}
      >
        {label}
        <span
          className={`absolute bottom-0 left-0 w-full h-[2px] bg-amber transform transition-transform duration-300 origin-left ${
            isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
          }`}
        />
      </a>
    );
  };

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-[99] transition-all duration-500 ease-[cubic-bezier(0.32,0,0.67,0)] ${
          scrolled ? 'h-24 shadow-xl' : 'h-32'
        }`}
        id="navbar"
      >
        {/* Backgrounds */}
        <div
          className={`absolute inset-0 transition-opacity duration-500 ${
            scrolled ? 'opacity-0' : 'opacity-100'
          }`}
        >
          {/* Hero Gradient Overlay for Top Visibility */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-transparent"></div>
        </div>

        <div
          className={`absolute inset-0 transition-all duration-500 ${
            scrolled ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'
          }`}
        >
          {/* Solid Dark Wood Background for Scrolled State */}
          <div className="absolute inset-0 bg-wood-dark shadow-2xl border-b border-white/5"></div>
        </div>

        <div className="max-w-[1400px] mx-auto px-6 h-full flex items-center justify-between relative z-10">
          {/* Logo */}
          <a href="#" className="flex items-center gap-4 group">
          
            <div className="relative w-14 h-14 md:w-16 md:h-16">
  <img
    src="/logo.png"
    alt="Saigon Soul Logo"
    className="w-full h-full object-contain"
  />
</div>


            <div className="flex flex-col">
              <span className="font-serif text-2xl md:text-3xl font-medium tracking-tight leading-none transition-colors duration-500 text-white drop-shadow-md">
                Saigon Soul
              </span>
            </div>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-16">
            <NavLink href="#atmosphere" label={t('nav.atmosphere')} id="atmosphere" />
            <NavLink href="#menu" label={t('nav.menu')} id="menu" />
            <NavLink href="#gallery" label={t('nav.gallery')} id="gallery" />
          </div>

          {/* Desktop Action & Lang */}
          <div className="hidden md:flex items-center gap-6">
            {/* Language Pill */}
            <div
              className={`flex items-center p-1 rounded-full transition-all duration-500 ${
                scrolled
                  ? 'bg-white/10 border border-white/5'
                  : 'bg-white/20 backdrop-blur-md border border-white/20'
              }`}
            >
              <button
                onClick={() => setLanguage('DE')}
                className={`px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all duration-300 ${
                  language === 'DE'
                    ? 'bg-amber text-wood-dark shadow-lg'
                    : 'text-white/70 hover:text-white'
                }`}
              >
                DE
              </button>
              <button
                onClick={() => setLanguage('VI')}
                className={`px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all duration-300 ${
                  language === 'VI'
                    ? 'bg-amber text-wood-dark shadow-lg'
                    : 'text-white/70 hover:text-white'
                }`}
              >
                VI
              </button>
            </div>

            <button
              onClick={() =>
                document.getElementById('reservation')?.scrollIntoView({ behavior: 'smooth' })
              }
              className={`
                px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 shadow-lg hover:shadow-amber/20 hover:-translate-y-0.5
                ${scrolled ? 'bg-white text-wood-dark hover:bg-amber hover:text-wood-dark' : 'bg-amber text-wood-dark hover:bg-white'}
              `}
            >
              {t('nav.book')}
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden relative z-[101] w-12 h-12 flex items-center justify-center rounded-full transition-all duration-300 ${
              mobileMenuOpen
                ? 'bg-transparent text-wood-dark'
                : 'bg-white/10 backdrop-blur-md text-white border border-white/20'
            }`}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Full Screen Menu Overlay */}
      <div
        className={`fixed inset-0 z-[100] bg-[#F5F2EA] transition-all duration-700 ease-[cubic-bezier(0.77,0,0.175,1)] flex flex-col items-center justify-center ${
          mobileMenuOpen ? 'opacity-100 clip-circle-150' : 'opacity-0 clip-circle-0 pointer-events-none'
        }`}
      >
        {/* Decorative Background */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-amber/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-wood/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>

        <div className="flex flex-col items-center gap-6 z-10 w-full max-w-md px-6 perspective-1000">
          <div className={`transition-all duration-700 delay-100 ${mobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <NavLink href="#atmosphere" label={t('nav.atmosphere')} mobile />
          </div>
          <div className={`transition-all duration-700 delay-150 ${mobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <NavLink href="#menu" label={t('nav.menu')} mobile />
          </div>
          <div className={`transition-all duration-700 delay-200 ${mobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <NavLink href="#gallery" label={t('nav.gallery')} mobile />
          </div>
          <div className={`transition-all duration-700 delay-250 ${mobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <NavLink href="#team" label={t('team.label')} mobile />
          </div>
          <div className={`transition-all duration-700 delay-300 ${mobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <NavLink href="#reservation" label={t('nav.book')} mobile />
          </div>

          <div className={`w-12 h-[1px] bg-wood-dark/20 my-6 transition-all duration-700 delay-500 ${mobileMenuOpen ? 'scale-x-100' : 'scale-x-0'}`}></div>

          {/* Mobile Lang Switcher */}
          <div className={`flex items-center gap-8 text-sm font-bold uppercase tracking-widest text-wood-dark transition-all duration-700 delay-700 ${mobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <button
              onClick={() => {
                setLanguage('DE');
                setMobileMenuOpen(false);
              }}
              className={`hover:text-amber transition-colors ${language === 'DE' ? 'text-wood underline decoration-amber decoration-2 underline-offset-8' : 'opacity-60'}`}
            >
              Deutsch
            </button>
            <button
              onClick={() => {
                setLanguage('VI');
                setMobileMenuOpen(false);
              }}
              className={`hover:text-amber transition-colors ${language === 'VI' ? 'text-wood underline decoration-amber decoration-2 underline-offset-8' : 'opacity-60'}`}
            >
              Tiếng Việt
            </button>
          </div>

          <div className={`flex gap-4 mt-8 transition-all duration-700 delay-1000 ${mobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <a href="#" className="w-14 h-14 rounded-full border border-wood-dark/10 flex items-center justify-center text-wood-dark hover:bg-wood hover:text-white transition-all transform hover:scale-110">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="#" className="w-14 h-14 rounded-full border border-wood-dark/10 flex items-center justify-center text-wood-dark hover:bg-wood hover:text-white transition-all transform hover:scale-110">
              <Facebook className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
