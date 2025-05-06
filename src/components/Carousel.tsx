import { sliderContentType } from "../lib/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect, useRef } from "react";

const Carousel = ({
  sliderContentList,
}: {
  sliderContentList: sliderContentType[];
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    if (!isHovering) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % sliderContentList.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isHovering, sliderContentList.length]);

  return (
    <div
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className="overflow-hidden"
    >
      <div className="relative mx-auto max-w-[1200px]">
        <div
          ref={slideRef}
          className="flex transition-transform duration-800 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {sliderContentList.map((item, index) => (
            <div key={index} className="w-full flex-shrink-0 px-10 text-center">
              <p className="font-ubuntu mb-2 text-[22px] leading-10 font-[300]">
                {item.comment}
              </p>
              <FontAwesomeIcon
                icon={faQuoteLeft}
                className="text-primary-accent p-2 text-xl"
              />
              <h6 className="font-poppins text-[15px] font-[500]">
                {item.name}
              </h6>
              <h6 className="font-poppins text-[14px] mb-10">{item.company}</h6>
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 items-center gap-2">
          {sliderContentList.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`size-3 cursor-pointer rounded-full border-2 transition-all ${
                index === currentIndex
                  ? "border-gray-300 bg-gray-300 opacity-100"
                  : "border-gray-300 opacity-30"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
