'use client';

import { useEffect, useRef } from 'react';
import { clsx } from 'clsx';

interface Props {
  children: React.ReactNode;
  className?: string;
  /** Transition delay in ms, for staggering siblings. */
  delay?: number;
}

/**
 * Fades content in when it scrolls into view. Pairs with the `.sr`
 * styles in globals.css.
 */
export function ScrollReveal({ children, className, delay = 0 }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.dataset.visible = 'true';
          observer.disconnect();
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={clsx('sr', className)}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
