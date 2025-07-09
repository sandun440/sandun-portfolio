import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = [
    "React",
    "Next.js",
    "JavaScript",
    "TailwindCSS",
    "HTML",
    "CSS",
  ];

  const backendSkills = ["Node.js", "Python", "MongoDB", "PHP", "Express.js"];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20 bg-gradient-to-b"
    >
      <RevealOnScroll>
        <div className="max-w-5xl w-full mx-auto px-6">
          <h2 className="text-4xl font-extrabold text-center mb-12 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            About Me
          </h2>

          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 shadow-lg transition-all hover:shadow-blue-500/20">
            <p className="text-gray-300 text-lg mb-8 leading-relaxed text-center">
              I’m a passionate software engineer focused on building scalable
              web applications and crafting beautiful user experiences with
              clean code.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Frontend */}
              <div className="bg-gradient-to-br from-blue-900/10 to-blue-500/5 p-6 rounded-xl transition-all hover:scale-[1.02] hover:shadow-blue-500/10">
                <h3 className="text-xl font-semibold text-blue-400 mb-4">
                  🚀 Frontend Skills
                </h3>
                <div className="flex flex-wrap gap-3">
                  {frontendSkills.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-blue-500/10 text-blue-300 px-4 py-1.5 rounded-full text-sm font-medium hover:bg-blue-500/20 hover:text-white transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Backend */}
              <div className="bg-gradient-to-br from-cyan-900/10 to-cyan-500/5 p-6 rounded-xl transition-all hover:scale-[1.02] hover:shadow-cyan-500/10">
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">
                  🧠 Backend Skills
                </h3>
                <div className="flex flex-wrap gap-3">
                  {backendSkills.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-cyan-500/10 text-cyan-300 px-4 py-1.5 rounded-full text-sm font-medium hover:bg-cyan-500/20 hover:text-white transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Education Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="md:col-span-2 p-6 rounded-xl bg-white/5 border border-white/10 shadow-md hover:shadow-cyan-400/20 transition-all">
              <h3 className="text-xl font-semibold text-cyan-300 mb-4">
                🎓 Education
              </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-3">
                <li>
                  <strong className="text-white">
                    Bachelor of Software Engineering
                  </strong>{" "}
                  – The Open University of Sri Lanka (2023 – Present)
                </li>
                <li>
                  <strong className="text-white">
                    Full-Stack Web Development (MERN) Certificate Course
                  </strong>{" "}
                  – SKYREK Academy (2023-2024)
                </li>
              </ul>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
