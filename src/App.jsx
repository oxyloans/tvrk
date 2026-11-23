import "./App.css";
import { lazy, Suspense, useEffect } from "react";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";

// Route-level code splitting & lazy loading
const CEOLandingPage = lazy(() => import("./CEOLandingPage"));
const OxyFoundationPage = lazy(() => import("./OxyFoundationPage"));
const BridgitalNationPage = lazy(() => import("./BridgitalNationPage"));
const CertificatesPage = lazy(() => import("./CertificatesPage"));
const ZoomMeetSection = lazy(() => import("./GoogleMeetSection"));
const OxyLinksPage = lazy(() => import("./OxyLinksPage"));
const HISFF2027Page = lazy(() => import("./HISFF2027Page"));

function PageLoader() {
  return (
    <div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#241b67] text-white"
      role="status"
      aria-live="polite"
    >
      <div className="relative flex items-center justify-center">
        <div className="h-12 w-12 animate-spin rounded-full border-3 border-white/20 border-t-[#ffd8b5]" />
        <span className="absolute text-[10px] font-extrabold text-[#ffd8b5]">✦</span>
      </div>
      <span className="mt-4 text-xs font-semibold uppercase tracking-widest text-[#ffdbb8]/85">
        Loading...
      </span>
      <span className="sr-only">Loading page content...</span>
    </div>
  );
}

const GA_MEASUREMENT_ID = "G-NJXNYGP1EZ";

/* -------------------------------------------------------
   Page titles for Google Analytics
------------------------------------------------------- */
const PAGE_TITLES = {
  "/": "Radhakrishna T | CEO & Co-Founder",
  "/oxy-foundation": "OXY Foundation | Radhakrishna T",
  "/bridgital-nation": "Bridgital Nation | Radhakrishna T",
  "/hisff-2027": "HISFF 2027 | Hyderabad International Short Film Festival",
};

/* -------------------------------------------------------
   Google Analytics Route Tracker
------------------------------------------------------- */
function GoogleAnalyticsTracker() {
  const location = useLocation();

  useEffect(() => {
    const pageTitle = PAGE_TITLES[location.pathname];

    // Don't track invalid URLs that are being redirected to "/"
    if (!pageTitle) return;

    // Update browser title
    document.title = pageTitle;

    // Send page view to GA4
    if (typeof window.gtag === "function") {
      window.gtag("event", "page_view", {
        page_title: pageTitle,
        page_location: window.location.href,
        send_to: GA_MEASUREMENT_ID,
      });
    }
  }, [location.pathname, location.search]);

  return null;
}

/* -------------------------------------------------------
   Global Scroll & Hash Navigator
------------------------------------------------------- */
function ScrollHandler() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const targetId = location.hash.replace("#", "");
      if (targetId === "about") {
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }

      const scrollToTarget = () => {
        const el = document.getElementById(targetId);
        if (el) {
          const headerOffset = 84;
          const targetY =
            el.getBoundingClientRect().top + window.scrollY - headerOffset;
          window.scrollTo({
            top: Math.max(0, targetY),
            behavior: "smooth",
          });
          return true;
        }
        return false;
      };

      // Try immediately, then retry in intervals for smooth async landing
      if (!scrollToTarget()) {
        const t1 = setTimeout(scrollToTarget, 100);
        const t2 = setTimeout(scrollToTarget, 260);
        const t3 = setTimeout(scrollToTarget, 520);
        const t4 = setTimeout(scrollToTarget, 900);
        return () => {
          clearTimeout(t1);
          clearTimeout(t2);
          clearTimeout(t3);
          clearTimeout(t4);
        };
      }
    } else {
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  }, [location.pathname, location.hash]);

  return null;
}

/* -------------------------------------------------------
   App
------------------------------------------------------- */
function App() {
  return (
    <BrowserRouter>
      {/* Tracks every React route change */}
      <GoogleAnalyticsTracker />
      {/* Handles page scrolls and hash targets seamlessly across routes */}
      <ScrollHandler />

      <Suspense fallback={<PageLoader />}>
        <Routes>
          {/* Main CEO Landing Page */}
          <Route path="/" element={<CEOLandingPage />} />

          {/* OXY Foundation */}
          <Route
            path="/oxy-foundation"
            element={<OxyFoundationPage />}
          />
          <Route path="/links" element={<OxyLinksPage />} />

          {/* Bridgital Nation */}
          <Route
            path="/bridgital-nation"
            element={<BridgitalNationPage />}
          />
          <Route path="/certificates" element={<CertificatesPage />} />
          <Route path="/zoommeet" element={<ZoomMeetSection />} />
          <Route path="/hisff-2027" element={<HISFF2027Page />} />
          <Route path="/hisff" element={<HISFF2027Page />} />

          {/* Invalid URL → Home */}
          <Route
            path="*"
            element={<Navigate to="/" replace />}
          />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;