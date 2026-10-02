import React from "react";
import { SiGooglemeet } from "react-icons/si";
import InitiativeHeader from "./InitiativeHeader";

const GOOGLE_MEET_URL = "https://meet.google.com/fwn-kqkc-cmb";
const GOOGLE_MEET_IMAGE = "https://i.ibb.co/4R5DgFLy/ereee.png";

function GoogleMeetSection() {
  return (
    <div className="meet-page min-h-screen bg-[#211b67] text-white">
      <style>{`
        .meet-page .meet-background {
          background: linear-gradient(125deg, #211b67, #35247a, #70467f, #35247a);
          background-size: 250% 250%;
          animation: meet-gradient 24s ease-in-out infinite;
        }

        .meet-page .meet-content > * {
          animation: meet-reveal 700ms cubic-bezier(.22, 1, .36, 1) both;
        }
        .meet-page .meet-content > :nth-child(2) { animation-delay: 80ms; }
        .meet-page .meet-content > :nth-child(3) { animation-delay: 160ms; }
        .meet-page .meet-content > :nth-child(4) { animation-delay: 240ms; }
        .meet-page .meet-content > :nth-child(5) { animation-delay: 320ms; }
        .meet-page .meet-content > :nth-child(6) { animation-delay: 400ms; }

        .meet-page .meet-poster {
          animation: meet-fade 900ms ease-out 200ms both,
                     meet-float 7s ease-in-out 1100ms infinite;
          filter: drop-shadow(0 18px 28px rgba(12, 7, 42, .22));
        }

        .meet-page .meet-join {
          overflow: hidden;
          isolation: isolate;
          transition: background-color 200ms ease, box-shadow 200ms ease;
        }
        .meet-page .meet-join::before {
          content: "";
          position: absolute;
          inset: 0;
          z-index: -1;
          background: linear-gradient(110deg, transparent 25%, rgba(255,255,255,.8) 50%, transparent 75%);
          transform: translateX(-110%);
        }
        .meet-page .meet-arrow { transition: transform 200ms ease; }
        .meet-page .meet-join:focus-visible .meet-arrow { transform: translateX(3px); }

        @media (hover: hover) {
          .meet-page .meet-join:hover {
            box-shadow: 0 12px 30px rgba(0,0,0,.24);
          }
          .meet-page .meet-join:hover::before {
            animation: meet-shine 650ms ease-out;
          }
          .meet-page .meet-join:hover .meet-arrow { transform: translateX(3px); }
        }

        @keyframes meet-reveal {
          from { opacity: 0; transform: translateY(14px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes meet-fade {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes meet-gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes meet-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        @keyframes meet-shine {
          to { transform: translateX(110%); }
        }

        @media (max-width: 639px) {
          .meet-page .meet-poster { animation: meet-fade 700ms ease-out 200ms both; }
        }
        @media (prefers-reduced-motion: reduce) {
          .meet-page .meet-background,
          .meet-page .meet-content > *,
          .meet-page .meet-poster,
          .meet-page .meet-join::before {
            animation: none !important;
          }
          .meet-page .meet-join,
          .meet-page .meet-arrow { transition: none; }
          .meet-page .meet-join .meet-arrow { transform: none; }
        }
      `}</style>
      <InitiativeHeader active="home" />

      <main className="meet-background">
        {/* Top spacing allows for the existing fixed header. */}
        <section
          id="google-meet"
          aria-labelledby="google-meet-title"
          className="mx-auto grid min-h-screen w-full max-w-7xl items-center gap-10 px-5 pb-10 pt-28 sm:px-8 sm:pb-14 sm:pt-32 lg:grid-cols-2 lg:gap-14 lg:px-10 lg:py-36"
        >
          <div className="meet-content min-w-0">
            <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#f5d6bc] sm:text-sm">
              <SiGooglemeet
                aria-hidden="true"
                className="h-5 w-5 shrink-0 text-[#80e2b2]"
              />
              Daily Google Meet
            </p>

            <h1
              id="google-meet-title"
              className="mt-4 max-w-xl text-[30px] font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl"
            >
              Let’s connect.
              <br />
              Every day at <span className="text-[#f5d6bc]">9:30 PM.</span>
            </h1>

            <p className="mt-4 max-w-lg text-[15px] leading-7 text-white/80 sm:text-base">
              Understand how loans and funds are processed, ask your questions,
              and explore opportunities across our marketplace platforms.
            </p>

            <dl className="mt-7 space-y-4 border-y border-white/20 py-5 text-sm sm:text-base">
              <div className="grid grid-cols-[64px_minmax(0,1fr)] gap-3 sm:grid-cols-[80px_minmax(0,1fr)]">
                <dt className="text-white/70">When</dt>
                <dd className="m-0 font-semibold">
                  Every day · 9:30–10:30 PM IST
                </dd>
              </div>
              <div className="grid grid-cols-[64px_minmax(0,1fr)] gap-3 sm:grid-cols-[80px_minmax(0,1fr)]">
                <dt className="text-white/70">Speaker</dt>
                <dd className="m-0 leading-6">
                  Thatavarti Venkata RadhaKrishna
                </dd>
              </div>
            </dl>

            <a
              href={GOOGLE_MEET_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Join the daily Google Meet at 9:30 PM IST (opens in a new tab)"
              className="meet-join group relative mt-7 inline-flex min-h-[52px] w-full items-center justify-center gap-3 rounded-xl bg-[#e8f5ee] px-6 py-3 text-sm font-semibold text-[#17493c] shadow-lg hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:w-auto sm:text-base"
            >
              <SiGooglemeet
                aria-hidden="true"
                className="h-5 w-5 shrink-0 text-[#00897B]"
              />
              Join Google Meet
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="meet-arrow h-4 w-4 shrink-0"
              >
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>

            <p className="mt-6 max-w-lg text-xs leading-6 text-white/75 sm:text-sm">
              <strong className="font-semibold text-white">Priority Q&amp;A:</strong>{" "}
              Lenders and buyers first, followed by questions on loans, jobs,
              agents, real estate, AI, gold and silver.
            </p>

          </div>

          <img
            src={GOOGLE_MEET_IMAGE}
            alt="Daily Google Meet event poster"
            decoding="async"
            className="meet-poster mx-auto block h-auto max-h-[560px] w-full max-w-md rounded-xl object-contain lg:max-w-full"
          />
        </section>
      </main>
    </div>
  );
}

export default GoogleMeetSection;
