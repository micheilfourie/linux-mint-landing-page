import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const RouteTitleSetter = () => {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;

    let title = "My App";

    switch (path) {
      case "/":
        title = "Home - Linux Mint";
        break;
      case "/download":
        title = "Download Linux Mint 22.1";
        break;
      case "/new-features":
        title = "New Features in Linux Mint 22.1";
        break;
      case "/release-notes":
        title = "Linux Mint 22.1 Release Notes";
        break;
      default:
        title = "Linux Mint";
    }

    document.title = title;
  }, [location]);

  return null;
};

export default RouteTitleSetter;
