import { ArrowUpRight, Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "wouter";

const navItems = [
  ["Services", "/services"],
  ["Industries", "/industries"],
  ["How it works", "/how-it-works"],
  ["Portfolio", "/portfolio"],
  ["About", "/about"],
  ["FAQ", "/faq"],
] as const;

const seo: Record<string, [string, string]> = {
  "/": ["Global Estimating Solutions | Construction Estimating & Takeoffs", "Professional construction estimating, quantity takeoffs, material takeoffs, and cost estimating for contractors, developers, suppliers, and investors."],
  "/services": ["Construction Estimating Services | Global Estimating Solutions", "Construction estimating, quantity takeoffs, material takeoffs, cost estimating, and trade-specific estimating support."],
  "/industries": ["Industries & Trades Served | Global Estimating Solutions", "Estimating support for general contractors, subcontractors, suppliers, developers, builders, and real estate investors."],
  "/about": ["About Global Estimating Solutions | Detail-First Estimating", "Meet Global Estimating Solutions, a professional construction estimating company focused on clarity, accuracy, and reliable support."],
  "/how-it-works": ["How Construction Estimating Works | Global Estimating Solutions", "See the five-stage Global Estimating Solutions workflow from submitted plans to bid-ready delivery."],
  "/portfolio": ["Estimating Portfolio | Global Estimating Solutions", "Explore representative construction estimating, quantity takeoff, and cost estimating project profiles."],
  "/faq": ["Construction Estimating FAQ | Global Estimating Solutions", "Answers about drawings, turnaround times, pricing, revisions, deliverables, and construction estimating services."],
  "/contact": ["Request a Construction Estimate | Global Estimating Solutions", "Submit your construction project for a free quote, quantity takeoff, material takeoff, or cost estimate."],
};

function Brand() {
  return (
    <Link href="/" className="flex items-center gap-3 shrink-0" aria-label="Global Estimating Solutions home">
      <span className="flex h-10 w-10 items-center justify-center bg-[#0066FF] text-white font-bold text-lg display">GE</span>
      <span className="leading-[.95]">
        <span className="block display text-[1.02rem] font-bold tracking-[-.04em] text-[#0A0A0A]">GLOBAL</span>
        <span className="block text-[.56rem] font-bold tracking-[.18em] text-[#0066FF]">ESTIMATING SOLUTIONS</span>
      </span>
    </Link>
  );
}

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [location] = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setMenuOpen(false);
    const [title, description] = seo[location] || seo["/"];
    document.title = title;
    document.querySelector('meta[name="description"]')?.setAttribute("content", description);
  }, [location]);

  return (
    <div className="min-h-screen bg-[#F3F4F6] text-[#15202a]">
      <div className="bg-[#0A0A0A] text-white/80 text-[.72rem]">
        <div className="container flex min-h-9 items-center justify-between gap-4">
          <p className="hidden sm:block">Precise takeoffs. Confident bids. Better margins.</p>
          <a href="mailto:estimating@globalestimatingsolutions.com" className="ml-auto flex items-center gap-2 hover:text-white transition-colors"><span className="h-1.5 w-1.5 rounded-full bg-[#0066FF]" />estimating@globalestimatingsolutions.com</a>
        </div>
      </div>
      <header className="sticky top-0 z-40 border-b border-[#D1D5DB] bg-[#F3F4F6]/95 backdrop-blur-md">
        <div className="container flex h-[4.65rem] items-center justify-between gap-8">
          <Brand />
          <nav className="hidden lg:flex items-center gap-6" aria-label="Main navigation">
            {navItems.map(([label, href]) => <Link key={href} href={href} className={`text-[.8rem] font-semibold transition-colors hover:text-[#0066FF] ${location === href ? "text-[#0066FF]" : "text-[#6B7280]"}`}>{label}</Link>)}
          </nav>
          <div className="hidden lg:flex items-center gap-3">
            <a href="tel:+18005550148" className="flex items-center gap-2 text-[.78rem] font-semibold text-[#6B7280] hover:text-[#0066FF]"><Phone size={14} /> (800) 555-0148</a>
            <Link href="/contact" className="btn-primary">Get a Free Quote <ArrowUpRight size={15} /></Link>
          </div>
          <button type="button" aria-label={menuOpen ? "Close menu" : "Open menu"} className="lg:hidden border border-[#D1D5DB] p-2 text-[#0A0A0A]" onClick={() => setMenuOpen((open) => !open)}>{menuOpen ? <X size={22} /> : <Menu size={22} />}</button>
        </div>
        {menuOpen && <div className="lg:hidden border-t border-[#D1D5DB] bg-[#F3F4F6] px-5 py-5 shadow-lg"><nav className="flex flex-col gap-4" aria-label="Mobile navigation">{navItems.map(([label, href]) => <Link key={href} href={href} className="text-sm font-semibold text-[#374151]">{label}</Link>)}<Link href="/contact" className="btn-primary mt-2">Get a Free Quote <ArrowUpRight size={15} /></Link></nav></div>}
      </header>
      <main>{children}</main>
      <footer className="bg-[#0A0A0A] text-white">
        <div className="container grid gap-10 py-14 md:grid-cols-[1.2fr_.8fr_.8fr_1fr]">
          <div><Brand /><p className="mt-5 max-w-xs text-sm leading-6 text-white/55">Construction estimating and quantity takeoff support that helps you price with clarity and pursue the right work.</p><div className="mt-5 flex items-center gap-2 text-xs text-white/50"><span className="h-2 w-2 rounded-full bg-[#0066FF]" />Serving contractors, builders & developers worldwide</div></div>
          <div><p className="eyebrow text-[#0066FF]">Explore</p><div className="mt-4 flex flex-col gap-3 text-sm text-white/65">{navItems.slice(0, 3).map(([label, href]) => <Link key={href} href={href} className="hover:text-white transition-colors">{label}</Link>)}</div></div>
          <div><p className="eyebrow text-[#0066FF]">Company</p><div className="mt-4 flex flex-col gap-3 text-sm text-white/65"><Link href="/about" className="hover:text-white">About us</Link><Link href="/portfolio" className="hover:text-white">Portfolio</Link><Link href="/faq" className="hover:text-white">FAQ</Link><Link href="/contact" className="hover:text-white">Request an estimate</Link></div></div>
          <div><p className="eyebrow text-[#0066FF]">Talk to our team</p><a href="tel:+18005550148" className="mt-4 block display text-xl font-semibold hover:text-[#0066FF]">(800) 555-0148</a><a href="mailto:estimating@globalestimatingsolutions.com" className="mt-2 block break-all text-sm text-white/65 hover:text-white">estimating@globalestimatingsolutions.com</a><p className="mt-5 text-xs leading-5 text-white/45">Mon–Fri, 8:00 AM–6:00 PM ET<br />Fast responses for active bid deadlines.</p></div>
        </div>
        <div className="border-t border-white/10"><div className="container flex flex-col gap-2 py-5 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between"><p>© {new Date().getFullYear()} Global Estimating Solutions. All rights reserved.</p><p>Accuracy built into every line item.</p></div></div>
      </footer>
    </div>
  );
}
