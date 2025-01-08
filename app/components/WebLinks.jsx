import React from "react";
import Image from "next/image";
import Link from "next/link";
const WebLinks = () => {
  return (
    <>
      <div className="flex justify-center mb-20 mt-20">
        <Image
          className="rounded-full shadow-slate-700 shadow-sm"
          src="/profile.png"
          width={400}
          height={400}
          alt="profile"
        />
      </div>
      <div className="relative h-96 w-full mt-40 mb-40">
        {/* Top Left Box */}
        <Link href="/about">
          <div className="absolute top-0 text-gray-200 left-[30%] hover:cursor-pointer hover:bg-slate-700 hover:rotate-3 transition-all bg-slate-800 rounded-xl border-slate-700 border-3 transform -translate-x-1/2 -translate-y-1/2 py-16 px-16 sm:px-32 sm:py-24 md:py-36 md:px-52">
            <h1 className="absolute text-3xl -translate-x-1/2 -translate-y-1/2 top-16">
              View my{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-purple-500 text-5xl font-extrabold">
                Profile
              </span>
            </h1>
            <p className="mt-4 text-center text-lg text-gray-400 absolute -translate-x-1/2 -translate-y-1/2">
              Discover my projects, skills, and experiences.
            </p>
          </div>
        </Link>

        {/* Top Right Box */}
        <Link href="/social">
          <div className="absolute top-0 left-[70%] text-gray-200 hover:cursor-pointer hover:bg-slate-700 hover:rotate-3 transition-all bg-slate-800 rounded-xl border-slate-700 border-3 transform -translate-x-1/2 -translate-y-1/2 py-16 px-16 sm:px-32 sm:py-24 md:py-36 md:px-52">
            <h1 className="absolute  text-3xl -translate-x-1/2 -translate-y-1/2 top-16">
              Jump to{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-500 text-5xl font-extrabold">
                Socials
              </span>
            </h1>
            <p className="mt-4 text-center text-lg text-gray-400 absolute -translate-x-1/2 -translate-y-1/2">
              Follow me on Twitter, LinkedIn, and Instagram to stay updated.
            </p>
          </div>
        </Link>

        {/* Bottom Center Box */}
        <Link href="/contact-me">
          <div className="mb-20 absolute left-1/2 text-gray-200 top-[90%] hover:cursor-pointer hover:bg-slate-700 hover:rotate-3 transition-all transform -translate-x-1/2 -translate-y-1/2 bg-slate-800 rounded-xl border-slate-700 border-3 py-16 px-16 sm:px-32 sm:py-24 md:py-36 md:px-52">
            <h1 className="absolute  text-3xl -translate-x-1/2 -translate-y-1/2 top-16">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500 text-5xl font-extrabold">
                Reach
              </span>{" "}
              Out to me
            </h1>
            <p className="mt-4 text-center text-lg text-gray-400 absolute -translate-x-1/2 -translate-y-1/2">
              <br />
              Got a question or just want to say hi? Drop me a message and I'll
              get back to you as soon as possible.
            </p>
          </div>
        </Link>
      </div>
    </>
  );
};

export default WebLinks;
