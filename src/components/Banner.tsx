import Pattern from "../assets/pattern.png";
import Pattern2 from "../assets/pattern2.png";

type BannerType = {
  pattern: 1 | 2;
  children: React.ReactNode;
};

const Banner = ({ pattern, children }: BannerType) => {
  
  return (
    <div
      className={`${pattern === 1 ? "bg-altblack" : "bg-primary-accent"} text-altwhite relative flex h-[300px] flex-col items-center justify-center`}
    >
      <img
        src={pattern === 1 ? Pattern : Pattern2}
        alt=""
        className="pointer-events-none absolute top-0 h-full w-full object-cover"
      />
      <div className="flex flex-col items-center text-center justify-center px-4">
        {children}
      </div>
    </div>
  );
};

export default Banner;
