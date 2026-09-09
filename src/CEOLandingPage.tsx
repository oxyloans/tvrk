import { useState } from "react";
import AskOxyLogo from "./assets/askoxylogo.png";
import GlobalLogo from "./assets/global logo.png";
import OxyBricksLogo from "./assets/oxybrickslogo.png";
import OxyGoldLogo from "./assets/oxygoldlogo.png";
import OxyLoansLogo from "./assets/oxyloanslogo.png";

/** Plain React JSX + Tailwind. Save as src/CEOLandingPage.jsx.
 * External links use native same-tab navigation; browser Back returns here.
 */
const HERO_IMAGE = "https://i.ibb.co/TqTZKPFq/ceo-image1.png";
const CLONE_URL = "https://askoxy.ai/radhAI/";
const brandPlatforms = [
  { name: "ASKOXY.AI", logo: AskOxyLogo, href: "https://www.askoxy.ai/" },
  { name: "OxyLoans", logo: OxyLoansLogo, href: "https://oxyloans.com/" },
  { name: "OxyBricks", logo: OxyBricksLogo, href: "https://www.oxybricks.world/" },
  { name: "OXYGOLD.AI", logo: OxyGoldLogo, href: "https://oxygold.ai/" },
  { name: "OXYGLOBAL.TECH", logo: GlobalLogo, href: "https://www.oxyglobal.tech/" },
];
const focus = "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-4";
const gradient = { background: "linear-gradient(155deg, #241C91 0%, #70466F 56%, #F15B3B 100%)" };
const navigation = [{ id: "about", label: "About" }, { id: "ecosystem", label: "Our ecosystem" }, { id: "vision", label: "Our vision" }, { id: "platforms", label: "Platforms" }];
const socials = [
  { name: "LinkedIn", href: "https://www.linkedin.com/in/oxyradhakrishna/" },
  { name: "Instagram", href: "https://www.instagram.com/tvradhakrishna/" },
  { name: "Facebook", href: "https://www.facebook.com/share/1AcVZzEu7y/" },
  { name: "X", href: "https://x.com/RadhakrishnaIND" },
];
function SocialIcon({ name }) {
  const props = { width: 21, height: 21, viewBox: "0 0 24 24", "aria-hidden": true, focusable: false };
  if (name === "Instagram") return <svg {...props} fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" /></svg>;
  if (name === "LinkedIn") return <svg {...props} fill="currentColor"><path d="M5.4 3a2.1 2.1 0 1 0 0 4.2 2.1 2.1 0 0 0 0-4.2ZM3.6 9h3.6v12H3.6V9Zm5.8 0h3.5v1.6h.1c.5-1 1.7-1.9 3.5-1.9 3.7 0 4.4 2.4 4.4 5.5V21h-3.6v-6c0-1.5 0-3.3-2-3.3s-2.3 1.6-2.3 3.2V21H9.4V9Z" /></svg>;
  if (name === "Facebook") return <svg {...props} fill="currentColor"><path d="M14 22v-9h3l.5-3H14V8c0-.9.3-1.5 1.6-1.5h2V3.2C17.3 3.1 16.1 3 14.8 3 12 3 10 4.7 10 7.8V10H7v3h3v9h4Z" /></svg>;
  return <svg {...props} fill="currentColor"><path d="M18.9 2H22l-6.8 7.8L23.2 22h-6.3L12 14.6 5.5 22H2.3l8.2-9.4L.8 2h6.5l4.5 6.8L18.9 2ZM17.8 20h1.7L6.3 4H4.5l13.3 16Z" /></svg>;
}
function External({ href, children, className = "" }) {
  // Native anchors preserve modifier-click, keyboard navigation and mobile long-press.
  return <a href={href} className={`${focus} ${className}`}>{children}</a>;
}
function Portrait({ src }) {
  const [failed, setFailed] = useState(false);
  return <div className="w-full">
    {!failed ? <img src={src} alt="Radhakrishna T, CEO and Co-Founder of ASKOXY.AI" width={640} height={800} fetchPriority="high" onError={() => setFailed(true)} className="h-auto max-h-[560px] w-full object-contain object-bottom" /> : <div className="flex aspect-[4/5] items-center justify-center" role="img" aria-label="Radhakrishna T monogram"><span className="text-8xl font-semibold text-white">RK</span></div>}
  </div>;
}

const ecosystemPlatforms = [
  { name: "OxyLoans", description: "RBI-registered NBFC-P2P platform", href: "https://oxyloans.com/" },
  { name: "ASKOXY.AI", description: "AI-powered digital ecosystem", href: "https://www.askoxy.ai/" },
  { name: "RBI Master Directions AI Store", description: "Explore RBI regulatory intelligence", href: "https://www.askoxy.ai/ai-store/rbi-master-directions-ai-store" },
  { name: "Insurance LLM", description: "Explore AI for insurance", href: "https://www.askoxy.ai/genoxy/chat?a=insurance-llm" },
  { name: "OXYBFSAI", description: "AI for banking, financial services & insurance", href: "https://www.askoxy.ai/oxybfsai" },
  { name: "OXYBFSAI Use Case", description: "Explore a BFSI AI use case", href: "https://vibecoding-finvibe.vercel.app/" },
  { name: "OXYFINSERV", description: "Financial services ecosystem", href: "https://www.oxyfinserv.com/" },
  { name: "Bharat Sovereign AI", description: "Building AI for India’s BFSI ecosystem", href: "https://www.askoxy.ai/sovereign-ai" },
];

export default function CEOLandingPage({ portraitUrl = HERO_IMAGE }) {
  const [menuOpen, setMenuOpen] = useState(false);
  function navigateTo(event, id) {
    event.preventDefault();
    setMenuOpen(false);
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "instant", block: "start" });
    section?.focus({ preventScroll: true });
  }
  return (
    <div className="ceo-page min-h-screen overflow-x-clip bg-white font-sans text-slate-900 selection:bg-orange-200">
      <a href="#about" className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-[60] focus:rounded-lg focus:bg-white focus:p-3">Skip to content</a>
      <style>{`#root { max-width: none; width: 100%; margin: 0; padding: 0; text-align: left; } body { margin: 0; display: block; min-width: 320px; } .ceo-page { text-align: left; }`}</style>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200 bg-white">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-3 px-4 sm:px-8">
          <a href="#about" onClick={(event) => navigateTo(event, "about")} aria-label="Go to introduction" className={`flex items-center gap-3 text-left ${focus}`}>
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#30238D] text-sm font-bold text-white">RK</span>
            <span className="text-sm font-bold sm:text-base">Radhakrishna T<span className="mt-0.5 block text-xs font-normal text-slate-500">CEO &amp; Co-Founder</span></span>
          </a>
          <nav aria-label="Main navigation" className="hidden items-center gap-7 md:flex">
            {navigation.map(item => <a key={item.id} href={`#${item.id}`} onClick={(event) => navigateTo(event, item.id)} className={`inline-flex min-h-11 items-center text-sm font-semibold text-slate-600 hover:text-[#30238D] ${focus}`}>{item.label}</a>)}
          </nav>
          <button type="button" aria-expanded={menuOpen} aria-controls="mobile-menu" onClick={() => setMenuOpen(value => !value)} className={`min-h-11 rounded-lg border border-slate-300 px-3 text-sm font-semibold md:hidden ${focus}`}>{menuOpen ? "Close" : "Menu"}</button>
        </div>
        {menuOpen && <nav id="mobile-menu" aria-label="Mobile navigation" className="grid border-t border-slate-100 bg-white p-3 md:hidden">{navigation.map(item => <a key={item.id} href={`#${item.id}`} onClick={(event) => navigateTo(event, item.id)} className={`rounded-lg px-4 py-3 text-left text-sm font-semibold hover:bg-violet-50 ${focus}`}>{item.label}</a>)}</nav>}
      </header>
      <main className="pt-20">
        <section id="about" tabIndex={-1} aria-labelledby="hero-heading" className="scroll-mt-20 text-white outline-none" style={gradient}>
          <div className="mx-auto grid max-w-7xl items-center gap-9 px-4 py-12 sm:px-8 sm:py-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
            <div className="min-w-0">
              <p className="text-xs font-semibold uppercase tracking-[0.16em]">FinTech · BFSI · Artificial Intelligence</p>
              <h1 id="hero-heading" className="mt-5 text-[clamp(2.25rem,5.8vw,5rem)] font-bold leading-[1.1] tracking-tight">Radhakrishna<br />Thatavarti</h1>
              <p className="mt-5 text-lg font-semibold">CEO &amp; Co-Founder, ASKOXY.AI</p>
              <p className="mt-4 max-w-lg text-base leading-7 text-white/90 sm:text-lg">Connecting finance, technology, and AI to create practical opportunities for Bharat.</p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a href="#ecosystem" onClick={(event) => navigateTo(event, "ecosystem")} className={`inline-flex min-h-12 items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-bold text-[#30238D] hover:bg-orange-50 ${focus}`}>Explore our ecosystem</a>

              </div>
              <External href={CLONE_URL} className="mt-4 inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-white px-6 py-3 text-sm font-bold text-[#30238D] hover:bg-orange-50">Talk to my AI clone <span aria-hidden="true">↗</span></External>
              <nav aria-label="Social media profiles" className="mt-8 flex flex-wrap gap-3">{socials.map(item => <External key={item.name} href={item.href} className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/40 text-white hover:bg-white/10"><SocialIcon name={item.name} /><span className="sr-only">Visit {item.name} profile</span></External>)}</nav>
            </div>
            <div className="mx-auto w-full max-w-sm lg:max-w-md"><Portrait key={portraitUrl} src={portraitUrl} /></div>
          </div>
        </section>
        <section id="ecosystem" tabIndex={-1} aria-labelledby="ecosystem-heading" className="mx-auto max-w-7xl scroll-mt-24 px-4 py-12 outline-none sm:px-8 sm:py-16">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#59388B]">Our ecosystem</p>
          <h2 id="ecosystem-heading" className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Explore our AI &amp; financial ecosystem</h2>
          <p className="mt-3 max-w-2xl leading-7 text-slate-600">Discover our work across lending, financial services, and AI.</p>
          <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {ecosystemPlatforms.map((item, index) => <External key={item.href} href={item.href} className="flex min-w-0 flex-col rounded-2xl border border-violet-100 bg-violet-50/40 p-5 hover:border-violet-400">
              <span className="flex items-center justify-between text-sm text-[#59388B]"><span>{String(index + 1).padStart(2, "0")}</span><span aria-hidden="true">↗</span></span>
              <h3 className="mt-5 text-lg font-bold leading-6 text-[#30238D]">{item.name}</h3>
              <p className="mb-5 mt-2 text-sm leading-6 text-slate-600">{item.description}</p>
              <span className="mt-auto border-t border-violet-100 pt-3 text-sm font-semibold text-[#30238D]">Visit platform</span>
            </External>)}
          </div>
        </section>
        <section id="vision" tabIndex={-1} aria-labelledby="vision-heading" className="scroll-mt-24 border-t border-violet-100 bg-[#F6F4FA] outline-none">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-8 sm:py-16 lg:grid-cols-2 lg:gap-14">
            <div className="min-w-0">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#59388B]">Our vision &amp; AI</p>
              <h2 id="vision-heading" className="mt-3 text-3xl font-bold leading-tight tracking-tight sm:text-4xl">Making AI useful.<br />Creating opportunities.</h2>
              <p className="mt-5 max-w-xl leading-7 text-slate-600">Our ecosystem brings together finance, technology, and artificial intelligence. Our focus is simple: make information easier to understand, simplify everyday work, and help people explore new opportunities.</p>
              <p className="mt-4 max-w-xl leading-7 text-slate-600">Through ASKOXY.AI and our connected platforms, we are exploring practical ways to apply AI across banking, financial services, insurance, and business.</p>
              <External href="https://www.askoxy.ai/" className="mt-7 inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-[#30238D] px-6 py-3 text-sm font-semibold text-white hover:bg-[#241C71]">Explore ASKOXY.AI <span aria-hidden="true">↗</span></External>
            </div>
            <div className="grid gap-4">
              {[
                { title: "AI for everyday work", text: "Explore how AI can help answer questions, organize information, and support everyday business tasks." },
                { title: "A focus on financial services", text: "Discover our work around BFSI AI, insurance knowledge, and access to RBI regulatory information." },
                { title: "Building for Bharat", text: "Our vision is to develop useful AI experiences shaped by local needs, with people at the center." },
              ].map((item, index) => <article key={item.title} className="flex items-start gap-4 rounded-2xl border border-violet-100 bg-white p-5 sm:p-6">
                <span aria-hidden="true" className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-violet-50 text-sm font-bold text-[#59388B]">{String(index + 1).padStart(2, "0")}</span>
                <div className="min-w-0"><h3 className="text-lg font-bold text-[#30238D]">{item.title}</h3><p className="mt-2 text-sm leading-6 text-slate-600">{item.text}</p></div>
              </article>)}
            </div>
          </div>
        </section>
        <section id="platforms" tabIndex={-1} aria-labelledby="platforms-heading" className="scroll-mt-24 bg-[#17132E] text-white outline-none">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-8 sm:py-16">
            <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
              <div><p className="text-xs font-semibold uppercase tracking-[0.16em] text-orange-200">Our connected platforms</p><h2 id="platforms-heading" className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">One ecosystem. More possibilities.</h2><p className="mt-3 max-w-xl text-sm leading-7 text-white/80">Explore our platforms across AI, lending, gold, property, and technology.</p></div>
              <External href={CLONE_URL} className="inline-flex min-h-12 shrink-0 items-center justify-center gap-3 self-start rounded-full border border-white/40 px-5 py-3 text-sm font-semibold hover:bg-white/10 lg:self-auto">Explore RadhAI clone <span aria-hidden="true">↗</span></External>
            </div>
            <div className="mt-8 grid grid-cols-1 gap-x-6 gap-y-5 min-[420px]:grid-cols-2 md:grid-cols-3 xl:grid-cols-5">
              {brandPlatforms.map(platform => <External key={platform.name} href={platform.href} className="flex min-w-0 flex-col items-center justify-center gap-3 rounded-lg px-3 py-5 hover:bg-white/5">
                <img src={platform.logo} alt={platform.name} loading="lazy" className="h-20 w-full max-w-[240px] object-contain sm:h-24" />
                
              </External>)}
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t border-slate-200 px-4 py-6 text-center text-xs leading-6 text-slate-500">© {new Date().getFullYear()}. All rights reserved.</footer>
    </div>
  );
}
