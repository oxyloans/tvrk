import React, { useEffect, useRef, useState } from "react";
import InitiativeHeader from "./InitiativeHeader";

const BRAND_BLUE = "#3B82C4";
const BRAND_GREEN = "#51B85B";

type VideoLanguage = "English" | "Telugu";

type IconProps = { className?: string };

const videos: Record<
  VideoLanguage,
  { label: string; title: string; embed: string }
> = {
  English: {
    label: "English",
    title: "Know more about climate disaster — English",
    embed: "https://www.youtube.com/embed/5VHO28o0-0I?start=65&rel=0",
  },
  Telugu: {
    label: "Telugu",
    title: "Know more about climate disaster — Telugu",
    embed: "https://www.youtube.com/embed/uHl9x79ZBMg?rel=0",
  },
};

const FOUNDATION_IMAGES = {
  donation: "https://i.ibb.co/HpPXmYkZ/foundation.png",
  greenElectionsLead: "https://i.ibb.co/hFNcjP1T/RADHA.png",
  oxy19Recognition: "https://i.ibb.co/YF888ZKv/RANA.png",
  climateMission: [
    {
      src: "https://i.ibb.co/bg7C7PSC/C4.jpg",
      alt: "OXY Foundation climate mission visual",
    },
    {
      src: "https://i.ibb.co/tTnG5J85/DS3.jpg",
      alt: "OXY Foundation Mission 51 Billions to Zero visual",
    },
    {
      src: "https://i.ibb.co/kVS6xccv/DS4.jpg",
      alt: "OXY Foundation climate awareness visual",
    },
    {
      src: "https://i.ibb.co/Kcrqbqbv/DS5.jpg",
      alt: "OXY Foundation climate awareness visual",
    },
    {
      src: "https://i.ibb.co/8DSZwNDH/DS72.jpg",
      alt: "OXY Foundation climate awareness visual",
    },
    {
      src: "https://i.ibb.co/Ng6vfshj/DS1.jpg",
      alt: "OXY Foundation climate awareness visual",
    },
  ],
};

const DONATION_DETAILS = {
  bank: "Axis Bank",
  accountName: "OXY PEOPLE FOUNDATION",
  accountNumber: "923020017666965",
  ifsc: "UTIB0000193",
  branch: "Kukatpally Branch",
} as const;

const missionCards = [
  {
    number: "01",
    title: "Climate education",
    text: "Build awareness through accessible learning, public education and simple climate communication.",
  },
  {
    number: "02",
    title: "Green technology",
    text: "Support practical ideas and initiatives focused on reducing environmental impact.",
  },
  {
    number: "03",
    title: "Community awareness",
    text: "Help communities understand climate risks, sustainability choices and long-term environmental responsibility.",
  },
];

const startupMetrics = [
  {
    value: "100 Days",
    label: "program journey described in the supplied legacy material",
  },
  { value: "500", label: "companies referenced as the pitching-stage target" },
  { value: "1,000", label: "angel network referenced by the legacy page" },
  { value: "500K+", label: "potential buyers referenced by the legacy page" },
];

const startupEcosystem = [
  {
    number: "01",
    title: "Flexible funding paths",
    text: "The supplied program material describes both equity and debt funding routes for participating startups.",
  },
  {
    number: "02",
    title: "Market visibility",
    text: "The legacy program combines pitching with branding, outreach and sales-support ideas intended to improve visibility.",
  },
  {
    number: "03",
    title: "Investor network",
    text: "The source references angel-investor access for potential funding conversations, mentorship and strategic connections.",
  },
  {
    number: "04",
    title: "Buyer access",
    text: "The supplied material also describes potential-buyer reach as part of the market-access approach.",
  },
];

const startupEligibility = [
  "Registered legal entity",
  "Demonstrable product, technology or software solution",
  "At least two active co-founders",
  "Physical presence for the pitching session",
];

const startupSectors = [
  [
    "01",
    "Technology & Innovation",
    "Hardware, IoT, wearables, smart devices and consumer electronics",
  ],
  [
    "02",
    "Manufacturing & Industrial",
    "Machinery, 3D printing, automation and sustainable products",
  ],
  [
    "03",
    "Consumer Goods & Retail",
    "Consumer products, e-commerce, D2C brands, retail technology and packaging",
  ],
  [
    "04",
    "Healthcare & Medical Devices",
    "Medical technology, monitoring devices, assistive technology and telemedicine",
  ],
  [
    "05",
    "Food & Beverage",
    "Food technology, novel products, sustainable packaging, delivery and agri-tech",
  ],
  [
    "06",
    "Fashion & Apparel",
    "Fashion technology, apparel innovation, sustainable fashion and customization",
  ],
  [
    "07",
    "Home & Lifestyle",
    "Home improvement, smart-home products, wellness and household innovation",
  ],
  [
    "08",
    "Automotive & Mobility",
    "EVs, urban mobility, connected vehicles and transport innovation",
  ],
  [
    "09",
    "Environmental & CleanTech",
    "Renewable energy, waste management, water purification and green products",
  ],
  [
    "10",
    "Construction & Real Estate",
    "Construction technology, building materials and real-estate technology",
  ],
] as const;

const greenElectionPoints = [
  {
    "title": "Cleaner campaigning",
    "text": "Use digital outreach and reduce plastic waste."
  },
  {
    "title": "Renewable energy",
    "text": "Power election facilities with clean energy where practical."
  },
  {
    "title": "Waste management",
    "text": "Reduce, collect, and recycle election materials."
  },
  {
    "title": "Sustainable travel",
    "text": "Encourage public transport and electric vehicles."
  },
  {
    "title": "Public awareness",
    "text": "Include environmental education in voter information."
  },
  {
    "title": "Efficient facilities",
    "text": "Use energy-efficient lighting and conserve water."
  },
  {
    "title": "Tree planting",
    "text": "Support tree planting and reforestation initiatives."
  },
  {
    "title": "Responsible materials",
    "text": "Choose recycled and biodegradable materials."
  },
  {
    "title": "Impact reporting",
    "text": "Monitor and report the environmental impact of activities."
  },
  {
    "title": "Policy discussions",
    "text": "Include sustainability in public-policy conversations."
  }
];

const disclosureRows = [
  {
    title: "Mandatory disclosure",
    points: [
      "The proposal calls for disclosure of fossil-fuel consumption and greenhouse-gas emissions associated with products.",
      "It also proposes making emissions information visible on packaging and company websites.",
    ],
  },
  {
    title: "Industry accountability",
    points: [
      "The proposal suggests compliance and oversight mechanisms intended to improve reporting accuracy.",
      "It also calls for standardized approaches that support data integrity.",
    ],
  },
  {
    title: "Consumer awareness",
    points: [
      "Educate consumers about the environmental impact of purchases.",
      "Make emissions information easier to access and compare.",
    ],
  },
  {
    title: "Alternative solutions",
    points: [
      "Encourage research and development of lower-emission alternatives.",
      "Support organizations adopting more environmentally focused practices.",
    ],
  },
  {
    title: "Transportation sector",
    points: [
      "Extend carbon-footprint disclosure concepts to transportation services.",
      "Educate consumers about emissions associated with different travel choices.",
    ],
  },
];

const implementationSteps = [
  [
    "01",
    "Legislation",
    "Develop a framework for emissions disclosure and enforcement mechanisms.",
  ],
  [
    "02",
    "Collaboration",
    "Work with stakeholders on reporting methodologies and data collection.",
  ],
  [
    "03",
    "Education",
    "Run educational initiatives around emissions and sustainable alternatives.",
  ],
  [
    "04",
    "Monitoring",
    "Track implementation and evaluate effectiveness over time.",
  ],
] as const;

function ArrowIcon({ direction }: { direction: "left" | "right" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="h-4 w-4"
      aria-hidden="true"
    >
      {direction === "left" ? (
        <path d="m15 18-6-6 6-6" />
      ) : (
        <path d="m9 18 6-6-6-6" />
      )}
    </svg>
  );
}

function LeafIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className={className}
      aria-hidden="true"
    >
      <path d="M20 4c-7 0-12 2.5-14.5 6.5C3 14.5 5 19 9 20c4.5 1.2 9-2.5 11-16Z" />
      <path d="M5 19c3-4 6-7 11-10" />
    </svg>
  );
}

function ChartIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className={className}
      aria-hidden="true"
    >
      <path d="M4 20V10" />
      <path d="M10 20V4" />
      <path d="M16 20v-7" />
      <path d="M22 20H2" />
    </svg>
  );
}

function CopyIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className={className}
      aria-hidden="true"
    >
      <rect x="9" y="9" width="11" height="11" rx="2" />
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </svg>
  );
}

function CopyValueButton({ value, label }: { value: string; label: string }) {
  const [status, setStatus] = useState<"idle" | "copied" | "error">("idle");
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(() => () => { if (timer.current) clearTimeout(timer.current); }, []);
  const copyValue = async () => {
    if (timer.current) clearTimeout(timer.current);
    try {
      await navigator.clipboard.writeText(value);
      setStatus("copied");
    } catch {
      setStatus("error");
    }
    timer.current = setTimeout(() => setStatus("idle"), 2400);
  };
  return (
    <div className="flex shrink-0 flex-col items-end gap-1">
      <button
        type="button"
        onClick={copyValue}
        aria-label={`Copy ${label}`}
        className="inline-flex min-h-11 items-center justify-center gap-1.5 rounded-xl border border-[#3B82C4]/20 bg-white px-2.5 text-xs font-bold text-[#286693] shadow-sm transition hover:bg-[#EDF6FC] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3B82C4] focus-visible:ring-offset-2"
      >
        <CopyIcon />
        {status === "copied" ? "Copied" : "Copy"}
      </button>
      <span role="status" aria-live="polite" className={status === "error" ? "max-w-24 text-right text-[10px] leading-4 text-rose-700" : "sr-only"}>
        {status === "copied" ? `${label} copied` : status === "error" ? "Unable to copy. Select the value manually." : ""}
      </span>
    </div>
  );
}

function OxyFoundationWordmark({ className = "" }: { className?: string }) {
  return (
    <span
      className={`inline-flex max-w-full flex-wrap items-baseline font-black tracking-[-0.04em] ${className}`}
    >
      <span style={{ color: BRAND_BLUE }}>OXY</span>
      <span style={{ color: BRAND_GREEN }}>FOUNDATION</span>
    </span>
  );
}

function SectionHeading({
  eyebrow,
  title,
  copy,
  align = "center",
}: {
  eyebrow: string;
  title: string;
  copy?: string;
  align?: "center" | "left";
}) {
  return (
    <div
      className={`${align === "center" ? "mx-auto text-center" : ""} max-w-3xl`}
    >
      <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#3B82C4]">
        {eyebrow}
      </p>
      <h2 className="mt-2 text-2xl font-black tracking-[-0.035em] text-slate-950 sm:text-3xl lg:text-[2.35rem]">
        {title}
      </h2>
      {copy && (
        <p className="mt-3 text-sm font-medium leading-6 text-slate-600 sm:text-base sm:leading-7">
          {copy}
        </p>
      )}
    </div>
  );
}

function SafeImage({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      className={className}
      onError={(event) => {
        event.currentTarget.style.display = "none";
      }}
    />
  );
}

export default function OxyFoundationPage() {
  const [language, setLanguage] = useState<VideoLanguage>("English");
  const [activeClimateImage, setActiveClimateImage] = useState(0);
  const activeVideo = videos[language];
  const activeImage = FOUNDATION_IMAGES.climateMission[activeClimateImage];

  const moveGallery = (direction: "left" | "right") => {
    setActiveClimateImage((current) => {
      const total = FOUNDATION_IMAGES.climateMission.length;
      return direction === "left"
        ? (current - 1 + total) % total
        : (current + 1) % total;
    });
  };

  return (
    <div className="oxy-foundation min-h-screen w-full min-w-0 bg-white text-slate-900">
      <InitiativeHeader active="foundation" />

      <style>{`
        .oxy-foundation, .oxy-foundation * { box-sizing: border-box; }
        .oxy-foundation main { min-width: 0; }
        .oxy-foundation main .grid > *, .oxy-foundation main .flex > * { min-width: 0; }
        .oxy-foundation main :is(h1,h2,h3,h4,p,dd) { overflow-wrap: anywhere; }
        .oxy-foundation main :is(img,iframe) { max-width: 100%; }

        /* Local responsive container so this page keeps its side spacing even when loaded directly. */
        .oxy-foundation .tvrk-container {
          box-sizing: border-box;
          width: calc(100% - 32px) !important;
          max-width: 1720px !important;
          margin-left: auto !important;
          margin-right: auto !important;
          min-width: 0;
        }
        .oxy-foundation .tvrk-container > * { min-width: 0; }

        @media (min-width: 640px) {
          .oxy-foundation .tvrk-container { width: calc(100% - 48px) !important; }
        }
        @media (min-width: 1024px) {
          .oxy-foundation .tvrk-container { width: calc(100% - 64px) !important; }
        }
        @media (min-width: 1280px) {
          .oxy-foundation .tvrk-container { width: calc(100% - 96px) !important; }
        }
        .oxy-foundation main article {
          background-image: linear-gradient(135deg,rgba(255,255,255,.96),rgba(242,248,252,.6) 65%,rgba(239,249,241,.65));
          box-shadow: inset 0 1px 0 #fff, 0 8px 28px rgba(31,73,104,.045);
        }
        .oxy-foundation main button:focus-visible, .oxy-foundation main a:focus-visible {
          outline: 2px solid #3B82C4; outline-offset: 3px;
        }
        .oxy-foundation main button { min-height: 44px; }
        .oxy-foundation #donate {
          background: radial-gradient(ellipse at 10% 30%,rgba(59,130,196,.09),transparent 55%),
            radial-gradient(ellipse at 95% 70%,rgba(81,184,91,.09),transparent 55%), #f8fbfd;
        }
        .oxy-foundation .donation-card {
          background: linear-gradient(125deg,rgba(255,255,255,.98),rgba(255,255,255,.85) 55%,rgba(239,249,245,.9));
          border: 1px solid rgba(184,210,224,.65);
          box-shadow: inset 0 2px 0 #fff, 0 16px 48px rgba(39,89,125,.08);
        }
        @media (max-width: 639px) {
          .oxy-foundation main > section { padding-top: 32px; padding-bottom: 32px; }
          .oxy-foundation main > section:first-child { padding: 0; }
        }
        @media (prefers-reduced-motion: reduce) {
          .oxy-foundation *, .oxy-foundation *::before, .oxy-foundation *::after {
            transition: none !important; animation: none !important; scroll-behavior: auto !important;
          }
        }
      `}</style>
      <main>
        <section className="overflow-hidden border-b border-slate-100 bg-[radial-gradient(circle_at_0%_0%,rgba(81,184,91,.12),transparent_30%),radial-gradient(circle_at_100%_0%,rgba(59,130,196,.16),transparent_34%),linear-gradient(180deg,#f9fcff_0%,#ffffff_100%)]">
          <div className="mx-auto tvrk-container py-9 sm:py-12 lg:py-14">
            <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,.78fr)_minmax(0,1.22fr)] lg:gap-8">
              <div>
                <OxyFoundationWordmark className="text-2xl sm:text-3xl" />
                <h1 className="mt-4 max-w-xl text-3xl font-black leading-[1.02] tracking-[-0.045em] text-slate-950 sm:text-4xl lg:text-[3.3rem]">
                  Awareness today.
                  <span className="block text-[#51B85B]">
                    A greener tomorrow.
                  </span>
                </h1>
                <p className="mt-4 max-w-xl text-sm font-medium leading-6 text-slate-600 sm:text-base sm:leading-7">
                  Start with the climate-awareness video, then explore
                  sustainability initiatives, startup funding material and the
                  Foundation&apos;s environmental proposals.
                </p>

                <div className="mt-6 grid max-w-[360px] grid-cols-2 rounded-2xl border border-slate-200 bg-white p-1.5 shadow-sm">
                  {(["English", "Telugu"] as VideoLanguage[]).map((item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() => setLanguage(item)}
                      aria-pressed={language === item}
                      className={`rounded-xl px-4 py-2.5 text-sm font-extrabold transition ${
                        language === item
                          ? "bg-[#3B82C4] text-white shadow-sm"
                          : "text-[#3478ad] hover:bg-[#f2f8fc]"
                      }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>

              <div className="overflow-hidden rounded-[22px] border border-slate-200 bg-black shadow-[0_22px_68px_rgba(15,23,42,.14)] sm:rounded-[28px]">
                <div className="aspect-video w-full">
                  <iframe
                    key={language}
                    src={activeVideo.embed}
                    title={activeVideo.title}
                    className="h-full w-full"
                    loading="eager"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-11 sm:py-14 lg:py-16">
          <div className="mx-auto tvrk-container">
            <SectionHeading
              eyebrow="OXY Foundation"
              title="Climate awareness, green technology and community action"
              copy="The supplied material presents OXY Foundation as a non-profit Section 8 company focused on Zero Emission through education, green-technology initiatives and public awareness."
            />

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {missionCards.map((item, index) => (
                <article
                  key={item.number}
                  className="rounded-[22px] border border-slate-200 bg-white p-5 shadow-[0_12px_36px_rgba(15,23,42,.045)] sm:p-6"
                >
                  <div className="flex items-center justify-between gap-3">
                    <span
                      className={`text-xs font-black ${index % 2 === 0 ? "text-[#3B82C4]" : "text-[#51B85B]"}`}
                    >
                      {item.number}
                    </span>
                    <span
                      className={`h-2.5 w-2.5 rounded-full ${index % 2 === 0 ? "bg-[#3B82C4]" : "bg-[#51B85B]"}`}
                    />
                  </div>
                  <h3 className="mt-5 text-xl font-black tracking-[-0.025em] text-slate-950">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm font-medium leading-6 text-slate-600">
                    {item.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Donation Section */}
<section
  id="donate"
  aria-labelledby="donate-heading"
  className="scroll-mt-24 border-y border-slate-100 bg-gradient-to-b from-[#F5FAFD] to-white py-10 sm:py-12 lg:py-16"
>
  <div className="mx-auto tvrk-container">
    <div className="mx-auto mb-7 max-w-3xl text-center sm:mb-9">
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#3B82C4]">
        Make a difference
      </p>

      <h2
        id="donate-heading"
        className="mt-3 text-2xl font-extrabold leading-tight tracking-tight text-slate-950 sm:text-3xl lg:text-4xl"
      >
        Support the{" "}
        <span className="bg-gradient-to-r from-[#3478ad] to-[#419A49] bg-clip-text text-transparent">Zero Emission</span> mission
      </h2>

      <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
        <span className="block">
          OXY Foundation is a non-profit Section 8 company working towards
          a zero-emission future.
        </span>
        <span className="mt-1 block">
          We promote environmental awareness, education, and green
          technology projects.
        </span>
        <span className="mt-1 block">
          Donate directly to OXY People Foundation using the bank details below.
        </span>
      </p>
    </div>

    <div className="donation-card mx-auto grid w-full items-center gap-5 rounded-3xl border border-slate-200/80 bg-white p-4 shadow-[0_12px_48px_rgba(15,23,42,0.05)] sm:p-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-7 lg:p-6">
      {/* Donation Illustration */}
      <div className="flex min-w-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#F2F8FC] via-white to-[#F1F9F2] p-4 sm:p-6">
        <SafeImage
          src={FOUNDATION_IMAGES.donation}
          alt="Support OXY Foundation’s zero-emission mission"
          className="block h-auto max-h-52 w-full object-contain sm:max-h-64 lg:max-h-80"
        />
      </div>

      {/* Bank Details */}
      <div className="min-w-0">
        <div className="mb-5 flex items-center gap-3">
          <span
            aria-hidden="true"
            className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-[#EDF6FC] text-[#3B82C4]"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.7}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <path d="m3 9 9-6 9 6H3Z" />
              <path d="M5 10v8m5-8v8m4-8v8m5-8v8M3 21h18M3 18h18" />
            </svg>
          </span>

          <div className="min-w-0">
            <p className="text-xs font-medium text-slate-500">
              Direct bank transfer
            </p>
            <h3 className="mt-0.5 break-words text-lg font-bold text-slate-950 sm:text-xl">
              {DONATION_DETAILS.bank}
            </h3>
          </div>
        </div>

        <dl className="divide-y divide-slate-100 overflow-hidden rounded-2xl border border-slate-200">
          <div className="px-4 py-4 sm:px-5">
            <dt className="text-xs font-medium text-slate-500">
              Account Name
            </dt>
            <dd className="mt-1.5 break-words text-sm font-bold leading-6 text-slate-900 sm:text-base">
              {DONATION_DETAILS.accountName}
            </dd>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-x-2 gap-y-2 bg-gradient-to-r from-[#EDF6FC] to-[#F3FAF5] px-4 py-4 sm:px-5">
            <div className="min-w-0 flex-1">
              <dt className="text-xs font-medium text-slate-500">
                Account Number
              </dt>
              <dd className="mt-1.5 break-all text-base font-bold tabular-nums tracking-wide text-slate-950 sm:text-lg">
                {DONATION_DETAILS.accountNumber}
              </dd>
            </div>
            <div className="shrink-0 [&_button]:min-h-11 [&_button]:min-w-11">
              <CopyValueButton
                value={DONATION_DETAILS.accountNumber}
                label="account number"
              />
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-x-2 gap-y-2 px-4 py-4 sm:px-5">
            <div className="min-w-0 flex-1">
              <dt className="text-xs font-medium text-slate-500">
                IFSC Code
              </dt>
              <dd className="mt-1.5 break-all text-sm font-bold tracking-wide text-slate-900 sm:text-base">
                {DONATION_DETAILS.ifsc}
              </dd>
            </div>
            <div className="shrink-0 [&_button]:min-h-11 [&_button]:min-w-11">
              <CopyValueButton
                value={DONATION_DETAILS.ifsc}
                label="IFSC code"
              />
            </div>
          </div>

          <div className="px-4 py-4 sm:px-5">
            <dt className="text-xs font-medium text-slate-500">
              Branch
            </dt>
            <dd className="mt-1.5 break-words text-sm font-semibold leading-6 text-slate-900 sm:text-base">
              {DONATION_DETAILS.branch}
            </dd>
          </div>
        </dl>

        <p className="mt-4 text-xs leading-5 text-slate-500">
          Please verify the account name, account number, and IFSC before
          completing your transfer.
        </p>
      </div>
    </div>
  </div>
</section>

        <section className="border-y border-slate-100 bg-[#f8fbfd] py-11 sm:py-14 lg:py-16">
          <div className="mx-auto tvrk-container">
            <div className="grid overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,.06)] lg:grid-cols-[minmax(0,.8fr)_minmax(0,1.2fr)]">
              <div className="bg-[linear-gradient(145deg,#173f64_0%,#2f77b7_58%,#51B85B_145%)] p-6 text-white sm:p-8 lg:p-7">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/70">
                  Startup growth initiative
                </p>
                <h2 className="mt-4 text-3xl font-black leading-[1.02] tracking-[-0.04em] sm:text-4xl">
                  Unstoppable Startup Funding
                </h2>
                <p className="mt-4 max-w-lg text-sm font-medium leading-7 text-white/80 sm:text-base">
                  The supplied legacy program describes a 100-day
                  startup-pitching journey around funding conversations, market
                  visibility, investor access and buyer reach.
                </p>
                <div className="mt-7 rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur">
                  <p className="text-xs font-bold leading-5 text-white/80">
                    Explore funding, mentorship and market-access opportunities
                    for your startup.
                  </p>
                </div>
              </div>

              <div className="p-4 sm:p-6 lg:p-7">
                <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#3B82C4]">
                  Program at a glance
                </p>
                <h3 className="mt-2 text-2xl font-black tracking-[-0.03em] text-slate-950 sm:text-3xl">
                  Funding + visibility + market access
                </h3>

                <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-2 xl:grid-cols-4">
                  {startupMetrics.map((item, index) => (
                    <div
                      key={item.value}
                      className={`rounded-[18px] p-4 ${index % 2 === 0 ? "bg-[#f1f7fc]" : "bg-[#f2faf3]"}`}
                    >
                      <p
                        className={`text-2xl font-black tracking-[-0.04em] ${index % 2 === 0 ? "text-[#3B82C4]" : "text-[#51B85B]"}`}
                      >
                        {item.value}
                      </p>
                      <p className="mt-2 text-[10px] font-semibold leading-4 text-slate-500">
                        {item.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {startupEcosystem.map((item, index) => (
                <article
                  key={item.number}
                  className="rounded-[22px] border border-slate-200 bg-white p-5 shadow-[0_12px_36px_rgba(15,23,42,.04)]"
                >
                  <span
                    className={`text-xs font-black ${index % 2 === 0 ? "text-[#3B82C4]" : "text-[#51B85B]"}`}
                  >
                    {item.number}
                  </span>
                  <h3 className="mt-4 text-lg font-black tracking-[-0.02em] text-slate-950">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm font-medium leading-6 text-slate-600">
                    {item.text}
                  </p>
                </article>
              ))}
            </div>

            <div className="mt-7 overflow-hidden rounded-[26px] border border-slate-200 bg-white shadow-[0_14px_44px_rgba(15,23,42,.045)]">
              <div className="border-b border-slate-100 px-5 py-5 sm:px-6 lg:flex lg:items-end lg:justify-between lg:gap-6">
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#51B85B]">
                    Eligibility
                  </p>
                  <h3 className="mt-2 text-2xl font-black tracking-[-0.03em] text-slate-950">
                    Who can pitch?
                  </h3>
                </div>
                <p className="mt-2 max-w-xl text-xs font-semibold leading-5 text-slate-500 lg:mt-0 lg:text-right">
                  Four core requirements for participating startups.
                </p>
              </div>

              <div className="flex snap-x snap-mandatory gap-3 overflow-x-auto px-5 py-5 [scrollbar-width:none] sm:px-6 md:grid md:grid-cols-2 md:overflow-visible lg:grid-cols-4 [&::-webkit-scrollbar]:hidden">
                {startupEligibility.map((item, index) => (
                  <div
                    key={item}
                    className="w-[82%] shrink-0 snap-start rounded-[18px] border border-slate-200 bg-[linear-gradient(180deg,#ffffff_0%,#f8fbfd_100%)] p-4 md:w-auto"
                  >
                    <div className="flex items-start gap-3">
                      <span
                        className={`grid h-9 w-9 shrink-0 place-items-center rounded-xl text-xs font-black ${
                          index % 2 === 0
                            ? "bg-[#edf6fd] text-[#3478ad]"
                            : "bg-[#eef8ef] text-[#3f9f49]"
                        }`}
                      >
                        {index + 1}
                      </span>
                      <p className="pt-1 text-sm font-extrabold leading-5 text-slate-800">
                        {item}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-5 rounded-[26px] border border-slate-200 bg-white p-5 shadow-[0_14px_44px_rgba(15,23,42,.045)] sm:p-6">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#3B82C4]">
                    Prime pitching sectors
                  </p>
                  <h3 className="mt-2 text-2xl font-black tracking-[-0.03em] text-slate-950">
                    Explore 10 startup sectors
                  </h3>
                </div>
                <p className="text-xs font-semibold text-slate-500 sm:hidden">
                  Swipe to explore →
                </p>
                <p className="hidden max-w-md text-right text-xs font-semibold leading-5 text-slate-500 sm:block">
                  Explore opportunities across technology, sustainability and everyday life.
                </p>
              </div>

              <div className="-mx-5 mt-5 flex snap-x snap-mandatory gap-3 overflow-x-auto px-5 pb-1 [scrollbar-width:none] sm:-mx-6 sm:px-6 md:mx-0 md:grid md:grid-cols-2 md:overflow-visible md:px-0 lg:grid-cols-3 xl:grid-cols-5 [&::-webkit-scrollbar]:hidden">
                {startupSectors.map(([number, title, examples], index) => (
                  <article
                    key={number}
                    className="group relative w-[76vw] max-w-[280px] shrink-0 snap-start overflow-hidden rounded-[18px] border border-slate-200 bg-[#fbfdff] p-4 transition hover:-translate-y-0.5 hover:border-[#3B82C4]/30 hover:shadow-[0_12px_32px_rgba(15,23,42,.06)] md:w-auto md:max-w-none"
                  >
                    <div
                      className={`absolute inset-x-0 top-0 h-1 ${
                        index % 2 === 0 ? "bg-[#3B82C4]" : "bg-[#51B85B]"
                      }`}
                    />
                    <div className="flex items-center justify-between gap-3 pt-1">
                      <span
                        className={`text-[11px] font-black tracking-[0.08em] ${
                          index % 2 === 0 ? "text-[#3478ad]" : "text-[#3f9f49]"
                        }`}
                      >
                        {number}
                      </span>
                      <span
                        className={`h-2 w-2 rounded-full ${
                          index % 2 === 0 ? "bg-[#3B82C4]" : "bg-[#51B85B]"
                        }`}
                      />
                    </div>
                    <h4 className="mt-4 text-[15px] font-black leading-5 tracking-[-0.02em] text-slate-950">
                      {title}
                    </h4>
                    <p className="mt-2 text-xs font-medium leading-5 text-slate-600">
                      {examples}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-8 sm:py-10 lg:py-12">
          <div className="mx-auto tvrk-container">
            <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#51B85B]">
                  Mission: 51 Billions → Zero
                </p>
                <h2 className="mt-2 text-2xl font-black tracking-[-0.035em] text-slate-950 sm:text-3xl">
                  A clearer path toward lower emissions.
                </h2>
              </div>
              <p className="max-w-xl text-sm font-medium leading-6 text-slate-600 sm:text-right">
                Explore the supplied OXY Foundation climate visuals and the
                campaign&apos;s long-term Zero Emission direction.
              </p>
            </div>

            <div className="grid gap-5 lg:grid-cols-[minmax(0,1.08fr)_minmax(0,.92fr)] lg:items-stretch">
              <div className="min-w-0 rounded-[24px] border border-slate-200 bg-white p-3 shadow-[0_16px_46px_rgba(15,23,42,.06)] sm:p-4">
                <div className="relative overflow-hidden rounded-[18px] bg-[#f7f9fa]">
                  <div className="flex h-[280px] items-center justify-center sm:h-[340px] lg:h-[390px]">
                    <SafeImage
                      src={activeImage.src}
                      alt={activeImage.alt}
                      className="h-full w-full object-contain"
                    />
                  </div>

                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-950/45 to-transparent" />
                  <div className="absolute inset-x-3 bottom-3 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => moveGallery("left")}
                      aria-label="Previous climate image"
                      className="grid h-11 w-11 place-items-center rounded-full border border-white/70 bg-white/95 text-slate-800 shadow-lg transition hover:scale-105"
                    >
                      <ArrowIcon direction="left" />
                    </button>

                    <span className="rounded-full border border-white/70 bg-white/95 px-3 py-1.5 text-xs font-black text-slate-800 shadow-sm">
                      {activeClimateImage + 1} /{" "}
                      {FOUNDATION_IMAGES.climateMission.length}
                    </span>

                    <button
                      type="button"
                      onClick={() => moveGallery("right")}
                      aria-label="Next climate image"
                      className="grid h-11 w-11 place-items-center rounded-full border border-white/70 bg-white/95 text-slate-800 shadow-lg transition hover:scale-105"
                    >
                      <ArrowIcon direction="right" />
                    </button>
                  </div>
                </div>

                <div className="mt-3 flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                  {FOUNDATION_IMAGES.climateMission.map((image, index) => (
                    <button
                      key={image.src}
                      type="button"
                      onClick={() => setActiveClimateImage(index)}
                      aria-pressed={activeClimateImage === index}
                      aria-label={`View climate campaign image ${index + 1}`}
                      className={`h-14 w-20 shrink-0 overflow-hidden rounded-lg border-2 bg-slate-100 transition sm:h-16 sm:w-24 ${
                        activeClimateImage === index
                          ? "border-[#3B82C4] shadow-sm"
                          : "border-transparent opacity-75 hover:opacity-100"
                      }`}
                    >
                      <SafeImage
                        src={image.src}
                        alt=""
                        className="h-full w-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex flex-col justify-between rounded-[24px] border border-slate-200 bg-[linear-gradient(180deg,#ffffff_0%,#f8fbfd_100%)] p-5 shadow-[0_16px_46px_rgba(15,23,42,.045)] sm:p-6">
                <div>
                  <span className="inline-flex rounded-full bg-[#eef8ef] px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.16em] text-[#3f9f49]">
                    Zero Emission Mission
                  </span>
                  <h3 className="mt-4 text-2xl font-black leading-tight tracking-[-0.035em] text-slate-950 sm:text-3xl">
                    Join hands for a lower-emission future.
                  </h3>
                  <p className="mt-4 text-sm font-medium leading-7 text-slate-600 sm:text-base">
                    The original OXY Foundation material frames the climate
                    challenge around emissions associated with how people build,
                    travel, eat and use fossil fuels, while presenting “ZERO” as
                    the long-term direction.
                  </p>
                </div>

                <div className="mt-5 grid grid-cols-1 gap-2.5 min-[400px]:grid-cols-3">
                  <div className="rounded-[16px] border border-blue-100 bg-[#f2f8fd] p-3 sm:p-4">
                    <p className="text-xl font-black text-[#3B82C4] sm:text-2xl">
                      51B
                    </p>
                    <p className="mt-1 text-[10px] font-bold leading-4 text-slate-500 sm:text-xs">
                      campaign reference
                    </p>
                  </div>
                  <div className="rounded-[16px] border border-emerald-100 bg-[#f2faf3] p-3 sm:p-4">
                    <p className="text-xl font-black text-[#51B85B] sm:text-2xl">
                      ZERO
                    </p>
                    <p className="mt-1 text-[10px] font-bold leading-4 text-slate-500 sm:text-xs">
                      long-term direction
                    </p>
                  </div>
                  <div className="rounded-[16px] border border-slate-200 bg-white p-3 sm:p-4">
                    <p className="text-xl font-black text-slate-900 sm:text-2xl">
                      6
                    </p>
                    <p className="mt-1 text-[10px] font-bold leading-4 text-slate-500 sm:text-xs">
                      campaign visuals
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Green Elections */}
        <section id="green-elections" aria-labelledby="green-elections-heading" className="scroll-mt-24 border-y border-slate-100 bg-[#F7FAFC] py-8 sm:py-10 lg:py-12">
          <div className="mx-auto w-full tvrk-container">
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_8px_32px_rgba(15,23,42,0.04)] sm:rounded-3xl">
              <div className="border-b border-slate-100 bg-gradient-to-r from-[#EFF6FC] via-white to-[#F1F9F2] px-4 py-5 sm:px-6 sm:py-6 lg:px-8">
                <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#3478AD]">OXY Foundation Proposal</p>
                <h2 id="green-elections-heading" className="mt-2 text-2xl font-bold leading-tight tracking-tight text-slate-950 sm:text-3xl">
                  Green Elections <span className="text-[#419A49]">in India</span>
                </h2>
                <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
                  A proposal to reduce the environmental impact of elections through cleaner campaigning, responsible resource use, and public awareness.
                </p>
              </div>
              <div className="grid min-w-0 gap-6 p-4 sm:gap-7 sm:p-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-8 lg:p-8">
                <aside aria-label="Proposal details" className="min-w-0 self-start rounded-2xl border border-slate-100 bg-[#F8FAFC] p-4">
                  <div className="flex items-center gap-4 lg:flex-col lg:items-start">
                    <div className="w-24 shrink-0 overflow-hidden rounded-xl border border-slate-200 bg-white sm:w-28 lg:w-full">
                      <SafeImage src={FOUNDATION_IMAGES.greenElectionsLead} alt="Radhakrishna Thatavarti" className="aspect-[4/3] w-full object-contain" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[11px] font-semibold text-slate-500">Proposal led by</p>
                      <h3 className="mt-1 break-words text-sm font-bold leading-5 text-slate-900 sm:text-base sm:leading-6">Radhakrishna Thatavarti</h3>
                      <p className="mt-1 text-xs font-semibold leading-5 text-[#3478AD]">OXY Foundation</p>
                    </div>
                  </div>
                  <div className="mt-4 flex flex-wrap items-center justify-between gap-2 border-t border-slate-200 pt-3 text-xs">
                    <span className="text-slate-500">Proposal date</span>
                    <time dateTime="2024-03-20" className="font-semibold text-slate-700">20 March 2024</time>
                  </div>
                </aside>
                <div className="min-w-0">
                  <h3 className="text-base font-bold text-slate-900 sm:text-lg">Key areas of action</h3>
                  <ol className="mt-2 grid min-w-0 gap-x-6 sm:grid-cols-2 lg:gap-x-8">
                    {greenElectionPoints.map((item, index) => (
                      <li key={item.title} className="flex min-w-0 items-start gap-3 border-b border-slate-100 py-4">
                        <span aria-hidden="true" className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[11px] font-bold ${index % 2 === 0 ? "bg-[#EDF5FC] text-[#3478AD]" : "bg-[#EEF8EF] text-[#398442]"}`}>
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <div className="min-w-0">
                          <h4 className="text-sm font-semibold leading-5 text-slate-900">{item.title}</h4>
                          <p className="mt-1 text-xs leading-5 text-slate-600 sm:text-sm sm:leading-6">{item.text}</p>
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-11 sm:py-14 lg:py-16">
          <div className="mx-auto tvrk-container">
            <SectionHeading
              eyebrow="Climate transparency"
              title="Greenhouse-gas emissions reporting proposal"
              copy="The supplied material proposes stronger disclosure of fossil-fuel use and greenhouse-gas emissions so environmental impact can be communicated more clearly."
            />

            <div className="mt-8 overflow-hidden rounded-[26px] border border-slate-200 bg-white shadow-[0_16px_50px_rgba(15,23,42,.05)]">
              {disclosureRows.map((row, index) => (
                <div
                  key={row.title}
                  className="grid gap-4 border-b border-slate-200 p-5 last:border-b-0 sm:p-6 md:grid-cols-[minmax(0,.34fr)_minmax(0,.66fr)] md:gap-7"
                >
                  <div className="flex items-start gap-3">
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[#edf6fd] text-[11px] font-black text-[#3478ad]">
                      {index + 1}
                    </span>
                    <h3 className="pt-1 text-sm font-black text-slate-900 sm:text-base">
                      {row.title}
                    </h3>
                  </div>
                  <ul className="space-y-2">
                    {row.points.map((point) => (
                      <li
                        key={point}
                        className="flex gap-2 text-sm font-medium leading-6 text-slate-600"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#51B85B]" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {implementationSteps.map(([number, title, text], index) => (
                <article
                  key={number}
                  className="rounded-[22px] border border-slate-200 bg-[#fbfdff] p-5"
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`grid h-9 w-9 place-items-center rounded-xl ${index % 2 === 0 ? "bg-[#edf6fd] text-[#3478ad]" : "bg-[#eef8ef] text-[#3f9f49]"}`}
                    >
                      {index % 2 === 0 ? (
                        <ChartIcon className="h-4 w-4" />
                      ) : (
                        <LeafIcon className="h-4 w-4" />
                      )}
                    </span>
                    <span className="text-[10px] font-black text-slate-400">
                      {number}
                    </span>
                  </div>
                  <h3 className="mt-4 text-lg font-black tracking-[-0.02em] text-slate-950">
                    {title}
                  </h3>
                  <p className="mt-3 text-sm font-medium leading-6 text-slate-600">
                    {text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-slate-100 bg-[#f8fbfd] py-11 sm:py-14 lg:py-16">
          <div className="mx-auto tvrk-container">
            <div className="grid items-center gap-7 overflow-hidden rounded-[28px] border border-slate-200 bg-white p-5 shadow-[0_20px_60px_rgba(15,23,42,.055)] sm:p-7 lg:grid-cols-[minmax(0,.42fr)_minmax(0,.58fr)] lg:gap-10 lg:p-9">
              <div className="mx-auto w-full max-w-[370px]">
                <div className="overflow-hidden rounded-[22px] border border-[#51B85B]/20 bg-[linear-gradient(145deg,#edf6fd,#eef8ef)] p-3">
                  <div className="aspect-[4/3] overflow-hidden rounded-[18px] bg-white">
                    <SafeImage
                      src={FOUNDATION_IMAGES.oxy19Recognition}
                      alt="Rana Daggubati - OXY19 recognition visual"
                      className="h-full w-full object-contain"
                    />
                  </div>
                </div>
              </div>

              <div>
                <OxyFoundationWordmark className="text-2xl sm:text-3xl" />
                <p className="mt-4 text-[10px] font-black uppercase tracking-[0.18em] text-[#51B85B]">
                  Recognition mentioned in the supplied material
                </p>
                <h2 className="mt-2 text-3xl font-black tracking-[-0.04em] text-slate-950 sm:text-4xl">
                  OXY19 initiative recognition
                </h2>
                <p className="mt-4 text-sm font-medium leading-7 text-slate-600 sm:text-base sm:leading-8">
                  The legacy OXY Foundation page states that its OXY19 efforts
                  were recognized by actor Rana Daggubati and highlights
                  Radhakrishna&apos;s role in those efforts during the COVID-19
                  period.
                </p>
                <p className="mt-3 text-xs font-semibold leading-5 text-slate-500">
                  This section preserves the recognition as described in the
                  supplied material and does not independently expand the claim.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-100 bg-white py-7 text-center text-xs font-semibold text-slate-500">
        <div className="mx-auto flex tvrk-container flex-col items-center gap-2">
          <OxyFoundationWordmark className="text-lg" />
          <p>© {new Date().getFullYear()} OXY Foundation</p>
        </div>
      </footer>
    </div>
  );
}
