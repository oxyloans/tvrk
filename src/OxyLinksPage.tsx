import React from "react";
import {
  ArrowUpRight, Bot, BriefcaseBusiness, Check, CheckCircle2,
  ClipboardCheck, Clock3, ExternalLink, FileCheck2,
  FileText, Handshake, Landmark, MessageCircle, Scale, ShieldCheck,
  UserRound, Video, Wallet, type LucideIcon,
} from "lucide-react";
import InitiativeHeader from "./InitiativeHeader";

// Tailwind CSS only. Keeps the original links and existing header component.
const URL = {
  site: "https://tvradhakrishna.com",
  askoxy: "https://www.askoxy.ai/",
  jobs: "https://www.askoxy.ai/main/viewjobdetails/default/ALL",
  zoom: "https://us06web.zoom.us/j/83426047733?pwd=BKaIwjmah7iidb2s9F1bPK8uv9tMDg.1",
  radhai: "https://www.askoxy.ai/RADHAI",
  lender: "https://www.user.oxyloans.com/register?ref=LR55026",
  borrower: "https://www.user.oxyloans.com/borrower_register?ref=LR55026",
  partner: "https://www.askoxy.ai/Partner",
  advocate: "https://www.askoxy.ai/main/services/5388/start-your-legal-partner-advoc",
  recovery: "https://www.askoxy.ai/main/services/08c3/start-your-recovery-agent-part",
  whatsapp: "https://chat.whatsapp.com/GO99fD0qxawCgDY1QDhdxg?s=sw&p=a&mlu=4&ilr=4",
  // Replace with the official TVRadhakrishna WhatsApp CHANNEL URL when available.
  // The existing link above is a WhatsApp group invite, not a channel.
  instagram: "https://www.instagram.com/tvradhakrishna/",
} as const;

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

type Journey = { name: string; desc: string; href: string; icon: LucideIcon; iconClass: string };
const journeys: Journey[] = [
  { name: "Lender", desc: "Explore lending opportunities", href: URL.lender, icon: Wallet, iconClass: "bg-violet-50 text-violet-700" },
  { name: "Borrower", desc: "Discover loan solutions", href: URL.borrower, icon: Landmark, iconClass: "bg-sky-50 text-sky-700" },
  { name: "Partner", desc: "Grow with OXYLOANS", href: URL.partner, icon: Handshake, iconClass: "bg-amber-50 text-amber-700" },
  { name: "Advocate", desc: "Explore legal partnerships", href: URL.advocate, icon: Scale, iconClass: "bg-fuchsia-50 text-fuchsia-700" },
  { name: "Recovery Agent", desc: "Explore recovery partnerships", href: URL.recovery, icon: ShieldCheck, iconClass: "bg-teal-50 text-teal-700" },
];

const focus = "focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-violet-300/70 focus-visible:ring-offset-2";

function ActionLink({ href, children, secondary = false, className = "" }: {
  href: string; children: React.ReactNode; secondary?: boolean; className?: string;
}) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer"
      className={`${focus} inline-flex min-h-[46px] min-w-0 items-center justify-center gap-2 rounded-xl border px-2.5 py-2.5 text-center text-[12px] font-semibold shadow-[0_3px_9px_rgba(49,27,95,.07),inset_0_1px_0_rgba(255,255,255,.55)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(49,27,95,.12)] sm:px-4 sm:text-sm ${secondary
        ? "border-slate-200 bg-gradient-to-b from-white to-violet-50/70 text-slate-800 hover:border-violet-300 hover:from-white hover:to-violet-100"
        : "border-violet-600 bg-gradient-to-b from-violet-500 via-violet-600 to-violet-700 text-white hover:from-violet-600 hover:to-violet-800"} ${className}`}>
      {children}
    </a>
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
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f6f7fc] font-sans text-slate-900 antialiased selection:bg-violet-200">
      <InitiativeHeader active="links" />
      <main>
        {/* Clean hero with equal-width, consistent actions */}
        <section aria-labelledby="welcome-heading" className="border-b border-[#e9e5f3] bg-gradient-to-b from-white to-[#faf8ff]">
          <div className="mx-auto w-full max-w-7xl px-4 py-5 sm:px-6 sm:py-6 lg:px-8">
            <div className="flex flex-col gap-3 lg:gap-4">
              <div className="min-w-0 lg:max-w-xl">
                <p className="text-[11px] font-bold uppercase tracking-[.12em] text-violet-700">Explore the OXY ecosystem</p>
                <h1 id="welcome-heading" className="mt-1 text-[27px] font-bold leading-tight tracking-tight text-slate-950 sm:text-3xl">Greetings from <span className="text-violet-700">Radha!</span></h1>
                <p className="mt-1 text-sm leading-5 text-slate-600">Jobs, RadhAI, lending and more — all in one place.</p>
              </div>
              <div className="grid w-full grid-cols-2 gap-2 sm:gap-2.5 lg:grid-cols-4">
                <ActionLink href={URL.jobs}><BriefcaseBusiness size={17} className="shrink-0" /> Explore Jobs</ActionLink>
                <ActionLink href={URL.radhai} secondary><Bot size={17} className="shrink-0" /> Talk to RadhAI</ActionLink>
                <ActionLink href={URL.lender} secondary><Wallet size={17} className="shrink-0" /> OxyLoans</ActionLink>
                <ActionLink href={URL.zoom} secondary><Video size={17} className="shrink-0" /> Daily Zoom Meet</ActionLink>
              </div>
            </div>
          </div>
        </section>

        {/* JOB APPLICATION */}
        <section id="how-to-apply" aria-labelledby="apply-heading" className="scroll-mt-24 py-6 sm:py-7">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div className="max-w-2xl">
                <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-violet-700">Jobs & Careers · ASKOXY.AI</p>
                <h2 id="apply-heading" className="text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl lg:text-[34px]">How to apply for a job</h2>
                <p className="mt-1.5 text-sm leading-6 text-slate-600 sm:text-base">Follow these five steps to complete your job application with confidence.</p>
              </div>
              <ActionLink href={URL.jobs} className="sm:shrink-0">View All Jobs</ActionLink>
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
        <section aria-labelledby="zoom-heading" className="pb-6 sm:pb-7">
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


        {/* SOCIAL CHANNELS — two distinct cards, not part of Journeys */}
        <section aria-labelledby="social-heading" className="pb-5 sm:pb-6">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-2.5 flex flex-wrap items-end justify-between gap-2">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[.15em] text-violet-700">Stay in the loop</p>
                <h2 id="social-heading" className="mt-0.5 text-xl font-bold tracking-tight text-slate-950 sm:text-2xl">Stay tuned to TVRadhakrishna</h2>
              </div>
              <p className="text-xs text-slate-500">Community updates &amp; latest posts</p>
            </div>
            <div className="grid grid-cols-1 gap-2.5 md:grid-cols-2 md:gap-3">
              {/* Compact WhatsApp card — channel URL can replace the existing group invite */}
              <article className="group flex min-w-0 items-center gap-3 rounded-2xl border border-emerald-100 bg-gradient-to-r from-[#edfff4] via-white to-white p-3 shadow-[0_3px_12px_rgba(8,108,60,.055)] transition-all hover:border-emerald-200 hover:shadow-[0_8px_22px_rgba(8,108,60,.10)] sm:p-3.5">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#16a765] text-white shadow-[inset_0_1px_0_rgba(255,255,255,.25)]">
                  <MessageCircle size={22} strokeWidth={2} aria-hidden="true" />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-[10px] font-bold uppercase tracking-[.1em] text-emerald-700">WhatsApp community</p>
                  <h3 className="mt-0.5 text-[14px] font-bold leading-5 text-slate-900 sm:text-[15px]">Stay tuned with TVRadhakrishna</h3>
                  <p className="mt-0.5 text-xs text-slate-500">Updates &amp; opportunities</p>
                </div>
                <a href={URL.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="Join WhatsApp Community"
                  className={`${focus} inline-flex min-h-10 shrink-0 items-center justify-center gap-1 rounded-xl bg-emerald-600 px-3 text-[12px] font-bold text-white transition-colors hover:bg-emerald-700`}>
                  Join <ArrowUpRight size={15} aria-hidden="true" />
                </a>
              </article>

              {/* Compact Instagram card with distinct gradient accent */}
              <article className="group flex min-w-0 items-center gap-3 rounded-2xl border border-pink-100 bg-gradient-to-r from-[#fff2f8] via-white to-white p-3 shadow-[0_3px_12px_rgba(158,42,102,.055)] transition-all hover:border-pink-200 hover:shadow-[0_8px_22px_rgba(158,42,102,.10)] sm:p-3.5">
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

        {/* JOURNEYS */}
        <section aria-labelledby="journeys-heading" className="border-t border-slate-200/80 bg-white py-6 sm:py-7">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div><p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-violet-700">Explore opportunities</p><h2 id="journeys-heading" className="text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl lg:text-[34px]">Choose your OXY journey</h2><p className="mt-1.5 text-sm leading-6 text-slate-600 sm:text-base">Find the right path and take your next step.</p></div>
              <span className="text-sm font-medium text-slate-500">5 ways to connect</span>
            </div>
            <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
              {journeys.map(({ name, desc, href, icon: Icon, iconClass }) => (
                <a key={name} href={href} target="_blank" rel="noopener noreferrer" className={`${focus} group flex min-h-[80px] items-center gap-3 rounded-[18px] border border-slate-200/80 bg-gradient-to-b from-white to-[#fbfaff] p-3.5 shadow-[0_6px_20px_rgba(49,27,95,.05)] transition-all duration-200 hover:-translate-y-1 hover:border-violet-200 hover:shadow-[0_16px_36px_rgba(45,27,105,.09)]`}>
                  <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${iconClass}`}><Icon size={21} strokeWidth={1.8} /></span>
                  <span className="min-w-0 flex-1"><span className="block text-base font-bold text-slate-900">{name}</span><span className="mt-1 block text-sm leading-5 text-slate-500">{desc}</span></span>
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-slate-50 text-slate-500 transition-colors group-hover:bg-violet-100 group-hover:text-violet-700"><ArrowUpRight size={18} /></span>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t border-slate-200 bg-white py-5">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 text-sm sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <div><p className="font-bold text-slate-900">Radhakrishna Thatavarti</p><p className="mt-1 text-slate-500">CEO & Co-founder · ASKOXY.AI · OxyLoans</p></div>
          <a href={URL.site} target="_blank" rel="noopener noreferrer" className={`${focus} inline-flex w-fit items-center gap-2 rounded-md font-semibold text-violet-700 hover:text-violet-900`}>Visit tvradhakrishna.com <ExternalLink size={15} /></a>
        </div>
      </footer>
    </div>
  );
}
