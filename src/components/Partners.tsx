import Compulab from "../assets/partners/compulab.png";
import Datadog from "../assets/partners/datadog.svg";
import Duckduckgo from "../assets/partners/duckduckgo.svg";
import Eukhost from "../assets/partners/eukhost.svg";
import Hellotux from "../assets/partners/hellotux.svg";
import Ipv6rs from "../assets/partners/ipv6rs.svg";
import Sucuri from "../assets/partners/sucuri.svg";
import Thinkpenguin from "../assets/partners/think-penguin.png";
import Yahoo from "../assets/partners/yahoo.svg";

type PartnerType = {
  img: string;
  link: string;
};

const partnerList: PartnerType[] = [
  {
    img: Eukhost,
    link: "https://www.eukhost.com/vps-hosting",
  },
  {
    img: Ipv6rs,
    link: "https://ipv6.rs/",
  },
  {
    img: Compulab,
    link: "https://fit-iot.com/web/#buymbm2",
  },
  {
    img: Datadog,
    link: "https://www.datadoghq.com/",
  },
  {
    img: Sucuri,
    link: "https://sucuri.net/",
  },
  {
    img: Thinkpenguin,
    link: "https://www.thinkpenguin.com/",
  },
  {
    img: Duckduckgo,
    link: "https://duckduckgo.com/?t=lm",
  },
  {
    img: Yahoo,
    link: "https://www.yahoo.com/",
  },
  {
    img: Hellotux,
    link: "https://www.hellotux.com/linux_mint",
  },
];

const Partners = () => {
  return (
    <section className="text-altblack m-20 mx-auto max-w-[700px] px-10">
      <div className="grid grid-cols-3 gap-14">
        <div className="col-span-3 mb-4 flex flex-col items-center justify-center gap-3">
          <h3 className="font-playfair text-[24px] italic">
            Brought to you by
          </h3>
          <h2 className="font-poppins text-4xl font-[600]">
            Partners and sponsors
          </h2>
          <p className="font-ubuntu text-[15px] font-light">
            Linux Mint is also supported by an amazing network of partners and
            sponsors.
          </p>
        </div>

        {partnerList.map((item, index) => (
          <a key={index} href={item.link} target="_blank">
            <img key={index} src={item.img} alt="" className="" />
          </a>
        ))}
      </div>
      <div className="mt-10 flex items-center justify-center">
        <a href="" className="text-[15px] text-primary-accent hover:brightness-75 transition-all duration-300 ease-in-out">
          View all sponsers
        </a>
      </div>
    </section>
  );
};

export default Partners;
