import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "./Button";
import useStore from "../useStore";

const ScrollTopButton = () => {
  const isScrollThresholdAchieved = useStore(
    (state) => state.isScrollThresholdAchieved,
  );

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className={`fixed right-6 z-30 shadow-sm ${isScrollThresholdAchieved ? "pointer-events-auto bottom-6 opacity-100" : "pointer-events-none -bottom-6 opacity-0"} transition-all duration-500 ease-in-out`}
    >
      <Button buttonType="primary" action={handleScrollToTop}>
        <FontAwesomeIcon icon={faChevronUp} className="text-altwhite text-xs" />
      </Button>
    </div>
  );
};

export default ScrollTopButton;
