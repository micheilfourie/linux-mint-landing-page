import Navbar from "./Navbar";
import SocialsNav from "./SocialsNav";
import useStore from "../useStore";

const Header = () => {
  const isWidthThresholdAchieved = useStore(
    (state) => state.isWidthThresholdAchieved,
  );

  return (
    <header className="w-full">
      {isWidthThresholdAchieved && (
        <>
          <SocialsNav />
          <hr className="border-altblack my-1 opacity-20" />
        </>
      )}

      <Navbar />
    </header>
  );
};

export default Header;
