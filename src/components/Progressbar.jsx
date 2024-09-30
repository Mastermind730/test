"use client"; // -----

import React, { useEffect, useState } from "react";
// import "./ScrollProgressBar.css"; // Ensure the path is correct

const Progressbar = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollY = window.scrollY;

      const scrollPercent = (scrollY / (documentHeight - windowHeight)) * 100;
      setScrollPercentage(scrollPercent);
      console.log(scrollPercent);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      id="progress-container"
      style={{
        height: "4px",
        width: "100%",
        backgroundColor: "#d1dced",
        position: "fixed",
        top: "0",
        left: "0",
        right: "0",
      }}
    >
      <div
        className="progress-fill"
        style={{
          height: "100%",
          backgroundColor: "#0096FF",
          width: `${scrollPercentage}%`,
        }}
      ></div>
    </div>
  );
};

export default Progressbar;
