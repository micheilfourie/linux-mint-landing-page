import WandSvg from "../assets/wand.svg";
import HeartSvg from "../assets/heart.svg";
import CrownSvg from "../assets/crown.svg";
import LockSvg from "../assets/lock.svg";
import CheckBoxSvg from "../assets/check-box.svg";
import FaceSmileSvg from "../assets/face-smile.svg";

type ProductInfoType = {
    icon: string;
    title: string;
    description: string;
};

const productInfoList: ProductInfoType[] = [
  {
    icon: WandSvg,
    title: "OOTB",
    description: `Everything just works "Out Of The Box", without the need to configure anything or to install extra applications. It's ready to go. Although it's very configurable, everything is set and tuned nicely by default and no unnecessary questions are asked.`,
  },
  {
    icon: HeartSvg,
    title: "KISS",
    description:
      "It's very easy to use. It features an intuitive desktop and adopts KISS principles. Anyone can rapidly feel at home and use Linux Mint. User experience, workflow and comfort is key.",
  },
  {
    icon: CrownSvg,
    title: "Home Rule",
    description:
      "It's your computer, your rules. This is a key principle at Linux Mint. We don't collect data, we don't work against you. You're the boss. Your operating system is designed to do what you want without getting in your way.",
  },
  {
    icon: LockSvg,
    title: "Rock Solid",
    description:
      "With centralized software updates, system snapshots, a unique Update Manager and the robustness of its Linux architecture, Linux Mint requires very little maintenance. It works, it's safe and it doesn't break.",
  },
  {
    icon: CheckBoxSvg,
    title: "Free and Open Source",
    description:
      "It is completely free of cost and almost all of its components are Open Source. Linux Mint stands on the shoulder of giants, it is based on Debian and Ubuntu.",
  },
  {
    icon: FaceSmileSvg,
    title: "Community-centric",
    description:
      "There is a tight bond and a great relationship between the development team and the community. We communicate with our users and constantly use their feedback to improve Linux Mint.",
  },
];

const AboutProduct = () => {
  return (
    <section className="text-altblack mx-auto mt-20 grid max-w-[1200px] grid-cols-3 gap-10 px-10">
      <div className="col-span-3 mb-4 flex flex-col items-center justify-center gap-3">
        <h3 className="font-playfair text-[24px] italic">
          Why choose Linux Mint?
        </h3>
        <h2 className="font-poppins text-4xl font-[600]">
          Easy to use, fast and comfortable.
        </h2>
        <p className="font-ubuntu text-[15px] font-light">
          Give your hardware the operating system it deserves and feel right at
          home.
        </p>
      </div>

      {productInfoList.map((item, index) => (
        <div key={index} className="relative flex-col gap-2">
          <img
            src={item.icon}
            alt=""
            className="absolute top-0 left-0 size-12"
          />
          <div className="pl-17">
            <h3 className="font-poppins mb-3 text-[22px] font-[500]">
              {item.title}
            </h3>
            <p className="font-ubuntu text-[15px] font-light">
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default AboutProduct;
