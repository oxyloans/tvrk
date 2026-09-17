import "./App.css";
import { useEffect } from "react";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";

import CEOLandingPage from "./CEOLandingPage";
import OxyFoundationPage from "./OxyFoundationPage";
import BridgitalNationPage from "./BridgitalNationPage";

const GA_MEASUREMENT_ID = "G-NJXNYGP1EZ";

/* -------------------------------------------------------
   Page titles for Google Analytics
------------------------------------------------------- */
const PAGE_TITLES = {
  "/": "Radhakrishna T | CEO & Co-Founder",
  "/oxy-foundation": "OXY Foundation | Radhakrishna T",
  "/bridgital-nation": "Bridgital Nation | Radhakrishna T",
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
   App
------------------------------------------------------- */
function App() {
  return (
    <BrowserRouter>
      {/* Tracks every React route change */}
      <GoogleAnalyticsTracker />

      <Routes>
        {/* Main CEO Landing Page */}
        <Route path="/" element={<CEOLandingPage />} />

        {/* OXY Foundation */}
        <Route
          path="/oxy-foundation"
          element={<OxyFoundationPage />}
        />

        {/* Bridgital Nation */}
        <Route
          path="/bridgital-nation"
          element={<BridgitalNationPage />}
        />

        {/* Invalid URL → Home */}
        <Route
          path="*"
          element={<Navigate to="/" replace />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;