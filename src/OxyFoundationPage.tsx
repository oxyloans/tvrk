import React, { useState } from "react";
import InitiativeHeader from "./InitiativeHeader";

const BRAND_BLUE = "#3B82C4";
const BRAND_GREEN = "#51B85B";

type VideoLanguage = "English" | "Telugu";

type IconProps = { className?: string };

const videos: Record<VideoLanguage, { label: string; title: string; embed: string }> = {
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
  greenElectionsLead: "https://i.ibb.co/hFNcjP1T/RADHA.png",
  oxy19Recognition: "https://i.ibb.co/YF888ZKv/RANA.png",
  climateMission: [
    { src: "https://i.ibb.co/bg7C7PSC/C4.jpg", alt: "OXY Foundation climate mission visual" },
    { src: "https://i.ibb.co/tTnG5J85/DS3.jpg", alt: "OXY Foundation Mission 51 Billions to Zero visual" },
    { src: "https://i.ibb.co/kVS6xccv/DS4.jpg", alt: "OXY Foundation climate awareness visual" },
    { src: "https://i.ibb.co/Kcrqbqbv/DS5.jpg", alt: "OXY Foundation climate awareness visual" },
    { src: "https://i.ibb.co/8DSZwNDH/DS72.jpg", alt: "OXY Foundation climate awareness visual" },
    { src: "https://i.ibb.co/Ng6vfshj/DS1.jpg", alt: "OXY Foundation climate awareness visual" },
  ],
};

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
  { value: "100 Days", label: "program journey described in the supplied legacy material" },
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
  ["01", "Technology & Innovation", "Hardware, IoT, wearables, smart devices and consumer electronics"],
  ["02", "Manufacturing & Industrial", "Machinery, 3D printing, automation and sustainable products"],
  ["03", "Consumer Goods & Retail", "Consumer products, e-commerce, D2C brands, retail technology and packaging"],
  ["04", "Healthcare & Medical Devices", "Medical technology, monitoring devices, assistive technology and telemedicine"],
  ["05", "Food & Beverage", "Food technology, novel products, sustainable packaging, delivery and agri-tech"],
  ["06", "Fashion & Apparel", "Fashion technology, apparel innovation, sustainable fashion and customization"],
  ["07", "Home & Lifestyle", "Home improvement, smart-home products, wellness and household innovation"],
  ["08", "Automotive & Mobility", "EVs, urban mobility, connected vehicles and transport innovation"],
  ["09", "Environmental & CleanTech", "Renewable energy, waste management, water purification and green products"],
  ["10", "Construction & Real Estate", "Construction technology, building materials and real-estate technology"],
] as const;

const greenElectionPoints = [
  "Lower-waste campaigning, including greater use of digital outreach and reduced plastic use.",
  "Renewable energy for election-related infrastructure where practical.",
  "Waste reduction and recycling of election materials.",
  "Public transport and electric vehicles for campaign-related travel.",
  "Environmental awareness in voter-information initiatives.",
  "Energy-efficient lighting and water-saving practices at polling facilities.",
  "Tree-planting and reforestation initiatives intended to offset environmental impact.",
  "Recycled and biodegradable materials for election-related activity.",
  "Monitoring and reporting of environmental impact.",
  "Environmental sustainability as a public-policy discussion area.",
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
  ["01", "Legislation", "Develop a framework for emissions disclosure and enforcement mechanisms."],
  ["02", "Collaboration", "Work with stakeholders on reporting methodologies and data collection."],
  ["03", "Education", "Run educational initiatives around emissions and sustainable alternatives."],
  ["04", "Monitoring", "Track implementation and evaluate effectiveness over time."],
] as const;

function ArrowIcon({ direction }: { direction: "left" | "right" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4" aria-hidden="true">
      {direction === "left" ? <path d="m15 18-6-6 6-6" /> : <path d="m9 18 6-6-6-6" />}
    </svg>
  );
}

function PlayIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="m10 8 6 4-6 4V8Z" fill="currentColor" stroke="none" />
    </svg>
  );
}

function LeafIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden="true">
      <path d="M20 4c-7 0-12 2.5-14.5 6.5C3 14.5 5 19 9 20c4.5 1.2 9-2.5 11-16Z" />
      <path d="M5 19c3-4 6-7 11-10" />
    </svg>
  );
}

function ChartIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden="true">
      <path d="M4 20V10" />
      <path d="M10 20V4" />
      <path d="M16 20v-7" />
      <path d="M22 20H2" />
    </svg>
  );
}

function OxyFoundationWordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-baseline whitespace-nowrap font-black tracking-[-0.04em] ${className}`}>
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
    <div className={`${align === "center" ? "mx-auto text-center" : ""} max-w-3xl`}>
      <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#3B82C4]">{eyebrow}</p>
      <h2 className="mt-2 text-2xl font-black tracking-[-0.035em] text-slate-950 sm:text-3xl lg:text-[2.35rem]">{title}</h2>
      {copy && <p className="mt-3 text-sm font-medium leading-6 text-slate-600 sm:text-base sm:leading-7">{copy}</p>}
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
      return direction === "left" ? (current - 1 + total) % total : (current + 1) % total;
    });
  };

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <InitiativeHeader active="foundation" />

      <main>
        <section className="overflow-hidden border-b border-slate-100 bg-[radial-gradient(circle_at_0%_0%,rgba(81,184,91,.12),transparent_30%),radial-gradient(circle_at_100%_0%,rgba(59,130,196,.16),transparent_34%),linear-gradient(180deg,#f9fcff_0%,#ffffff_100%)]">
          <div className="mx-auto max-w-7xl px-4 py-9 sm:px-6 sm:py-12 lg:px-8 lg:py-14">
            <div className="grid items-center gap-8 lg:grid-cols-[.78fr_1.22fr] lg:gap-12">
              <div>
                <OxyFoundationWordmark className="text-2xl sm:text-3xl" />
                <h1 className="mt-4 max-w-xl text-3xl font-black leading-[1.02] tracking-[-0.045em] text-slate-950 sm:text-4xl lg:text-[3.3rem]">
                  Awareness today.
                  <span className="block text-[#51B85B]">A greener tomorrow.</span>
                </h1>
                <p className="mt-4 max-w-xl text-sm font-medium leading-6 text-slate-600 sm:text-base sm:leading-7">
                  Start with the climate-awareness video, then explore sustainability initiatives, startup funding material and the Foundation&apos;s environmental proposals.
                </p>

                <div className="mt-6 grid max-w-[360px] grid-cols-2 rounded-2xl border border-slate-200 bg-white p-1.5 shadow-sm">
                  {(["English", "Telugu"] as VideoLanguage[]).map((item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() => setLanguage(item)}
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
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="OXY Foundation"
              title="Climate awareness, green technology and community action"
              copy="The supplied material presents OXY Foundation as a non-profit Section 8 company focused on Zero Emission through education, green-technology initiatives and public awareness."
            />

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {missionCards.map((item, index) => (
                <article key={item.number} className="rounded-[22px] border border-slate-200 bg-white p-5 shadow-[0_12px_36px_rgba(15,23,42,.045)] sm:p-6">
                  <div className="flex items-center justify-between gap-3">
                    <span className={`text-xs font-black ${index % 2 === 0 ? "text-[#3B82C4]" : "text-[#51B85B]"}`}>{item.number}</span>
                    <span className={`h-2.5 w-2.5 rounded-full ${index % 2 === 0 ? "bg-[#3B82C4]" : "bg-[#51B85B]"}`} />
                  </div>
                  <h3 className="mt-5 text-xl font-black tracking-[-0.025em] text-slate-950">{item.title}</h3>
                  <p className="mt-3 text-sm font-medium leading-6 text-slate-600">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-slate-100 bg-[#f8fbfd] py-11 sm:py-14 lg:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,.06)] lg:grid-cols-[.8fr_1.2fr]">
              <div className="bg-[linear-gradient(145deg,#173f64_0%,#2f77b7_58%,#51B85B_145%)] p-6 text-white sm:p-8 lg:p-10">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/70">Startup growth initiative</p>
                <h2 className="mt-4 text-3xl font-black leading-[1.02] tracking-[-0.04em] sm:text-4xl">Unstoppable Startup Funding</h2>
                <p className="mt-4 max-w-lg text-sm font-medium leading-7 text-white/80 sm:text-base">
                  The supplied legacy program describes a 100-day startup-pitching journey around funding conversations, market visibility, investor access and buyer reach.
                </p>
                <div className="mt-7 rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur">
                  <p className="text-xs font-bold leading-5 text-white/80">
                    No legacy registration or placeholder links are included in this version. Add only a current verified official application link when one is available.
                  </p>
                </div>
              </div>

              <div className="p-6 sm:p-8 lg:p-10">
                <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#3B82C4]">Program at a glance</p>
                <h3 className="mt-2 text-2xl font-black tracking-[-0.03em] text-slate-950 sm:text-3xl">Funding + visibility + market access</h3>

                <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {startupMetrics.map((item, index) => (
                    <div key={item.value} className={`rounded-[18px] p-4 ${index % 2 === 0 ? "bg-[#f1f7fc]" : "bg-[#f2faf3]"}`}>
                      <p className={`text-2xl font-black tracking-[-0.04em] ${index % 2 === 0 ? "text-[#3B82C4]" : "text-[#51B85B]"}`}>{item.value}</p>
                      <p className="mt-2 text-[10px] font-semibold leading-4 text-slate-500">{item.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {startupEcosystem.map((item, index) => (
                <article key={item.number} className="rounded-[22px] border border-slate-200 bg-white p-5 shadow-[0_12px_36px_rgba(15,23,42,.04)]">
                  <span className={`text-xs font-black ${index % 2 === 0 ? "text-[#3B82C4]" : "text-[#51B85B]"}`}>{item.number}</span>
                  <h3 className="mt-4 text-lg font-black tracking-[-0.02em] text-slate-950">{item.title}</h3>
                  <p className="mt-3 text-sm font-medium leading-6 text-slate-600">{item.text}</p>
                </article>
              ))}
            </div>

            <div className="mt-7 grid gap-5 lg:grid-cols-[.7fr_1.3fr]">
              <article className="rounded-[24px] border border-slate-200 bg-white p-6">
                <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#51B85B]">Eligibility in the supplied program</p>
                <h3 className="mt-2 text-2xl font-black tracking-[-0.03em] text-slate-950">Who can pitch?</h3>
                <div className="mt-5 space-y-3">
                  {startupEligibility.map((item, index) => (
                    <div key={item} className="flex items-start gap-3 rounded-2xl bg-[#f8fbfd] p-3.5">
                      <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-[#edf6fd] text-[11px] font-black text-[#3478ad]">{index + 1}</span>
                      <p className="pt-1 text-sm font-semibold leading-5 text-slate-700">{item}</p>
                    </div>
                  ))}
                </div>
              </article>

              <article className="rounded-[24px] border border-slate-200 bg-white p-6">
                <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#3B82C4]">Prime pitching sectors</p>
                <h3 className="mt-2 text-2xl font-black tracking-[-0.03em] text-slate-950">10 sectors in the legacy program</h3>
                <p className="mt-2 text-xs font-semibold text-slate-500 sm:hidden">Swipe horizontally to browse</p>

                <div className="-mx-6 mt-5 flex snap-x snap-mandatory gap-3 overflow-x-auto px-6 pb-2 [scrollbar-width:none] md:mx-0 md:grid md:grid-cols-2 md:px-0 md:pb-0 xl:grid-cols-3 [&::-webkit-scrollbar]:hidden">
                  {startupSectors.map(([number, title, examples], index) => (
                    <div key={number} className="w-[78vw] max-w-[300px] shrink-0 snap-start rounded-[18px] border border-slate-200 bg-[#fbfdff] p-4 md:w-auto md:max-w-none">
                      <div className="flex items-center justify-between gap-2">
                        <span className={`text-[10px] font-black ${index % 2 === 0 ? "text-[#3B82C4]" : "text-[#51B85B]"}`}>{number}</span>
                        <span className={`h-2 w-2 rounded-full ${index % 2 === 0 ? "bg-[#3B82C4]" : "bg-[#51B85B]"}`} />
                      </div>
                      <h4 className="mt-3 text-sm font-black leading-5 text-slate-950">{title}</h4>
                      <p className="mt-2 text-xs font-medium leading-5 text-slate-600">{examples}</p>
                    </div>
                  ))}
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="py-11 sm:py-14 lg:py-16">
          <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 sm:px-6 lg:grid-cols-[1.08fr_.92fr] lg:gap-12 lg:px-8">
            <div>
              <div className="overflow-hidden rounded-[24px] border border-slate-200 bg-[#f5f7f8] shadow-[0_18px_55px_rgba(15,23,42,.07)] sm:rounded-[28px]">
                <div className="relative aspect-[4/3] bg-white sm:aspect-[16/10]">
                  <SafeImage src={activeImage.src} alt={activeImage.alt} className="h-full w-full object-contain" />

                  <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-slate-950/55 to-transparent p-4 pt-12">
                    <button
                      type="button"
                      onClick={() => moveGallery("left")}
                      aria-label="Previous climate image"
                      className="grid h-10 w-10 place-items-center rounded-full bg-white/95 text-slate-800 shadow-lg"
                    >
                      <ArrowIcon direction="left" />
                    </button>
                    <span className="rounded-full bg-white/95 px-3 py-1.5 text-xs font-black text-slate-800">
                      {activeClimateImage + 1} / {FOUNDATION_IMAGES.climateMission.length}
                    </span>
                    <button
                      type="button"
                      onClick={() => moveGallery("right")}
                      aria-label="Next climate image"
                      className="grid h-10 w-10 place-items-center rounded-full bg-white/95 text-slate-800 shadow-lg"
                    >
                      <ArrowIcon direction="right" />
                    </button>
                  </div>
                </div>
              </div>

              <div className="-mx-4 mt-4 flex snap-x gap-3 overflow-x-auto px-4 pb-2 [scrollbar-width:none] sm:mx-0 sm:px-0 [&::-webkit-scrollbar]:hidden">
                {FOUNDATION_IMAGES.climateMission.map((image, index) => (
                  <button
                    key={image.src}
                    type="button"
                    onClick={() => setActiveClimateImage(index)}
                    aria-label={`View climate campaign image ${index + 1}`}
                    className={`h-20 w-28 shrink-0 snap-start overflow-hidden rounded-xl border-2 bg-slate-100 transition ${
                      activeClimateImage === index ? "border-[#3B82C4]" : "border-transparent hover:border-slate-300"
                    }`}
                  >
                    <SafeImage src={image.src} alt="" className="h-full w-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#51B85B]">Mission: 51 Billions → Zero</p>
              <h2 className="mt-3 text-3xl font-black tracking-[-0.04em] text-slate-950 sm:text-4xl">Join hands for a lower-emission future.</h2>
              <p className="mt-5 text-sm font-medium leading-7 text-slate-600 sm:text-base sm:leading-8">
                The original OXY Foundation material frames the climate challenge around the annual greenhouse-gas emissions associated with how people build, travel, eat and use fossil fuels, and presents “ZERO” as the long-term direction.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
                <div className="rounded-2xl bg-[#f2f8fd] p-4">
                  <p className="text-2xl font-black text-[#3B82C4]">51B</p>
                  <p className="mt-1 text-xs font-semibold leading-5 text-slate-500">campaign reference point</p>
                </div>
                <div className="rounded-2xl bg-[#f2faf3] p-4">
                  <p className="text-2xl font-black text-[#51B85B]">ZERO</p>
                  <p className="mt-1 text-xs font-semibold leading-5 text-slate-500">stated long-term direction</p>
                </div>
                <div className="col-span-2 rounded-2xl bg-slate-50 p-4 sm:col-span-1">
                  <p className="text-2xl font-black text-slate-900">6</p>
                  <p className="mt-1 text-xs font-semibold leading-5 text-slate-500">supplied visuals</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-slate-100 bg-[#f8fbfd] py-11 sm:py-14 lg:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="OXY Foundation proposal"
              title="Green Elections in India"
              copy="The following is a neutral presentation of the supplied OXY Foundation proposal. It does not endorse a party, candidate or voting choice."
            />

            <div className="mt-8 grid overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,.055)] lg:grid-cols-[.72fr_1.28fr]">
              <div className="bg-[linear-gradient(145deg,#3B82C4_0%,#3478ad_56%,#51B85B_145%)] p-5 text-white sm:p-7 lg:p-8">
                <div className="overflow-hidden rounded-[20px] bg-white/95 shadow-xl shadow-blue-950/10">
                  <div className="aspect-[4/3] bg-white">
                    <SafeImage
                      src={FOUNDATION_IMAGES.greenElectionsLead}
                      alt="Radhakrishna Thatavarti - OXY Foundation Green Elections proposal"
                      className="h-full w-full object-contain"
                    />
                  </div>
                </div>
                <div className="mt-5 text-sm font-medium text-white/88">
                  <p><span className="font-extrabold text-white">Presented by:</span> OXY FOUNDATION</p>
                  <p className="mt-2"><span className="font-extrabold text-white">Lead by:</span> Radhakrishna Thatavarti</p>
                  <p className="mt-2"><span className="font-extrabold text-white">Date:</span> 20-03-2024</p>
                </div>
              </div>

              <div className="p-6 sm:p-8 lg:p-10">
                <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#51B85B]">Proposal overview</p>
                <h3 className="mt-2 text-2xl font-black tracking-[-0.03em] text-slate-950 sm:text-3xl">Sustainability in election-related activity</h3>
                <p className="mt-4 text-sm font-medium leading-7 text-slate-600 sm:text-base">
                  The supplied proposal focuses on reducing environmental impact around election-related activity through lower-waste campaigning, renewable energy, sustainable transport, environmental education and related measures.
                </p>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {greenElectionPoints.map((point, index) => (
                    <div key={point} className="flex gap-3 rounded-2xl border border-slate-100 bg-[#fafcfd] p-3.5">
                      <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-[#edf6fd] text-[10px] font-black text-[#3478ad]">{index + 1}</span>
                      <p className="text-xs font-medium leading-5 text-slate-600">{point}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-11 sm:py-14 lg:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Climate transparency"
              title="Greenhouse-gas emissions reporting proposal"
              copy="The supplied material proposes stronger disclosure of fossil-fuel use and greenhouse-gas emissions so environmental impact can be communicated more clearly."
            />

            <div className="mt-8 overflow-hidden rounded-[26px] border border-slate-200 bg-white shadow-[0_16px_50px_rgba(15,23,42,.05)]">
              {disclosureRows.map((row, index) => (
                <div key={row.title} className="grid gap-4 border-b border-slate-200 p-5 last:border-b-0 sm:p-6 md:grid-cols-[.34fr_.66fr] md:gap-7">
                  <div className="flex items-start gap-3">
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[#edf6fd] text-[11px] font-black text-[#3478ad]">{index + 1}</span>
                    <h3 className="pt-1 text-sm font-black text-slate-900 sm:text-base">{row.title}</h3>
                  </div>
                  <ul className="space-y-2">
                    {row.points.map((point) => (
                      <li key={point} className="flex gap-2 text-sm font-medium leading-6 text-slate-600">
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
                <article key={number} className="rounded-[22px] border border-slate-200 bg-[#fbfdff] p-5">
                  <div className="flex items-center gap-3">
                    <span className={`grid h-9 w-9 place-items-center rounded-xl ${index % 2 === 0 ? "bg-[#edf6fd] text-[#3478ad]" : "bg-[#eef8ef] text-[#3f9f49]"}`}>
                      {index % 2 === 0 ? <ChartIcon className="h-4 w-4" /> : <LeafIcon className="h-4 w-4" />}
                    </span>
                    <span className="text-[10px] font-black text-slate-400">{number}</span>
                  </div>
                  <h3 className="mt-4 text-lg font-black tracking-[-0.02em] text-slate-950">{title}</h3>
                  <p className="mt-3 text-sm font-medium leading-6 text-slate-600">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-slate-100 bg-[#f8fbfd] py-11 sm:py-14 lg:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-7 overflow-hidden rounded-[28px] border border-slate-200 bg-white p-5 shadow-[0_20px_60px_rgba(15,23,42,.055)] sm:p-7 lg:grid-cols-[.42fr_.58fr] lg:gap-10 lg:p-9">
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
                <p className="mt-4 text-[10px] font-black uppercase tracking-[0.18em] text-[#51B85B]">Recognition mentioned in the supplied material</p>
                <h2 className="mt-2 text-3xl font-black tracking-[-0.04em] text-slate-950 sm:text-4xl">OXY19 initiative recognition</h2>
                <p className="mt-4 text-sm font-medium leading-7 text-slate-600 sm:text-base sm:leading-8">
                  The legacy OXY Foundation page states that its OXY19 efforts were recognized by actor Rana Daggubati and highlights Radhakrishna&apos;s role in those efforts during the COVID-19 period.
                </p>
                <p className="mt-3 text-xs font-semibold leading-5 text-slate-500">
                  This section preserves the recognition as described in the supplied material and does not independently expand the claim.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-100 bg-white px-4 py-7 text-center text-xs font-semibold text-slate-500 sm:px-6">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-2">
          <OxyFoundationWordmark className="text-lg" />
          <p>© {new Date().getFullYear()} OXY Foundation</p>
        </div>
      </footer>
    </div>
  );
}