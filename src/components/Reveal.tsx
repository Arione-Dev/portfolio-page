import React, { useEffect, useRef, useState } from 'react';

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  /** Delay in ms before the element starts to appear */
  delay?: number;
  /** Animate the direct children one after another (cascade) instead of the wrapper */
  stagger?: boolean;
}

/**
 * Reveals its content when it scrolls into view (blur + slide up + fade in).
 * With `stagger`, each direct child "boots in" in sequence.
 */
export const Reveal: React.FC<RevealProps> = ({ children, className = '', delay = 0, stagger = false }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${stagger ? 'reveal-group' : 'reveal'} ${visible ? 'reveal-visible' : ''} ${className}`}
      style={{ transitionDelay: stagger ? undefined : `${delay}ms` }}
    >
      {children}
    </div>
  );
};

