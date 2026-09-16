import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import CEOLandingPage from "./CEOLandingPage";
import OxyFoundationPage from "./OxyFoundationPage";
import BridgitalNationPage from "./BridgitalNationPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CEOLandingPage />} />
        <Route path="/oxy-foundation" element={<OxyFoundationPage />} />
        <Route path="/bridgital-nation" element={<BridgitalNationPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
