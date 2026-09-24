import React, { useEffect, useRef, useState, type ReactNode } from "react";

type InitiativeHeaderProps = {
  active?: "home" | "foundation" | "bridgital";
};

const HEADER_LOGO_COLOR = "https://i.ibb.co/kgzy891H/logo-tvrk.png";
const HEADER_LOGO_WHITE = "https://i.ibb.co/84DGTjKd/tv-white.png";

export default function InitiativeHeader({
  active = "home",
}: InitiativeHeaderProps) {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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

  useEffect(() => {
    let animationFrame = 0;

    const updateScrollState = () => {
      cancelAnimationFrame(animationFrame);
      animationFrame = requestAnimationFrame(() => {
        setIsScrolled(window.scrollY > 28);
      });
    };

    // Preload both versions so the logo swap is instant.
    const colorLogo = new Image();
    const whiteLogo = new Image();
    colorLogo.src = HEADER_LOGO_COLOR;
    whiteLogo.src = HEADER_LOGO_WHITE;

    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("scroll", updateScrollState);
    };
  }, []);

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

  const headerClassName = [
    "tvrk-header",
    active === "foundation" ? "tvrk-header-foundation" : "",
    isScrolled ? "tvrk-header-scrolled" : "tvrk-header-top",
    open ? "tvrk-header-menu-open" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <>
      <style>{`
        .tvrk-header,
        .tvrk-header *,
        .tvrk-header *::before,
        .tvrk-header *::after {
          box-sizing: border-box;
        }

        :root {
          --tvrk-blue: #073aa7;
          --tvrk-blue-2: #0a56d8;
          --tvrk-purple: #5a22e7;
          --tvrk-pink: #ec0b82;
          --tvrk-ink: #0b1f4d;
        }

        /* =========================================================
           HEADER: COLORED AT TOP -> WHITE AFTER SCROLL
        ========================================================= */
        .tvrk-header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          width: 100%;
          font-family: 'Manrope', 'Inter', 'Segoe UI', Arial, sans-serif;
          background:
            radial-gradient(circle at 5% -20%, rgba(93, 48, 255, .48), transparent 33%),
            radial-gradient(circle at 92% 5%, rgba(236, 11, 130, .22), transparent 31%),
            linear-gradient(100deg, #120650 0%, #060622 47%, #12074d 100%);
          border-bottom: 1px solid rgba(190, 155, 255, .16);
          box-shadow: 0 12px 36px rgba(4, 2, 28, .24);
          -webkit-backdrop-filter: blur(18px) saturate(145%);
          backdrop-filter: blur(18px) saturate(145%);
          transition:
            background .34s ease,
            border-color .34s ease,
            box-shadow .34s ease;
        }

        .tvrk-header-scrolled {
          background:
            radial-gradient(circle at 10% -35%, rgba(10, 86, 216, .13), transparent 35%),
            radial-gradient(circle at 82% -40%, rgba(90, 34, 231, .09), transparent 34%),
            radial-gradient(circle at 98% 20%, rgba(236, 11, 130, .055), transparent 26%),
            rgba(255, 255, 255, .97);
          border-bottom-color: rgba(31, 67, 146, .10);
          box-shadow: 0 10px 32px rgba(20, 43, 92, .11);
        }

        .tvrk-header::before {
          content: "";
          position: absolute;
          inset: 0 0 auto 0;
          height: 3px;
          pointer-events: none;
          background: linear-gradient(
            90deg,
            #0a56d8 0%,
            #284fe4 30%,
            #7224e8 67%,
            #ec0b82 100%
          );
          transition: opacity .3s ease;
        }

        .tvrk-header-top::before {
          opacity: .88;
        }

        .tvrk-header-scrolled::before {
          opacity: 1;
        }

        /* =========================================================
           MAIN HEADER ROW
        ========================================================= */
        .tvrk-header-inner {
          width: calc(100% - 32px);
          max-width: 1720px;
          min-height: 88px;
          margin-inline: auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 28px;
          min-width: 0;
          transition: min-height .3s ease;
        }

        .tvrk-header-scrolled .tvrk-header-inner {
          min-height: 74px;
        }

        .tvrk-header-logo {
          display: flex;
          align-items: center;
          flex: 0 1 auto;
          min-width: 0;
          max-width: min(315px, 38vw);
          text-decoration: none;
          border-radius: 14px;
        }

        .tvrk-header-logo img {
          display: block;
          width: 270px;
          height: auto;
          max-width: 100%;
          max-height: 62px;
          object-fit: contain;
          object-position: left center;
          filter: drop-shadow(0 7px 14px rgba(0, 0, 0, .12));
          transition:
            width .3s ease,
            max-height .3s ease,
            transform .25s ease,
            filter .25s ease;
        }

        .tvrk-header-scrolled .tvrk-header-logo img {
          width: 250px;
          max-height: 55px;
          filter: drop-shadow(0 6px 12px rgba(10, 55, 160, .08));
        }

        .tvrk-header-logo:hover img {
          transform: translateY(-1px);
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

        /* =========================================================
           NAVIGATION COLORS
        ========================================================= */
        .tvrk-nav-link {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 46px;
          padding: 10px clamp(10px, 1vw, 15px);
          color: rgba(255, 255, 255, .84);
          font-size: 14px;
          font-weight: 800;
          line-height: 1;
          white-space: nowrap;
          border-radius: 12px;
          transition:
            color .22s ease,
            background .22s ease,
            transform .22s ease;
        }

        .tvrk-header-scrolled .tvrk-nav-link {
          color: #334563;
        }

        .tvrk-nav-link::after {
          content: "";
          position: absolute;
          left: 15px;
          right: 15px;
          bottom: 5px;
          height: 2px;
          border-radius: 999px;
          background: linear-gradient(90deg, #7aa5ff, #b36cff, #ff74be);
          opacity: 0;
          transform: scaleX(.25);
          transition: opacity .22s ease, transform .22s ease;
        }

        .tvrk-header-scrolled .tvrk-nav-link::after {
          background: linear-gradient(90deg, #0a56d8, #6322e7, #ec0b82);
        }

        .tvrk-nav-link:hover {
          color: #ffffff;
          background: rgba(255, 255, 255, .07);
          transform: translateY(-1px);
        }

        .tvrk-header-scrolled .tvrk-nav-link:hover {
          color: #092f89;
          background: rgba(10, 86, 216, .055);
        }

        .tvrk-nav-link:hover::after,
        .tvrk-nav-link-active::after {
          opacity: 1;
          transform: scaleX(1);
        }

        .tvrk-nav-link-active {
          color: #ffffff;
          background: rgba(255, 255, 255, .075);
        }

        .tvrk-header-scrolled .tvrk-nav-link-active {
          color: #0a3fae;
          background: linear-gradient(
            90deg,
            rgba(10, 86, 216, .08),
            rgba(99, 34, 231, .065),
            rgba(236, 11, 130, .045)
          );
        }

        .tvrk-foundation-label {
          display: inline-flex;
          align-items: center;
        }

        .tvrk-foundation-label span:first-child {
          color: #73c4ff;
        }

        .tvrk-foundation-label span:last-child {
          color: #7be688;
        }

        .tvrk-header-scrolled .tvrk-foundation-label span:first-child {
          color: #3B82C4;
        }

        .tvrk-header-scrolled .tvrk-foundation-label span:last-child {
          color: #51B85B;
        }

        /* =========================================================
           RADHAI BUTTON
        ========================================================= */
        .tvrk-ai-btn {
          position: relative;
          isolation: isolate;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 9px;
          min-height: 48px;
          margin-left: 7px;
          padding: 11px 19px;
          overflow: hidden;
          color: #ffffff;
          font-size: 14px;
          font-weight: 900;
          white-space: nowrap;
          border: 1px solid rgba(255, 255, 255, .25);
          border-radius: 999px;
          background: linear-gradient(
            110deg,
            #0b48c4 0%,
            #204ee0 30%,
            #6c2be8 67%,
            #e91185 100%
          );
          box-shadow:
            0 10px 28px rgba(40, 19, 142, .28),
            inset 0 1px 0 rgba(255, 255, 255, .30);
          transition:
            transform .22s ease,
            box-shadow .22s ease,
            filter .22s ease;
        }

        .tvrk-ai-btn::before {
          content: "";
          position: absolute;
          z-index: -1;
          top: -70%;
          left: -35%;
          width: 32%;
          height: 240%;
          transform: rotate(20deg);
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, .46),
            transparent
          );
          transition: left .65s ease;
        }

        .tvrk-ai-btn:hover {
          transform: translateY(-2px);
          filter: brightness(1.07) saturate(1.05);
          box-shadow:
            0 14px 34px rgba(58, 46, 184, .34),
            inset 0 1px 0 rgba(255, 255, 255, .36);
        }

        .tvrk-ai-btn:hover::before {
          left: 112%;
        }

        /* =========================================================
           MOBILE MENU BUTTON
        ========================================================= */
        .tvrk-menu-toggle {
          display: none;
          width: 44px;
          height: 44px;
          flex-shrink: 0;
          align-items: center;
          justify-content: center;
          padding: 0;
          color: #ffffff;
          border: 1px solid rgba(255, 255, 255, .19);
          border-radius: 13px;
          background: rgba(255, 255, 255, .08);
          box-shadow: 0 7px 20px rgba(0, 0, 0, .11);
          cursor: pointer;
          -webkit-tap-highlight-color: transparent;
          transition:
            color .25s ease,
            background .25s ease,
            border-color .25s ease,
            transform .2s ease;
        }

        .tvrk-menu-toggle:active {
          transform: scale(.96);
        }

        .tvrk-header-scrolled .tvrk-menu-toggle {
          color: #0a3fae;
          border-color: rgba(10, 86, 216, .14);
          background:
            radial-gradient(circle at 25% 0%, rgba(99, 34, 231, .08), transparent 52%),
            rgba(255, 255, 255, .94);
          box-shadow: 0 7px 20px rgba(25, 57, 119, .09);
        }

        .tvrk-mobile-nav {
          display: none;
        }

        /* Spacer is only used by internal pages. It matches the top-state header. */
        .tvrk-header-spacer {
          height: 88px;
          background:
            radial-gradient(circle at 5% -20%, rgba(93, 48, 255, .48), transparent 33%),
            radial-gradient(circle at 92% 5%, rgba(236, 11, 130, .22), transparent 31%),
            linear-gradient(100deg, #120650 0%, #060622 47%, #12074d 100%);
        }

        /* =========================================================
           FOUNDATION TOP THEME
           Blue + green at the top, white after scroll.
        ========================================================= */
        .tvrk-header-foundation.tvrk-header-top {
          background:
            radial-gradient(circle at 4% -10%, rgba(81, 184, 91, .27), transparent 34%),
            radial-gradient(circle at 95% 0%, rgba(59, 130, 196, .32), transparent 35%),
            linear-gradient(105deg, #073b5b 0%, #062d46 47%, #0b3d45 100%);
          border-bottom-color: rgba(110, 216, 121, .18);
          box-shadow: 0 12px 36px rgba(4, 37, 58, .23);
        }

        .tvrk-header-foundation::before {
          background: linear-gradient(90deg, #3B82C4 0%, #4ba5b1 48%, #51B85B 100%);
        }

        .tvrk-header-foundation.tvrk-header-scrolled {
          background:
            radial-gradient(circle at 6% -30%, rgba(81, 184, 91, .12), transparent 36%),
            radial-gradient(circle at 94% -20%, rgba(59, 130, 196, .13), transparent 36%),
            rgba(255, 255, 255, .97);
          border-bottom-color: rgba(59, 130, 196, .13);
          box-shadow: 0 10px 32px rgba(24, 77, 101, .10);
        }

        .tvrk-header-foundation .tvrk-nav-link::after {
          background: linear-gradient(90deg, #70bcec, #74db81);
        }

        .tvrk-header-foundation.tvrk-header-scrolled .tvrk-nav-link::after {
          background: linear-gradient(90deg, #3B82C4, #51B85B);
        }

        .tvrk-header-foundation.tvrk-header-scrolled .tvrk-nav-link-active {
          color: #185f82;
          background: linear-gradient(
            90deg,
            rgba(59, 130, 196, .10),
            rgba(81, 184, 91, .09)
          );
        }

        .tvrk-header-foundation .tvrk-ai-btn {
          background: linear-gradient(
            110deg,
            #2f77b7 0%,
            #3B82C4 48%,
            #51B85B 100%
          );
          box-shadow:
            0 10px 26px rgba(31, 113, 151, .28),
            inset 0 1px 0 rgba(255, 255, 255, .30);
        }

        .tvrk-header-spacer-foundation {
          background:
            radial-gradient(circle at 4% -10%, rgba(81, 184, 91, .27), transparent 34%),
            radial-gradient(circle at 95% 0%, rgba(59, 130, 196, .32), transparent 35%),
            linear-gradient(105deg, #073b5b 0%, #062d46 47%, #0b3d45 100%);
        }

        .tvrk-header a:focus-visible,
        .tvrk-header button:focus-visible {
          outline: 3px solid rgba(183, 132, 255, .72);
          outline-offset: 3px;
        }

        .tvrk-header-foundation a:focus-visible,
        .tvrk-header-foundation button:focus-visible {
          outline-color: rgba(110, 216, 121, .72);
        }

        #ecosystem,
        #vision {
          scroll-margin-top: 100px;
        }

        /* =========================================================
           RESPONSIVE WIDTHS
        ========================================================= */
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

          .tvrk-header-logo {
            max-width: 250px;
          }

          .tvrk-header-logo img {
            width: 238px;
            max-height: 56px;
          }

          .tvrk-header-scrolled .tvrk-header-logo img {
            width: 222px;
            max-height: 50px;
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

        /* =========================================================
           TABLET + MOBILE MENU
        ========================================================= */
        @media (max-width: 1099px) {
          .tvrk-header-inner {
            min-height: 78px;
            gap: 16px;
          }

          .tvrk-header-scrolled .tvrk-header-inner {
            min-height: 70px;
          }

          .tvrk-header-logo {
            max-width: calc(100% - 68px);
          }

          .tvrk-header-logo img {
            width: 230px;
            max-height: 53px;
          }

          .tvrk-header-scrolled .tvrk-header-logo img {
            width: 216px;
            max-height: 49px;
          }

          .tvrk-desktop-nav {
            display: none;
          }

          .tvrk-menu-toggle {
            display: flex;
          }

          .tvrk-mobile-nav {
            display: grid;
            gap: 5px;
            width: calc(100% - 48px);
            max-width: 1720px;
            max-height: calc(100dvh - 94px);
            margin: 0 auto 12px;
            padding: 11px;
            overflow-x: hidden;
            overflow-y: auto;
            overscroll-behavior: contain;
            -webkit-overflow-scrolling: touch;
            border: 1px solid rgba(255, 255, 255, .13);
            border-radius: 18px;
            background:
              radial-gradient(circle at 8% 0%, rgba(99, 49, 255, .25), transparent 42%),
              radial-gradient(circle at 98% 0%, rgba(236, 11, 130, .10), transparent 38%),
              rgba(8, 7, 38, .985);
            box-shadow: 0 24px 54px rgba(3, 2, 26, .34);
          }

          .tvrk-header-scrolled .tvrk-mobile-nav {
            border-color: rgba(31, 67, 146, .10);
            background:
              radial-gradient(circle at top left, rgba(10, 86, 216, .08), transparent 42%),
              radial-gradient(circle at 96% 0%, rgba(236, 11, 130, .055), transparent 38%),
              rgba(255, 255, 255, .99);
            box-shadow: 0 24px 54px rgba(20, 43, 92, .16);
          }

          .tvrk-mobile-nav .tvrk-nav-link {
            width: 100%;
            min-height: 48px;
            justify-content: flex-start;
            padding: 13px 14px;
            color: rgba(255, 255, 255, .88);
            border-radius: 11px;
          }

          .tvrk-header-scrolled .tvrk-mobile-nav .tvrk-nav-link {
            color: #31425f;
          }

          .tvrk-mobile-nav .tvrk-nav-link:hover {
            color: #ffffff;
            background: rgba(255, 255, 255, .07);
            transform: none;
          }

          .tvrk-header-scrolled .tvrk-mobile-nav .tvrk-nav-link:hover {
            color: #0a3fae;
            background: rgba(10, 86, 216, .055);
          }

          .tvrk-mobile-nav .tvrk-nav-link::after {
            display: none;
          }

          .tvrk-mobile-nav .tvrk-nav-link-active {
            color: #ffffff;
            background: rgba(255, 255, 255, .075);
          }

          .tvrk-header-scrolled .tvrk-mobile-nav .tvrk-nav-link-active {
            color: #0a3fae;
            background: linear-gradient(
              90deg,
              rgba(10, 86, 216, .10),
              rgba(99, 34, 231, .07),
              rgba(236, 11, 130, .045)
            );
          }

          .tvrk-header-foundation.tvrk-header-top .tvrk-mobile-nav {
            background:
              radial-gradient(circle at top left, rgba(81, 184, 91, .16), transparent 42%),
              radial-gradient(circle at top right, rgba(59, 130, 196, .20), transparent 40%),
              rgba(5, 44, 65, .985);
            border-color: rgba(110, 216, 121, .16);
            box-shadow: 0 24px 54px rgba(4, 37, 58, .30);
          }

          .tvrk-header-foundation.tvrk-header-scrolled .tvrk-mobile-nav {
            border-color: rgba(59, 130, 196, .13);
            background:
              radial-gradient(circle at top left, rgba(81, 184, 91, .09), transparent 42%),
              radial-gradient(circle at top right, rgba(59, 130, 196, .10), transparent 40%),
              rgba(255, 255, 255, .99);
            box-shadow: 0 24px 54px rgba(24, 77, 101, .14);
          }

          .tvrk-header-foundation.tvrk-header-scrolled
            .tvrk-mobile-nav
            .tvrk-nav-link-active {
            color: #185f82;
            background: linear-gradient(
              90deg,
              rgba(59, 130, 196, .11),
              rgba(81, 184, 91, .09)
            );
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
            width: calc(100% - 24px);
            min-height: 72px;
            gap: 10px;
          }

          .tvrk-header-scrolled .tvrk-header-inner {
            min-height: 64px;
          }

          .tvrk-header-logo {
            max-width: calc(100% - 56px);
          }

          .tvrk-header-logo img {
            width: 198px;
            max-height: 46px;
          }

          .tvrk-header-scrolled .tvrk-header-logo img {
            width: 186px;
            max-height: 43px;
          }

          .tvrk-menu-toggle {
            width: 42px;
            height: 42px;
            border-radius: 12px;
          }

          .tvrk-mobile-nav {
            width: calc(100% - 24px);
            max-height: calc(100dvh - 84px);
            margin-bottom: 10px;
            padding: 9px;
            border-radius: 16px;
          }

          .tvrk-header-spacer {
            height: 72px;
          }
        }

        @media (max-width: 420px) {
          .tvrk-header-logo img {
            width: 176px;
            max-height: 42px;
          }

          .tvrk-header-scrolled .tvrk-header-logo img {
            width: 166px;
            max-height: 40px;
          }
        }

        @media (max-width: 360px) {
          .tvrk-header-inner {
            width: calc(100% - 18px);
            gap: 8px;
          }

          .tvrk-header-logo {
            max-width: calc(100% - 50px);
          }

          .tvrk-header-logo img {
            width: 154px;
            max-height: 38px;
          }

          .tvrk-header-scrolled .tvrk-header-logo img {
            width: 146px;
            max-height: 36px;
          }

          .tvrk-menu-toggle {
            width: 40px;
            height: 40px;
          }

          .tvrk-mobile-nav {
            width: calc(100% - 18px);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .tvrk-header,
          .tvrk-header *,
          .tvrk-header *::before,
          .tvrk-header *::after {
            scroll-behavior: auto !important;
            transition: none !important;
            animation: none !important;
          }
        }
      `}</style>

      {active !== "home" && (
        <div
          className={`tvrk-header-spacer ${
            active === "foundation" ? "tvrk-header-spacer-foundation" : ""
          }`}
          aria-hidden="true"
        />
      )}

      <header ref={headerRef} className={headerClassName}>
        <div className="tvrk-header-inner">
          <a
            href="/"
            className="tvrk-header-logo"
            aria-label="TV Radhakrishna Home"
            onClick={closeMenu}
          >
            <img
              src={isScrolled ? HEADER_LOGO_COLOR : HEADER_LOGO_WHITE}
              alt="TV Radhakrishna"
              width="270"
              height="64"
              decoding="async"
              loading="eager"
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
