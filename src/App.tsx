import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Download from "./pages/Download";
import ScrollToTop from "./components/ScrollToTop";
import NewFeatures from "./pages/NewFeatures";
import RouteTitleSetter from "./components/RouteTitleSetter";
import ReleaseNotes from "./pages/ReleaseNotes";

function App() {
  const [isThresholdAchieved, setIsthresholdAchieved] = useState(false);
  const scrollThreshold = 300;

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      if (!isThresholdAchieved && currentY > scrollThreshold) {
        setIsthresholdAchieved(true);
      } else if (isThresholdAchieved && currentY <= scrollThreshold) {
        setIsthresholdAchieved(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isThresholdAchieved]);

  return (
    <>
      <RouteTitleSetter />
      <ScrollToTop />

      <Routes>
        <Route
          path="/"
          element={
            <Home
              isThresholdAchieved={isThresholdAchieved}
              handleScrollToTop={handleScrollToTop}
            />
          }
        />
        <Route
          path="/download"
          element={
            <Download
              isThresholdAchieved={isThresholdAchieved}
              handleScrollToTop={handleScrollToTop}
            />
          }
        />
        <Route
          path="/new-features"
          element={
            <NewFeatures
              isThresholdAchieved={isThresholdAchieved}
              handleScrollToTop={handleScrollToTop}
            />
          }
        />
        <Route
          path="/release-notes"
          element={
            <ReleaseNotes
              isThresholdAchieved={isThresholdAchieved}
              handleScrollToTop={handleScrollToTop}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
