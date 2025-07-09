import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaArrowUp,
} from "react-icons/fa";
import { RevealOnScroll } from "../RevealOnScroll";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative mt-20 overflow-hidden">
      {/* Liquid Glass Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-white/10 to-white/5 backdrop-blur-xl border-t border-white/20 shadow-2xl">
        {/* Animated liquid bubbles */}
        <div className="absolute top-0 left-1/4 w-32 h-32 bg-blue-500/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-10 right-1/3 w-24 h-24 bg-cyan-400/15 rounded-full blur-lg animate-pulse animation-delay-1000"></div>
        <div className="absolute bottom-5 left-1/2 w-40 h-40 bg-purple-500/10 rounded-full blur-2xl animate-pulse animation-delay-2000"></div>
        
        {/* Flowing liquid effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer"></div>
      </div>

      {/* Glass reflection effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-white/5 pointer-events-none"></div>
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500/50 via-cyan-400/50 to-blue-500/50 blur-sm"></div>

      <RevealOnScroll>
        <div className="relative z-10 py-12">
          <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-gray-300 text-sm">
            {/* Left - Branding */}
            <div className="flex flex-col items-center md:items-start">
              <h3 className="text-lg font-semibold text-white mb-2 drop-shadow-lg">
                Sandun Sameera
              </h3>
              <p className="drop-shadow-md">© {new Date().getFullYear()} All rights reserved.</p>
            </div>

            {/* Right - Socials */}
            <div className="flex space-x-6 text-xl mt-6 md:mt-0">
              <a
                href="https://github.com/sandun440"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 hover:border-blue-400/50 hover:text-blue-400 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all duration-300 hover:scale-110"
              >
                <FaGithub />
              </a>
              <a
                href="https://linkedin.com/in/sandun-sameera250"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 hover:border-blue-400/50 hover:text-blue-400 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all duration-300 hover:scale-110"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://facebook.com/sandun.sameera.712714"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 hover:border-blue-400/50 hover:text-blue-400 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all duration-300 hover:scale-110"
              >
                <FaFacebook />
              </a>
              <a
                href="https://instagram.com/sadun.sameera04"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 hover:border-blue-400/50 hover:text-blue-400 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all duration-300 hover:scale-110"
              >
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Back to Top Button */}
          <button
            onClick={scrollToTop}
            className="absolute right-6 bottom-6 p-4 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-400/20 backdrop-blur-md border border-white/30 shadow-lg hover:from-blue-500/30 hover:to-cyan-400/30 hover:border-blue-400/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] transition-all duration-300 hover:scale-110 group"
            aria-label="Back to Top"
          >
            <FaArrowUp className="text-white group-hover:text-blue-300 transition-colors" />
          </button>
        </div>
      </RevealOnScroll>
    </footer>
  );
};

export default Footer;