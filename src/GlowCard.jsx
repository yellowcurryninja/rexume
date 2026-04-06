import React, { useEffect, useRef, useState } from 'react';

const glowColorMap = {
  green: { base: 120, spread: 60 },
  blue: { base: 220, spread: 200 },
  purple: { base: 280, spread: 300 },
  red: { base: 0, spread: 200 },
  orange: { base: 30, spread: 200 }
};

const beforeAfterStyles = `
  [data-glow]::before,
  [data-glow]::after {
    pointer-events: none;
    content: "";
    position: absolute;
    inset: calc(var(--border-size) * -1);
    border: var(--border-size) solid transparent;
    border-radius: calc(var(--radius) * 1px);
    background-attachment: scroll;
    background-size: calc(100% + (2 * var(--border-size))) calc(100% + (2 * var(--border-size)));
    background-repeat: no-repeat;
    background-position: 50% 50%;
    mask: linear-gradient(transparent, transparent), linear-gradient(white, white);
    mask-clip: padding-box, border-box;
    mask-composite: intersect;
  }

  [data-glow]::before {
    background-image: radial-gradient(
      calc(var(--spotlight-size) * 0.75) calc(var(--spotlight-size) * 0.75) at
      calc(var(--x, 0) * 1px)
      calc(var(--y, 0) * 1px),
      hsl(var(--hue, 120) calc(var(--saturation, 90) * 1%) calc(var(--lightness, 55) * 1%) / var(--border-spot-opacity, 1)), transparent 100%
    );
    filter: brightness(2);
  }

  [data-glow]::after {
    background-image: radial-gradient(
      calc(var(--spotlight-size) * 0.5) calc(var(--spotlight-size) * 0.5) at
      calc(var(--x, 0) * 1px)
      calc(var(--y, 0) * 1px),
      hsl(0 100% 100% / var(--border-light-opacity, 1)), transparent 100%
    );
  }

  [data-glow] [data-glow] {
    position: absolute;
    inset: 0;
    will-change: filter;
    opacity: var(--outer, 1);
    border-radius: calc(var(--radius) * 1px);
    border-width: calc(var(--border-size) * 20);
    filter: blur(calc(var(--border-size) * 10));
    background: none;
    pointer-events: none;
    border: none;
  }

  [data-glow] > [data-glow]::before {
    inset: -10px;
    border-width: 10px;
  }
`;

export function GlowCard({
  children,
  className = '',
  glowColor = 'green',
  style = {},
}) {
  const cardRef = useRef(null);
  const innerRef = useRef(null);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    // Detect touch device once on mount
    const touch = window.matchMedia('(hover: none) and (pointer: coarse)').matches;
    setIsTouch(touch);
  }, []);

  useEffect(() => {
    if (isTouch) return; // skip on mobile entirely

    const syncPointer = (e) => {
      const { clientX: x, clientY: y } = e;
      if (cardRef.current) {
        cardRef.current.style.setProperty('--x', x.toFixed(2));
        cardRef.current.style.setProperty('--xp', (x / window.innerWidth).toFixed(2));
        cardRef.current.style.setProperty('--y', y.toFixed(2));
        cardRef.current.style.setProperty('--yp', (y / window.innerHeight).toFixed(2));
      }
    };

    window.addEventListener('pointermove', syncPointer, { passive: true });
    return () => window.removeEventListener('pointermove', syncPointer);
  }, [isTouch]);

  const { base, spread } = glowColorMap[glowColor] || glowColorMap.green;

  // On touch devices, render a simple styled card with no glow
  if (isTouch) {
    return (
      <div
        style={{
          position: 'relative',
          borderRadius: '8px',
          border: '1px solid #1e1e1e',
          background: '#0f0f0f',
          ...style,
        }}
        className={className}
      >
        {children}
      </div>
    );
  }

  const inlineStyles = {
    '--base': base,
    '--spread': spread,
    '--radius': '8',
    '--border': '2',
    '--backdrop': 'hsl(130 15% 6% / 0.95)',
    '--backup-border': 'var(--backdrop)',
    '--size': '220',
    '--saturation': '90',
    '--lightness': '55',
    '--outer': '1',
    '--border-size': 'calc(var(--border, 2) * 1px)',
    '--spotlight-size': 'calc(var(--size, 150) * 1px)',
    '--hue': 'calc(var(--base) + (var(--xp, 0) * var(--spread, 0)))',
    backgroundImage: `radial-gradient(
      var(--spotlight-size) var(--spotlight-size) at
      calc(var(--x, 0) * 1px)
      calc(var(--y, 0) * 1px),
      hsl(var(--hue, 120) calc(var(--saturation, 90) * 1%) calc(var(--lightness, 55) * 1%) / var(--bg-spot-opacity, 0.08)), transparent
    )`,
    backgroundColor: 'var(--backdrop, transparent)',
    backgroundSize: 'calc(100% + (2 * var(--border-size))) calc(100% + (2 * var(--border-size)))',
    backgroundPosition: '50% 50%',
    backgroundAttachment: 'scroll',
    border: 'var(--border-size) solid var(--backup-border)',
    position: 'relative',
    touchAction: 'pan-y',
    borderRadius: '8px',
    ...style,
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: beforeAfterStyles }} />
      <div
        ref={cardRef}
        data-glow
        style={inlineStyles}
        className={className}
      >
        <div ref={innerRef} data-glow />
        {children}
      </div>
    </>
  );
}