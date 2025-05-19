import Logo from "../assets/logo-primary.svg";
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import DownloadDropdown from "./DownloadDropdown";
import ProjectDropdown from "./ProjectDropdown";
import AboutDropdown from "./AboutDropdown";
import LinksDropdown from "./LinksDropdown";
import { useState } from "react";
import useStore from "../useStore";

const Navbar = () => {
  const [navDropdownOpen, setNavDropdownOpen] = useState<string>("");

  const navOpen = useStore((state) => state.navOpen);
  const toggleNav = useStore((state) => state.toggleNav);

  const isWidthThresholdAchieved = useStore(
    (state) => state.isWidthThresholdAchieved,
  );

  return (
    <>
      {isWidthThresholdAchieved ? (
        <nav className="mx-auto flex h-[75px] max-w-[1200px] items-center justify-between px-10">
          <Link to={"/"}>
            <img src={Logo} alt="" className="w-[200px]" />
          </Link>

          <div className="flex items-center gap-8">
            <ul className="font-ubuntu flex h-full text-[15px] text-white">
              <Link to={"/"}>
                <li className="hover:text-altblack cursor-pointer px-4 py-7 transition-all duration-300 ease-in-out">
                  Home
                </li>
              </Link>

              <li
                onMouseEnter={() => setNavDropdownOpen("download")}
                onMouseLeave={() => setNavDropdownOpen("")}
                className="hover:text-altblack relative flex cursor-pointer items-center gap-1 px-4 py-7 transition-all duration-300 ease-in-out"
              >
                Download
                <FontAwesomeIcon icon={faChevronDown} className="text-[9px]" />
                <DownloadDropdown navDropdownOpen={navDropdownOpen} />
              </li>

              <li
                onMouseEnter={() => setNavDropdownOpen("project")}
                onMouseLeave={() => setNavDropdownOpen("")}
                className="hover:text-altblack relative flex cursor-pointer items-center gap-1 px-4 py-7 transition-all duration-300 ease-in-out"
              >
                Project
                <FontAwesomeIcon icon={faChevronDown} className="text-[9px]" />
                <ProjectDropdown navDropdownOpen={navDropdownOpen} />
              </li>

              <li
                onMouseEnter={() => setNavDropdownOpen("about")}
                onMouseLeave={() => setNavDropdownOpen("")}
                className="hover:text-altblack relative flex cursor-pointer items-center gap-1 px-4 py-7 transition-all duration-300 ease-in-out"
              >
                About
                <FontAwesomeIcon icon={faChevronDown} className="text-[9px]" />
                <AboutDropdown navDropdownOpen={navDropdownOpen} />
              </li>

              <li
                onMouseEnter={() => setNavDropdownOpen("links")}
                onMouseLeave={() => setNavDropdownOpen("")}
                className="hover:text-altblack relative flex cursor-pointer items-center gap-1 px-4 py-7 transition-all duration-300 ease-in-out"
              >
                Links
                <FontAwesomeIcon icon={faChevronDown} className="text-[9px]" />
                <LinksDropdown navDropdownOpen={navDropdownOpen} />
              </li>
            </ul>
            <Button buttonType="tertiary">Donate</Button>
          </div>
        </nav>
      ) : (
        <nav className="mx-auto flex h-[75px] max-w-[1200px] items-center justify-between pr-2 pl-6">
          <Link to={"/"}>
            <img src={Logo} alt="" className="w-[200px]" />
          </Link>

          <button
            onClick={toggleNav}
            className="flex cursor-pointer items-center justify-center p-4"
          >
            <FontAwesomeIcon icon={faBars} className="text-altwhite text-3xl" />
          </button>

          <div
            className={`bg-altwhite absolute top-[75px] right-0 w-full shadow-md ${navOpen ? "" : "scale-y-0"} translate-all origin-top duration-300 ease-in-out`}
          >
            <ul className="font-ubuntu text-altblack divide-altgray flex flex-col divide-y text-[15px]">
              {/* Add Mobile menu items */}
            </ul>
          </div>
        </nav>
      )}
    </>
  );
};

export default Navbar;
