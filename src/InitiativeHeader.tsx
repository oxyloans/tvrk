import React, { useEffect, useRef, useState, type ReactNode } from "react";

type InitiativeHeaderProps = {
  active?: "home" | "foundation" | "bridgital";
};

const HEADER_LOGO ="https://i.ibb.co/Kxq1jGR2/tv-white.png";


export default function InitiativeHeader({
  active = "home",
}: InitiativeHeaderProps) {
  const [open, setOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  const closeMenu = () => setOpen(false);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && open) {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };

    const handleOutsideClick = (event: PointerEvent) => {
      if (
        open &&
        headerRef.current &&
        !headerRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    const desktopMedia = window.matchMedia("(min-width: 1100px)");

    const handleBreakpoint = () => {
      if (desktopMedia.matches) {
        setOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("pointerdown", handleOutsideClick);
    desktopMedia.addEventListener("change", handleBreakpoint);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("pointerdown", handleOutsideClick);
      desktopMedia.removeEventListener("change", handleBreakpoint);
    };
  }, [open]);

  const NavLink = ({
    href,
    children,
    current = false,
  }: {
    href: string;
    children: ReactNode;
    current?: boolean;
  }) => (
    <a
      href={href}
      onClick={closeMenu}
      className={`tvrk-nav-link ${current ? "tvrk-nav-link-active" : ""}`}
      aria-current={current ? "page" : undefined}
    >
      {children}
    </a>
  );

  const navigation = (
    <>
      <NavLink href="/#ecosystem">Ecosystem</NavLink>
      <NavLink href="/#vision">Vision</NavLink>

      <NavLink
        href="/oxy-foundation"
        current={active === "foundation"}
      >
        <span className="tvrk-foundation-label">
          <span>OXY</span>
          <span> FOUNDATION</span>
        </span>
      </NavLink>

      <NavLink
        href="/bridgital-nation"
        current={active === "bridgital"}
      >
        Bridgital Nation
      </NavLink>

      <a
        href="https://www.askoxy.ai/radhAI"
        target="_blank"
        rel="noopener noreferrer"
        className="tvrk-ai-btn"
        onClick={closeMenu}
      >
        <span>Talk to radhAI</span>
        <svg
          width="17"
          height="17"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M7 17 17 7" />
          <path d="M7 7h10v10" />
        </svg>
      </a>
    </>
  );

  return (
    <>
      <style>{`
        .tvrk-header,
        .tvrk-header *,
        .tvrk-header *::before,
        .tvrk-header *::after {
          box-sizing: border-box;
        }

        .tvrk-header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          width: 100%;
          font-family:
            'Manrope',
            'Inter',
            'Segoe UI',
            Arial,
            sans-serif;
          background:
            radial-gradient(
              circle at 5% 0%,
              rgba(105, 32, 255, 0.34),
              transparent 31%
            ),
            radial-gradient(
              circle at 92% 10%,
              rgba(96, 23, 230, 0.20),
              transparent 32%
            ),
            linear-gradient(
              100deg,
              rgba(17, 6, 74, 0.985) 0%,
              rgba(5, 6, 32, 0.99) 45%,
              rgba(11, 6, 59, 0.985) 100%
            );
          border-bottom: 1px solid rgba(166, 112, 255, 0.15);
          box-shadow: 0 12px 38px rgba(4, 2, 28, 0.25);
          -webkit-backdrop-filter: blur(18px);
          backdrop-filter: blur(18px);
        }

        /* Same responsive side gap as the page content */
        .tvrk-header-inner {
          width: calc(100% - 32px);
          max-width: 1720px;
          min-height: 86px;
          margin-left: auto;
          margin-right: auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 28px;
          min-width: 0;
        }

        .tvrk-header-logo {
          display: flex;
          align-items: center;
          flex-shrink: 0;
          min-width: 0;
          text-decoration: none;
        }

        .tvrk-header-logo img {
          display: block;
          width: 248px;
          height: 58px;
          max-width: 100%;
          object-fit: contain;
          object-position: left center;
          filter: drop-shadow(0 0 12px rgba(155, 91, 255, 0.06));
          transition: transform 0.25s ease, filter 0.25s ease;
        }

        .tvrk-header-logo:hover img {
          transform: translateY(-1px);
          filter:
            brightness(1.06)
            drop-shadow(0 0 13px rgba(163, 95, 255, 0.18));
        }

        .tvrk-desktop-nav {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          gap: 3px;
          min-width: 0;
        }

        .tvrk-header a {
          text-decoration: none;
        }

        .tvrk-nav-link {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 46px;
          padding: 10px clamp(10px, 1vw, 15px);
          color: rgba(255,255,255,.76);
          font-size: 14px;
          font-weight: 700;
          line-height: 1;
          white-space: nowrap;
          border-radius: 12px;
          transition: color .22s ease, background .22s ease;
        }

        .tvrk-nav-link::after {
          content: "";
          position: absolute;
          left: 15px;
          right: 15px;
          bottom: 5px;
          height: 2px;
          border-radius: 999px;
          background: linear-gradient(90deg, #6d43ff, #c05eff, #ef93ff);
          opacity: 0;
          transform: scaleX(.25);
          transition: opacity .22s ease, transform .22s ease;
        }

        .tvrk-nav-link:hover {
          color: #ffffff;
          background: rgba(255,255,255,.055);
        }

        .tvrk-nav-link:hover::after,
        .tvrk-nav-link-active::after {
          opacity: 1;
          transform: scaleX(1);
        }

        .tvrk-nav-link-active {
          color: #ffffff;
          background: rgba(123, 72, 238, .13);
        }

        .tvrk-foundation-label {
          display: inline-flex;
          align-items: center;
        }

        .tvrk-foundation-label span:first-child {
          color: #60a5fa;
        }

        .tvrk-foundation-label span:last-child {
          color: #6ed879;
        }

        .tvrk-ai-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 9px;
          min-height: 48px;
          margin-left: 7px;
          padding: 11px 19px;
          color: #ffffff;
          font-size: 14px;
          font-weight: 800;
          white-space: nowrap;
          border: 1px solid rgba(232, 199, 255, .22);
          border-radius: 999px;
          background: linear-gradient(
            110deg,
            #5021df 0%,
            #7037ef 40%,
            #9b46eb 72%,
            #d676ec 100%
          );
          box-shadow:
            0 8px 26px rgba(101, 48, 232, .27),
            inset 0 1px 0 rgba(255,255,255,.20);
          transition: transform .22s ease, box-shadow .22s ease, filter .22s ease;
        }

        .tvrk-ai-btn:hover {
          transform: translateY(-2px);
          filter: brightness(1.08);
          box-shadow:
            0 12px 32px rgba(116, 54, 236, .37),
            inset 0 1px 0 rgba(255,255,255,.24);
        }

        .tvrk-menu-toggle {
          display: none;
          width: 44px;
          height: 44px;
          flex-shrink: 0;
          align-items: center;
          justify-content: center;
          padding: 0;
          color: #ffffff;
          border: 1px solid rgba(255,255,255,.13);
          border-radius: 13px;
          background: linear-gradient(
            145deg,
            rgba(119, 64, 240, .22),
            rgba(255,255,255,.04)
          );
          cursor: pointer;
        }

        .tvrk-mobile-nav {
          display: none;
        }

        .tvrk-header-spacer {
          height: 86px;
          background: linear-gradient(100deg, #16085c, #050620 47%, #0f064e);
        }

        /* OXY Foundation header theme: blue + green only. */
        .tvrk-header-foundation {
          background:
            radial-gradient(circle at 4% 0%, rgba(81,184,91,.26), transparent 32%),
            radial-gradient(circle at 96% 10%, rgba(59,130,196,.30), transparent 34%),
            linear-gradient(105deg, #073b5b 0%, #062d46 46%, #0b3d45 100%);
          border-bottom-color: rgba(110,216,121,.20);
          box-shadow: 0 12px 38px rgba(4,37,58,.24);
        }

        .tvrk-header-foundation .tvrk-header-logo img {
          filter: drop-shadow(0 0 12px rgba(59,130,196,.10));
        }

        .tvrk-header-foundation .tvrk-header-logo:hover img {
          filter: brightness(1.06) drop-shadow(0 0 13px rgba(81,184,91,.16));
        }

        .tvrk-header-foundation .tvrk-nav-link::after {
          background: linear-gradient(90deg, #3B82C4, #51B85B);
        }

        .tvrk-header-foundation .tvrk-nav-link-active {
          background: linear-gradient(90deg, rgba(59,130,196,.18), rgba(81,184,91,.14));
        }

        .tvrk-header-foundation .tvrk-ai-btn {
          border-color: rgba(255,255,255,.20);
          background: linear-gradient(110deg, #2f77b7 0%, #3B82C4 48%, #51B85B 100%);
          box-shadow: 0 8px 26px rgba(31,113,151,.28), inset 0 1px 0 rgba(255,255,255,.22);
        }

        .tvrk-header-foundation .tvrk-ai-btn:hover {
          box-shadow: 0 12px 32px rgba(31,113,151,.36), inset 0 1px 0 rgba(255,255,255,.26);
        }

        .tvrk-header-foundation .tvrk-menu-toggle {
          border-color: rgba(255,255,255,.16);
          background: linear-gradient(145deg, rgba(59,130,196,.25), rgba(81,184,91,.12));
        }

        .tvrk-header-spacer-foundation {
          background: linear-gradient(105deg, #073b5b 0%, #062d46 46%, #0b3d45 100%);
        }

        .tvrk-header a:focus-visible,
        .tvrk-header button:focus-visible {
          outline: 3px solid #a971ff;
          outline-offset: 3px;
        }

        .tvrk-header-foundation a:focus-visible,
        .tvrk-header-foundation button:focus-visible {
          outline-color: #6ed879;
        }

        #ecosystem,
        #vision {
          scroll-margin-top: 105px;
        }

        @media (min-width: 640px) {
          .tvrk-header-inner {
            width: calc(100% - 48px);
          }
        }

        @media (min-width: 1024px) {
          .tvrk-header-inner {
            width: calc(100% - 64px);
          }
        }

        @media (min-width: 1280px) {
          .tvrk-header-inner {
            width: calc(100% - 96px);
          }
        }

        @media (max-width: 1240px) and (min-width: 1100px) {
          .tvrk-header-inner {
            gap: 15px;
          }

          .tvrk-header-logo img {
            width: 218px;
          }

          .tvrk-nav-link {
            padding-left: 9px;
            padding-right: 9px;
            font-size: 13px;
          }

          .tvrk-ai-btn {
            padding-left: 15px;
            padding-right: 15px;
            margin-left: 3px;
            font-size: 13px;
          }
        }

        @media (max-width: 1099px) {
          .tvrk-header-inner {
            min-height: 78px;
            gap: 16px;
          }

          .tvrk-header-logo img {
            width: 215px;
            height: 50px;
          }

          .tvrk-desktop-nav {
            display: none;
          }

          .tvrk-menu-toggle {
            display: flex;
          }

          .tvrk-mobile-nav {
            display: grid;
            gap: 4px;
            width: calc(100% - 48px);
            max-width: 1720px;
            max-height: calc(100dvh - 100px);
            margin: 0 auto 12px;
            padding: 11px;
            overflow-y: auto;
            border: 1px solid rgba(178, 130, 255, .16);
            border-radius: 18px;
            background:
              radial-gradient(
                circle at top left,
                rgba(100, 40, 225, .23),
                transparent 38%
              ),
              linear-gradient(
                145deg,
                rgba(15, 8, 67, .99),
                rgba(5, 5, 31, .99)
              );
            box-shadow: 0 22px 50px rgba(0,0,20,.42);
            overscroll-behavior: contain;
          }

          .tvrk-mobile-nav .tvrk-nav-link {
            width: 100%;
            min-height: 48px;
            justify-content: flex-start;
            padding: 13px 14px;
            color: rgba(255,255,255,.84);
            border-radius: 11px;
          }

          .tvrk-mobile-nav .tvrk-nav-link::after {
            display: none;
          }

          .tvrk-mobile-nav .tvrk-nav-link-active {
            color: #ffffff;
            background: linear-gradient(
              90deg,
              rgba(119, 70, 250, .25),
              rgba(173, 75, 234, .08)
            );
          }

          .tvrk-header-foundation .tvrk-mobile-nav {
            border-color: rgba(96,165,250,.18);
            background:
              radial-gradient(circle at top left, rgba(81,184,91,.20), transparent 40%),
              linear-gradient(145deg, rgba(7,59,91,.99), rgba(6,45,70,.99));
            box-shadow: 0 22px 50px rgba(3,34,50,.38);
          }

          .tvrk-header-foundation .tvrk-mobile-nav .tvrk-nav-link-active {
            background: linear-gradient(90deg, rgba(59,130,196,.24), rgba(81,184,91,.13));
          }

          .tvrk-mobile-nav .tvrk-ai-btn {
            width: 100%;
            min-height: 50px;
            margin: 6px 0 0;
          }

          .tvrk-header-spacer {
            height: 78px;
          }
        }

        @media (max-width: 639px) {
          .tvrk-header-inner {
            min-height: 70px;
            gap: 10px;
          }

          .tvrk-header-logo {
            max-width: calc(100% - 55px);
          }

          .tvrk-header-logo img {
            width: 178px;
            height: 42px;
          }

          .tvrk-menu-toggle {
            width: 42px;
            height: 42px;
            border-radius: 12px;
          }

          .tvrk-mobile-nav {
            width: calc(100% - 32px);
            margin-bottom: 10px;
            padding: 9px;
            border-radius: 16px;
          }

          .tvrk-header-spacer {
            height: 70px;
          }
        }

        @media (max-width: 380px) {
          .tvrk-header-logo img {
            width: 155px;
            height: 39px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .tvrk-header *,
          .tvrk-header *::before,
          .tvrk-header *::after {
            transition: none !important;
          }
        }
      `}</style>

      {active !== "home" && (
        <div
          className={`tvrk-header-spacer ${active === "foundation" ? "tvrk-header-spacer-foundation" : ""}`}
          aria-hidden="true"
        />
      )}

      <header
        ref={headerRef}
        className={`tvrk-header ${active === "foundation" ? "tvrk-header-foundation" : ""}`}
      >
        <div className="tvrk-header-inner">
          <a
            href="/"
            className="tvrk-header-logo"
            aria-label="TV Radhakrishna Home"
            onClick={closeMenu}
          >
            <img
              src={HEADER_LOGO}
              alt="TV Radhakrishna"
              width="248"
              height="58"
            />
          </a>

          <nav className="tvrk-desktop-nav" aria-label="Main navigation">
            {navigation}
          </nav>

          <button
            ref={toggleRef}
            type="button"
            className="tvrk-menu-toggle"
            aria-label={open ? "Close navigation" : "Open navigation"}
            aria-expanded={open}
            aria-controls="tvrk-mobile-menu"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? (
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                aria-hidden="true"
              >
                <path d="M6 6 18 18" />
                <path d="M18 6 6 18" />
              </svg>
            ) : (
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                aria-hidden="true"
              >
                <path d="M4 6h16" />
                <path d="M4 12h16" />
                <path d="M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {open && (
          <nav
            id="tvrk-mobile-menu"
            className="tvrk-mobile-nav"
            aria-label="Mobile navigation"
          >
            {navigation}
          </nav>
        )}
      </header>
    </>
  );
}
