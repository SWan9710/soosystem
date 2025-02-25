import { useEffect } from "react";

const useScrollTo = (top, delay) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.scrollTo({
        top: top,
        behavior: "smooth",
      });
    }, delay);

    return () => clearTimeout(timer);
  }, [top, delay]);
};

export default useScrollTo;
