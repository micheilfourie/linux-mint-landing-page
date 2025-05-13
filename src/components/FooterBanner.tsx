import Ipv6rs from "../assets/partners/ipv6rs_negative.svg";
import Sucuri from "../assets/partners/sucuri_negative.svg";
import AgileCoach from "../assets/partners/agile-coach.png";

const bannerGroups: string[][] = [[Ipv6rs, Sucuri, AgileCoach]];

const FooterBanner = ({ bannerGroup }: { bannerGroup: number }) => {
  if (bannerGroup >= bannerGroups.length) {
    return;
  }

  return (
    <div className="mx-auto mb-10 grid w-[550px] grid-cols-3 gap-10">
      {bannerGroups[bannerGroup].map((item, index) => (
        <img key={index} src={item} alt="" />
      ))}
    </div>
  );
};

export default FooterBanner;
