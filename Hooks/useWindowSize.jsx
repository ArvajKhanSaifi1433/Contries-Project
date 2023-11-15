import React, { useEffect, useState } from "react";

function useWindowSize() {
  const [useWindowSize, setUseWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  useEffect(() => {
    window.addEventListener("resize", () => {
      setUseWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    });
  }, []);
  return useWindowSize;
}

export default useWindowSize;
