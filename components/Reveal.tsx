"use client";
import { useEffect, useRef, useState } from "react";
export function Reveal({ children, delay = 0, className = "", as: T = "div" }: { children: React.ReactNode; delay?: number; className?: string; as?: any }) {
  const ref = useRef<HTMLElement>(null); const [on, set] = useState(false);
  useEffect(() => { const el = ref.current; if (!el) return;
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { set(true); io.disconnect(); } }, { threshold: 0.2 });
    io.observe(el); return () => io.disconnect(); }, []);
  return <T ref={ref} className={`rv ${on ? "in" : ""} ${className}`} style={{ transitionDelay: `${delay}ms` }}>{children}</T>;
}
