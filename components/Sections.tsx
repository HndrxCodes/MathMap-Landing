import { Reveal } from "./Reveal"; import { Frame, Phone } from "./Shot"; import { Logo } from "./Logo";
import { AppLink, DemoButton } from "./Actions"; import Showcase from "./Showcase"; import { GITHUB, SHOTS } from "@/lib/config";
export function Hero() {
  return (<section className="hero" id="top"><div className="grid-bg" /><div className="wrap c">
    <Reveal><span className="badge">✦ Intelligent mathematics learning</span></Reveal>
    <Reveal delay={80} as="h1">Understand where you struggle.<br /><span className="grad">Discover where to begin.</span></Reveal>
    <Reveal delay={160} as="p" className="sub">Go beyond right and wrong answers. Discover the misconceptions behind your mistakes and build a learning path that starts with what you actually need.</Reveal>
    <Reveal delay={240} className="cta"><AppLink>Start Diagnosing →</AppLink><DemoButton /></Reveal>
    <Reveal delay={280} as="p" className="hint">Works best on your phone · First load may take a few seconds</Reveal>
    <Reveal delay={360} className="hp"><Phone className="side l" src={SHOTS.menu} alt="MathMap goal selection" /><Phone className="mid" src={SHOTS.result} alt="MathMap diagnostic result and learning path" /><Phone className="side r" src={SHOTS.question} alt="MathMap diagnostic question" /></Reveal>
  </div></section>);
}
const H = ({ e, t, p }: { e: string; t: string; p?: string }) => (<Reveal><div className="eyebrow">{e}</div><h2>{t}</h2>{p && <p className="lead">{p}</p>}</Reveal>);
export function Problem() {
  const C = [["Quadratic equations", "Where the mistake shows up"], ["Factoring", "Depends on…"], ["Algebraic manipulation", "Depends on…"], ["Fractions", "A possible root cause"]];
  return (<section id="problem"><div className="wrap two"><div>
    <H e="The problem" t="A wrong answer is only the beginning." p="A wrong answer does not always reveal the real problem. A student struggling with advanced algebra may actually have difficulties with earlier foundations. MathMap helps you find those connections." /></div>
    <div className="chain">{C.map(([a, b], i) => <Reveal key={a} delay={i * 220} className={`cn ${i === 0 ? "top" : ""}`}><span className="dot" /><div><b>{a}</b><small>{b}</small></div></Reveal>)}
      <p className="note">Illustrative example, not real student data.</p></div></div></section>);
}
export function How() {
  const S = [["Quick scan", "Answer a short set of questions to show how you think."], ["Diagnostic map", "Mistakes are traced back to the skills they come from."], ["Practice", "Start with the topic that needs the most work."]];
  return (<section id="how" className="alt"><div className="wrap"><H e="How it works" t="Three steps to understanding." />
    <div className="steps s3"><Reveal className="rail"><i /></Reveal>{S.map(([a, b], i) => <Reveal key={a} delay={i * 160} className="st"><div className="n">0{i + 1}</div><h3>{a}</h3><p>{b}</p></Reveal>)}</div></div></section>);
}
export function Features() {
  return (<section id="features"><div className="wrap"><H e="Explore the experience" t="See what MathMap does." p="Real screens from the MathMap app." /><Showcase /></div></section>);
}
export function Navigator() {
  return (<section id="navigator" className="alt"><div className="wrap two"><div>
    <H e="Meet Navigator" t="A planning companion, not just a chatbot." p="Navigator is MathMap's AI planning agent, available from anywhere in the app. It uses your diagnostic results and learning context to help you decide what to study next." /></div>
    <Reveal><Frame src={SHOTS.navigator} alt="Navigator" label="CONCEPTUAL ILLUSTRATION" /></Reveal></div></section>);
}
export function Tech() {
  // VERIFIKASI dengan implementasi repo sebelum publish
  const C = [["Root-cause tracing", "Each mistake is traced back to the skill it comes from."], ["Mastery levels", "Every topic shows how well you know it, such as Developing or Needs work."], ["Guided learning path", "A suggested starting topic and pace, based on your results."], ["Navigator AI", "AI-assisted planning for your next step."]];
  return (<section id="tech"><div className="wrap"><H e="Under the hood" t="The ideas behind the diagnosis." />
    <div className="g4">{C.map(([a, b], i) => <Reveal key={a} delay={i * 80} className="card"><span className="tag">0{i + 1}</span><h3>{a}</h3><p>{b}</p></Reveal>)}</div>
    <Reveal><p className="src"><a href={GITHUB} target="_blank" rel="noopener">Explore the source code on GitHub ↗</a></p></Reveal></div></section>);
}
export function Final() {
  return (<section id="about" className="final"><div className="wrap c"><Reveal as="h2">Your next step in mathematics starts here.</Reveal>
    <Reveal delay={100} as="p" className="lead">Begin by understanding what you already know. The path forward follows from there.</Reveal>
    <Reveal delay={200}><AppLink className="btn w">Start Your Diagnostic →</AppLink></Reveal></div></section>);
}
export function Footer() {
  return (<footer><div className="wrap"><div className="fg"><div><Logo sub /><p className="mut" style={{ maxWidth: 300 }}>Understand the gap. Discover the path. Master mathematics.</p></div>
    <div className="fl"><a href="#features">Features</a><a href="#how">How It Works</a><a href="#tech">Technology</a><AppLink className="">Launch App</AppLink></div>
    <div className="fl"><a href={GITHUB} target="_blank" rel="noopener">GitHub</a><a href="https://youtu.be/s2OKHyAU2FI" target="_blank" rel="noopener">YouTube demo</a></div></div>
    <div className="copy">© {new Date().getFullYear()} MathMap. All rights reserved.</div></div></footer>);
}
