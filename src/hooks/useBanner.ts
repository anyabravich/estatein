import { useState, useEffect } from "react";

const useBanner = () => {
  const [isBannerVisible, setIsBannerVisible] = useState(true);

  const handleViewBanner = () => {
    setIsBannerVisible(false);
    localStorage.setItem("banner-hidden", String(false));
  };

  useEffect(() => {
    const isBannerHidden = Boolean(localStorage.getItem("banner-hidden"));
    if (isBannerHidden) {
      setIsBannerVisible(!isBannerHidden);
    }
  }, []);

  return { isBannerVisible, handleViewBanner };
};

export default useBanner;
