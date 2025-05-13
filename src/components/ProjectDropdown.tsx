import Pattern from "../assets/pattern.png";

const ProjectDropdown = ({ navDropdownOpen }: { navDropdownOpen: string }) => {
  return (
    <div
      className={`bg-altwhite absolute top-[77px] cursor-default shadow-sm left-0 ${navDropdownOpen === "project" ? "pointer-events-auto translate-y-0 opacity-100" : "pointer-events-none translate-y-20 opacity-0"} flex w-[330px] flex-col gap-2 transition-all duration-400 ease-in-out`}
    >
      <div className="text-altblack flex gap-20 p-6">
        <div className="flex flex-col gap-4">
          <h6 className="font-poppins font-[500]">Funding</h6>
          <ul className="font-ubuntu text-[15px] flex flex-col gap-2 font-light">
            <li className="hover:text-primary-accent cursor-pointer transition-all duration-300 ease-in-out">Donors</li>
            <li className="hover:text-primary-accent cursor-pointer transition-all duration-300 ease-in-out">Sponsors</li>
            <li className="hover:text-primary-accent cursor-pointer transition-all duration-300 ease-in-out">Partners</li>
            <li className="hover:text-primary-accent cursor-pointer transition-all duration-300 ease-in-out">Store</li>
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <h6 className="font-poppins font-[500]">Contributing</h6>
          <ul className="font-ubuntu text-[15px] flex flex-col gap-2 font-light">
            <li className="hover:text-primary-accent cursor-pointer transition-all duration-300 ease-in-out">Get Involved</li>
            <li className="hover:text-primary-accent cursor-pointer transition-all duration-300 ease-in-out">Mirrors</li>
          </ul>
        </div>
      </div>

      <div className="from-secondary-accent to-tertiary-accent text-altwhite flex items-center gap-8 bg-gradient-to-br p-6">
        <img
          src={Pattern}
          alt=""
          className="pointer-events-none absolute top-0 h-full w-full object-cover"
        />

        <p className="font-ubuntu text-[13px]">
          Every little helps, don't hesitate to get involved.
        </p>
      </div>
    </div>
  );
};

export default ProjectDropdown;
