import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Inter, JetBrains_Mono } from "next/font/google";
import { SITE_URL, GITHUB } from "@/lib/config";
import "./globals.css";
const jak = Plus_Jakarta_Sans({ subsets: ["latin"], weight: ["700", "800"], variable: "--f-d" });
const inter = Inter({ subsets: ["latin"], variable: "--f-b" });
const mono = JetBrains_Mono({ subsets: ["latin"], weight: ["600"], variable: "--f-m" });
const desc = "MathMap is an AI-assisted mathematics learning platform that finds the misconceptions behind your mistakes and shows you where to begin.";
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "MathMap — Diagnose where you struggle in mathematics",
  description: desc, alternates: { canonical: "/" },
  openGraph: { title: "MathMap — Diagnose · AI", description: desc, type: "website", images: ["/og-image.png"] },
  twitter: { card: "summary_large_image" }, icons: { icon: "/logo/icon.svg" },
};
export const viewport: Viewport = { themeColor: "#09194D", viewportFit: "cover", colorScheme: "dark" };
const ld = { "@context": "https://schema.org", "@type": "WebApplication", name: "MathMap", applicationCategory: "EducationalApplication", description: desc, url: SITE_URL, sameAs: [GITHUB] };
export default function Root({ children }: { children: React.ReactNode }) {
  return (<html lang="en" className={`${jak.variable} ${inter.variable} ${mono.variable}`}><body>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />{children}</body></html>);
}
