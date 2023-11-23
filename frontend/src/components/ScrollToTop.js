import React, { useState, useEffect } from "react";
const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    // Show the button when the user scrolls down 200 pixels
    setIsVisible(scrollTop > 200);
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      className={`fixed bottom-4 right-4 bg-gray-500 rounded-full text-white h-10 text-2xl text-center justify-center items-center w-10 cursor-pointer ${
        isVisible ? 'block' : 'hidden'
      }`}
      onClick={scrollToTop}
    >
      &uarr;
    </div>
  );
};
export default ScrollToTopButton;
