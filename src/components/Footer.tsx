import Logo from "../assets/logo.svg";
import FooterBanner from "./FooterBanner";
import { Link } from "react-router-dom";

const quickLinks = [
  {
    title: "Download",
    link: "",
  },
  {
    title: "Donate",
    link: "",
  },
  {
    title: "Get Involved",
    link: "",
  },
];

const infoLinks = [
  {
    title: "About",
    link: "",
  },
  {
    title: "FAQ",
    link: "",
  },
  {
    title: "Privacy & Cookies",
    link: "",
  },
];

const supportLinks = [
  {
    title: "Installation Guide",
    link: "https://linuxmint-installation-guide.readthedocs.io/en/latest/",
  },
  {
    title: "User Guide",
    link: "https://linuxmint-user-guide.readthedocs.io/en/latest/",
  },
  {
    title: "Forums",
    link: "https://forums.linuxmint.com/",
  },
];

const linkGoups = [
  {
    list: quickLinks,
    title: "Quick Links",
  },
  {
    list: infoLinks,
    title: "Info",
  },
  {
    list: supportLinks,
    title: "Support",
  },
];

const Footer = ({ bannerGroup }: { bannerGroup: number }) => {
  return (
    <footer className="bg-altblack flex flex-col gap-10 py-10 text-gray-300">
      {bannerGroup !== undefined  && <FooterBanner bannerGroup={bannerGroup}/>}

      <div className="mx-auto flex flex-wrap gap-10 px-10 pt-10">
        <div className="flex max-w-[300px] flex-col gap-4">
          <Link to={"/"}>
            <img src={Logo} alt="" className="w-[200px]" />
          </Link>

          <p>
            Thanks to your donations and advertising Linux Mint is completely
            free of charge. We hope you'll enjoy using it as much as we enjoy
            working on it.
          </p>
        </div>

        <div className="max-w-[300px]">
          <p>
            Almost all the packages we distribute are open-source. You can find
            their source code on:
            <br />
            <a
              target="_blank"
              href="https://packages.ubuntu.com"
              className="hover:text-primary-accent transition-all duration-300 ease-in-out"
            >
              https://packages.ubuntu.com
            </a>
            ,
            <br />
            <a
              target="_blank"
              href="http://packages.linuxmint.com"
              className="hover:text-primary-accent transition-all duration-300 ease-in-out"
            >
              http://packages.linuxmint.com
            </a>{" "}
            or
            <br />
            <a
              target="_blank"
              href="https://github.com/linuxmint"
              className="hover:text-primary-accent transition-all duration-300 ease-in-out"
            >
              https://github.com/linuxmint
            </a>
            .
            <br />
            If you can't find what you're looking for contact us.
          </p>
        </div>

        {linkGoups.map(({ list, title }, index) => (
          <div key={index} className="flex max-w-[200px] flex-col gap-4">
            <h3 className="font-poppins font-[600]">{title}</h3>
            <ul className="font-ubuntu font-light">
              {list.map(({ link, title }, index) => (
                <li key={index}>
                  <a
                    target="_blank"
                    href={link}
                    className="hover:text-primary-accent transition-all duration-300 ease-in-out"
                  >
                    {title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <hr className="border-gray-600" />

      <div className="mx-auto w-full max-w-[1200px] px-10">
        <p className="font-ubuntu font-light">
          Linux Mint is copyrighted since 2006 and trademarked through the Linux
          Mark Institute. All rights reserved.
        </p>
        <p className="font-ubuntu font-light">
          Linux® is the registered trademark of Linus Torvalds in the U.S. and
          other countries.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
