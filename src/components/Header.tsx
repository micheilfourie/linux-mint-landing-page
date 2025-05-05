import Navbar from "./Navbar";
import SocialsNav from "./SocialsNav";

const Header = () => {
  return (
    <header className="w-full">
      <SocialsNav />
      <hr className="border-altblack my-1 opacity-20" />
      <Navbar />
    </header>
  );
};

export default Header;
