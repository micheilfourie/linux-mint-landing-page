import PencilAltSvg from "../assets/svg/pencil-alt.svg";
import ControllerSvg from "../assets/svg/controller.svg";
import RulerPencilSvg from "../assets/svg/ruler-pencil.svg";
import GlobeSvg from "../assets/svg/globe.svg";
import VideoClapperSvg from "../assets/svg/video-clapper.svg";
import { CardContentType } from "../lib/types";
import FeatureCardMap from "./FeatureCardMap";

const cardContentList: CardContentType[] = [
  {
    icon: RulerPencilSvg,
    title: "Graphic Design",
    description:
      "Work in 3D with Blender, draw or edit pictures in Gimp, use Inkscape for vector graphics.",
  },
  {
    icon: PencilAltSvg,
    title: "Productivity",
    description:
      "With LibreOffice's complete office suite, use the word processor, make presentations, drawings, spreadsheets or even databases. Easily import from or export to PDF or Microsoft Office documents.",
  },
  {
    icon: VideoClapperSvg,
    title: "Multimedia",
    description:
      "Enjoy your music, watch TV and movies, listen to podcasts, Spotify and online radio.",
  },
  {
    icon: GlobeSvg,
    title: "Web",
    description:
      "Browse the Web, watch Youtube and Netflix with Firefox. Turn any website into a desktop app for immediate access.",
    cardType: "primary",
  },
  {
    icon: ControllerSvg,
    title: "Gaming",
    description:
      "Access more than 7,800 games with Steam. Install the Heroic Games Launcher or Lutris to get even more.",
  },
];

const Features = () => {
  return (
    <section className="mx-auto mt-16 grid max-w-[1200px] grid-cols-[1fr_1fr_1fr] gap-[30px] px-10 mb-20">
      <div className="flex flex-col gap-2">
        <h5 className="text-primary-accent font-poppins text-xl font-[500]">
          Features
        </h5>
        <h2 className="text-altblack font-poppins text-4xl font-[500]">
          What is Linux Mint?
        </h2>
        <p className="font-ubuntu text-altblack text-[15px] font-light mb-6">
          Linux Mint is an operating system for desktop and laptop computers. It
          is designed to work 'out of the box' and comes fully equipped with the
          apps most people need.
        </p>

        <FeatureCardMap cards={cardContentList.slice(0, 1)} />
      </div>

      <div className="mt-12 flex flex-col gap-10">
        <FeatureCardMap cards={cardContentList.slice(1, 3)} />
      </div>

      <div className="flex flex-col gap-10">
        <FeatureCardMap cards={cardContentList.slice(3, 5)} />
      </div>
    </section>
  );
};

export default Features;
