import React, { useState } from "react";
import {
  ArrowUpRight, Bot, BriefcaseBusiness, Check, CheckCircle2,
  ClipboardCheck, Clock3, ExternalLink, FileCheck2,
  FileText, Handshake, Landmark, MessageCircle, Scale, ShieldCheck,
  UserRound, Video, Wallet, Phone, PhoneCall,
  Globe, Sparkles, Building2, Coins, Cpu, Shield, Apple, Smartphone, type LucideIcon,
} from "lucide-react";
import InitiativeHeader from "./InitiativeHeader";

const TOLL_FREE_NUMBER = "04041897778";
const TOLL_FREE_DISPLAY = "040 4189 7778";
const TOLL_FREE_TEL = `tel:${TOLL_FREE_NUMBER}`;
const OXYLOANS_LOGO = "https://i.ibb.co/B5xsVChY/l2.png";

const URL = {
  site: "https://tvradhakrishna.com",
  askoxy: "https://www.askoxy.ai/",
  jobs: "https://www.askoxy.ai/main/askoxyjobs",
  zoom: "https://us06web.zoom.us/j/83426047733?pwd=BKaIwjmah7iidb2s9F1bPK8uv9tMDg.1",
  radhai: "https://www.askoxy.ai/RADHAI",
  lender: "https://www.user.oxyloans.com/register?ref=LR55026",
  borrower: "https://www.user.oxyloans.com/borrower_register?ref=LR55026",
  partner: "https://www.askoxy.ai/Partner",
  advocate: "https://www.askoxy.ai/main/services/5388/start-your-legal-partner-advoc",
  recovery: "https://www.askoxy.ai/main/services/08c3/start-your-recovery-agent-part",
  whatsapp: "https://chat.whatsapp.com/GO99fD0qxawCgDY1QDhdxg?s=sw&p=a&mlu=4&ilr=4",
  instagram: "https://www.instagram.com/tvradhakrishna/",
} as const;

type Platform = {
  name: string;
  href: string;
  tagline: string;
  logo?: string;
  fallbackLogo?: string;
  icon?: LucideIcon;
  androidUrl?: string;
  iosUrl?: string;
  iosStatus?: "live" | "under_process";
};

const platforms: Platform[] = [
  {
    name: "OXYLOANS — Lender",
    href: URL.lender,
    logo: OXYLOANS_LOGO,
    tagline: "Lender · Explore Lending Opportunities",
    androidUrl: "https://play.google.com/store/apps/details?id=com.oxyloans.lender",
    iosUrl: "https://apps.apple.com/in/app/oxyloans-lender/id6444208708",
    iosStatus: "live",
  },
  {
    name: "OXYLOANS — Borrower",
    href: URL.borrower,
    logo: OXYLOANS_LOGO,
    tagline: "Borrower · Discover Loan Solutions",
    androidUrl: "https://play.google.com/store/apps/details?id=com.oxyloans.borrowers",
    iosStatus: "under_process",
  },
  {
    name: "ASKOXY.AI",
    href: "https://www.askoxy.ai/",
    logo: "https://www.askoxy.ai/static/media/askoxylogonew.c34f3429a1c63f5f261b.png",
    tagline: "An AI-powered assistant and career/ATS scoring portal",
    androidUrl: "https://play.google.com/store/apps/details?id=com.oxyrice.oxyrice_customer",
    iosUrl: "https://apps.apple.com/in/app/askoxy-ai-ai-z-marketplace/id6738732000",
    iosStatus: "live",
  },
  {
    name: "OXYBRICKS.WORLD",
    href: "https://oxybricks.world/",
    logo: "https://i.ibb.co/k2snG0YW/l3.png",
    tagline: "A fractional real estate and property technology platform focused on democratized real estate investments",
    androidUrl: "https://play.google.com/store/apps/details?id=com.oxybricks.world",
    iosUrl: "https://apps.apple.com/in/app/oxybricks-world/id6526489604",
    iosStatus: "live",
  },
  {
    name: "OXYGLOBAL.TECH",
    href: "https://www.oxyglobal.tech/",
    logo: "https://i.ibb.co/s4CW2mg/l1.png",
    tagline: "Scaling global innovation by uniting people, platforms, products, and capital",
  },
  {
    name: "OXY JOURNEYS",
    href: "https://www.oxyjourneys.com/",
    logo: "https://i.ibb.co/XxJJRXx5/jun-logo.png",
    tagline: "Mapping your path across life, career, and global destinations.",
  },
  {
    name: "OXYGOLD.AI",
    href: "https://www.oxygold.ai/",
    logo: "https://i.ibb.co/gb9bNnTZ/oxygoldlogo-bk.png",
    tagline: "Pure Gold. Fine Silver. Real Trust",
    androidUrl: "https://play.google.com/store/apps/details?id=com.oxygold.ai",
    iosStatus: "under_process",
  },
  {
    name: "OXYCHAIN",
    href: "http://bmv.money:2750/",
    logo: "https://i.ibb.co/B2NcQ7Nj/l5.png",
    tagline: "A high-throughput distributed consensus blockchain solutions provider",
  },
  {
    name: "OXYFINSERV",
    href: "https://www.oxyfinserv.com/",
    logo: "https://i.ibb.co/Swx6RWXM/oxyfinservlogo-Cpr9-A3-NT.png",
    tagline: "Strategic Financial Solutions & Advisory",
  },
  {
    name: "OXYLOANS — Partner",
    href: URL.partner,
    logo: OXYLOANS_LOGO,
    tagline: "Collaborate, expand, and scale your earnings with OXYLOANS.",
  },
  {
    name: "Advocate Partner",
    href: URL.advocate,
    icon: Scale,
    tagline: "Empowering legal professionals within a trusted partnership network.",
  },
  {
    name: "Recovery Agent",
    href: URL.recovery,
    icon: ShieldCheck,
    tagline: "Join our professional network dedicated to accountable asset recovery",
  },
];

type Step = { title: string; caption: string; details: string[]; icon: LucideIcon };
const steps: Step[] = [
  { title: "Create an account", caption: "Get started on ASKOXY.AI", icon: UserRound,
    details: ["Visit ASKOXY.AI", "Sign up or sign in to your account"] },
  { title: "Explore jobs", caption: "Find the right opportunity", icon: BriefcaseBusiness,
    details: ["Open All Jobs", "Select ASKOXY.AI from the company dropdown", "Choose a role and review eligibility"] },
  { title: "Apply & review ATS", caption: "Upload your resume", icon: FileCheck2,
    details: ["Apply for your selected role", "Upload your resume", "Review the ATS scorecard and exam instructions"] },
  { title: "Complete the exam", caption: "Finish your assessment", icon: ClipboardCheck,
    details: ["Answer and submit the online assessment", "Review your exam scorecard", 'Select "Complete Final Step"'] },
  { title: "Submit & track", caption: "Complete your application", icon: FileText,
    details: ["Submit the mandatory cover letter", "Open My Job Applications", "Track your application status"] },
];

const focus = "focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-violet-300/70 focus-visible:ring-offset-2";

function ActionLink({ href, children, secondary = false, className = "", onClick }: {
  href: string; children: React.ReactNode; secondary?: boolean; className?: string; onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}) {
  const isHash = href.startsWith("#");
  const isTel = href.startsWith("tel:");
  return (
    <a href={href} target={isHash || isTel ? undefined : "_blank"} rel={isHash || isTel ? undefined : "noopener noreferrer"}
      onClick={onClick}
      className={`${focus} inline-flex min-h-[46px] min-w-0 items-center justify-center gap-2 rounded-xl border px-3 py-2.5 text-center text-[12px] font-semibold shadow-[0_3px_9px_rgba(49,27,95,.07),inset_0_1px_0_rgba(255,255,255,.55)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(49,27,95,.12)] sm:px-4 sm:text-sm ${secondary
        ? "border-slate-200 bg-gradient-to-b from-white to-violet-50/70 text-slate-800 hover:border-violet-300 hover:from-white hover:to-violet-100"
        : "border-violet-600 bg-gradient-to-b from-violet-500 via-violet-600 to-violet-700 text-white hover:from-violet-600 hover:to-violet-800"} ${className}`}>
      {children}
    </a>
  );
}

function PlatformLogo({
  src,
  fallback,
  alt,
  className = "",
}: {
  src: string;
  fallback?: string;
  alt: string;
  className?: string;
}) {
  const [currentSrc, setCurrentSrc] = useState(src);
  const [failed, setFailed] = useState(false);

  return (
    <div className="flex h-16 w-full items-center justify-center px-4 py-2 sm:h-20">
      {!failed ? (
        <img
          src={currentSrc}
          alt={alt}
          loading="lazy"
          decoding="async"
          onError={() => {
            if (fallback && currentSrc !== fallback) {
              setCurrentSrc(fallback);
            } else {
              setFailed(true);
            }
          }}
          className={`max-h-12 w-auto max-w-[85%] object-contain transition-transform duration-300 group-hover:scale-105 sm:max-h-14 ${className}`}
        />
      ) : (
        <div className="flex items-center gap-2 font-bold text-slate-800 text-sm tracking-wide">
          <Globe className="h-5 w-5 text-violet-600" />
          <span>{alt}</span>
        </div>
      )}
    </div>
  );
}

function StepCard({ step, index }: { step: Step; index: number }) {
  const Icon = step.icon;
  return (
    <li className="min-w-0">
      <article className="group h-full rounded-[18px] border border-white/90 bg-gradient-to-br from-white via-white to-[#f7f3ff] p-3.5 shadow-[0_3px_15px_rgba(48,30,103,.06)] ring-1 ring-slate-200/70 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_25px_rgba(67,39,135,.12)] sm:p-4">
        <div className="flex items-start gap-3">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-violet-200/60 bg-gradient-to-br from-violet-50 to-violet-100 text-violet-700 shadow-[inset_0_1px_0_rgba(255,255,255,.95)]">
            <Icon className="h-5 w-5" strokeWidth={1.9} aria-hidden="true" />
          </span>
          <div className="min-w-0 flex-1">
            <span className="block text-[10px] font-extrabold uppercase tracking-[0.14em] text-violet-700">Step {String(index + 1).padStart(2, "0")}</span>
            <h3 className="mt-0.5 text-[15px] font-bold leading-5 text-slate-900">{step.title}</h3>
            <p className="mt-1 text-xs leading-4 text-slate-500">{step.caption}</p>
          </div>
        </div>
        <ul className="mt-3 space-y-2 border-t border-violet-100 pt-3">
          {step.details.map((detail) => (
            <li key={detail} className="flex items-start gap-2 text-[12px] leading-[1.55] text-slate-600 sm:text-[13px]">
              <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-violet-600" aria-hidden="true" />
              <span>{detail}</span>
            </li>
          ))}
        </ul>
      </article>
    </li>
  );
}

export default function OxyLinksPage() {
  const [platformTab, setPlatformTab] = useState<"web" | "android" | "ios">("web");

  const scrollToEcosystem = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.getElementById("oxy-ecosystem");
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.pushState(null, "", "#oxy-ecosystem");
    }
  };

  const displayedPlatforms = platforms.filter((p) => {
    if (platformTab === "android") return !!p.androidUrl;
    if (platformTab === "ios") return !!p.iosUrl;
    return true;
  });

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f6f7fc] font-sans text-slate-900 antialiased selection:bg-violet-200">
      <InitiativeHeader active="links" />
      <main>
        {/* HERO SECTION */}
        <section aria-labelledby="welcome-heading" className="border-b border-[#e9e5f3] bg-gradient-to-b from-white via-white to-[#faf8ff]">
          <div className="mx-auto w-full max-w-7xl px-4 py-5 sm:px-6 sm:py-7 lg:px-8">
            <div className="flex flex-col gap-4 lg:gap-5">
              <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
                <div className="min-w-0 max-w-2xl">
                  <a
                    href="#oxy-ecosystem"
                    onClick={scrollToEcosystem}
                    aria-label="Scroll down to Explore Our Platforms and Choose your OXY Journey"
                    className="group inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50/80 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[.12em] text-violet-700 transition-all hover:border-violet-300 hover:bg-violet-100 hover:shadow-xs active:scale-95"
                  >
                    <Sparkles size={13} className="text-violet-600 transition-transform group-hover:rotate-12" />
                    <span>Explore Our Platforms · Choose Your OXY Journey</span>
                    <ArrowUpRight size={13} className="text-violet-500 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                  <h1 id="welcome-heading" className="mt-2 text-2xl font-extrabold leading-tight tracking-tight text-slate-950 sm:text-3xl lg:text-4xl">
                    Greetings from <span className="bg-gradient-to-r from-violet-700 to-indigo-600 bg-clip-text text-transparent">Radha!</span>
                  </h1>
                  <p className="mt-1.5 text-sm leading-6 text-slate-600 sm:text-base">
                    Jobs, RadhAI, lending, group ventures, and dedicated support — all unified in one place.
                  </p>
                </div>

                {/* TOLL FREE HELPLINE CARD IN HERO */}
                <div className="flex shrink-0 items-center justify-between gap-3.5 rounded-2xl border border-violet-200/80 bg-gradient-to-r from-violet-50/70 via-white to-[#faf8ff] p-3.5 shadow-[0_4px_16px_rgba(76,29,149,.06)] sm:p-4 lg:min-w-[340px]">
                  <div className="flex items-center gap-3">
                    <span className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 to-indigo-600 text-white shadow-[0_4px_12px_rgba(76,29,149,.25)]">
                      <PhoneCall size={20} className="animate-pulse" />
                      <span className="absolute -top-0.5 -right-0.5 h-2.5 w-2.5 rounded-full bg-violet-300 ring-2 ring-white" />
                    </span>
                    <div>
                      <p className="text-[10px] font-extrabold uppercase tracking-widest text-violet-700">Toll Free Helpline</p>
                      <a href={TOLL_FREE_TEL} className="mt-0.5 block font-mono text-base font-extrabold text-slate-950 hover:text-violet-700 sm:text-lg">
                        {TOLL_FREE_DISPLAY}
                      </a>
                   <p className="text-[11px] font-medium text-slate-500">
  24/7 · 365 Days Available
</p>
                    </div>
                  </div>
                  <div>
                    <a
                      href={TOLL_FREE_TEL}
                      className={`${focus} inline-flex items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 px-4 py-2.5 text-xs font-bold text-white shadow-sm transition-all hover:from-violet-700 hover:to-indigo-700 active:scale-95`}
                      aria-label={`Call Toll Free Number ${TOLL_FREE_DISPLAY}`}
                    >
                      <Phone size={14} /> Call Now
                    </a>
                  </div>
                </div>
              </div>

              {/* QUICK ACTION BUTTONS */}
              <div className="grid w-full grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-2.5 lg:grid-cols-5">
                <ActionLink href={URL.jobs}>
                  <BriefcaseBusiness size={17} className="shrink-0" /> Explore Jobs
                </ActionLink>
                <ActionLink
                  href="#oxy-ecosystem"
                  onClick={scrollToEcosystem}
                  className="border-violet-600 bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-md font-bold hover:from-violet-700 hover:to-indigo-700 active:scale-95"
                >
                  <Globe size={17} className="shrink-0 animate-pulse text-violet-100" /> Explore Our Platforms
                </ActionLink>
                <ActionLink href={URL.radhai} secondary>
                  <Bot size={17} className="shrink-0 text-violet-600" /> Talk to RadhAI
                </ActionLink>
                <ActionLink href={URL.lender} secondary>
                  <Wallet size={17} className="shrink-0 text-violet-600" /> OxyLoans
                </ActionLink>
                <ActionLink href={URL.zoom} secondary className="col-span-2 sm:col-span-2 lg:col-span-1">
                  <Video size={17} className="shrink-0 text-violet-600" /> Daily Zoom Meet
                </ActionLink>
              </div>

            </div>
          </div>
        </section>

         {/* JOB APPLICATION */}
        <section id="how-to-apply" aria-labelledby="apply-heading" className="scroll-mt-24 border-t border-slate-200/70 py-6 sm:py-8 bg-slate-50/50">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div className="max-w-2xl">
                <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-violet-700">Jobs &amp; Careers · ASKOXY.AI</p>
                <h2 id="apply-heading" className="text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl lg:text-[34px]">How to apply for a job</h2>
                <p className="mt-1.5 text-sm leading-6 text-slate-600 sm:text-base">Follow these five steps to complete your job application with confidence.</p>
              </div>
              <ActionLink href={URL.jobs} className="sm:shrink-0">Apply Jobs -{">"}</ActionLink>
            </div>
            <ol className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
              {steps.map((step, index) => <StepCard key={step.title} step={step} index={index} />)}
            </ol>
            <div className="mt-3 flex items-start gap-3 rounded-2xl border border-amber-200 bg-amber-50 px-4 py-4 sm:px-5">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-amber-700" aria-hidden="true" />
              <p className="text-sm leading-6 text-amber-950"><strong>Important:</strong> A cover letter is mandatory. After the exam, select <strong>Complete Final Step</strong>, submit your cover letter, and track your status under <strong>My Job Applications</strong>.</p>
            </div>
          </div>
        </section>

      

       

        {/* DAILY MEETING */}
        <section aria-labelledby="zoom-heading" className="py-6 sm:py-8">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#221452] via-[#4c1d95] to-[#6d28d9] p-5 text-white shadow-[0_22px_48px_rgba(76,29,149,.14)] sm:p-7 lg:p-8">
              <div aria-hidden="true" className="pointer-events-none absolute -right-16 -top-28 h-80 w-80 rounded-full border-[55px] border-white/10" />
              <div className="relative flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div className="max-w-2xl">
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1.5 text-xs font-bold tracking-wide text-violet-50"><span className="h-2 w-2 rounded-full bg-emerald-300" /> EVERYDAY ZOOM LIVE</span>
                  <h2 id="zoom-heading" className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">Connect. Learn. Grow.</h2>
                  <p className="mt-2 text-sm leading-7 text-violet-100 sm:text-base">Join our daily Zoom session and explore opportunities across the OXY ecosystem.</p>
                  <p className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-white"><Clock3 size={18} /> 8:00 PM – 9:00 PM IST · Every day</p>
                </div>
                <a href={URL.zoom} target="_blank" rel="noopener noreferrer" className={`${focus} group inline-flex min-h-12 w-full shrink-0 items-center justify-center gap-2 rounded-2xl bg-white px-6 py-3 text-sm font-bold text-violet-800 shadow-lg transition-all hover:bg-violet-50 md:w-auto`}><Video size={18} /> Join Zoom Meeting <ArrowUpRight size={17} className="transition-transform group-hover:translate-x-0.5" /></a>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT & SOCIAL HUB (WhatsApp, Instagram, and Toll-Free Support Helpline) */}
        <section aria-labelledby="social-heading" className="pb-6 sm:pb-8">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-3 flex flex-wrap items-end justify-between gap-2">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[.15em] text-violet-700">Stay Connected</p>
                <h2 id="social-heading" className="mt-0.5 text-xl font-bold tracking-tight text-slate-950 sm:text-2xl">
                  Reach Out &amp; Follow TVRadhakrishna
                </h2>
              </div>
              <p className="text-xs text-slate-500">Official Helpline &amp; Community Channels</p>
            </div>
            <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
              {/* TOLL FREE DIRECT CARD */}
              <article className="group flex min-w-0 items-center gap-3 rounded-2xl border border-violet-100 bg-gradient-to-r from-[#faf8ff] via-white to-white p-3.5 shadow-[0_3px_12px_rgba(49,27,95,.055)] transition-all hover:border-violet-200 hover:shadow-[0_8px_22px_rgba(49,27,95,.10)]">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 to-indigo-600 text-white shadow-sm">
                  <PhoneCall size={20} className="animate-pulse" />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-[10px] font-bold uppercase tracking-[.1em] text-violet-700">Toll Free Helpline</p>
                  <h3 className="mt-0.5 font-mono text-[14px] font-extrabold text-slate-950 sm:text-[15px]">{TOLL_FREE_DISPLAY}</h3>
                  <p className="mt-0.5 text-xs text-slate-500">Call our advisory desk</p>
                </div>
                <a
                  href={TOLL_FREE_TEL}
                  aria-label={`Call ${TOLL_FREE_DISPLAY}`}
                  className={`${focus} inline-flex min-h-10 shrink-0 items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 px-3.5 text-[12px] font-bold text-white transition-opacity hover:opacity-90`}
                >
                  <Phone size={13} /> Call
                </a>
              </article>

              {/* WHATSAPP CARD */}
              <article className="group flex min-w-0 items-center gap-3 rounded-2xl border border-emerald-100 bg-gradient-to-r from-[#edfff4] via-white to-white p-3.5 shadow-[0_3px_12px_rgba(8,108,60,.055)] transition-all hover:border-emerald-200 hover:shadow-[0_8px_22px_rgba(8,108,60,.10)]">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#16a765] text-white shadow-[inset_0_1px_0_rgba(255,255,255,.25)]">
                  <MessageCircle size={22} strokeWidth={2} aria-hidden="true" />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-[10px] font-bold uppercase tracking-[.1em] text-emerald-700">WhatsApp Community</p>
                  <h3 className="mt-0.5 text-[14px] font-bold leading-5 text-slate-900 sm:text-[15px]">TVRadhakrishna Community</h3>
                  <p className="mt-0.5 text-xs text-slate-500">Updates &amp; opportunities</p>
                </div>
                <a href={URL.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="Join WhatsApp Community"
                  className={`${focus} inline-flex min-h-10 shrink-0 items-center justify-center gap-1 rounded-xl bg-emerald-600 px-3 text-[12px] font-bold text-white transition-colors hover:bg-emerald-700`}>
                  Join <ArrowUpRight size={15} aria-hidden="true" />
                </a>
              </article>

              {/* INSTAGRAM CARD */}
              <article className="group flex min-w-0 items-center gap-3 rounded-2xl border border-pink-100 bg-gradient-to-r from-[#fff2f8] via-white to-white p-3.5 shadow-[0_3px_12px_rgba(158,42,102,.055)] transition-all hover:border-pink-200 hover:shadow-[0_8px_22px_rgba(158,42,102,.10)]">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#f7a438] via-[#e02f7b] to-[#783dc0] text-white shadow-[inset_0_1px_0_rgba(255,255,255,.25)]">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect x="2" y="2" width="20" height="20" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                  </svg>
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-[10px] font-bold uppercase tracking-[.1em] text-pink-700">Instagram</p>
                  <h3 className="mt-0.5 text-[14px] font-bold leading-5 text-slate-900 sm:text-[15px]">Follow TVRadhakrishna</h3>
                  <p className="mt-0.5 text-xs text-slate-500">Reels, stories &amp; news</p>
                </div>
                <a href={URL.instagram} target="_blank" rel="noopener noreferrer" aria-label="Follow TVRadhakrishna on Instagram"
                  className={`${focus} inline-flex min-h-10 shrink-0 items-center justify-center gap-1 rounded-xl bg-gradient-to-r from-[#e0327f] to-[#8538b8] px-3 text-[12px] font-bold text-white transition-opacity hover:opacity-90`}>
                  Follow <ArrowUpRight size={15} aria-hidden="true" />
                </a>
              </article>
            </div>
          </div>
        </section>
  {/* OXY ECOSYSTEM PLATFORMS & JOURNEYS SECTION */}
        <section id="oxy-ecosystem" aria-labelledby="ecosystem-heading" className="scroll-mt-20 sm:scroll-mt-24 py-7 sm:py-9">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-1.5 rounded-full border border-violet-200 bg-violet-50/80 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-violet-700">
                  <Globe size={14} className="text-violet-600" />
                  <span>Explore Opportunities</span>
                </div>
                <h2 id="ecosystem-heading" className="mt-2 text-2xl font-extrabold tracking-tight text-slate-950 sm:text-3xl lg:text-[34px]">
                  Choose your OXY journey
                </h2>
                <p className="mt-1.5 text-sm leading-6 text-slate-600 sm:text-base">
                  Find the right path across our group web platforms, Android apps, and iOS applications.
                </p>
              </div>
              {/* <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 sm:shrink-0">
                <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="font-semibold text-slate-700">
                  {platformTab === "web" && `${platforms.length} Official Portals`}
                  {platformTab === "android" && `${displayedPlatforms.length} Android Apps`}
                  {platformTab === "ios" && `${displayedPlatforms.length} iOS Apps`}
                </span>
              </div> */}
            </div>

            {/* THREE TABS: WEB, ANDROID, IOS */}
            <div className="mt-6 flex flex-wrap items-center gap-2 rounded-2xl border border-slate-200/90 bg-white p-1.5 shadow-[0_2px_8px_rgba(30,16,60,.04)] sm:inline-flex">
              <button
                type="button"
                onClick={() => setPlatformTab("web")}
                className={`inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-xs font-bold transition-all sm:text-sm ${
                  platformTab === "web"
                    ? "bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-sm"
                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                }`}
              >
                <Globe size={15} />
                <span>Web</span>
              </button>

              <button
                type="button"
                onClick={() => setPlatformTab("android")}
                className={`inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-xs font-bold transition-all sm:text-sm ${
                  platformTab === "android"
                    ? "bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-sm"
                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                }`}
              >
                <Smartphone size={15} />
                <span>Android App </span>
              </button>

              <button
                type="button"
                onClick={() => setPlatformTab("ios")}
                className={`inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-xs font-bold transition-all sm:text-sm ${
                  platformTab === "ios"
                    ? "bg-slate-900 text-white shadow-sm"
                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                }`}
              >
                <Apple size={15} />
                <span>iOS App </span>
              </button>
            </div>

            {/* RESPONSIVE CARDS GRID */}
            <div className="mt-6 grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 sm:gap-4">
              {displayedPlatforms.map((platform) => {
                let targetUrl = platform.href;
                if (platformTab === "android" && platform.androidUrl) {
                  targetUrl = platform.androidUrl;
                } else if (platformTab === "ios" && platform.iosUrl) {
                  targetUrl = platform.iosUrl;
                }

                return (
                  <a
                    key={platform.name}
                    href={targetUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit ${platform.name} — ${platform.tagline}`}
                    className={`${focus} group flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-white p-5 text-center shadow-[0_4px_16px_rgba(30,16,60,.04)] transition-all duration-300 hover:-translate-y-1.5 hover:border-violet-300 hover:shadow-[0_16px_32px_rgba(76,29,149,.10)] active:scale-[0.99]`}
                  >
                    {/* LOGO CONTAINER */}
                    <div className="flex h-20 w-full items-center justify-center rounded-xl bg-slate-50/70 p-3 transition-colors group-hover:bg-violet-50/40">
                      {platform.logo ? (
                        <PlatformLogo
                          src={platform.logo}
                          fallback={platform.fallbackLogo}
                          alt={`${platform.name} logo`}
                        />
                      ) : (
                        platform.icon && (
                          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-100/70 text-violet-700 transition-transform duration-200 group-hover:scale-110">
                            <platform.icon className="h-6 w-6" strokeWidth={1.8} />
                          </div>
                        )
                      )}
                    </div>

                    {/* NAME + TAGLINE (MAX 2 LINES) */}
                    <div className="mt-3.5 flex flex-1 flex-col items-center justify-start">
                      <h3 className="line-clamp-1 text-sm font-bold tracking-tight text-slate-900 transition-colors group-hover:text-violet-700 sm:text-[15px]">
                        {platform.name}
                      </h3>
                      <p
                        title={platform.tagline}
                        className="mt-1.5 line-clamp-2 min-h-[2.5rem] text-xs leading-5 text-slate-600 transition-colors group-hover:text-slate-800 sm:text-[12.5px]"
                      >
                        {platform.tagline}
                      </p>
                    </div>

                    {/* BOTTOM ACTION LINK */}
                    <div className="mt-3.5 flex w-full items-center justify-center gap-1.5 border-t border-slate-100 pt-3 text-[11px] font-semibold text-slate-500 transition-colors group-hover:text-violet-700 sm:text-xs">
                      <span>Explore</span>
                      <ArrowUpRight
                        size={14}
                        className="shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-violet-600"
                      />
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="border-t border-slate-200 bg-white py-6">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 text-sm sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <div>
            <p className="font-bold text-slate-900">Radhakrishna Thatavarti</p>
            <p className="mt-0.5 text-slate-500">CEO &amp; Co-founder · ASKOXY.AI · OxyLoans · OXY Group</p>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            {/* <a
              href={TOLL_FREE_TEL}
              className={`${focus} inline-flex items-center gap-1.5 rounded-lg border border-violet-200 bg-violet-50/70 px-3 py-1.5 font-mono text-xs font-bold text-violet-800 hover:bg-violet-100`}
            >
              <PhoneCall size={14} className="text-violet-600" />
              <span>Toll Free: {TOLL_FREE_DISPLAY}</span>
            </a> */}
            <a href={URL.site} target="_blank" rel="noopener noreferrer" className={`${focus} inline-flex w-fit items-center gap-2 rounded-md font-semibold text-violet-700 hover:text-violet-900`}>
              Visit tvradhakrishna.com <ExternalLink size={15} />
            </a>
          </div>
        </div>
      </footer>

      {/* FLOATING QUICK-CALL ACTION BUTTON (Mobile & Tablet) */}
      <aside aria-label="Quick Call Helpline" className="fixed bottom-5 right-4 z-40 sm:bottom-6 sm:right-6">
        <a
          href={TOLL_FREE_TEL}
          className="group flex items-center gap-2.5 rounded-full border border-violet-400/40 bg-gradient-to-r from-violet-600 to-indigo-700 px-4 py-3 text-white shadow-[0_10px_25px_rgba(76,29,149,0.35)] transition-all duration-300 hover:scale-105 hover:shadow-[0_14px_30px_rgba(76,29,149,0.45)] active:scale-95"
          aria-label={`Call Toll Free Helpline ${TOLL_FREE_DISPLAY}`}
        >
          <span className="relative flex h-8 w-8 items-center justify-center rounded-full bg-white/20">
            <PhoneCall size={18} className="animate-pulse" />
            <span className="absolute -top-0.5 -right-0.5 h-2.5 w-2.5 rounded-full bg-violet-300 ring-2 ring-violet-700" />
          </span>
          <span className="flex flex-col text-left">
            <span className="text-[10px] font-bold uppercase tracking-wider text-violet-100">Toll Free Helpline</span>
            <span className="font-mono text-xs font-extrabold sm:text-sm">{TOLL_FREE_DISPLAY}</span>
          </span>
        </a>
      </aside>
    </div>
  );
}
