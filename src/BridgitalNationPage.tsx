import React, { useMemo, useRef, useState } from "react";
import InitiativeHeader from "./InitiativeHeader";

type VideoLanguage = "English" | "Telugu";

type VideoItem = {
  id: string;
  label: string;
};

const BRAND_BLUE = "#3B82C4";
const BRAND_GREEN = "#51B85B";

const introductionVideos: Record<VideoLanguage, VideoItem[]> = {
  English: [
    { id: "cm8TC1PGdxQ", label: "Introduction 01" },
    { id: "_3B-8rdM1xo", label: "Introduction 02" },
    { id: "FGqJyWBXHb0", label: "Introduction 03" },
    { id: "eqf-RRmH_Ow", label: "Introduction 04" },
    { id: "AdRPEzO7-nM", label: "Introduction 05" },
    { id: "P_tc3YeAjK0", label: "Introduction 06" },
    { id: "hvrkUkJMvJk", label: "Introduction 07" },
  ],
  Telugu: [
    { id: "4M2T3qsMcQs", label: "Introduction 01" },
    { id: "ViGTYQ9lRtY", label: "Introduction 02" },
    { id: "z31KEKAx_so", label: "Introduction 03" },
    { id: "wrs0FwZvL-o", label: "Introduction 04" },
    { id: "J2-dTkWu1as", label: "Introduction 05" },
    { id: "tyMRYfI90Og", label: "Introduction 06" },
  ],
};

const leaderVideos: VideoItem[] = [
  { id: "ZqLtQQg9OWw", label: "Leader View 01" },
  { id: "5yqL_iBFXzQ", label: "Leader View 02" },
  { id: "hYekzVB00ns", label: "Leader View 03" },
];

const sectorCards = [
  {
    number: "01",
    title: "Financial Services",
    worker: "Business correspondents",
    text: "Digital identity verification, risk support, underwriting assistance and service extension at the last mile.",
  },
  {
    number: "02",
    title: "Healthcare",
    worker: "Allied health & ASHA workers",
    text: "Digital protocols, clinical information, resource visibility, care coordination and remote expert support.",
  },
  {
    number: "03",
    title: "Education",
    worker: "Teachers & teaching assistants",
    text: "Administrative automation, learning diagnostics, remedial support, digital content and stronger teacher enablement.",
  },
  {
    number: "04",
    title: "Agriculture",
    worker: "Farm extension workers",
    text: "Precision advisory, digital risk support, marketplace links and coordinated guidance across the farm ecosystem.",
  },
  {
    number: "05",
    title: "Logistics",
    worker: "Commercial vehicle drivers",
    text: "Driving feedback, route and load optimization, platform matching and improved utilization of transport capacity.",
  },
  {
    number: "06",
    title: "Banking Access",
    worker: "Assisted digital banking users",
    text: "Digital account-opening and assisted banking journeys designed to improve access and service reach.",
  },
];

function PlayIcon({ size = "md" }: { size?: "sm" | "md" }) {
  const shell = size === "sm" ? "h-8 w-8" : "h-10 w-10";
  const icon = size === "sm" ? "h-3.5 w-3.5" : "h-4 w-4";

  return (
    <span className={`grid ${shell} place-items-center rounded-full bg-white text-[#2f77b7] shadow-md`} aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="currentColor" className={icon}>
        <path d="M8.5 5.7v12.6L18.7 12 8.5 5.7Z" />
      </svg>
    </span>
  );
}

function ArrowIcon({ direction }: { direction: "left" | "right" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4" aria-hidden="true">
      {direction === "left" ? <path d="m15 18-6-6 6-6" /> : <path d="m9 18 6-6-6-6" />}
    </svg>
  );
}

function ScrollButtons({ onPrev, onNext, dark = false }: { onPrev: () => void; onNext: () => void; dark?: boolean }) {
  const base = dark
    ? "border-white/15 bg-white/10 text-white hover:bg-white/15"
    : "border-slate-200 bg-white text-slate-700 hover:border-[#3B82C4]/35 hover:text-[#2f77b7]";

  return (
    <div className="flex items-center gap-2">
      <button
        type="button"
        onClick={onPrev}
        aria-label="Previous items"
        className={`grid h-10 w-10 place-items-center rounded-full border shadow-sm transition active:scale-95 ${base}`}
      >
        <ArrowIcon direction="left" />
      </button>
      <button
        type="button"
        onClick={onNext}
        aria-label="Next items"
        className={`grid h-10 w-10 place-items-center rounded-full border shadow-sm transition active:scale-95 ${base}`}
      >
        <ArrowIcon direction="right" />
      </button>
    </div>
  );
}

function VideoPlayer({ video, title, compact = false, dark = false }: { video: VideoItem; title: string; compact?: boolean; dark?: boolean }) {
  return (
    <div
      className={`mx-auto w-full overflow-hidden rounded-[18px] border bg-black shadow-[0_16px_46px_rgba(15,23,42,.12)] sm:rounded-[22px] ${
        compact ? "max-w-[720px]" : "max-w-[820px]"
      } ${dark ? "border-white/10" : "border-slate-200"}`}
    >
      <div className="aspect-video w-full">
        <iframe
          key={video.id}
          src={`https://www.youtube-nocookie.com/embed/${video.id}?rel=0`}
          title={title}
          className="h-full w-full"
          loading="eager"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    </div>
  );
}

function VideoCard({
  item,
  active,
  onClick,
  dark = false,
}: {
  item: VideoItem;
  active: boolean;
  onClick: () => void;
  dark?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`group w-[218px] shrink-0 snap-start overflow-hidden rounded-[16px] border text-left transition sm:w-[230px] md:w-auto ${
        dark
          ? active
            ? "border-[#78d780] bg-white/[0.08]"
            : "border-white/10 bg-white/[0.04] hover:border-white/20"
          : active
            ? "border-[#3B82C4] bg-white shadow-[0_10px_26px_rgba(59,130,196,.12)]"
            : "border-slate-200 bg-white hover:border-[#3B82C4]/35"
      } focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3B82C4]`}
    >
      <div className="relative aspect-video overflow-hidden bg-slate-100">
        <img
          src={`https://i.ytimg.com/vi/${item.id}/hqdefault.jpg`}
          alt=""
          loading="lazy"
          className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.02]"
          onError={(event) => {
            event.currentTarget.style.visibility = "hidden";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent" />
        <div className="absolute inset-0 grid place-items-center">
          <PlayIcon size="sm" />
        </div>
        {active && (
          <span className={`absolute left-2.5 top-2.5 rounded-full px-2 py-1 text-[8px] font-black uppercase tracking-[0.1em] text-white ${dark ? "bg-[#51B85B]" : "bg-[#2f77b7]"}`}>
            Playing
          </span>
        )}
      </div>
      <div className="p-3">
        <p className={`text-[13px] font-extrabold ${dark ? "text-white" : "text-slate-950"}`}>{item.label}</p>
      </div>
    </button>
  );
}

function LeaderDesktopItem({ item, active, onClick }: { item: VideoItem; active: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex w-full items-center gap-3 rounded-[16px] border p-2.5 text-left transition ${
        active ? "border-[#74d47c] bg-white/[0.10]" : "border-white/10 bg-white/[0.04] hover:bg-white/[0.07]"
      }`}
    >
      <div className="relative w-[112px] shrink-0 overflow-hidden rounded-xl bg-slate-900">
        <div className="aspect-video">
          <img src={`https://i.ytimg.com/vi/${item.id}/hqdefault.jpg`} alt="" className="h-full w-full object-cover" loading="lazy" />
        </div>
        <div className="absolute inset-0 grid place-items-center bg-black/15">
          <PlayIcon size="sm" />
        </div>
      </div>
      <div className="min-w-0">
        <p className="truncate text-sm font-extrabold text-white">{item.label}</p>
        <p className="mt-1 text-xs font-semibold text-white/45">Play video</p>
      </div>
    </button>
  );
}

function SectionTitle({ eyebrow, title, copy }: { eyebrow: string; title: string; copy?: string }) {
  return (
    <div className="max-w-3xl">
      <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#3B82C4]">{eyebrow}</p>
      <h2 className="mt-2 text-2xl font-black tracking-[-0.035em] text-slate-950 sm:text-3xl">{title}</h2>
      {copy && <p className="mt-3 text-sm font-medium leading-6 text-slate-600 sm:text-base sm:leading-7">{copy}</p>}
    </div>
  );
}

export default function BridgitalNationPage() {
  const [language, setLanguage] = useState<VideoLanguage>("English");
  const [selectedIntroId, setSelectedIntroId] = useState(introductionVideos.English[0].id);
  const [selectedLeaderId, setSelectedLeaderId] = useState(leaderVideos[0].id);

  const introRowRef = useRef<HTMLDivElement>(null);
  const leaderRowRef = useRef<HTMLDivElement>(null);
  const sectorRowRef = useRef<HTMLDivElement>(null);

  const introVideos = useMemo(() => introductionVideos[language], [language]);
  const selectedIntro = introVideos.find((item) => item.id === selectedIntroId) ?? introVideos[0];
  const selectedLeader = leaderVideos.find((item) => item.id === selectedLeaderId) ?? leaderVideos[0];

  const changeLanguage = (next: VideoLanguage) => {
    setLanguage(next);
    setSelectedIntroId(introductionVideos[next][0].id);
    requestAnimationFrame(() => introRowRef.current?.scrollTo({ left: 0, behavior: "smooth" }));
  };

  const scrollRow = (ref: React.RefObject<HTMLDivElement | null>, direction: "left" | "right") => {
    const width = ref.current?.clientWidth ?? 320;
    ref.current?.scrollBy({ left: direction === "left" ? -width * 0.82 : width * 0.82, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <InitiativeHeader active="bridgital" />

      <main>
        {/* INTRO + FEATURED VIDEO */}
        <section className="border-b border-slate-100 bg-[radial-gradient(circle_at_8%_8%,rgba(81,184,91,.10),transparent_25%),radial-gradient(circle_at_90%_10%,rgba(59,130,196,.12),transparent_27%),linear-gradient(180deg,#f9fcfe_0%,#ffffff_100%)]">
          <div className="mx-auto tvrk-container py-7 sm:py-9 lg:py-11">
            <div className="grid items-center gap-7 lg:grid-cols-[minmax(0,.72fr)_minmax(0,1.28fr)] lg:gap-10">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-[#3B82C4]/15 bg-white px-3.5 py-2 shadow-sm">
                  <span className="h-2 w-2 rounded-full bg-[#51B85B]" />
                  <span className="text-[10px] font-black uppercase tracking-[0.18em] text-[#2f77b7]">Bridgital Nation</span>
                </div>

                <h1 className="mt-4 max-w-xl text-[clamp(2rem,4vw,3.55rem)] font-black leading-[1.01] tracking-[-0.05em] text-slate-950">
                  Human capability,
                  <span className="block text-[#3B82C4]">amplified by digital tools.</span>
                </h1>

                <p className="mt-4 max-w-lg text-sm font-medium leading-6 text-slate-600 sm:text-base sm:leading-7">
                  Start with the introduction series, then explore leaders&apos; views and Bridgital use cases across key sectors.
                </p>

                <div className="mt-5 grid w-full max-w-[360px] grid-cols-2 rounded-2xl border border-slate-200 bg-white p-1.5 shadow-sm">
                  {(["English", "Telugu"] as VideoLanguage[]).map((item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() => changeLanguage(item)}
                      className={`rounded-xl px-3 py-2.5 text-sm font-extrabold transition ${
                        language === item ? "bg-[#2f77b7] text-white shadow-sm" : "text-[#3478ad] hover:bg-[#f3f8fc]"
                      }`}
                    >
                      {item} ({introductionVideos[item].length})
                    </button>
                  ))}
                </div>
              </div>

              <div className="min-w-0">
                <VideoPlayer video={selectedIntro} title={`Bridgital Nation ${language} ${selectedIntro.label}`} />
                <div className="mx-auto mt-3 flex max-w-[820px] items-center justify-between gap-3">
                  <div className="min-w-0">
                    <p className="text-[9px] font-black uppercase tracking-[0.17em] text-[#51B85B]">Now playing</p>
                    <p className="mt-1 truncate text-sm font-black text-slate-950 sm:text-base">
                      {language} · {selectedIntro.label}
                    </p>
                  </div>
                  <span className="shrink-0 rounded-full bg-[#f2f8fd] px-3 py-1.5 text-[10px] font-extrabold text-[#3478ad]">
                    {introVideos.length} videos
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-7 sm:mt-8">
              <div className="mb-3 flex items-center justify-between gap-3">
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#2f77b7]">{language} introduction videos</p>
                  <p className="mt-1 text-xs font-semibold text-slate-500 md:hidden">Use arrows or swipe</p>
                </div>
                <div className="md:hidden">
                  <ScrollButtons
                    onPrev={() => scrollRow(introRowRef, "left")}
                    onNext={() => scrollRow(introRowRef, "right")}
                  />
                </div>
              </div>

              <div
                ref={introRowRef}
                className="-mx-4 flex snap-x snap-mandatory gap-3 overflow-x-auto px-4 pb-3 scroll-smooth [scrollbar-width:none] sm:-mx-6 sm:px-6 md:mx-0 md:grid md:grid-cols-3 md:overflow-visible md:px-0 lg:grid-cols-4 xl:grid-cols-7 [&::-webkit-scrollbar]:hidden"
              >
                {introVideos.map((item) => (
                  <VideoCard
                    key={item.id}
                    item={item}
                    active={item.id === selectedIntro.id}
                    onClick={() => setSelectedIntroId(item.id)}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* LEADERS */}
        <section className="bg-[#102435] py-10 sm:py-12 lg:py-14">
          <div className="mx-auto tvrk-container">
            <div className="grid gap-7 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-start">
              <div className="min-w-0">
                <div className="mb-5 max-w-2xl">
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#8be091]">Leaders&apos; views</p>
                  <h2 className="mt-2 text-2xl font-black tracking-[-0.035em] text-white sm:text-3xl">Perspectives on Bridgital Nation</h2>
                  <p className="mt-3 text-sm font-medium leading-6 text-white/60 sm:text-base sm:leading-7">
                    Select a leader view and watch it directly on this page.
                  </p>
                </div>

                <VideoPlayer video={selectedLeader} title={`Bridgital Nation ${selectedLeader.label}`} compact dark />
                <div className="mx-auto mt-3 flex max-w-[720px] items-center justify-between gap-3">
                  <div>
                    <p className="text-[9px] font-black uppercase tracking-[0.17em] text-[#8be091]">Selected video</p>
                    <p className="mt-1 text-sm font-black text-white sm:text-base">{selectedLeader.label}</p>
                  </div>
                  <span className="rounded-full bg-white/10 px-3 py-1.5 text-[10px] font-extrabold text-white/70">3 leader videos</span>
                </div>
              </div>

              <aside className="hidden space-y-3 lg:block">
                <p className="mb-1 text-[10px] font-black uppercase tracking-[0.18em] text-white/45">Choose a leader video</p>
                {leaderVideos.map((item) => (
                  <LeaderDesktopItem
                    key={item.id}
                    item={item}
                    active={item.id === selectedLeader.id}
                    onClick={() => setSelectedLeaderId(item.id)}
                  />
                ))}
              </aside>
            </div>

            <div className="mt-6 lg:hidden">
              <div className="mb-3 flex items-center justify-between gap-3">
                <p className="text-[10px] font-black uppercase tracking-[0.18em] text-white/55">Leader videos</p>
                <ScrollButtons
                  dark
                  onPrev={() => scrollRow(leaderRowRef, "left")}
                  onNext={() => scrollRow(leaderRowRef, "right")}
                />
              </div>

              <div
                ref={leaderRowRef}
                className="-mx-4 flex snap-x snap-mandatory gap-3 overflow-x-auto px-4 pb-2 scroll-smooth [scrollbar-width:none] sm:-mx-6 sm:px-6 [&::-webkit-scrollbar]:hidden"
              >
                {leaderVideos.map((item) => (
                  <VideoCard
                    key={item.id}
                    item={item}
                    active={item.id === selectedLeader.id}
                    onClick={() => setSelectedLeaderId(item.id)}
                    dark
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SECTORS */}
        <section className="py-10 sm:py-13 lg:py-16">
          <div className="mx-auto tvrk-container">
            <div className="flex items-end justify-between gap-4">
              <SectionTitle
                eyebrow="Bridgital platforms"
                title="One model across multiple sectors"
                copy="Human expertise stays central while digital tools improve access, coordination and service delivery."
              />
              <div className="hidden md:block lg:hidden">
                <ScrollButtons
                  onPrev={() => scrollRow(sectorRowRef, "left")}
                  onNext={() => scrollRow(sectorRowRef, "right")}
                />
              </div>
            </div>

            <div className="mt-6 flex items-center justify-between md:hidden">
              <p className="text-xs font-semibold text-slate-500">Swipe or use arrows</p>
              <ScrollButtons
                onPrev={() => scrollRow(sectorRowRef, "left")}
                onNext={() => scrollRow(sectorRowRef, "right")}
              />
            </div>

            <div
              ref={sectorRowRef}
              className="-mx-4 mt-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-3 scroll-smooth [scrollbar-width:none] sm:-mx-6 sm:px-6 md:mx-0 md:flex md:overflow-x-auto md:px-0 lg:grid lg:grid-cols-3 lg:overflow-visible [&::-webkit-scrollbar]:hidden"
            >
              {sectorCards.map((item, index) => (
                <article
                  key={item.number}
                  className="w-[270px] shrink-0 snap-start rounded-[20px] border border-slate-200 bg-white p-5 shadow-[0_10px_30px_rgba(15,23,42,.04)] sm:w-[300px] lg:w-auto"
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className={`text-xs font-black ${index % 2 === 0 ? "text-[#3B82C4]" : "text-[#51B85B]"}`}>{item.number}</span>
                    <span className={`h-2.5 w-2.5 rounded-full ${index % 2 === 0 ? "bg-[#3B82C4]" : "bg-[#51B85B]"}`} />
                  </div>
                  <h3 className="mt-4 text-lg font-black tracking-[-0.025em] text-slate-950 sm:text-xl">{item.title}</h3>
                  <p className="mt-2 text-[10px] font-black uppercase tracking-[0.11em] text-[#3478ad]">{item.worker}</p>
                  <p className="mt-3 text-sm font-medium leading-6 text-slate-600">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* INSTITUTE */}
        <section className="pb-12 sm:pb-16">
          <div className="mx-auto tvrk-container overflow-hidden rounded-[24px] border border-slate-200 bg-[#f7fbfd] p-6 sm:p-8 lg:p-9">
            <div className="grid gap-5 lg:grid-cols-[minmax(0,.7fr)_minmax(0,1.3fr)] lg:items-center">
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#3B82C4]">Global Bridgital Institute</p>
                <h2 className="mt-2 text-2xl font-black tracking-[-0.035em] text-slate-950 sm:text-3xl">A platform for Bridgital thinking</h2>
              </div>
              <div>
                <h3 className="text-lg font-black text-slate-950 sm:text-xl">J A Chowdary and the Global Bridgital Initiative</h3>
                <p className="mt-3 max-w-3xl text-sm font-medium leading-7 text-slate-600">
                  The initiative combines frontline human capability with practical digital support across important service sectors.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-100 bg-white py-7 text-center text-xs font-semibold text-slate-500">
        <span style={{ color: BRAND_BLUE }} className="font-black">BRIDGITAL</span>{" "}
        <span style={{ color: BRAND_GREEN }} className="font-black">NATION</span>
        <span className="mx-2 text-slate-300">•</span>
        © {new Date().getFullYear()}
      </footer>
    </div>
  );
}