import { useEffect } from "react";

const useScrollTop = (top, delay) => {
  useEffect(() => {
    window.scrollTo({
      top: top,
    });
  }, [top, delay]);

  return null;
};

export default useScrollTop;
