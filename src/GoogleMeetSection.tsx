import React from "react";
import { SiGooglemeet } from "react-icons/si";
import InitiativeHeader from "./InitiativeHeader";

const GOOGLE_MEET_URL = "https://meet.google.com/fwn-kqkc-cmb";
const POSTERS = [
  { src: "https://i.ibb.co/N6SvmQt4/ed3367.png", title: "Daily Google Meet · Creative 01" },
  { src: "https://i.ibb.co/FLpC5jpx/uiyuiy.png", title: "Daily Google Meet · Creative 02" },
];
const TOPICS = [
  "Loans – Personal, Business", "Study Abroad", "Gold & Silver",
  "Real Estate", "Jobs & Career Opportunities",
];

function ArrowIcon({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export default function GoogleMeetSection() {
  return (
    <div className="meet-page">
      <style>{`
        .meet-page { color: #fff; min-height: 100vh; background: #211b67; }
        .meet-page *, .meet-page *::before, .meet-page *::after { box-sizing: border-box; }
        .meet-page .meet-main {
          background: radial-gradient(ellipse at 90% 8%,rgba(169,100,160,.28),transparent 48%),
            linear-gradient(135deg,#211b67,#35247a 60%,#503077);
        }
        .meet-page .meet-container { width: min(100%,1280px); margin-inline: auto; padding-inline: 24px; }
        .meet-page .meet-hero {
          display: grid; grid-template-columns: minmax(0,1.08fr) minmax(0,.92fr);
          align-items: center; gap: 44px; padding-top: 104px; padding-bottom: 28px;
        }
        .meet-page .meet-content, .meet-page .meet-art { min-width: 0; }
        .meet-page .meet-eyebrow { margin: 0; color: #e4c5ae; font-size: 11px;
          font-weight: 600; letter-spacing: .16em; text-transform: uppercase; }
        .meet-page .meet-title { margin: 12px 0 0; font-size: clamp(30px,3vw,40px);
          line-height: 1.12; letter-spacing: -.035em; font-weight: 700; }
        .meet-page .meet-title span { display: block; color: #f5d6bc; }
        .meet-page .meet-intro { margin: 10px 0 0; color: #e3ddf0; font-size: 15px; line-height: 1.6; }
        .meet-page .meet-actions { display: flex; flex-wrap: wrap; align-items: center; gap: 10px; margin-top: 16px; }
        .meet-page .meet-time { display: inline-flex; align-items: center; flex-wrap: wrap;
          gap: 8px; margin-top: 0; border: 1px solid rgba(255,255,255,.18);
          border-radius: 12px; background: rgba(255,255,255,.07); padding: 10px 12px; min-height: 46px; }
        .meet-page .meet-time svg { width: 20px; height: 20px; flex-shrink: 0; color: #8fe0ba; }
        .meet-page .meet-time strong { font-size: 14px; font-weight: 600; }
        .meet-page .meet-time small { color: #ded6ee; font-size: 11px; }
        .meet-page .meet-trust { margin: 16px 0 0; display: flex; align-items: center;
          gap: 8px; color: #e7d1bd; font-size: 12px; font-weight: 600; }
        .meet-page .meet-trust i { width: 6px; height: 6px; border-radius: 50%; background: #95dfb8; }
        .meet-page .meet-returns { margin-top: 12px; display: grid; grid-template-columns: repeat(2,minmax(0,1fr)); gap: 12px; }
        .meet-page .meet-return { padding: 11px 14px; border: 1px solid rgba(245,214,188,.2);
          border-radius: 14px; background: rgba(245,214,188,.06); }
        .meet-page .meet-return p { margin: 0; color: #e4dbee; font-size: 11px; line-height: 1.5; }
        .meet-page .meet-return strong { display: block; margin-top: 4px; color: #f5d6bc;
          font-size: 23px; line-height: 1.15; letter-spacing: -.03em; }
        .meet-page .meet-return small { display: block; margin-top: 4px; font-size: 11px; color: #e4dbee; }
        .meet-page .meet-topics { list-style: none; margin: 12px 0 0; padding: 0;
          display: grid; grid-template-columns: repeat(2,minmax(0,1fr)); gap: 7px 14px; }
        .meet-page .meet-topics li { display: flex; align-items: flex-start; gap: 8px;
          font-size: 12px; line-height: 1.6; color: #e8e2f2; min-width: 0; }
        .meet-page .meet-topics li::before { content: '✓'; color: #f5d6bc; flex-shrink: 0; }
        .meet-page .meet-speaker { margin-top: 16px; padding-top: 12px; border-top: 1px solid rgba(255,255,255,.15);
          display: flex; align-items: center; gap: 12px; }
        .meet-page .meet-avatar { display: grid; place-items: center; width: 40px; height: 40px;
          flex-shrink: 0; border: 1px solid rgba(245,214,188,.3); border-radius: 50%;
          color: #f5d6bc; background: rgba(245,214,188,.08); font-size: 12px; font-weight: 700; }
        .meet-page .meet-speaker p { margin: 0; font-size: 13px; font-weight: 600; }
        .meet-page .meet-speaker small { display: block; margin-top: 3px; color: #d3c7e5; font-size: 11px; }
        .meet-page .meet-join { margin-top: 0; display: inline-flex; align-items: center;
          justify-content: center; gap: 10px; min-height: 46px; border-radius: 12px;
          background: #e8f5ee; padding: 11px 16px; color: #17493c; text-decoration: none;
          font-size: 14px; font-weight: 600; transition: background .2s,box-shadow .2s; }
        .meet-page .meet-join svg { height: 19px; width: 19px; flex-shrink: 0; }
        .meet-page .meet-join svg:last-child { margin-left: 16px; }
        .meet-page .meet-share { margin: 12px 0 0; color: #cfc5e0; font-size: 11px; line-height: 1.6; }
        .meet-page .meet-art { width: 100%; max-width: 470px; justify-self: center; }
        .meet-page .meet-art img { display: block; margin-inline: auto; width: auto; height: auto; max-width: 100%;
          max-height: clamp(350px,calc(100svh - 140px),540px); object-fit: contain;
          border-radius: 18px; box-shadow: 0 24px 56px rgba(12,7,42,.25); }
        .meet-page .meet-gallery { border-top: 1px solid rgba(255,255,255,.12);
          padding-block: 40px 56px; background: rgba(13,9,44,.22); }
        .meet-page .meet-gallery-head { display: flex; align-items: center; justify-content: space-between;
          flex-wrap: wrap; gap: 14px; margin-bottom: 24px; }
        .meet-page .meet-gallery-head h2 { margin: 6px 0 0; font-size: 26px; font-weight: 700; letter-spacing: -.025em; }
        .meet-page .meet-photoshop { display: inline-flex; align-items: center; gap: 8px;
          font-size: 11px; color: #d9d0e8; }
        .meet-page .meet-photoshop b { display: grid; place-items: center; width: 27px; height: 27px;
          border: 1px solid #508bb1; border-radius: 6px; color: #80caff; background: #102c42; }
        .meet-page .meet-gallery-grid { display: grid; grid-template-columns: repeat(2,minmax(0,1fr)); gap: 24px; }
        .meet-page .meet-creative { margin: 0; min-width: 0; padding: 12px; border-radius: 18px;
          background: rgba(255,255,255,.045); border: 1px solid rgba(255,255,255,.12); }
        .meet-page .meet-preview { display: grid; place-items: center; padding: 8px;
          border-radius: 12px; background: rgba(0,0,0,.1); }
        .meet-page .meet-preview img { display: block; width: auto; height: auto; max-width: 100%; max-height: 480px; border-radius: 8px; }
        .meet-page .meet-creative figcaption { display: flex; align-items: center; justify-content: space-between;
          flex-wrap: wrap; gap: 8px; padding: 10px 4px 0; font-size: 11px; color: #dfd6ed; }
        .meet-page .meet-view { display: inline-flex; align-items: center; gap: 8px; min-height: 44px;
          color: #f5d6bc; text-decoration: none; font-weight: 600; }
        .meet-page .meet-view svg { height: 16px; width: 16px; }
        .meet-page .meet-join:focus-visible, .meet-page .meet-view:focus-visible,
        .meet-page .meet-preview:focus-visible { outline: 2px solid white; outline-offset: 4px; }
        @media (hover:hover) { .meet-page .meet-join:hover { background: white; box-shadow: 0 8px 24px rgba(0,0,0,.2); }
          .meet-page .meet-view:hover { color: white; } }
        @media (max-width:1023px) {
          .meet-page .meet-hero { gap: 28px; padding-top: 100px; }
          .meet-page .meet-title { font-size: 34px; }
          .meet-page .meet-time { gap: 8px; }
        }
        @media (max-width:767px) {
          .meet-page .meet-container { padding-inline: 20px; }
          .meet-page .meet-hero { grid-template-columns: minmax(0,1fr); padding-top: 96px;
            padding-bottom: 24px; gap: 24px; }
          .meet-page .meet-content { width: 100%; max-width: 560px; justify-self: center; }
          .meet-page .meet-title { font-size: 30px; }
          .meet-page .meet-intro { font-size: 15px; }
          .meet-page .meet-join { width: 100%; }
          .meet-page .meet-art img { width: 100%; max-height: none; }
          .meet-page .meet-art { max-width: 420px; }
          .meet-page .meet-gallery { padding-block: 30px 36px; }
          .meet-page .meet-gallery-grid { grid-template-columns: minmax(0,1fr); gap: 18px; }
          .meet-page .meet-creative { width: 100%; max-width: 560px; justify-self: center; }
          .meet-page .meet-gallery-head h2 { font-size: 24px; }
        }
        @media (max-width:359px) {
          .meet-page .meet-container { padding-inline: 16px; }
          .meet-page .meet-topics { grid-template-columns: minmax(0,1fr); }
          .meet-page .meet-return { padding: 12px; }
        }
        @media (prefers-reduced-motion:reduce) { .meet-page .meet-join { transition: none; } }
      `}</style>
      <InitiativeHeader active="home" />
      <main className="meet-main">
        <section id="google-meet" aria-labelledby="google-meet-title" className="meet-container meet-hero">
          <div className="meet-content">
            <p className="meet-eyebrow">Every journey, one partner</p>
            <h1 id="google-meet-title" className="meet-title">Every Day<span>GOOGLE MEET</span></h1>
            <p className="meet-intro">Live Q&amp;A with Our CEO</p>
            <div className="meet-actions">
            <div className="meet-time">
              <SiGooglemeet aria-hidden="true" />
              <strong>09:30 – 10:30 PM IST</strong>
              <small>Every day</small>
            </div>
            <a href={GOOGLE_MEET_URL} target="_blank" rel="noopener noreferrer" className="meet-join"
              aria-label="Join the daily Google Meet at 9:30 PM IST (opens in a new tab)">
              <SiGooglemeet aria-hidden="true" /><span>Join Google Meet</span><ArrowIcon />
            </a>
            </div>
            <p className="meet-trust"><i aria-hidden="true" />RBI-Approved P2P NBFC</p>
            <div className="meet-returns">
              <div className="meet-return"><p>Lend &amp; Earn Up to</p><strong>1.75%</strong><small>Monthly ROI</small></div>
              <div className="meet-return"><p>Lend &amp; Earn Up to</p><strong>24%</strong><small>Yearly ROI</small></div>
            </div>
            <ul className="meet-topics">{TOPICS.map(topic => <li key={topic}>{topic}</li>)}</ul>
            <div className="meet-speaker">
              <span className="meet-avatar" aria-hidden="true">RK</span>
              <div><p>Speaker: RadhaKrishna. T</p><small>CEO &amp; Co-Founder</small></div>
            </div>
            <p className="meet-share">Share with your friends &amp; family</p>
          </div>
          <div className="meet-art">
            <img src={POSTERS[0].src} alt="Every Day Google Meet — Live Q&A with RadhaKrishna. T"
              decoding="async" fetchPriority="high" />
          </div>
        </section>
        <section id="our-creatives" aria-labelledby="our-creatives-title" className="meet-gallery">
          <div className="meet-container">
            <div className="meet-gallery-head">
              <div><p className="meet-eyebrow">Every Day Google Meet</p><h2 id="our-creatives-title">Our Creatives</h2></div>
              <span className="meet-photoshop"><b aria-hidden="true">Ps</b>Created using Photoshop</span>
            </div>
            <div className="meet-gallery-grid">
              {POSTERS.map(poster => (
                <figure key={poster.src} className="meet-creative">
                  <a href={poster.src} target="_blank" rel="noopener noreferrer" className="meet-preview"
                    aria-label={`View ${poster.title} at full size (opens in a new tab)`}>
                    <img src={poster.src} alt={poster.title} loading="lazy" decoding="async" />
                  </a>
                  <figcaption><span>{poster.title}</span>
                    <a href={poster.src} target="_blank" rel="noopener noreferrer" className="meet-view"
                      aria-label={`Open ${poster.title} (opens in a new tab)`}>View poster<ArrowIcon /></a>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
