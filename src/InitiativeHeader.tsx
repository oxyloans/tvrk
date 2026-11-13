import React, { useEffect, useRef, useState, type ReactNode } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";

type InitiativeHeaderProps = {
  active?: "home" | "foundation" | "bridgital" | "certificates" | "links";
};

const HEADER_LOGO_COLOR = "https://i.ibb.co/3y8n1mJ1/logo-tvrk.png";
const HEADER_LOGO_WHITE = "https://i.ibb.co/84DGTjKd/tv-white.png";

const resourceLinks = [
  { href: "/oxy-foundation", label: "OXY Foundation", key: "foundation" },
  { href: "/bridgital-nation", label: "Bridgital Nation", key: "bridgital" },
  { href: "/certificates", label: "Certificates", key: "certificates" },
  { href: "/links", label: "OXY Links & Jobs", key: "links" },
] as const;

export default function InitiativeHeader({
  active = "home",
}: InitiativeHeaderProps) {
  const [open, setOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const headerRef = useRef<HTMLElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const resourceRef = useRef<HTMLDivElement>(null);

  const navigate = useNavigate();
  const location = useLocation();

  // Dynamic Scroll Progress at Top Border
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 26,
    restDelta: 0.001,
  });

  const closeMenu = () => {
    setOpen(false);
    setResourcesOpen(false);
    setMobileResourcesOpen(false);
  };

  // Scroll position detector for header visual mode
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

  // Body scroll locking when mobile/tablet menu is open
  useEffect(() => {
    if (open) {
      const prevOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prevOverflow;
      };
    }
  }, [open]);

  // Click outside / ESC key listener
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        setResourcesOpen(false);
        setMobileResourcesOpen(false);
        toggleRef.current?.focus();
      }
    };

    const onPointerDown = (event: PointerEvent) => {
      const target = event.target as Node;
      if (open && headerRef.current && !headerRef.current.contains(target)) {
        setOpen(false);
        setMobileResourcesOpen(false);
      }
      // ONLY check desktop resourceRef when on desktop
      if (
        !open &&
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

  const isHome = location.pathname === "/";
  const [activeSection, setActiveSection] = useState<string>("about");

  // Scroll spy on home page so active link highlights dynamically as user scrolls
  useEffect(() => {
    if (!isHome) {
      setActiveSection("");
      return;
    }

    const sectionIds = [
      "vision",
      "4p-models",
      "ecosystem",
      "about",
    ];

    const handleScrollSpy = () => {
      const scrollY = window.scrollY;
      if (scrollY < 260) {
        setActiveSection("about");
        return;
      }

      const headerOffset = 130;
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop - headerOffset;
          const height = el.offsetHeight;
          if (scrollY >= top && scrollY < top + height) {
            setActiveSection(id);
            return;
          }
        }
      }
    };

    handleScrollSpy();
    window.addEventListener("scroll", handleScrollSpy, { passive: true });
    return () => window.removeEventListener("scroll", handleScrollSpy);
  }, [isHome]);

  // Bulletproof navigation handler for internal hashes, client routes, and external links
  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    // External links proceed naturally
    if (href.startsWith("http://") || href.startsWith("https://")) {
      closeMenu();
      return;
    }

    // Anchor hash link e.g. "/#ecosystem" or "#ecosystem"
    if (href.includes("#")) {
      e.preventDefault();
      const [pathPart, hashPart] = href.split("#");
      const targetId = hashPart;
      const targetPath = pathPart === "" ? location.pathname : pathPart;
      const isTargetOnCurrentPage = location.pathname === targetPath;

      closeMenu();

      if (isTargetOnCurrentPage) {
        if (targetId === "about") {
          window.scrollTo({ top: 0, behavior: "smooth" });
          window.history.pushState(null, "", "/");
          setActiveSection("about");
          return;
        }

        const el = document.getElementById(targetId);
        if (el) {
          const headerOffset = isScrolled ? 76 : 88;
          const targetY =
            el.getBoundingClientRect().top + window.scrollY - headerOffset;
          window.scrollTo({
            top: Math.max(0, targetY),
            behavior: "smooth",
          });
          window.history.pushState(null, "", `#${targetId}`);
          setActiveSection(targetId);
        } else {
          window.location.hash = targetId;
        }
      } else {
        navigate(href);
      }
      return;
    }

    // Client-side route e.g. "/oxy-foundation" or "/links" or "/"
    if (href.startsWith("/")) {
      e.preventDefault();
      closeMenu();
      navigate(href);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

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
      onClick={(e) => handleNavClick(e, href)}
      className={`tvrk-nav-link ${current ? "tvrk-nav-link-active" : ""}`}
      aria-current={current ? "page" : undefined}
    >
      {children}
    </a>
  );

  const resourcesActive =
    !isHome &&
    (active === "foundation" ||
      active === "bridgital" ||
      active === "certificates" ||
      active === "links");

  const ResourcesMenu = ({ mobile = false }: { mobile?: boolean }) => {
    const isExpanded = mobile ? mobileResourcesOpen : resourcesOpen;

    const handleToggle = (e: React.MouseEvent) => {
      e.stopPropagation();
      if (mobile) {
        setMobileResourcesOpen((val) => !val);
      } else {
        setResourcesOpen((val) => !val);
      }
    };

    return (
      <div
        ref={!mobile ? resourceRef : undefined}
        className={`tvrk-resource-wrap ${mobile ? "tvrk-resource-mobile" : ""}`}
      >
        <button
          type="button"
          className={`tvrk-nav-link tvrk-resource-trigger ${
            resourcesActive ? "tvrk-nav-link-active" : ""
          }`}
          aria-expanded={isExpanded}
          aria-haspopup="menu"
          onClick={handleToggle}
        >
          <span>Resources</span>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className={`tvrk-chevron ${isExpanded ? "is-open" : ""}`}
            aria-hidden="true"
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </button>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={
                mobile
                  ? { opacity: 0, height: 0 }
                  : { opacity: 0, y: 8, scale: 0.98 }
              }
              animate={
                mobile
                  ? { opacity: 1, height: "auto" }
                  : { opacity: 1, y: 0, scale: 1 }
              }
              exit={
                mobile
                  ? { opacity: 0, height: 0 }
                  : { opacity: 0, y: 8, scale: 0.98 }
              }
              transition={{ duration: 0.2, ease: "easeOut" }}
              className={`tvrk-resource-menu ${
                mobile ? "tvrk-resource-menu-mobile" : ""
              }`}
              role="menu"
            >
              <p className="tvrk-resource-eyebrow">Explore</p>
              {resourceLinks.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
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
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };

  return (
    <>
      <style>{`
        .tvrk-header,
        .tvrk-header * {
          box-sizing: border-box;
        }

        .tvrk-header {
          position: fixed;
          inset: 0 0 auto 0;
          z-index: 1000;
          isolation: isolate;
          width: 100%;
          font-family: 'Manrope', 'Inter', 'Segoe UI', Arial, sans-serif;
          background: linear-gradient(100deg, #120650 0%, #060622 48%, #12074d 100%);
          border-bottom: 1px solid rgba(190, 155, 255, .16);
          box-shadow: 0 12px 36px rgba(4, 2, 28, .22);
          transition: background .25s ease, box-shadow .25s ease, border-color .25s ease;
        }

        /* DYNAMIC SCROLL PROGRESS BAR AT TOP BORDER */
        .tvrk-progress-track {
          position: absolute;
          inset: 0 0 auto 0;
          height: 3.5px;
          background: rgba(255, 255, 255, 0.08);
          overflow: hidden;
          z-index: 1005;
          pointer-events: none;
        }

        .tvrk-header-scrolled .tvrk-progress-track {
          background: rgba(20, 24, 60, 0.06);
        }

        .tvrk-progress-bar {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          transform-origin: 0% 50%;
          background: linear-gradient(90deg, #0a56d8 0%, #6a27e8 35%, #ec0b82 70%, #ff8a62 100%);
          box-shadow: 0 0 10px rgba(236, 11, 130, 0.75), 0 0 4px rgba(10, 86, 216, 0.85);
        }

        /* SCROLLED HEADER STATE — SOLID OPAQUE WHITE TO PREVENT ANY BACKGROUND BLEED */
        .tvrk-header.tvrk-header-scrolled {
          background: #ffffff;
          border-bottom: 1px solid rgba(31, 67, 146, 0.12);
          box-shadow: 0 8px 30px rgba(14, 24, 60, 0.09);
        }

        /* WHEN MENU IS OPEN, RETAIN SOLID DARK ELEGANCE ON MOBILE/TABLET */
        .tvrk-header.tvrk-header-menu-open {
          background: #0e0936 !important;
          border-bottom-color: rgba(190, 155, 255, 0.22) !important;
          box-shadow: 0 20px 50px rgba(4, 2, 28, 0.5) !important;
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

        /* LOGO CONTAINER WITH SMOOTH CROSS-FADE (NO BLANK FLICKER) */
        .tvrk-header-logo-wrap {
          position: relative;
          display: flex;
          align-items: center;
          max-width: min(300px, 45vw);
          min-width: 0;
          height: 56px;
        }

        .tvrk-logo-img {
          display: block;
          width: 255px;
          max-width: 100%;
          max-height: 54px;
          object-fit: contain;
          object-position: left center;
          transition: opacity .22s ease, transform .22s ease;
        }

        .tvrk-logo-img.is-hidden {
          position: absolute;
          inset: 0 auto auto 0;
          opacity: 0;
          pointer-events: none;
        }

        .tvrk-desktop-nav {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          gap: 4px;
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
          padding: 10px 14px;
          border: 0;
          border-radius: 12px;
          background: transparent;
          color: rgba(255,255,255,.86);
          font: inherit;
          font-size: 13.5px;
          font-weight: 800;
          white-space: nowrap;
          cursor: pointer;
          touch-action: manipulation;
          transition: color .2s ease, background .2s ease, transform .15s ease;
        }

        .tvrk-nav-link:hover {
          color: #fff;
          background: rgba(255,255,255,.10);
        }

        .tvrk-nav-link:active {
          transform: scale(0.98);
        }

        .tvrk-header-scrolled .tvrk-nav-link { color: #34435f; }
        .tvrk-header-scrolled .tvrk-nav-link:hover { color: #211b67; background: #f2f3f8; }

        .tvrk-nav-link-active {
          color: #fff;
          background: rgba(255,255,255,.12);
        }

        .tvrk-header-scrolled .tvrk-nav-link-active {
          color: #211b67;
          background: #efedf9;
        }

        .tvrk-resource-wrap { position: relative; }
        .tvrk-chevron { width: 14px; height: 14px; transition: transform .22s ease; }
        .tvrk-chevron.is-open { transform: rotate(180deg); }

        .tvrk-resource-menu {
          position: absolute;
          top: calc(100% + 10px);
          right: 0;
          width: 252px;
          padding: 8px;
          border: 1px solid rgba(27,25,57,.10);
          border-radius: 18px;
          background: rgba(255,255,255,.99);
          box-shadow: 0 20px 55px rgba(20,24,55,.18);
          backdrop-filter: blur(16px);
          z-index: 1010;
        }

        .tvrk-resource-eyebrow {
          margin: 4px 8px 6px;
          color: #8a8e9b;
          font-size: 9.5px;
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
          font-size: 13.5px;
          font-weight: 800;
          cursor: pointer;
          touch-action: manipulation;
          transition: background .2s ease, color .2s ease, transform .15s ease;
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
          cursor: pointer;
          touch-action: manipulation;
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
          cursor: pointer;
          touch-action: manipulation;
          transition: background .2s ease, transform .15s ease;
        }

        .tvrk-menu-toggle:active {
          transform: scale(0.94);
        }

        .tvrk-header-scrolled .tvrk-menu-toggle {
          border-color: rgba(33,27,103,.12);
          background: #f2f3f8;
          color: #211b67;
        }

        .tvrk-header.tvrk-header-menu-open .tvrk-menu-toggle {
          border-color: rgba(255,255,255,.24);
          background: rgba(255,255,255,.15);
          color: #fff;
        }

        .tvrk-backdrop {
          position: fixed;
          inset: 0;
          z-index: 998;
          background: rgba(5, 3, 22, 0.65);
          backdrop-filter: blur(6px);
          -webkit-backdrop-filter: blur(6px);
        }

        .tvrk-mobile-nav { display: none; }
        .tvrk-header-spacer { height: 84px; }
        .tvrk-header-scrolled + .tvrk-header-spacer { height: 72px; }

        /* TABLET & MOBILE RESPONSIVE ADJUSTMENTS */
        @media (max-width: 1099px) {
          .tvrk-header-inner {
            width: calc(100% - 24px);
            min-height: 72px;
            gap: 12px;
          }

          .tvrk-header-scrolled .tvrk-header-inner { min-height: 64px; }
          .tvrk-desktop-nav { display: none; }
          .tvrk-menu-toggle { display: grid; }

          .tvrk-header-logo-wrap { max-width: calc(100% - 58px); height: 48px; }
          .tvrk-logo-img { width: 205px; max-height: 46px; }

          .tvrk-mobile-nav {
            display: grid;
            width: min(calc(100% - 24px), 560px);
            max-height: calc(100dvh - 86px);
            overflow-y: auto;
            margin: 0 auto 12px;
            padding: 12px;
            gap: 5px;
            border: 1px solid rgba(255,255,255,.18);
            border-radius: 18px;
            background: #0e0936;
            box-shadow: 0 20px 50px rgba(4,2,28,.45);
          }

          .tvrk-mobile-nav > .tvrk-nav-link,
          .tvrk-mobile-nav .tvrk-resource-trigger {
            width: 100%;
            justify-content: space-between;
            margin: 0;
            min-height: 48px;
            padding-inline: 14px;
            color: #ffffff;
            font-size: 14px;
            border-radius: 12px;
          }

          .tvrk-mobile-nav > .tvrk-nav-link:hover,
          .tvrk-mobile-nav .tvrk-resource-trigger:hover {
            background: rgba(255, 255, 255, 0.12);
            color: #ffffff;
          }

          .tvrk-mobile-nav > .tvrk-nav-link-active,
          .tvrk-mobile-nav .tvrk-resource-trigger.tvrk-nav-link-active {
            background: linear-gradient(90deg, rgba(59, 130, 196, 0.28), rgba(81, 184, 91, 0.22)) !important;
            border: 1px solid rgba(255, 255, 255, 0.24) !important;
            color: #ffffff !important;
            font-weight: 900;
          }

          .tvrk-mobile-nav > .tvrk-ai-btn {
            width: 100%;
            min-height: 50px;
            justify-content: center;
            margin: 8px 0 2px;
            padding: 12px 18px;
            border-radius: 14px;
            font-size: 14px;
          }

          .tvrk-resource-mobile { width: 100%; }
          .tvrk-resource-mobile .tvrk-resource-menu,
          .tvrk-resource-menu-mobile {
            position: static !important;
            width: 100% !important;
            margin-top: 6px !important;
            padding: 8px !important;
            border: 1px solid rgba(255, 255, 255, 0.15) !important;
            border-radius: 14px !important;
            background: rgba(255, 255, 255, 0.08) !important;
            box-shadow: none !important;
            backdrop-filter: blur(12px) !important;
            overflow: hidden;
          }

          .tvrk-resource-menu-mobile .tvrk-resource-eyebrow {
            color: rgba(255, 255, 255, 0.6) !important;
            margin: 4px 8px 6px !important;
          }

          .tvrk-resource-menu-mobile .tvrk-resource-item {
            color: #ffffff !important;
            min-height: 46px !important;
            padding: 10px 14px !important;
            border-radius: 10px !important;
          }

          .tvrk-resource-menu-mobile .tvrk-resource-item:hover,
          .tvrk-resource-menu-mobile .tvrk-resource-item.is-current {
            background: rgba(255, 255, 255, 0.15) !important;
            color: #ffffff !important;
          }

          .tvrk-resource-menu-mobile .tvrk-resource-item svg {
            color: rgba(255, 255, 255, 0.7) !important;
          }

          .tvrk-resource-menu-mobile .tvrk-foundation-resource > span:first-child {
            color: #60a5fa !important;
          }

          .tvrk-resource-menu-mobile .tvrk-foundation-resource > span:last-child {
            color: #4ade80 !important;
          }

          .tvrk-header-spacer { height: 72px; }
        }

        /* TABLET SPECIFIC (640px to 1099px) */
        @media (min-width: 640px) and (max-width: 1099px) {
          .tvrk-mobile-nav {
            padding: 16px;
            gap: 6px;
          }
          .tvrk-mobile-nav > .tvrk-nav-link,
          .tvrk-mobile-nav .tvrk-resource-trigger {
            font-size: 15px;
            min-height: 50px;
          }
        }

        @media (max-width: 420px) {
          .tvrk-logo-img { width: 176px; max-height: 42px; }
          .tvrk-menu-toggle { width: 42px; height: 42px; }
          .tvrk-mobile-nav > .tvrk-ai-btn {
            min-height: 48px;
            padding: 11px 16px;
            font-size: 13px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .tvrk-header,
          .tvrk-header * { transition: none !important; }
        }
      `}</style>

      {/* Screen Backdrop for Mobile / Tablet Drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="tvrk-backdrop lg:hidden"
            onClick={closeMenu}
            aria-hidden="true"
          />
        )}
      </AnimatePresence>

      {active !== "home" && (
        <div className="tvrk-header-spacer" aria-hidden="true" />
      )}

      <header
        ref={headerRef}
        className={`tvrk-header ${
          open
            ? "tvrk-header-menu-open"
            : isScrolled
            ? "tvrk-header-scrolled"
            : "tvrk-header-top"
        }`}
      >
        {/* Dynamic Multi-Color Scrolling Progress Bar across top border */}
        <div className="tvrk-progress-track" aria-hidden="true">
          <motion.div className="tvrk-progress-bar" style={{ scaleX }} />
        </div>

        <div className="tvrk-header-inner">
          <a
            href="/"
            className="tvrk-header-logo"
            aria-label="TV Radhakrishna Home"
            onClick={(e) => handleNavClick(e, "/")}
          >
            <div className="tvrk-header-logo-wrap">
              {/* White Logo (Dark header mode) */}
              <img
                src={HEADER_LOGO_WHITE}
                alt="TV Radhakrishna"
                width="270"
                height="64"
                decoding="async"
                loading="eager"
                className={`tvrk-logo-img tvrk-logo-white ${
                  isScrolled && !open ? "is-hidden" : ""
                }`}
              />
              {/* Color Logo (Light scrolled header mode) */}
              <img
                src={HEADER_LOGO_COLOR}
                alt="TV Radhakrishna"
                width="270"
                height="64"
                decoding="async"
                loading="eager"
                className={`tvrk-logo-img tvrk-logo-color ${
                  !isScrolled || open ? "is-hidden" : ""
                }`}
              />
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="tvrk-desktop-nav" aria-label="Main navigation">
            <NavLink
              href="/#about"
              current={isHome && activeSection === "about"}
            >
              Home
            </NavLink>
            <NavLink
              href="/#ecosystem"
              current={isHome && activeSection === "ecosystem"}
            >
              Ecosystem
            </NavLink>
            <NavLink
              href="/#vision"
              current={isHome && activeSection === "vision"}
            >
              Vision
            </NavLink>
            <NavLink
              href="/#4p-models"
              current={isHome && activeSection === "4p-models"}
            >
              4P Models
            </NavLink>

            <ResourcesMenu />

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

          {/* Mobile & Tablet Hamburger Toggle */}
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

        {/* Mobile & Tablet Animated Navigation Menu */}
        <AnimatePresence>
          {open && (
            <motion.nav
              id="tvrk-mobile-menu"
              className="tvrk-mobile-nav"
              aria-label="Mobile navigation"
              initial={{ opacity: 0, y: -14, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -14, scale: 0.98 }}
              transition={{ type: "spring", stiffness: 380, damping: 28 }}
            >
              <NavLink
                href="/#about"
                current={isHome && activeSection === "about"}
              >
                Home
              </NavLink>
              <NavLink
                href="/#ecosystem"
                current={isHome && activeSection === "ecosystem"}
              >
                Ecosystem
              </NavLink>
              <NavLink
                href="/#vision"
                current={isHome && activeSection === "vision"}
              >
                Vision
              </NavLink>
              <NavLink
                href="/#4p-models"
                current={isHome && activeSection === "4p-models"}
              >
                4P Models
              </NavLink>

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
            </motion.nav>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
