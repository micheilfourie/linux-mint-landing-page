import Ipv6rs from "../assets/partners/ipv6rs_negative.svg";
import Sucuri from "../assets/partners/sucuri_negative.svg";
import AgileCoach from "../assets/partners/agile-coach.png";
import Datadog from "../assets/partners/datadog_negative.svg";
import Eukhost from "../assets/partners/eukhost_negative.svg";
import Tinken from "../assets/partners/tinken_negative.svg";

const bannerGroups: string[][] = [
  [Ipv6rs, Sucuri, AgileCoach],
  [Datadog, Eukhost, Tinken],
];

const randomIndex = Math.floor(Math.random() * bannerGroups.length);

const FooterBanner = ({showBanner}: {showBanner?: boolean}) => {

  return (
    showBanner &&
    <div className="mx-auto mb-10 grid w-[550px] grid-cols-3 gap-10">
      {bannerGroups[randomIndex].map((item, index) => (
        <img key={index} src={item} alt="" />
      ))}
    </div>
  );
};

export default FooterBanner;
