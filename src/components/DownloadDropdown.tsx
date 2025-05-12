import Tag from "./Tag";
import Button from "./Button";
import Pattern from "../assets/pattern.png";

const DownloadDropdown = ({navDropdownOpen}: {navDropdownOpen: string}) => {
  return (
    <div 
    className={`bg-altwhite absolute top-[77px] shadow-sm -left-18 ${navDropdownOpen === "download" ? "translate-y-0 opacity-100 pointer-events-auto" : "translate-y-20 opacity-0 pointer-events-none"} flex w-[550px] flex-col gap-2 transition-all duration-400 ease-in-out`}>
      <div className="text-altblack flex gap-20 p-6">
        <div className="flex flex-col gap-4">
          <h6 className="font-poppins font-[500]">Latest Version</h6>
          <ul className="font-ubuntu text-[15px] font-light">
            <li className="nowrap flex gap-4">
              Linux Mint 22.1 <Tag>recommended</Tag>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <h6 className="font-poppins font-[500]">Other Versions</h6>
          <ul className="font-ubuntu text-[15px] flex flex-col gap-2 font-light">
            <li>LMDE 6</li>
            <li>All Versions</li>
          </ul>
        </div>
      </div>

      <div className="bg-gradient-to-br from-secondary-accent to-tertiary-accent text-altwhite flex items-center gap-8 p-6">
        <img
          src={Pattern}
          alt=""
          className="pointer-events-none absolute top-0 h-full w-full object-cover"
        />

        <div>
          <h4 className="font-poppins text-2xl font-[500]">
            Checkout the doc!
          </h4>
          <p className="font-ubuntu text-[13px]">
            Follow the guide to learn how to download and install Linux Mint.
          </p>
        </div>

        <div>
          <Button buttonType="secondary">Installation Guide</Button>
        </div>
      </div>
    </div>
  );
};

export default DownloadDropdown;
