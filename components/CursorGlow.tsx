"use client";

import { useEffect, useRef } from "react";

export default function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const glow = glowRef.current;
    if (!glow) return;

    const handleMouseMove = (e: MouseEvent) => {
      glow.style.transform = `translate(${e.clientX - 400}px, ${e.clientY - 400}px)`;
      glow.style.visibility = "visible";

      // e.target already bypasses pointer-events:none elements (the glow itself)
      const section = (e.target as Element)?.closest("[data-section-theme]");
      const isLight = section?.getAttribute("data-section-theme") === "light";
      glow.style.opacity = isLight ? "0.4" : "1";
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={glowRef}
      aria-hidden="true"
      className="pointer-events-none fixed top-0 left-0 z-[9998] will-change-transform"
      style={{
        width: "800px",
        height: "800px",
        background: "radial-gradient(400px circle at center, rgba(12, 192, 223, 0.12), transparent 70%)",
        visibility: "hidden",
        transition: "opacity 0.4s ease",
      }}
    />
  );
}
