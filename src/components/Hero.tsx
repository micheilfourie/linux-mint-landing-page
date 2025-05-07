import Header from "./Header";
import HeroImg from "../assets/devices.png";
import Button from "./Button";
import Pattern from "../assets/pattern.png";

const Hero = () => {
  return (
    <section className="from-secondary-accent to-tertiary-accent relative h-[700px] bg-gradient-to-br">
      <img
        src={Pattern}
        alt=""
        className="pointer-events-none absolute top-0 h-full w-full object-cover"
      />
      <svg
        width="100%"
        height="150"
        viewBox="0 0 500 150"
        preserveAspectRatio="none"
        className="pointer-events-none absolute bottom-0"
      >
        <path d="M0,150 L0,40 Q250,150 500,40 L580,150 Z" fill="#fbfbfb"></path>
      </svg>

      <Header />

      <div className="mx-auto flex max-w-[1200px] items-center justify-start gap-[30px] px-10 pt-4">
        <div className="text-altwhite flex max-w-[450px] flex-col">
          <h6 className="font-poppins text-[15px] font-[500]">"Xia"</h6>
          <h1 className="font-poppins text-[56px] font-[500]">
            Linux Mint 22.1
          </h1>
          <p className="font-ubuntu text-[20px]">
            The latest version of the friendly operating system is here. Install
            it on your computer today!
          </p>
          <div className="mt-6 flex gap-5">
            <Button>Download</Button>
            <Button buttonType="secondary" link="https://linuxmint-installation-guide.readthedocs.io/en/latest/">Installation Instructions</Button>
          </div>
        </div>
        <div>
          <img src={HeroImg} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
