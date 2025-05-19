import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Download from "./pages/Download";
import ScrollToTop from "./components/ScrollToTop";
import NewFeatures from "./pages/NewFeatures";
import RouteTitleSetter from "./components/RouteTitleSetter";
import ReleaseNotes from "./pages/ReleaseNotes";
import LMDE6 from "./pages/LMDE6";
import AllVersions from "./pages/AllVersions";
import store from "./useStore";

function App() {
  const handleScroll = store((state) => state.updateScroll);
  const handleWidth = store((state) => state.updateWidth);

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    handleWidth();
    window.addEventListener("resize", handleWidth);
    return () => window.removeEventListener("resize", handleWidth);
  }, [handleWidth]);

  return (
    <>
      <RouteTitleSetter />
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/download" element={<Download />} />
        <Route path="/new-features" element={<NewFeatures />} />
        <Route path="/release-notes" element={<ReleaseNotes />} />
        <Route path="/download-lmde" element={<LMDE6 />} />
        <Route path="/download-all" element={<AllVersions />} />
      </Routes>
    </>
  );
}

export default App;
