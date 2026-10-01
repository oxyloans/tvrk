import React from "react";
import { SiGooglemeet } from "react-icons/si";
import InitiativeHeader from "./InitiativeHeader";

const GOOGLE_MEET_URL = "https://meet.google.com/fwn-kqkc-cmb";

const GOOGLE_MEET_IMAGE =
  "https://i.ibb.co/4R5DgFLy/ereee.png";

function GoogleMeetSection() {
  return (
    <div className="min-h-screen bg-[#211b67]">
      {/* =========================
          HEADER
      ========================== */}
      <InitiativeHeader active="home" />

      {/* =========================
          GOOGLE MEET SECTION
      ========================== */}
      <main>
        <section
          id="google-meet"
          className="
            relative
            overflow-hidden
            pb-10
            pt-[96px]
            sm:pb-14
            sm:pt-[108px]
            lg:pb-16
            lg:pt-[120px]
          "
        >
          {/* Background */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -left-32 top-10 h-[360px] w-[360px] rounded-full bg-[#795cff]/20 blur-[110px]" />
            <div className="absolute -right-32 bottom-0 h-[380px] w-[380px] rounded-full bg-[#ffb88c]/20 blur-[120px]" />
          </div>

          <div
            className="
              relative
              mx-auto
              w-[calc(100%-32px)]
              max-w-[1500px]
              sm:w-[calc(100%-48px)]
              lg:w-[calc(100%-64px)]
              xl:w-[calc(100%-96px)]
            "
          >
            {/* PAGE HEADING */}
            <div className="mb-6 text-center sm:mb-8 lg:mb-10">
              <div
                className="
                  mx-auto
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  rounded-full
                  border
                  border-white/15
                  bg-white/[0.08]
                  px-4
                  py-2
                  backdrop-blur-md
                "
              >
                <SiGooglemeet className="h-4 w-4 text-[#64d89d]" />

                <span
                  className="
                    text-[10px]
                    font-extrabold
                    uppercase
                    tracking-[0.15em]
                    text-white/80
                    sm:text-[11px]
                  "
                >
                  Daily Live Session
                </span>
              </div>

              <h1
                className="
                  mt-4
                  font-display
                  text-[2rem]
                  font-extrabold
                  leading-[1.05]
                  tracking-[-0.045em]
                  text-white
                  sm:text-[2.8rem]
                  lg:text-[3.5rem]
                  xl:text-[4rem]
                "
              >
                EVERY DAY GOOGLE MEET
              </h1>

              <p
                className="
                  mx-auto
                  mt-3
                  max-w-[760px]
                  text-[13px]
                  font-medium
                  leading-6
                  text-white/70
                  sm:text-[15px]
                  sm:leading-7
                "
              >
                Connect every day, understand opportunities, ask questions,
                and explore the OXY ecosystem directly with our team.
              </p>
            </div>

            {/* MAIN CARD */}
            <div
              className="
                relative
                overflow-hidden
                rounded-[24px]
                border
                border-white/20
                bg-[linear-gradient(135deg,#171052_0%,#31206f_42%,#70467f_100%)]
                shadow-[0_24px_65px_rgba(10,5,55,0.35)]
                sm:rounded-[30px]
                lg:rounded-[34px]
              "
            >
              {/* Decorative Glow */}
              <div className="pointer-events-none absolute -left-20 -top-24 h-64 w-64 rounded-full bg-[#8c7cff]/20 blur-3xl" />

              <div className="pointer-events-none absolute -bottom-28 right-0 h-72 w-72 rounded-full bg-[#ffbc8d]/20 blur-3xl" />

              <div
                className="
                  relative
                  grid
                  items-center
                  gap-7
                  px-5
                  py-7
                  sm:px-8
                  sm:py-9
                  md:gap-9
                  lg:grid-cols-[minmax(0,1.05fr)_minmax(360px,.95fr)]
                  lg:gap-12
                  lg:px-12
                  lg:py-12
                  xl:px-14
                  xl:py-14
                "
              >
                {/* =========================
                    LEFT CONTENT
                ========================== */}
                <div className="min-w-0">
                  <div
                    className="
                      inline-flex
                      items-center
                      gap-2
                      rounded-full
                      border
                      border-white/20
                      bg-white/10
                      px-3
                      py-2
                      text-[10px]
                      font-extrabold
                      uppercase
                      tracking-[0.14em]
                      text-white
                      backdrop-blur-md
                      sm:text-[11px]
                    "
                  >
                    <SiGooglemeet className="h-4 w-4 shrink-0 text-[#65d89e]" />

                    Daily Google Meet
                  </div>

                  <h2
                    className="
                      mt-4
                      max-w-[760px]
                      font-display
                      text-[1.75rem]
                      font-extrabold
                      leading-[1.08]
                      tracking-[-0.04em]
                      text-white
                      sm:text-[2.3rem]
                      lg:text-[2.7rem]
                      xl:text-[3rem]
                    "
                  >
                    Join Our Daily Live Discussion
                  </h2>

                  <p
                    className="
                      mt-4
                      max-w-[720px]
                      text-[13px]
                      font-medium
                      leading-6
                      text-white/85
                      sm:text-[15px]
                      sm:leading-7
                    "
                  >
                    RBI Approved P2P NBFC — understand lending, loans, jobs,
                    real estate, AI, gold &amp; silver, and explore opportunities
                    across our marketplace platforms.
                  </p>

                  {/* =========================
                      TIME CARD
                  ========================== */}
                  <div
                    className="
                      mt-5
                      flex
                      max-w-[650px]
                      items-start
                      gap-3
                      rounded-2xl
                      border
                      border-white/15
                      bg-white/[0.09]
                      p-4
                      backdrop-blur-md
                      sm:gap-4
                      sm:p-5
                    "
                  >
                    <span
                      className="
                        grid
                        h-11
                        w-11
                        shrink-0
                        place-items-center
                        rounded-xl
                        bg-white
                        shadow-md
                        sm:h-12
                        sm:w-12
                      "
                    >
                      <SiGooglemeet className="h-5 w-5 text-[#00897B] sm:h-6 sm:w-6" />
                    </span>

                    <div className="min-w-0">
                      <p
                        className="
                          text-[10px]
                          font-extrabold
                          uppercase
                          tracking-[0.14em]
                          text-[#ffd0bc]
                          sm:text-xs
                        "
                      >
                        Every Day
                      </p>

                      <p
                        className="
                          mt-1
                          text-[17px]
                          font-extrabold
                          leading-tight
                          text-white
                          sm:text-[21px]
                        "
                      >
                        09:30 PM – 10:30 PM IST
                      </p>

                      <p
                        className="
                          mt-1.5
                          text-[11px]
                          font-medium
                          leading-5
                          text-white/65
                          sm:text-[13px]
                        "
                      >
                        Live Google Meet with Thatavarti Venkata RadhaKrishna
                      </p>
                    </div>
                  </div>

                  {/* =========================
                      PRIMARY FOCUS
                  ========================== */}
                  <div className="mt-5 max-w-[720px]">
                    <p
                      className="
                        text-[11px]
                        font-extrabold
                        uppercase
                        tracking-[0.13em]
                        text-[#ffd0bc]
                        sm:text-[13px]
                      "
                    >
                      Primary Focus
                    </p>

                    <p
                      className="
                        mt-2
                        text-[12px]
                        font-medium
                        leading-6
                        text-white/80
                        sm:text-[14px]
                        sm:leading-7
                      "
                    >
                      Priority is given to lenders and buyers to understand how
                      loans and funds are processed. The discussion then covers
                      loan queries, jobs, agents, marketplace opportunities and
                      related platform services.
                    </p>
                  </div>

                  {/* SPEAKER */}
                  <div
                    className="
                      mt-5
                      flex
                      flex-wrap
                      items-center
                      gap-x-2
                      gap-y-1
                      text-[12px]
                      text-white/70
                      sm:text-[13px]
                    "
                  >
                    <span className="font-extrabold text-white">
                      Speaker:
                    </span>

                    <span>Thatavarti Venkata RadhaKrishna</span>
                  </div>

                  {/* =========================
                      JOIN BUTTON
                  ========================== */}
                  <div className="mt-6">
                    <a
                      href={GOOGLE_MEET_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Join Google Meet every day at 09:30 PM IST"
                      className="
                        group
                        inline-flex
                        min-h-[54px]
                        w-full
                        items-center
                        justify-center
                        gap-3
                        rounded-[15px]
                        border
                        border-white/30
                        bg-[linear-gradient(180deg,#ffffff_0%,#eefaf6_47%,#d6eee7_100%)]
                        px-4
                        py-3
                        text-center
                        font-extrabold
                        text-[#17493c]
                        shadow-[inset_0_1px_0_rgba(255,255,255,.95),0_10px_26px_rgba(0,0,0,.22)]
                        transition
                        duration-200
                        hover:-translate-y-0.5
                        hover:shadow-[inset_0_1px_0_rgba(255,255,255,.95),0_15px_34px_rgba(0,0,0,.28)]
                        sm:w-auto
                        sm:min-w-[330px]
                        sm:px-6
                      "
                    >
                      <SiGooglemeet className="h-5 w-5 shrink-0 text-[#00897B]" />

                      <span className="flex flex-col items-start leading-tight">
                        <span className="text-[13px] sm:text-[14px]">
                          Join Google Meet
                        </span>

                        <span
                          className="
                            mt-0.5
                            text-[9px]
                            font-bold
                            tracking-[0.03em]
                            text-[#4c726a]
                            sm:text-[11px]
                          "
                        >
                          EVERY DAY · 09:30 PM IST
                        </span>
                      </span>

                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="
                          ml-1
                          h-4
                          w-4
                          shrink-0
                          transition-transform
                          duration-200
                          group-hover:translate-x-1
                        "
                        aria-hidden="true"
                      >
                        <path
                          d="M5 12h14M13 6l6 6-6 6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </a>
                  </div>

                  <p
                    className="
                      mt-4
                      max-w-[650px]
                      text-[10px]
                      font-medium
                      leading-5
                      text-white/55
                      sm:text-[12px]
                    "
                  >
                    Share the meeting with your friends and family and explore
                    opportunities across tvradhakrishna.com.
                  </p>
                </div>

                {/* =========================
                    RIGHT IMAGE
                ========================== */}
                <div className="relative min-w-0">
                  <div
                    className="
                      relative
                      mx-auto
                      flex
                      w-full
                      max-w-[570px]
                      items-center
                      justify-center
                      overflow-hidden
                      rounded-[20px]
                      border
                      border-white/20
                      bg-white/[0.07]
                      p-2.5
                      shadow-[0_18px_45px_rgba(15,10,50,.25)]
                      backdrop-blur-md
                      sm:rounded-[24px]
                      sm:p-4
                      lg:max-w-none
                    "
                  >
                    <img
                      src={GOOGLE_MEET_IMAGE}
                      alt="Every Day Google Meet live discussion"
                      loading="lazy"
                      decoding="async"
                      className="
                        block
                        h-auto
                        max-h-[430px]
                        w-full
                        rounded-[14px]
                        object-contain
                        sm:rounded-[18px]
                      "
                    />
                  </div>

                  {/* Image Label */}
                  <div
                    className="
                      absolute
                      bottom-4
                      left-1/2
                      flex
                      -translate-x-1/2
                      items-center
                      gap-2
                      whitespace-nowrap
                      rounded-full
                      border
                      border-white/20
                      bg-[#171052]/80
                      px-3
                      py-2
                      text-[9px]
                      font-extrabold
                      uppercase
                      tracking-[0.1em]
                      text-white
                      shadow-lg
                      backdrop-blur-md
                      sm:bottom-6
                      sm:px-4
                      sm:text-[10px]
                    "
                  >
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#69e5a5] opacity-75" />

                      <span className="relative inline-flex h-2 w-2 rounded-full bg-[#69e5a5]" />
                    </span>

                    Live Every Day · 09:30 PM IST
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default GoogleMeetSection;