import React from "react";
import {
  ArrowUpRight, Bot, BriefcaseBusiness, CheckCircle2, ClipboardCheck,
  Clock3, FileCheck2, FileText, Handshake, Landmark, Link2,
  MessageCircle, Scale, ShieldCheck, UserRound, Video, Wallet,
  type LucideIcon,
} from "lucide-react";
import InitiativeHeader from "./InitiativeHeader";

// Tailwind only: no separate CSS, import.meta.glob, or inline styles.
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
} as const;

const path: { title: string; caption: string; details: string[]; icon: LucideIcon }[] = [
  {
    title: "Register",
    caption: "Create your account",
    icon: UserRound,
    details: ["Visit ASKOXY.AI", "Sign Up / Sign In"],
  },
  {
    title: "Find a job",
    caption: "Choose ASKOXY.AI",
    icon: BriefcaseBusiness,
    details: ["Open All Jobs", "Select ASKOXY.AI in company dropdown", "Choose a role and check eligibility"],
  },
  {
    title: "Apply & ATS",
    caption: "Upload your resume",
    icon: FileCheck2,
    details: ["Apply for your chosen role", "Upload resume", "Review ATS scorecard and exam instructions"],
  },
  {
    title: "Take the exam",
    caption: "Complete assessment",
    icon: ClipboardCheck,
    details: ["Answer and submit online assessment", "Review exam scorecard", 'Click "Complete Final Step"'],
  },
  {
    title: "Complete & track",
    caption: "Finish your application",
    icon: FileText,
    details: ["Submit mandatory cover letter", "Open My Job Applications", "Track application status"],
  },
];

const journeys: { name: string; desc: string; href: string; icon: LucideIcon }[] = [
  { name: "Lender", desc: "Lend & Earn", href: URL.lender, icon: Wallet },
  { name: "Borrower", desc: "Get Loan Solutions", href: URL.borrower, icon: Landmark },
  { name: "Partner", desc: "Grow with OXYLOANS", href: URL.partner, icon: Handshake },
  { name: "Advocate", desc: "Legal Partner Opportunities", href: URL.advocate, icon: Scale },
  { name: "Recovery Agent", desc: "Recovery Partner Opportunities", href: URL.recovery, icon: ShieldCheck },
];

const focus = "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ffd0ac] focus-visible:ring-offset-2 focus-visible:ring-offset-[#241b67]";

function GlossyLink({ href, children, peach = false, className = "" }: {
  href: string; children: React.ReactNode; peach?: boolean; className?: string;
}) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer"
      className={`${focus} group inline-flex min-h-[46px] items-center justify-center gap-2 rounded-xl border px-4 py-2.5 text-center text-[13px] font-extrabold transition-all duration-200 hover:-translate-y-0.5 hover:brightness-110 active:translate-y-0 ${peach
        ? "border-[#ffe6d8]/70 bg-gradient-to-b from-[#ffe7d8] via-[#ffd0b9] to-[#f2a889] text-[#342052] shadow-[inset_0_2px_0_rgba(255,255,255,.75),inset_0_-2px_0_rgba(119,54,86,.2),0_8px_20px_rgba(10,3,38,.23)]"
        : "border-[#ad91dd]/60 bg-gradient-to-b from-[#a68ad3] via-[#7255ae] to-[#513682] text-white shadow-[inset_0_2px_0_rgba(255,255,255,.40),inset_0_-2px_0_rgba(17,9,55,.36),0_8px_20px_rgba(10,3,38,.30)]"
      } ${className}`}>
      {children}
      <ArrowUpRight className="h-4 w-4 shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
    </a>
  );
}

export default function OxyLinksPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-gradient-to-b from-[#211B67] via-[#382774] to-[#65407D] font-sans text-[#fff8ff] antialiased selection:bg-[#ffd0ac] selection:text-[#241b67]">
      <InitiativeHeader active="links" />
      <main>
        <section aria-labelledby="welcome-heading" className="">
          <div className="mx-auto w-full max-w-[1460px] px-4 pb-6 pt-6 sm:px-7 sm:pb-8 sm:pt-8 lg:px-12">
            <p className="text-[11px] font-extrabold uppercase tracking-[.20em] text-[#edc3e7]">Explore the OXY Ecosystem</p>
            <h1 id="welcome-heading" className="mt-2 text-[clamp(1.9rem,4vw,3.5rem)] font-black leading-[1.1] tracking-[-.05em] text-[#ffd0ac]">👋 Greetings from Radha!</h1>
            <p className="mt-3 max-w-[700px] text-[13px] leading-6 text-[#f2eaf9] sm:text-[16px]">Discover the right journey for you. All important links in one place.</p>
            <div className="mt-5 flex flex-wrap gap-2.5">
              <GlossyLink href={URL.jobs} peach><BriefcaseBusiness className="h-4 w-4"/> Apply for Jobs</GlossyLink>
              <GlossyLink href={URL.radhai}><Bot className="h-4 w-4"/> Talk to RadhaAI</GlossyLink>
              <GlossyLink href={URL.lender}><Wallet className="h-4 w-4"/> Register with OxyLoans</GlossyLink>
              <GlossyLink href={URL.site}><Link2 className="h-4 w-4"/> Visit Website</GlossyLink>
            </div>
          </div>
        </section>

        <section id="how-to-apply" aria-labelledby="apply-heading" className="relative">
          <div className="mx-auto w-full max-w-[1460px] px-4 pb-6 pt-6 sm:px-7 sm:pb-8 lg:px-12">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div className="max-w-[800px]">
                <p className="mb-2 flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-[.20em] text-[#eadbf7] sm:text-xs">
                  <BriefcaseBusiness className="h-4 w-4"/> Jobs &amp; Careers · ASKOXY.AI
                </p>
                <h1 id="apply-heading" className="text-[clamp(1.75rem,3.5vw,3.3rem)] font-black leading-[1.09] tracking-[-.055em] text-[#ffd0ac]">
                  How to Apply for a Job
                </h1>
                <p className="mt-2 text-[12px] leading-6 text-[#e5dcf4] sm:text-[14px]">Your complete application journey, explained in five easy steps.</p>
              </div>
    
            </div>

            {/* Compact responsive steps: no connector lines or ornamental dividers. */}
            <div className="relative mt-5 sm:mt-7">
              <ol className="relative grid grid-cols-1 gap-3 md:grid-cols-5 md:gap-3 lg:gap-4">
                {path.map((step, index) => {
                  const Icon = step.icon;
                  return (
                    <li key={step.title} className="relative grid grid-cols-[42px_minmax(0,1fr)] items-start gap-3 rounded-2xl bg-white/[0.065] p-3 md:block md:p-3">
                      <div className="relative z-10 flex h-[42px] w-[42px] items-center justify-center rounded-full bg-[#e8bfe7] text-[#51256d] shadow-[0_5px_14px_rgba(9,4,31,.18)] md:mb-3 md:h-[48px] md:w-[48px]">
                        <Icon className="h-5 w-5 md:h-6 md:w-6" strokeWidth={2} />
                      </div>
                      <div className="min-w-0 md:min-h-[180px]">
                        <span className="text-[10px] font-black uppercase tracking-[.13em] text-[#ffc5a9]">STEP {String(index + 1).padStart(2, "0")}</span>
                        <h2 className="mt-1 text-[15px] font-extrabold leading-5 text-[#fff1eb] lg:text-[16px]">{step.title}</h2>
                        <p className="mt-1 text-[11px] font-semibold text-[#edcce8]">{step.caption}</p>
                        <ul className="mt-2 space-y-1.5">
                          {step.details.map((detail) => (
                            <li key={detail} className="flex items-start gap-1.5 text-[11px] leading-[1.55] text-[#e9e2f6] lg:text-xs">
                              <span aria-hidden="true" className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-[#ffcfb1]" />
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </li>
                  );
                })}
              </ol>
            </div>
            <div className="mt-5 flex flex-wrap items-center justify-between gap-x-5 gap-y-2 rounded-xl bg-[#251a58]/55 px-3 py-3 sm:px-4">
              <p className="flex items-start gap-2 text-[12px] leading-5 text-[#ede4f9]"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#ffd0ac]"/><span><strong className="text-[#ffd0ac]">Important:</strong> Cover letter is mandatory. After your exam, select <strong>Complete Final Step</strong>, submit your cover letter and check <strong>My Job Applications</strong>.</span></p>
            </div>
          </div>
        </section>

        <section aria-labelledby="zoom-heading" className="py-5 sm:py-6">
          <div className="mx-auto flex w-full max-w-[1460px] flex-col gap-3 px-4 sm:px-7 md:flex-row md:items-center md:justify-between lg:px-12">
            <div>
              <p className="flex items-center gap-2 text-[11px] font-black uppercase tracking-[.14em] text-[#edc7ef]"><Video className="h-4 w-4"/> Everyday Zoom LIVE</p>
              <h2 id="zoom-heading" className="mt-1 text-xl font-black text-[#ffd0ac]">Join Our Everyday Zoom Meet</h2>
              <p className="mt-1 flex items-center gap-2 text-sm text-[#ede1f6]"><Clock3 className="h-4 w-4"/> 8:00 PM – 9:00 PM IST</p>
            </div>
            <GlossyLink href={URL.zoom} peach className="w-full md:w-auto"><Video className="h-4 w-4"/> Join Zoom Meeting</GlossyLink>
          </div>
        </section>

        <section className="py-7 text-white sm:py-9" aria-labelledby="journeys-heading">
          <div className="mx-auto w-full max-w-[1460px] px-4 sm:px-7 lg:px-12">
            <div className="mb-4 flex flex-wrap items-end justify-between gap-2">
              <div><p className="text-[10px] font-black uppercase tracking-[.2em] text-[#e8b9ea]">Explore opportunities</p><h2 id="journeys-heading" className="mt-1 text-[24px] font-black tracking-tight text-[#ffd0ac] sm:text-[30px]">Explore OXY Journeys</h2></div>
              <span className="text-xs font-semibold text-[#d0c4e7]">Choose your path</span>
            </div>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {journeys.map((item) => {
                const Icon = item.icon;
                return (
                  <a key={item.name} href={item.href} target="_blank" rel="noopener noreferrer"
                    className={`${focus} group flex min-h-[84px] items-center gap-3 rounded-[17px] bg-[#2f236b]/70 p-4 shadow-[0_7px_18px_rgba(11,5,41,.13)] transition-all hover:-translate-y-0.5 hover:bg-[#473784]`}>
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#b28ac8]/40 bg-[#59418e] text-[#f6c6dd]"><Icon className="h-5 w-5"/></span>
                    <span className="min-w-0 flex-1"><span className="block text-sm font-extrabold text-[#ffe4d5]">{item.name}</span><span className="mt-1 block text-xs text-[#ded4ee]">{item.desc}</span></span>
                    <ArrowUpRight className="h-4 w-4 shrink-0 text-[#ffc9b6] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"/>
                  </a>
                );
              })}
              <a href={URL.whatsapp} target="_blank" rel="noopener noreferrer" className={`${focus} group flex min-h-[84px] items-center gap-3 rounded-[17px] bg-[#245d55] p-4 shadow-[0_7px_18px_rgba(11,5,41,.13)] transition-all hover:-translate-y-0.5 hover:bg-[#2c7262]`}>
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#327d64] text-[#e4ffed]"><MessageCircle className="h-5 w-5"/></span>
                <span className="min-w-0 flex-1"><span className="block text-sm font-extrabold text-[#ecfff0]">Join WhatsApp Group</span><span className="mt-1 block text-xs text-[#d0e9d9]">Connect with the OXY community</span></span>
                <ArrowUpRight className="h-4 w-4 shrink-0 text-[#e4ffed]" />
              </a>
            </div>
            <footer className="mt-7 pt-3 text-xs leading-6 text-[#d5cbea]">
              <p className="font-extrabold text-[#ffd0ac]">Radhakrishna Thatavarti</p>
              <p>CEO &amp; Co-founder · ASKOXY.AI · OxyLoans</p>
            </footer>
          </div>
        </section>
      </main>
    </div>
  );
}
