import Navbar from "./Navbar";

const FixedNav = ({ scrollPos }: { scrollPos: number }) => {
  return (
    <div
      className={`bg-primary-accent fixed top-0 z-30 w-full -translate-y-full opacity-0 shadow-sm ${scrollPos > 500 && "translate-y-0 opacity-100"} transition-all duration-500 ease-in-out`}
    >
      <div className="mx-auto max-w-[1200px]">
        <Navbar />
      </div>
    </div>
  );
};

export default FixedNav;
