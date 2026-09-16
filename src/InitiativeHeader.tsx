import React, { useState } from "react";
import { Link } from "react-router-dom";

const TVRK_LOGO = "https://i.ibb.co/XrT06DxX/tvrklogo.png";

// These three pages belong to THIS website/project.
const HOME_PATH = "/";
const FOUNDATION_PATH = "/oxy-foundation";
const BRIDGITAL_PATH = "/bridgital-nation";

// RadhAI remains a separate ASKOXY.AI page. It is NOT a route in this project.
const RADHAI_URL = "https://www.askoxy.ai/radhAI";

const BRAND_BLUE = "#3B82C4";
const BRAND_GREEN = "#51B85B";

type InitiativeHeaderProps = {
  active?: "home" | "foundation" | "bridgital";
};

const focus =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3B82C4] focus-visible:ring-offset-2";

function ArrowUpRight() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <path d="M7 17 17 7" />
      <path d="M7 7h10v10" />
    </svg>
  );
}

function FoundationWordmark() {
  return (
    <span className="whitespace-nowrap font-black tracking-[-0.025em]">
      <span style={{ color: BRAND_BLUE }}>OXY</span>
      <span style={{ color: BRAND_GREEN }}>FOUNDATION</span>
    </span>
  );
}

export default function InitiativeHeader({ active }: InitiativeHeaderProps) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 shadow-[0_4px_24px_rgba(15,23,42,0.04)] backdrop-blur-xl">
      <div className="mx-auto flex min-h-[70px] max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
        <Link
          to={HOME_PATH}
          aria-label="TV Radhakrishna home"
          onClick={() => setOpen(false)}
          className={`flex min-w-0 shrink-0 items-center rounded-xl ${focus}`}
        >
          <img
            src={TVRK_LOGO}
            alt="TV Radhakrishna"
            className="h-8 w-auto max-w-[156px] object-contain sm:h-9 sm:max-w-[184px]"
          />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
          <Link
            to={HOME_PATH}
            className={`rounded-full px-4 py-2.5 text-sm font-bold transition ${focus} ${
              active === "home"
                ? "bg-slate-100 text-slate-950"
                : "text-slate-600 hover:bg-slate-100 hover:text-slate-950"
            }`}
          >
            Home
          </Link>

          <Link
            to={FOUNDATION_PATH}
            className={`rounded-full border px-4 py-2.5 text-sm transition ${focus} ${
              active === "foundation"
                ? "border-[#3B82C4]/25 bg-[#eef7ff] shadow-sm"
                : "border-transparent hover:border-[#3B82C4]/15 hover:bg-[#f6fbff]"
            }`}
          >
            <FoundationWordmark />
          </Link>

          <Link
            to={BRIDGITAL_PATH}
            className={`rounded-full px-4 py-2.5 text-sm font-extrabold transition ${focus} ${
              active === "bridgital"
                ? "bg-[#edf7ff] text-[#276fa9]"
                : "text-[#3478ad] hover:bg-[#f2f9ff] hover:text-[#245f90]"
            }`}
          >
            Bridgital Nation
          </Link>

          <a
            href={RADHAI_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={`ml-2 inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-extrabold text-white shadow-lg shadow-slate-950/10 transition hover:-translate-y-0.5 hover:bg-slate-800 ${focus}`}
          >
            Talk to my AI
            <ArrowUpRight />
          </a>
        </nav>

        <button
          type="button"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          aria-controls="initiative-mobile-menu"
          onClick={() => setOpen((value) => !value)}
          className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-slate-200 bg-white text-slate-900 shadow-sm lg:hidden ${focus}`}
        >
          <span className="relative h-4 w-5">
            <span
              className={`absolute left-0 top-0 h-0.5 w-5 rounded-full bg-current transition ${
                open ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-[7px] h-0.5 w-5 rounded-full bg-current transition ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-[14px] h-0.5 w-5 rounded-full bg-current transition ${
                open ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      {open && (
        <nav
          id="initiative-mobile-menu"
          aria-label="Mobile navigation"
          className="border-t border-slate-200 bg-white px-4 pb-4 pt-3 lg:hidden"
        >
          <div className="mx-auto grid max-w-7xl gap-2">
            <Link
              to={HOME_PATH}
              onClick={() => setOpen(false)}
              className={`rounded-2xl px-4 py-3.5 text-sm font-bold ${
                active === "home" ? "bg-slate-100 text-slate-950" : "text-slate-700"
              }`}
            >
              Home
            </Link>

            <Link
              to={FOUNDATION_PATH}
              onClick={() => setOpen(false)}
              className={`rounded-2xl border px-4 py-3.5 text-sm ${
                active === "foundation"
                  ? "border-[#3B82C4]/20 bg-[#f2f9ff]"
                  : "border-slate-100 bg-white"
              }`}
            >
              <FoundationWordmark />
            </Link>

            <Link
              to={BRIDGITAL_PATH}
              onClick={() => setOpen(false)}
              className={`rounded-2xl px-4 py-3.5 text-sm font-extrabold ${
                active === "bridgital"
                  ? "bg-[#edf7ff] text-[#276fa9]"
                  : "text-[#3478ad]"
              }`}
            >
              Bridgital Nation
            </Link>

            <a
              href={RADHAI_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-1 flex items-center justify-between rounded-2xl bg-slate-950 px-4 py-3.5 text-sm font-extrabold text-white"
            >
              Talk to my AI
              <ArrowUpRight />
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
