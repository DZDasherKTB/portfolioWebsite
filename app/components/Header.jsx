import { Button } from '@/components/ui/button';
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { BicepsFlexed, BookMarked, Cable, UserSearch, } from 'lucide-react';
const Header = () => {
  const headerButtons = [
    {
      id: 1,
      name: "About Me",
      link: "/about",
      icon: BicepsFlexed,
    },
    {
      id: 2,
      name: "Socials",
      link: "/social",
      icon: Cable,
    },
    {
      id: 3,
      name: "Skills",
      link: "/skills",
      icon: BookMarked
    },
    {
      id: 4,
      name: "Contact Me",
      link: "/contact",
      icon: UserSearch,
    },
  ];
  return (
    <div className="fixed top-0 pt-1 left-0 w-full p-2 px-5 flex items-center justify-between shadow-md shadow-slate-900  z-50 bg-black">
      <div className="flex  justify-start gap-3 items-center center ml-5">
        <Image
          className="rounded-full shadow-slate-700 shadow-sm"
          src="/profile.png"
          width={50}
          height={50}
          alt="profile"
        />
        <h1 className="">
          <Link
            href="/"
            className="hidden sm:block lg:block xl:block md:block text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-500 text-lg"
          >
            Dashpreet Singh
          </Link>
        </h1>
      </div>
      <div className="flex justify-end gap-3 items-center mr-5">
        {headerButtons.map((item) => (
          <Link
            key={item.id}
            className="border-solid border-white"
            href={item.link}
          >
            <Button className="border-white text-white hover:bg-slate-700 transition-all">
              <item.icon />
              <span className="hidden sm:block">{item.name}</span>
            </Button>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Header