"use client";

import { useState, type FormEvent, type ReactNode } from "react";

/**
 * React + TypeScript + Tailwind CSS. No icon or animation dependencies.
 * Usage in App.tsx: import CEOLandingPage from './CEOLandingPage';
 * export default function App() { return <CEOLandingPage />; }
 * Ensure your existing Tailwind setup scans this file and your global CSS is imported.
 *
 * Save the photo from https://ibb.co/JFdNxrMF as public/images/radha-krishna.jpg
 * or pass portraitUrl with a direct image URL (not the ibb.co viewer page).
 * Optional platformLogos maps oxybricks, oxyloans, askoxy, oxyglobal to imported logos.
 * Header is fixed; content scrolls normally. Cards are stationary; no carousel.
 * Supply portraitUrl with an approved CEO photo. The default is a typographic monogram.
 * Replace journeys with your complete API catalog; defaults are a starter directory,
 * not a verified inventory of every journey. Missing deep links use the platform homepage.
 * Pass posts from your API/CMS. Initial posts below are summaries, not direct quotations.
 * For an authenticated owner only, pass canPublish and an async onPublish callback.
 * The callback must persist the post and return its saved record. Enforce authorization
 * and validation on your SERVER; canPublish only controls visibility, not security.
 * Without a callback, composer actions are explicitly session-only previews.
 * Social feeds are not automatically synchronized. Store selected post URLs in your API.
 */

export type Platform = "Website" | "LinkedIn" | "Instagram" | "Facebook" | "X";
export type Journey = { id: string; name: string; category: string; description: string; href: string; linkLabel?: string };
export type Post = { id: string; title: string; body: string; platform: Platform; url?: string; publishedAt?: string; preview?: boolean };
export type PostDraft = Omit<Post, "id" | "preview">;
type Props = {
  portraitUrl?: string;
  platformLogos?: Record<string, string>;
  journeys?: Journey[];
  posts?: Post[];
  canPublish?: boolean;
  onPublish?: (draft: PostDraft) => Promise<Post>;
};

const socials: { name: Exclude<Platform, "Website">; mark: string; handle: string; url: string }[] = [
  { name: "LinkedIn", mark: "in", handle: "oxyradhakrishna", url: "https://www.linkedin.com/in/oxyradhakrishna/" },
  { name: "Instagram", mark: "◎", handle: "@tvradhakrishna", url: "https://www.instagram.com/tvradhakrishna/" },
  { name: "Facebook", mark: "f", handle: "Radha Krishna", url: "https://www.facebook.com/share/1AcVZzEu7y/" },
  { name: "X", mark: "𝕏", handle: "@RadhakrishnaIND", url: "https://x.com/RadhakrishnaIND" },
];

export const defaultJourneys: Journey[] = [
  { id: "askoxy", name: "ASKOXY.AI", category: "AI & technology", description: "Explore AI tools, services, and opportunities in one place.", href: "https://www.askoxy.ai/" },
  { id: "lender", name: "Lender Journey", category: "Financial services", description: "Explore lending opportunities through OxyLoans.", href: "https://oxyloans.com/", linkLabel: "Visit OxyLoans" },
  { id: "borrower", name: "Borrower Journey", category: "Financial services", description: "Discover borrowing services and application information.", href: "https://oxyloans.com/", linkLabel: "Visit OxyLoans" },
  { id: "gold", name: "Gold & Silver", category: "Commerce", description: "Discover the OXYGOLD.AI collection of gold and silver coins.", href: "https://oxygold.ai/" },
  { id: "bricks", name: "OXYBRICKS.WORLD", category: "Financial services", description: "Explore the OxyBricks platform and its property initiatives.", href: "https://www.oxybricks.world/" },
  { id: "bfsi", name: "Bharat Sovereign AI", category: "AI & technology", description: "Explore AI initiatives for banking, financial services, and insurance.", href: "https://www.askoxy.ai/sovereign-ai" },
  { id: "jobs", name: "Jobs & 90 Days Job Plan", category: "Careers & learning", description: "Explore career opportunities and skill development journeys.", href: "https://www.askoxy.ai/", linkLabel: "Explore ASKOXY.AI" },
  { id: "abroad", name: "Study Abroad", category: "Careers & learning", description: "Discover education opportunities and overseas study guidance.", href: "https://www.askoxy.ai/", linkLabel: "Explore ASKOXY.AI" },
  { id: "partner", name: "Partner Journey", category: "Community", description: "Explore ways to collaborate across the Oxy ecosystem.", href: "https://www.askoxy.ai/", linkLabel: "Explore ASKOXY.AI" },
  { id: "advocate", name: "Advocate Journey", category: "Community", description: "Explore opportunities for legal professionals.", href: "https://www.askoxy.ai/", linkLabel: "Explore ASKOXY.AI" },
  { id: "recovery", name: "Recovery Agent Journey", category: "Community", description: "Explore the recovery agent community and its opportunities.", href: "https://www.askoxy.ai/", linkLabel: "Explore ASKOXY.AI" },
  { id: "gcc", name: "GCC Mate", category: "Careers & learning", description: "Discover the GCC-focused journey on ASKOXY.AI.", href: "https://www.askoxy.ai/", linkLabel: "Explore ASKOXY.AI" },
  { id: "freelance", name: "Freelance Marketplace", category: "Careers & learning", description: "Explore opportunities for independent professionals.", href: "https://www.askoxy.ai/", linkLabel: "Explore ASKOXY.AI" },
  { id: "nyaya", name: "Nyaya GPT", category: "AI & technology", description: "Discover the legal AI journey on ASKOXY.AI.", href: "https://www.askoxy.ai/", linkLabel: "Explore ASKOXY.AI" },
  { id: "ca", name: "CA & CS", category: "Community", description: "Explore the journey for accounting and company secretarial professionals.", href: "https://www.askoxy.ai/", linkLabel: "Explore ASKOXY.AI" },
  { id: "blockchain", name: "Blockchain & Crypto", category: "AI & technology", description: "Discover the blockchain and crypto journey on ASKOXY.AI.", href: "https://www.askoxy.ai/", linkLabel: "Explore ASKOXY.AI" },
  { id: "glms", name: "GLMS", category: "Careers & learning", description: "Explore the GLMS learning journey on ASKOXY.AI.", href: "https://www.askoxy.ai/", linkLabel: "Explore ASKOXY.AI" },
];

// Event dates and venues checked against https://globalfintechfest.com/.
// Attendance and ecosystem descriptions are supplied by the site owner.
const gffEcosystem = [
  { name: "OxyLoans", description: "RBI-registered NBFC-P2P platform", href: "https://oxyloans.com/" },
  { name: "ASKOXY.AI", description: "AI-powered digital ecosystem", href: "https://www.askoxy.ai/" },
  { name: "RBI Master Directions AI Store", description: "Explore RBI regulatory intelligence", href: "https://www.askoxy.ai/ai-store/rbi-master-directions-ai-store" },
  { name: "Insurance LLM", description: "Explore AI for insurance", href: "https://www.askoxy.ai/genoxy/chat?a=insurance-llm" },
  { name: "OXYBFSAI", description: "AI for banking, financial services & insurance", href: "https://www.askoxy.ai/oxybfsai" },
  { name: "OXYBFSAI Use Case", description: "Explore a BFSI AI use case", href: "https://vibecoding-finvibe.vercel.app/" },
  { name: "OXYFINSERV", description: "Financial services ecosystem", href: "https://www.oxyfinserv.com/" },
  { name: "Bharat Sovereign AI", description: "Building AI for India’s BFSI ecosystem", href: "https://www.askoxy.ai/sovereign-ai" },
];

const initialPosts: Post[] = [
  { id: "ai-gold", title: "Agentic AI meets the gold business", body: "A look at how ASKOXY.AI approaches dynamic gold pricing using real-time signals and AI-driven decisions.", platform: "LinkedIn", url: "https://www.linkedin.com/posts/oxyradhakrishna_agenticai-aiusecases-aiinfinance-activity-7409595057365942272-NP2j" },
  { id: "careers", title: "Opening doors to new opportunities", body: "An update from the ASKOXY.AI walk-in interviews and the people building their next chapter.", platform: "LinkedIn", url: "https://www.linkedin.com/posts/oxyradhakrishna_2-walk-in-interviews-now-in-progress-askoxyai-activity-7501919132892778497-qEyA" },
];

const focus = "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-4";
const field = "mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-base text-slate-900 outline-none focus:border-amber-600 focus:ring-2 focus:ring-amber-200";
const platforms = [
  { id: "oxybricks", name: "OxyBricks", caption: "Property initiatives", href: "https://www.oxybricks.world/" },
  { id: "oxyloans", name: "OxyLoans", caption: "P2P lending platform", href: "https://www.oxyloans.com/" },
  { id: "askoxy", name: "ASKOXY.AI", caption: "AI tools & opportunities", href: "https://www.askoxy.ai/" },
  { id: "oxyglobal", name: "OXYGLOBAL.TECH", caption: "Technology & innovation", href: "https://www.oxyglobal.tech/" },
];
const nav = [["About", "about"], ["Our journeys", "journeys"], ["Connect", "updates"]];

function safeUrl(value?: string) {
  if (!value) return undefined;
  try { const url = new URL(value); return ["https:", "http:"].includes(url.protocol) ? url.href : undefined; } catch { return undefined; }
}
function External({ href, children, className = "" }: { href: string; children: ReactNode; className?: string }) {
  const url = safeUrl(href);
  return url ? <a href={url} target="_blank" rel="noopener noreferrer" className={`${focus} ${className}`}>{children}<span className="sr-only"> (opens in a new tab)</span></a> : <span className={className}>{children}</span>;
}
function Arrow() { return <span aria-hidden="true">↗</span>; }

export default function CEOLandingPage({ portraitUrl = "/images/radha-krishna.jpg", platformLogos = {}, journeys = defaultJourneys, posts = initialPosts, canPublish = false, onPublish }: Props) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [category, setCategory] = useState("All journeys");
  const [addedPosts, setAddedPosts] = useState<Post[]>([]);
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [photoFailed, setPhotoFailed] = useState(false);
  const categories = ["All journeys", ...new Set(journeys.map(j => j.category))];
  const selectedCategory = categories.includes(category) ? category : "All journeys";
  const filtered = journeys.filter(j => selectedCategory === "All journeys" || j.category === selectedCategory);
  const allPosts = [...addedPosts, ...posts.filter(p => !addedPosts.some(a => a.id === p.id))];

  async function submitPost(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (busy) return;
    const form = event.currentTarget;
    const data = new FormData(form);
    const title = String(data.get("title") || "").trim();
    const body = String(data.get("body") || "").trim();
    const rawUrl = String(data.get("url") || "").trim();
    setError(""); setMessage("");
    if (!title || !body) { setError("Please add a title and update text."); return; }
    if (rawUrl && !safeUrl(rawUrl)) { setError("Enter a complete https:// or http:// post link."); return; }
    const draft: PostDraft = { title, body, platform: data.get("platform") as Platform, url: rawUrl || undefined, publishedAt: new Date().toISOString() };
    setBusy(true);
    try {
      const saved = onPublish ? await onPublish(draft) : { ...draft, id: `preview-${Date.now()}`, preview: true };
      setAddedPosts(current => [saved, ...current.filter(p => p.id !== saved.id)]);
      form.reset();
      setMessage(onPublish ? "Your update has been published." : "Preview added below. It is visible only in this session and disappears on refresh.");
    } catch { setError("Your update could not be published. Your draft is still here; please try again."); }
    finally { setBusy(false); }
  }

  return (
    <div className="min-h-screen overflow-x-clip bg-white font-sans text-slate-900 selection:bg-orange-200">
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-white focus:p-4">Skip to content</a>
      <header className="fixed inset-x-0 top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur-lg">
        <div className="mx-auto flex min-h-20 max-w-7xl items-center justify-between gap-5 px-5 sm:px-8">
          <a href="#about" aria-label="Radha Krishna home" className={`flex items-center gap-3 ${focus}`}>
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[#30238D] font-serif text-xl text-white">RK</span>
            <span className="text-base font-semibold tracking-tight sm:text-lg">Radha Krishna<span className="block text-xs font-normal tracking-[0.16em] text-slate-500">THATAVARTI</span></span>
          </a>
          <nav aria-label="Main navigation" className="hidden items-center gap-7 lg:flex">{nav.map(([label, id]) => <a key={id} href={`#${id}`} className={`py-3 text-sm font-medium text-slate-600 hover:text-slate-950 ${focus}`}>{label}</a>)}</nav>
          <button type="button" aria-label={menuOpen ? "Close navigation" : "Open navigation"} aria-expanded={menuOpen} aria-controls="mobile-navigation" onClick={() => setMenuOpen(!menuOpen)} className={`rounded-lg border border-slate-300 px-4 py-3 text-sm lg:hidden ${focus}`}>{menuOpen ? "Close ✕" : "Menu ☰"}</button>
        </div>
        {menuOpen && <nav id="mobile-navigation" aria-label="Mobile navigation" className="grid gap-1 border-t border-slate-100 px-5 py-4 lg:hidden">{nav.map(([label, id]) => <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)} className={`rounded-lg px-3 py-3 hover:bg-slate-100 ${focus}`}>{label}</a>)}</nav>}
      </header>

      <main id="main" className="pt-20">
        {/* SECTION 1 — CEO introduction */}
        <section id="about" aria-labelledby="about-heading" style={{ background: "linear-gradient(160deg, #241C91 0%, #70466F 53%, #F15B3B 100%)" }} className="scroll-mt-24 overflow-hidden text-white">
          <div className="mx-auto grid max-w-7xl gap-8 px-5 py-12 sm:px-8 sm:py-16 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:gap-16">
            <div>
              <p className="mb-7 text-sm font-medium uppercase tracking-[0.2em] text-white">Entrepreneur · Builder · AI advocate</p>
              <h1 id="about-heading" className="font-serif text-[clamp(2.35rem,5.6vw,5rem)] leading-[1.1] tracking-tight">Radha Krishna<br /><span className="text-white">Thatavarti.</span></h1>
              <p className="mt-6 text-lg font-medium text-white">CEO &amp; Co-Founder, ASKOXY.AI</p>
              <p className="mt-5 max-w-xl text-lg leading-8 text-white/90">Building opportunities through AI, finance, and technology.</p>
              <div className="mt-9 flex flex-wrap gap-4">
                <a href="#journeys" className={`inline-flex min-h-12 items-center gap-5 rounded-full bg-white px-6 py-3 font-semibold text-slate-950 hover:bg-orange-50 ${focus}`}>Explore our journeys <span aria-hidden="true">↓</span></a>
                <a href="#gff2026" className={`inline-flex min-h-12 items-center rounded-full border border-slate-600 px-6 py-3 font-medium hover:bg-slate-800 ${focus}`}>GFF 2026 update <span aria-hidden="true" className="ml-3">↗</span></a>
              </div>

            </div>
            <div className="relative mx-auto w-full max-w-md">
              <div className="overflow-hidden rounded-3xl border border-white/30 bg-white/10">
                {portraitUrl && !photoFailed ? <img src={portraitUrl} onError={() => setPhotoFailed(true)} alt="Radha Krishna Thatavarti" className="aspect-[4/5] w-full object-cover object-top" fetchPriority="high" /> : <div className="flex aspect-[4/5] flex-col items-center justify-center px-7 text-center"><span className="font-serif text-[7rem] leading-none text-white sm:text-[9rem]">RK<span className="text-white">.</span></span><span className="mt-8 text-sm uppercase tracking-[0.2em] text-white/90">Ideas into opportunity</span><div className="mt-10 h-px w-16 bg-white" /></div>}

              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2 — Journey directory; replace defaultJourneys with your API data. */}
        <section id="journeys" aria-labelledby="journeys-heading" className="mx-auto max-w-7xl scroll-mt-28 px-5 py-12 sm:px-8 sm:py-16">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end"><div><p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#36268C]">01 / Our ecosystem</p><h2 id="journeys-heading" className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">Explore our platforms & journeys.</h2></div><p className="max-w-sm leading-7 text-slate-600">Find your path across technology, financial services, careers, and community.</p></div>
          {/* Stationary platform grid replaces react-slick and autoplay. */}
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {platforms.map(platform => <External key={platform.id} href={platform.href} className="flex min-w-0 flex-col rounded-2xl border border-violet-100 bg-violet-50/50 p-5 hover:border-violet-400">
              {platformLogos[platform.id] && <img src={platformLogos[platform.id]} alt="" className="mb-4 h-16 w-full object-contain" loading="lazy" />}
              <span className="flex items-center justify-between gap-2 text-lg font-bold text-[#30238D]">{platform.name}<Arrow /></span>
              <span className="mt-2 text-sm text-slate-600">{platform.caption}</span>
            </External>)}
          </div>
          <h3 className="mt-10 text-xl font-semibold">Find your journey</h3>
          <div aria-label="Filter journeys by category" className="mt-9 flex flex-wrap gap-2">{categories.map(item => <button key={item} type="button" aria-pressed={selectedCategory === item} onClick={() => setCategory(item)} className={`min-h-11 rounded-full border px-4 py-2 text-sm font-medium ${focus} ${selectedCategory === item ? "border-slate-950 bg-[#30238D] text-white" : "border-slate-300 bg-white text-slate-600 hover:border-slate-900 hover:text-slate-950"}`}>{item}</button>)}</div>
          <p aria-live="polite" className="mt-5 text-sm text-slate-500">{filtered.length} {filtered.length === 1 ? "journey" : "journeys"}</p>
          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{filtered.map((journey, index) => <article key={journey.id} className="group flex flex-col rounded-2xl border border-slate-200 bg-slate-50/60 p-6 hover:border-[#705CA8] hover:bg-violet-50 sm:p-7"><div className="flex items-center justify-between gap-3"><span className="text-sm text-slate-500">{journey.category}</span><span className="font-serif text-xl text-[#36268C]">{String(index + 1).padStart(2, "0")}</span></div><h3 className="mt-4 text-xl font-semibold tracking-tight">{journey.name}</h3><p className="mb-4 mt-2 text-sm leading-6 text-slate-600">{journey.description}</p><External href={journey.href} className="mt-auto flex min-h-11 items-center justify-between gap-3 border-t border-slate-200 pt-4 text-sm font-semibold">{journey.linkLabel || "Explore journey"}<Arrow /></External></article>)}</div>
          {filtered.length === 0 && <p className="mt-6 rounded-2xl bg-slate-50 p-8 text-slate-600">New journeys will appear here when available.</p>}
        </section>

        {/* SECTION 3 — Social highlights and optional authenticated-owner composer */}
        <section id="updates" aria-labelledby="updates-heading" className="scroll-mt-28 border-y border-slate-200 bg-slate-50">
          <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#36268C]">02 / From the desk</p><h2 id="updates-heading" className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">Updates & connections.</h2><p className="mt-5 max-w-2xl leading-7 text-slate-600">Conversations from across my social platforms, alongside updates shared here.</p>
            <article id="gff2026" aria-labelledby="gff-heading" className="mt-8 scroll-mt-28 overflow-hidden rounded-3xl border border-violet-200 bg-white">
              <div className="px-5 py-7 text-white sm:px-8 sm:py-9" style={{ background: "linear-gradient(135deg, #241C91 0%, #70466F 60%, #F15B3B 100%)" }}>
                <p className="text-xs font-semibold uppercase tracking-[0.16em]">Featured update · #GFF2026</p>
                <h3 id="gff-heading" className="mt-3 max-w-3xl text-2xl font-bold leading-tight sm:text-4xl">Connecting FinTech, BFSI &amp; AI at Global Fintech Fest 2026</h3>
                <div className="mt-5 flex flex-col gap-2 text-sm font-medium sm:flex-row sm:flex-wrap sm:gap-x-6">
                  <p><time dateTime="2026-09-08">8</time>–<time dateTime="2026-09-11">11 September 2026</time></p>
                  <p>Jio World Centre | Trident BKC, Mumbai, India</p>
                </div>
              </div>
              <div className="p-5 sm:p-8">
                <p className="max-w-4xl text-base leading-7 text-slate-700">Our CEO &amp; Co-Founder, <strong className="text-slate-950">Radhakrishna T</strong>, is attending Global Fintech Fest 2026 in Mumbai to share ideas, explore partnerships, and discuss our growing FinTech, BFSI, and AI ecosystem.</p>
                <h4 className="mt-6 text-lg font-semibold text-slate-950">What are we bringing to GFF 2026?</h4>
                <p className="mt-2 max-w-4xl leading-7 text-slate-600">Products and real-world use cases across P2P lending, financial services, Sovereign AI, RBI regulatory intelligence, Insurance LLMs, and BFSI AI.</p>
                <h4 className="mt-7 text-lg font-semibold text-slate-950">Explore our ecosystem</h4>
                <div className="mt-4 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                  {gffEcosystem.map(item => <External key={item.name} href={item.href} className="flex min-w-0 flex-col rounded-xl border border-violet-100 bg-violet-50/50 p-4 hover:border-violet-400">
                    <span className="flex items-start justify-between gap-3 font-semibold leading-6 text-[#30238D]"><span>{item.name}</span><Arrow /></span>
                    <span className="mt-2 text-sm leading-6 text-slate-600">{item.description}</span>
                  </External>)}
                </div>
                <div className="mt-7 flex flex-col gap-5 border-t border-slate-200 pt-6 lg:flex-row lg:items-center lg:justify-between">
                  <p className="max-w-2xl text-sm leading-7 text-slate-600">Let’s connect with banks, NBFCs, fintech leaders, insurers, and technology partners to explore opportunities for collaboration.</p>
                  <External href="https://www.linkedin.com/in/oxyradhakrishna/" className="inline-flex min-h-12 shrink-0 items-center justify-center gap-3 rounded-full bg-[#30238D] px-5 py-3 text-sm font-semibold text-white hover:bg-[#241C71]">Connect on LinkedIn <Arrow /></External>
                </div>
                <External href="https://globalfintechfest.com/" className="mt-4 inline-flex min-h-11 items-center gap-2 text-sm font-medium text-[#30238D]">Official event details <Arrow /></External>
              </div>
            </article>
            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">{socials.map(social => <External key={social.name} href={social.url} className="flex min-h-12 items-center justify-between gap-2 rounded-xl border border-violet-200 bg-white px-4 py-3 text-sm font-semibold text-[#30238D]">{social.name}<Arrow /></External>)}</div>
            {canPublish && <form onSubmit={submitPost} className="mt-8 rounded-2xl border border-slate-300 bg-white p-5 sm:p-7"><h3 className="text-xl font-semibold">Share an update</h3><p className="mt-2 text-sm text-slate-600">{onPublish ? "Publish an update to this website. Add an original social post link if you have one." : "Preview mode: updates are not saved or shared publicly."}</p><fieldset disabled={busy} className="mt-5 grid gap-5 disabled:opacity-60"><label className="text-sm font-medium">Title<input name="title" required maxLength={120} className={field} placeholder="What would you like to share?" /></label><label className="text-sm font-medium">Your update<textarea name="body" required maxLength={5000} rows={4} className={field} placeholder="Share an idea, milestone, or conversation…" /></label><div className="grid gap-5 sm:grid-cols-2"><label className="text-sm font-medium">Source platform<select name="platform" className={field}>{["Website", "LinkedIn", "Instagram", "Facebook", "X"].map(p => <option key={p}>{p}</option>)}</select></label><label className="text-sm font-medium">Original post URL (optional)<input type="url" name="url" maxLength={2000} className={field} placeholder="https://…" /></label></div><button type="submit" className={`min-h-12 justify-self-start rounded-full bg-slate-950 px-6 py-3 font-semibold text-white hover:bg-slate-800 ${focus}`}>{busy ? "Publishing…" : onPublish ? "Publish update" : "Preview update"}</button></fieldset><p role="status" className="mt-3 text-sm text-emerald-800">{message}</p>{error && <p role="alert" className="mt-3 text-sm text-red-700">{error}</p>}</form>}
            <div className="mt-9 grid gap-5 md:grid-cols-2">{allPosts.map(post => <article key={post.id} className="flex min-w-0 flex-col rounded-2xl border border-slate-200 bg-white p-6 sm:p-8"><div className="flex flex-wrap items-center gap-3 text-sm"><span className="rounded-full bg-slate-100 px-3 py-1 font-medium">{post.platform}</span>{post.preview && <span className="text-amber-800">Session preview</span>}{post.publishedAt && !Number.isNaN(Date.parse(post.publishedAt)) && <time dateTime={post.publishedAt} className="text-slate-500">{new Intl.DateTimeFormat("en-IN", { day: "numeric", month: "short", year: "numeric", timeZone: "Asia/Kolkata" }).format(new Date(post.publishedAt))}</time>}</div><h3 className="mt-6 break-words font-serif text-3xl leading-tight">{post.title}</h3><p className="mb-7 mt-4 whitespace-pre-wrap break-words leading-7 text-slate-600">{post.body}</p>{safeUrl(post.url) && <External href={post.url!} className="mt-auto flex min-h-11 items-center justify-between border-t border-slate-200 pt-5 text-sm font-semibold">View original post <Arrow /></External>}</article>)}</div>
            {allPosts.length === 0 && <p className="mt-8 rounded-2xl border border-slate-200 bg-white p-8 text-slate-600">New updates are on the way. Follow the social profiles below to stay connected.</p>}
          </div>
        </section>

      </main>
      <footer className="border-t border-slate-800 bg-slate-950 text-slate-400"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 px-5 py-7 text-sm sm:flex-row sm:px-8"><p>© {new Date().getFullYear()} Radha Krishna Thatavarti.</p><a href="#about" className={`min-h-8 hover:text-white ${focus}`}>Back to top ↑</a></div></footer>
    </div>
  );
}
