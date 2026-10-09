import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { scrollToTop, scrollToElement } from '../utils/lenis';

export function ScrollToTop() {
  const { pathname, hash } = useLocation();
  const isFirstMountRef = useRef(true);

  useEffect(() => {
    // On initial mount / reload: do not overwrite browser restored scroll position unless a specific hash anchor is in the URL
    if (isFirstMountRef.current) {
      isFirstMountRef.current = false;
      if (hash) {
        const timer = setTimeout(() => {
          scrollToElement(hash, -75);
        }, 120);
        return () => clearTimeout(timer);
      }
      return;
    }

    // On subsequent user route transitions (e.g. clicking between pages):
    if (hash) {
      const timer = setTimeout(() => {
        scrollToElement(hash, -75);
      }, 60);
      return () => clearTimeout(timer);
    } else {
      scrollToTop(true);

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

