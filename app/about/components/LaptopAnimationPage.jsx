"use client";
import React, { useEffect } from "react";

const LaptopAnimationPage = () => {
  useEffect(() => {
    const laptop = document.querySelector(".laptop");
    setTimeout(() => {
      laptop.classList.add("scale-out");
    }, 2000); // Starts scaling out after 2 seconds
  }, []);

  return (
    <div className="flex justify-center items-center h-screen bg-gray-900">
      <div className="laptop">
        <div className="screen">
          <div className="content">
            <h1 className="text-white text-4xl">Welcome to My Portfolio</h1>
          </div>
        </div>
        <div className="keyboard"></div>
      </div>
    </div>
  );
};

export default LaptopAnimationPage;
