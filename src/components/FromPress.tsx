import Carousel from "./Carousel";
import { sliderContentType } from "../lib/types";

const sliderContentList: sliderContentType[] = [
  {
    comment:
      "The years go by, and I keep trying one Linux desktop distro after the other. But for more than a decade now, I come back to Linux Mint. Why? It's simple: Year in and year out, Mint remains the best, easiest-to-use Linux desktop.",
    name: "Steven J. Vaughan-Nichols",
    company: "ZDNet",
  },
  {
    comment:
      "Mint has become the very best example of what a Linux desktop should be: fast, easy, pleasing to the eye, useful and productive. Others, still, see Mint as the ideal desktop for Windows refugees, or those who are trying out Linux for the first time, and want an operating system that essentially works 'out of the box'.",
    name: "David Hayward",
    company: "Linux Format",
  },
  {
    comment:
      "Linux Mint's latest release will have an exceptionally wide appeal. Anyone looking for an incredibly stable, robust, fast, clean, and user-friendly desktop operating system could do a whole lot worse. [...] Every Linux desktop distribution should strive to do exactly what Linux Mint 20.1 has accomplished--create a desktop that is the perfect balance of speed, features, and user-friendliness.",
    name: "Jack Wallen",
    company: "TechRepublic",
  },
  {
    comment: `There's a good reason for that popularity: Linux Mint just works. It isn't "changing the desktop computer paradigm," or "innovating" in "groundbreaking" ways. The team behind Mint is just building a desktop operating system that looks and functions a lot like every other desktop operating system you've used, which is to say you'll be immediately comfortable and stop thinking about your desktop and start using it to do actual work.`,
    name: "Scott Gilbertson",
    company: "ars technica",
  },
  {
    comment:
      "Exploring the bevy of Linux distributions out there is a fun part of the hobby, but for your first installation, you will likely want something popular and beginner-friendly, so it's easy to get help when you need it. That's why I recommend starting with Linux Mint.",
    name: "Whitson Gordon",
    company: "PCMag",
  },
  {
    comment:
      "Linux Mint has again shown why it deserves to stay among the best Linux distribution for beginners. If you’re thinking to migrate from Windows to Linux, you should definitely get your hand on Linux Mint.",
    name: "Sarvottam Kumar",
    company: "FossBytes",
  },
];

const FromPress = () => {
  return (
    <section className="text-altblack mx-auto my-20 max-w-[1200px]">
      <h3 className="font-playfair mb-10 text-center text-[24px] italic">
        From the press
      </h3>
      <Carousel sliderContentList={sliderContentList} />
    </section>
  );
};

export default FromPress;
