const AboutDropdown = ({ navDropdownOpen }: { navDropdownOpen: string }) => {
  return (
    <div
      className={`bg-altwhite absolute top-[77px] right-0 cursor-default shadow-sm ${navDropdownOpen === "about" ? "pointer-events-auto translate-y-0 opacity-100" : "pointer-events-none translate-y-20 opacity-0"} flex w-[400px] flex-col gap-2 transition-all duration-400 ease-in-out`}
    >
      <div className="text-altblack flex gap-20 p-6">
        <ul className="font-ubuntu flex flex-col gap-2 text-[15px] font-light">
          <li className="hover:text-primary-accent cursor-pointer transition-all duration-300 ease-in-out">
            About Linux Mint
          </li>
          <li className="hover:text-primary-accent cursor-pointer transition-all duration-300 ease-in-out">
            FAQ
          </li>
          <li className="hover:text-primary-accent cursor-pointer transition-all duration-300 ease-in-out">
            Documentation
          </li>
          <li className="hover:text-primary-accent cursor-pointer transition-all duration-300 ease-in-out">
            Screenshots
          </li>
        </ul>

        <ul className="font-ubuntu flex flex-col gap-2 text-[15px] font-light">
          <li className="hover:text-primary-accent cursor-pointer transition-all duration-300 ease-in-out">
            Privacy & Cookies
          </li>
          <li className="hover:text-primary-accent cursor-pointer transition-all duration-300 ease-in-out">
            Team
          </li>
          <li className="hover:text-primary-accent cursor-pointer transition-all duration-300 ease-in-out">
            Contact Us
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AboutDropdown;
