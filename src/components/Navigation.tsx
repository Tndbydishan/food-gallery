import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from './ui/Button';

const NAV_LINKS = [
  { label: 'Home', href: '/#home' },
  { label: 'Menu', href: '/#menu' },
  { label: 'Highlights', href: '/#highlights' },
  { label: 'About', href: '/#about' },
  { label: 'Team', href: '/#team' },
  { label: 'Passion', href: '/#passion' },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
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

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <header 
        className={`fixed top-0 w-full z-[100] transition-all duration-300 ${
          scrolled ? 'bg-brand-cream/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-3 md:py-5'
        }`}
      >
        <div className="container mx-auto px-4 lg:px-8 flex items-center justify-between">
          <Link to="/#home" className="font-display text-2xl md:text-3xl tracking-tight z-[100] relative text-brand-text flex flex-col leading-none" onClick={closeMenu}>
            <span>SPSC</span>
            <span className="text-brand-baby-blue text-lg">Class 7 Tulip</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            <ul className="flex items-center gap-8 font-bold text-brand-text/90">
              {NAV_LINKS.map(link => (
                <li key={link.href}>
                  <Link to={link.href} className="hover:text-brand-baby-blue transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Link to="/#menu">
              <Button size="sm">Explore Menu</Button>
            </Link>
          </nav>

          {/* Mobile Toggle */}
          <button 
            className="lg:hidden z-[100] relative flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-brand-text/10 text-brand-text transition-all hover:bg-brand-soft-baby-blue/50"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <span className="font-bold text-xs md:text-sm uppercase tracking-wider">{isOpen ? 'Close' : 'Menu'}</span>
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <div 
        className={`mobile-menu fixed inset-0 bg-brand-soft-baby-blue z-[90] flex flex-col items-center justify-center transition-transform duration-500 ease-in-out ${isOpen ? 'translate-y-0' : '-translate-y-full'}`}
      >
        <nav className="flex flex-col items-center gap-6">
          {NAV_LINKS.map((link, i) => (
            <Link 
              key={link.href} 
              to={link.href} 
              onClick={closeMenu}
              className={`text-3xl font-display text-brand-text hover:scale-110 transition-all duration-300 ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ transitionDelay: isOpen ? `${i * 50 + 200}ms` : '0ms' }}
            >
              {link.label}
            </Link>
          ))}
          <Link 
            to="/#menu" 
            onClick={closeMenu} 
            className={`mt-4 transition-all duration-300 ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            style={{ transitionDelay: isOpen ? `${NAV_LINKS.length * 50 + 200}ms` : '0ms' }}
          >
            <Button size="lg" variant="secondary">Explore Menu</Button>
          </Link>
        </nav>
      </div>
    </>
  );
}
