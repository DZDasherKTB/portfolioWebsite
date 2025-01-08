'use client'
import React from "react";
import Top from "./components/Top";
import PersonalIntroduction from "./components/PersonalIntroduction";
import FlipCards from "./components/FlipCards";
import WebLinks from "./components/WebLinks";
const WelcomePage = () => {
  
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <Top />

      <PersonalIntroduction />

      <div className="pt-64 pb-20 flex items-center justify-center bg-black text-white">
        <p className="text-xl sm:text-3xl md:text-3xl text-center">
          Coding imagination into reality,{" "}
          <span className="text-cyan-400 text-4xl">One Code</span> at a time.
        </p>
      </div>

      <FlipCards />

      {/* Closing Section */}
      <div className="pt-48 pb-32 flex items-center justify-center bg-black text-white">
        <p className="text-xl sm:text-3xl md:text-3xl text-center">
          Turning visions into reality,{" "}
          <span className="text-cyan-400 text-4xl">One Algorithm</span> at a
          time.
        </p>
      </div>

      <WebLinks />
      
    </div>
  );
};

export default WelcomePage;
