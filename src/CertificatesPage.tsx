import React, { useEffect, useState } from "react";
import InitiativeHeader from "./InitiativeHeader";

type Certificate = {
  id: string;
  title: string;
  category: string;
  driveUrl: string;
  previewUrl: string;
};

const CERTIFICATES: Certificate[] = [
  {
    id: "oxyideas-membership-p1340",
    title: "OXYIDEAS Platinum Membership Certificate – P-1340",
    category: "Membership Certificate",
    driveUrl:
      "https://drive.google.com/file/d/1JXREXS8gMcjc292mMj043yDRG1ohzya8/view?usp=drive_link",
    previewUrl:
      "https://drive.google.com/file/d/1JXREXS8gMcjc292mMj043yDRG1ohzya8/preview",
  },
  {
    id: "radhakrishna-professional-registration",
    title: "Radhakrishna Professional Registration Certificate",
    category: "Professional Registration",
    driveUrl:
      "https://drive.google.com/file/d/1LP--EJ4DnQyy7ODpOfQZUwT0k0nRDIrp/view?usp=drive_link",
    previewUrl:
      "https://drive.google.com/file/d/1LP--EJ4DnQyy7ODpOfQZUwT0k0nRDIrp/preview",
  },
  {
    id: "gold-appraisal-certificate",
    title: "Gold Appraisal Certificate",
    category: "MSME Technology Development Centre, Chennai",
    driveUrl:
      "https://drive.google.com/file/d/1MoJL5NEBqh6YTzQaoHz_pS2O2uwkegMb/view?usp=drive_link",
    previewUrl:
      "https://drive.google.com/file/d/1MoJL5NEBqh6YTzQaoHz_pS2O2uwkegMb/preview",
  },
  {
    id: "msme-udyam-registration",
    title: "MSME Udyam Registration Certificate",
    category: "MSME Registration",
    driveUrl:
      "https://drive.google.com/file/d/1QaXD2586Y-ajTU2vEdou29XApUpGzUn_/view?usp=drive_link",
    previewUrl:
      "https://drive.google.com/file/d/1QaXD2586Y-ajTU2vEdou29XApUpGzUn_/preview",
  },
  {
    id: "oxyideas-hallmark-registration",
    title: "OXYIDEAS Hallmark Registration Certificate",
    category: "BIS Hallmark Registration / License",
    driveUrl:
      "https://drive.google.com/file/d/1Wp-7C2Q7iKTlW1uFNbC8hurVdron_49z/view?usp=drive_link",
    previewUrl:
      "https://drive.google.com/file/d/1Wp-7C2Q7iKTlW1uFNbC8hurVdron_49z/preview",
  },
  {
    id: "trade-license-provisional",
    title: "Trade License – Provisional Certificate",
    category: "Trade License",
    driveUrl:
      "https://drive.google.com/file/d/1X34Oa6_QMNK1brgVHgEV3GUlxnDiDuBK/view?usp=drive_link",
    previewUrl:
      "https://drive.google.com/file/d/1X34Oa6_QMNK1brgVHgEV3GUlxnDiDuBK/preview",
  },
];

function OpenIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className={className}
      aria-hidden="true"
    >
      <path d="M7 17 17 7" />
      <path d="M7 7h10v10" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  );
}

export default function CertificatesPage() {
  const [selected, setSelected] = useState<Certificate | null>(null);

  useEffect(() => {
    if (!selected) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelected(null);
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [selected]);

  return (
    <div className="min-h-screen bg-[#f7f9fc] text-[#172033] font-sans">
      <InitiativeHeader active="certificates" />

      <main>
        {/* Compact intro — intentionally no oversized hero spacing */}
        <section className="border-b border-[#e6ebf2] bg-white">
          <div className="mx-auto w-full max-w-[1440px] px-4 py-6 sm:px-6 sm:py-8 lg:px-10 lg:py-9 xl:px-12">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between lg:gap-10">
              <div className="min-w-0">
                <div className="inline-flex items-center gap-2 rounded-full border border-[#dce8f5] bg-[#f7fbff] px-3 py-1.5">
                  <span className="h-2 w-2 rounded-full bg-[#51B85B]" />
                  <span className="text-[10px] font-black uppercase tracking-[0.17em] text-[#2F5FAA] sm:text-[11px]">
                    Credentials & Licenses
                  </span>
                </div>

                <h1 className="font-display mt-3 text-[2rem] font-extrabold leading-[1.05] tracking-[-0.045em] text-[#101828] sm:text-[2.5rem] lg:text-[3rem]">
                  Radha Certificates
                </h1>
              </div>
            </div>
          </div>
        </section>

        {/* Certificates */}
        <section className="px-4 py-6 sm:px-6 sm:py-8 lg:px-10 lg:py-10 xl:px-12">
          <div className="mx-auto w-full max-w-[1440px]">
            <div className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2 xl:grid-cols-3">
              {CERTIFICATES.map((certificate) => (
                <article
                  key={certificate.id}
                  className="group overflow-hidden rounded-[18px] border border-[#dde5ef] bg-white shadow-[0_8px_28px_rgba(16,24,40,.055)] transition duration-200 hover:-translate-y-0.5 hover:border-[#cfd9e7] hover:shadow-[0_14px_34px_rgba(16,24,40,.09)]"
                >
                  <button
                    type="button"
                    onClick={() => setSelected(certificate)}
                    className="block w-full text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#2F5FAA]"
                    aria-label={`View ${certificate.title}`}
                  >
                    <div className="relative aspect-[16/10] overflow-hidden bg-[#e9edf2]">
                      <iframe
                        src={certificate.previewUrl}
                        title={`${certificate.title} preview`}
                        className="pointer-events-none h-full w-full border-0 bg-white"
                        loading="lazy"
                        tabIndex={-1}
                      />

                      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/30 to-transparent opacity-0 transition group-hover:opacity-100" />

                      <span className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 rounded-full border border-white/70 bg-white/95 px-3 py-1.5 text-[10px] font-extrabold text-[#2F5FAA] shadow-sm backdrop-blur">
                        View Certificate
                        <OpenIcon className="h-3.5 w-3.5" />
                      </span>
                    </div>

                    <div className="p-4 sm:p-5">
                      <p className="text-[9px] font-extrabold uppercase tracking-[0.14em] text-[#51B85B] sm:text-[10px]">
                        {certificate.category}
                      </p>

                      <h2 className="font-display mt-2 line-clamp-2 text-[15px] font-bold leading-[1.45] tracking-[-0.015em] text-[#172033] sm:text-[17px]">
                        {certificate.title}
                      </h2>
                    </div>
                  </button>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Preview Modal */}
      {selected && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#07101f]/80 p-2 backdrop-blur-[4px] sm:p-5"
          role="dialog"
          aria-modal="true"
          aria-label={`${selected.title} preview`}
        >
          <button
            type="button"
            className="absolute inset-0 cursor-default"
            aria-label="Close certificate preview"
            onClick={() => setSelected(null)}
          />

          <div
            className="relative z-10 flex h-[95dvh] w-full max-w-6xl flex-col overflow-hidden rounded-[14px] bg-white shadow-[0_30px_100px_rgba(0,0,0,.45)] sm:h-[92dvh] sm:rounded-[22px]"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex min-h-[58px] shrink-0 items-center justify-between gap-3 border-b border-[#e5e7eb] bg-white px-3 sm:min-h-[66px] sm:px-5">
              <div className="min-w-0">
                <p className="truncate text-[9px] font-black uppercase tracking-[0.14em] text-[#51B85B] sm:text-[10px]">
                  {selected.category}
                </p>
                <h2 className="font-display mt-0.5 truncate text-[13px] font-bold text-[#172033] sm:text-[16px]">
                  {selected.title}
                </h2>
              </div>

              <div className="flex shrink-0 items-center gap-2">
                <a
                  href={selected.driveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden min-h-[38px] items-center gap-2 rounded-full bg-[#edf4ff] px-4 text-[11px] font-extrabold text-[#2F5FAA] transition hover:bg-[#dfeafb] sm:inline-flex"
                >
                  Open in Drive
                  <OpenIcon />
                </a>

                <button
                  type="button"
                  onClick={() => setSelected(null)}
                  className="grid h-10 w-10 place-items-center rounded-full bg-[#f2f4f7] text-[#172033] transition hover:bg-[#172033] hover:text-white"
                  aria-label="Close certificate preview"
                >
                  <CloseIcon />
                </button>
              </div>
            </div>

            <div className="min-h-0 flex-1 bg-[#e9edf2] p-1 sm:p-2.5">
              <iframe
                src={selected.previewUrl}
                title={`${selected.title} document preview`}
                className="h-full w-full rounded-[9px] border-0 bg-white sm:rounded-[12px]"
                allow="autoplay"
              />
            </div>

            <div className="flex shrink-0 items-center justify-between gap-3 border-t border-[#e5e7eb] bg-white px-3 py-2.5 sm:hidden">
              <span className="truncate text-[10px] font-semibold text-[#667085]">
                Google Drive preview
              </span>

              <a
                href={selected.driveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[36px] items-center gap-1.5 rounded-full bg-[#2F5FAA] px-3 text-[10px] font-extrabold text-white"
              >
                Open Full
                <OpenIcon className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
