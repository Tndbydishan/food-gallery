import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button } from './ui/Button';
import { JapaneseSeal } from './graphic';
import { scrollToElement, scrollToTop } from '../utils/lenis';

const NAV_LINKS = [
  { num: '01', label: 'Home', kanji: '起点', href: '/#home', target: '#home' },
  { num: '02', label: 'Menu', kanji: '料理', href: '/#menu', target: '#menu' },
  { num: '03', label: 'Map', kanji: '案内', href: '/#map', target: '#map' },
  { num: '04', label: 'Pillars', kanji: '科学', href: '/#highlights', target: '#highlights' },
  { num: '05', label: 'About', kanji: '概要', href: '/#about', target: '#about' },
  { num: '06', label: 'Team', kanji: '生徒', href: '/#team', target: '#team' },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
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
        className={`fixed top-0 left-0 right-0 w-full z-[100] transition-all duration-200 border-b-3 border-black ${
          scrolled 
            ? 'bg-primary/95 backdrop-blur-md shadow-[0_4px_0px_#111111] py-2.5 sm:py-3' 
            : 'bg-offwhite py-3 sm:py-4 shadow-[0_2px_0px_#111111]'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl flex items-center justify-between">
          
          {/* Zone 1: Japanese Retro Comic Brand Lockup */}
          <Link 
            to="/#home" 
            className="flex items-center gap-2.5 group select-none cursor-pointer" 
            onClick={() => handleNavClick('#home')}
          >
            <div className="bg-primary text-black border-2.5 border-black px-2.5 py-1 rounded-xl shadow-[3px_3px_0px_#111111] transition-transform group-hover:scale-105 font-display font-black text-base tracking-tight flex items-center gap-1.5">
              <span>SPSC</span>
              <span className="text-[10px] font-mono text-red font-bold">南尖</span>
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-display font-black text-sm sm:text-base text-black tracking-tight flex items-center gap-1">
                Class 7 Tulip
                <span className="bg-red text-white text-[9px] px-1.5 py-0.2 rounded font-mono font-bold">第7学年</span>
              </span>
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-black/70 mt-0.5">
                Food Festival · 食育展示
              </span>
            </div>
          </Link>

          {/* Zone 2: Numbered Desktop Navigation Links (Minimalist & Clean) */}
          <nav className="hidden lg:flex items-center gap-2">
            <ul className="flex items-center gap-1 font-display font-black text-xs uppercase tracking-wider text-black">
              {NAV_LINKS.map(link => (
                <li key={link.href}>
                  {isHomePage ? (
                    <button 
                      onClick={() => handleNavClick(link.target)}
                      className="px-3.5 py-1.5 rounded-lg hover:bg-primary transition-all duration-150 cursor-pointer flex items-center gap-1.5 border border-transparent hover:border-black text-black"
                    >
                      <span className="font-mono text-[10px] text-red font-black">{link.num}</span>
                      <span>{link.label}</span>
                    </button>
                  ) : (
                    <Link 
                      to={link.href} 
                      className="px-3.5 py-1.5 rounded-lg hover:bg-primary transition-all duration-150 flex items-center gap-1.5 border border-transparent hover:border-black text-black"
                    >
                      <span className="font-mono text-[10px] text-red font-black">{link.num}</span>
                      <span>{link.label}</span>
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Zone 3: Primary Tactile Action + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <div className="hidden sm:block">
              <Button 
                size="sm" 
                variant="primary"
                onClick={() => {
                  if (isHomePage) {
                    handleNavClick('#menu');
                  } else {
                    navigate('/#menu');
                  }
                }}
              >
                <span>Festival Menu</span>
                <span className="ml-1 text-[10px] opacity-75 font-mono">料理 →</span>
              </Button>
            </div>

            {/* Mobile Menu Button with Comic Offset Shadow */}
            <button 
              className="lg:hidden flex items-center justify-center w-11 h-11 bg-primary border-3 border-black rounded-xl shadow-[3px_3px_0px_#111111] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all cursor-pointer"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X size={22} className="text-black" /> : <Menu size={22} className="text-black" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Japanese Comic Pop Drawer (Blue background, No Black!) */}
      <div 
        className={`fixed inset-0 bg-blue/70 z-[120] lg:hidden backdrop-blur-xs transition-opacity duration-200 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
      >
        <div 
          className={`absolute top-0 right-0 w-[90%] max-w-md h-full bg-blue text-white border-l-4 border-black p-6 flex flex-col justify-between shadow-[-10px_0px_0px_#111111] transition-transform duration-300 ease-out overflow-y-auto ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Drawer Header */}
          <div>
            <div className="flex items-center justify-between pb-6 border-b-3 border-white/30 mb-6">
              <div className="flex items-center gap-2">
                <span className="bg-primary text-black border-2 border-black px-2.5 py-0.5 rounded-lg font-display font-black text-xs shadow-[2px_2px_0px_#111111]">
                  SPSC
                </span>
                <span className="font-display font-black text-base text-yellow">
                  Section Tulip · 第7学年
                </span>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="w-10 h-10 rounded-xl border-2.5 border-black bg-primary text-black flex items-center justify-center shadow-[3px_3px_0px_#111111] active:translate-x-[1px] active:translate-y-[1px] cursor-pointer"
                aria-label="Close menu"
              >
                <X size={20} />
              </button>
            </div>

            {/* Comic Navigation List */}
            <nav className="flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <div key={link.href}>
                  {isHomePage ? (
                    <button 
                      onClick={() => handleNavClick(link.target)}
                      className="w-full text-left p-3.5 rounded-xl border-3 border-black bg-white text-black hover:bg-primary shadow-[4px_4px_0px_#111111] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all flex items-center justify-between cursor-pointer group"
                    >
                      <div className="flex items-center gap-3">
                        <span className="font-mono font-black text-xs bg-red text-white px-2 py-0.5 rounded">
                          {link.num}
                        </span>
                        <span className="font-display font-black text-xl uppercase tracking-tight">
                          {link.label}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 font-mono text-sm font-bold opacity-80">
                        <span>{link.kanji}</span>
                        <ArrowUpRight size={18} />
                      </div>
                    </button>
                  ) : (
                    <Link 
                      to={link.href} 
                      onClick={() => setIsOpen(false)}
                      className="w-full text-left p-3.5 rounded-xl border-3 border-black bg-white text-black hover:bg-primary shadow-[4px_4px_0px_#111111] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all flex items-center justify-between group"
                    >
                      <div className="flex items-center gap-3">
                        <span className="font-mono font-black text-xs bg-red text-white px-2 py-0.5 rounded">
                          {link.num}
                        </span>
                        <span className="font-display font-black text-xl uppercase tracking-tight">
                          {link.label}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 font-mono text-sm font-bold opacity-80">
                        <span>{link.kanji}</span>
                        <ArrowUpRight size={18} />
                      </div>
                    </Link>
                  )}
                </div>
              ))}
            </nav>
          </div>

          {/* Drawer Footer Callout */}
          <div className="pt-6 border-t-3 border-white/30 mt-6">
            <div className="p-4 bg-yellow border-3 border-black rounded-2xl mb-4 shadow-[4px_4px_0px_#111111] text-xs font-bold text-black flex items-start gap-2.5">
              <span className="text-xl">🍱</span>
              <div>
                <strong className="block font-display uppercase tracking-wider text-black font-black">
                  Home Science Project · 食育展示
                </strong>
                <span>All curated festival dishes home-prepared by Class 7 Tulip students & presented at SPSC.</span>
              </div>
            </div>

            <Button 
              size="lg" 
              variant="primary" 
              className="w-full shadow-[5px_5px_0px_#111111]"
              onClick={() => {
                setIsOpen(false);
                if (isHomePage) {
                  handleNavClick('#menu');
                } else {
                  navigate('/#menu');
                }
              }}
            >
              Explore All Dishes (料理一覧)
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
