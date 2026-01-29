import { useEffect, useState } from "react";
import { FaDownload } from "react-icons/fa";
import navBarCv from "/SandunSameera_CV.pdf";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <>
      {/* Animated background particles */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-10 left-1/4 w-32 h-32 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-20 right-1/3 w-24 h-24 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-xl animate-pulse delay-700"></div>
        <div className="absolute top-32 left-1/2 w-20 h-20 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
      </div>

      <nav
        className={`fixed top-0 w-full z-40 transition-all duration-500 ${
          scrolled
            ? "bg-[rgba(15,15,25,0.85)] backdrop-blur-xl border-b border-white/20 shadow-2xl"
            : "bg-[rgba(10,10,15,0.7)] backdrop-blur-lg border-b border-white/10 shadow-lg"
        }`}
      >
        {/* Liquid glass overlay effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-2 -left-4 w-16 h-16 bg-gradient-to-r from-blue-500/30 to-transparent rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute -top-1 right-20 w-12 h-12 bg-gradient-to-l from-purple-500/20 to-transparent rounded-full blur-xl animate-pulse delay-500"></div>
          <div className="absolute top-2 left-1/2 w-8 h-8 bg-gradient-to-r from-cyan-500/25 to-transparent rounded-full blur-lg animate-pulse delay-300"></div>
        </div>

        <div className="max-w-5xl mx-auto px-4 relative">
          <div className="flex justify-between items-center h-16">
            {/* Left - Logo with liquid effect */}
            <a
              href="#home"
              className="font-mono text-xl font-bold text-white relative group"
            >
              <span className="relative z-10">
                Sandun{" "}
                <span className="text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text animate-pulse">
                  Sameera
                </span>
              </span>
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>

            {/* Hamburger for Mobile with glass effect */}
            <div
              className="w-10 h-10 relative cursor-pointer z-50 md:hidden flex items-center justify-center rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 group"
              onClick={() => setMenuOpen((prev) => !prev)}
            >
              <div className="relative w-6 h-6 flex flex-col justify-center items-center">
                <div
                  className={`w-5 h-0.5 bg-white transition-all duration-300 absolute ${
                    menuOpen ? "rotate-45 translate-y-0" : "translate-y-[-4px]"
                  }`}
                ></div>
                <div
                  className={`w-5 h-0.5 bg-white transition-all duration-300 absolute ${
                    menuOpen ? "opacity-0 scale-0" : "opacity-100 scale-100"
                  }`}
                ></div>
                <div
                  className={`w-5 h-0.5 bg-white transition-all duration-300 absolute ${
                    menuOpen ? "-rotate-45 translate-y-0" : "translate-y-[4px]"
                  }`}
                ></div>
              </div>

              {/* Liquid glass hover effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-2">
              {navItems.map((item, index) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="relative px-4 py-2 text-gray-300 hover:text-white transition-all duration-300 group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <span className="relative z-10">{item.label}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                  <div className="absolute inset-0 bg-white/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm border border-white/10"></div>
                </a>
              ))}

              {/* Download CV Button with liquid glass effect */}
              <div className="ml-4 relative group">
                <a
                  href={navBarCv}
                  download="Sandun_Sameera_CV.pdf"
                  target="_blank"
                  className="relative z-10 bg-gradient-to-r from-blue-500 to-blue-600 text-white py-2 px-6 rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 text-sm font-medium flex items-center gap-2 backdrop-blur-sm border border-blue-400/30 shadow-lg hover:shadow-blue-500/25 hover:shadow-xl"
                >
                  <span>Download CV</span>
                  <FaDownload className="animate-bounce" />
                </a>

                {/* Liquid glass effects around button */}
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Additional liquid glass effects for page background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-black/20 to-transparent"></div>
      </div>
    </>
  );
};

export default Navbar;
