import { useEffect, useState } from "react";
import { Tabs } from "../components";

const useScroll = (length, offsetSegments) => {
  const [isIncrementing, setIsIncrementing] = useState(true);
  const [slide, setSlide] = useState(0);

  const _handleScroll = () => {
    const offset = window.pageYOffset;
    // if (offset < offsetSegments) {
    //   if (slide === -1) return;
    //   setSlide(-1);
    //   setIsIncrementing(true);
    //   return;
    // }
    [...Array(length).keys()].forEach((_, index) => {
      const lowRange = index * offsetSegments;
      const highRange = lowRange + offsetSegments;

      const isInRange = offset >= lowRange && offset < highRange;
      if (isInRange) {
        if (index === slide) return;

        setIsIncrementing(slide < index || index === 0);
        setSlide(index);
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", _handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", _handleScroll);
    };
  });
  const setScrollPosition = (slideIndex) => {
    window.scrollTo(0, slideIndex * offsetSegments + 1);
  };

  const ScrollTabs = (
    <Tabs length={length} current={slide} handleActive={setScrollPosition} />
  );
  return { setScrollPosition, slide, isIncrementing, ScrollTabs };
};
export default useScroll;
