import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import CountUp from "react-countup";
import AboutPic from "../../assets/aboutPic.jpg";
import { FaLightbulb, FaClock, FaEye, FaUsers, FaArrowsAlt } from "react-icons/fa";
import { Education } from "./Education";

export const About = () => {
  const [activeTab, setActiveTab] = useState("frontend");

  const frontendSkills = [
    { name: "HTML", desc: "Semantic and accessible HTML5 markup", proficiency: 95 },
    { name: "CSS", desc: "Flexbox, Grid, animations, responsive design", proficiency: 90 },
    { name: "JavaScript", desc: "ES6+, async programming, DOM manipulation", proficiency: 95 },
    { name: "React", desc: "Experienced with React hooks, context, and router", proficiency: 90 },
    { name: "Next.js", desc: "SSR & static generation with Next.js", proficiency: 85 },
    { name: "TailwindCSS", desc: "Utility-first CSS for rapid UI design", proficiency: 80 },
  ];

  const backendSkills = [
    { name: "Node.js", desc: "Server-side JavaScript runtime environment", proficiency: 85 },
    { name: "Express.js", desc: "Node.js web framework", proficiency: 80 },
    { name: "MongoDB", desc: "NoSQL database management", proficiency: 75 },
    { name: "Python", desc: "Python scripting and backend frameworks", proficiency: 80 },
    { name: "PHP", desc: "Backend scripting & web development", proficiency: 70 },
  ];

  const softSkills = [
    { name: "Problem-solving mindset", icon: <FaLightbulb /> },
    { name: "Time management", icon: <FaClock /> },
    { name: "Attention to detail", icon: <FaEye /> },
    { name: "Collaborative team player", icon: <FaUsers /> },
    { name: "Adaptability", icon: <FaArrowsAlt /> },
  ];

  const achievements = [
    { label: "Projects Completed", count: 2 },
    { label: "Certifications", count: 2 },
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
            <img src={AboutPic} alt="Profile" className="object-cover w-full h-full" />
          </div>
        </div>

        {/* Title */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-center mb-8 sm:mb-10 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          About Me
        </h2>

        {/* About Text */}
        <p className="max-w-2xl text-center text-gray-300 text-base sm:text-lg mb-10 sm:mb-12 px-2 sm:px-4 leading-relaxed">
          I’m a passionate software engineer focused on building scalable web applications and crafting beautiful user experiences with clean code.
        </p>

        {/* Tabs for Skills */}
        <div className="flex justify-center space-x-4 sm:space-x-6 mb-8 flex-wrap">
          <button
            onClick={() => setActiveTab("softskill")}
            className={`px-4 sm:px-6 py-2 rounded-full font-semibold transition ${
              activeTab === "softskill"
                ? "bg-teal-500 text-white shadow-lg"
                : "bg-teal-500/20 text-teal-300 hover:bg-teal-500/40"
            }`}
          >
            Soft Skills
          </button>
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
          {activeTab === "softskill" ? (
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {softSkills.map((skill, idx) => (
                <li
                  key={idx}
                  className="flex items-center gap-3 px-5 py-3 bg-gradient-to-r from-green-400 to-teal-500 rounded-lg shadow-lg hover:scale-105 transform transition-all duration-300 cursor-default"
                >
                  <span className="text-white text-xl">{skill.icon}</span>
                  <span className="text-white font-semibold">{skill.name}</span>
                </li>
              ))}
            </ul>
          ) : (
            (activeTab === "frontend" ? frontendSkills : backendSkills).map(
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
        <Education />
      </RevealOnScroll>
    </section>
  );
};
