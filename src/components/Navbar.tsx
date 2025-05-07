import Logo from "../assets/logo-primary.svg";
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="mx-auto flex h-[75px] max-w-[1200px] items-center justify-between px-10">
      <Link to={"/"}>
        <img src={Logo} alt="" className="w-[200px]" />
      </Link>

      <div className="flex items-center gap-8">
        <ul className="font-ubuntu flex gap-8 text-[15px] text-white">
          <Link to={"/"}>
            <li className="hover:text-altblack cursor-pointer transition-all duration-300 ease-in-out">
              Home
            </li>
          </Link>

          <li className="hover:text-altblack flex cursor-pointer items-center gap-1 transition-all duration-300 ease-in-out">
            Download
            <FontAwesomeIcon icon={faChevronDown} className="text-[9px]" />
          </li>

          <li className="hover:text-altblack flex cursor-pointer items-center gap-1 transition-all duration-300 ease-in-out">
            Project
            <FontAwesomeIcon icon={faChevronDown} className="text-[9px]" />
          </li>

          <li className="hover:text-altblack flex cursor-pointer items-center gap-1 transition-all duration-300 ease-in-out">
            About
            <FontAwesomeIcon icon={faChevronDown} className="text-[9px]" />
          </li>

          <li className="hover:text-altblack flex cursor-pointer items-center gap-1 transition-all duration-300 ease-in-out">
            Links
            <FontAwesomeIcon icon={faChevronDown} className="text-[9px]" />
          </li>
        </ul>
        <Button buttonType="tertiary">Donate</Button>
      </div>
    </nav>
  );
};

export default Navbar;
