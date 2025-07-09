import { FaGithub } from "react-icons/fa";
import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>

          <div className="grid grid-cols-1 gap-6">
            {/* Crystal Beauty Clare Project */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">Crystal Beauty Clare Web App</h3>
              <p className="text-gray-400 mb-4">
                A full-stack web application designed for Crystal Beauty Clare — a modern beauty service platform. 
                It offers an intuitive interface for customers to explore services, buy products and manage profiles.
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "Vite", "Tailwind CSS", "JavaScript", "Express.js", "MongoDB"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-50 my-4">
                <a
                  href="https://cbc-frontend-xi.vercel.app/"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project →
                </a>
                <a
                  href="https://github.com/sandun440/cbc-frontend.git"
                  className="text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="opacity-70 text-lg" />
                  Github Link
                </a>
              </div>
            </div>

            {/* Movie Finder Project */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">Movie Finder</h3>
              <p className="text-gray-400 mb-4">
                A HTML/CSS-based movie search application that lets users find movies, view details, and explore trending films.
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {["HTML", "CSS", "JavaScript", "API"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-50 my-4">
                <a
                  href="https://sandun440.github.io/Movie-Finder/"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project →
                </a>
                <a
                  href="https://github.com/sandun440/Movie-Finder"
                  className="text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="opacity-70 text-lg" />
                  Github Link
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
