const AboutDropdown = ({ navDropdownOpen }: { navDropdownOpen: string }) => {
  return (
    <div
      className={`bg-altwhite absolute top-[77px] right-0 shadow-sm ${navDropdownOpen === "about" ? "pointer-events-auto translate-y-0 opacity-100" : "pointer-events-none translate-y-20 opacity-0"} flex w-[400px] flex-col gap-2 transition-all duration-400 ease-in-out`}
    >
      <div className="text-altblack flex gap-20 p-6">
        <ul className="font-ubuntu flex flex-col gap-2 text-[15px] font-light">
          <li>About Linux Mint</li>
          <li>FAQ</li>
          <li>Documentation</li>
          <li>Screenshots</li>
        </ul>

        <ul className="font-ubuntu flex flex-col gap-2 text-[15px] font-light">
          <li>Privacy & Cookies</li>
          <li>Team</li>
          <li>Contact Us</li>
        </ul>
      </div>
    </div>
  );
};

export default AboutDropdown;
