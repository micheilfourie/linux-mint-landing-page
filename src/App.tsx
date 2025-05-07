import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  const [scrollPos, setScrollPos] = useState(0);

  const handleScrollToTop = () => {
    setScrollPos(0);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => setScrollPos(window.scrollY);
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Home scrollPos={scrollPos} handleScrollToTop={handleScrollToTop} />
        }
      />
    </Routes>
  );
}

export default App;
