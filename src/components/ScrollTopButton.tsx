import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "./Button";

const ScrollTopButton = ({scrollPos, handleScrollToTop}: {scrollPos: number, handleScrollToTop: () => void}) => {
  return (
    <div className={`fixed right-6 -bottom-6 opacity-0 z-30 shadow-sm ${scrollPos > 500 && "bottom-6 opacity-100"} transition-all duration-500 ease-in-out`}>
      <Button buttonType="primary" action={handleScrollToTop}>
        <FontAwesomeIcon icon={faChevronUp} className="text-altwhite text-xs" />
      </Button>
    </div>
  );
};

export default ScrollTopButton;
