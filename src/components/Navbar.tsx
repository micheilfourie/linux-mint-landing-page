import Logo from "../assets/logo-primary.svg";
import Button from "./Button";

const Navbar = () => {
  return (
    <nav className="mx-auto flex h-[85px] max-w-[1200px] items-center justify-between px-10">
      <img src={Logo} alt="" className="w-[200px]" />
      <div className="flex items-center gap-8">
        <ul className="font-ubuntu flex gap-8 text-[15px] text-white">
          <li>Home</li>
          <li>Download</li>
          <li>Project</li>
          <li>About</li>
          <li>Links</li>
        </ul>
        <Button buttonType="tertiary">Donate</Button>
      </div>
    </nav>
  );
};

export default Navbar;
