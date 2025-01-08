import React from "react";
import Image from "next/image";

const page = () => {
  return (
    <div className="flex relative items-center justify-center min-h-screen flex-col text-5xl">
      <h1 className="">Skills</h1>
      <Image
        className={`rounded-3xl inline `}
        src="/image.png"
        width={500}
        height={500}
        alt="Work in progress"
      />
    </div>
  );
};

export default page;
