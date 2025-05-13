import Button from "./Button";
import CinnamionThumb from "../assets/thumb_cinnamon.png";
import XfceThumb from "../assets/thumb_xfce.png";
import MateThumb from "../assets/thumb_mate.png";
import InteractiveLink from "./InteractiveLink";

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
];

const DownloadOptions = () => {
  return (
    <section>
      <div className="mx-auto flex max-w-[1200px] flex-col gap-10 px-10 py-6">
        <div className="flex w-full flex-col items-center justify-center gap-2 border-2 border-dotted border-gray-200 p-10">
          <h2 className="font-poppins text-altblack text-[26px] font-[500]">
            Ready to download?
          </h2>
          <p className="font-ubuntu text-altblack mb-4 text-center text-[15px] font-light">
            Linux Mint is available in different flavors. Choose an edition
            below.
            <br />
            For more information read the installation instructions.
          </p>
          <a href="https://linuxmint-installation-guide.readthedocs.io/en/latest/">
            <Button buttonType="primary">Installation Instructions</Button>
          </a>
        </div>
      </div>
      {downloadList.map((item, index) => (
        <div
          key={index}
          className={`${index % 2 !== 0 && "bg-altgray"} w-full`}
        >
          <div
            className={`mx-auto flex w-full max-w-[1200px] items-center justify-evenly p-8 ${index % 2 !== 0 && "flex-row-reverse"}`}
          >
            <div className="w-[50%]">
              <img
                src={item.thumbnail}
                alt=""
                className="h-full w-full object-cover"
              />
            </div>

            <div className="w-[50%] px-8">
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
                <InteractiveLink>New Features</InteractiveLink>
                <InteractiveLink>Release Notes</InteractiveLink>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default DownloadOptions;
