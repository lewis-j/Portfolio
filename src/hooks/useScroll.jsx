import { useEffect, useState } from "react";

const useScroll = (length, offsetSegments) => {
  const [isIncrementing, setIsIncrementing] = useState(false);
  const [slide, setSlide] = useState(0);

  const _handleScroll = () => {
    const offset = window.pageYOffset;
    [...Array(length).keys()].forEach((_, index) => {
      const lowRange = index * offsetSegments;
      const highRange = lowRange + offsetSegments;

      const isInRange = offset >= lowRange && offset < highRange;
      if (isInRange) {
        if (index === slide) return;

        setIsIncrementing(slide < index);
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

  return { setScrollPosition, slide, isIncrementing };
};
export default useScroll;
