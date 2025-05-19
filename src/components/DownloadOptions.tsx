import Button from "./Button";
import CinnamionThumb from "../assets/thumb_cinnamon.png";
import XfceThumb from "../assets/thumb_xfce.png";
import MateThumb from "../assets/thumb_mate.png";
import InteractiveLink from "./InteractiveLink";
import { Link } from "react-router-dom";

const downloadList = [
  {
    thumbnail: CinnamionThumb,
    decorHeading: "Sleek, modern, innovative",
    edition: "Cinnamon Edition",
    description: `The most popular version of Linux Mint is the Cinnamon edition. Cinnamon is primarily developed for and by Linux Mint. It is slick, beautiful, and full of new features.`,
  },
  {
    thumbnail: XfceThumb,
    decorHeading: "Light, simple, efficient",
    edition: "Xfce Edition",
    description: `Xfce is a lightweight desktop environment. It doesn’t support as many features as Cinnamon but it’s lighter on resource usage.`,
  },
  {
    thumbnail: MateThumb,
    decorHeading: "Classic, traditional",
    edition: "MATE Edition",
    description: `MATE is a classic desktop environment. It is the continuation of GNOME 2, which was Linux Mint’s default desktop between 2006 and 2011.`,
  },
  {
    thumbnail: CinnamionThumb,
    decorHeading: "An alternative to Ubuntu",
    edition: "Debian Edition",
    description: `LMDE aims to be as similar as possible to Linux Mint, but without using Ubuntu. The package base is provided by Debian instead.`,
  },
];

const DownloadOptions = ({ generateIndex }: { generateIndex?: number }) => {
  let filteredList = [];

  if (generateIndex !== undefined && generateIndex <= downloadList.length) {
    filteredList = [downloadList[generateIndex]];
  } else {
    filteredList = downloadList.slice(0, 3);
  }

  return (
    <>
      {filteredList.map((item, index) => (
        <div
          key={index}
          className={`${index % 2 !== 0 && "bg-altgray"} w-full`}
        >
          <div
            className={`mx-auto flex max-lg:flex-col w-full max-w-[1200px] lg:items-center lg:justify-evenly p-8 ${index % 2 !== 0 && "flex-row-reverse"}`}
          >
            <div className="lg:w-[50%]">
              <img
                src={item.thumbnail}
                alt=""
                className="h-full w-full object-cover max-w-[500px]"
              />
            </div>

            <div className="lg:w-[50%] lg:px-8 max-lg:mt-6">
              <h3 className="font-playfair text-altblack text-[24px] italic">
                {item.decorHeading}
              </h3>
              <h2 className="font-poppins text-altblack my-2 text-[36px] font-[600]">
                {item.edition}
              </h2>
              <p className="font-ubuntu text-altblack mb-4 text-[15px] font-light">
                {item.description}
              </p>

              <div className="mt-6 flex gap-6">
                <Button buttonType="dark">Download</Button>
                <Link to={"/new-features"}>
                  <InteractiveLink>New Features</InteractiveLink>
                </Link>
                <Link to={"/release-notes"}>
                  <InteractiveLink>Release Notes</InteractiveLink>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default DownloadOptions;
