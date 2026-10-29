import React, { useState, useRef, useEffect, type ReactNode } from "react";
import { SiZoom } from "react-icons/si";
import InitiativeHeader from "./InitiativeHeader";
import FourPSection from "./FourPSection";
// Vite bundles walkincard.png from any folder inside src/.
// Example: src/assets/walkincard.png or src/pages/assets/walkincard.png.
// No fragile relative import is required.
// Put walkincard.png in public/assets/ (Vite/CRA public folder).
// This direct URL avoids the import.meta.glob TypeScript error.
const WALKIN_IMAGE_SOURCES = [
  "/assets/walkincard.png",
  "https://i.ibb.co/1fZvDyLM/walkincard.png",
];
const WALKIN_INTERVIEW_URL =
  "https://www.askoxy.ai/main/viewjobdetails/default/ASKOXY_AI";
const HERO_IMAGE = "https://i.ibb.co/pBYhxhvS/ceo-img0.png" ;
const INSTAGRAM_URL = "https://www.instagram.com/tvradhakrishna/";
const INSTAGRAM_CARD_IMAGE = "https://i.ibb.co/jPB3MPT4/insta-card.png" ;
const WHATSAPP_CHANNEL_URL =
  "https://whatsapp.com/channel/0029VbDTFSAHFxOute9NGb1S";
const CONTACT_EMAIL = "ceo@oxyglobaltech.net";
const OXYFINSERV_LOGO =
  "https://i.ibb.co/Swx6RWXM/oxyfinservlogo-Cpr9-A3-NT.png";
const OXYJOURNEYS_LOGO = "https://i.ibb.co/XxJJRXx5/jun-logo.png";
const OFFICE_ADDRESS =
  "CC-02, Block-C, Indu Fortune Fields, The Annexe, Phase 13, KPHB, Hyderabad, Telangana - 500085";
const OFFICE_MAP_URL = "https://maps.app.goo.gl/523J7bUc7KNrsV1B8";
const OFFICE_IMAGE =
  "https://i.ibb.co/MxCWpQNv/Chat-GPT-Image-Sep-17-2026-11-09-43-AM.png";
const HIDDEN_DRIVE_URL =
  "https://drive.google.com/file/d/1z9C1N2MPy16Nns33VjblcOShiJ6_yIvy/view?usp=sharing";
/* =========================================================
   GROUP COMPANIES
========================================================= */
const brandPlatforms = [
  {
    logo: "https://i.ibb.co/s4CW2mg/l1.png",
    name: "OXYGLOBAL.TECH",
    href: "https://www.oxyglobal.tech/",
    desktopClass:
      "w-[140px] md:w-[150px] lg:w-[128px] xl:w-[150px] 2xl:w-[178px]",
    mobileClass: "w-[155px]",
  },
  {
    logo: "https://i.ibb.co/B5xsVChY/l2.png",
    name: "OXYLOANS",
    href: "https://oxyloans.com/",
    desktopClass:
      "w-[145px] md:w-[155px] lg:w-[132px] xl:w-[155px] 2xl:w-[185px]",
    mobileClass: "w-[160px]",
  },
  {
    logo: OXYJOURNEYS_LOGO,
    name: "OXY JOURNEYS",
    href: "https://www.oxyjourneys.com/",
    desktopClass:
      "w-[150px] md:w-[162px] lg:w-[138px] xl:w-[162px] 2xl:w-[190px]",
    mobileClass: "w-[168px]",
  },
  {
    logo: "https://i.ibb.co/k2snG0YW/l3.png",
    name: "OXYBRICKS.WORLD",
    href: "https://oxybricks.world/",
    desktopClass:
      "w-[140px] md:w-[150px] lg:w-[128px] xl:w-[150px] 2xl:w-[178px]",
    mobileClass: "w-[155px]",
  },
  {
    logo: "https://i.ibb.co/PGYYDvL9/l4.png",
    name: "OXYGOLD.AI",
    href: "https://www.oxygold.ai/",
    desktopClass:
      "w-[125px] md:w-[135px] lg:w-[118px] xl:w-[140px] 2xl:w-[165px]",
    mobileClass: "w-[145px]",
  },
  {
    logo: "https://i.ibb.co/B2NcQ7Nj/l5.png",
    name: "OXYCHAIN",
    href: "http://bmv.money:2750/",
    desktopClass:
      "w-[130px] md:w-[140px] lg:w-[120px] xl:w-[145px] 2xl:w-[170px]",
    mobileClass: "w-[150px]",
  },
  {
    logo: OXYFINSERV_LOGO,
    name: "OXYFINSERV",
    href: "https://www.oxyfinserv.com/",
    desktopClass:
      "w-[140px] md:w-[150px] lg:w-[128px] xl:w-[150px] 2xl:w-[178px]",
    mobileClass: "w-[155px]",
  },
];
/* =========================================================
   SOCIALS
========================================================= */
const heroSocials = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/oxyradhakrishna/",
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/share/1AcVZzEu7y/",
  },
  {
    name: "X",
    href: "https://x.com/RadhakrishnaIND",
  },
];
/* =========================================================
   VISIT PLATFORMS
========================================================= */
const visitPlatforms = [
  {
    name: "OXY News",
    description: "Latest news, updates and announcements",
    image: "https://i.ibb.co/jPSbgSTk/u1.png",
    href: "https://www.askoxy.ai/oxynews",
  },
  {
    name: "Our Journeys",
    description: "Explore opportunities, communities and journeys",
    image: "https://i.ibb.co/x8fmy8NC/u2.png",
    href: "https://www.askoxy.ai/alljourneys",
  },
  {
    name: "Our Blogs",
    description: "Read ideas, insights and useful articles",
    image: "https://i.ibb.co/Qvwnfj5z/u3.png",
    href: "https://www.askoxy.ai/myblogs",
  },
  {
    name: "Our Jobs",
    description: "Discover current opportunities and open roles",
    image: "https://i.ibb.co/MkhLvLzY/u4.png",
    href: "https://www.askoxy.ai/viewjobdetails/default/ALL",
  },
];
/* =========================================================
   ECOSYSTEM
========================================================= */
const ecosystemPlatforms = [
  {
    name: "OxyLoans",
    eyebrow: "Lending",
    description: "RBI-registered NBFC-P2P platform",
    href: "https://oxyloans.com/",
  },
  {
    name: "ASKOXY.AI",
    eyebrow: "AI Ecosystem",
    description: "AI-powered digital ecosystem",
    href: "https://www.askoxy.ai/",
  },
  {
    name: "RBI Master Directions AI Store",
    eyebrow: "RegTech",
    description: "RBI regulatory intelligence and guidance",
    href: "https://www.askoxy.ai/ai-store/rbi-master-directions-ai-store",
  },
  {
    name: "Insurance LLM",
    eyebrow: "InsurTech",
    description: "AI-powered insurance intelligence",
    href: "https://www.askoxy.ai/genoxy/chat?a=insurance-llm",
  },
  {
    name: "OXYBFSAI",
    eyebrow: "BFSI AI",
    description: "AI for banking, financial services & insurance",
    href: "https://www.askoxy.ai/oxybfsai",
  },
  {
    name: "OXYBFSAI Use Case",
    eyebrow: "Use Cases",
    description: "Practical BFSI AI use case",
    href: "https://vibecoding-finvibe.vercel.app/",
  },
  {
    name: "OXYFINSERV",
    eyebrow: "Financial Services",
    logo: OXYFINSERV_LOGO,
    description: "Financial services ecosystem",
    href: "https://www.oxyfinserv.com/",
  },
  {
    name: "Bharat Sovereign AI",
    eyebrow: "Sovereign AI",
    description: "Building AI for India’s BFSI ecosystem",
    href: "https://www.askoxy.ai/sovereign-ai",
  },
];
const ceoOpportunities = [
  "Lender",
  "Borrower",
  "Partner",
  "Real Estate",
  "Study Abroad",
  "Gold & Silver",
  "Jobs & Careers",
  "Loans",
];

const focus =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff8a62] focus-visible:ring-offset-2 focus-visible:ring-offset-white";
/* =========================================================
   ICONS
========================================================= */
type SocialIconProps = {
  name: string;
  className?: string;
};
function SocialIcon({ name, className = "" }: SocialIconProps) {
  const props = {
    width: 20,
    height: 20,
    viewBox: "0 0 24 24",
    "aria-hidden": true,
    focusable: false,
    className,
  };
  if (name === "Instagram") {
    return (
      <svg {...props} fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    );
  }
  if (name === "LinkedIn") {
    return (
      <svg {...props} fill="currentColor">
        <path d="M5.4 3a2.1 2.1 0 1 0 0 4.2 2.1 2.1 0 0 0 0-4.2ZM3.6 9h3.6v12H3.6V9Zm5.8 0h3.5v1.6h.1c.5-1 1.7-1.9 3.5-1.9 3.7 0 4.4 2.4 4.4 5.5V21h-3.6v-6c0-1.5 0-3.3-2-3.3s-2.3 1.6-2.3 3.2V21H9.4V9Z" />
      </svg>
    );
  }
  if (name === "Facebook") {
    return (
      <svg {...props} fill="currentColor">
        <path d="M14 22v-9h3l.5-3H14V8c0-.9.3-1.5 1.6-1.5h2V3.2C17.3 3.1 16.1 3 14.8 3 12 3 10 4.7 10 7.8V10H7v3h3v9h4Z" />
      </svg>
    );
  }
  return (
    <svg {...props} fill="currentColor">
      <path d="M18.9 2H22l-6.8 7.8L23.2 22h-6.3L12 14.6 5.5 22H2.3l8.2-9.4L.8 2h6.5l4.5 6.8L18.9 2ZM17.8 20h1.7L6.3 4H4.5l13.3 16Z" />
    </svg>
  );
}
function WhatsAppIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M20.52 3.48A11.87 11.87 0 0 0 12.05 0C5.47 0 .11 5.35.1 11.94c0 2.1.55 4.16 1.6 5.97L0 24l6.25-1.64a11.93 11.93 0 0 0 5.79 1.48h.01C18.63 23.84 24 18.49 24 11.9c0-3.19-1.24-6.18-3.48-8.42ZM12.05 21.82h-.01a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.71.97.99-3.62-.23-.37a9.88 9.88 0 0 1-1.52-5.27c0-5.47 4.46-9.92 9.94-9.92a9.86 9.86 0 0 1 7.02 2.91 9.86 9.86 0 0 1 2.9 7.02c0 5.47-4.46 9.87-9.98 9.87Zm5.44-7.43c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.67-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.2 5.09 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35Z" />
    </svg>
  );
}
function ArrowUpRight({ className = "" }: { className?: string }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <path d="M7 17 17 7" />
      <path d="M7 7h10v10" />
    </svg>
  );
}
function MailIcon() {
  return (
    <svg
      width="21"
      height="21"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden="true"
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}
/* =========================================================
   EXTERNAL LINK
========================================================= */
type ExternalProps = {
  href: string;
  children: ReactNode;
  className?: string;
  ariaLabel?: string;
};
function External({
  href,
  children,
  className = "",
  ariaLabel,
}: ExternalProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      className={`${focus} ${className}`}
    >
      {children}
    </a>
  );
}
/* =========================================================
   PORTRAIT
========================================================= */
type PortraitProps = {
  src: string;
  className?: string;
};
function Portrait({ src, className = "" }: PortraitProps) {
  const [failed, setFailed] = useState(false);
  if (failed) {
    return (
      <div
        className="flex aspect-[4/5] w-full items-center justify-center"
        role="img"
        aria-label="Radhakrishna T monogram"
      >
        <span className="font-display text-8xl font-bold text-white">RK</span>
      </div>
    );
  }
  return (
    <img
      src={src}
      alt="Radhakrishna T, CEO and Co-Founder"
      width={640}
      height={800}
      fetchPriority="high"
      decoding="async"
      onError={() => setFailed(true)}
      className={`mx-auto block h-auto max-h-[550px] w-full object-contain object-bottom ${className}`}
    />
  );
}

/* =========================================================
   10 YEARS OF OXYLOANS — RESPONSIVE VIDEO FEATURE
========================================================= */
const OXYLOANS_ANNIVERSARY_VIDEO = "3pdK0_JRXVo";
const OXYLOANS_LENDER_URL =
  "https://www.user.oxyloans.com/register?ref=LR55026";

function OxyLoansAnniversarySection() {
  const [playVideo, setPlayVideo] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!("IntersectionObserver" in window)) {
      section.classList.add("oxy-anniversary-visible");
      if (!reducedMotion) setPlayVideo(true);
      return;
    }
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        section.classList.add("oxy-anniversary-visible");
        // Start playback only once the video section is on screen.
        // Muted autoplay is much more reliable across browsers and phones.
        if (!reducedMotion) setPlayVideo(true);
        observer.disconnect();
      }
    }, { threshold: 0.2, rootMargin: "0px 0px -20px 0px" });
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="oxyloans-10-years"
      aria-labelledby="oxyloans-anniversary-title"
      className="oxy-anniversary relative isolate scroll-mt-24 overflow-hidden bg-[#241b67] py-8 text-white sm:py-11 lg:py-12"
    >
      <style>{`
        .oxy-anniversary .oxy-enter{opacity:0;transform:translateY(18px);transition:opacity .65s ease,transform .72s cubic-bezier(.2,.8,.2,1)}
        .oxy-anniversary-visible .oxy-enter{opacity:1;transform:none}
        .oxy-anniversary .oxy-delay-1{transition-delay:90ms}
        .oxy-anniversary .oxy-delay-2{transition-delay:180ms}
        .oxy-anniversary .oxy-delay-3{transition-delay:260ms}
        .oxy-anniversary .oxy-video{opacity:0;transform:translateX(25px);transition:opacity .8s ease .15s,transform .8s cubic-bezier(.2,.8,.2,1) .15s}
        .oxy-anniversary-visible .oxy-video{opacity:1;transform:none}
        .oxy-anniversary .oxy-rate{background-size:180% 100%;animation:oxy-gold-shift 8s ease-in-out infinite alternate}
        @keyframes oxy-gold-shift{from{background-position:0% 50%}to{background-position:100% 50%}}
        .oxy-anniversary::before{content:"";position:absolute;inset:0;pointer-events:none;background:radial-gradient(ellipse at 15% 25%,rgba(153,112,222,.23),transparent 46%),radial-gradient(ellipse at 88% 72%,rgba(233,102,172,.14),transparent 43%);background-size:120% 120%;animation:oxy-ambient 18s ease-in-out infinite alternate}
        .oxy-anniversary::after{content:"";position:absolute;inset:0;pointer-events:none;opacity:.16;background:linear-gradient(115deg,transparent 35%,rgba(255,225,189,.24) 50%,transparent 65%);background-size:230% 100%;animation:oxy-light-pass 14s ease-in-out infinite}
        @keyframes oxy-ambient{from{background-position:0% 35%}to{background-position:100% 65%}}
        @keyframes oxy-light-pass{0%,25%{background-position:100% 0}75%,100%{background-position:0% 0}}
        .oxy-anniversary .oxy-video-gradient{position:relative;padding:3px;border-radius:20px;background:linear-gradient(120deg,#ffcd9d,#ab8aff,#ff7db2,#73c9ff,#ffcd9d);background-size:350% 350%;animation:oxy-video-color-cycle 12s ease-in-out infinite;box-shadow:0 14px 34px rgba(14,8,53,.18)}
        @keyframes oxy-video-color-cycle{0%,100%{background-position:0% 50%}50%{background-position:100% 50%}}
        .oxy-anniversary .oxy-video-gradient:hover{animation-duration:5s}
        .oxy-anniversary .oxy-action svg{transition:transform .25s ease}
        .oxy-anniversary .oxy-action:hover svg{transform:translate(3px,-3px)}
        @media(prefers-reduced-motion:reduce){.oxy-anniversary .oxy-enter,.oxy-anniversary .oxy-video{opacity:1!important;transform:none!important;transition:none!important}.oxy-anniversary::before,.oxy-anniversary::after{animation:none!important}.oxy-anniversary .oxy-rate,.oxy-anniversary .oxy-video-gradient{animation:none!important}}
      `}</style>
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/20" />
      <div className="tvrk-container relative z-10">
        <div className="grid min-w-0 items-center gap-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,.95fr)] lg:gap-9 xl:gap-12">
          <div className="min-w-0">
            <div className="oxy-enter flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-[.14em] text-[#ffdbb8] sm:text-[11px]">
              <span aria-hidden="true" className="text-base leading-none">✦</span>
              Celebrating 10 Years of OXYLOANS
            </div>
            <h2 id="oxyloans-anniversary-title" className="oxy-enter oxy-delay-1 mt-2.5 max-w-[630px] font-display text-[clamp(1.2rem,1.8vw,1.65rem)] font-bold leading-snug tracking-[-.025em]">
              A Decade of Connecting <span className="text-[#ffd5b1]">Lenders &amp; Borrowers</span>
            </h2>
            <p className="oxy-enter oxy-delay-1 mt-2 text-[12px] leading-relaxed text-white/75 sm:text-[13px]">
              RBI-registered NBFC-P2P lending platform.
            </p>
            <div className="oxy-enter oxy-delay-2 mt-4">
              <p className="text-xs font-extrabold uppercase tracking-[.12em] text-white/85">Lend &amp; Earn</p>
              <p className="oxy-rate mt-1 bg-gradient-to-r from-[#ffdab4] via-[#ffffff] to-[#ffc394] bg-clip-text font-display text-[clamp(1.7rem,3.3vw,3.15rem)] font-extrabold leading-[1.16] tracking-[-.047em] text-transparent">
                Up to 1.75% Monthly
                <span className="block">&amp; 24% Yearly ROI</span>
              </p>
            </div>
            <div className="oxy-enter oxy-delay-3 mt-4 flex flex-wrap items-center gap-x-3 gap-y-1">
              <strong className="font-display text-[clamp(1.18rem,1.8vw,1.5rem)] font-extrabold text-white">₹1,800+ Crore</strong>
              <span className="text-[11px] font-medium text-white/70 sm:text-xs">Cumulative Loan Disbursements</span>
            </div>
            <div className="oxy-enter oxy-delay-3 mt-4 flex flex-wrap items-center gap-x-4 gap-y-2">
              <a href={OXYLOANS_LENDER_URL} target="_blank" rel="noopener noreferrer" className="oxy-action inline-flex min-h-10 items-center gap-2 rounded-full bg-[#ffd8b5] px-5 py-2.5 text-xs font-extrabold text-[#251b63] transition-[background,transform] hover:-translate-y-0.5 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#241b67]">
                Start Lending Today <ArrowUpRight className="h-4 w-4" />
              </a>
           
            </div>
          </div>
          <div className="oxy-video min-w-0">
            <div className="oxy-video-gradient">
            <div className="group relative aspect-video overflow-hidden rounded-[17px] bg-[#130f31]">
              {playVideo ? (
                <iframe
                  className="absolute inset-0 h-full w-full"
                  src={`https://www.youtube-nocookie.com/embed/${OXYLOANS_ANNIVERSARY_VIDEO}?autoplay=1&mute=1&playsinline=1&controls=1&rel=0`}
                  title="10 Years of OXYLOANS — Celebration Video"
                  loading="lazy"
                  allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              ) : (
                <button type="button" onClick={() => setPlayVideo(true)} aria-label="Play the 10 Years of OXYLOANS video" className="absolute inset-0 grid h-full w-full place-items-center focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-inset focus-visible:ring-[#ffdbbb]">
                  <img src={`https://i.ytimg.com/vi/${OXYLOANS_ANNIVERSARY_VIDEO}/hqdefault.jpg`} alt="OXYLOANS anniversary video preview" loading="lazy" decoding="async" className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <span aria-hidden="true" className="absolute inset-0 bg-black/30" />
                  <span aria-hidden="true" className="relative grid h-14 w-14 place-items-center rounded-full bg-[#ff0033] text-white transition-transform duration-300 group-hover:scale-110"><svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7 translate-x-0.5"><path d="m8 5 12 7-12 7V5Z" /></svg></span>
                </button>
              )}
            </div>
            </div>
            <div className="mt-2 flex flex-wrap items-center justify-between gap-2">
              <span className="text-[11px] font-semibold text-white/75">10 Years of OXYLOANS · Our Journey</span>
              <a href="https://youtu.be/3pdK0_JRXVo?si=KzvMyJAOeCynIvvt" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-[11px] font-bold text-[#ffdbbb] hover:underline focus-visible:outline-2 focus-visible:outline-offset-4">
                Watch on YouTube <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-white/15" />
    </section>
  );
}

/* =========================================================
   MAIN PAGE
========================================================= */
type CEOLandingPageProps = {
  portraitUrl?: string;
};
export default function CEOLandingPage({
  portraitUrl = HERO_IMAGE,
}: CEOLandingPageProps) {
  const writeToUsDialogRef = useRef<HTMLDialogElement>(null);
  const [activeOpportunity, setActiveOpportunity] = useState(0);
  const [slideEnabled, setSlideEnabled] = useState(true);
  const [walkinImageSourceIndex, setWalkinImageSourceIndex] = useState(0);
  const [motionEnabled, setMotionEnabled] = useState(true);
  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setMotionEnabled(!query.matches);
    sync();
    query.addEventListener?.("change", sync);
    return () => query.removeEventListener?.("change", sync);
  }, []);

  // Instagram art and text reveal only once the section is visible.
  useEffect(() => {
    const section = document.getElementById("instagram");
    if (!section || !("IntersectionObserver" in window) ||
        window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      section.classList.add("ig-in-view");
      observer.disconnect();
    }, { threshold: 0.12, rootMargin: "0px 0px -25px 0px" });
    section.classList.add("ig-motion-enabled");
    observer.observe(section);
    return () => { observer.disconnect(); section.classList.remove("ig-motion-enabled", "ig-in-view"); };
  }, []);

  useEffect(() => {
    if (!motionEnabled) return;
    const timer = window.setInterval(() => {
      if (document.hidden) return;
      // Move exactly one pill to the left on each tick.
      setSlideEnabled(true);
      setActiveOpportunity((previous) => previous + 1);
    }, 2400);
    return () => window.clearInterval(timer);
  }, [motionEnabled]);

  // A single observer handles directional, staggered entrance motion.
  // Elements remain visible when IntersectionObserver is unavailable.
  useEffect(() => {
    const root = document.querySelector<HTMLElement>(".ceo-modern");
    if (!root || !("IntersectionObserver" in window) ||
        window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const items = Array.from(root.querySelectorAll<HTMLElement>(
      "#about h1, #about p, #about .hero-action-grid, #about .ceo-portrait-stage, " +
      "#platforms .logo-link, #instagram .instagram-showcase, " +
      "#platforms ~ section h2, #platforms ~ section .glass-card, " +
      "#platforms ~ section .vision-card, #platforms ~ section .platform-visual, " +
      "#platforms ~ section article, #platforms ~ section .liquid-glass"
    ));
    const observer = new IntersectionObserver((entries, observerInstance) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("motion-in");
        observerInstance.unobserve(entry.target);
      });
    }, { threshold: 0.08, rootMargin: "0px 0px -24px 0px" });
    items.forEach((el, index) => {
      // Never hide content already in the first viewport.
      if (el.getBoundingClientRect().top < window.innerHeight * 0.9) return;
      el.classList.add("motion-ready");
      el.style.setProperty("--motion-delay", `${(index % 3) * 45}ms`);
      observer.observe(el);
    });
    return () => { observer.disconnect(); items.forEach(el => {
      el.classList.remove("motion-ready", "motion-in", "motion-from-left", "motion-from-right");
      el.style.removeProperty("--motion-delay");
    }); };
  }, []);

  const handleOpportunitySlideEnd = () => {
    // The extra first pills make the last-to-first loop seamless.
    if (activeOpportunity >= ceoOpportunities.length) {
      setSlideEnabled(false);
      setActiveOpportunity(0);
    }
  };
  return (
    <div className="ceo-page ceo-modern min-h-screen overflow-x-clip text-[#171525] selection:bg-[#f6c2ae] selection:text-[#211b67]">
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-[80] focus:rounded-xl focus:bg-white focus:px-4 focus:py-3 focus:text-sm focus:font-bold"
      >
        Skip to content
      </a>
      <dialog
        ref={writeToUsDialogRef}
        id="write-to-us-dialog"
        aria-labelledby="write-to-us-title"
        aria-describedby="write-to-us-description"
        className="m-auto w-[calc(100%-32px)] max-w-[480px] rounded-2xl border-0 bg-white p-0 text-[#241b67] shadow-2xl"
        style={{ width: "calc(100% - 32px)", maxHeight: "calc(100dvh - 32px)", overflowY: "auto" }}
        onClick={(event) => {
          if (event.target === event.currentTarget) {
            const rect = event.currentTarget.getBoundingClientRect();
            if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) {
              event.currentTarget.close();
            }
          }
        }}
      >
        <div className="p-5 sm:p-7">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h2 id="write-to-us-title" className="font-display text-xl font-bold sm:text-2xl">Write to Us</h2>
              <p id="write-to-us-description" className="mt-2 text-sm leading-6 text-[#565064]">
                Share your questions or feedback through ASKOXY.AI.
              </p>
            </div>
            <button
              type="button"
              aria-label="Close Write to Us instructions"
              onClick={() => writeToUsDialogRef.current?.close()}
              className={`${focus} grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#f3f0f8] text-xl hover:bg-[#e8e2f1]`}
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <ol className="mt-5 list-decimal space-y-3 pl-5 text-sm leading-6 text-[#565064]">
            <li>Go to <strong className="text-[#241b67]">ASKOXY.AI</strong> and register or log in.</li>
            <li>Open the sidebar and select <strong className="text-[#241b67]">Help &amp; Support</strong>.</li>
            <li>Choose <strong className="text-[#241b67]">Write to Us</strong> and send your message.</li>
          </ol>
          <a
            href="https://www.askoxy.ai/main/writetous"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Continue to Write to Us (opens in a new tab)"
            className={`${focus} mt-6 flex min-h-[48px] w-full items-center justify-center gap-2 rounded-xl bg-[#241b67] px-4 py-3 text-sm font-bold text-white transition hover:bg-[#3a2875]`}
          >
            Continue to Write to Us
            <ArrowUpRight className="h-4 w-4" />
          </a>
          <p className="mt-3 text-center text-xs leading-5 text-[#766e84]">
            You may need to register or log in first.
          </p>
        </div>
      </dialog>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=Sora:wght@500;600;700;800&display=swap');
        /* 2026 cinematic polish — fast transforms, no GIF or scroll polling. */
        .ceo-modern { isolation:isolate; }
        .ceo-modern main section { position:relative; }
        .ceo-modern main section:not(#platforms) { scroll-margin-top:92px; }
        .ceo-modern .ceo-reveal { opacity:0; transform:translate3d(0,22px,0); filter:blur(5px); transition:opacity .72s ease,transform .8s cubic-bezier(.2,.75,.2,1),filter .8s ease; transition-delay:var(--reveal-delay,0ms); }
        .ceo-modern .ceo-reveal.is-visible { opacity:1; transform:translate3d(0,0,0); filter:blur(0); }
        .ceo-modern .ceo-portrait-stage { min-height:315px; isolation:isolate; }
        .ceo-modern .ceo-portrait-orb { position:absolute; inset:10% 8% 4%; border-radius:48% 52% 40% 60%; background:radial-gradient(circle at 38% 29%,rgba(251,193,251,.62),rgba(153,111,253,.34) 38%,rgba(255,182,165,.16) 64%,transparent 74%); filter:blur(2px); box-shadow:0 0 90px rgba(242,149,244,.19); animation:ceo-orb-flow 13s ease-in-out infinite alternate; }
        .ceo-modern .ceo-orbit { position:absolute; inset:10% 10% 12%; border:1px solid rgba(255,255,255,.21); border-radius:50%; pointer-events:none; }
        .ceo-modern .ceo-orbit-one { transform:rotate(-25deg) scaleX(.85); }
        .ceo-modern .ceo-orbit-two { transform:rotate(25deg) scaleX(.82); border-color:rgba(250,185,237,.17); }
        .ceo-modern .ceo-portrait-image { filter:drop-shadow(0 22px 32px rgba(25,13,58,.24)); -webkit-mask-image:linear-gradient(to bottom,#000 0%,#000 91%,transparent 100%); mask-image:linear-gradient(to bottom,#000 0%,#000 91%,transparent 100%); }
        .ceo-modern .ceo-portrait-caption { border:1px solid rgba(255,255,255,.32); background:linear-gradient(135deg,rgba(44,26,108,.8),rgba(103,55,139,.62)); backdrop-filter:blur(16px); box-shadow:inset 0 1px rgba(255,255,255,.23),0 12px 35px rgba(24,10,61,.24); }
        @keyframes ceo-orb-flow {from{transform:scale(.96) rotate(-7deg)}to{transform:scale(1.045) rotate(7deg)}}
        .ceo-modern .hero-action-grid {gap:12px;}
        .ceo-modern .hero-gloss-button,.ceo-modern .insta-follow-cta {position:relative;overflow:hidden;isolation:isolate; border-radius:17px;transition:transform .28s ease,box-shadow .28s ease,filter .28s ease;}
        .ceo-modern .hero-gloss-button::after,.ceo-modern .insta-follow-cta::after {content:"";pointer-events:none;position:absolute;inset:1px 4px auto;height:45%;border-radius:16px 16px 50% 50%;background:linear-gradient(180deg,rgba(255,255,255,.33),transparent);opacity:.7;}
        .ceo-modern .hero-gloss-button > *,.ceo-modern .insta-follow-cta > * {position:relative;z-index:2;}
        .ceo-modern .hero-meet-button {background:linear-gradient(180deg,#fff,#e9f2ff) padding-box,conic-gradient(#ffb400,#00af52,#4285f4,#ea4335,#ffb400) border-box;}
        .ceo-modern .gloss-link {transition:background .25s ease,border-color .25s ease,transform .28s ease;}
        .ceo-modern .insta-image-stage {background:radial-gradient(ellipse at 50% 50%,rgba(255,255,255,.7),rgba(253,208,246,.14) 56%,transparent 76%);}
        .ceo-modern .instagram-profile-graphic {filter:drop-shadow(0 24px 22px rgba(80,42,121,.16));}
        .ceo-modern .instagram-showcase {border:1px solid rgba(255,255,255,.8);box-shadow:0 28px 65px rgba(51,30,101,.17),inset 0 1px rgba(255,255,255,.9);}
        .ceo-modern .platform-visual {position:relative;isolation:isolate;overflow:hidden;background:linear-gradient(145deg,rgba(255,255,255,.77),rgba(255,255,255,.32));border:1px solid rgba(255,255,255,.85);box-shadow:inset 0 1px rgba(255,255,255,.92),0 14px 32px rgba(33,22,85,.13);}
        .ceo-modern .platform-visual:after {content:"";position:absolute;top:-35%;left:-100%;width:38%;height:165%;transform:rotate(20deg);background:linear-gradient(90deg,transparent,rgba(255,255,255,.46),transparent);transition:left .7s ease;pointer-events:none;}
        .ceo-modern .glass-card {position:relative;overflow:hidden;background:linear-gradient(145deg,rgba(255,255,255,.88),rgba(249,238,255,.49));box-shadow:inset 0 1px rgba(255,255,255,.95),0 16px 40px rgba(44,30,92,.12);}
        .ceo-modern .glass-card:before {content:"";pointer-events:none;position:absolute;inset:0 0 auto;height:45%;background:linear-gradient(180deg,rgba(255,255,255,.32),transparent);}
        .ceo-modern .vision-card {transition:transform .3s ease,background .3s ease,box-shadow .3s ease;}
        @media(hover:hover) and (pointer:fine){.ceo-modern .platform-visual:hover:after{left:170%}.ceo-modern .gloss-link:hover{transform:translateY(-2px)}.ceo-modern .hero-gloss-button:hover{filter:brightness(1.08)}}
        @media(max-width:1023px){.ceo-modern .ceo-portrait-stage{max-width:420px}.ceo-modern .ceo-portrait-caption{left:0}}
        @media(max-width:639px){.ceo-modern .ceo-portrait-stage{min-height:260px;max-width:360px}.ceo-modern .ceo-portrait-image{max-height:365px}.ceo-modern .ceo-portrait-caption{bottom:9px;padding:9px 12px}.ceo-modern .ceo-reveal{transform:translate3d(0,14px,0);filter:none;transition-duration:.56s}.ceo-modern .instagram-showcase{border-radius:24px}.ceo-modern .hero-gloss-button{min-height:50px}}
        @media(prefers-reduced-motion:reduce){.ceo-modern .ceo-reveal,.ceo-modern .ceo-reveal.is-visible{opacity:1!important;transform:none!important;filter:none!important;transition:none!important}.ceo-modern .ceo-portrait-orb{animation:none!important}.ceo-modern .hero-gloss-button,.ceo-modern .insta-follow-cta{transition:none!important}}
        /* Equal dimensions keep icon buttons perfectly circular. */
        .ceo-page .hero-social-row {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 12px;
          width: 100%;
          min-width: 0;
        }
        .ceo-page .hero-social-rectangles {
          display: flex;
          flex-wrap: wrap;
          align-items: stretch;
          gap: 10px;
          min-width: 0;
          max-width: 100%;
        }
        .ceo-page .hero-social-rectangle {
          box-sizing: border-box;
          display: inline-flex;
          align-items: center;
          gap: 9px;
          min-height: 54px;
          min-width: 0;
          max-width: 100%;
          padding: 9px 12px;
          border: 1px solid rgba(255,255,255,.25);
          border-radius: 8px;
          background: rgba(255,255,255,.09);
          color: #fff;
          text-decoration: none;
          box-shadow: inset 0 1px 0 rgba(255,255,255,.10);
          transition: background .2s ease, border-color .2s ease;
        }
        .ceo-page .hero-social-brand {
          display: grid;
          place-items: center;
          width: 30px;
          height: 30px;
          flex: 0 0 30px;
          border-radius: 6px;
        }
        .ceo-page .hero-social-brand-whatsapp { background: #168b49; }
        .ceo-page .hero-social-brand-instagram {
          background: linear-gradient(145deg,#833ab4,#e1306c,#f77737);
        }
        .ceo-page .hero-social-copy { min-width: 0; text-align: left; }
        .ceo-page .hero-social-title {
          display: block;
          font-size: 11px;
          font-weight: 700;
          line-height: 1.5;
          overflow-wrap: anywhere;
        }
        .ceo-page .hero-social-subtitle {
          display: block;
          margin-top: 2px;
          font-size: 9px;
          font-weight: 500;
          line-height: 1.5;
          color: rgba(255,255,255,.74);
        }
        .ceo-page .hero-social-arrow {
          width: 14px;
          height: 14px;
          flex: 0 0 14px;
          margin-left: auto;
          color: rgba(255,255,255,.85);
        }
        .ceo-page .hero-social-circles {
          display: flex;
          align-items: center;
          gap: 10px;
          flex: 0 0 auto;
        }
        .ceo-page .hero-social-circle {
          box-sizing: border-box;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 48px;
          height: 48px;
          min-width: 48px;
          min-height: 48px;
          max-width: 48px;
          max-height: 48px;
          flex: 0 0 48px;
          aspect-ratio: 1 / 1;
          padding: 0;
          border: 1px solid rgba(255,255,255,.28);
          border-radius: 50%;
          background: rgba(255,255,255,.09);
          color: #fff;
          text-decoration: none;
          box-shadow: inset 0 1px 0 rgba(255,255,255,.10);
          transition: background .2s ease, border-color .2s ease;
        }
        .ceo-page .hero-social-circle > svg {
          display: block;
          width: 20px;
          height: 20px;
          flex: 0 0 20px;
        }
        @media (hover: hover) {
          .ceo-page .hero-social-rectangle:hover,
          .ceo-page .hero-social-circle:hover {
            border-color: rgba(255,255,255,.55);
            background: rgba(255,255,255,.18);
          }
          .ceo-page .hero-social-whatsapp:hover { border-color: #25d366; }
          .ceo-page .hero-social-instagram:hover { border-color: #f39bc0; }
        }
        @media (max-width: 639px) {
          .ceo-page .hero-social-rectangles {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            width: 100%;
            gap: 8px;
          }
          .ceo-page .hero-social-rectangle {
            gap: 6px;
            padding: 9px 8px;
          }
          .ceo-page .hero-social-brand {
            width: 26px;
            height: 26px;
            flex-basis: 26px;
          }
          .ceo-page .hero-social-title { font-size: 10px; }
          .ceo-page .hero-social-subtitle { font-size: 8px; }
          .ceo-page .hero-social-arrow {
            width: 12px;
            height: 12px;
            flex-basis: 12px;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .ceo-page .hero-social-rectangle,
          .ceo-page .hero-social-circle { transition: none; }
        }
        .ceo-page .hero-action-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 10px;
          width: 100%;
          max-width: 390px;
        }
        .ceo-page .hero-gloss-button {
          box-sizing: border-box;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 7px;
          min-width: 0;
          min-height: 48px;
          padding: 9px 12px;
          border: 1px solid rgba(255,255,255,.3);
          border-radius: 13px;
          color: #fff;
          font-size: 12px;
          font-weight: 800;
          line-height: 1.4;
          text-align: center;
          text-decoration: none;
          box-shadow: inset 0 1px 0 rgba(255,255,255,.52), inset 0 -1px 0 rgba(0,0,0,.15), 0 5px 12px rgba(15,10,50,.18);
          transition: transform .18s ease, filter .18s ease, box-shadow .18s ease;
        }
        .ceo-page .hero-gloss-button > svg { flex-shrink: 0; }
        .ceo-page .hero-meet-button {
          grid-column: 1 / -1;
          min-height: 54px;
          padding: 11px 12px;
          gap: 10px;
          border: 2px solid transparent;
          color: #202124;
          background:
            linear-gradient(180deg, #ffffff, #f8fafc) padding-box,
            conic-gradient(from 0deg, #ffba00 0deg 90deg, #00ac47 90deg 180deg, #2684fc 180deg 270deg, #ea4335 270deg 360deg) border-box;
          box-shadow: 0 6px 18px rgba(0,0,0,.18);
          font-size: 12px;
          letter-spacing: .01em;
        }
        .ceo-page .hero-meet-icon {
          display: grid;
          place-items: center;
          width: 34px;
          height: 34px;
          flex-shrink: 0;
          border-radius: 9px;
          background: #e6f4ea;
          color: #00ac47;
        }
        .ceo-page .hero-meet-label { min-width: 0; line-height: 1.5; }
        .ceo-page .hero-meet-arrow { color: #2684fc; }
        @media (max-width: 359px) {
          .ceo-page .hero-gloss-button.hero-meet-button { padding: 10px 8px; gap: 7px; font-size: 11px; }
          .ceo-page .hero-meet-icon { width: 30px; height: 30px; }
        }
        @media (min-width: 640px) {
          .ceo-page .hero-meet-button { min-height: 56px; font-size: 13px; }
        }
        .ceo-page .hero-gloss-peach {
          color: #35204f;
          background: linear-gradient(180deg, #ffe8dd 0%, #ffd0bb 48%, #f4b393 50%, #ffc4a6 100%);
        }
        .ceo-page .hero-gloss-purple {
          background: linear-gradient(180deg, #8269ae 0%, #644c92 48%, #4c3679 50%, #624a8c 100%);
        }
        .ceo-page .hero-video-button { flex-direction: column; gap: 2px; }
        .ceo-page .hero-button-caption { font-size: 9px; font-weight: 500; line-height: 1.4; color: #f1eafa; }
        .ceo-page .hero-gloss-button:disabled { cursor: not-allowed; }
        @media (hover: hover) {
          .ceo-page .hero-gloss-button:not(:disabled):hover {
            transform: translateY(-2px);
            filter: brightness(1.07);
            box-shadow: inset 0 1px 0 rgba(255,255,255,.6), 0 8px 18px rgba(15,10,50,.24);
          }
        }
        .ceo-page .hero-gloss-button:not(:disabled):active { transform: translateY(0); }
        @media (max-width: 359px) {
          .ceo-page .hero-action-grid { gap: 8px; }
          .ceo-page .hero-gloss-button { padding: 8px; gap: 5px; font-size: 11px; }
        }
        @media (min-width: 640px) {
          .ceo-page .hero-action-grid { grid-template-columns: 170px 200px; width: max-content; max-width: 100%; }
          .ceo-page .hero-gloss-button { font-size: 13px; }
          .ceo-page .hero-button-caption { font-size: 10px; }
        }
        @media (prefers-reduced-motion: reduce) {
          .ceo-page .hero-gloss-button { transition: none; }
          .ceo-page .hero-gloss-button:not(:disabled):hover { transform: none; }
        }
        .ceo-page .hero-journey-gradient {
          color: #ffe5be;
        }
        @supports ((background-clip: text) or (-webkit-background-clip: text)) {
          .ceo-page .hero-journey-gradient {
            background-image: linear-gradient(
              110deg,
              #fff1cd 0%,
              #ffd0ac 16%,
              #ffbedd 33%,
              #ded0ff 50%,
              #b9ddff 67%,
              #aaf1ee 84%,
              #e1ffef 100%
            );
            background-size: 300% 100%;
            background-position: 0% 50%;
            background-repeat: no-repeat;
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
            -webkit-text-fill-color: transparent;
            animation: hero-journey-colors 30s ease-in-out infinite;
          }
        }
        /* Warm palette at 0s, cool palette at 15s, warm again at 30s. */
        @keyframes hero-journey-colors {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @media (prefers-reduced-motion: reduce) {
          .ceo-page .hero-journey-gradient {
            animation: none;
            background-position: 0% 50%;
          }
        }

        /* Five pills on desktop, three on mobile. Slide one at a time. */
        .ceo-page .ceo-pills-viewport {
          --ceo-gap: 8px;
          --ceo-visible: 5;
          overflow: hidden;
          width: 100%;
          min-width: 0;
          -webkit-mask-image: linear-gradient(to right, transparent, #000 3%, #000 97%, transparent);
          mask-image: linear-gradient(to right, transparent, #000 3%, #000 97%, transparent);
        }
        .ceo-page .ceo-pills-track {
          display: flex;
          gap: var(--ceo-gap);
          width: 100%;
          align-items: center;
          transform: translate3d(calc(-1 * var(--ceo-index) * (100% + var(--ceo-gap)) / var(--ceo-visible)), 0, 0);
          transition: transform 650ms cubic-bezier(.22, 1, .36, 1);
          will-change: transform;
        }
        .ceo-page .ceo-pills-track.ceo-no-transition {
          transition: none;
        }
        .ceo-page .ceo-opportunity-pill {
          box-sizing: border-box;
          flex: 0 0 calc((100% - (var(--ceo-visible) - 1) * var(--ceo-gap)) / var(--ceo-visible));
          min-width: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          min-height: 36px;
          padding: 7px 6px;
          border: 1px solid rgba(255,255,255,.25);
          border-radius: 999px;
          background: rgba(255,255,255,.10);
          color: #fff;
          font-weight: 700;
          font-size: 11px;
          line-height: 1.25;
          text-align: center;
        }
        @media (max-width: 639px) {
          .ceo-page .ceo-pills-viewport { --ceo-visible: 3; --ceo-gap: 6px; }
          .ceo-page .ceo-opportunity-pill { font-size: 10px; padding: 7px 3px; min-height: 34px; }
        }
        @media (prefers-reduced-motion: reduce) {
          .ceo-page .ceo-pills-track { transition: none; }
        }

        /* =========================================================
           CEO FACTORY — COLOR CHANGE EVERY 2 SECONDS
        ========================================================= */
        @keyframes ceo-factory-color {
          0%, 19.99% { color: #ffd0bc; }
          20%, 39.99% { color: #ffdf6c; }
          40%, 59.99% { color: #8ce8ff; }
          60%, 79.99% { color: #ff9ed2; }
          80%, 100% { color: #aef5c7; }
        }

        @keyframes ceo-pincode-color {
          0%, 19.99% { color: #ffffff; }
          20%, 39.99% { color: #aef5c7; }
          40%, 59.99% { color: #ffd0bc; }
          60%, 79.99% { color: #ffdf6c; }
          80%, 100% { color: #8ce8ff; }
        }

        .ceo-page .ceo-factory-text {
          animation: ceo-factory-color 10s steps(1, end) infinite;
          will-change: color;
        }

        .ceo-page .ceo-pincode-text {
          animation: ceo-pincode-color 10s steps(1, end) infinite;
          will-change: color;
        }

        @media (prefers-reduced-motion: reduce) {
          .ceo-page .ceo-factory-text,
          .ceo-page .ceo-pincode-text {
            animation: none;
          }

          .ceo-page .ceo-factory-text { color: #ffd0bc; }
          .ceo-page .ceo-pincode-text { color: #ffffff; }
        }
        #write-to-us-dialog::backdrop {
          background: rgba(15, 10, 40, .65);
          backdrop-filter: blur(4px);
        }
        #root {
          max-width: none;
          width: 100%;
          margin: 0;
          padding: 0;
          text-align: left;
        }
        html {
          scroll-behavior: smooth;
        }
        body {
          margin: 0;
          display: block;
          min-width: 320px;
          background: #241b67;
        }
        /* =========================================================
           GLOBAL RESPONSIVE CONTENT WIDTH
           Equal left + right gap across all sections
        ========================================================= */
        .tvrk-container {
          box-sizing: border-box;
          width: calc(100% - 32px) !important;
          max-width: 1720px !important;
          margin-left: auto !important;
          margin-right: auto !important;
          min-width: 0;
        }
        .tvrk-container > * {
          min-width: 0;
        }
        @media (min-width: 640px) {
          .tvrk-container {
            width: calc(100% - 48px) !important;
          }
        }
        @media (min-width: 1024px) {
          .tvrk-container {
            width: calc(100% - 64px) !important;
          }
        }
        @media (min-width: 1280px) {
          .tvrk-container {
            width: calc(100% - 96px) !important;
          }
        }
        .ceo-page {
          font-family:
            'Manrope',
            'Inter',
            'Segoe UI',
            Arial,
            ui-sans-serif,
            system-ui,
            sans-serif;
          text-align: left;
          background:
            linear-gradient(
              180deg,
              #211b67 0%,
              #3a2875 17%,
              #75477f 34%,
              #c98798 50%,
              #eee7f4 66%,
              #d8cee9 81%,
              #4a397c 100%
            );
        }
        .font-display {
          font-family:
            'Sora',
            'Aptos Display',
            'Segoe UI Variable Display',
            'Segoe UI',
            Arial,
            ui-sans-serif,
            system-ui,
            sans-serif;
        }
        .hero-kicker {
          color: rgba(255,255,255,.86);
        }
        .hero-copy {
          color: rgba(255,255,255,.90);
        }
        .hero-muted {
          color: rgba(255,255,255,.76);
        }
        .dark-heading {
          color: #201a35;
        }
        .dark-body {
          color: #565064;
        }
        .dark-muted {
          color: #766e84;
        }
        .logo-strip {
          width: 100%;
          background: #ffffff;
          border: 0;
          box-shadow: none;
        }
        .logo-link {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          min-width: 0;
        }
        .vision-panel {
          border: 1px solid rgba(255,255,255,.16);
          background:
            linear-gradient(
              135deg,
              rgba(31,24,92,.97) 0%,
              rgba(71,45,111,.96) 52%,
              rgba(111,66,116,.94) 100%
            );
          box-shadow:
            inset 0 1px 0 rgba(255,255,255,.13),
            0 26px 65px rgba(33,23,78,.22);
          -webkit-backdrop-filter:
            blur(20px) saturate(130%);
          backdrop-filter:
            blur(20px) saturate(130%);
        }
        .vision-card {
          border: 1px solid rgba(255,255,255,.15);
          background:
            linear-gradient(
              145deg,
              rgba(255,255,255,.105),
              rgba(255,255,255,.065)
            );
          box-shadow:
            inset 0 1px 0 rgba(255,255,255,.10);
          -webkit-backdrop-filter:
            blur(16px) saturate(120%);
          backdrop-filter:
            blur(16px) saturate(120%);
        }
        .liquid-glass {
          border: 1px solid rgba(255,255,255,.58);
          background:
            linear-gradient(
              145deg,
              rgba(255,255,255,.68),
              rgba(255,255,255,.36)
            );
          box-shadow:
            inset 0 1px 0 rgba(255,255,255,.82),
            0 18px 50px rgba(41,29,91,.11);
          -webkit-backdrop-filter:
            blur(22px) saturate(135%);
          backdrop-filter:
            blur(22px) saturate(135%);
        }
        .glass-card {
          border: 1px solid rgba(255,255,255,.66);
          background:
            linear-gradient(
              145deg,
              rgba(255,255,255,.70),
              rgba(255,255,255,.42)
            );
          box-shadow:
            inset 0 1px 0 rgba(255,255,255,.86),
            0 16px 42px rgba(58,42,104,.10);
          -webkit-backdrop-filter:
            blur(20px) saturate(130%);
          backdrop-filter:
            blur(20px) saturate(130%);
        }
        @keyframes logo-marquee {
          from {
            transform: translate3d(0, 0, 0);
          }
          to {
            transform: translate3d(-50%, 0, 0);
          }
        }
        .logo-marquee {
          display: flex;
          width: max-content;
          animation: logo-marquee 28s linear infinite;
          will-change: transform;
        }
        .logo-marquee:hover {
          animation-play-state: paused;
        }
        @media (max-width: 639px) {
          .liquid-glass,
          .glass-card,
          .vision-panel,
          .vision-card {
            -webkit-backdrop-filter:
              blur(14px) saturate(120%);
            backdrop-filter:
              blur(14px) saturate(120%);
          }
          .liquid-glass,
          .glass-card {
            background:
              linear-gradient(
                145deg,
                rgba(255,255,255,.76),
                rgba(255,255,255,.48)
              );
          }
        }
        @media (max-width: 380px) {
          .mobile-logo-item {
            width: 170px !important;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          * {
            scroll-behavior: auto !important;
          }
          .logo-marquee {
            animation: none !important;
          }
        }

        /* ========= 2026 polished glossy design system ========= */
        .ceo-modern { isolation:isolate; background:linear-gradient(166deg,#120c3a 0%,#32206b 17%,#7951a3 37%,#e4b8d1 55%,#e9e4f7 70%,#6650a0 88%,#191041 100%); }
        .ceo-modern #about { background:radial-gradient(ellipse at 88% 12%,rgba(245,109,225,.24),transparent 48%),radial-gradient(ellipse at 4% 85%,rgba(76,142,251,.17),transparent 42%); }
        .ceo-modern #about::before {content:"";pointer-events:none;position:absolute;inset:0;background:linear-gradient(117deg,transparent 30%,rgba(255,255,255,.055) 53%,transparent 67%);}
        .ceo-modern .hero-gloss-button,.ceo-modern .hero-social-rectangle,.ceo-modern .hero-social-circle,.ceo-modern .glass-card,.ceo-modern .vision-card,.ceo-modern .platform-visual {position:relative;isolation:isolate;overflow:hidden;}
        .ceo-modern .hero-gloss-button::after,.ceo-modern .hero-social-rectangle::after,.ceo-modern .glass-card::after,.ceo-modern .platform-visual::after {content:"";position:absolute;pointer-events:none;inset:1px 2px auto;height:48%;border-radius:inherit;background:linear-gradient(180deg,rgba(255,255,255,.34),rgba(255,255,255,0));opacity:.52;z-index:-1;}
        .ceo-modern .hero-gloss-button {border-radius:17px;box-shadow:inset 0 1px 1px rgba(255,255,255,.7),inset 0 -2px 3px rgba(31,14,66,.14),0 12px 28px rgba(19,10,63,.23);}
        .ceo-modern .hero-gloss-peach {background:linear-gradient(135deg,#fff5e9 0%,#ffc9bb 46%,#fbacac 100%);}
        .ceo-modern .hero-gloss-purple {background:linear-gradient(135deg,#a17af5 0%,#6845b5 48%,#402c82 100%);}
        .ceo-modern .hero-meet-button {background:linear-gradient(155deg,#fff 0%,#f3f5ff 70%,#e9e8fa 100%) padding-box,linear-gradient(110deg,#70e5bf,#8ea9ff,#eeb2fb) border-box;}
        .ceo-modern .hero-social-rectangle {border-radius:16px;background:linear-gradient(145deg,rgba(255,255,255,.18),rgba(255,255,255,.065));box-shadow:inset 0 1px rgba(255,255,255,.28),0 12px 26px rgba(16,8,52,.12);}
        .ceo-modern .hero-social-circle {background:linear-gradient(145deg,rgba(255,255,255,.22),rgba(255,255,255,.065));box-shadow:inset 0 1px rgba(255,255,255,.31),0 8px 18px rgba(16,8,52,.13);}
        .ceo-modern .liquid-glass,.ceo-modern .glass-card {background:linear-gradient(145deg,rgba(255,255,255,.85),rgba(252,244,255,.61) 55%,rgba(246,232,255,.55));border:1px solid rgba(255,255,255,.83);box-shadow:0 22px 65px rgba(35,20,94,.16),inset 0 1px 1px rgba(255,255,255,.96);}
        .ceo-modern .vision-panel {background:linear-gradient(130deg,rgba(25,18,73,.98),rgba(86,46,133,.95) 65%,rgba(134,73,131,.91));box-shadow:0 24px 65px rgba(29,18,73,.24),inset 0 1px rgba(255,255,255,.25);}
        .ceo-modern .vision-card {background:linear-gradient(145deg,rgba(255,255,255,.15),rgba(255,255,255,.07));}
        .ceo-modern .instagram-showcase {box-shadow:0 24px 70px rgba(100,42,125,.23),inset 0 1px rgba(255,255,255,.95);}
        .ceo-modern .insta-stat {border:1px solid rgba(255,255,255,.86);background:linear-gradient(145deg,rgba(255,255,255,.85),rgba(247,233,255,.55));box-shadow:inset 0 1px rgba(255,255,255,.95),0 8px 20px rgba(106,62,138,.09);}
        .ceo-modern .insta-follow-cta {background:linear-gradient(105deg,#6843ff,#c42be3 32%,#ff3585 64%,#ff9c1a);border:1px solid rgba(255,255,255,.55);box-shadow:inset 0 2px rgba(255,255,255,.36),0 12px 26px rgba(184,48,135,.24);transition:transform .3s,box-shadow .3s;}
        .ceo-modern .platform-visual {border-radius:24px;background:linear-gradient(145deg,rgba(255,255,255,.19),rgba(255,255,255,.045));border:1px solid rgba(255,255,255,.24);box-shadow:inset 0 1px rgba(255,255,255,.3),0 15px 30px rgba(24,14,73,.13);padding:12px;}
        .ceo-modern .platform-visual img {border-radius:17px;}
        .ceo-modern .glass-card {transition:transform .35s cubic-bezier(.22,1,.36,1),box-shadow .35s;}
        .ceo-modern .logo-link img {filter:drop-shadow(0 6px 9px rgba(35,25,64,.08));}
        .ceo-modern a:focus-visible,.ceo-modern button:focus-visible {outline:3px solid #f4acff;outline-offset:4px;}
        @keyframes gloss-breathe {0%,100%{box-shadow:inset 0 1px 1px rgba(255,255,255,.7),0 10px 24px rgba(65,42,127,.2)}50%{box-shadow:inset 0 1px 1px rgba(255,255,255,.85),0 14px 31px rgba(174,94,229,.32)}}
        @keyframes gloss-glint {0%,76%,100%{transform:translateX(-170%) rotate(22deg);opacity:0}82%{opacity:.58}94%{transform:translateX(480%) rotate(22deg);opacity:0}}
        .ceo-modern .motion-cta {animation:gloss-breathe 5s ease-in-out infinite;}
        .ceo-modern .motion-cta::before {content:"";pointer-events:none;position:absolute;inset:-70% auto -70% 0;width:25%;z-index:1;background:linear-gradient(90deg,transparent,rgba(255,255,255,.5),transparent);transform:translateX(-170%) rotate(22deg);animation:gloss-glint 8s ease-in-out infinite;}
        .ceo-modern .motion-cta:nth-child(2)::before {animation-delay:1.5s}.ceo-modern .motion-cta:nth-child(3)::before {animation-delay:3s}
        @media (hover:hover) and (pointer:fine) { .ceo-modern .gloss-tile:hover {transform:translateY(-6px);box-shadow:0 22px 48px rgba(54,24,113,.22),inset 0 1px 1px rgba(255,255,255,.95)} .ceo-modern .motion-cta:hover {transform:translateY(-3px) scale(1.015)} .ceo-modern .insta-follow-cta:hover {box-shadow:inset 0 2px rgba(255,255,255,.45),0 18px 37px rgba(184,48,135,.35)} }
        @media(max-width:639px){.ceo-modern .ceo-pills-viewport{--ceo-visible:3}.ceo-modern .platform-visual{padding:7px;border-radius:17px}.ceo-modern .glass-card{min-height:205px}.ceo-modern .instagram-showcase{border-radius:24px}.ceo-modern .instagram-profile-graphic{max-height:330px}.ceo-modern .hero-social-rectangle{min-height:58px}.ceo-modern .hero-action-grid{max-width:none}}
        @media(max-width:379px){.ceo-modern .hero-social-rectangles{grid-template-columns:1fr}.ceo-modern .hero-social-rectangle{min-height:48px}.ceo-modern .platform-visual{padding:5px}}
        @media(prefers-reduced-motion:reduce){.ceo-modern .motion-cta,.ceo-modern .motion-cta::before{animation:none!important}.ceo-modern .gloss-tile,.ceo-modern .hero-gloss-button,.ceo-modern .insta-follow-cta{transition:none!important}.ceo-modern .gloss-tile:hover,.ceo-modern .motion-cta:hover{transform:none!important}}

        /* ===== Refined minimal premium visual system ===== */
        .ceo-modern { background:linear-gradient(180deg,#20174f 0%,#3e2d70 24%,#d4c3e1 51%,#f6f3fa 71%,#dcd3eb 89%,#251c55 100%); }
        .ceo-modern #about {background:radial-gradient(circle at 85% 35%,rgba(186,151,232,.16),transparent 45%);}
        .ceo-modern #about::before {display:none;}
        .ceo-modern .motion-cta,.ceo-modern .motion-cta::before {animation:none!important;}
        .ceo-modern .ceo-reveal {opacity:1!important;transform:none!important;filter:none!important;transition:none!important;}
        .ceo-modern .hero-gloss-button {border-radius:14px;box-shadow:inset 0 1px rgba(255,255,255,.5),0 5px 18px rgba(19,10,63,.14);transition:transform .22s ease,box-shadow .22s ease,background .22s ease;}
        .ceo-modern .hero-gloss-button::after,.ceo-modern .hero-social-rectangle::after,.ceo-modern .glass-card::after,.ceo-modern .platform-visual::after {display:none;}
        .ceo-modern .hero-social-rectangle {border-radius:14px;box-shadow:0 5px 16px rgba(18,10,54,.11);}
        .ceo-modern .hero-social-circle {box-shadow:0 4px 12px rgba(18,10,54,.1);}
        .ceo-modern .liquid-glass,.ceo-modern .glass-card {background:rgba(255,255,255,.82);border:1px solid rgba(255,255,255,.82);box-shadow:0 12px 38px rgba(37,25,90,.1);}
        .ceo-modern .glass-card {transition:transform .22s ease,box-shadow .22s ease;}
        .ceo-modern .vision-card {transition:background .2s ease;}
        .ceo-modern .insta-image-stage {background:transparent;}
        .ceo-modern .instagram-showcase {background:rgba(255,255,255,.9);box-shadow:0 16px 40px rgba(43,28,105,.12);}
        .ceo-modern .instagram-profile-graphic {max-height:390px;filter:none;object-fit:contain;transition:transform .25s ease;}
        .ceo-modern .insta-follow-cta {background:linear-gradient(110deg,#6844e8,#bd38aa 50%,#f36a6e);border-radius:14px;box-shadow:0 8px 22px rgba(156,61,157,.2);transition:transform .2s ease,box-shadow .2s ease;}
        .ceo-modern .platform-visual {background:rgba(255,255,255,.1);box-shadow:none;border:1px solid rgba(255,255,255,.24);}
        .ceo-modern .ceo-portrait-orb {animation:none!important;}
        .ceo-modern .ceo-factory-text,.ceo-modern .ceo-pincode-text,.ceo-modern .hero-journey-gradient {animation:none!important;}
        .ceo-modern .ceo-factory-text {color:#ffdfb9;}
        .ceo-modern .ceo-pincode-text {color:#fff;}
        .ceo-modern .hero-journey-gradient {background-position:0 50%;}
        .ceo-modern .logo-marquee {animation-duration:48s;}
        @media(hover:hover) and (pointer:fine){
          .ceo-modern .hero-gloss-button:hover,.ceo-modern .insta-follow-cta:hover {transform:translateY(-2px);box-shadow:0 12px 26px rgba(43,27,96,.19);}
          .ceo-modern .glass-card:hover {transform:translateY(-3px);box-shadow:0 15px 32px rgba(43,27,96,.14);}
          .ceo-modern .instagram-profile-graphic:hover {transform:scale(1.015);}
        }
        @media(max-width:767px){
          .ceo-modern .tvrk-container {width:calc(100% - 28px)!important;}
          .ceo-modern #about {padding-top:76px;}
          .ceo-modern #about > div {gap:14px;}
          .ceo-modern .hero-action-grid {width:100%;max-width:none;gap:9px;}
          .ceo-modern .hero-gloss-button {min-height:50px;font-size:12px;}
          .ceo-modern .hero-social-row {gap:12px;}
          .ceo-modern .hero-social-rectangles {width:100%;grid-template-columns:repeat(2,minmax(0,1fr));}
          .ceo-modern .hero-social-rectangle {min-height:54px;padding:8px;}
          .ceo-modern .hero-social-title {font-size:10px;}
          .ceo-modern .hero-social-subtitle {font-size:8px;}
          .ceo-modern .ceo-portrait-stage {max-width:310px;min-height:0;margin-inline:auto;}
          .ceo-modern .ceo-portrait-image {max-height:340px;}
          .ceo-modern .instagram-showcase {border-radius:20px;}
          .ceo-modern .insta-image-stage {min-height:0;padding:16px 12px 0;}
          .ceo-modern .instagram-profile-graphic {height:auto;max-height:310px;padding:0;}
          .ceo-modern #instagram .instagram-showcase > div {grid-template-columns:minmax(0,1fr);}
          .ceo-modern #instagram .instagram-showcase > div > div:last-child {padding:20px 20px 26px;}
          .ceo-modern #instagram h2 {font-size:clamp(1.55rem,6vw,2.1rem);}
          .ceo-modern .insta-follow-cta {width:100%;}
          .ceo-modern .glass-card {min-height:0;}
          .ceo-modern .platform-visual {padding:7px;}
        }
        @media(max-width:359px){
          .ceo-modern .hero-social-rectangles {grid-template-columns:1fr;}
          .ceo-modern #instagram .instagram-showcase > div > div:last-child {padding:16px;}
          .ceo-modern .ceo-opportunity-pill {font-size:9px;}
        }
        @media(prefers-reduced-motion:reduce){
          .ceo-modern *, .ceo-modern *::before, .ceo-modern *::after {animation-duration:.01ms!important;animation-iteration-count:1!important;transition-duration:.01ms!important;scroll-behavior:auto!important;}
        }
        /* Refined motion system — no scroll-blur or bouncing. */
        .ceo-modern .motion-ready {opacity:0;transition:opacity .65s cubic-bezier(.22,1,.36,1),transform .8s cubic-bezier(.22,1,.36,1);transition-delay:var(--motion-delay,0ms);}
        .ceo-modern .motion-ready.motion-from-left {transform:translate3d(-38px,0,0);}
        .ceo-modern .motion-ready.motion-from-right {transform:translate3d(38px,0,0);}
        .ceo-modern .motion-ready.motion-in {opacity:1;transform:translate3d(0,0,0);}
        .ceo-modern .ceo-portrait-caption {display:none!important;}
        .ceo-modern .hero-journey-gradient {background:linear-gradient(110deg,#ffdfae,#ff9ecd,#d4b4ff,#89e8ff,#a8f7d6,#ffe5aa);background-size:260% 100%;background-clip:text;-webkit-background-clip:text;color:transparent;-webkit-text-fill-color:transparent;animation:ceo-title-colorcycle 11s ease-in-out infinite!important;}
        .ceo-modern .ceo-factory-text {animation:ceo-cta-colors 9s linear infinite!important;}
        .ceo-modern .ceo-pincode-text {animation:ceo-cta-colors 9s linear infinite reverse!important;}
        @keyframes ceo-title-colorcycle {0%,100%{background-position:0 50%}50%{background-position:100% 50%}}
        @keyframes ceo-cta-colors {0%,100%{color:#fff1cb}33%{color:#ffafdd}66%{color:#9be6ff}}
        .ceo-modern .hero-gloss-button {transform:translateZ(0);box-shadow:inset 0 1px 0 rgba(255,255,255,.6),0 7px 20px rgba(25,17,65,.17);}
        .ceo-modern .hero-gloss-button:focus-visible,.ceo-modern a:focus-visible {outline:2px solid #ffbb83;outline-offset:3px;}
        .ceo-modern .ceo-portrait-stage {overflow:hidden;}
        @media (max-width:767px) {
          .ceo-modern .motion-ready.motion-from-left {transform:translate3d(-18px,0,0);}
          .ceo-modern .motion-ready.motion-from-right {transform:translate3d(18px,0,0);}
          .ceo-modern .hero-action-grid {grid-template-columns:repeat(2,minmax(0,1fr));}
          .ceo-modern .hero-meet-button {grid-column:1/-1;}
          .ceo-modern .ceo-portrait-stage {width:min(100%,340px);}
          .ceo-modern .tvrk-container {width:calc(100% - 28px)!important;}
          .ceo-modern .glass-card,.ceo-modern .vision-card {overflow-wrap:anywhere;}
        }
        @media (max-width:380px){.ceo-modern .hero-gloss-button{font-size:11px;}.ceo-modern .hero-social-row{width:100%;}}
        @media (prefers-reduced-motion:reduce){
          .ceo-modern .motion-ready {opacity:1!important;transform:none!important;transition:none!important;}
          .ceo-modern .hero-journey-gradient,.ceo-modern .ceo-factory-text,.ceo-modern .ceo-pincode-text {animation:none!important;}
        }

        /* FINAL UX REFINEMENT — keep the original page gradient, remove
           only the extra hero decoration and unnecessary heavy effects. */
        .ceo-modern #about,
        .ceo-modern #about::before,
        .ceo-modern #about::after {
          background: transparent !important;
          box-shadow: none !important;
          filter: none !important;
        }
        .ceo-modern #about::before,
        .ceo-modern #about::after { content: none !important; display: none !important; }
        .ceo-modern .ceo-portrait-stage { overflow: visible; isolation: auto; }
        .ceo-modern .ceo-portrait-stage::before,
        .ceo-modern .ceo-portrait-stage::after,
        .ceo-modern .ceo-portrait-orb,
        .ceo-modern .ceo-orbit { display:none !important; }
        .ceo-modern .ceo-portrait-image {
          filter: none !important;
          -webkit-mask-image:none !important;
          mask-image:none !important;
          transform:none !important;
          object-fit:contain;
          object-position:bottom center;
        }
        /* Short, elegant opacity/vertical entrance. No sideways slides or blur. */
        .ceo-modern .motion-ready,
        .ceo-modern .motion-ready.motion-from-left,
        .ceo-modern .motion-ready.motion-from-right {
          opacity:0;
          transform:translate3d(0,14px,0);
          filter:none !important;
          transition:opacity .52s ease-out,transform .62s cubic-bezier(.22,1,.36,1);
          transition-delay:var(--motion-delay,0ms);
        }
        .ceo-modern .motion-ready.motion-in {opacity:1;transform:none;}
        .ceo-modern .hero-gloss-button,
        .ceo-modern .hero-social-rectangle,
        .ceo-modern .hero-social-circle,
        .ceo-modern .insta-follow-cta,
        .ceo-modern .glass-card {
          transition: transform .24s cubic-bezier(.22,1,.36,1),
                      box-shadow .24s ease, background-color .24s ease,
                      border-color .24s ease;
        }
        .ceo-modern .hero-gloss-button,
        .ceo-modern .hero-social-rectangle,
        .ceo-modern .hero-social-circle {box-shadow:none !important;}
        .ceo-modern .hero-journey-gradient {animation-duration:18s !important;}
        .ceo-modern .ceo-factory-text,
        .ceo-modern .ceo-pincode-text {animation-duration:14s !important;}
        .ceo-modern .ceo-pills-track {transition-duration:760ms;will-change:auto;}
        .ceo-modern #about h1 {text-wrap:balance;}
        .ceo-modern #about p {text-wrap:pretty;}
        .ceo-modern a, .ceo-modern button {touch-action: manipulation;}
        @media(max-width:767px) {
          .ceo-modern #about {padding-top:clamp(72px,12vw,92px);}
          .ceo-modern #about > .tvrk-container {row-gap:22px;}
          .ceo-modern #about h1 {font-size:clamp(2.15rem,9vw,3.35rem);line-height:1.08;letter-spacing:-.045em;}
          .ceo-modern .ceo-portrait-stage {width:min(100%,350px);max-width:100%;}
          .ceo-modern .ceo-portrait-image {max-height:min(370px,68vw);width:auto;max-width:100%;}
          .ceo-modern .hero-action-grid {max-width:100%;}
          .ceo-modern .hero-social-rectangles {min-width:0;}
          .ceo-modern .hero-social-circle {min-width:44px;min-height:44px;}
          .ceo-modern .motion-ready {transform:translate3d(0,9px,0);}
        }
        @media(max-width:380px) {
          .ceo-modern #about h1 {font-size:clamp(1.9rem,8.8vw,2.3rem);}
          .ceo-modern .hero-social-rectangles {grid-template-columns:1fr;}
          .ceo-modern .hero-gloss-button {font-size:11px;line-height:1.3;}
          .ceo-modern .ceo-portrait-image {max-height:270px;}
        }
        @media(hover:none) {
          .ceo-modern .logo-marquee:hover {animation-play-state:running;}
        }
        @media(prefers-reduced-motion:reduce) {
          .ceo-modern .motion-ready,.ceo-modern .motion-ready.motion-in {opacity:1!important;transform:none!important;transition:none!important;}
          .ceo-modern .hero-journey-gradient,
          .ceo-modern .ceo-factory-text,.ceo-modern .ceo-pincode-text,
          .ceo-modern .logo-marquee {animation:none!important;}
          .ceo-modern .ceo-pills-track {transition:none!important;}
        }
      `}</style>
      <InitiativeHeader active="home" />
      <main>
        {/* =====================================================
            HERO
        ===================================================== */}
        <section
          id="about"
          aria-labelledby="hero-heading"
          className="relative overflow-hidden pt-[90px] text-white sm:pt-[100px]"
        >
          <div className="tvrk-container mx-auto grid items-center gap-6 pb-7 pt-6 sm:pb-9 sm:pt-8 lg:grid-cols-[minmax(0,1.08fr)_minmax(0,.92fr)] lg:gap-10 lg:pb-10 lg:pt-9 xl:gap-12">
            <div className="min-w-0">
              <p className="hero-kicker text-[9px] font-extrabold uppercase tracking-[0.18em] sm:text-[11px]">
                FinTech · BFSI · Artificial Intelligence
              </p>
              <h1
                id="hero-heading"
                className="ceo-gradient-heading hero-journey-gradient font-display mt-3.5 max-w-[760px] text-[clamp(2rem,4.5vw,4.2rem)] font-extrabold leading-[0.96] tracking-[-0.05em] sm:text-[clamp(2.5rem,4.5vw,4.2rem)]"
              >
                <span className="block">Every Journey.</span>
                <span className="mt-1 block sm:mt-1.5">One Partner.</span>
              </h1>
              <p className="mt-4 max-w-[680px] text-[15px] font-semibold leading-7 text-white sm:text-[17px] lg:text-[18px]">
                From birth to legacy, we’re with you at every turn.
              </p>
              <p className="hero-copy mt-2 max-w-[640px] text-[13px] font-medium leading-6 sm:text-[15px] sm:leading-7">
                Jobs, Skills, Study Abroad, Gold &amp; Silver, AI, Funding,
                Real Estate and Loans for Education, Marriage &amp; Home.
              </p>
              <div className="mt-4 max-w-[640px]">
                <External
                  href="https://www.askoxy.ai/partner"
                  ariaLabel="Join as CEO for your PINCODE through CEO Factory"
                  className="group inline-flex flex-col items-start"
                >
                  <span className="ceo-factory-text text-[13px] font-extrabold leading-6 sm:text-[15px]">
                    #CEOFactory
                  </span>
                  <span className="ceo-pincode-text mt-1 flex items-center gap-2 text-[14px] font-extrabold leading-6 sm:text-[17px]">
                    Join as CEO for Your PINCODE &amp; Earn Money
                    <ArrowUpRight className="h-4 w-4 shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </span>
                </External>
                <p className="hero-copy mt-3 text-[12px] font-medium sm:text-[13px]">
                  Connect People. Create Opportunities. Earn &amp; Grow.
                </p>
                <div className="ceo-pills-viewport mt-3" aria-label="CEO Factory opportunities">
                  <div
                    className={`ceo-pills-track ${slideEnabled ? "" : "ceo-no-transition"}`}
                    style={{ "--ceo-index": activeOpportunity } as React.CSSProperties}
                    onTransitionEnd={handleOpportunitySlideEnd}
                  >
                    {[...ceoOpportunities, ...ceoOpportunities.slice(0, 5)].map((opportunity, index) => (
                      <span className="ceo-opportunity-pill" key={`${opportunity}-${index}`}>
                        {opportunity}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="hero-action-grid mt-5">
                <External
                  href="https://us06web.zoom.us/j/83426047733?pwd=BKaIwjmah7iidb2s9F1bPK8uv9tMDg.1"
                  ariaLabel="Join daily Zoom session at 08:00 PM IST (opens in a new tab)"
                  className="hero-gloss-button hero-meet-button"
                >
                  <span className="hero-meet-icon" aria-hidden="true">
                    <SiZoom className="h-5 w-5 sm:h-[22px] sm:w-[22px]" />
                  </span>
                  <span className="hero-meet-label">LIVE Q&A · DAILY ZOOM · 8:00 PM IST</span>
                  <ArrowUpRight className="hero-meet-arrow h-4 w-4 shrink-0" />
                </External>

                <button
                  type="button"
                  onClick={() => writeToUsDialogRef.current?.showModal()}
                  aria-haspopup="dialog"
                  aria-controls="write-to-us-dialog"
                  className={`${focus} hero-gloss-button hero-gloss-peach`}
                >
                  <MailIcon />
                  <span>Write to Us</span>
                  <ArrowUpRight className="h-3.5 w-3.5 shrink-0" />
                </button>
                <External
                  href="https://youtu.be/INIuPOKQMrE"
                  ariaLabel="Watch Birth to Legacy Journey on YouTube (opens in a new tab)"
                  className="hero-gloss-button hero-gloss-purple hero-video-button"
                >
                  <span className="flex items-center justify-center gap-1.5">
                    <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="h-3.5 w-3.5 shrink-0">
                      <path d="M6 3.5v13l10-6.5L6 3.5Z" />
                    </svg>
                    Watch Video
                  </span>
                  <span className="hero-button-caption">Birth to Legacy Journey</span>
                </External>
              </div>
              <div className="hero-social-row mt-4" role="group" aria-label="Connect on social media">
                <div className="hero-social-rectangles">
                  <External
                    href={WHATSAPP_CHANNEL_URL}
                    ariaLabel="Join TV Radhakrishna WhatsApp Channel"
                    className="hero-social-rectangle hero-social-whatsapp gloss-link"
                  >
                    <span className="hero-social-brand hero-social-brand-whatsapp" aria-hidden="true">
                      <WhatsAppIcon className="h-4 w-4 text-white" />
                    </span>
                    <span className="hero-social-copy">
                      <span className="hero-social-title">Join WhatsApp Channel</span>
                      <span className="hero-social-subtitle">Updates &amp; announcements</span>
                    </span>
                    <ArrowUpRight className="hero-social-arrow" />
                  </External>
                  <External
                    href={INSTAGRAM_URL}
                    ariaLabel="Follow @tvradhakrishna on Instagram"
                    className="hero-social-rectangle hero-social-instagram gloss-link"
                  >
                    <span className="hero-social-brand hero-social-brand-instagram" aria-hidden="true">
                      <SocialIcon name="Instagram" className="h-4 w-4 text-white" />
                    </span>
                    <span className="hero-social-copy">
                      <span className="hero-social-title">Instagram @tvradhakrishna</span>
                      <span className="hero-social-subtitle">Posts, insights &amp; updates</span>
                    </span>
                    <ArrowUpRight className="hero-social-arrow" />
                  </External>
                </div>
                <div className="hero-social-circles">
                  {heroSocials.map((item) => (
                    <External
                      key={item.name}
                      href={item.href}
                      ariaLabel={`Visit ${item.name} profile`}
                      className="hero-social-circle gloss-link"
                    >
                      <SocialIcon name={item.name} className="h-5 w-5" />
                      <span className="sr-only">{item.name}</span>
                    </External>
                  ))}
                </div>
              </div>
            </div>
            <div className="ceo-portrait-stage relative mx-auto flex w-full max-w-[530px] items-end justify-center self-end lg:mx-0 lg:justify-self-end" aria-label="CEO portrait">
              <Portrait
                key={portraitUrl}
                src={portraitUrl}
                className="ceo-portrait-image relative z-10 max-w-[370px] self-end sm:max-w-[430px] lg:max-w-[480px]"
              />
            </div>
          </div>
        </section>
        {/* =====================================================
            OXY COMPANY LOGOS
        ===================================================== */}
        <section
          id="platforms"
          aria-label="OXY Group Companies"
          className="logo-strip relative z-10 scroll-mt-24 overflow-hidden bg-white"
        >
          {/* Walk-in interview: top of the logos section, no hero card. */}
          {/* <div className="tvrk-container pt-5 sm:pt-7 lg:pt-9">
            <a
              href={WALKIN_INTERVIEW_URL}
              aria-label="Walk-in Interview — view details and apply at ASKOXY.AI"
              className={`${focus} group mx-auto block w-full max-w-[1040px] overflow-hidden rounded-lg transition-opacity duration-200 hover:opacity-95 sm:rounded-xl`}
            >
              <img
                src={WALKIN_IMAGE_SOURCES[walkinImageSourceIndex]}
                onError={() => {
                  setWalkinImageSourceIndex((current) =>
                    Math.min(current + 1, WALKIN_IMAGE_SOURCES.length - 1)
                  );
                }}
                alt="walkincard — ASKOXY.AI Walk-in Interview. Click to view details and apply."
                loading="eager"
                decoding="async"
                className="block h-auto w-full object-contain"
              />
            </a>
          </div> */}
          {/* Tablet + Desktop */}
          <div className="hidden w-full sm:block">
            <div className="mx-auto w-full px-4 sm:px-6 lg:px-5 xl:px-7 2xl:px-10">
              <div
                className="
                  grid
                  w-full
                  grid-cols-3
                  items-center
                  justify-items-center
                  gap-x-4
                  gap-y-3
                  py-5
                  md:grid-cols-4
                  md:gap-x-5
                  md:gap-y-4
                  md:py-6
                  lg:grid-cols-7
                  lg:gap-x-2
                  lg:gap-y-0
                  lg:py-6
                  xl:gap-x-4
                  xl:py-7
                  2xl:gap-x-6
                  2xl:py-8
                "
              >
                {brandPlatforms.map((item) => (
                  <External
                    key={item.name}
                    href={item.href}
                    ariaLabel={`Visit ${item.name}`}
                    className="
                      logo-link
                      group
                      flex
                      min-h-[82px]
                      w-full
                      min-w-0
                      items-center
                      justify-center
                      overflow-visible
                      px-1
                      py-2
                      md:min-h-[90px]
                      lg:min-h-[96px]
                      xl:min-h-[104px]
                    "
                  >
                    <img
                      src={item.logo}
                      alt={item.name}
                      loading="eager"
                      decoding="async"
                      className={`
                        ${item.desktopClass}
                        block
                        h-auto
                        max-h-[70px]
                        max-w-full
                        object-contain
                        transition-transform
                        duration-300
                        ease-out
                        group-hover:scale-[1.04]
                        lg:max-h-[76px]
                        xl:max-h-[82px]
                        2xl:max-h-[88px]
                      `}
                    />
                  </External>
                ))}
              </div>
            </div>
          </div>
          {/* Mobile Auto Scroll */}
          <div className="w-full overflow-hidden bg-white sm:hidden">
            <div className="logo-marquee flex items-center py-2">
              {[...brandPlatforms, ...brandPlatforms].map((item, index) => (
                <External
                  key={`${item.name}-${index}`}
                  href={item.href}
                  ariaLabel={`Visit ${item.name}`}
                  className="
                      mobile-logo-item
                      logo-link
                      flex
                      h-[92px]
                      w-[190px]
                      shrink-0
                      items-center
                      justify-center
                      overflow-visible
                      px-4
                      py-2
                    "
                >
                  <img
                    src={item.logo}
                    alt={item.name}
                    loading="eager"
                    decoding="async"
                    className={`
                        ${item.mobileClass}
                        block
                        h-auto
                        max-h-[67px]
                        max-w-[165px]
                        object-contain
                      `}
                  />
                </External>
              ))}
            </div>
          </div>
        </section>
        <OxyLoansAnniversarySection />
        {/* =====================================================
            INSTAGRAM
        ===================================================== */}
        <section
          id="instagram"
          aria-labelledby="instagram-heading"
          className="scroll-mt-24 py-8 sm:py-12 lg:py-14"
        >
          <div className="tvrk-container mx-auto">
            <style>{`
              #instagram .ig-open-layout{display:grid;grid-template-columns:minmax(0,1fr);gap:10px;align-items:center}
              #instagram .ig-open-visual{min-width:0;position:relative;display:flex;align-items:center;justify-content:center;min-height:250px;overflow:visible;perspective:900px}
              #instagram .ig-open-visual img{max-height:430px;width:100%;object-fit:contain;transform-origin:50% 58%;transition:transform .75s cubic-bezier(.19,1,.22,1);will-change:transform}
              #instagram .ig-open-visual:hover img{transform:translate3d(0,-8px,0) scale(1.055) rotate(-1deg)}
              #instagram .ig-copy{min-width:0;padding:12px 0 18px}
              /* Light typography on the existing dark purple page background. */
              #instagram .ig-kicker{color:#ffd5ec}
              #instagram .ig-heading{color:#fff2fb;background:linear-gradient(105deg,#fff8ff 0%,#ffc0e6 32%,#ff91bd 57%,#ffffff 82%,#fff8ff 100%);background-size:240% 100%;-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;animation:ig-color-flow 11s ease-in-out infinite}
              #instagram .ig-description{color:rgba(255,255,255,.9)}
              #instagram .ig-description strong{color:#ffe0f1}
              @keyframes ig-color-flow{0%,100%{background-position:0% 50%}50%{background-position:100% 50%}}
              /* Reveal is enabled only by JS after the section is observed. */
              #instagram.ig-motion-enabled .ig-open-visual img{opacity:0;transform:translate3d(-22px,24px,0) scale(.89) rotate(-3deg);transition:transform 1.1s cubic-bezier(.19,1,.22,1),opacity .85s ease}
              #instagram.ig-motion-enabled .ig-copy>*{opacity:0;transform:translate3d(16px,18px,0);transition:transform .8s cubic-bezier(.19,1,.22,1),opacity .7s ease}
              #instagram.ig-motion-enabled.ig-in-view .ig-open-visual img{opacity:1;transform:none}
              #instagram.ig-motion-enabled.ig-in-view .ig-copy>*{opacity:1;transform:none}
              #instagram.ig-motion-enabled.ig-in-view .ig-copy>*:nth-child(2){transition-delay:100ms}
              #instagram.ig-motion-enabled.ig-in-view .ig-copy>*:nth-child(3){transition-delay:180ms}
              #instagram.ig-motion-enabled.ig-in-view .ig-copy>*:nth-child(4){transition-delay:260ms}
              #instagram.ig-motion-enabled.ig-in-view .ig-open-visual:hover img{transform:translate3d(0,-8px,0) scale(1.055) rotate(-1deg)}
              @media(min-width:1024px){#instagram .ig-open-layout{grid-template-columns:minmax(0,1fr) minmax(0,.95fr);gap:clamp(24px,4vw,90px)}#instagram .ig-open-visual{min-height:390px}#instagram .ig-copy{padding:0}}
              @media(max-width:639px){#instagram .ig-open-layout{gap:0}#instagram .ig-open-visual{min-height:0}#instagram .ig-open-visual img{max-height:330px}#instagram .ig-copy{padding:4px 2px 14px}#instagram .ig-copy h2{font-size:clamp(1.7rem,7vw,2.2rem);line-height:1.12}#instagram .ig-copy p{line-height:1.7}#instagram .ig-copy .insta-follow-cta{width:100%;justify-content:center}}
              @media(prefers-reduced-motion:reduce){#instagram .ig-heading{animation:none!important}#instagram.ig-motion-enabled .ig-open-visual img,#instagram.ig-motion-enabled .ig-copy>*{opacity:1!important;transform:none!important;transition:none!important}#instagram .ig-open-visual:hover img{transform:none!important}}
            `}</style>
            <div className="ig-open-layout">
              <External href={INSTAGRAM_URL} ariaLabel="Open @tvradhakrishna on Instagram" className="ig-open-visual group">
                <img src={INSTAGRAM_CARD_IMAGE} alt="@tvradhakrishna Instagram profile illustration" loading="lazy" decoding="async" />
              </External>
              <div className="ig-copy flex flex-col justify-center">
                <div className="flex items-center gap-2.5">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-[linear-gradient(145deg,#833ab4,#e1306c,#f77737)] text-white">
                    <SocialIcon name="Instagram" className="h-4 w-4" />
                  </span>
                  <p className="ig-kicker text-[10px] font-extrabold uppercase tracking-[.12em] sm:text-xs">Instagram · @tvradhakrishna</p>
                </div>
                <h2 id="instagram-heading" className="ig-heading font-display mt-4 max-w-xl text-[clamp(1.85rem,3.3vw,3.05rem)] font-extrabold leading-[1.12] tracking-[-.045em]">
                  Connect. Discover. Stay inspired.
                </h2>
                <p className="ig-description mt-4 max-w-xl text-sm font-medium leading-7 sm:text-[15px]">
                  Explore practical ideas across AI, financial services, technology, and entrepreneurial journeys. Follow <strong>@tvradhakrishna</strong> on Instagram.
                </p>
                <External href={INSTAGRAM_URL} className="insta-follow-cta mt-6 inline-flex min-h-[50px] w-fit max-w-full items-center justify-center gap-3 rounded-xl px-6 py-3 text-sm font-extrabold text-white sm:text-[15px]" ariaLabel="Follow @tvradhakrishna on Instagram">
                  <SocialIcon name="Instagram" className="h-5 w-5" />
                  Follow on Instagram
                  <ArrowUpRight className="h-4 w-4" />
                </External>
              </div>
            </div>
          </div>
        </section>
        {/* =====================================================
            VISIT PLATFORMS
        ===================================================== */}
        <section
          id="visit-platforms"
          aria-labelledby="visit-platforms-heading"
          className="scroll-mt-24 pb-10 pt-2 sm:pb-14 sm:pt-4 lg:pb-16"
        >
          <div className="tvrk-container mx-auto">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between sm:gap-8">
              <div>
                <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-white/[0.78] sm:text-xs">
                  Explore ASKOXY.AI
                </p>
                <h2
                  id="visit-platforms-heading"
                  className="font-display mt-2.5 text-[2rem] font-extrabold leading-[1.08] tracking-[-0.045em] text-white sm:text-[2.55rem] lg:text-[2.8rem]"
                >
                  Visit My Platforms
                </h2>
              </div>
              <p className="max-w-xl text-sm font-semibold leading-6 text-white/[0.82] sm:text-right sm:text-[15px] sm:leading-7">
                Explore journeys, blogs, jobs and the latest OXY News.
              </p>
            </div>
            <div className="mt-7 grid grid-cols-2 gap-3 sm:mt-8 sm:gap-5 lg:grid-cols-4 lg:gap-6">
              {visitPlatforms.map((item) => (
                <External
                  key={item.name}
                  href={item.href}
                  ariaLabel={`Visit ${item.name}`}
                  className="platform-visual gloss-tile group block min-w-0"
                >
                  <div className="flex aspect-[5/3] w-full items-center justify-center">
                    <img
                      src={item.image}
                      alt={item.name}
                      loading="lazy"
                      decoding="async"
                      className="block h-full w-full rounded-[18px] object-contain transition duration-300 ease-out group-hover:-translate-y-1 sm:rounded-[22px]"
                    />
                  </div>
                </External>
              ))}
            </div>
          </div>
        </section>
        {/* =====================================================
            ECOSYSTEM
        ===================================================== */}
        <section
          id="ecosystem"
          aria-labelledby="ecosystem-heading"
          className="scroll-mt-24 pb-16 pt-12 sm:pb-20 sm:pt-16 lg:pb-24 lg:pt-20"
        >
          <div className="tvrk-container mx-auto">
            <div className="grid gap-5 lg:grid-cols-[minmax(0,.75fr)_minmax(0,1.25fr)] lg:items-end">
              <div>
                <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-white/[0.76] sm:text-xs">
                  Our ecosystem
                </p>
                <h2
                  id="ecosystem-heading"
                  className="font-display mt-3 max-w-xl text-[2rem] font-bold leading-[1.08] tracking-[-0.045em] text-white sm:text-[2.75rem]"
                >
                  Building across AI, lending & financial platforms.
                </h2>
              </div>
              <p className="max-w-2xl text-sm font-semibold leading-7 text-white/[0.78] sm:text-[15px] lg:justify-self-end lg:text-right">
                Discover connected work across lending, financial services,
                regulatory intelligence, insurance, and AI.
              </p>
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {ecosystemPlatforms.map((item, index) => (
                <External
                  key={item.href}
                  href={item.href}
                  className="glass-card gloss-tile group flex min-h-[235px] min-w-0 flex-col rounded-[26px] p-5 transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(47,35,111,.13)] sm:p-6"
                >
                  <div className="flex items-start justify-between gap-3">
                    <span className="rounded-full border border-white/[0.6] bg-white/[0.46] px-3 py-1.5 text-[9px] font-extrabold uppercase tracking-[0.13em] text-[#654782] backdrop-blur">
                      {item.eyebrow}
                    </span>
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-white/[0.65] bg-white/[0.44] text-[#5a3b87] backdrop-blur transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:bg-[#211b67] group-hover:text-white">
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </div>
                  {"logo" in item && item.logo ? (
                    <div className="mt-7 flex h-14 w-fit items-center rounded-[16px] bg-white px-3">
                      <img
                        src={item.logo}
                        alt={`${item.name} logo`}
                        loading="lazy"
                        className="max-h-11 w-auto max-w-[190px] object-contain"
                      />
                    </div>
                  ) : (
                    <h3 className="font-display mt-7 text-lg font-bold leading-6 tracking-[-0.025em] text-[#2b2150] sm:text-xl">
                      {item.name}
                    </h3>
                  )}
                  <p className="dark-body mt-3 text-sm font-medium leading-6">
                    {item.description}
                  </p>
                  <div className="mt-auto flex items-end justify-end gap-3 pt-7">
                    <span className="font-display dark-muted text-[11px] font-bold">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                </External>
              ))}
            </div>
          </div>
        </section>
        <FourPSection />
        {/* =====================================================
            VISION
        ===================================================== */}
        <section
          id="vision"
          aria-labelledby="vision-heading"
          className="scroll-mt-24 pb-16 pt-14 text-white sm:pb-20 sm:pt-16 lg:pb-24 lg:pt-20"
        >
          <div className="vision-panel tvrk-container mx-auto overflow-hidden rounded-[30px] p-5 sm:rounded-[34px] sm:p-8 lg:p-10 xl:p-12">
            <div className="grid gap-9 lg:grid-cols-[minmax(0,.88fr)_minmax(0,1.12fr)] lg:items-center lg:gap-14 xl:gap-16">
              <div className="min-w-0">
                <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#e6d8f6] sm:text-xs">
                  Vision & AI
                </p>
                <h2
                  id="vision-heading"
                  className="font-display mt-3 max-w-xl text-[clamp(2.15rem,6vw,3.35rem)] font-extrabold leading-[1.04] tracking-[-0.05em] text-white"
                >
                  Making AI useful.
                  <span className="mt-1 block text-[#ffc09f]">
                    Creating opportunities.
                  </span>
                </h2>
                <p className="mt-5 max-w-xl text-sm font-medium leading-7 text-white/[0.84] sm:text-[15px]">
                  Our ecosystem brings together finance, technology, and
                  artificial intelligence. The focus is simple: make information
                  easier to understand, simplify everyday work, and help people
                  explore new opportunities.
                </p>
                <p className="mt-4 max-w-xl text-sm font-medium leading-7 text-white/[0.72] sm:text-[15px]">
                  Across connected platforms, we are exploring practical ways to
                  apply AI to banking, financial services, insurance,
                  regulation, and business workflows.
                </p>
              </div>
              <div className="grid gap-3.5 sm:grid-cols-2 lg:grid-cols-1">
                {[
                  {
                    number: "01",
                    title: "AI for everyday work",
                    text: "Use AI to answer questions, organize information, and support everyday business tasks.",
                  },
                  {
                    number: "02",
                    title: "A focus on financial services",
                    text: "Discover work around BFSI AI, insurance knowledge, and access to RBI regulatory information.",
                  },
                  {
                    number: "03",
                    title: "Building for Bharat",
                    text: "Develop useful AI experiences shaped by local needs, practical adoption, and people at the center.",
                  },
                ].map((item) => (
                  <article
                    key={item.title}
                    className="vision-card gloss-tile group flex items-start gap-4 rounded-[22px] p-[18px] transition duration-300 hover:-translate-y-0.5 hover:bg-white/[0.13] sm:p-5 lg:p-6"
                  >
                    <span className="font-display grid h-11 w-11 shrink-0 place-items-center rounded-[14px] border border-white/[0.1] bg-white/[0.09] text-[11px] font-extrabold text-[#ffc09f]">
                      {item.number}
                    </span>
                    <div className="min-w-0">
                      <h3 className="font-display text-base font-bold leading-6 text-white sm:text-lg">
                        {item.title}
                      </h3>
                      <p className="mt-1.5 text-sm font-medium leading-6 text-white/[0.72]">
                        {item.text}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>
        {/* =====================================================
            JOIN / EARN / LEARN
        ===================================================== */}
        <section
          id="join-earn-learn"
          aria-labelledby="join-earn-learn-heading"
          className="relative scroll-mt-24 py-3 sm:py-4 lg:py-5"
        >
          <div className="tvrk-container mx-auto">
            <div className="mx-auto max-w-4xl text-center">
              <h2
                id="join-earn-learn-heading"
                className="font-display text-[clamp(1.9rem,5vw,3.5rem)] font-extrabold leading-[1] tracking-[-0.05em]"
              >
                <span className="text-[#d96b4f]">#JOIN</span>{" "}
                <span className="text-[#211b4b]">#EARN</span>{" "}
                <span className="text-[#5b3d83]">#LEARN</span>
              </h2>
              <p className="mx-auto mt-2 max-w-2xl text-[13px] font-semibold leading-5 text-[#463e56] sm:text-sm sm:leading-6 lg:text-[15px]">
                Learn with AI, build meaningful partnerships and grow through a
                connected ecosystem of people, ideas and opportunities.
              </p>
            </div>
            <div className="mt-3 sm:mt-4 lg:mt-5">
              {/* AI Co-Founder */}
              <article className="grid items-center gap-2 sm:gap-3 lg:grid-cols-[minmax(0,.9fr)_minmax(0,1.1fr)] lg:gap-5 xl:gap-7">
                <div className="order-1 min-w-0 text-center lg:order-1 lg:text-left">
                  <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#c95e43] sm:text-[11px]">
                    #01
                  </p>
                  <h3 className="font-display mt-1.5 text-[clamp(1.65rem,4vw,2.85rem)] font-extrabold leading-[1.04] tracking-[-0.045em] text-[#211b4b]">
                    Join as{" "}
                    <span className="text-[#d96b4f]">AI Co-Founder</span>
                  </h3>
                  <p className="mx-auto mt-2 max-w-[560px] text-[13px] font-semibold leading-5 text-[#4c445b] sm:text-sm sm:leading-6 lg:mx-0 lg:text-[15px]">
                    Learn, collaborate and grow with AI-powered knowledge,
                    practical innovation and real-world opportunities.
                  </p>
                  <div className="mt-2.5 flex flex-wrap justify-center gap-1.5 lg:justify-start">
                    {["Learn", "Collaborate", "Build"].map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-[#5b3d83]/25 bg-white/45 px-3.5 py-1.5 text-[10px] font-extrabold text-[#35285f] backdrop-blur-sm sm:text-[11px]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="order-2 hidden justify-center lg:order-2 lg:flex lg:justify-end">
                  <img
                    src="https://i.ibb.co/fzg4RMtj/aicofounder.png"
                    alt="AI Co-Founder collaboration ecosystem"
                    loading="lazy"
                    decoding="async"
                    className="block h-auto w-full max-w-[330px] object-contain sm:max-w-[410px] md:max-w-[450px] lg:max-w-[520px] xl:max-w-[565px]"
                  />
                </div>
              </article>
              {/* Desktop connector */}
              <div className="-my-1 hidden justify-center lg:flex xl:-my-2">
                <img
                  src="https://i.ibb.co/gL3KRxTQ/arrow1.png"
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  decoding="async"
                  className="h-auto w-[66%] max-w-[920px] object-contain opacity-95 xl:w-[70%]"
                />
              </div>
              {/* Mobile / tablet visual flow: AI image -> arrow PNG -> Partner image */}
              <div className="mt-3 flex flex-col items-center lg:hidden sm:mt-4">
                <img
                  src="https://i.ibb.co/fzg4RMtj/aicofounder.png"
                  alt="AI Co-Founder collaboration ecosystem"
                  loading="lazy"
                  decoding="async"
                  className="block h-auto w-full max-w-[330px] object-contain sm:max-w-[390px] md:max-w-[430px]"
                />
                <img
                  src="https://i.ibb.co/gL3KRxTQ/arrow1.png"
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  decoding="async"
                  className="-my-1 block h-auto w-[86%] max-w-[360px] object-contain opacity-95 sm:w-[78%] sm:max-w-[410px] md:w-[72%]"
                />
                <img
                  src="https://i.ibb.co/gMJXWB7d/partner.png"
                  alt="Partner collaboration and growth ecosystem"
                  loading="lazy"
                  decoding="async"
                  className="block h-auto w-full max-w-[330px] object-contain sm:max-w-[390px] md:max-w-[430px]"
                />
              </div>
              {/* Partner */}
              <article className="grid items-center gap-2 sm:gap-3 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,.9fr)] lg:gap-5 xl:gap-7">
                <div className="hidden justify-center lg:flex lg:justify-start">
                  <img
                    src="https://i.ibb.co/gMJXWB7d/partner.png"
                    alt="Partner collaboration and growth ecosystem"
                    loading="lazy"
                    decoding="async"
                    className="block h-auto w-full max-w-[330px] object-contain sm:max-w-[410px] md:max-w-[450px] lg:max-w-[520px] xl:max-w-[565px]"
                  />
                </div>
                <div className="mt-2 min-w-0 text-center sm:mt-3 lg:mt-0 lg:text-left">
                  <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#5b3d83] sm:text-[11px]">
                    #02
                  </p>
                  <h3 className="font-display mt-1.5 text-[clamp(1.65rem,4vw,2.85rem)] font-extrabold leading-[1.04] tracking-[-0.045em] text-[#211b4b]">
                    Join as <span className="text-[#5b3d83]">Partner</span>
                  </h3>
                  <p className="mx-auto mt-2 max-w-[560px] text-[13px] font-semibold leading-5 text-[#4c445b] sm:text-sm sm:leading-6 lg:mx-0 lg:text-[15px]">
                    Build partnerships, expand your network and unlock new
                    business and earning opportunities across the ecosystem.
                  </p>
                  <div className="mt-2.5 flex flex-wrap justify-center gap-1.5 lg:justify-start">
                    {["Partner", "Connect", "Earn"].map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-[#5b3d83]/25 bg-white/45 px-3.5 py-1.5 text-[10px] font-extrabold text-[#35285f] backdrop-blur-sm sm:text-[11px]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>
        {/* =====================================================
            CONTACT
        ===================================================== */}
        <section
          id="contact"
          aria-labelledby="contact-heading"
          className="scroll-mt-24 border-t border-white/[0.12] py-12 text-white sm:py-14 lg:py-16"
        >
          <div className="tvrk-container mx-auto">
            <div className="mx-auto grid max-w-[1120px] items-center gap-8 sm:gap-10 lg:grid-cols-[minmax(220px,.62fr)_minmax(0,1fr)] lg:gap-14 xl:gap-20">
              <div className="flex justify-center lg:justify-start">
                <img
                  src={OFFICE_IMAGE}
                  alt="Miyapur office location illustration"
                  loading="lazy"
                  decoding="async"
                  className="h-auto w-full max-w-[210px] object-contain sm:max-w-[245px] lg:max-w-[270px] xl:max-w-[285px]"
                />
              </div>
              <div className="min-w-0 text-center lg:text-left">
                <p className="text-[10px] font-extrabold uppercase tracking-[0.20em] text-white/[0.60] sm:text-[11px]">
                  Office Address
                </p>
                <h2
                  id="contact-heading"
                  className="font-display mt-3 text-[2rem] font-extrabold leading-[1.05] tracking-[-0.045em] text-white sm:text-[2.35rem] lg:text-[2.7rem]"
                >
                  Visit us in Hyderabad
                </h2>
                <p className="mx-auto mt-4 max-w-[720px] text-[14px] font-semibold leading-7 text-white/[0.82] sm:text-[15px] sm:leading-8 lg:mx-0 lg:max-w-[650px]">
                  {OFFICE_ADDRESS}
                </p>
                <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:flex-wrap lg:items-start">
                  <a
                    href={OFFICE_MAP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Open office address in Google Maps"
                    className={`group inline-flex min-h-[44px] items-center justify-center gap-2 rounded-full border border-white/[0.22] bg-white px-5 py-2.5 text-[12px] font-extrabold text-[#211b67] shadow-[0_10px_24px_rgba(15,10,50,.10)] transition duration-200 hover:-translate-y-0.5 hover:bg-[#fff8f4] sm:text-[13px] ${focus}`}
                  >
                    Open in Google Maps
                    <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    aria-label={`Email ${CONTACT_EMAIL}`}
                    className={`group inline-flex min-h-[44px] max-w-full items-center justify-center gap-2.5 rounded-full border border-white/[0.20] bg-white/[0.08] px-5 py-2.5 text-[12px] font-extrabold text-white transition duration-200 hover:-translate-y-0.5 hover:border-white/[0.38] hover:bg-white/[0.14] sm:text-[13px] ${focus}`}
                  >
                    <MailIcon />
                    <span className="break-all">{CONTACT_EMAIL}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      {/* =====================================================
          FOOTER
      ===================================================== */}
      <footer className="border-t border-white/[0.12] bg-transparent py-8 text-white">
        <div className="tvrk-container mx-auto flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
          <div>
            <p className="font-display text-sm font-bold text-white">
              Radhakrishna T
            </p>
            <p className="mt-1 text-[11px] font-semibold text-white/[0.78]">
              CEO & Co-Founder
            </p>
          </div>
          <div className="flex items-center justify-center gap-1 sm:justify-end">
            <p className="text-[11px] font-medium leading-5 text-white/[0.72]">
              © {new Date().getFullYear()} Radhakrishna T. All rights reserved.
            </p>
            <External
              href={HIDDEN_DRIVE_URL}
              ariaLabel="Open shared Drive file"
              className="group grid h-5 w-5 shrink-0 place-items-center rounded-full opacity-[0.16] transition hover:opacity-60 focus:opacity-100"
            >
              <span
                aria-hidden="true"
                className="block h-[3px] w-[3px] rounded-full bg-white"
              />
            </External>
          </div>
        </div>
      </footer>
    </div>
  );
}
