import Navbar from "./Navbar";
import useStore from "../useStore";

const FixedNav = () => {
  const isScrollThresholdAchieved = useStore(
    (state) => state.isScrollThresholdAchieved,
  );

  return (
    <div
      className={`bg-primary-accent fixed top-0 z-30 w-full shadow-sm ${isScrollThresholdAchieved ? "pointer-events-auto translate-y-0 opacity-100" : "pointer-events-none -translate-y-full opacity-0"} transition-all duration-500 ease-in-out`}
    >
      <div className="mx-auto max-w-[1200px]">
        <Navbar />
      </div>
    </div>
  );
};

export default FixedNav;
