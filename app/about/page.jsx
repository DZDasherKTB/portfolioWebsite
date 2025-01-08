"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
const Page = () => {
  const sliderRef = useRef(null);
  
    useEffect(() => {
      const handleWheel = (event) => {
        if (event.deltaY !== 0) {
          event.preventDefault();
  
          if (sliderRef.current) {
            const slideWidth =
              sliderRef.current.querySelector(".snap-start").offsetWidth+16;
            const scrollPosition = sliderRef.current.scrollLeft;
  
            const scrollDirection = event.deltaY > 0 ? 1 : -1;
  
            const targetPosition =
              Math.round(scrollPosition / slideWidth) * slideWidth +
              scrollDirection * slideWidth;
  
            sliderRef.current.scrollTo({
              left: targetPosition,
              behavior: "smooth",
            });
          }
        }
      };
  
      const slider = sliderRef.current;
  
      if (slider) {
        slider.addEventListener("wheel", handleWheel, { passive: false });
      }
  
      return () => {
        if (slider) {
          slider.removeEventListener("wheel", handleWheel);
        }
      };
    }, []);
  return (
    <>
      <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-100 z-50 flex items-center justify-center slider">
        <div className="text-white text-4xl">
          Welcome to My{" "}
          <span className="text-red-500 text-3xl">Portfolio</span>
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
              Hi! I am{" "}
              <span className="text-red-500 text-3xl">Dashpreet Singh</span>
            </p>
            <p className="mx-4 my-4 pb-8 text-white">
              I'm a dedicated computer science student with a strong interest in
              exploring various fields within the tech world. I'm currently
              focused on machine learning, data structures, and algorithms,
              while also enhancing my web development skills using technologies
              like Next.js, Supabase, and PostgreSQL. Balancing a rigorous
              academic schedule, I thrive on continuous learning and hands-on
              projects that help me grow and innovate.
            </p>
          </div>
        </div>

        <div ref ={sliderRef}className="min-h-screen w-2/3 bg-gray-950 overflow-x-auto snap-x snap-mandatory ml-4">
          <div className="flex w-[300%] h-full">
            {/* Page 1 */}
            <div className="w-[100vw] h-[85vh] bg-slate-700 text-white p-8 rounded-xl snap-start mx-2 mt-2">
              <h2 className="text-4xl text-white mb-4">Education</h2>
              <p className="text-lg text-white">
                I am currently a first-year student at IIT Jammu, where I am
                pursuing my degree in Computer Science. During my studies, I
                have developed a strong foundation in computer programming,
                algorithms, and data structures, as well as a keen interest in
                fields such as machine learning, cybersecurity, and web
                development.
              </p>

              <div className="mt-6">
                <h3 className="text-2xl text-white">Key Highlights:</h3>
                <ul className="text-lg text-white ml-6 list-disc">
                  <li>Strong focus on Data Structures and Algorithms (DSA).</li>
                  <li>
                    Exploring the applications of Machine Learning in real-world
                    scenarios.
                  </li>
                  <li>
                    Building projects using Next.js, Supabase, PostgreSQL, and
                    other web technologies.
                  </li>
                </ul>
              </div>
              <div
                className={`rotating-text absolute left-[80%] top-[80%] flex transition-all`}
              >
                <h1 className={`letter text-xs p-0.5`}>{"<"}</h1>
                <h1 className={`letter text-xs p-0.5`}>-</h1>
                <h1 className={`letter text-xs p-0.5`}>S</h1>
                <h1 className={`letter text-xs p-0.5`}>W</h1>
                <h1 className={`letter text-xs p-0.5`}>I</h1>
                <h1 className={`letter text-xs p-0.5`}>P</h1>
                <h1 className={`letter text-xs p-0.5 pr-2`}>E</h1>
                <h1 className={`letter text-xs p-0.5`}>-</h1>
                <h1 className={`letter text-xs p-0.5`}>{">"}</h1>
              </div>
            </div>

            {/* Page 2 */}
            <div className="w-[100vw] h-[85vh] bg-slate-800 text-white p-8 rounded-xl snap-start mx-2 mt-2">
              <div>
                <h2 className="text-4xl text-white mb-4">Projects</h2>
                <div>
                  <h3 className="text-2xl text-white">
                    1. VidAI SaaS Solution
                  </h3>
                  <p className="text-lg text-white">
                    VidAI is a cutting-edge SaaS solution that allows users to
                    generate AI-powered videos with custom prompts. The
                    generated videos come with captions, images, and audio. The
                    platform allows seamless video creation for various use
                    cases, from marketing to educational content.
                  </p>
                  <p className="text-white mt-2">
                    Technologies Used: NextJs, ExpressJs, Clerk, Supabase, Neon,
                    Drizzle, Bytedance
                  </p>
                  <a
                    href="https://github.com/username/project-link"
                    className="text-blue-400 mt-2"
                  ></a>
                </div>
                <div className="mt-6">
                  <h3 className="text-2xl text-white">
                    2. Job Posting Platform for Recruiters
                  </h3>
                  <p className="text-lg text-white">
                    A web application for recruiters to post jobs and manage
                    applicants. The platform allows recruiters to create
                    detailed job listings, review applicants' profiles, and
                    streamline the hiring process.
                  </p>
                  <p className="text-white mt-2">
                    Technologies Used: React, Express.js, MongoDB, JWT
                    Authentication
                  </p>
                  <a
                    href="https://github.com/username/project-link"
                    className="text-blue-400 mt-2"
                  ></a>
                </div>
                <div className="mt-6">
                  <div className="project-item">
                    <h3 className="text-2xl text-white">
                      3. Mitnick - Web Security Scanner
                    </h3>
                    <p className="text-xl text-white mt-2">
                      Developing a web scanner that evaluates API endpoints and
                      website security, detecting vulnerabilities like DoS and
                      DDoS, and providing a security score.
                    </p>
                    <p className="text-white mt-2">
                      Technologies Used: Python, Requests, Selenium, Bs4,
                      FastAPI
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-[100vw] h-[85vh] bg-slate-700 text-white p-8 rounded-xl snap-start mx-2 mt-2">
              <h2 className="text-4xl text-white mb-4">Skills</h2>

              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl text-white">Programming Languages</h3>
                  <ul className="text-lg text-white ml-6 list-disc">
                    <li>Python</li>
                    <li>C++</li>
                    <li>JavaScript</li>
                    <li>HTML/CSS</li>
                    <li>SQL</li>
                  </ul>

                  <h3 className="text-2xl text-white mt-6">Web Development</h3>
                  <ul className="text-lg text-white ml-6 list-disc">
                    <li>React</li>
                    <li>Next.js</li>
                    <li>Node.js</li>
                    <li>Express.js</li>
                    <li>Tailwind CSS</li>
                    <li>PostgreSQL</li>
                  </ul>

                  <h3 className="text-2xl text-white mt-6">Machine Learning</h3>
                  <ul className="text-lg text-white ml-6 list-disc">
                    <li>TensorFlow</li>
                    <li>Scikit-learn</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl text-white">Tools & Frameworks</h3>
                  <ul className="text-lg text-white ml-6 list-disc">
                    <li>Git/GitHub</li>
                    <li>Supabase</li>
                    <li>Clerk</li>
                    <li>Neon</li>
                  </ul>

                  <h3 className="text-2xl text-white mt-6">Soft Skills</h3>
                  <ul className="text-lg text-white ml-6 list-disc">
                    <li>Problem Solving</li>
                    <li>Time Management</li>
                    <li>Team Collaboration</li>
                    <li>Adaptability</li>
                    <li>Continuous Learning</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .slider {
          animation: slideIn 6s ease-out forwards;
        }

        @keyframes slideIn {
          0% {
            transform: translateX(0%);
          }
          20% {
            transform: translateX(33%);
          }
          40% {
            transform: translateX(33%);
          }
          60% {
            transform: translateX(-67%);
          }
          80% {
            transform: translateX(-67%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </>
  );
};

export default Page;
