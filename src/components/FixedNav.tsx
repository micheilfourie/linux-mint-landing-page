import Navbar from "./Navbar";

const FixedNav = ({isThresholdAchieved}: {isThresholdAchieved: boolean}) => {
  return (
    <div
      className={`bg-primary-accent fixed top-0 z-30 w-full shadow-sm ${isThresholdAchieved ? "translate-y-0 opacity-100 pointer-events-auto" : "-translate-y-full opacity-0 pointer-events-none"} transition-all duration-500 ease-in-out`}
    >
      <div className="mx-auto max-w-[1200px]">
        <Navbar />
      </div>
    </div>
  );
};

export default FixedNav;
