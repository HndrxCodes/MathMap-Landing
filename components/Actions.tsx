"use client";
import { useEffect, useState } from "react";
import { APP_URL, YT_ID } from "@/lib/config";
export function AppLink({ children, className = "btn p" }: { children: React.ReactNode; className?: string }) {
  return <a className={className} href={APP_URL || "#"} target={APP_URL ? "_blank" : undefined} rel="noopener"
    onClick={(e) => { if (!APP_URL) { e.preventDefault(); alert("Isi APP_URL di lib/config.ts"); } }}>{children}</a>;
}
export function DemoButton({ className = "btn s" }: { className?: string }) {
  const [open, set] = useState(false);
  useEffect(() => { const k = (e: KeyboardEvent) => e.key === "Escape" && set(false); addEventListener("keydown", k);
    document.body.style.overflow = open ? "hidden" : ""; return () => removeEventListener("keydown", k); }, [open]);
  return (<><button className={className} onClick={() => set(true)}>▶ Watch Demo</button>
    {open && <div className="modal" role="dialog" aria-modal="true" aria-label="MathMap demo" onClick={() => set(false)}>
      <div className="mb" onClick={(e) => e.stopPropagation()}><button autoFocus className="x" onClick={() => set(false)}>Close ✕</button>
        <div className="vid"><iframe src={`https://www.youtube-nocookie.com/embed/${YT_ID}?rel=0`} title="MathMap demo" allow="encrypted-media; picture-in-picture; fullscreen" allowFullScreen /></div></div></div>}</>);
}
