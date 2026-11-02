import { useEffect, useRef, useState } from 'react';

export const reducedMotion = () => {
  try {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  } catch {
    return false;
  }
};

/** No page-load choreography any more; kept so components can pass a start delay of 0. */
export const useEnterDelay = () => 0;

const easeOutExpo = (t) => (t >= 1 ? 1 : 1 - 2 ** (-10 * t));

/** Animates a number towards `target`; later changes glide from the current value. */
export function useCountUp(target, { duration = 700, delay = 0, decimals = 0, active = true } = {}) {
  const [reduce] = useState(reducedMotion);
  const [value, setValue] = useState(0);
  const current = useRef(0);
  const first = useRef(true);

  useEffect(() => {
    if (reduce || !active) return undefined;
    const from = current.current;
    const wait = first.current ? delay : 0;
    const dur = first.current ? duration : 450;
    let raf;
    let start;
    const tick = (now) => {
      // Marked as played only once a frame runs, so StrictMode's throwaway effect pass keeps the intro delay.
      if (start === undefined) { start = now + wait; first.current = false; }
      const t = Math.max(0, now - start) / dur;
      const v = from + (target - from) * easeOutExpo(Math.min(1, t));
      current.current = v;
      setValue(v);
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, duration, delay, active, reduce]);

  const f = 10 ** decimals;
  return Math.round((reduce ? target : value) * f) / f;
}

/** Adds `is-in` once the element scrolls into view (sections below the fold). */
export function useReveal() {
  const ref = useRef(null);
  const [inView, setInView] = useState(() => reducedMotion() || typeof IntersectionObserver === 'undefined');
  useEffect(() => {
    if (inView || !ref.current) return undefined;
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setInView(true); io.disconnect(); }
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    io.observe(ref.current);
    return () => io.disconnect();
  }, [inView]);
  return [ref, inView];
}
