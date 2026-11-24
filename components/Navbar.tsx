"use client";
import { useEffect, useState } from "react";
import { Logo } from "./Logo"; import { AppLink } from "./Actions"; import { GITHUB } from "@/lib/config";
export default function Navbar() {
  const [sc, setSc] = useState(false), [open, setOpen] = useState(false), [p, setP] = useState(0);
  useEffect(() => { const f = () => { setSc(scrollY > 20); const h = document.documentElement.scrollHeight - innerHeight; setP(h > 0 ? scrollY / h : 0); };
    f(); addEventListener("scroll", f, { passive: true }); return () => removeEventListener("scroll", f); }, []);
  const L = [["Features", "#features"], ["How It Works", "#how"], ["Technology", "#tech"], ["About", "#about"]];
  return (<><div className="bar" style={{ transform: `scaleX(${p})` }} />
    <nav className={`nav ${sc ? "sc" : ""}`}><div className="pill">
      <a href="#top" aria-label="MathMap"><Logo /></a>
      <div className={`links ${open ? "open" : ""}`}>{L.map(([t, h]) => <a key={h} href={h} onClick={() => setOpen(false)}>{t}</a>)}
        <a className="gh" href={GITHUB} target="_blank" rel="noopener" aria-label="GitHub repository">GitHub ↗</a>
        <AppLink className="btn p sm">Launch App</AppLink></div>
      <button className="burger" aria-label="Menu" aria-expanded={open} onClick={() => setOpen(!open)}>☰</button>
    </div></nav></>);
}
