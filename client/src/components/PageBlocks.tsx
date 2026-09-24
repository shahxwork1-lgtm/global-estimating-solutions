import { ArrowRight, Check, ChevronRight } from "lucide-react";
import { Link } from "wouter";

export function PageHeader({ eyebrow, title, body, image = "/manus-storage/blueprint-plan_097c0ef9.webp" }: { eyebrow: string; title: string; body: string; image?: string }) {
  return <section className="relative overflow-hidden bg-[#111827] text-white"><div className="absolute inset-0 blueprint-grid opacity-60" /><div className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-[#0047AB]/35 to-transparent" /><div className="container relative grid min-h-[23rem] items-end gap-8 py-14 md:grid-cols-[1.1fr_.9fr] md:py-20"><div><p className="eyebrow text-[#7FB2FF]">{eyebrow}</p><h1 className="display mt-4 max-w-3xl text-4xl font-semibold leading-[1.02] sm:text-5xl md:text-6xl">{title}</h1><p className="mt-5 max-w-xl text-base leading-7 text-white/65">{body}</p></div><div className="hidden h-48 overflow-hidden border border-white/20 md:block"><img src={image} alt="Architectural blueprint detail" className="h-full w-full object-cover opacity-55 mix-blend-screen" /></div></div></section>
}

export function CheckList({ items }: { items: string[] }) { return <ul className="space-y-3">{items.map((item) => <li key={item} className="flex items-start gap-3 text-sm leading-6 text-[#6B7280]"><span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#E8F0FF] text-[#0047AB]"><Check size={12} strokeWidth={3} /></span>{item}</li>)}</ul>; }

export function ArrowLink({ href, children }: { href: string; children: React.ReactNode }) { return <Link href={href} className="group inline-flex items-center gap-2 text-sm font-bold text-[#0047AB] hover:text-[#0066FF]">{children}<ArrowRight size={16} className="transition-transform group-hover:translate-x-1" /></Link>; }

export function SectionIntro({ eyebrow, title, body, align = "left" }: { eyebrow: string; title: string; body?: string; align?: "left" | "center" }) { return <div className={`${align === "center" ? "mx-auto text-center" : ""} max-w-2xl`}><p className="eyebrow">{eyebrow}</p><h2 className="display mt-3 text-3xl font-semibold leading-[1.05] text-[#0A0A0A] sm:text-4xl">{title}</h2>{body && <p className="mt-4 text-base leading-7 text-[#6B7280]">{body}</p>}</div>; }

export function Breadcrumb({ label }: { label: string }) { return <div className="container flex items-center gap-2 py-4 text-xs text-[#6B7280]"><Link href="/" className="hover:text-[#0066FF]">Home</Link><ChevronRight size={13} /><span>{label}</span></div>; }
