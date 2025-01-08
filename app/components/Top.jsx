"use client";
import React from "react";
import Image from "next/image";
import { Cog, Settings } from "lucide-react";
import { useState, useRef, useEffect } from "react";
const Top = () => {
  const [isFalling, setIsFalling] = useState(false);
  const [y, setY] = useState(-400);

  const [rotationAngle, setRotationAngle] = useState(0);
  const [isRotating, setIsRotating] = useState(false);
  const [center, setCenter] = useState({ x: 0, y: 0 });
  const initialMousePositionRef = useRef({ x: 0, y: 0 });
  const initialRotationRef = useRef(0);
  const sparks = [
    { x: -40, y: -40, size: "w-3 h-3", color: "bg-yellow-400", i: 1 },
    { x: 45, y: -40, size: "w-3 h-3", color: "bg-white", i: 2 },
    { x: -40, y: 40, size: "w-4 h-4", color: "bg-yellow-500", i: 3 },
    { x: 45, y: 40, size: "w-3 h-3", color: "bg-yellow-800", i: 4 },
    { x: -50, y: 10, size: "w-3 h-3", color: "bg-white", i: 5 },
    { x: 50, y: -10, size: "w-4 h-4", color: "bg-yellow-200", i: 6 },
  ];

  const sparks2 = [
    { x: 55, y: -45, size: "w-1 h-1", color: "bg-white", i: 2 },
    { x: 50, y: 50, size: "w-2 h-2", color: "bg-yellow-800", i: 4 },
    { x: -60, y: 5, size: "w-1 h-1", color: "bg-white", i: 5 },
  ];
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!isRotating) return;

      const currentMousePosition = { x: e.clientX, y: e.clientY };

      const deltaX = currentMousePosition.x - initialMousePositionRef.current.x;
      const deltaY = currentMousePosition.y - initialMousePositionRef.current.y;
      const angleChange = Math.atan2(deltaY, deltaX) * (180 / Math.PI);

      const newRotationAngle = initialRotationRef.current + angleChange;

      const normalizedAngle = (newRotationAngle + 360) % 360; 
      setRotationAngle(normalizedAngle);
    };

    const handleMouseUp = () => {
      setIsRotating(false);
    };

    if (isRotating) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
      document.body.style.userSelect = "none"; 
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      document.body.style.userSelect = ""; 
    };
  }, [isRotating]);

  const handleMouseDown = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCenter({ x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 });

    initialMousePositionRef.current = { x: e.clientX, y: e.clientY };
    initialRotationRef.current = rotationAngle;

    setIsRotating(true);
  };

  useEffect(() => {
    const updateY = () => {
      if (!isFalling) {
        setY((prevY) => {
          const updatedY = prevY + rotationAngle / 400; 

          if (prevY >= -250) {
            setIsFalling(true);
            return prevY; 
          }
          return updatedY;
        });
      }
    };

    updateY();
  }, [rotationAngle]);
  return (
    <>
      <div className="flex justify-end items-center min-h-screen bg-gradient-to-b from-black to-gray-900 relative">
        <Image
          src="/welcome.png"
          width={3000}
          height={3000}
          alt="chain"
          style={{ top: `${y}px` }}
          className={`element h-[30rem] w-[50rem] absolute left-[30%] z-20 ${
            isFalling ? "falling" : ""
          }`}
        />
        <div
          className={`rotating-text absolute left-[30%] top-48 flex ${
            y > -300 ? "opacity-0" : ""
          } transition-all`}
        >
          <h1 className={`letter text-xs p-0.5`}>R</h1>
          <h1 className={`letter text-xs p-0.5`}>O</h1>
          <h1 className={`letter text-xs p-0.5`}>T</h1>
          <h1 className={`letter text-xs p-0.5`}>A</h1>
          <h1 className={`letter text-xs p-0.5`}>T</h1>
          <h1 className={`letter text-xs p-0.5`}>E</h1>
          <h1 className={`letter text-xs p-1`}></h1>
          <h1 className={`letter text-xs p-0.5`}>M</h1>
          <h1 className={`letter text-xs p-0.5`}>E</h1>
        </div>
        <Image
          src="/arrow.png"
          width={3000}
          height={3000}
          alt="chain"
          className={`h-[9rem] w-[14rem] absolute left-[20%] top-[25%] ${
            y > -300 ? "opacity-0" : "glowing-image"
          } transition-all`}
        />
        <Image
          src="/bulb-off.png"
          width={3000}
          height={3000}
          alt="chain"
          className={`h-[10rem] w-[6rem] absolute left-[80%] top-[-15%] transition-all falling-object ${
            y >= -250 ? "block" : "hidden"
          }`}
        />
        <Image
          src="/bulb-on.png"
          width={3000}
          height={3000}
          alt="chain"
          className={`h-[10rem] w-[6rem] absolute left-[79%] top-[-15%] transition-all glowbulb opacity-0 ${
            y >= -250 ? "block" : "hidden"
          }`}
        />
        <Image
          src="/gear.png"
          width={3000}
          height={3000}
          alt="chain"
          className={`h-[10rem] w-[10rem] absolute left-[85%] top-[60%] transition-all rotamer`}
        />
        <div
          className={`text-4xl absolute translated left-[90%] top-[85%] text-nowrap transition-all ${
            y >= -250 ? "block" : "hidden"
          }`}
        >
          <h1>Dashpreet Singh</h1>
        </div>
        <Cog
          onMouseDown={handleMouseDown}
          className={`absolute top-[19%] left-[10%] w-32 h-32 cursor-pointer ${
            y >= -250 ? "shake" : ""
          } ${rotationAngle == 0 ? "glowing-image" : ""}`}
          style={{ transform: `rotate(${-rotationAngle}deg)` }}
        />
        <Cog
          onMouseDown={handleMouseDown}
          className={`absolute top-[60%] left-[24%] w-32 h-32 cursor-pointer  ${
            y >= -250 ? "delayed-animation shake" : ""
          } ${rotationAngle == 0 ? "glowing-image" : ""}`}
          style={{ transform: `rotate(${-rotationAngle + 70}deg)` }}
        />

        <div className="absolute w-48 h-48 mx-auto left-[18%] top-[50%]">
          {y >= -250 &&
            sparks.map(({ x, y, size, color, i }) => (
              <div
                key={i}
                className={`spark absolute ${size} rounded-full ${color} animate-spark`}
                style={{ "--x": `${x}px`, "--y": `${y}px`, "--i": i }}
              ></div>
            ))}
        </div>
        
        <Cog
          onMouseDown={handleMouseDown}
          className={`absolute top-1/3 left-[10%] w-64 h-64 cursor-pointer ${
            y >= -250 ? "shake" : ""
          } ${rotationAngle === 0 ? "glowing-image2" : ""}`}
          style={{ transform: `rotate(${rotationAngle}deg)` }}
        />
      </div>
      <div className="relative min-h-screen flex flex-col items-center py-20 bg-gray-900 text-white">
        <h2 className="text-4xl sm:text-5xl md:text-6xl animate-fade-in z-10">
          Hi, I am{" "}
          <span className="text-red-400 text-7xl font-bold">
            Dashpreet Singh
          </span>
        </h2>
        <p className="text-lg sm:text-xl md:text-2xl mt-4 text-center max-w-2xl z-10">
          <br />A passionate{" "}
          <span className="text-blue-400 text-4xl">Developer </span>
          and lifelong learner, exploring the infinite possibilities of the{" "}
          <span className="text-yellow-500 text-4xl"> Web and Beyond.</span>
        </p>
        <Image
          className="mt-10 animate-bounce z-0 top-20 relative"
          src="/developer.png"
          width={300}
          height={300}
          alt="Developer"
        />
      </div>
    </>
  );
};

export default Top;
