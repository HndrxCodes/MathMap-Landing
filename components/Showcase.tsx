"use client";
import { useState } from "react";
import { Phone } from "./Shot"; import { SHOTS } from "@/lib/config";
const T = [
  ["Choose your goal", "menu", "Start from what you need, no topic names required.", ["Prepare for a test: SAT, CSCA or your own exam", "Master a topic with a focused test", "Find my root cause: each mistake traced to its source skill"]],
  ["Diagnostic", "question", "Answer short multiple-choice questions, one at a time.", ["Clear progress through the test", "Five options, plus “I don’t know” when you’re unsure", "Go back and change an answer before moving on"]],
  ["Learning path", "result", "See where you stand and where to start.", ["Correct, not quite and unsure at a glance", "Each topic marked Developing or Needs work", "A suggested starting topic and daily time"]],
  ["History", "history", "Review your earlier tests at any time.", ["Each test with its time and score", "A result bar for every attempt", "Your latest test is highlighted"]],
] as const;
export default function Showcase() {
  const [i, set] = useState(0); const [t, k, d, l] = T[i];
  return (<div><div className="tabs" role="tablist">{T.map(([n], j) => <button key={n} role="tab" aria-selected={i === j} className="tab" onClick={() => set(j)}>{n}</button>)}</div>
    <div className="panel" key={i}><div className="fade"><h3>{t}</h3><p className="mut">{d}</p><ul className="ul">{l.map((x) => <li key={x}>{x}</li>)}</ul></div>
      <div className="fade pc"><Phone src={(SHOTS as any)[k]} alt={`MathMap: ${t}`} /></div></div></div>);
}
