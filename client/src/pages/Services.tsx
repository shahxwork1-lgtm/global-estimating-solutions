import { ArrowRight, Building2, Calculator, Clock3, FileCheck2, FileSpreadsheet, Hammer, Layers3, Ruler, Wrench } from "lucide-react";
import { Link } from "wouter";
import { ArrowLink, Breadcrumb, PageHeader, SectionIntro } from "@/components/PageBlocks";

const samplePdf = "https://globalestimatingsolutions.com/wp-content/uploads/2024/08/ESTIMATE-METALS-1.pdf";

type Service = { title: string; description: string; icon: typeof Calculator };

const projectServices: Service[] = [
  { title: "Detailed Estimating with Man-Hours", description: "Labor-aware estimates that pair quantities with production planning and man-hour detail.", icon: Clock3 },
  { title: "Large Commercial Estimating", description: "Structured support for complex commercial scopes, plan sets, addenda, and bid packages.", icon: Building2 },
  { title: "Commercial Estimating", description: "Clear commercial construction estimates organized for confident bidding and review.", icon: FileSpreadsheet },
  { title: "Multifamily Estimating", description: "Repeatable takeoffs and cost detail for apartments, mixed-use, and multifamily developments.", icon: Layers3 },
  { title: "Residential Estimating", description: "Practical quantity takeoffs and cost estimates for homes, additions, and residential scopes.", icon: Hammer },
  { title: "Remodeling Estimating", description: "Scope-conscious estimates for renovations, tenant improvements, and remodeling projects.", icon: Ruler },
];

const tradeServices: Service[] = [
  { title: "Carpentry Estimating", description: "Detailed counts and quantities for rough carpentry, blocking, trim, and wood assemblies.", icon: Hammer },
  { title: "Metals Estimating", description: "Takeoffs for structural steel, miscellaneous metals, metal framing, ladders, railings, and related scopes.", icon: Layers3 },
  { title: "Drywall & Framing Estimating", description: "Wall, partition, board, framing, backing, and finish quantities organized by area and scope.", icon: Ruler },
  { title: "HVAC Estimating", description: "Equipment, ductwork, accessories, insulation, and HVAC scope quantities for bid pricing.", icon: Wrench },
  { title: "Lumber Estimating", description: "Material takeoffs for lumber packages, framing members, sheathing, and related wood products.", icon: Layers3 },
  { title: "Painting Estimating", description: "Surface-area takeoffs and scope detail for interior, exterior, coatings, and prep work.", icon: Ruler },
  { title: "Plumbing Estimating", description: "Fixture, piping, equipment, and plumbing accessory quantities organized for review.", icon: Wrench },
  { title: "Roofing Estimating", description: "Roof areas, membranes, flashings, insulation, accessories, and replacement scope takeoffs.", icon: Building2 },
  { title: "Concrete Estimating", description: "Concrete, reinforcing, formwork, foundations, slabs, and placement-related quantities.", icon: Calculator },
  { title: "Openings Estimating", description: "Doors, frames, hardware, glazing, storefront, and opening schedule takeoffs.", icon: FileCheck2 },
  { title: "Demolition Estimating", description: "Existing-condition removals, selective demolition, disposal, and related scope quantities.", icon: Hammer },
  { title: "Finishes Estimating", description: "Flooring, tile, ceilings, wall finishes, specialties, and finish schedule takeoffs.", icon: Layers3 },
  { title: "Detailed Masonry Estimating", description: "Unit masonry, CMU, brick, mortar, reinforcing, lintels, and masonry accessory detail.", icon: Building2 },
  { title: "Electrical Estimating", description: "Power, lighting, devices, distribution, equipment, and electrical material takeoffs.", icon: Wrench },
];

function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon;
  return <article className="card-lift flex h-full flex-col border border-[#D1D5DB] bg-white p-6">
    <div className="flex items-start justify-between gap-4"><span className="flex h-11 w-11 items-center justify-center bg-[#E8F0FF] text-[#0047AB]"><Icon size={21} /></span><span className="font-mono text-[.65rem] uppercase tracking-[.14em] text-[#6B7280]">GES service</span></div>
    <h3 className="display mt-7 text-xl font-semibold text-[#0A0A0A]">{service.title}</h3>
    <p className="mt-3 flex-1 text-sm leading-6 text-[#6B7280]">{service.description}</p>
    <Link href="/contact" className="group mt-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[.12em] text-[#0047AB] hover:text-[#0066FF]">Request an estimate <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" /></Link>
  </article>;
}

export default function Services() {
  return <>
    <PageHeader eyebrow="Services" title="Estimating support built around your scope." body="From detailed trade takeoffs to complete commercial bids, Global Estimating Solutions delivers organized, reviewable, bid-ready information." />
    <Breadcrumb label="Services" />

    <section className="section-pad bg-white"><div className="container"><div className="flex flex-col justify-between gap-8 md:flex-row md:items-end"><SectionIntro eyebrow="Project estimating" title="Support for the way your project is being planned." body="Choose the level of detail that fits your project stage, delivery model, and bid deadline." /><Link href="/contact" className="btn-primary shrink-0">Get a Free Quote <ArrowRight size={16} /></Link></div><div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">{projectServices.map(service => <ServiceCard key={service.title} service={service} />)}</div></div></section>

    <section className="section-pad bg-[#F3F4F6] blueprint-grid-light"><div className="container"><div className="flex flex-col justify-between gap-8 md:flex-row md:items-end"><SectionIntro eyebrow="Trade estimating" title="Detailed takeoffs across the building scope." body="Our trade-specific services help contractors, suppliers, and project teams price the work with a clearer view of materials, quantities, and scope." /><Link href="/contact" className="btn-ghost shrink-0 border-[#0047AB] text-[#0047AB] hover:bg-[#E8F0FF]">Talk to an estimating expert <ArrowRight size={16} /></Link></div><div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{tradeServices.map(service => <ServiceCard key={service.title} service={service} />)}</div></div></section>

    <section className="section-pad bg-[#111827] text-white"><div className="container"><div className="flex flex-col justify-between gap-8 md:flex-row md:items-end"><div><p className="eyebrow text-[#7FB2FF]">Sample estimates / our work</p><h2 className="display mt-3 text-4xl font-semibold">Review a real Metals estimate.</h2><p className="mt-4 max-w-2xl text-base leading-7 text-white/60">This sample shows a Division 05 Metals estimate with detailed steel sections, channels, plates, grating, ladders, stairs, quantities, weights, unit costs, and totals.</p></div><a href={samplePdf} target="_blank" rel="noreferrer" className="btn-primary shrink-0">Open sample PDF <ArrowRight size={16} /></a></div><div className="mt-10 grid gap-4 md:grid-cols-[1.2fr_.8fr]"><article className="border border-white/15 bg-white/[.05] p-7"><div className="flex items-start justify-between gap-4"><span className="flex h-12 w-12 items-center justify-center bg-[#0066FF] text-white"><FileSpreadsheet size={23} /></span><span className="font-mono text-xs uppercase tracking-[.14em] text-[#7FB2FF]">PDF sample</span></div><h3 className="display mt-8 text-3xl font-semibold">Estimate – Metals</h3><p className="mt-3 max-w-xl text-sm leading-6 text-white/60">A detailed metals estimate sample provided for review. Opens in a new tab so you can inspect the original PDF without leaving the website.</p><div className="mt-7 flex flex-wrap gap-3 text-xs font-semibold text-white/70"><span className="border border-white/15 px-3 py-2">Division 05 Metals</span><span className="border border-white/15 px-3 py-2">Detailed quantities</span><span className="border border-white/15 px-3 py-2">Bid-ready format</span></div></article><div className="border border-white/15 bg-[#0A0A0A] p-7"><p className="eyebrow text-[#7FB2FF]">Need your own sample?</p><h3 className="display mt-4 text-2xl font-semibold">Send your scope for review.</h3><p className="mt-3 text-sm leading-6 text-white/60">We can prepare a trade-specific estimate around your plans, scope, and deadline.</p><Link href="/contact" className="btn-primary mt-7">Request an Estimate <ArrowRight size={16} /></Link></div></div></div></section>

    <section className="section-pad-sm bg-white"><div className="container flex flex-col justify-between gap-7 border border-[#D1D5DB] bg-[#F3F4F6] p-8 md:flex-row md:items-center md:p-12"><div><p className="eyebrow">Ready when you are</p><h2 className="display mt-2 text-3xl font-semibold text-[#0A0A0A]">Have a plan set to review?</h2><p className="mt-2 text-sm text-[#6B7280]">Tell us the scope and deadline. We will help you choose the right estimating service.</p></div><Link href="/contact" className="btn-primary shrink-0">Submit your project <ArrowRight size={16} /></Link></div></section>
  </>;
}
