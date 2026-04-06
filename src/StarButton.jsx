import React, { useRef, useEffect } from "react";

const starBtnStyle = `
  @keyframes star-btn {
    0% { offset-distance: 0%; }
    100% { offset-distance: 100%; }
  }

  .star-btn-outer {
    position: relative;
    z-index: 3;
    overflow: hidden;
    height: 40px;
    padding: 8px 24px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    white-space: nowrap;
    border-radius: 24px;
    font-size: 12px;
    font-weight: 500;
    cursor: pointer;
    text-decoration: none;
    background: #080808;
    border: 1.5px solid rgba(57,211,83,0.35);
    isolation: isolate;
    font-family: var(--font-mono);
    transition: border-color 0.2s;
  }

  .star-btn-outer:hover {
    border-color: rgba(57,211,83,0.7);
  }

  .star-btn-light {
    position: absolute;
    width: 80px;
    aspect-ratio: 1 / 1;
    background: radial-gradient(ellipse at center, rgba(57,211,83,1), rgba(57,211,83,0.3), transparent 70%);
    offset-distance: 0%;
    animation: star-btn 2.5s linear infinite;
    pointer-events: none;
    z-index: 1;
    filter: blur(3px);
  }

  .star-btn-label {
    position: relative;
    z-index: 10;
    background: linear-gradient(to top, #39d353, #b2f7c1);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`;

export function StarButton({
  children,
  href,
  duration = 2.5,
  className = "",
  ...props
}) {
  const btnRef = useRef(null);

  useEffect(() => {
    if (!btnRef.current) return;
    const el = btnRef.current;

    const setPath = () => {
      const w = el.offsetWidth;
      const h = el.offsetHeight;
      const light = el.querySelector(".star-btn-light");
      if (light) {
        light.style.offsetPath = `path('M 0 0 H ${w} V ${h} H 0 Z')`;
        light.style.animationDuration = `${duration}s`;
      }
    };

    setPath();
    window.addEventListener("resize", setPath);
    return () => window.removeEventListener("resize", setPath);
  }, [duration]);

  const Tag = href ? "a" : "button";

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: starBtnStyle }} />
      <Tag
        ref={btnRef}
        href={href}
        className={`star-btn-outer ${className}`}
        {...props}
      >
        <div className="star-btn-light" />
        <span className="star-btn-label">{children}</span>
      </Tag>
    </>
  );
}