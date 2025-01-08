"use client";
import React from "react";
import Image from "next/image";

const SocialsSlider = () => {
  return (
    <>
      <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50 flex items-center justify-center slider">
        <div className="text-white text-4xl">
          Follow Me on{" "}
          <span className="text-red-500 text-3xl text-nowrap">Social Media</span>
        </div>
      </div>

      <div className="flex translate-y-16">
        <div className="relative min-h-screen w-1/3 bg-gray-900">
          <Image
            className="relative left-1/2 -translate-x-1/2 rounded-full mt-4"
            width={200}
            height={200}
            alt="profile"
            src="/profile.png"
          />

          <div className="w-[80%] left-1/2 bg-gray-600 rounded-2xl self-center mt-4 ml-12">
            <p className="text-xl sm:text-3xl md:text-2xl text-center text-white mx-4 mt-2">
              Connect with me on{" "}
              <span className="text-red-500 text-3xl text-nowrap">Social Media</span>!
            </p>
            <p className="mx-4 my-4 pb-8 text-white">
              Feel free to reach out to me through these platforms! I'm always
              happy to connect with fellow enthusiasts and professionals. Let's
              collaborate, share ideas, or simply chat about technology,
              learning, and more.
            </p>
          </div>
        </div>

        <div className="min-h-screen w-2/3 bg-gray-950 overflow-x-auto snap-x snap-mandatory ml-4">
          <div className="flex w-[350%] h-full">
            <div className="w-[100vw] h-[85vh] bg-slate-700 text-white p-8 rounded-xl snap-start mx-2 mt-2">
              <h2 className="text-4xl  mb-4 text-amber-400">GitHub</h2>
              <p className="text-lg text-white">
                My GitHub profile is where you can find my open-source projects,
                contributions, and the code for various personal and academic
                projects.
              </p>
              <a
                href="https://github.com/DZDasherKTB"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 mt-2"
              >
                <Image
                  className="relative left-[30%] mt-20 floating floating-delay-2s invert"
                  width={200}
                  height={200}
                  alt="profile"
                  src="/github.svg"
                />
              </a>
            </div>

            <div className="w-[100vw] h-[85vh] bg-slate-800 text-white p-8 rounded-xl snap-start mx-2 mt-2">
              <h2 className="text-4xl text-amber-400 mb-4">LinkedIn</h2>
              <p className="text-lg text-white">
                Connect with me professionally on LinkedIn to discuss career
                opportunities, share knowledge, and explore potential
                collaborations.
              </p>
              <a
                href="www.linkedin.com/in/dashpreet-singh-218403321"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 mt-2"
              >
                <Image
                  className="relative left-[30%] mt-20 floating floating-delay-3s invert"
                  width={200}
                  height={200}
                  alt="profile"
                  src="/linkd.svg"
                />
              </a>
            </div>
            <div className="w-[100vw] h-[85vh] bg-slate-800 text-white p-8 rounded-xl snap-start mx-2 mt-2">
              <h2 className="text-4xl text-amber-400 mb-4">Gmail</h2>
              <p className="text-lg text-white">
                For any inquiries or professional communication, feel free to
                drop me an email. I’m always open to discussing projects,
                opportunities, or collaborations.
              </p>
              <a
                href="mailto:2024ucs0087@iitjammu.ac.in"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 mt-2"
              >
                <Image
                  className="relative left-[30%] mt-20 floating floating-delay-1s invert"
                  width={200}
                  height={200}
                  alt="profile"
                  src="/gmail.svg"
                />
              </a>
            </div>
            <div className="w-[100vw] h-[85vh] bg-slate-900 text-white p-8 rounded-xl snap-start mx-2 mt-2">
              <h2 className="text-4xl text-amber-400 mb-4">Twitter</h2>
              <p className="text-lg text-white">
                Follow me on Twitter to stay updated on tech trends, my
                projects, and some personal musings on technology and coding.
              </p>
              <a
                href="https://x.com/Dashpreet2006"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 mt-2"
              >
                <Image
                  className="relative left-[30%] mt-20 floating invert floating-delay-2s"
                  width={200}
                  height={200}
                  alt="profile"
                  src="/twitter2.png"
                />
              </a>
            </div>

            <div className="w-[100vw] h-[85vh] bg-slate-700 text-white p-8 rounded-xl snap-start mx-2 mt-2">
              <h2 className="text-4xl text-amber-400 mb-4">Instagram</h2>
              <p className="text-lg text-white">
                Check out my Instagram for some behind-the-scenes of my
                projects, events, and more personal moments that I share with my
                followers.
              </p>
              <a
                href="https://instagram.com/dz_dasherktb"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 mt-2"
              >
                <Image
                  className="relative left-[30%] mt-20 floating invert floating-delay-3s"
                  width={180}
                  height={180}
                  alt="profile"
                  src="/insta.svg"
                />
              </a>
            </div>

            <div className="w-[100vw] h-[85vh] bg-slate-900 text-white p-8 rounded-xl snap-start mx-2 mt-2">
              <h2 className="text-4xl text-amber-400 mb-4">YouTube</h2>
              <p className="text-lg text-white">
                Explore my YouTube channel where I post tutorials, coding
                guides, and some fun tech-related content.
              </p>
              <a
                href="https://www.youtube.com/@DZ_DasherKTB"
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-400 mt-2"
              >
                <Image
                  className="relative left-[25%] mt-20 floating invert floating-delay-2s"
                  width={240}
                  height={240}
                  alt="profile"
                  src="/youtube.png"
                />
              </a>
            </div>

            <div className="w-[100vw] h-[85vh] bg-slate-700 text-white p-8 rounded-xl snap-start mx-2 mt-2">
              <h2 className="text-4xl text-amber-400 mb-4">Discord</h2>
              <p className="text-lg text-white">
                Join my Discord server to chat about tech, programming, and
                upcoming projects. We can also collaborate on interesting ideas!
              </p>
              <a
                href="https://discord.com/users/750950687512199239"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 mt-2"
              >
                <Image
                  className="relative left-[30%] mt-20 floating invert floating-delay-1s"
                  width={200}
                  height={200}
                  alt="profile"
                  src="/discord.png"
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .slider {
          animation: slideIn 2s ease-out forwards;
        }

        @keyframes slideIn {
          0% {
            transform: translateX(-100%);
          }
          50% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </>
  );
};

export default SocialsSlider;
