import React from "react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

const PersonalIntroduction = () => {
  const { ref: fullStackRef, inView: fullStackInView } = useInView({
    triggerOnce: true,
    threshold: 0.5, // Trigger when 50% of the element is visible
  });

  const { ref: csEngineerRef, inView: csEngineerInView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const { ref: iitianRef, inView: iitianInView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <div>
      {/* Full Stack Developer Section */}
      <div
        ref={fullStackRef}
        className={`relative min-h-screen flex flex-col md:flex-row justify-evenly items-center py-20 bg-slate-800 ${
          fullStackInView ? "animate-slide-in-left opacity-100" : "opacity-0"
        } transition-opacity duration-1000`}
      >
        <Image
          className={`rounded-3xl ${
            fullStackInView ? "animate-slide-in-left" : ""
          }`}
          src="/full-stack-dev.png" // Replace with your image
          width={500}
          height={500}
          alt="Full Stack Developer"
        />
        <div
          className={`text-white text-center md:text-left ${
            fullStackInView ? "animate-fade-in" : ""
          }`}
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
            I’m a{" "}
            <span className="text-yellow-500 text-7xl">
              Full Stack <br />
            </span>
            Web Developer
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl mt-4 max-w-lg">
            Creating seamless digital experiences and{" "}
            <span className="text-emerald-300 text-4xl">
              Transforming Ideas
            </span>{" "}
            into reality with cutting-edge technology.
          </p>
        </div>
      </div>

      {/* Computer Science Engineer Section */}
      <div
        ref={csEngineerRef}
        className={`relative min-h-screen flex flex-col md:flex-row justify-evenly items-center py-20 bg-zinc-900 ${
          csEngineerInView ? "animate-slide-in-left opacity-100" : "opacity-0"
        } transition-opacity duration-1000`}
      >
        <div
          className={`text-white text-center ${
            csEngineerInView ? "animate-fade-in" : ""
          }`}
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold bg-clip-text bg-gradient-to-r from-blue-400 via-green-400 to-teal-500">
            A{" "}
            <span className="text-yellow-400 text-7xl">
              Computer Science <br />
            </span>
            Engineer
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl mt-4 max-w-lg">
            Crafting solutions with{" "}
            <span className="text-pink-400 text-4xl">
              Precision and Innovation
            </span>
            , bridging the gap between Complex Systems and User Friendly
            Applications.
          </p>
        </div>
        <Image
          className={`rounded-3xl ${
            csEngineerInView ? "animate-slide-in-left" : ""
          }`}
          src="/code-flow.png"
          width={500}
          height={500}
          alt="Code Flow"
        />
      </div>

      {/* IITian Section */}
      <div
        ref={iitianRef}
        className={`relative min-h-screen flex flex-col md:flex-row-reverse justify-evenly items-center py-20 bg-gray-800 ${
          iitianInView ? "animate-slide-in-left opacity-100" : "opacity-0"
        } transition-opacity duration-1000`}
      >
        <div
          className={`text-white text-center ${
            iitianInView ? "animate-fade-in" : ""
          }`}
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold bg-clip-text bg-gradient-to-r from-orange-400 via-yellow-500 to-red-500">
            and an <span className="text-pink-500 text-7xl">IITian</span>
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl mt-4 max-w-lg">
            Embarking on a journey of{" "}
            <span className="text-green-300 text-4xl">
              Excellence and Discovery
            </span>
            , nurturing dreams into reality with the spirit of an IITian.
          </p>
        </div>
        <Image
          className={`rounded-3xl ${
            iitianInView ? "animate-slide-in-left" : ""
          }`}
          src="/iit-campus.png"
          width={800}
          height={800}
          alt="IIT Campus"
        />
      </div>
    </div>
  );
};

export default PersonalIntroduction;
