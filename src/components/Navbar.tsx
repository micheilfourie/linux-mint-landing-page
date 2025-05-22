import Logo from "../assets/logo-primary.svg";
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faBars,
  faIgloo,
  faBlog,
  faComments,
  faComment,
  faUsers,
  faHashtag,
  faPodcast,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import DownloadDropdown from "./DownloadDropdown";
import ProjectDropdown from "./ProjectDropdown";
import AboutDropdown from "./AboutDropdown";
import LinksDropdown from "./LinksDropdown";
import { useState } from "react";
import useStore from "../useStore";
import {
  faDiscord,
  faFacebook,
  faGithub,
  faMastodon,
  faReddit,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Navbar = () => {
  const [navDropdownOpen, setNavDropdownOpen] = useState<string>("");

  const navOpen = useStore((state) => state.navOpen);
  const toggleNav = useStore((state) => state.toggleNav);

  const handleDropdownToggle = (dropdown: string) => {
    if (dropdown === navDropdownOpen) {
      setNavDropdownOpen("");
    } else {
      setNavDropdownOpen(dropdown);
    }
  };

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
            className={`bg-altwhite absolute top-[75px] right-0 max-h-[400px] w-full overflow-y-auto shadow-md ${navOpen ? "" : "scale-y-0"} translate-all origin-top duration-300 ease-in-out`}
          >
            <ul className="font-ubuntu text-altblack divide-altgray flex flex-col divide-y text-[15px]">
              <Link to={"/"}>
                <li className="flex cursor-pointer items-center justify-between gap-4 px-5 py-3 transition-all duration-300 ease-in-out">
                  Home
                </li>
              </Link>

              <li
                onClick={() => handleDropdownToggle("download")}
                className="flex cursor-pointer flex-col gap-4 px-5 py-3 transition-all duration-300 ease-in-out"
              >
                <div className="flex items-center justify-between">
                  Download
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    className="text-[9px]"
                  />
                </div>

                <div
                  className={`${navDropdownOpen === "download" ? "" : "hidden"}`}
                >
                  <div className="text-altblack flex flex-col gap-10 p-6">
                    <div className="flex flex-col gap-4">
                      <h6 className="font-poppins font-[500]">
                        Latest Version
                      </h6>
                      <ul className="font-ubuntu text-[15px] font-light">
                        <li className="nowrap hover:text-primary-accent flex gap-4 transition-all duration-300 ease-in-out">
                          <Link to={"/download"}>Linux Mint 22.1</Link>
                        </li>
                      </ul>
                    </div>

                    <div className="flex flex-col gap-4">
                      <h6 className="font-poppins font-[500]">
                        Other Versions
                      </h6>
                      <ul className="font-ubuntu flex flex-col gap-2 text-[15px] font-light">
                        <li className="hover:text-primary-accent cursor-pointer transition-all duration-300 ease-in-out">
                          <Link to={"/download-lmde"}>LMDE 6</Link>
                        </li>
                        <li className="hover:text-primary-accent cursor-pointer transition-all duration-300 ease-in-out">
                          <Link to={"/download-all"}>All Versions</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>

              <li
                onClick={() => handleDropdownToggle("project")}
                className="flex cursor-pointer flex-col gap-4 p-3 px-5 transition-all duration-300 ease-in-out"
              >
                <div className="flex items-center justify-between">
                  Project
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    className="text-[9px]"
                  />
                </div>

                <div
                  className={`${navDropdownOpen === "project" ? "" : "hidden"}`}
                >
                  <div className="text-altblack flex flex-col gap-10 p-6">
                    <div className="flex flex-col gap-4">
                      <h6 className="font-poppins font-[500]">Funding</h6>
                      <ul className="font-ubuntu flex flex-col gap-2 text-[15px] font-light">
                        <li className="hover:text-primary-accent cursor-pointer transition-all duration-300 ease-in-out">
                          Donors
                        </li>
                        <li className="hover:text-primary-accent cursor-pointer transition-all duration-300 ease-in-out">
                          Sponsors
                        </li>
                        <li className="hover:text-primary-accent cursor-pointer transition-all duration-300 ease-in-out">
                          Partners
                        </li>
                        <li className="hover:text-primary-accent cursor-pointer transition-all duration-300 ease-in-out">
                          Store
                        </li>
                      </ul>
                    </div>

                    <div className="flex flex-col gap-4">
                      <h6 className="font-poppins font-[500]">Contributing</h6>
                      <ul className="font-ubuntu flex flex-col gap-2 text-[15px] font-light">
                        <li className="hover:text-primary-accent cursor-pointer transition-all duration-300 ease-in-out">
                          Get Involved
                        </li>
                        <li className="hover:text-primary-accent cursor-pointer transition-all duration-300 ease-in-out">
                          Mirrors
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>

              <li
                onClick={() => handleDropdownToggle("about")}
                className="flex cursor-pointer flex-col gap-4 px-5 py-3 transition-all duration-300 ease-in-out"
              >
                <div className="flex items-center justify-between">
                  About
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    className="text-[9px]"
                  />
                </div>

                <div
                  className={`${navDropdownOpen === "about" ? "" : "hidden"}`}
                >
                  <div className="text-altblack flex p-6">
                    <ul className="font-ubuntu flex flex-col gap-2 text-[15px] font-light">
                      <li className="hover:text-primary-accent cursor-pointer transition-all duration-300 ease-in-out">
                        About Linux Mint
                      </li>
                      <li className="hover:text-primary-accent cursor-pointer transition-all duration-300 ease-in-out">
                        FAQ
                      </li>
                      <li className="hover:text-primary-accent cursor-pointer transition-all duration-300 ease-in-out">
                        Documentation
                      </li>
                      <li className="hover:text-primary-accent cursor-pointer transition-all duration-300 ease-in-out">
                        Screenshots
                      </li>
                      <li className="hover:text-primary-accent cursor-pointer transition-all duration-300 ease-in-out">
                        Privacy & Cookies
                      </li>
                      <li className="hover:text-primary-accent cursor-pointer transition-all duration-300 ease-in-out">
                        Team
                      </li>
                      <li className="hover:text-primary-accent cursor-pointer transition-all duration-300 ease-in-out">
                        Contact Us
                      </li>
                    </ul>
                  </div>
                </div>
              </li>

              <li
                onClick={() => handleDropdownToggle("links")}
                className="flex cursor-pointer flex-col gap-4 px-5 py-3 transition-all duration-300 ease-in-out"
              >
                <div className="flex items-center justify-between">
                  Links
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    className="text-[9px]"
                  />
                </div>

                <div
                  className={`${navDropdownOpen === "links" ? "" : "hidden"}`}
                >
                  <div className="text-altblack flex flex-col gap-10 p-6">
                    <div className="flex flex-col gap-4">
                      <h6 className="font-poppins font-[500]">Official</h6>
                      <ul className="font-ubuntu nowrap flex flex-col gap-2 text-[15px] font-light">
                        <li className="nowrap flex gap-4">
                          <Link to={"/"}>
                            <span className="hover:text-primary-accent cursor-pointer transition-all duration-300 ease-in-out">
                              <FontAwesomeIcon icon={faIgloo} /> Website
                            </span>{" "}
                          </Link>
                        </li>
                        <li className="hover:text-primary-accent cursor-pointer transition-all duration-300 ease-in-out">
                          <a href="https://blog.linuxmint.com/">
                            <FontAwesomeIcon icon={faBlog} /> Blog
                          </a>
                        </li>
                        <li className="hover:text-primary-accent cursor-pointer transition-all duration-300 ease-in-out">
                          <a href="https://forums.linuxmint.com/">
                            <FontAwesomeIcon icon={faComments} /> Forums
                          </a>
                        </li>
                        <li className="hover:text-primary-accent cursor-pointer transition-all duration-300 ease-in-out">
                          <a href="https://app.element.io/#/room/#linuxmint-space:matrix.org">
                            <FontAwesomeIcon icon={faComment} /> Chat Rooms
                          </a>
                        </li>
                        <li className="hover:text-primary-accent cursor-pointer transition-all duration-300 ease-in-out">
                          <a href="https://community.linuxmint.com/">
                            <FontAwesomeIcon icon={faUsers} /> Community Website
                          </a>
                        </li>
                      </ul>
                    </div>

                    <div className="flex flex-col gap-4">
                      <h6 className="font-poppins font-[500]">Social</h6>
                      <ul className="font-ubuntu nowrap flex flex-col gap-2 text-[15px] font-light">
                        <li className="hover:text-primary-accent cursor-pointer transition-all duration-300 ease-in-out">
                          <a href="https://github.com/linuxmint">
                            <FontAwesomeIcon icon={faGithub} /> Github
                          </a>
                        </li>
                        <li className="hover:text-primary-accent cursor-pointer transition-all duration-300 ease-in-out">
                          <a href="https://www.facebook.com/people/Linux-Mint/100057180531327">
                            <FontAwesomeIcon icon={faFacebook} /> Facebook
                          </a>
                        </li>
                        <li className="hover:text-primary-accent cursor-pointer transition-all duration-300 ease-in-out">
                          <a href="https://x.com/linux_mint">
                            <FontAwesomeIcon icon={faTwitter} /> Twitter
                          </a>
                        </li>
                        <li className="hover:text-primary-accent cursor-pointer transition-all duration-300 ease-in-out">
                          <a href="https://mastodon.social/@linuxmint">
                            <FontAwesomeIcon icon={faMastodon} /> Mastodon
                          </a>
                        </li>
                      </ul>
                    </div>

                    <div className="flex flex-col gap-4">
                      <h6 className="font-poppins font-[500]">Community</h6>
                      <ul className="font-ubuntu nowrap flex flex-col gap-2 text-[15px] font-light">
                        <li className="hover:text-primary-accent cursor-pointer transition-all duration-300 ease-in-out">
                          <a href="https://www.reddit.com/r/linuxmint/">
                            <FontAwesomeIcon icon={faReddit} /> Reddit
                          </a>
                        </li>
                        <li className="hover:text-primary-accent cursor-pointer transition-all duration-300 ease-in-out">
                          <a href="https://discord.com/invite/mint">
                            <FontAwesomeIcon icon={faDiscord} /> Discord
                          </a>
                        </li>
                        <li className="hover:text-primary-accent cursor-pointer transition-all duration-300 ease-in-out">
                          <a href="https://kiwiirc.com/nextclient/irc.spotchat.org/#linuxmint-help">
                            <FontAwesomeIcon icon={faHashtag} /> IRC
                          </a>
                        </li>
                        <li className="hover:text-primary-accent cursor-pointer transition-all duration-300 ease-in-out">
                          <a href="https://mintcast.org/">
                            <FontAwesomeIcon icon={faPodcast} /> MintCast
                            Podcast
                          </a>
                        </li>
                        <li className="hover:text-primary-accent cursor-pointer transition-all duration-300 ease-in-out">
                          <FontAwesomeIcon icon={faGlobe} /> Local Communities
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      )}
    </>
  );
};

export default Navbar;
