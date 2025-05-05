import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRss,
  faEnvelope,
  faCommenting,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faGithub,
  faTwitter,
  faMastodon,
} from "@fortawesome/free-brands-svg-icons";

const socialsList = [
  {
    icon: faRss,
    target: "",
  },
  {
    icon: faEnvelope,
    target: "",
  },
  {
    icon: faCommenting,
    target: "",
  },
  {
    icon: faFacebook,
    target: "",
  },
  {
    icon: faGithub,
    target: "",
  },
  {
    icon: faTwitter,
    target: "",
  },
  {
    icon: faMastodon,
    target: "",
  },
];

const SocialsNav = () => {
  return (
    <nav className="mx-auto flex h-[32px] max-w-[1200px] items-center justify-end px-10">
      <ul className="flex gap-4">
        {socialsList.map((item, index) => (
          <li key={index}>
            <a href={item.target} title="RSS Feed">
              <i>
                <FontAwesomeIcon
                  icon={item.icon}
                  className="text-altwhite text-[15px]"
                />
              </i>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SocialsNav;
