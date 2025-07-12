import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import CountUp from "react-countup";
import AboutPic from "../../assets/aboutPic.jpg";

export const About = () => {
  const [activeTab, setActiveTab] = useState("frontend");

  const frontendSkills = [
    {
      name: "HTML",
      desc: "Semantic and accessible HTML5 markup",
      proficiency: 95,
    },
    {
      name: "CSS",
      desc: "Flexbox, Grid, animations, responsive design",
      proficiency: 90,
    },
    {
      name: "JavaScript",
      desc: "ES6+, async programming, DOM manipulation",
      proficiency: 95,
    },
    {
      name: "React",
      desc: "Experienced with React hooks, context, and router",
      proficiency: 90,
    },
    {
      name: "Next.js",
      desc: "SSR & static generation with Next.js",
      proficiency: 85,
    },
    {
      name: "TailwindCSS",
      desc: "Utility-first CSS for rapid UI design",
      proficiency: 80,
    },
  ];

  const backendSkills = [
    {
      name: "Node.js",
      desc: "Server-side JavaScript runtime environment",
      proficiency: 85,
    },
    { 
      name: "Express.js",
      desc: "Node.js web framework", 
      proficiency: 80 
    },
    { 
      name: "MongoDB", 
      desc: "NoSQL database management", 
      proficiency: 75 
    },
    {
      name: "Python",
      desc: "Python scripting and backend frameworks",
      proficiency: 80,
    },
    {
      name: "PHP",
      desc: "Backend scripting & web development",
      proficiency: 70,
    },
  ];

  const achievements = [
    { label: "Years of Experience", count: 2 },
    { label: "Projects Completed", count: 2 },
    { label: "Certifications", count: 1 },
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center justify-center py-16 md:py-20 bg-gradient-to-b text-white px-4 sm:px-6 lg:px-8"
    >
      <RevealOnScroll>
        {/* Profile Photo */}
        <div className="mb-10 sm:mb-12">
          <div className="mx-auto w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden shadow-lg transition-transform hover:scale-105 cursor-pointer">
            <img
              src={AboutPic}
              alt="Profile"
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* Title */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-center mb-8 sm:mb-10 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          About Me
        </h2>

        {/* About Text */}
        <p className="max-w-2xl text-center text-gray-300 text-base sm:text-lg mb-10 sm:mb-12 px-2 sm:px-4 leading-relaxed">
          I’m a passionate software engineer focused on building scalable web
          applications and crafting beautiful user experiences with clean code.
        </p>

        {/* Tabs for Skills */}
        <div className="flex justify-center space-x-4 sm:space-x-6 mb-8 flex-wrap">
          <button
            onClick={() => setActiveTab("frontend")}
            className={`px-4 sm:px-6 py-2 rounded-full font-semibold transition ${
              activeTab === "frontend"
                ? "bg-blue-500 text-white shadow-lg"
                : "bg-blue-500/20 text-blue-300 hover:bg-blue-500/40"
            }`}
          >
            Frontend
          </button>
          <button
            onClick={() => setActiveTab("backend")}
            className={`px-4 sm:px-6 py-2 rounded-full font-semibold transition ${
              activeTab === "backend"
                ? "bg-cyan-500 text-white shadow-lg"
                : "bg-cyan-500/20 text-cyan-300 hover:bg-cyan-500/40"
            }`}
          >
            Backend
          </button>
        </div>

        {/* Skills List */}
        <div className="max-w-3xl w-full px-2">
          {(activeTab === "frontend" ? frontendSkills : backendSkills).map(
            ({ name, desc, proficiency }, index) => (
              <div key={index} className="mb-6 group relative">
                <div className="flex justify-between mb-1 text-sm font-semibold text-gray-200 cursor-pointer">
                  <span>{name}</span>
                  <span>{proficiency}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-3">
                  <div
                    className={`bg-gradient-to-r ${
                      activeTab === "frontend"
                        ? "from-blue-400 to-blue-600"
                        : "from-cyan-400 to-cyan-600"
                    } h-3 rounded-full transition-all duration-700 ease-out`}
                    style={{ width: `${proficiency}%` }}
                  />
                </div>
                <div className="absolute left-1/2 -bottom-8 w-max px-3 py-1 text-xs text-white bg-black bg-opacity-75 rounded opacity-0 group-hover:opacity-100 pointer-events-none transform -translate-x-1/2 transition-opacity">
                  {desc}
                </div>
              </div>
            )
          )}
        </div>

        {/* Achievements */}
        <div className="flex flex-col sm:flex-row justify-center items-center sm:space-x-12 space-y-8 sm:space-y-0 mt-14 max-w-4xl w-full px-4">
          {achievements.map(({ label, count }, idx) => (
            <div key={idx} className="text-center">
              <CountUp
                end={count}
                duration={2}
                className="text-4xl sm:text-5xl font-bold text-gradient bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500"
              />
              <p className="mt-2 text-gray-300 font-medium">{label}</p>
            </div>
          ))}
        </div>

        {/* Education Timeline */}
        <section id="education" className="mt-20 max-w-4xl w-full px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-14 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Education & Certifications
          </h2>

          <div className="relative border-l-2 border-gray-700 pl-6 space-y-12">
            {/* Degree */}
            <div className="relative group">
              <span className="absolute -left-3 top-2 w-4 h-4 bg-blue-500 rounded-full ring-4 ring-gray-900 group-hover:scale-125 transition-transform" />
              <div className="bg-white/5 border border-white/10 rounded-lg p-5 sm:p-6 shadow-md hover:shadow-blue-500/10 transition-all duration-300">
                <h3 className="text-lg sm:text-xl font-semibold text-blue-400 mb-1 flex items-center gap-2">
                  🎓 Bachelor’s Degree
                </h3>
                <p className="text-white font-medium">
                  Bachelor of Software Engineering (Hons)
                </p>
                <p className="text-gray-400">
                  The Open University of Sri Lanka - Nawala.
                </p>
                <p className="text-sm text-blue-300 mt-1">2023 – Present</p>
                <span className="inline-block mt-3 px-3 py-1 text-xs text-blue-100 bg-blue-500/20 rounded-full">
                  Ongoing
                </span>
              </div>
            </div>

            {/* Certification */}
            <div className="relative group">
              <span className="absolute -left-3 top-2 w-4 h-4 bg-cyan-500 rounded-full ring-4 ring-gray-900 group-hover:scale-125 transition-transform" />
              <div className="bg-white/5 border border-white/10 rounded-lg p-5 sm:p-6 shadow-md hover:shadow-cyan-500/10 transition-all duration-300">
                <h3 className="text-lg sm:text-xl font-semibold text-cyan-400 mb-1 flex items-center gap-2">
                  🧑‍💻 Certification
                </h3>
                <p className="text-white font-medium">
                  <a
                    href="https://certificate.skyrek.com/certifcates/completion/z2do8ktmAlAb"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-4 hover:text-cyan-300 transition"
                  >
                    Full-Stack Web Development (MERN)
                  </a>
                </p>
                <p className="text-gray-400">SKYREK Academy</p>
                <p className="text-sm text-cyan-300 mt-1">2023 – 2024</p>
                <span className="inline-block mt-3 px-3 py-1 text-xs text-cyan-100 bg-cyan-500/20 rounded-full">
                  Completed
                </span>
              </div>
            </div>
          </div>
        </section>
      </RevealOnScroll>
    </section>
  );
};
