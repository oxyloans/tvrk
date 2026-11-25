import "./App.css";
import { Component, lazy, Suspense, useEffect } from "react";
import { BrowserRouter, Navigate, Route, Routes, useLocation } from "react-router-dom";
const CEOLandingPage = lazy(() => import("./CEOLandingPage"));
const OxyFoundationPage = lazy(() => import("./OxyFoundationPage"));
const BridgitalNationPage = lazy(() => import("./BridgitalNationPage"));
const CertificatesPage = lazy(() => import("./CertificatesPage"));
const HISFF2027Page = lazy(() => import("./HISFF2027Page"));
const ZoomMeetSection = lazy(() => import("./GoogleMeetSection"));
const OxyLinksPage = lazy(() => import("./OxyLinksPage"));
const HiringPage = lazy(() => import("./wearehiring"));

function PageLoader() {
    return (<div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#241b67] text-white" role="status" aria-live="polite">
      <div className="relative flex items-center justify-center">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-white/20 border-t-[#ffd8b5]"/>
        <span className="absolute text-[10px] font-extrabold text-[#ffd8b5]">✦</span>
      </div>
      <span className="mt-4 text-xs font-semibold uppercase tracking-widest text-[#ffdbb8]">Loading...</span>
    </div>);
}
class PageErrorBoundary extends Component {
    state = { error: null };
    static getDerivedStateFromError(error) { return { error }; }
    componentDidCatch(error) { console.error("Page rendering failed:", error); }
    render() {
        if (!this.state.error)
            return this.props.children;
        return (<main className="flex min-h-screen items-center justify-center bg-slate-50 px-4 py-12 text-slate-900">
        <div role="alert" className="w-full max-w-md rounded-2xl border border-violet-100 bg-white p-6 text-center shadow-lg sm:p-8">
          <h1 className="text-xl font-bold">Unable to load this page</h1>
          <p className="mt-3 text-sm text-slate-600">Please reload the page or return to the home page.</p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <button type="button" onClick={() => window.location.reload()} className="rounded-xl bg-[#241b67] px-5 py-3 font-bold text-white">Reload page</button>
            <a href="/" className="rounded-xl border border-violet-200 px-5 py-3 font-bold text-[#241b67]">Go home</a>
          </div>
        </div>
      </main>);
    }
}
const GA_MEASUREMENT_ID = "G-NJXNYGP1EZ";
const PAGE_TITLES = {
    "/": "Radhakrishna T | CEO & Co-Founder",
    "/hiring": "We Are Hiring | ASKOXY.AI",
    "/oxy-foundation": "OXY Foundation | Radhakrishna T",
    "/bridgital-nation": "Bridgital Nation | Radhakrishna T",
    "/certificates": "Certificates | Radhakrishna T",
    "/links": "OXY Links & Jobs",
    "/zoommeet": "Daily Zoom Meeting",
};
function GoogleAnalyticsTracker() {
    const { pathname, search } = useLocation();
    useEffect(() => {
        const title = PAGE_TITLES[pathname.replace(/\/$/, "") || "/"];
        if (!title)
            return;
        document.title = title;
        const analyticsWindow = window;
        if (typeof analyticsWindow.gtag === "function") {
            try {
                analyticsWindow.gtag("event", "page_view", { page_title: title, page_location: window.location.href, send_to: GA_MEASUREMENT_ID });
            }
            catch (error) {
                console.warn("Analytics page view failed:", error);
            }
        }
    }, [pathname, search]);
    return null;
}
function ScrollHandler() {
    const { pathname, hash } = useLocation();
    useEffect(() => {
        const behavior = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth";
        if (!hash || (pathname === "/" && hash === "#about")) {
            window.scrollTo({ top: 0, behavior: hash ? behavior : "auto" });
            return;
        }
        let id = hash.slice(1);
        try {
            id = decodeURIComponent(id);
        }
        catch { /* Use raw ID. */ }
        const scrollToTarget = () => {
            const el = document.getElementById(id);
            if (!el)
                return false;
            const offset = document.querySelector(".tvrk-header-inner")?.getBoundingClientRect().height ?? 84;
            window.scrollTo({ top: Math.max(0, el.getBoundingClientRect().top + window.scrollY - offset), behavior });
            return true;
        };
        if (scrollToTarget())
            return;
        const observer = new MutationObserver(() => { if (scrollToTarget())
            observer.disconnect(); });
        observer.observe(document.body, { childList: true, subtree: true });
        const timeout = window.setTimeout(() => observer.disconnect(), 10000);
        return () => { observer.disconnect(); window.clearTimeout(timeout); };
    }, [pathname, hash]);
    return null;
}
function AppRoutes() {
    const location = useLocation();
    return (<PageErrorBoundary key={location.pathname}>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<CEOLandingPage />}/>
          <Route path="/oxy-foundation" element={<OxyFoundationPage />}/>
          <Route path="/links" element={<OxyLinksPage />}/>
          <Route path="/bridgital-nation" element={<BridgitalNationPage />}/>
          <Route path="/certificates" element={<CertificatesPage />}/>
          <Route path="/zoommeet" element={<ZoomMeetSection />}/>
          <Route path="/hisff-2027" element={<HISFF2027Page />} />
          <Route path="/hisff" element={<HISFF2027Page />} />
          <Route path="/wearehiring" element={<HiringPage />} />
          <Route path="/hiring" element={<HiringPage />} />
          <Route path="*" element={<Navigate to="/" replace/>}/>
        </Routes>
      </Suspense>
    </PageErrorBoundary>);
}
export default function App() {
    return (<BrowserRouter>
      <GoogleAnalyticsTracker />
      <ScrollHandler />
      <AppRoutes />
    </BrowserRouter>);
}
