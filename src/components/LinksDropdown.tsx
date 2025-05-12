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

const LinksDropdown = ({ navDropdownOpen }: { navDropdownOpen: string }) => {
  return (
    <div
      className={`bg-altwhite absolute top-[77px] right-0 shadow-sm ${navDropdownOpen === "links" ? "pointer-events-auto translate-y-0 opacity-100" : "pointer-events-none translate-y-20 opacity-0"} flex w-[600px] flex-col gap-2 transition-all duration-400 ease-in-out`}
    >
      <div className="text-altblack flex gap-20 p-6">
        <div className="flex flex-col gap-4">
          <h6 className="font-poppins font-[500]">Official</h6>
          <ul className="font-ubuntu nowrap flex flex-col gap-2 text-[15px] font-light">
            <li className="nowrap flex gap-4">
              <span><FontAwesomeIcon icon={faIgloo} /> Website</span> <Tag>Here</Tag>
            </li>
            <li>
              <FontAwesomeIcon icon={faBlog} /> Blog
            </li>
            <li>
              <FontAwesomeIcon icon={faComments} /> Forums
            </li>
            <li>
              <FontAwesomeIcon icon={faComment} /> Chat Rooms
            </li>
            <li>
              <FontAwesomeIcon icon={faUsers} /> Community Website
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <h6 className="font-poppins font-[500]">Social</h6>
          <ul className="font-ubuntu nowrap flex flex-col gap-2 text-[15px] font-light">
            <li>
              <FontAwesomeIcon icon={faGithub} /> Github
            </li>
            <li>
              <FontAwesomeIcon icon={faFacebook} /> Facebook
            </li>
            <li>
              <FontAwesomeIcon icon={faTwitter} /> Twitter
            </li>
            <li>
              <FontAwesomeIcon icon={faMastodon} /> Mastodon
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <h6 className="font-poppins font-[500]">Community</h6>
          <ul className="font-ubuntu nowrap flex flex-col gap-2 text-[15px] font-light">
            <li>
              <FontAwesomeIcon icon={faReddit} /> Reddit
            </li>
            <li>
              <FontAwesomeIcon icon={faDiscord} /> Discord
            </li>
            <li>
              <FontAwesomeIcon icon={faHashtag} /> IRC
            </li>
            <li>
              <FontAwesomeIcon icon={faPodcast} /> MintCast Podcast
            </li>
            <li>
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
