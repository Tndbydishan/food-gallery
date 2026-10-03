import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { scrollToTop, scrollToElement } from '../utils/lenis';

export function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Delay slightly for React components to finish mounting
      const timer = setTimeout(() => {
        scrollToElement(hash, -75);
      }, 60);
      return () => clearTimeout(timer);
    } else {
      // Immediate reset on route transition
      scrollToTop(true);

      // Re-apply on next animation frame and after small delay to handle any dynamic layout shifts
      const raf = requestAnimationFrame(() => {
        scrollToTop(true);
      });

      const fallbackTimer = setTimeout(() => {
        scrollToTop(true);
      }, 50);

      return () => {
        cancelAnimationFrame(raf);
        clearTimeout(fallbackTimer);
      };
    }
  }, [pathname, hash]);

  return null;
}

