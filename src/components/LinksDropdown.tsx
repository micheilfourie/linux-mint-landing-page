import Pattern from "../assets/pattern.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faTwitter,
  faMastodon,
  faFacebook,
  faReddit,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";
import {
  faHashtag,
  faPodcast,
  faGlobe,
  faIgloo,
  faBlog,
  faComments,
  faComment,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import Tag from "./Tag";
import { Link } from "react-router-dom";

const LinksDropdown = ({ navDropdownOpen }: { navDropdownOpen: string }) => {
  return (
    <div
      className={`bg-altwhite absolute top-[77px] right-0 cursor-default shadow-sm ${navDropdownOpen === "links" ? "pointer-events-auto translate-y-0 opacity-100" : "pointer-events-none translate-y-20 opacity-0"} flex w-[600px] flex-col gap-2 transition-all duration-400 ease-in-out`}
    >
      <div className="text-altblack flex gap-20 p-6">
        <div className="flex flex-col gap-4">
          <h6 className="font-poppins font-[500]">Official</h6>
          <ul className="font-ubuntu nowrap flex flex-col gap-2 text-[15px] font-light">
            <li className="nowrap flex gap-4">
              <Link to={"/"}>
                <span className="hover:text-primary-accent cursor-pointer transition-all duration-300 ease-in-out">
                  <FontAwesomeIcon icon={faIgloo} /> Website
                </span>{" "}
              </Link>
              <Tag>Here</Tag>
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
                <FontAwesomeIcon icon={faPodcast} /> MintCast Podcast
              </a>
            </li>
            <li className="hover:text-primary-accent cursor-pointer transition-all duration-300 ease-in-out">
              <FontAwesomeIcon icon={faGlobe} /> Local Communities
            </li>
          </ul>
        </div>
      </div>

      <div className="from-secondary-accent to-tertiary-accent text-altwhite flex items-center gap-8 bg-gradient-to-br p-6">
        <img
          src={Pattern}
          alt=""
          className="pointer-events-none absolute top-0 h-full w-full object-cover"
        />

        <p className="font-ubuntu text-[13px]">
          Websites in the right column are maintained by the community.
        </p>
      </div>
    </div>
  );
};

export default LinksDropdown;
