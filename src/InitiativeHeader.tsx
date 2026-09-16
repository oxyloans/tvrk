import React, { useEffect, useRef, useState } from "react";

type InitiativeHeaderProps = {
  active?: "home" | "foundation" | "bridgital";
};

/** Shared header for all three pages. Home already has hero top spacing. */
export default function InitiativeHeader({ active = "home" }: InitiativeHeaderProps) {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const headerRef = useRef<HTMLElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    let previous = Math.max(0, window.scrollY);
    const onScroll = () => {
      const current = Math.max(0, window.scrollY);
      if (current < 80) setVisible(true);
      else if (Math.abs(current - previous) > 6) {
        setVisible(current < previous);
      }
      if (Math.abs(current - previous) > 6) previous = current;
    };
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape" && open) {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    const onPointer = (event: PointerEvent) => {
      if (!headerRef.current?.contains(event.target as Node)) setOpen(false);
    };
    const desktop = window.matchMedia("(min-width: 1200px)");
    const onResize = () => { if (desktop.matches) setOpen(false); };
    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    desktop.addEventListener("change", onResize);
    return () => {
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer);
      desktop.removeEventListener("change", onResize);
    };
  }, [open]);

  const close = () => setOpen(false);
  const links = (
    <>
      {[
        ["about", "About"],
        ["ecosystem", "Ecosystem"],
        ["vision", "Vision"],
      ].map(([id, label]) => (
        <a key={id} href={`/#${id}`} className="tvrk-text-link" onClick={close}>{label}</a>
      ))}
      <span className="tvrk-divider" aria-hidden="true" />
      <a href="/oxy-foundation" onClick={close} className="tvrk-pill" aria-current={active === "foundation" ? "page" : undefined}>
        <span><span style={{ color: "#3B82C4" }}>OXY</span><span style={{ color: "#399B44" }}> FOUNDATION</span></span>
      </a>
      <a href="/bridgital-nation" onClick={close} className="tvrk-pill tvrk-blue" aria-current={active === "bridgital" ? "page" : undefined}>Bridgital Nation</a>
      <a href="https://www.askoxy.ai/radhAI" target="_blank" rel="noopener noreferrer" onClick={close} className="tvrk-ai">
        Talk to my AI
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M7 17 17 7M7 7h10v10" /></svg>
      </a>
    </>
  );

  return (
    <>
      <style>{`
        .tvrk-container { box-sizing: border-box; width: min(1216px, calc(100% - 32px)) !important; max-width: none; margin-left: auto; margin-right: auto; min-width: 0; }
        .tvrk-container .grid > * { min-width: 0; }
        @media(min-width:640px) { .tvrk-container { width: min(1216px, calc(100% - 48px)) !important; } }
        @media(min-width:1024px) { .tvrk-container { width: min(1216px, calc(100% - 64px)) !important; } }
        .tvrk-header, .tvrk-header * { box-sizing: border-box; }
        .tvrk-header { position: fixed; inset: 0 0 auto; z-index: 60; padding: 16px 0 0; font-family: inherit; transition: transform .25s ease; }
        .tvrk-header[data-visible="false"] { transform: translateY(-110%); }
        .tvrk-header:focus-within { transform: translateY(0); }
        .tvrk-bar { width: min(1216px, calc(100% - 64px)); min-height: 76px; margin: 0 auto; display: flex; align-items: center; justify-content: space-between; gap: 16px; padding-right: 20px; border: 1px solid rgba(255,255,255,.95); border-radius: 30px; background: linear-gradient(110deg,#fff 0%,#f4f3fa 35%,#e8e5f3 100%); box-shadow: inset 0 2px 0 #fff,0 10px 32px rgba(32,25,88,.12); }
        .tvrk-logo { align-self: stretch; display:flex; align-items:center; flex-shrink:0; padding: 12px 22px; border-radius:29px 0 0 29px; background:linear-gradient(90deg,#fff 65%,rgba(255,255,255,.25)); text-decoration:none; }
        .tvrk-logo img { display:block; width:164px; height:40px; max-width:100%; object-fit:contain; }
        .tvrk-desktop { display:flex; align-items:center; gap:8px; }
        .tvrk-header a { text-decoration:none; }
        .tvrk-text-link,.tvrk-pill,.tvrk-ai { display:flex; align-items:center; justify-content:center; min-height:48px; padding:10px 14px; font-size:14px; font-weight:700; line-height:1.4; white-space:nowrap; }
        .tvrk-text-link { color:#625d73; border-radius:24px; }
        .tvrk-text-link:hover { background:#fff9; color:#211b67; }
        .tvrk-pill { border-radius:999px; border:1px solid #fff; background:linear-gradient(150deg,#fff,#f7f5ff); box-shadow:inset 0 1px 0 #fff,0 5px 16px #211b6708; }
        .tvrk-pill[aria-current="page"] { border-color:#b7b1d9; box-shadow:0 0 0 2px #211b6710; }
        .tvrk-blue { color:#2f7db8; }
        .tvrk-ai { gap:12px; border-radius:999px; color:#fff; background:#211b67; box-shadow:0 8px 20px #211b6724; }
        .tvrk-ai:hover { background:#302780; }
        .tvrk-divider { width:1px; height:28px; margin:0 4px; background:#d6d1e6; }
        .tvrk-toggle { display:none; width:44px; height:44px; border:1px solid #dedbea; border-radius:14px; background:#fff; color:#211b67; align-items:center; justify-content:center; cursor:pointer; flex-shrink:0; }
        .tvrk-mobile { display:none; }
        .tvrk-header a:focus-visible,.tvrk-header button:focus-visible { outline:3px solid #3B82C4; outline-offset:3px; }
        .tvrk-header-space { height:118px; background:#211b67; }
        #about,#ecosystem,#vision { scroll-margin-top:120px; }
        @media(max-width:1199px) {
          .tvrk-header { padding:12px 0 0; }
          .tvrk-bar { width: min(1216px, calc(100% - 48px)); min-height:72px; padding-right:14px; border-radius:24px; }
          .tvrk-logo { padding:12px 22px; border-radius:23px 0 0 23px; }
          .tvrk-desktop { display:none; }
          .tvrk-toggle { display:flex; }
          .tvrk-mobile { display:grid; gap:8px; margin:8px auto 0; padding:12px; width: min(1216px, calc(100% - 48px)); max-height:calc(100dvh - 106px); overflow-y:auto; overscroll-behavior:contain; background:linear-gradient(130deg,#fff,#f0eef8); border:1px solid #fff; border-radius:22px; box-shadow:0 14px 36px #211b6720; }
          .tvrk-mobile .tvrk-text-link { justify-content:flex-start; }
          .tvrk-mobile .tvrk-divider { width:100%; height:1px; margin:2px 0; }
          .tvrk-header-space { height:100px; }
        }
        @media(max-width:639px) {
          .tvrk-header { padding:10px 0 0; }
          .tvrk-bar { width:calc(100% - 32px); min-height:66px; gap:8px; padding-right:10px; border-radius:21px; }
          .tvrk-logo { padding:12px 16px; border-radius:20px 0 0 20px; }
          .tvrk-logo img { width:150px; height:34px; }
          .tvrk-header-space { height:90px; }
          .tvrk-mobile { width:calc(100% - 32px); }
        }
        @media(min-width:1024px) and (max-width:1199px) { .tvrk-bar,.tvrk-mobile { width:calc(100% - 64px); } }
        @media(prefers-reduced-motion:reduce) { .tvrk-header { transition:none; } }
      `}</style>
      {active !== "home" && <div className="tvrk-header-space" aria-hidden="true" />}
      <header ref={headerRef} className="tvrk-header" data-visible={visible || open}>
        <div className="tvrk-bar">
          <a href="/" aria-label="TV Radhakrishna home" className="tvrk-logo" onClick={close}>
            <img src="https://i.ibb.co/XrT06DxX/tvrklogo.png" alt="TV Radhakrishna" width="164" height="40" />
          </a>
          <nav className="tvrk-desktop" aria-label="Main navigation">{links}</nav>
          <button ref={toggleRef} className="tvrk-toggle" type="button" aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open} aria-controls="tvrk-mobile-menu" onClick={() => setOpen(value => !value)}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
              <path d={open ? "M6 6l12 12M18 6 6 18" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
        {open && <nav id="tvrk-mobile-menu" className="tvrk-mobile" aria-label="Mobile navigation">{links}</nav>}
      </header>
    </>
  );
}
