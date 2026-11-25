import walkinNov from "./assets/walkin nov.png";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Check,
  CheckCircle2,
  ClipboardCheck,
  FileCheck2,
  FileText,
  UserRound,
  Phone,
  PhoneCall,
  MessageCircle,
  type LucideIcon,
} from "lucide-react";
import InitiativeHeader from "./InitiativeHeader";

const TOLL_FREE_NUMBER = "04041897778";
const TOLL_FREE_DISPLAY = "040 4189 7778";
const TOLL_FREE_TEL = `tel:${TOLL_FREE_NUMBER}`;

const URL = {
  site: "https://tvradhakrishna.com",
  askoxy: "https://www.askoxy.ai/",
  jobs: "https://www.askoxy.ai/main/askoxyjobs/cad94b21-9f6d-4dc1-9283-02505af3f132",
  zoom: "https://us06web.zoom.us/j/83426047733?pwd=BKaIwjmah7iidb2s9F1bPK8uv9tMDg.1",
  radhai: "https://www.askoxy.ai/RADHAI",
  lender: "https://www.user.oxyloans.com/register?ref=LR55026",
  borrower: "https://www.user.oxyloans.com/borrower_register?ref=LR55026",
  partner: "https://www.askoxy.ai/Partner",
  advocate:
    "https://www.askoxy.ai/main/services/5388/start-your-legal-partner-advoc",
  recovery:
    "https://www.askoxy.ai/main/services/08c3/start-your-recovery-agent-part",
  interviewLocation:
    "https://www.google.com/maps/dir//OXYLOANS,+Phase+9,+The+Annexe+Phase-13,+INDU+FORTUNE+FIELDS,+CC-02,+Ground+Floor,+Block-C,+K+P+H+B,+Kukatpally+Housing+Board+Colony,+Kukatpally,+Hyderabad,+Telangana+500085/@17.4809431,78.3953379,15z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3bcb918d3a955555:0x9414c8bca6f540e9!2m2!1d78.3847466!2d17.4752452?entry=ttu&g_ep=EgoyMDI2MTExMC4wIKXMDSoASAFQAw%3D%3D",
  whatsapp:
    "https://chat.whatsapp.com/GO99fD0qxawCgDY1QDhdxg?s=sw&p=a&mlu=4&ilr=4",
  instagram: "https://www.instagram.com/tvradhakrishna/",
} as const;

type Step = {
  title: string;
  caption: string;
  details: string[];
  icon: LucideIcon;
};
const steps: Step[] = [
  {
    title: "Create an account",
    caption: "Get started on ASKOXY.AI",
    icon: UserRound,
    details: ["Visit ASKOXY.AI", "Sign up or sign in to your account"],
  },
  {
    title: "Explore jobs",
    caption: "Find the right opportunity",
    icon: BriefcaseBusiness,
    details: [
      "Open All Jobs",
      "Select ASKOXY.AI from the company dropdown",
      "Choose a role and review eligibility",
    ],
  },
  {
    title: "Apply & review ATS",
    caption: "Upload your resume",
    icon: FileCheck2,
    details: [
      "Apply for your selected role",
      "Upload your resume",
      "Review the ATS scorecard and exam instructions",
    ],
  },
  {
    title: "Complete the exam",
    caption: "Finish your assessment",
    icon: ClipboardCheck,
    details: [
      "Answer and submit the online assessment",
      "Review your exam scorecard",
      'Select "Complete Final Step"',
    ],
  },
  {
    title: "Submit & track",
    caption: "Complete your application",
    icon: FileText,
    details: [
      "Submit the mandatory cover letter",
      "Open My Job Applications",
      "Track your application status",
    ],
  },
];

const focus =
  "focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-violet-300/70 focus-visible:ring-offset-2";

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
            <span className="block text-[10px] font-extrabold uppercase tracking-[0.14em] text-violet-700">
              Step {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-0.5 text-[15px] font-bold leading-5 text-slate-900">
              {step.title}
            </h3>
            <p className="mt-1 text-xs leading-4 text-slate-500">
              {step.caption}
            </p>
          </div>
        </div>
        <ul className="mt-3 space-y-2 border-t border-violet-100 pt-3">
          {step.details.map((detail) => (
            <li
              key={detail}
              className="flex items-start gap-2 text-[12px] leading-[1.55] text-slate-600 sm:text-[13px]"
            >
              <Check
                className="mt-0.5 h-3.5 w-3.5 shrink-0 text-violet-600"
                aria-hidden="true"
              />
              <span>{detail}</span>
            </li>
          ))}
        </ul>
      </article>
    </li>
  );
}

export default function WeAreHiring() {
  return (
    <div className="min-h-screen bg-[#f6f7fc] text-slate-900 antialiased">
      <InitiativeHeader active="hiring" />
      <main>
        <section
          aria-label="We are hiring"
          className="bg-gradient-to-r from-[#150d3c] to-[#302063] text-white"
        >
          <div className="mx-auto w-full max-w-7xl px-3 py-2 sm:px-5 sm:py-3">
            <h1 className="sr-only">We Are Hiring</h1>
            <style>{`
              #hiring-banner-frame { width: 100%; height: auto; overflow: visible; }
              #hiring-banner-frame > img {
                display: block !important; width: auto !important;
                max-width: 100% !important; min-width: 0 !important;
                height: auto !important; max-height: 240px !important; min-height: 0 !important;
                aspect-ratio: auto !important; object-fit: contain !important;
                object-position: center !important; transform: none !important;
                scale: none !important; clip-path: none !important;
                position: static !important; margin: 0 auto !important;
                border-radius: 0 !important; padding: 0 !important;
              }
              @media (max-width: 640px) {
                #hiring-banner-frame > img { width: 100% !important; max-height: none !important; }
              }
            `}</style>
            <div id="hiring-banner-frame">
              <img
                src={walkinNov}
                alt="Hiring Social Media Executive (Fresher) — walk-in November 28, D Side, Miyapur Metro, 10 AM to 6 PM"
                fetchPriority="high"
                decoding="async"
              />
            </div>
            <div className="mx-auto mt-2 grid w-full max-w-[360px] grid-cols-2 gap-2">
              <a
                href={URL.jobs}
                target="_blank"
                rel="noopener noreferrer"
                className={`${focus} flex min-h-[40px] items-center justify-center gap-1.5 rounded-lg bg-gradient-to-r from-[#ffe8ad] to-[#f1c66d] px-2 text-center text-xs font-extrabold text-[#392405] transition hover:brightness-110 sm:text-sm`}
              >
                Apply Now <ArrowUpRight size={15} className="shrink-0" />
              </a>
              <a
                href="#how-to-apply"
                className={`${focus} flex min-h-[40px] items-center justify-center gap-1.5 rounded-lg border border-white/30 bg-white/10 px-2 text-center text-xs font-bold text-white transition hover:bg-white/20 sm:text-sm`}
              >
                How to Apply <ClipboardCheck size={15} className="shrink-0" />
              </a>
            </div>
          </div>
        </section>
        {/* JOB APPLICATION */}
        <section
          id="how-to-apply"
          aria-labelledby="apply-heading"
          className="scroll-mt-24 border-t border-slate-200/70 py-4 sm:py-5 bg-slate-50/50"
        >
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div className="max-w-2xl">
                <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-violet-700">
                  Jobs &amp; Careers · ASKOXY.AI
                </p>
                <h2
                  id="apply-heading"
                  className="text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl lg:text-[34px]"
                >
                  How to apply for a job
                </h2>
                <p className="mt-1.5 text-sm leading-6 text-slate-600 sm:text-base">
                  Follow these five steps to complete your job application with
                  confidence.
                </p>
              </div>
            </div>

            <ol className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
              {steps.map((step, index) => (
                <StepCard key={step.title} step={step} index={index} />
              ))}
            </ol>
            <div className="mt-3 flex items-start gap-3 rounded-2xl border border-amber-200 bg-amber-50 px-4 py-4 sm:px-5">
              <CheckCircle2
                className="mt-0.5 h-5 w-5 shrink-0 text-amber-700"
                aria-hidden="true"
              />
              <p className="text-sm leading-6 text-amber-950">
                <strong>Important:</strong> A cover letter is mandatory. After
                the exam, select <strong>Complete Final Step</strong>, submit
                your cover letter, and track your status under{" "}
                <strong>My Job Applications</strong>.
              </p>
            </div>
          </div>
        </section>

        {/* CONTACT & SOCIAL HUB (WhatsApp, Instagram, and Toll-Free Support Helpline) */}
        <section aria-labelledby="social-heading" className="pb-4 sm:pb-5">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-3 flex flex-wrap items-end justify-between gap-2">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[.15em] text-violet-700">
                  Stay Connected
                </p>
                <h2
                  id="social-heading"
                  className="mt-0.5 text-xl font-bold tracking-tight text-slate-950 sm:text-2xl"
                >
                  Reach Out &amp; Follow TVRadhakrishna
                </h2>
              </div>
              <p className="text-xs text-slate-500">
                Official Helpline &amp; Community Channels
              </p>
            </div>
            <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
              {/* TOLL FREE DIRECT CARD */}
              <article className="group flex min-w-0 items-center gap-3 rounded-2xl border border-violet-100 bg-gradient-to-r from-[#faf8ff] via-white to-white p-3.5 shadow-[0_3px_12px_rgba(49,27,95,.055)] transition-all hover:border-violet-200 hover:shadow-[0_8px_22px_rgba(49,27,95,.10)]">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 to-indigo-600 text-white shadow-sm">
                  <PhoneCall size={20} className="animate-pulse" />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-[10px] font-bold uppercase tracking-[.1em] text-violet-700">
                    Toll Free Helpline
                  </p>
                  <h3 className="mt-0.5 font-mono text-[14px] font-extrabold text-slate-950 sm:text-[15px]">
                    {TOLL_FREE_DISPLAY}
                  </h3>
                  <p className="mt-0.5 text-xs text-slate-500">
                    Call our advisory desk
                  </p>
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
                  <p className="text-[10px] font-bold uppercase tracking-[.1em] text-emerald-700">
                    WhatsApp Community
                  </p>
                  <h3 className="mt-0.5 text-[14px] font-bold leading-5 text-slate-900 sm:text-[15px]">
                    TVRadhakrishna Community
                  </h3>
                  <p className="mt-0.5 text-xs text-slate-500">
                    Updates &amp; opportunities
                  </p>
                </div>
                <a
                  href={URL.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Join WhatsApp Community"
                  className={`${focus} inline-flex min-h-10 shrink-0 items-center justify-center gap-1 rounded-xl bg-emerald-600 px-3 text-[12px] font-bold text-white transition-colors hover:bg-emerald-700`}
                >
                  Join <ArrowUpRight size={15} aria-hidden="true" />
                </a>
              </article>

              {/* INSTAGRAM CARD */}
              <article className="group flex min-w-0 items-center gap-3 rounded-2xl border border-pink-100 bg-gradient-to-r from-[#fff2f8] via-white to-white p-3.5 shadow-[0_3px_12px_rgba(158,42,102,.055)] transition-all hover:border-pink-200 hover:shadow-[0_8px_22px_rgba(158,42,102,.10)]">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#f7a438] via-[#e02f7b] to-[#783dc0] text-white shadow-[inset_0_1px_0_rgba(255,255,255,.25)]">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle
                      cx="17.5"
                      cy="6.5"
                      r="1"
                      fill="currentColor"
                      stroke="none"
                    />
                  </svg>
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-[10px] font-bold uppercase tracking-[.1em] text-pink-700">
                    Instagram
                  </p>
                  <h3 className="mt-0.5 text-[14px] font-bold leading-5 text-slate-900 sm:text-[15px]">
                    Follow TVRadhakrishna
                  </h3>
                  <p className="mt-0.5 text-xs text-slate-500">
                    Reels, stories &amp; news
                  </p>
                </div>
                <a
                  href={URL.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow TVRadhakrishna on Instagram"
                  className={`${focus} inline-flex min-h-10 shrink-0 items-center justify-center gap-1 rounded-xl bg-gradient-to-r from-[#e0327f] to-[#8538b8] px-3 text-[12px] font-bold text-white transition-opacity hover:opacity-90`}
                >
                  Follow <ArrowUpRight size={15} aria-hidden="true" />
                </a>
              </article>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t border-violet-100 bg-white px-4 py-5 text-center text-xs text-slate-500">
        Every Journey. One Partner. ·{" "}
        <a
          href="https://tvradhakrishna.com"
          className="font-bold text-violet-700"
        >
          tvradhakrishna.com
        </a>
      </footer>
    </div>
  );
}
