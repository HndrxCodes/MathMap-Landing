import { Reveal } from "./Reveal";
export function Graph({ label }: { label?: string }) {
  return (<svg viewBox="0 0 560 300" className="gsvg" role="img" aria-label={label || "Conceptual knowledge graph"}>
    <defs><linearGradient id="gg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#8A69E8" /><stop offset="1" stopColor="#00DDEB" /></linearGradient></defs>
    <g stroke="#3a4a8c" strokeWidth="1.5" fill="none"><path d="M120 230L220 170M220 170L330 190M220 170L270 90M330 190L430 120M270 90L430 120M120 230L180 270"/></g>
    <path className="ed" pathLength={1} d="M70 240C130 240 150 200 220 170S320 120 400 80 470 50 500 40" fill="none" stroke="url(#gg)" strokeWidth="3" strokeLinecap="round" />
    {[[220,170],[330,190],[270,90],[430,120],[120,230],[180,270]].map(([x,y],i)=><circle key={i} cx={x} cy={y} r="7" fill="#172B70" stroke="#8A69E8" strokeWidth="2"/>)}
    <circle className="pl p2" cx="70" cy="240" r="10" fill="#D66BEF" /><circle className="pl p1" cx="500" cy="40" r="10" fill="#00DDEB" />
    <g fontFamily="var(--f-m)" fontSize="11" fill="#A5A9C9"><text x="40" y="268">current understanding</text><text x="370" y="28">deeper understanding</text></g></svg>);
}
export function Frame({ src, alt, label, glow = false }: { src?: string; alt: string; label: string; glow?: boolean }) {
  return (<div className={`frame ${glow ? "glow" : ""}`}><div className="fb"><b /><b /><b /></div>
    {src ? <img src={src} alt={alt} loading="lazy" className="shot" /> : <><Graph label={alt} /><div className="cap">{label}</div></>}</div>);
}
export function Phone({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  return (<div className={`phone ${className}`}><img src={src} alt={alt} width={540} height={1060} loading="lazy" /></div>);
}
