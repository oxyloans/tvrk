import React, { useEffect, useRef, useState, type ReactNode } from "react";

type InitiativeHeaderProps = {
  active?: "home" | "foundation" | "bridgital" | "certificates";
};

const HEADER_LOGO_COLOR = "https://i.ibb.co/kgzy891H/logo-tvrk.png";

const HEADER_LOGO_WHITE = "https://i.ibb.co/84DGTjKd/tv-white.png";

const resourceLinks = [
  { href: "/oxy-foundation", label: "OXY Foundation", key: "foundation" },

  { href: "/bridgital-nation", label: "Bridgital Nation", key: "bridgital" },

  { href: "/certificates", label: "Certificates", key: "certificates" },
] as const;

export default function InitiativeHeader({
  active = "home",
}: InitiativeHeaderProps) {
  const [open, setOpen] = useState(false);

  const [resourcesOpen, setResourcesOpen] = useState(false);

  const [isScrolled, setIsScrolled] = useState(false);

  const headerRef = useRef<HTMLElement>(null);

  const toggleRef = useRef<HTMLButtonElement>(null);

  const resourceRef = useRef<HTMLDivElement>(null);

  const closeMenu = () => {
    setOpen(false);

    setResourcesOpen(false);
  };

  useEffect(() => {
    let animationFrame = 0;

    const updateScrollState = () => {
      cancelAnimationFrame(animationFrame);

      animationFrame = requestAnimationFrame(() => {
        setIsScrolled(window.scrollY > 28);
      });
    };

    updateScrollState();

    window.addEventListener("scroll", updateScrollState, { passive: true });

    return () => {
      cancelAnimationFrame(animationFrame);

      window.removeEventListener("scroll", updateScrollState);
    };
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);

        setResourcesOpen(false);

        toggleRef.current?.focus();
      }
    };

    const onPointerDown = (event: PointerEvent) => {
      const target = event.target as Node;

      if (open && headerRef.current && !headerRef.current.contains(target)) {
        setOpen(false);
      }

      if (
        resourcesOpen &&
        resourceRef.current &&
        !resourceRef.current.contains(target)
      ) {
        setResourcesOpen(false);
      }
    };

    document.addEventListener("keydown", onKeyDown);

    document.addEventListener("pointerdown", onPointerDown);

    return () => {
      document.removeEventListener("keydown", onKeyDown);

      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [open, resourcesOpen]);

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

  const resourcesActive =
    active === "foundation" ||
    active === "bridgital" ||
    active === "certificates";

  const ResourcesMenu = ({ mobile = false }: { mobile?: boolean }) => (
    <div
      ref={!mobile ? resourceRef : undefined}
      className={`tvrk-resource-wrap ${mobile ? "tvrk-resource-mobile" : ""}`}
    >
      <button
        type="button"
        className={`tvrk-nav-link tvrk-resource-trigger ${
          resourcesActive ? "tvrk-nav-link-active" : ""
        }`}
        aria-expanded={resourcesOpen}
        aria-haspopup="menu"
        onClick={() => setResourcesOpen((value) => !value)}
      >
        <span>Resources</span>

        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className={`tvrk-chevron ${resourcesOpen ? "is-open" : ""}`}
          aria-hidden="true"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>

      {resourcesOpen && (
        <div className="tvrk-resource-menu" role="menu">
          <p className="tvrk-resource-eyebrow">Explore</p>

          {resourceLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={closeMenu}
              role="menuitem"
              className={`tvrk-resource-item tvrk-resource-${item.key} ${
                active === item.key ? "is-current" : ""
              }`}
            >
              <span
                className={
                  item.key === "foundation" ? "tvrk-foundation-resource" : ""
                }
              >
                {item.key === "foundation" ? (
                  <>
                    <span>OXY</span>
                    <span> FOUNDATION</span>
                  </>
                ) : (
                  item.label
                )}
              </span>

              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <path d="M5 12h14" />

                <path d="m13 6 6 6-6 6" />
              </svg>
            </a>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <>
      <style>{`

        .tvrk-header,

        .tvrk-header \* {

          box-sizing: border-box;

        }



        .tvrk-header {

          position: fixed;

          inset: 0 0 auto 0;

          z-index: 1000;

          width: 100%;

          font-family: 'Manrope', 'Inter', 'Segoe UI', Arial, sans-serif;

          background: linear-gradient(100deg, #120650 0%, #060622 48%, #12074d 100%);

          border-bottom: 1px solid rgba(190, 155, 255, .16);

          box-shadow: 0 12px 36px rgba(4, 2, 28, .22);

          transition: background .25s ease, box-shadow .25s ease, border-color .25s ease;

        }



        .tvrk-header::before {

          content: "";

          position: absolute;

          inset: 0 0 auto 0;

          height: 3px;

          background: linear-gradient(90deg, #0a56d8, #6a27e8 65%, #ec0b82);

        }



        .tvrk-header.tvrk-header-scrolled {

          background: rgba(255,255,255,.975);

          border-bottom-color: rgba(31,67,146,.10);

          box-shadow: 0 10px 32px rgba(20,43,92,.11);

          backdrop-filter: blur(18px) saturate(145%);

        }



        .tvrk-header-inner {

          width: calc(100% - 32px);

          max-width: 1720px;

          min-height: 84px;

          margin-inline: auto;

          display: flex;

          align-items: center;

          justify-content: space-between;

          gap: 24px;

          transition: min-height .25s ease;

        }



        .tvrk-header-scrolled .tvrk-header-inner { min-height: 72px; }



        .tvrk-header-logo {

          display: flex;

          align-items: center;

          max-width: min(300px, 35vw);

          min-width: 0;

          flex: 0 1 auto;

        }



        .tvrk-header-logo img {

          display: block;

          width: 255px;

          max-width: 100%;

          max-height: 58px;

          object-fit: contain;

          object-position: left center;

          transition: width .25s ease, max-height .25s ease;

        }



        .tvrk-header-scrolled .tvrk-header-logo img {

          width: 235px;

          max-height: 52px;

        }



        .tvrk-desktop-nav {

          display: flex;

          align-items: center;

          justify-content: flex-end;

          gap: 2px;

          min-width: 0;

        }



        .tvrk-header a { text-decoration: none; }



        .tvrk-nav-link {

          position: relative;

          display: inline-flex;

          min-height: 44px;

          align-items: center;

          justify-content: center;

          gap: 6px;

          padding: 10px 13px;

          border: 0;

          border-radius: 12px;

          background: transparent;

          color: rgba(255,255,255,.84);

          font: inherit;

          font-size: 13px;

          font-weight: 800;

          white-space: nowrap;

          cursor: pointer;

          transition: color .2s ease, background .2s ease, transform .2s ease;

        }



        .tvrk-nav-link:hover {

          color: #fff;

          background: rgba(255,255,255,.08);

        }



        .tvrk-header-scrolled .tvrk-nav-link { color: #34435f; }

        .tvrk-header-scrolled .tvrk-nav-link:hover { color: #211b67; background: #f2f3f8; }



        .tvrk-nav-link-active {

          color: #fff;

          background: rgba(255,255,255,.10);

        }



        .tvrk-header-scrolled .tvrk-nav-link-active {

          color: #211b67;

          background: #efedf9;

        }



        .tvrk-resource-wrap { position: relative; }

        .tvrk-chevron { width: 14px; height: 14px; transition: transform .2s ease; }

        .tvrk-chevron.is-open { transform: rotate(180deg); }



        .tvrk-resource-menu {

          position: absolute;

          top: calc(100% + 10px);

          right: 0;

          width: 246px;

          padding: 8px;

          border: 1px solid rgba(27,25,57,.10);

          border-radius: 17px;

          background: rgba(255,255,255,.985);

          box-shadow: 0 20px 55px rgba(20,24,55,.18);

          backdrop-filter: blur(16px);

        }



        .tvrk-resource-eyebrow {

          margin: 2px 8px 6px;

          color: #8a8e9b;

          font-size: 9px;

          font-weight: 900;

          letter-spacing: .16em;

          text-transform: uppercase;

        }



        .tvrk-resource-item {

          display: flex;

          min-height: 46px;

          align-items: center;

          justify-content: space-between;

          gap: 12px;

          padding: 10px 12px;

          border-radius: 12px;

          color: #2a3143;

          font-size: 13px;

          font-weight: 800;

          transition: background .2s ease, color .2s ease, transform .2s ease;

        }



        .tvrk-resource-item:hover,

        .tvrk-resource-item.is-current {

          background: #f0eef9;

          color: #211b67;

        }



        .tvrk-resource-item svg { width: 15px; height: 15px; flex: 0 0 auto; }



        .tvrk-foundation-resource {

          display: inline-flex;

          align-items: baseline;

          font-weight: 900;

          letter-spacing: -.01em;

        }



        .tvrk-foundation-resource > span:first-child { color: #2F5FAA; }

        .tvrk-foundation-resource > span:last-child { color: #51B85B; }



        .tvrk-resource-foundation:hover,

        .tvrk-resource-foundation.is-current {

          background: #f3fbf5;

          color: #2F5FAA;

          box-shadow: inset 3px 0 0 #51B85B;

        }



        .tvrk-resource-foundation:hover svg,

        .tvrk-resource-foundation.is-current svg { color: #51B85B; }



        .tvrk-ai-btn {
          position: relative;
          isolation: isolate;
          display: inline-flex;
          min-height: 48px;
          align-items: center;
          justify-content: center;
          gap: 8px;
          margin-left: 10px;
          padding: 11px 22px;
          overflow: hidden;
          border: 1px solid rgba(255,255,255,.30);
          border-radius: 999px;
          background: linear-gradient(
            105deg,
            #075bd4 0%,
            #225ce6 34%,
            #7735e8 68%,
            #e00b91 100%
          );
          color: #fff;
          font-size: 14px;
          font-weight: 900;
          letter-spacing: -.01em;
          line-height: 1;
          text-shadow: 0 1px 1px rgba(0,0,0,.18);
          box-shadow:
            inset 0 1px 0 rgba(255,255,255,.42),
            inset 0 -1px 0 rgba(0,0,0,.12),
            0 9px 22px rgba(55,40,205,.25),
            0 2px 7px rgba(0,0,0,.18);
          transition:
            transform .22s ease,
            box-shadow .22s ease,
            filter .22s ease;
          white-space: nowrap;
        }

        .tvrk-ai-btn::before {
          content: "";
          position: absolute;
          z-index: -1;
          inset: 1px 3px auto;
          height: 48%;
          border-radius: inherit;
          background: linear-gradient(
            180deg,
            rgba(255,255,255,.38) 0%,
            rgba(255,255,255,.13) 42%,
            rgba(255,255,255,0) 100%
          );
          pointer-events: none;
        }

        .tvrk-ai-btn::after {
          content: "";
          position: absolute;
          top: -40%;
          left: -45%;
          width: 34%;
          height: 180%;
          transform: rotate(18deg);
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255,255,255,.34),
            transparent
          );
          transition: left .55s ease;
          pointer-events: none;
        }

        .tvrk-ai-btn > span,
        .tvrk-ai-btn > svg {
          position: relative;
          z-index: 1;
        }

        .tvrk-ai-btn svg {
          flex: 0 0 auto;
          transition: transform .22s ease;
        }

        .tvrk-ai-btn:hover {
          transform: translateY(-2px);
          filter: saturate(1.08) brightness(1.04);
          box-shadow:
            inset 0 1px 0 rgba(255,255,255,.48),
            inset 0 -1px 0 rgba(0,0,0,.12),
            0 13px 30px rgba(72,42,220,.34),
            0 4px 10px rgba(0,0,0,.20);
        }

        .tvrk-ai-btn:hover::after {
          left: 120%;
        }

        .tvrk-ai-btn:hover svg {
          transform: translate(2px, -2px);
        }

        .tvrk-ai-btn:active {
          transform: translateY(0) scale(.985);
        }

        .tvrk-ai-btn:focus-visible {
          outline: 3px solid rgba(255,255,255,.48);
          outline-offset: 3px;
        }

        .tvrk-header-scrolled .tvrk-ai-btn {
          border-color: rgba(255,255,255,.36);
          background: linear-gradient(
            105deg,
            #075bd4 0%,
            #225ce6 34%,
            #7735e8 68%,
            #e00b91 100%
          );
          color: #fff;
          box-shadow:
            inset 0 1px 0 rgba(255,255,255,.40),
            0 9px 22px rgba(62,43,202,.24);
        }



        .tvrk-menu-toggle {

          display: none;

          width: 44px;

          height: 44px;

          flex: 0 0 auto;

          place-items: center;

          border: 1px solid rgba(255,255,255,.16);

          border-radius: 13px;

          background: rgba(255,255,255,.08);

          color: #fff;

        }



        .tvrk-header-scrolled .tvrk-menu-toggle {

          border-color: rgba(33,27,103,.12);

          background: #f2f3f8;

          color: #211b67;

        }



        .tvrk-mobile-nav { display: none; }

        .tvrk-header-spacer { height: 84px; }

        .tvrk-header-scrolled + .tvrk-header-spacer { height: 72px; }



        @media (max-width: 1099px) {

          .tvrk-header-inner {

            width: calc(100% - 24px);

            min-height: 72px;

            gap: 12px;

          }



          .tvrk-header-scrolled .tvrk-header-inner { min-height: 64px; }

          .tvrk-desktop-nav { display: none; }

          .tvrk-menu-toggle { display: grid; }



          .tvrk-header-logo { max-width: calc(100% - 58px); }

          .tvrk-header-logo img { width: 205px; max-height: 48px; }

          .tvrk-header-scrolled .tvrk-header-logo img { width: 190px; max-height: 44px; }



          .tvrk-mobile-nav {

            display: grid;

            width: calc(100% - 24px);

            max-height: calc(100dvh - 84px);

            overflow-y: auto;

            margin: 0 auto 10px;

            padding: 9px;

            gap: 4px;

            border: 1px solid rgba(255,255,255,.14);

            border-radius: 16px;

            background: #0e0936;

            box-shadow: 0 18px 50px rgba(4,2,28,.30);

          }



          .tvrk-header-scrolled .tvrk-mobile-nav {

            border-color: rgba(33,27,103,.10);

            background: rgba(255,255,255,.99);

          }



          .tvrk-mobile-nav > .tvrk-nav-link,
          .tvrk-mobile-nav .tvrk-resource-trigger {
            width: 100%;
            justify-content: space-between;
            margin: 0;
            min-height: 48px;
            padding-inline: 13px;
          }

          .tvrk-mobile-nav > .tvrk-ai-btn {
            width: 100%;
            min-height: 50px;
            justify-content: center;
            margin: 6px 0 0;
            padding: 12px 18px;
            border-radius: 14px;
            font-size: 14px;
          }



          .tvrk-resource-mobile { width: 100%; }

          .tvrk-resource-mobile .tvrk-resource-menu {

            position: static;

            width: 100%;

            margin-top: 4px;

            border-radius: 14px;

            box-shadow: none;

          }



          .tvrk-header-spacer { height: 72px; }

        }



        @media (max-width: 420px) {

          .tvrk-header-logo img { width: 176px; max-height: 42px; }

          .tvrk-header-scrolled .tvrk-header-logo img { width: 164px; max-height: 39px; }

          .tvrk-menu-toggle { width: 42px; height: 42px; }

          .tvrk-mobile-nav > .tvrk-ai-btn {
            min-height: 48px;
            padding: 11px 16px;
            font-size: 13px;
          }

        }



        @media (prefers-reduced-motion: reduce) {

          .tvrk-header,

          .tvrk-header \* { transition: none !important; }

        }

      `}</style>

      {active !== "home" && (
        <div className="tvrk-header-spacer" aria-hidden="true" />
      )}

      <header
        ref={headerRef}
        className={`tvrk-header ${
          isScrolled ? "tvrk-header-scrolled" : "tvrk-header-top"
        }`}
      >
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
            <NavLink href="/#ecosystem">Ecosystem</NavLink>

            <NavLink href="/#vision">Vision</NavLink>

            <NavLink href="/#4p-models">4P Models</NavLink>

            <ResourcesMenu />

            <a
              href="https://www.askoxy.ai/radhAI"
              target="_blank"
              rel="noopener noreferrer"
              className="tvrk-ai-btn"
            >
              <span>Talk to radhAI</span>

              <svg
                width="16"
                height="16"
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
            <NavLink href="/#ecosystem">Ecosystem</NavLink>

            <NavLink href="/#vision">Vision</NavLink>

            <NavLink href="/#4p-models">4P Models</NavLink>

            <ResourcesMenu mobile />

            <a
              href="https://www.askoxy.ai/radhAI"
              target="_blank"
              rel="noopener noreferrer"
              className="tvrk-ai-btn"
              onClick={closeMenu}
            >
              <span>Talk to radhAI</span>

              <svg
                width="16"
                height="16"
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
          </nav>
        )}
      </header>
    </>
  );
}
