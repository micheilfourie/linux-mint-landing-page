import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "./Button";

const ScrollTopButton = ({isThresholdAchieved, handleScrollToTop}: {isThresholdAchieved: boolean, handleScrollToTop: () => void}) => {
  return (
    <div className={`fixed right-6  z-30 shadow-sm ${isThresholdAchieved ? "bottom-6 opacity-100 pointer-events-auto" : "-bottom-6 opacity-0 pointer-events-none"} transition-all duration-500 ease-in-out`}>
      <Button buttonType="primary" action={handleScrollToTop}>
        <FontAwesomeIcon icon={faChevronUp} className="text-altwhite text-xs" />
      </Button>
    </div>
  );
};

export default ScrollTopButton;
