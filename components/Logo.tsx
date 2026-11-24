export function LogoIcon({ size = 44 }: { size?: number }) {
  return (<span className="tile" style={{ width: size, height: size, borderRadius: size * 0.28 }}>
    <svg viewBox="0 0 40 40" width={size * 0.66} height={size * 0.66} aria-hidden="true" style={{ overflow: "visible" }}>
      <defs><linearGradient id="lg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#a855f7" /><stop offset="1" stopColor="#06b6d4" /></linearGradient></defs>
      <path d="M23 8C18 8 17 12 17 17V23C17 28 16 32 11 32" fill="none" stroke="url(#lg)" strokeWidth="3.6" strokeLinecap="round" />
      <circle className="pl p1" cx="23" cy="8" r="3.2" fill="#06b6d4" /><circle className="pl p2" cx="11" cy="32" r="3.2" fill="#D66BEF" />
    </svg></span>);
}
export function Logo({ sub = false }: { sub?: boolean }) {
  return (<span className="logo"><LogoIcon size={sub ? 52 : 40} />
    <span><b>Math<i className="grad">Map</i></b>{sub && <small>DIAGNOSE <u>•</u> AI</small>}</span></span>);
}
