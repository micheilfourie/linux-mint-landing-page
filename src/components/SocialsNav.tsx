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
    target: "https://blog.linuxmint.com/?feed=rss2",
  },
  {
    icon: faEnvelope,
    target: "mailto:root@linuxmint.com",
  },
  {
    icon: faCommenting,
    target: "https://app.element.io/#/room/#linuxmint-space:matrix.org",
  },
  {
    icon: faFacebook,
    target: "https://www.facebook.com/pages/Linux-Mint/185238108180410",
  },
  {
    icon: faGithub,
    target: "https://www.github.com/linuxmint",
  },
  {
    icon: faTwitter,
    target: "https://twitter.com/linux_mint",
  },
  {
    icon: faMastodon,
    target: "https://mastodon.social/@linuxmint",
  },
];

const SocialsNav = () => {
  return (
    <nav className="mx-auto flex h-[32px] max-w-[1200px] items-center justify-end px-10">
      <ul className="flex">
        {socialsList.map((item, index) => (
          <li key={index}>
            <a href={item.target} className="group relative h-full">
              <i>
                <FontAwesomeIcon
                  icon={item.icon}
                  className="text-altwhite px-2 h-full text-[15px] transition-all duration-150 ease-in group-hover:-translate-y-full group-hover:opacity-0 group-hover:delay-0"
                />
              </i>
              <i>
                <FontAwesomeIcon
                  icon={item.icon}
                  className="text-altblack absolute top-[2px] left-0 translate-y-full px-2 text-[15px] opacity-0 transition-all duration-150 ease-in pointer-events-none group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100 group-hover:delay-150"
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
