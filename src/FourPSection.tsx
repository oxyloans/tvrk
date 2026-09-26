import React, { useState } from "react";

type TabKey = "people" | "platforms" | "products" | "capital";

type FourPData = {
  title: string;
  eyebrow: string;
  description: string;
  image: string;
  imageAlt: string;
  items: {
    title: string;
    text: string;
    icon:
      | "people"
      | "briefcase"
      | "network"
      | "layers"
      | "automation"
      | "product"
      | "rocket"
      | "capital";
  }[];
};

const FOUR_P_DATA: Record<TabKey, FourPData> = {
  people: {
    title: "People",
    eyebrow: "Talent & Workforce",
    description:
      "Access to a technology-enabled, domain-ready workforce capable of delivering innovation at scale.",
    image: "https://i.ibb.co/Y76yBCp0/people.png",
    imageAlt: "People strategic partnership model",
    items: [
      {
        title: "Skilled Professionals",
        text: "Skilled professionals across AI, fintech, and enterprise technologies.",
        icon: "people",
      },
      {
        title: "Faster Hiring",
        text: "Faster hiring through digital talent platforms and practical screening workflows.",
        icon: "briefcase",
      },
      {
        title: "Scalable Workforce Models",
        text: "Scalable and cost-efficient workforce models aligned to growth needs.",
        icon: "network",
      },
    ],
  },

  platforms: {
    title: "Platforms",
    eyebrow: "Digital Ecosystems",
    description:
      "Building and scaling technology platforms that power connected digital ecosystems.",
    image: "https://i.ibb.co/3YR05Y0v/platforms.png",
    imageAlt: "Platforms strategic partnership model",
    items: [
      {
        title: "Platform Architecture",
        text: "Scalable platform architecture designed for modern digital products.",
        icon: "layers",
      },
      {
        title: "Digital Infrastructure",
        text: "Reliable digital infrastructure for large-scale connected operations.",
        icon: "network",
      },
      {
        title: "Automation Systems",
        text: "Automation-driven systems that improve speed, consistency, and efficiency.",
        icon: "automation",
      },
    ],
  },

  products: {
    title: "Products",
    eyebrow: "Innovation & GTM",
    description:
      "Driving technology-led product innovation and turning strong ideas into market-ready solutions.",
    image: "https://i.ibb.co/wvHpG0L/products.png",
    imageAlt: "Products strategic partnership model",
    items: [
      {
        title: "Digital Products",
        text: "Development of useful, scalable digital products around real business needs.",
        icon: "product",
      },
      {
        title: "SaaS Ecosystems",
        text: "Service-based and SaaS product ecosystems designed for repeatable growth.",
        icon: "layers",
      },
      {
        title: "Go-To-Market",
        text: "Faster go-to-market enablement through technology, positioning, and execution.",
        icon: "rocket",
      },
    ],
  },

  capital: {
    title: "Capital",
    eyebrow: "Funding & Scale",
    description:
      "Connecting ideas, entrepreneurs, and platforms with suitable funding ecosystems for responsible scale.",
    image: "https://i.ibb.co/0Vn1VJ5L/capital.png",
    imageAlt: "Capital strategic partnership model",
    items: [
      {
        title: "Investor Access",
        text: "Access to relevant investor and funding networks for growth conversations.",
        icon: "capital",
      },
      {
        title: "Funding Support",
        text: "Support across VC, PE, loans, and investment models based on business needs.",
        icon: "briefcase",
      },
      {
        title: "Financial Structuring",
        text: "Growth-oriented financial structuring aligned to business stage and objectives.",
        icon: "network",
      },
    ],
  },
};

const TABS: { key: TabKey; label: string }[] = [
  { key: "people", label: "People" },
  { key: "platforms", label: "Platforms" },
  { key: "products", label: "Products" },
  { key: "capital", label: "Capital" },
];

function FeatureIcon({ type }: { type: FourPData["items"][number]["icon"] }) {
  const common = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className: "h-[18px] w-[18px]",
    "aria-hidden": true,
  };

  if (type === "people") {
    return (
      <svg {...common}>
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    );
  }

  if (type === "briefcase") {
    return (
      <svg {...common}>
        <rect x="3" y="7" width="18" height="13" rx="2" />
        <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
        <path d="M12 12v4" />
        <path d="M3 12h18" />
      </svg>
    );
  }

  if (type === "layers") {
    return (
      <svg {...common}>
        <path d="m12 2 9 5-9 5-9-5 9-5Z" />
        <path d="m3 12 9 5 9-5" />
        <path d="m3 17 9 5 9-5" />
      </svg>
    );
  }

  if (type === "automation") {
    return (
      <svg {...common}>
        <path d="M12 3v4" />
        <path d="M12 17v4" />
        <path d="M3 12h4" />
        <path d="M17 12h4" />
        <circle cx="12" cy="12" r="4" />
      </svg>
    );
  }

  if (type === "product") {
    return (
      <svg {...common}>
        <path d="m21 16-9 5-9-5V8l9-5 9 5v8Z" />
        <path d="m3.3 7 8.7 5 8.7-5" />
        <path d="M12 22V12" />
      </svg>
    );
  }

  if (type === "rocket") {
    return (
      <svg {...common}>
        <path d="M4.5 16.5c-1.5 1.2-2 4-2 4s2.8-.5 4-2" />
        <path d="M9 15 4.5 10.5 9 9l3-5c3-2 6-2 8-2 0 2 0 5-2 8l-5 3-1.5 4.5L9 15Z" />
        <path d="M15 9h.01" />
      </svg>
    );
  }

  if (type === "capital") {
    return (
      <svg {...common}>
        <path d="M3 10h18" />
        <path d="M5 10v8" />
        <path d="M9 10v8" />
        <path d="M15 10v8" />
        <path d="M19 10v8" />
        <path d="M2 21h20" />
        <path d="m12 3 9 4H3l9-4Z" />
      </svg>
    );
  }

  return (
    <svg {...common}>
      <rect x="3" y="3" width="6" height="6" rx="1" />
      <rect x="15" y="3" width="6" height="6" rx="1" />
      <rect x="9" y="15" width="6" height="6" rx="1" />
      <path d="M6 9v3h12V9" />
      <path d="M12 12v3" />
    </svg>
  );
}

export default function FourPSection() {
  const [activeTab, setActiveTab] = useState<TabKey>("people");
  const active = FOUR_P_DATA[activeTab];

  return (
    <section
      id="4p-models"
      aria-labelledby="four-p-heading"
      className="scroll-mt-24 bg-transparent py-12 sm:py-14 lg:py-16 xl:py-20"
    >
      <div className="mx-auto w-full max-w-[1580px] px-4 sm:px-6 lg:px-10 xl:px-14">
        {/* Heading */}
        <header className="mx-auto max-w-[980px] text-center">
          <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#6b4ca3] sm:text-[11px]">
            Strategic Partnership Framework
          </p>

          <h2
            id="four-p-heading"
            className="mt-2 font-display text-[clamp(2rem,4vw,3.65rem)] font-extrabold leading-[1.05] tracking-[-0.045em] text-[#12182a]"
          >
            4P Strategic{" "}
            <span className="text-[#2f67b8]">Partnerships</span> Model
          </h2>

          <p className="mx-auto mt-4 max-w-[900px] text-[13px] font-medium leading-6 text-[#4f596c] sm:text-[15px] sm:leading-7 lg:text-base">
            A focused partnership framework covering People, Platforms, Products,
            and Capital to drive scale, innovation, and sustainable business growth.
          </p>
        </header>

        {/* Compact tabs */}
        <div
          className="mx-auto mt-7 flex max-w-[620px] flex-wrap items-center justify-center gap-2.5 sm:mt-9 sm:gap-3"
          role="tablist"
          aria-label="4P Strategic Partnerships"
        >
          {TABS.map((tab) => {
            const selected = activeTab === tab.key;

            return (
              <button
                key={tab.key}
                type="button"
                role="tab"
                aria-selected={selected}
                onClick={() => setActiveTab(tab.key)}
                className={[
                  "min-w-[92px] rounded-full border px-5 py-2.5 text-[12px] font-bold transition-all duration-200 sm:min-w-[112px] sm:px-6 sm:text-[13px]",
                  selected
                    ? "border-[#2f67b8] bg-[#2f67b8] text-white shadow-[0_8px_18px_rgba(47,103,184,0.18)]"
                    : "border-[#dce3ee] bg-white/70 text-[#26324a] hover:border-[#b8c8df] hover:bg-white",
                ].join(" ")}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Main content */}
        <div className="mt-10 grid items-center gap-8 md:mt-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12 xl:gap-16">
          {/* Text */}
          <div className="order-2 lg:order-1">
            <div className="max-w-[700px]">
              <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#6b4ca3] sm:text-[11px]">
                {active.eyebrow}
              </p>

              <h3 className="mt-2 font-display text-[2rem] font-extrabold leading-[1.08] tracking-[-0.04em] text-[#12182a] sm:text-[2.5rem] lg:text-[2.8rem]">
                {active.title}
              </h3>

              <div className="mt-4 h-[3px] w-16 rounded-full bg-[#2f67b8]" />

              <p className="mt-5 max-w-[640px] text-[14px] font-medium leading-7 text-[#4f596c] sm:text-[15px] lg:text-base lg:leading-8">
                {active.description}
              </p>

              <div className="mt-8 space-y-5 sm:space-y-6">
                {active.items.map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[#edf4ff] text-[#2f67b8] ring-1 ring-[#d8e6f9]">
                      <FeatureIcon type={item.icon} />
                    </span>

                    <div className="min-w-0 pt-0.5">
                      <h4 className="text-[14px] font-extrabold leading-5 text-[#12182a] sm:text-[15px]">
                        {item.title}
                      </h4>

                      <p className="mt-1 text-[12.5px] font-medium leading-5.5 text-[#647084] sm:text-[13.5px] sm:leading-6">
                        {item.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 flex items-center justify-center lg:order-2">
            <div className="flex w-full max-w-[720px] items-center justify-center">
              <img
                key={active.image}
                src={active.image}
                alt={active.imageAlt}
                loading="lazy"
                decoding="async"
                className="h-auto max-h-[500px] w-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
