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
    <>
      {/* Background floating blobs */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-10 left-1/4 w-32 h-32 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-20 right-1/3 w-24 h-24 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-xl animate-pulse delay-700"></div>
        <div className="absolute top-32 left-1/2 w-20 h-20 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
      </div>

      <footer
        className="relative mt-16 bg-[rgba(15,15,25,0.85)] backdrop-blur-xl border-t border-white/20 shadow-2xl z-10"
        style={{ minHeight: "120px" }}
      >
        {/* Glass overlay floating gradients */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-2 -left-4 w-16 h-16 bg-gradient-to-r from-blue-500/30 to-transparent rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute -top-1 right-20 w-12 h-12 bg-gradient-to-l from-purple-500/20 to-transparent rounded-full blur-xl animate-pulse delay-500"></div>
          <div className="absolute top-2 left-1/2 w-8 h-8 bg-gradient-to-r from-cyan-500/25 to-transparent rounded-full blur-lg animate-pulse delay-300"></div>
        </div>

        <RevealOnScroll>
          <div className="max-w-5xl mx-auto px-4 py-5">
            {/* Main Footer Content */}
            <div className="flex flex-col md:flex-row justify-between items-center text-gray-300 mb-4">
              {/* Left Branding */}
              <div className="flex flex-col items-center md:items-start">
                <h3 className="text-white text-lg font-semibold mb-1 drop-shadow-lg">
                  Sandun <span className="text-blue-400">Sameera</span>
                </h3>
                <p className="text-sm drop-shadow-md">
                  © {new Date().getFullYear()} All rights reserved.
                </p>
              </div>

              {/* Right Social Icons */}
              <div className="flex space-x-6 mt-4 md:mt-0 text-xl">
                {[
                  {
                    icon: FaGithub,
                    href: "https://github.com/sandun440",
                    label: "GitHub",
                  },
                  {
                    icon: FaLinkedin,
                    href: "https://linkedin.com/in/sandun-sameera250",
                    label: "LinkedIn",
                  },
                  {
                    icon: FaFacebook,
                    href: "https://facebook.com/sandun.sameera.712714",
                    label: "Facebook",
                  },
                  {
                    icon: FaInstagram,
                    href: "https://instagram.com/sadun.sameera04",
                    label: "Instagram",
                  },
                ].map(({ icon: Icon, href, label }) => (
                  <a
                    key={href}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="p-3 rounded-xl bg-[rgba(255,255,255,0.1)] backdrop-blur-sm border border-white/20 hover:bg-[rgba(255,255,255,0.2)] hover:border-blue-400/50 hover:text-blue-400 hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] transition-all duration-300 hover:scale-110"
                  >
                    <Icon />
                  </a>
                ))}
              </div>
            </div>

            {/* Bottom Made By Credit */}
            <div className="border-t border-white/10 pt-3">
            </div>
          </div>

          {/* Back to Top Button */}
          <button
            onClick={scrollToTop}
            aria-label="Back to Top"
            className="fixed right-4 bottom-4 md:right-8 md:bottom-8 p-4 rounded-xl bg-gradient-to-r from-blue-500/30 to-cyan-400/30 backdrop-blur-md border border-white/30 shadow-lg hover:from-blue-500/50 hover:to-cyan-400/50 hover:border-blue-400/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] transition-all duration-300 hover:scale-110"
          >
            <FaArrowUp className="text-white" />
          </button>
        </RevealOnScroll>
      </footer>
    </>
  );
};

export default Footer;