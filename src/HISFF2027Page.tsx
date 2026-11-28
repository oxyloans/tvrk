import React from "react";
import {
  ArrowUpRight,
  CalendarDays,
  Clapperboard,
  Clock3,
  Film,
  Languages,
  MapPin,
  Ticket,
  Trophy,
  Users,
} from "lucide-react";
import InitiativeHeader from "./InitiativeHeader";
import festivalImage from "./assets/film_fesv.webp";

const SUBMISSION_URL = "https://filmfreeway.com/HISFF2026";

const highlights = [
  { icon: Film, title: "International screenings", text: "Discover compelling short films and competitive cinema." },
  { icon: Trophy, title: "Awards & recognition", text: "Celebrate excellence across filmmaking and special categories." },
  { icon: Users, title: "Filmmaker community", text: "Meet emerging creators, filmmakers and cinema enthusiasts." },
  { icon: Clapperboard, title: "48-hour challenge", text: "Take part in a fast-paced filmmaking competition." },
];

const details = [
  { icon: CalendarDays, label: "Festival Dates", value: "January 29–31, 2027" },
  { icon: MapPin, label: "Venue", value: "Prasads Multiplex, Hyderabad" },
  { icon: Clock3, label: "Submission Deadline", value: "December 6, 2026" },
  { icon: Film, label: "Film Duration", value: "Maximum 30 minutes" },
  { icon: Languages, label: "Languages", value: "All languages; English subtitles required" },
  { icon: Ticket, label: "Standard Fee", value: "₹700" },
];

export default function HISFF2027Page() {
  return (
    <div className="hisff-page min-h-screen w-full overflow-hidden bg-[#090817] text-white">
      <InitiativeHeader active="festival" />

      <style>{`
        .hisff-page, .hisff-page * { box-sizing: border-box; }
        .hisff-page .tvrk-container {
          width: calc(100% - 24px);
          max-width: 1180px;
          margin-inline: auto;
        }
        @media (min-width: 640px) {
          .hisff-page .tvrk-container { width: calc(100% - 48px); }
        }
        @media (min-width: 1024px) {
          .hisff-page .tvrk-container { width: calc(100% - 64px); }
        }
        .hisff-page :is(h1,h2,h3,p) { overflow-wrap: anywhere; }
        .hisff-grain {
          background-image:
            radial-gradient(circle at 15% 20%, rgba(255,183,83,.16), transparent 24rem),
            radial-gradient(circle at 85% 12%, rgba(109,92,246,.15), transparent 25rem);
        }
        .hisff-title {
          font-size: clamp(2.65rem, 5vw, 4.75rem);
          line-height: .98;
          letter-spacing: -.055em;
        }
        @media (min-width: 1024px) {
          .hisff-title { max-width: 650px; }
        }
        @media (max-width: 639px) {
          .hisff-title { font-size: clamp(2.35rem, 12vw, 3.35rem); }
        }
        .hisff-poster {
          aspect-ratio: 1 / 1;
          object-fit: contain;
          background: #eef3ff;
        }
      `}</style>

      <main>
        <section className="hisff-grain relative pt-14 sm:pt-16 lg:pt-18">
          <div className="tvrk-container pb-10 sm:pb-12 lg:pb-14">
            <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,.95fr)_minmax(380px,1.05fr)] lg:gap-10 xl:gap-14">
              <div className="relative z-10">
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#ffd29a]/25 bg-[#ffd29a]/10 px-4 py-2 text-xs font-bold uppercase tracking-[.18em] text-[#ffd29a]">
                  <span className="h-2 w-2 rounded-full bg-[#ffb74d] shadow-[0_0_18px_rgba(255,183,77,.9)]" />
                  Season II · 2027
                </div>
                <h1 className="hisff-title font-display font-extrabold text-balance">
                  Hyderabad
                  <span className="mt-2 block text-[#ffd29a]">International</span>
                  <span className="mt-2 block">Short Film Festival</span>
                </h1>
                <p className="mt-6 max-w-xl text-lg font-semibold leading-relaxed text-white/90 sm:text-xl">
                  Celebrate Creativity, Cinema and Independent Storytelling!
                </p>
                <p className="mt-4 max-w-xl text-sm leading-7 text-[#c9c7d9] sm:text-base">
                  HISFF returns for its second edition, bringing emerging filmmakers,
                  independent storytellers, film enthusiasts and creative talent from
                  around the world to Hyderabad.
                </p>
                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={SUBMISSION_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#ffd29a] px-6 text-sm font-extrabold text-[#17122e] transition hover:-translate-y-0.5 hover:bg-white"
                  >
                    Submit Your Film
                    <ArrowUpRight size={18} aria-hidden="true" />
                  </a>
                  <a
                    href="#festival-details"
                    className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/20 px-6 text-sm font-bold text-white transition hover:border-[#ffd29a]/60 hover:bg-white/5"
                  >
                    Festival Details
                  </a>
                </div>
              </div>

              <div className="relative mx-auto w-full max-w-[530px]">
                <div className="absolute -inset-5 rotate-3 rounded-[28px] border border-[#ffd29a]/15 bg-[#ffd29a]/5" />
                <div className="relative overflow-hidden rounded-[24px] border border-white/12 bg-[#15122b] p-2 shadow-[0_30px_90px_rgba(0,0,0,.45)]">
                  <img
                    src={festivalImage}
                    alt="Hyderabad International Short Film Festival 2027 poster"
                    className="hisff-poster w-full rounded-[18px]"
                    loading="eager"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-white/8 bg-white/[0.025] py-12 sm:py-16">
          <div className="tvrk-container">
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {highlights.map(({ icon: Icon, title, text }) => (
                <article key={title} className="rounded-2xl border border-white/10 bg-white/[0.035] p-5">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[#ffd29a] text-[#17122e]">
                    <Icon size={21} strokeWidth={2} aria-hidden="true" />
                  </div>
                  <h2 className="font-display text-base font-bold">{title}</h2>
                  <p className="mt-2 text-sm leading-6 text-[#bdbbd0]">{text}</p>
                </article>
              ))}
            </div>

            <div className="mt-12 grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(280px,.65fr)]">
              <div>
                <p className="text-xs font-extrabold uppercase tracking-[.2em] text-[#ffd29a]">About the festival</p>
                <h2 className="mt-3 max-w-2xl font-display text-3xl font-extrabold leading-tight sm:text-4xl">
                  Three days of films, ideas and creative exchange
                </h2>
                <p className="mt-5 max-w-3xl text-sm leading-7 text-[#c9c7d9] sm:text-base sm:leading-8">
                  Scheduled for January 29–31, 2027, at Prasads Multiplex, Hyderabad,
                  the three-day festival provides a platform for independent, regional,
                  experimental and socially relevant cinema. Organized by the Dadasaheb
                  Phalke School of Film Studies, HISFF aims to encourage meaningful
                  storytelling, cultural exchange and creative collaboration.
                </p>
              </div>
              <div className="rounded-2xl border border-[#ffd29a]/20 bg-gradient-to-br from-[#ffd29a]/12 to-transparent p-6">
                <p className="text-sm font-bold text-[#ffd29a]">Festival scope</p>
                <ul className="mt-4 space-y-3 text-sm text-white/85">
                  {[
                    "Student and women filmmaker recognition",
                    "Tribal expressions and social storytelling",
                    "Competitive and international selections",
                    "Networking for creators and cinema enthusiasts",
                  ].map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#ffd29a]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="festival-details" className="scroll-mt-24 py-14 sm:py-18">
          <div className="tvrk-container">
            <div className="mb-8 text-center">
              <p className="text-xs font-extrabold uppercase tracking-[.2em] text-[#ffd29a]">Plan your submission</p>
              <h2 className="mt-3 font-display text-3xl font-extrabold sm:text-4xl">Festival Details</h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {details.map(({ icon: Icon, label, value }) => (
                <article key={label} className="rounded-2xl border border-white/10 bg-[#111029] p-5 sm:p-6">
                  <Icon size={20} className="text-[#ffd29a]" aria-hidden="true" />
                  <p className="mt-4 text-xs font-bold uppercase tracking-wider text-white/50">{label}</p>
                  <p className="mt-2 text-sm font-bold leading-6 text-white sm:text-base">{value}</p>
                </article>
              ))}
            </div>

            <div className="mt-8 rounded-[24px] border border-[#ffd29a]/20 bg-gradient-to-r from-[#201a46] to-[#151329] p-6 sm:p-8">
              <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
                <div>
                  <h2 className="font-display text-2xl font-extrabold">Ready to showcase your talent?</h2>
                  <p className="mt-2 max-w-2xl text-sm leading-6 text-[#c9c7d9]">
                    Filmmakers can submit eligible films completed after January 1, 2025.
                    Don’t miss the chance to connect with the world of cinema.
                  </p>
                </div>
                <a
                  href={SUBMISSION_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-full bg-[#ffd29a] px-6 text-sm font-extrabold text-[#17122e] transition hover:-translate-y-0.5 hover:bg-white"
                >
                  Submit at FilmFreeway
                  <ArrowUpRight size={18} aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
