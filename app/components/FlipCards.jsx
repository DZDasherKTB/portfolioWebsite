import React from "react";

const FlipCards = () => {
  const itemlist = [
    {
      extra: "w-64 h-64",
      frontColor: "bg-blue-500",
      backColor: "bg-red-500",
      front: "Multiple Languages",
      back: ["JavaScript", "HTML", "CSS", "Python", "C", "C++"],
      delay: 1
    },
    {
      extra: "w-96 h-96",
      frontColor: "bg-orange-600",
      backColor: "bg-yellow-500",
      front: "Multiple Frameworks & Tools",
      back: [
        "Express",
        "React",
        "Next.js",
        "Tailwind CSS",
        "Django",
        "Flask",
        "Pandas",
        "Selenium",
        "Requests",
        "BeautifulSoup (bs4)",
        "MongoDB",
        "PostgreSQL",
        "Git",
      ],
      delay:2
    },
    {
      extra: "w-64 h-64 -translate-y-12",
      frontColor: "bg-pink-600",
      backColor: "bg-yellow-300",
      front: "Multiple Projects",
      back: [
        "Project-Mitnick",
        "Video-Havetica",
        "VidAI: Short Video SaaS Solution",
        "TalentRecruiter",
      ],
      delay:0
    },
    {
      extra: "w-80 h-72 -translate-x-10 -translate-y-10",
      frontColor: "bg-emerald-500",
      backColor: "bg-yellow-500",
      front: "Multiple Interests",
      back: [
        "Traveling",
        "Photography",
        "Music",
        "Reading",
        "Gaming",
        "Cooking",
        "Technology",
        "Fitness",
        "Art",
        "Nature",
      ],
      delay:3
    },
    {
      extra: "w-96 h-80",
      frontColor: "bg-violet-600",
      backColor: "bg-pink-500",
      front: "Multiple Soft Skills",
      back: [
        "Communication",
        "Problem-Solving",
        "Teamwork",
        "Adaptability",
        "Time Management",
        "Leadership",
        "Critical Thinking",
        "Empathy",
        "Creativity",
        "Work Ethic",
      ],
      delay:4
    },
  ];
  return (
    <>
      <div className="flex flex-wrap justify-center items-center h-screen">
        {itemlist.map((items,index) => (
          <div key={index} className={`relative group perspective m-10 ${items.extra} floating floating-delay-${items.delay}s`}>
            <div className="relative w-full h-full transform-style preserve-3d transition-transform duration-500 hover:rotate-y-180">
              {/* Front Side */}
              <div
                className={`absolute w-full h-full ${items.frontColor} backface-hidden flex justify-center items-center rounded-xl`}
              >
                <h2 className="text-2xl font-bold">{items.front}</h2>
              </div>
              {/* Back Side */}
              <div
                className={`absolute w-full h-full ${items.backColor} backface-hidden transform rotate-y-180 flex justify-center items-center rounded-xl`}
              >
                <h2 className="text-xl font-bold">
                  <ul className="list-disc pl-5">
                    {items.back.map((prop,i) => (
                      <li key={i}>{prop}</li>
                    ))}
                  </ul>
                </h2>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default FlipCards;
