import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from './ui/Button';
import { scrollToElement, scrollToTop } from '../utils/lenis';

const NAV_LINKS = [
  { label: 'Home', href: '/#home', target: '#home' },
  { label: 'Menu', href: '/#menu', target: '#menu' },
  { label: 'Map', href: '/#map', target: '#map' },
  { label: 'Highlights', href: '/#highlights', target: '#highlights' },
  { label: 'About', href: '/#about', target: '#about' },
  { label: 'Team', href: '/#team', target: '#team' },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleNavClick = (target: string) => {
    setIsOpen(false);
    if (isHomePage) {
      if (target === '#home') {
        scrollToTop(false);
      } else {
        scrollToElement(target);
      }
    }
  };

  return (
    <>
      <header 
        className={`fixed top-0 w-full z-[100] transition-all duration-300 ${
          scrolled 
            ? 'bg-brand-cream/90 backdrop-blur-md shadow-[0_4px_20px_rgba(75,130,160,0.06)] border-b border-brand-baby-blue/20 py-2.5 sm:py-3' 
            : 'bg-transparent py-3 md:py-5'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* School Brand Mark */}
          <Link 
            to="/#home" 
            className="font-display text-xl sm:text-2xl md:text-3xl tracking-tight z-[100] relative text-brand-text flex flex-col leading-none group" 
            onClick={() => handleNavClick('#home')}
          >
            <span className="group-hover:text-brand-text/90 transition-colors">SPSC</span>
            <span className="text-brand-baby-blue text-sm sm:text-base md:text-lg group-hover:text-brand-blue transition-colors">
              Class 7 Tulip
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            <ul className="flex items-center gap-6 font-bold text-sm text-brand-text/80">
              {NAV_LINKS.map(link => (
                <li key={link.href}>
                  {isHomePage ? (
                    <button 
                      onClick={() => handleNavClick(link.target)}
                      className="hover:text-brand-baby-blue transition-colors cursor-pointer"
                    >
                      {link.label}
                    </button>
                  ) : (
                    <Link 
                      to={link.href} 
                      className="hover:text-brand-baby-blue transition-colors"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
            
            {isHomePage ? (
              <button onClick={() => handleNavClick('#menu')} className="cursor-pointer">
                <Button size="sm" className="shadow-xs hover:shadow-md transition-all">
                  Explore Menu
                </Button>
              </button>
            ) : (
              <Link to="/#menu">
                <Button size="sm" className="shadow-xs hover:shadow-md transition-all">
                  Explore Menu
                </Button>
              </Link>
            )}
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden z-[100] relative flex items-center gap-2 bg-white/95 px-3.5 py-1.5 rounded-full shadow-xs border border-brand-text/10 text-brand-text transition-all hover:bg-brand-soft-baby-blue/50"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <span className="font-bold text-xs uppercase tracking-wider">{isOpen ? 'Close' : 'Menu'}</span>
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </header>

      {/* Mobile Sliding Drawer */}
      <div 
        className={`mobile-menu fixed inset-0 bg-brand-cream/98 backdrop-blur-xl z-[90] flex flex-col items-center justify-center transition-all duration-400 ease-in-out ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="text-center mb-6">
          <span className="text-xs uppercase tracking-widest font-bold text-brand-text/50">Southpoint School and College</span>
          <h3 className="font-display text-2xl text-brand-text">Class 7 — Section Tulip</h3>
          <p className="text-xs text-brand-baby-blue font-bold tracking-wider uppercase mt-1">Home Science Showcase</p>
        </div>

        <nav className="flex flex-col items-center gap-5 w-full max-w-xs px-6">
          {NAV_LINKS.map((link) => (
            <div key={link.href} className="w-full text-center">
              {isHomePage ? (
                <button 
                  onClick={() => handleNavClick(link.target)}
                  className="w-full text-2xl font-display text-brand-text hover:text-brand-baby-blue transition-colors py-1 cursor-pointer"
                >
                  {link.label}
                </button>
              ) : (
                <Link 
                  to={link.href} 
                  onClick={() => setIsOpen(false)}
                  className="w-full text-2xl font-display text-brand-text hover:text-brand-baby-blue transition-colors py-1 block"
                >
                  {link.label}
                </Link>
              )}
            </div>
          ))}

          <div className="w-full pt-4 border-t border-brand-text/10 mt-2">
            {isHomePage ? (
              <button 
                onClick={() => handleNavClick('#menu')} 
                className="w-full cursor-pointer"
              >
                <Button size="lg" className="w-full">Explore Menu</Button>
              </button>
            ) : (
              <Link to="/#menu" onClick={() => setIsOpen(false)} className="w-full block">
                <Button size="lg" className="w-full">Explore Menu</Button>
              </Link>
            )}
          </div>
        </nav>
      </div>
    </>
  );
}
