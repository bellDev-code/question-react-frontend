import { useEffect, useState } from "react";

const usePlatform = (screenSize) => {
  const [platform, setPlatform] = useState("desktop");

  useEffect(() => {
    if (screenSize.width <= 760) {
      setPlatform("mobile");
    } else {
      setPlatform("desktop");
    }
  }, [screenSize]);

  return platform;
};

export default usePlatform;
