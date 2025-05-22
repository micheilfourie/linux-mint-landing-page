import Header from "./Header";
import HeroImg from "../assets/devices.png";
import Button from "./Button";
import Pattern from "../assets/pattern.png";
import { Link } from "react-router-dom";
import useStore from "../useStore";

const Hero = () => {
  const isWidthThresholdAchieved = useStore(
    (state) => state.isWidthThresholdAchieved,
  );

  return (
    <section className="from-secondary-accent to-tertiary-accent relative bg-gradient-to-br pb-20 lg:pb-40">
      <img
        src={Pattern}
        alt=""
        className="pointer-events-none absolute top-0 h-full w-full object-cover"
      />

      {isWidthThresholdAchieved && (
        <svg
          width="100%"
          height="150"
          viewBox="0 0 500 150"
          preserveAspectRatio="none"
          className="pointer-events-none absolute bottom-0"
        >
          <path
            d="M0,150 L0,40 Q250,150 500,40 L580,150 Z"
            fill="#fbfbfb"
          ></path>
        </svg>
      )}

      <Header />

      <div className="mx-auto flex max-w-[1200px] items-center justify-start gap-[30px] lg:px-10 px-6 pt-4 max-lg:mt-10">
        <div className="text-altwhite flex max-w-[450px] flex-col">
          <h6 className="font-poppins text-[15px] font-[500]">"Xia"</h6>
          <h1 className="font-poppins lg:text-[56px] text-5xl mb-4 font-[500]">
            Linux Mint 22.1
          </h1>
          <p className="font-ubuntu text-[20px]">
            The latest version of the friendly operating system is here. Install
            it on your computer today!
          </p>
          <div className="mt-6 flex max-lg:flex-col lg:gap-5 gap-3">
            <Link to="/download">
              <Button>Download</Button>
            </Link>

            <a href="https://linuxmint-installation-guide.readthedocs.io/en/latest/">
              <Button buttonType="secondary">Installation Instructions</Button>
            </a>
          </div>
        </div>
        {isWidthThresholdAchieved && (
          <div>
            <img src={HeroImg} alt="" />
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;
