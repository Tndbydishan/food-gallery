import Lenis from 'lenis';

let lenisInstance: Lenis | null = null;
let animationFrameId: number | null = null;

/**
 * Initialize the smooth scrolling engine using Lenis.
 */
export function initLenis(): Lenis | null {
  if (typeof window === 'undefined') return null;

  // Clean up any existing instance first
  if (lenisInstance) {
    lenisInstance.destroy();
    if (animationFrameId !== null) {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = null;
    }
  }

  // Check if user prefers reduced motion
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  lenisInstance = new Lenis({
    duration: prefersReducedMotion ? 0.1 : 1.1,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    orientation: 'vertical',
    gestureOrientation: 'vertical',
    smoothWheel: !prefersReducedMotion,
    touchMultiplier: 1.5,
  });

  // Store on window for debug and global access
  (window as unknown as { __lenis?: Lenis }).__lenis = lenisInstance;

  function raf(time: number) {
    if (lenisInstance) {
      lenisInstance.raf(time);
      animationFrameId = requestAnimationFrame(raf);
    }
  }

  animationFrameId = requestAnimationFrame(raf);
  return lenisInstance;
}

export function getLenis(): Lenis | null {
  return lenisInstance || (typeof window !== 'undefined' ? (window as unknown as { __lenis?: Lenis }).__lenis || null : null);
}

export function destroyLenis() {
  if (lenisInstance) {
    lenisInstance.destroy();
    lenisInstance = null;
  }
  if (animationFrameId !== null) {
    cancelAnimationFrame(animationFrameId);
    animationFrameId = null;
  }
  if (typeof window !== 'undefined') {
    delete (window as unknown as { __lenis?: Lenis }).__lenis;
  }
}

/**
 * Instantly reset viewport scroll to top (0,0) and synchronize Lenis internal target.
 * Solves the issue where page starts scrolled down after clicking a food card.
 */
export function scrollToTop(immediate = true) {
  if (typeof window === 'undefined') return;

  const lenis = getLenis();
  if (lenis) {
    try {
      lenis.scrollTo(0, { immediate: true, force: true });
    } catch {
      // fallback
    }
  }

  window.scrollTo({
    top: 0,
    left: 0,
    behavior: immediate ? 'instant' : 'smooth',
  });

  if (document.documentElement) {
    document.documentElement.scrollTop = 0;
  }
  if (document.body) {
    document.body.scrollTop = 0;
  }
}

/**
 * Scroll smoothly to a specific element by CSS selector or hash ID.
 */
export function scrollToElement(selectorOrHash: string, offset = -70) {
  if (typeof window === 'undefined') return;

  const targetSelector = selectorOrHash.startsWith('#') ? selectorOrHash : `#${selectorOrHash}`;
  const targetElement = document.querySelector(targetSelector) as HTMLElement | null;

  if (!targetElement) return;

  const lenis = getLenis();
  if (lenis) {
    try {
      lenis.scrollTo(targetElement, { offset, duration: 1.0 });
      return;
    } catch {
      // Fallback below
    }
  }

  const top = targetElement.getBoundingClientRect().top + window.scrollY + offset;
  window.scrollTo({
    top: Math.max(0, top),
    behavior: 'smooth',
  });
}
