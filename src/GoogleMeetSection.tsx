import React from "react";
import { SiZoom } from "react-icons/si";
import InitiativeHeader from "./InitiativeHeader";

// Change only these constants whenever your Zoom details or poster change.
export const ZOOM_MEET_URL =
  "https://us06web.zoom.us/j/83426047733?pwd=BKaIwjmah7iidb2s9F1bPK8uv9tMDg.1";
export const ZOOM_MEET_IMAGE_URL = "https://i.ibb.co/xq7jxKQm/zoommeetaa.png"; // Replace later
export const MEETING_TIME = "08:00 PM IST";

const TOPICS = [
  "Loans – Personal & Business",
  "Study Abroad",
  "Gold & Silver",
  "Real Estate",
  "Jobs & Career Opportunities",
];

function ArrowIcon({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export default function ZoomMeetSection() {
  return (
    <div className="zoom-page">
      <style>{`
        .zoom-page { color: #fff; min-height: 100vh; background: #211b67; }
        .zoom-page *, .zoom-page *::before, .zoom-page *::after { box-sizing: border-box; }
        .zoom-page .zoom-main {
          min-height: 100vh;
          background: radial-gradient(ellipse at 90% 8%,rgba(169,100,160,.28),transparent 48%),
            linear-gradient(135deg,#211b67,#35247a 60%,#503077);
        }
        .zoom-page .zoom-container { width: min(100%,1280px); margin-inline: auto; padding-inline: 24px; }
        .zoom-page .zoom-hero {
          display: grid; grid-template-columns: minmax(0,1.08fr) minmax(0,.92fr);
          align-items: center; gap: 44px; padding-top: 120px; padding-bottom: 56px;
        }
        .zoom-page .zoom-content, .zoom-page .zoom-art { min-width: 0; }
        .zoom-page .zoom-eyebrow { margin: 0; color: #e4c5ae; font-size: 11px;
          font-weight: 700; letter-spacing: .16em; text-transform: uppercase; }
        .zoom-page .zoom-title { margin: 12px 0 0; font-size: clamp(32px,3.4vw,48px);
          line-height: 1.12; letter-spacing: -.035em; font-weight: 800; }
        .zoom-page .zoom-title span { display: block; color: #f5d6bc; }
        .zoom-page .zoom-intro { margin: 12px 0 0; color: #e3ddf0; font-size: 16px; line-height: 1.6; }
        .zoom-page .zoom-actions { display: flex; flex-wrap: wrap; align-items: center; gap: 12px; margin-top: 22px; }
        .zoom-page .zoom-time { display: inline-flex; align-items: center; flex-wrap: wrap;
          gap: 10px; border: 1px solid rgba(255,255,255,.18);
          border-radius: 12px; background: rgba(255,255,255,.07); padding: 10px 14px; min-height: 48px; }
        .zoom-page .zoom-time svg { width: 21px; height: 21px; flex-shrink: 0; color: #9fc5ff; }
        .zoom-page .zoom-time strong { font-size: 15px; font-weight: 800; }
        .zoom-page .zoom-time small { color: #ded6ee; font-size: 11px; }
        .zoom-page .zoom-trust { margin: 20px 0 0; display: flex; align-items: center;
          gap: 9px; color: #e7d1bd; font-size: 12px; font-weight: 700; }
        .zoom-page .zoom-trust i { width: 6px; height: 6px; border-radius: 50%; background: #95dfb8; }
        .zoom-page .zoom-returns { margin-top: 14px; display: grid; grid-template-columns: repeat(2,minmax(0,1fr)); gap: 12px; }
        .zoom-page .zoom-return { padding: 13px 15px; border: 1px solid rgba(245,214,188,.2);
          border-radius: 14px; background: rgba(245,214,188,.06); }
        .zoom-page .zoom-return p { margin: 0; color: #e4dbee; font-size: 11px; line-height: 1.5; }
        .zoom-page .zoom-return strong { display: block; margin-top: 4px; color: #f5d6bc;
          font-size: 25px; line-height: 1.15; letter-spacing: -.03em; }
        .zoom-page .zoom-return small { display: block; margin-top: 4px; font-size: 11px; color: #e4dbee; }
        .zoom-page .zoom-disclaimer { margin: 8px 0 0; font-size: 10px; color: #d3c7e5; line-height: 1.6; }
        .zoom-page .zoom-topics { list-style: none; margin: 18px 0 0; padding: 0;
          display: grid; grid-template-columns: repeat(2,minmax(0,1fr)); gap: 8px 14px; }
        .zoom-page .zoom-topics li { display: flex; align-items: flex-start; gap: 8px;
          font-size: 12px; line-height: 1.6; color: #e8e2f2; min-width: 0; }
        .zoom-page .zoom-topics li::before { content: '✓'; color: #f5d6bc; flex-shrink: 0; }
        .zoom-page .zoom-speaker { margin-top: 20px; padding-top: 15px; border-top: 1px solid rgba(255,255,255,.15);
          display: flex; align-items: center; gap: 12px; }
        .zoom-page .zoom-avatar { display: grid; place-items: center; width: 42px; height: 42px;
          flex-shrink: 0; border: 1px solid rgba(245,214,188,.3); border-radius: 50%;
          color: #f5d6bc; background: rgba(245,214,188,.08); font-size: 12px; font-weight: 800; }
        .zoom-page .zoom-speaker p { margin: 0; font-size: 13px; font-weight: 700; }
        .zoom-page .zoom-speaker small { display: block; margin-top: 3px; color: #d3c7e5; font-size: 11px; }
        .zoom-page .zoom-join { display: inline-flex; align-items: center;
          justify-content: center; gap: 10px; min-height: 48px; border-radius: 12px;
          background: #e9f0ff; padding: 12px 18px; color: #183d8e; text-decoration: none;
          font-size: 14px; font-weight: 800; transition: background .2s,box-shadow .2s; }
        .zoom-page .zoom-join svg { height: 19px; width: 19px; flex-shrink: 0; }
        .zoom-page .zoom-share { margin: 16px 0 0; color: #cfc5e0; font-size: 11px; line-height: 1.6; }
        .zoom-page .zoom-art { width: 100%; max-width: 480px; justify-self: center; }
        .zoom-page .zoom-art img { display: block; margin-inline: auto; width: auto; height: auto;
          max-width: 100%; max-height: 620px; object-fit: contain;
          border-radius: 18px; box-shadow: 0 24px 56px rgba(12,7,42,.25); }
        .zoom-page .zoom-join:focus-visible { outline: 2px solid white; outline-offset: 4px; }
        @media (hover:hover) { .zoom-page .zoom-join:hover { background: white; box-shadow: 0 8px 24px rgba(0,0,0,.2); } }
        @media (max-width:767px) {
          .zoom-page .zoom-container { padding-inline: 20px; }
          .zoom-page .zoom-hero { grid-template-columns: minmax(0,1fr); padding-top: 104px;
            padding-bottom: 36px; gap: 26px; }
          .zoom-page .zoom-content { width: 100%; max-width: 560px; justify-self: center; }
          .zoom-page .zoom-title { font-size: clamp(30px,7vw,38px); }
          .zoom-page .zoom-join { width: 100%; }
          .zoom-page .zoom-art img { width: 100%; max-height: none; }
          .zoom-page .zoom-art { max-width: 420px; }
        }
        @media (max-width:359px) {
          .zoom-page .zoom-container { padding-inline: 16px; }
          .zoom-page .zoom-topics { grid-template-columns: minmax(0,1fr); }
          .zoom-page .zoom-return { padding: 12px; }
        }
        @media (prefers-reduced-motion:reduce) { .zoom-page .zoom-join { transition: none; } }
      `}</style>
      <InitiativeHeader active="home" />
      <main className="zoom-main">
        <section id="zoom-meet" aria-labelledby="zoom-meet-title" className="zoom-container zoom-hero">
          <div className="zoom-content">
            <p className="zoom-eyebrow">Every journey, one partner</p>
            <h1 id="zoom-meet-title" className="zoom-title">Every Day<span>ZOOM MEET</span></h1>
            <p className="zoom-intro">Live Q&amp;A with Our CEO</p>
            <div className="zoom-actions">
              <div className="zoom-time">
                <SiZoom aria-hidden="true" />
                <strong>{MEETING_TIME}</strong>
                <small>Every day</small>
              </div>
              <a href={ZOOM_MEET_URL} target="_blank" rel="noopener noreferrer" className="zoom-join"
                aria-label="Join the daily Zoom Meet at 8:00 PM IST (opens in a new tab)">
                <SiZoom aria-hidden="true" /><span>Join Zoom Meet</span><ArrowIcon className="h-4 w-4" />
              </a>
            </div>
            <p className="zoom-trust"><i aria-hidden="true" />RBI-Registered NBFC-P2P Platform</p>
            <div className="zoom-returns">
              <div className="zoom-return"><p>Lend &amp; Earn Up to</p><strong>1.75%</strong><small>Monthly ROI*</small></div>
              <div className="zoom-return"><p>Lend &amp; Earn Up to</p><strong>24%</strong><small>Yearly ROI*</small></div>
            </div>
            <p className="zoom-disclaimer">*Illustrative advertised returns, not guaranteed. P2P lending involves risk.</p>
            <ul className="zoom-topics">{TOPICS.map(topic => <li key={topic}>{topic}</li>)}</ul>
            <div className="zoom-speaker">
              <span className="zoom-avatar" aria-hidden="true">RK</span>
              <div><p>Speaker: Radhakrishna T</p><small>CEO &amp; Co-Founder</small></div>
            </div>
            <p className="zoom-share">Share with your friends &amp; family</p>
          </div>
          {/* Exactly one poster; replace ZOOM_MEET_IMAGE_URL above when ready. */}
          <div className="zoom-art">
            <img src={ZOOM_MEET_IMAGE_URL} alt="Daily Zoom Meet poster" decoding="async" fetchPriority="high" />
          </div>
        </section>
      </main>
    </div>
  );
}
