import React, {
  useEffect,
  useRef,
  useState,
  type MouseEvent,
  type ReactNode,
} from "react";

const HERO_IMAGE = "https://i.ibb.co/TqTZKPFq/ceo-image1.png";
const TVRK_LOGO = "https://i.ibb.co/XrT06DxX/tvrklogo.png";

// Exact production URL requested by you — no missing `www`, no trailing-slash dependency.
const CLONE_URL = "https://www.askoxy.ai/radhAI";
const OXY_FOUNDATION_PATH = "/oxy-foundation";
const BRIDGITAL_NATION_PATH = "/bridgital-nation";
const INSTAGRAM_URL = "https://www.instagram.com/tvradhakrishna/";
const INSTAGRAM_CARD_IMAGE = "https://i.ibb.co/v4TFTYwW/insta-card.png";
const CONTACT_EMAIL = "ceo@oxyglobaltech.net";
const OXYFINSERV_LOGO =
  "https://i.ibb.co/Swx6RWXM/oxyfinservlogo-Cpr9-A3-NT.png";
const OFFICE_ADDRESS =
  "CC-02, Block-C, Indu Fortune Fields, The Annexe, Phase 13, KPHB, Hyderabad, Telangana - 500085";
const OFFICE_MAP_URL = "https://maps.app.goo.gl/523J7bUc7KNrsV1B8";
const HIDDEN_DRIVE_URL = "https://drive.google.com/file/d/1z9C1N2MPy16Nns33VjblcOShiJ6_yIvy/view?usp=sharing";

const brandPlatforms = [
  {
    logo: "https://i.ibb.co/s4CW2mg/l1.png",
    name: "OXYGLOBAL.TECH",
    href: "https://www.oxyglobal.tech/",
    desktopClass: "h-[42px] md:h-[48px] lg:h-[52px] xl:h-[58px]",
    mobileClass: "h-[66px]",
    whiteTile: true,
  },
  {
    logo: "https://i.ibb.co/B5xsVChY/l2.png",
    name: "OXYLOANS",
    href: "https://oxyloans.com/",
    desktopClass: "h-[46px] md:h-[52px] lg:h-[58px] xl:h-[64px]",
    mobileClass: "h-[72px]",
    whiteTile: false,
  },
  {
    logo: "https://i.ibb.co/k2snG0YW/l3.png",
    name: "OXYBRICKS.WORLD",
    href: "https://oxybricks.world/",
    desktopClass: "h-[38px] md:h-[44px] lg:h-[50px] xl:h-[56px]",
    mobileClass: "h-[64px]",
    whiteTile: true,
  },
  {
    logo: "https://i.ibb.co/PGYYDvL9/l4.png",
    name: "OXYGOLD.AI",
    href: "https://www.oxygold.ai/",
    desktopClass: "h-[34px] md:h-[40px] lg:h-[46px] xl:h-[50px]",
    mobileClass: "h-[60px]",
    whiteTile: false,
  },
  {
    logo: "https://i.ibb.co/B2NcQ7Nj/l5.png",
    name: "OXYCHAIN",
    href: "http://bmv.money:2750/",
    desktopClass: "h-[36px] md:h-[42px] lg:h-[48px] xl:h-[54px]",
    mobileClass: "h-[62px]",
    whiteTile: true,
  },
  {
    logo: OXYFINSERV_LOGO,
    name: "OXYFINSERV",
    href: "https://www.oxyfinserv.com/",
    desktopClass: "h-[36px] md:h-[42px] lg:h-[48px] xl:h-[54px]",
    mobileClass: "h-[62px]",
    whiteTile: true,
  },
];

const headerNavigation = [
  { id: "about", label: "About" },
  { id: "ecosystem", label: "Ecosystem" },
  { id: "vision", label: "Vision" },
];

const initiativeNavigation = [
  { href: OXY_FOUNDATION_PATH, label: "OXY Foundation" },
  { href: BRIDGITAL_NATION_PATH, label: "Bridgital Nation" },
];

const heroSocials = [
  { name: "LinkedIn", href: "https://www.linkedin.com/in/oxyradhakrishna/" },
  { name: "Instagram", href: INSTAGRAM_URL },
  { name: "Facebook", href: "https://www.facebook.com/share/1AcVZzEu7y/" },
  { name: "X", href: "https://x.com/RadhakrishnaIND" },
];

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
    description: "Explore RBI regulatory intelligence",
    href: "https://www.askoxy.ai/ai-store/rbi-master-directions-ai-store",
  },
  {
    name: "Insurance LLM",
    eyebrow: "InsurTech",
    description: "Explore AI for insurance",
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
    description: "Explore a BFSI AI use case",
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

const focus =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff8a62] focus-visible:ring-offset-2 focus-visible:ring-offset-white";

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

function LocationIcon() {
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
      <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="2.5" />
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

function SparkleIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      aria-hidden="true"
      className={className}
    >
      <path d="M12 2.8c.8 4.6 3 6.8 7.6 7.6-4.6.8-6.8 3-7.6 7.6-.8-4.6-3-6.8-7.6-7.6C9 9.6 11.2 7.4 12 2.8Z" />
      <path d="M19.2 15.7c.3 1.9 1.2 2.8 3 3.1-1.8.3-2.7 1.2-3 3-.4-1.8-1.3-2.7-3.1-3 1.8-.4 2.7-1.3 3.1-3.1Z" />
    </svg>
  );
}

type ExternalProps = {
  href: string;
  children: ReactNode;
  className?: string;
  ariaLabel?: string;
};

function External({ href, children, className = "", ariaLabel }: ExternalProps) {
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
      className={`mx-auto block h-auto max-h-[500px] w-full object-contain object-bottom ${className}`}
    />
  );
}

type CEOLandingPageProps = {
  portraitUrl?: string;
};

export default function CEOLandingPage({
  portraitUrl = HERO_IMAGE,
}: CEOLandingPageProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [headerVisible, setHeaderVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    lastScrollY.current = window.scrollY;

    const handleScroll = () => {
      const currentY = Math.max(window.scrollY, 0);
      const previousY = lastScrollY.current;
      const delta = currentY - previousY;

      // Always show the navigation close to the top of the page.
      if (currentY <= 28) {
        setHeaderVisible(true);
      } else if (delta > 8 && currentY > 120) {
        // Hide only after a deliberate downward scroll.
        setHeaderVisible(false);
        setMenuOpen(false);
      } else if (delta < -6) {
        // Bring it back as soon as the user starts scrolling upward.
        setHeaderVisible(true);
      }

      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function navigateTo(event: MouseEvent<HTMLAnchorElement>, id: string) {
    event.preventDefault();
    setMenuOpen(false);
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <div className="ceo-page min-h-screen overflow-x-clip text-[#171525] selection:bg-[#f6c2ae] selection:text-[#211b67]">
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-[80] focus:rounded-xl focus:bg-white focus:px-4 focus:py-3 focus:text-sm focus:font-bold"
      >
        Skip to content
      </a>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=Sora:wght@500;600;700;800&display=swap');

        #root {
          max-width: none;
          width: 100%;
          margin: 0;
          padding: 0;
          text-align: left;
        }

        html { scroll-behavior: smooth; }
        body { margin: 0; display: block; min-width: 320px; background: #241b67; }
        .ceo-page {
          font-family: 'Manrope', 'Inter', 'Segoe UI', Arial, ui-sans-serif, system-ui, sans-serif;
          text-align: left;
          background:
            linear-gradient(180deg,
              #211b67 0%,
              #3a2875 17%,
              #75477f 34%,
              #c98798 50%,
              #eee7f4 66%,
              #d8cee9 81%,
              #4a397c 100%
            );
        }
        .font-display { font-family: 'Sora', 'Aptos Display', 'Segoe UI Variable Display', 'Segoe UI', Arial, ui-sans-serif, system-ui, sans-serif; }

        .hero-kicker { color: rgba(255,255,255,.86); }
        .hero-copy { color: rgba(255,255,255,.90); }
        .hero-muted { color: rgba(255,255,255,.76); }
        .dark-heading { color: #201a35; }
        .dark-body { color: #565064; }
        .dark-muted { color: #766e84; }
        .vision-copy { color: rgba(255,255,255,.82); }
        .vision-muted { color: rgba(255,255,255,.70); }
        .logo-strip {
          background: #ffffff;
          border-top: 1px solid rgba(34, 27, 80, .07);
          border-bottom: 1px solid rgba(34, 27, 80, .07);
          box-shadow: 0 14px 34px rgba(33, 27, 103, .08);
        }

        .logo-link {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          min-width: 0;
        }

        .logo-link::after {
          content: "";
          position: absolute;
          left: 50%;
          bottom: 7px;
          width: 0;
          height: 2px;
          border-radius: 999px;
          background: linear-gradient(90deg, #30238d, #b14f8f, #ef8f68);
          transform: translateX(-50%);
          transition: width .25s ease;
        }

        .logo-link:hover::after { width: 36px; }

        .vision-panel {
          border: 1px solid rgba(255,255,255,.16);
          background:
            linear-gradient(135deg, rgba(31,24,92,.97) 0%, rgba(71,45,111,.96) 52%, rgba(111,66,116,.94) 100%);
          box-shadow: inset 0 1px 0 rgba(255,255,255,.13), 0 26px 65px rgba(33,23,78,.22);
          -webkit-backdrop-filter: blur(20px) saturate(130%);
          backdrop-filter: blur(20px) saturate(130%);
        }

        .vision-card {
          border: 1px solid rgba(255,255,255,.15);
          background: linear-gradient(145deg, rgba(255,255,255,.105), rgba(255,255,255,.065));
          box-shadow: inset 0 1px 0 rgba(255,255,255,.10);
          -webkit-backdrop-filter: blur(16px) saturate(120%);
          backdrop-filter: blur(16px) saturate(120%);
        }

        .liquid-glass {
          border: 1px solid rgba(255,255,255,.58);
          background: linear-gradient(145deg, rgba(255,255,255,.68), rgba(255,255,255,.36));
          box-shadow:
            inset 0 1px 0 rgba(255,255,255,.82),
            0 18px 50px rgba(41,29,91,.11);
          -webkit-backdrop-filter: blur(22px) saturate(135%);
          backdrop-filter: blur(22px) saturate(135%);
        }

        .liquid-glass-dark {
          border: 1px solid rgba(255,255,255,.18);
          background: linear-gradient(145deg, rgba(255,255,255,.13), rgba(255,255,255,.065));
          box-shadow:
            inset 0 1px 0 rgba(255,255,255,.19),
            0 18px 48px rgba(20,12,61,.15);
          -webkit-backdrop-filter: blur(20px) saturate(130%);
          backdrop-filter: blur(20px) saturate(130%);
        }

        .liquid-header {
          border: 1px solid rgba(255,255,255,.92);
          background:
            linear-gradient(135deg, rgba(255,255,255,.97) 0%, rgba(255,255,255,.88) 54%, rgba(249,247,255,.92) 100%);
          box-shadow:
            inset 0 1px 0 rgba(255,255,255,1),
            inset 0 -1px 0 rgba(48,35,141,.035),
            0 18px 48px rgba(31,22,77,.14);
          -webkit-backdrop-filter: blur(28px) saturate(155%);
          backdrop-filter: blur(28px) saturate(155%);
        }

        .header-logo-zone {
          height: 100%;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          background: linear-gradient(90deg, #ffffff 0%, rgba(255,255,255,.94) 78%, rgba(255,255,255,.72) 100%);
          border-right: 1px solid rgba(48,35,141,.08);
          box-shadow: 10px 0 28px rgba(33,27,103,.035);
        }

        .header-nav-link {
          color: #5d5670;
          transition: color .2s ease, background .2s ease, transform .2s ease;
        }
        .header-nav-link:hover {
          color: #30238d;
          background: rgba(48,35,141,.055);
          transform: translateY(-1px);
        }

        .header-initiative {
          border: 1px solid rgba(48,35,141,.10);
          background: linear-gradient(145deg, rgba(255,255,255,.98), rgba(247,244,255,.90));
          box-shadow: inset 0 1px 0 rgba(255,255,255,.96), 0 6px 18px rgba(48,35,141,.06);
        }
        .header-initiative:hover {
          border-color: rgba(48,35,141,.18);
          background: #ffffff;
          box-shadow: inset 0 1px 0 #fff, 0 10px 24px rgba(48,35,141,.10);
        }

        @media (max-width: 639px) {
          .header-logo-zone {
            padding-left: 14px;
            padding-right: 14px;
          }
        }

        .glass-card {
          border: 1px solid rgba(255,255,255,.66);
          background: linear-gradient(145deg, rgba(255,255,255,.70), rgba(255,255,255,.42));
          box-shadow:
            inset 0 1px 0 rgba(255,255,255,.86),
            0 16px 42px rgba(58,42,104,.10);
          -webkit-backdrop-filter: blur(20px) saturate(130%);
          backdrop-filter: blur(20px) saturate(130%);
        }

        .glass-dark {
          border: 1px solid rgba(255,255,255,.18);
          background: linear-gradient(145deg, rgba(255,255,255,.13), rgba(255,255,255,.07));
          box-shadow: inset 0 1px 0 rgba(255,255,255,.15);
          -webkit-backdrop-filter: blur(18px) saturate(125%);
          backdrop-filter: blur(18px) saturate(125%);
        }

        @media (max-width: 640px) {
          .liquid-glass, .liquid-glass-dark, .liquid-header, .glass-card, .glass-dark, .vision-panel, .vision-card {
            -webkit-backdrop-filter: blur(14px) saturate(120%);
            backdrop-filter: blur(14px) saturate(120%);
          }
          .liquid-glass, .glass-card {
            background: linear-gradient(145deg, rgba(255,255,255,.76), rgba(255,255,255,.48));
          }
        }

        @keyframes logo-marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }

        .logo-marquee {
          display: flex;
          width: max-content;
          animation: logo-marquee 22s linear infinite;
          will-change: transform;
          transform: translate3d(0, 0, 0);
        }

        .logo-marquee:hover { animation-play-state: paused; }


        @media (prefers-reduced-motion: reduce) {
          * { scroll-behavior: auto !important; }
          .logo-marquee { animation: none !important; }
        }
      `}</style>

      <header
        className={`fixed inset-x-0 top-0 z-50 px-3 pt-3 transition-all duration-300 ease-out sm:px-5 sm:pt-4 ${
          headerVisible || menuOpen
            ? "translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-[120%] opacity-0"
        }`}
      >
        <div className="liquid-header mx-auto flex h-[68px] max-w-7xl items-center justify-between overflow-hidden rounded-[24px] pr-2.5 sm:h-[70px] sm:pr-3 lg:pr-4">
          <a
            href="#about"
            onClick={(event) => navigateTo(event, "about")}
            aria-label="Go to introduction"
            className={`header-logo-zone min-w-0 px-4 sm:px-5 lg:px-6 ${focus}`}
          >
            <img
              src={TVRK_LOGO}
              alt="TV Radhakrishna"
              width={220}
              height={56}
              loading="eager"
              decoding="async"
              className="h-[27px] w-auto max-w-[142px] object-contain object-left sm:h-[30px] sm:max-w-[170px] xl:h-[31px] xl:max-w-[180px]"
            />
          </a>

          <div className="hidden min-w-0 items-center gap-1 xl:flex">
            <nav aria-label="Main navigation" className="flex items-center gap-1">
              {headerNavigation.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(event) => navigateTo(event, item.id)}
                  className={`header-nav-link rounded-full px-3 py-2.5 text-[12px] font-extrabold ${focus}`}
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <span className="mx-1 h-6 w-px bg-[#30238d]/10" aria-hidden="true" />

            <div className="flex items-center gap-1.5">
              {initiativeNavigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={`header-initiative inline-flex h-10 items-center rounded-full px-3.5 text-[11px] font-extrabold transition duration-200 hover:-translate-y-0.5 ${focus}`}
                >
                  {item.label === "OXY Foundation" ? (
                    <span className="whitespace-nowrap">
                      <span className="text-[#3B82C4]">OXY</span>{" "}
                      <span className="text-[#51B85B]">Foundation</span>
                    </span>
                  ) : (
                    <span className="whitespace-nowrap text-[#3478ad]">Bridgital Nation</span>
                  )}
                </a>
              ))}
            </div>

            <External
              href={CLONE_URL}
              ariaLabel="Talk to Radhakrishna AI"
              className="group ml-1 inline-flex h-10 items-center gap-2 rounded-full bg-[#211b67] px-4 text-[12px] font-extrabold text-white shadow-[0_9px_24px_rgba(33,27,103,.20)] transition hover:-translate-y-0.5 hover:bg-[#30238d]"
            >
              Talk to my AI
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </External>
          </div>

          <div className="flex items-center gap-2 xl:hidden">
            <External
              href={CLONE_URL}
              ariaLabel="Talk to Radhakrishna AI"
              className="hidden h-10 items-center gap-1.5 rounded-full bg-[#211b67] px-3.5 text-[11px] font-extrabold text-white shadow-[0_8px_20px_rgba(33,27,103,.18)] transition hover:bg-[#30238d] sm:inline-flex"
            >
              Talk to AI
              <ArrowUpRight className="h-3.5 w-3.5" />
            </External>

            <button
              type="button"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              onClick={() => setMenuOpen((value) => !value)}
              className={`grid h-11 w-11 place-items-center rounded-[15px] border border-[#30238d]/10 bg-white/85 text-[#30238d] shadow-[0_8px_20px_rgba(48,35,141,.08)] transition hover:bg-white ${focus}`}
            >
              <span className="relative block h-4 w-5">
                <span
                  className={`absolute left-0 top-0 h-0.5 w-5 rounded-full bg-current transition ${
                    menuOpen ? "translate-y-[7px] rotate-45" : ""
                  }`}
                />
                <span
                  className={`absolute left-0 top-[7px] h-0.5 w-5 rounded-full bg-current transition ${
                    menuOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`absolute left-0 top-[14px] h-0.5 w-5 rounded-full bg-current transition ${
                    menuOpen ? "-translate-y-[7px] -rotate-45" : ""
                  }`}
                />
              </span>
            </button>
          </div>
        </div>

        {menuOpen && (
          <nav
            id="mobile-menu"
            aria-label="Mobile navigation"
            className="liquid-header mx-auto mt-2 grid max-w-7xl gap-1.5 rounded-[22px] p-3 xl:hidden"
          >
            {headerNavigation.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(event) => navigateTo(event, item.id)}
                className={`rounded-2xl px-4 py-3 text-sm font-extrabold text-[#514a67] transition hover:bg-[#f5f2fb] hover:text-[#30238d] ${focus}`}
              >
                {item.label}
              </a>
            ))}

            <div className="my-1 h-px bg-[#30238d]/10" />

            {initiativeNavigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className={`header-initiative flex min-h-12 items-center justify-between rounded-2xl px-4 py-3 text-sm font-extrabold ${focus}`}
              >
                {item.label === "OXY Foundation" ? (
                  <span>
                    <span className="text-[#3B82C4]">OXY</span>{" "}
                    <span className="text-[#51B85B]">Foundation</span>
                  </span>
                ) : (
                  <span className="text-[#3478ad]">Bridgital Nation</span>
                )}
                <ArrowUpRight className="h-4 w-4 text-slate-400" />
              </a>
            ))}

            <External
              href={CLONE_URL}
              className="mt-1 inline-flex min-h-12 items-center justify-between rounded-2xl bg-[#211b67] px-4 py-3 text-sm font-extrabold text-white"
            >
              Talk to my AI
              <ArrowUpRight className="h-4 w-4" />
            </External>
          </nav>
        )}
      </header>

      <main>
        <section
          id="about"
          aria-labelledby="hero-heading"
          className="relative overflow-hidden pt-[90px] text-white sm:pt-[100px]"
        >
          <div className="mx-auto grid max-w-7xl items-center gap-6 px-4 pb-7 pt-6 sm:px-8 sm:pb-9 sm:pt-8 lg:grid-cols-[1.08fr_.92fr] lg:gap-10 lg:pb-10 lg:pt-9 xl:gap-12">
            <div className="min-w-0">
              <p className="text-[9px] font-extrabold uppercase tracking-[0.18em] hero-kicker sm:text-[11px]">
                FinTech · BFSI · Artificial Intelligence
              </p>

              <h1
                id="hero-heading"
                className="font-display mt-3.5 max-w-[700px] text-[clamp(2.25rem,5.1vw,4.45rem)] font-extrabold leading-[0.96] tracking-[-0.055em]"
              >
                Radhakrishna
                <span className="block">Thatavarti</span>
              </h1>

              <p className="mt-3.5 text-[13px] font-extrabold tracking-wide text-white sm:text-[15px]">
                CEO &amp; Co-Founder
              </p>

              <p className="mt-3.5 max-w-[610px] text-[14px] font-medium leading-6 hero-copy sm:text-[15px] sm:leading-7">
                Connecting finance, technology, and AI to create practical opportunities for Bharat.
              </p>

              <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-3">
                <External
                  href={CLONE_URL}
                  ariaLabel="Talk to Radhakrishna AI"
                  className="group inline-flex min-h-[46px] items-center justify-center gap-2.5 rounded-full bg-white px-5 py-2.5 text-[13px] font-extrabold text-[#211b67] shadow-[0_10px_24px_rgba(16,10,55,.16)] transition hover:-translate-y-0.5 hover:bg-[#fff8f4]"
                >
                  Talk to my AI
                  <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </External>

                <a
                  href="#ecosystem"
                  onClick={(event) => navigateTo(event, "ecosystem")}
                  className={`group inline-flex min-h-[44px] items-center gap-2 text-[13px] font-extrabold text-white/[0.92] transition hover:text-white ${focus}`}
                >
                  Explore ecosystem
                  <span className="text-base transition-transform group-hover:translate-y-0.5" aria-hidden="true">↓</span>
                </a>
              </div>

              <div className="mt-5 max-w-[760px] border-t border-white/[0.14] pt-4">
                <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-5 sm:gap-y-3">
                  <a
                    href={OFFICE_MAP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Open office address in Google Maps"
                    className={`group flex min-w-0 items-start gap-2.5 text-white transition hover:text-[#ffd2bf] sm:max-w-[520px] ${focus}`}
                  >
                    <span className="mt-0.5 shrink-0 text-[#ffd2bf]">
                      <LocationIcon />
                    </span>
                    <span className="min-w-0 text-[11px] font-semibold leading-[1.55] text-white/[0.84] sm:text-[12px]">
                      <span className="mr-1.5 font-extrabold text-white">Office:</span>
                      {OFFICE_ADDRESS}
                    </span>
                  </a>

                  <span className="hidden h-5 w-px bg-white/[0.16] lg:block" aria-hidden="true" />

                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    aria-label={`Email ${CONTACT_EMAIL}`}
                    className={`group flex min-w-0 items-center gap-2.5 text-white transition hover:text-[#ffd2bf] ${focus}`}
                  >
                    <span className="shrink-0 text-[#ffd2bf]">
                      <MailIcon />
                    </span>
                    <span className="break-all text-[11px] font-extrabold sm:text-[12px]">
                      {CONTACT_EMAIL}
                    </span>
                  </a>
                </div>

                <div className="mt-4 flex flex-wrap items-center gap-2.5">
                  <span className="mr-1 text-[9px] font-extrabold uppercase tracking-[0.16em] text-white/[0.64] sm:text-[10px]">
                    Connect
                  </span>
                  {heroSocials.map((item) => (
                    <External
                      key={item.name}
                      href={item.href}
                      ariaLabel={`Visit ${item.name} profile`}
                      className="grid h-9 w-9 place-items-center rounded-full border border-white/[0.16] bg-white/[0.08] text-white transition duration-200 hover:-translate-y-0.5 hover:border-white/[0.32] hover:bg-white/[0.15] sm:h-10 sm:w-10"
                    >
                      <SocialIcon name={item.name} className="h-[17px] w-[17px]" />
                      <span className="sr-only">{item.name}</span>
                    </External>
                  ))}
                </div>
              </div>
            </div>

            <Portrait
              key={portraitUrl}
              src={portraitUrl}
              className="max-w-[345px] self-end sm:max-w-[385px] lg:max-w-[410px] lg:justify-self-end xl:max-w-[435px]"
            />
          </div>
        </section>

        <section
          id="platforms"
          aria-label="OXY Group Companies"
          className="relative z-10 scroll-mt-24 py-5 sm:py-7 lg:py-8"
        >
          <div className="logo-strip w-full overflow-hidden py-3 sm:py-4 lg:py-5">
            {/* Tablet / Desktop: one clean white strip, logos only. */}
            <div className="mx-auto hidden max-w-[1500px] grid-cols-3 items-center gap-x-5 gap-y-3 px-5 sm:grid md:px-7 lg:grid-cols-6 lg:gap-x-7 lg:px-10 xl:gap-x-10">
              {brandPlatforms.map((item) => (
                <External
                  key={item.name}
                  href={item.href}
                  ariaLabel={`Visit ${item.name}`}
                  className="logo-link group min-h-[86px] px-2 py-3 lg:min-h-[92px]"
                >
                  <img
                    src={item.logo}
                    alt={item.name}
                    loading="eager"
                    decoding="async"
                    className={`${item.desktopClass} w-auto max-w-full object-contain transition-transform duration-300 group-hover:scale-[1.04]`}
                  />
                </External>
              ))}
            </div>

            {/* Mobile: seamless auto-scrolling logo strip, no headings or cards. */}
            <div className="overflow-hidden sm:hidden">
              <div className="logo-marquee items-center">
                {[...brandPlatforms, ...brandPlatforms].map((item, index) => (
                  <External
                    key={`${item.name}-${index}`}
                    href={item.href}
                    ariaLabel={`Visit ${item.name}`}
                    className="logo-link flex h-[78px] w-[168px] shrink-0 px-4 py-2"
                  >
                    <img
                      src={item.logo}
                      alt={item.name}
                      loading="eager"
                      decoding="async"
                      className={`${item.mobileClass} max-h-[52px] w-auto max-w-[92%] object-contain`}
                    />
                  </External>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          id="instagram"
          aria-labelledby="instagram-heading"
          className="scroll-mt-24 px-4 py-8 sm:px-8 sm:py-12 lg:py-14"
        >
          <div className="mx-auto max-w-7xl">
            <div className="liquid-glass overflow-hidden rounded-[30px] sm:rounded-[34px]">
              <div className="grid lg:grid-cols-[.96fr_1.04fr]">
                <External
                  href={INSTAGRAM_URL}
                  ariaLabel="Open @tvradhakrishna on Instagram"
                  className="group relative flex min-h-[280px] items-center justify-center overflow-hidden bg-white/[0.18] sm:min-h-[380px] lg:min-h-[470px]"
                >
                  <img
                    src={INSTAGRAM_CARD_IMAGE}
                    alt="@tvradhakrishna Instagram card"
                    loading="lazy"
                    decoding="async"
                    className="h-full max-h-[460px] w-full object-contain p-4 transition duration-500 ease-out group-hover:scale-[1.025] sm:p-7 lg:p-9"
                  />
                  <span className="pointer-events-none absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full border border-white/[0.75] bg-white/[0.68] text-[#30238d] shadow-[0_8px_24px_rgba(48,35,141,.14)] backdrop-blur-md transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 sm:right-6 sm:top-6">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </External>

                <div className="flex min-w-0 flex-col justify-center p-6 sm:p-9 lg:p-12 xl:p-14">
                  <div className="flex items-center gap-2.5">
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-[12px] bg-[linear-gradient(145deg,#833ab4,#e1306c,#f77737)] text-white shadow-[0_8px_20px_rgba(225,48,108,.18)]">
                      <SocialIcon name="Instagram" className="h-4 w-4" />
                    </span>
                    <p className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#7a356f] sm:text-xs">
                      Instagram · @tvradhakrishna
                    </p>
                  </div>

                  <h2
                    id="instagram-heading"
                    className="font-display mt-4 max-w-xl text-[2rem] font-bold leading-[1.08] tracking-[-0.045em] dark-heading sm:text-[2.6rem] lg:text-[3rem]"
                  >
                    All the latest updates, in one place.
                  </h2>

                  <p className="mt-4 max-w-xl text-sm font-medium leading-7 dark-body sm:text-[15px] sm:leading-7">
                    For the latest information, announcements, business updates, AI insights, fintech conversations, and ecosystem activity, follow <span className="font-extrabold text-[#2b2150]">@tvradhakrishna</span> on Instagram.
                  </p>

                  <p className="mt-4 inline-flex items-center gap-2 text-[12px] font-extrabold text-[#704a86] sm:text-[13px]">
                    Click the Instagram card to open the latest posts
                    <ArrowUpRight className="h-4 w-4" />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="ecosystem"
          aria-labelledby="ecosystem-heading"
          className="scroll-mt-24 px-4 py-10 sm:px-8 sm:py-14 lg:py-16"
        >
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-5 lg:grid-cols-[.75fr_1.25fr] lg:items-end">
              <div>
                <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#6d4b90] sm:text-xs">
                  Our ecosystem
                </p>
                <h2
                  id="ecosystem-heading"
                  className="font-display mt-3 max-w-xl text-[2rem] font-bold leading-[1.08] tracking-[-0.045em] dark-heading sm:text-[2.75rem]"
                >
                  Explore AI, lending &amp; financial platforms.
                </h2>
              </div>
              <p className="max-w-2xl text-sm font-medium leading-7 dark-body lg:justify-self-end lg:text-right sm:text-[15px]">
                Discover connected work across lending, financial services, regulatory intelligence, insurance, and AI.
              </p>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {ecosystemPlatforms.map((item, index) => (
                <External
                  key={item.href}
                  href={item.href}
                  className="glass-card group flex min-h-[235px] min-w-0 flex-col rounded-[26px] p-5 transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(47,35,111,.13)] sm:p-6"
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
                    <div className="logo-white-tile mt-7 flex h-14 w-fit items-center rounded-[16px] px-3">
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

                  <p className="mt-3 text-sm font-medium leading-6 dark-body">
                    {item.description}
                  </p>

                  <div className="mt-auto flex items-end justify-between gap-3 pt-7">
                    <span className="text-xs font-extrabold text-[#4f3971]">Explore platform</span>
                    <span className="font-display text-[11px] font-bold dark-muted">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                </External>
              ))}
            </div>
          </div>
        </section>

        <section
          id="vision"
          aria-labelledby="vision-heading"
          className="scroll-mt-24 px-4 pb-12 pt-8 text-white sm:px-8 sm:pb-16 sm:pt-10 lg:pb-20 lg:pt-12"
        >
          <div className="vision-panel mx-auto max-w-7xl overflow-hidden rounded-[30px] p-5 sm:rounded-[34px] sm:p-8 lg:p-10 xl:p-12">
            <div className="grid gap-9 lg:grid-cols-[.88fr_1.12fr] lg:items-center lg:gap-14 xl:gap-16">
              <div className="min-w-0">
                <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#e6d8f6] sm:text-xs">
                  Vision &amp; AI
                </p>
                <h2
                  id="vision-heading"
                  className="font-display mt-3 max-w-xl text-[clamp(2.15rem,6vw,3.35rem)] font-extrabold leading-[1.04] tracking-[-0.05em] text-white"
                >
                  Making AI useful.
                  <span className="mt-1 block text-[#ffc09f]">Creating opportunities.</span>
                </h2>
                <p className="mt-5 max-w-xl text-sm font-medium leading-7 text-white/[0.84] sm:text-[15px] sm:leading-7">
                  Our ecosystem brings together finance, technology, and artificial intelligence. The focus is simple: make information easier to understand, simplify everyday work, and help people explore new opportunities.
                </p>
                <p className="mt-4 max-w-xl text-sm font-medium leading-7 text-white/[0.72] sm:text-[15px] sm:leading-7">
                  Across connected platforms, we are exploring practical ways to apply AI to banking, financial services, insurance, regulation, and business workflows.
                </p>
                <External
                  href="https://www.askoxy.ai/"
                  className="mt-7 inline-flex min-h-[52px] items-center gap-2 rounded-full bg-white px-5 text-sm font-extrabold text-[#211b67] shadow-[0_14px_36px_rgba(0,0,0,.20)] transition hover:-translate-y-0.5 hover:bg-[#fff8f4]"
                >
                  Explore the AI ecosystem
                  <ArrowUpRight />
                </External>
              </div>

              <div className="grid gap-3.5 sm:grid-cols-2 lg:grid-cols-1">
                {[
                  {
                    number: "01",
                    title: "AI for everyday work",
                    text: "Explore how AI can help answer questions, organize information, and support everyday business tasks.",
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
                    className="vision-card group flex items-start gap-4 rounded-[22px] p-[18px] transition duration-300 hover:-translate-y-0.5 hover:bg-white/[0.13] sm:p-5 lg:p-6"
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
      </main>

      <footer className="border-t border-white/[0.12] bg-transparent px-4 py-8 text-white sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
          <div>
            <p className="font-display text-sm font-bold text-white">Radhakrishna T</p>
            <p className="mt-1 text-[11px] font-semibold text-white/[0.78]">CEO &amp; Co-Founder</p>
          </div>
          <div className="flex items-center justify-center gap-1 sm:justify-end">
            <p className="text-[11px] font-medium leading-5 text-white/[0.72]">
              © {new Date().getFullYear()} Radhakrishna T. All rights reserved.
            </p>

            {/* Intentionally subtle hidden-style shortcut to the shared Drive file. */}
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
