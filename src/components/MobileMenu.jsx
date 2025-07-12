import { useEffect } from "react";
import { FaDownload, FaTimes } from "react-icons/fa";
import mobileCv from "../assets/CV/Sandun_Sameera_CV.pdf";

export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" }
  ];

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full h-screen z-50 transition-all duration-500 ease-in-out ${
        menuOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
    >
      {/* Liquid Glass Backdrop */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-gray-900/70 to-black/90 backdrop-blur-2xl">
        
        {/* Animated liquid particles */}
        <div className="absolute top-1/5 left-1/4 w-40 h-40 bg-gradient-to-r from-blue-500/25 to-purple-500/25 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 right-1/4 w-32 h-32 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-2xl animate-pulse delay-700"></div>
        <div className="absolute bottom-1/4 left-1/2 w-28 h-28 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/3 right-1/3 w-24 h-24 bg-gradient-to-r from-indigo-500/15 to-cyan-500/15 rounded-full blur-xl animate-pulse delay-500"></div>
        <div className="absolute bottom-1/3 left-1/3 w-20 h-20 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-full blur-lg animate-pulse delay-300"></div>
        
        {/* Floating glass shards */}
        <div className="absolute top-24 left-12 w-2 h-8 bg-gradient-to-b from-white/25 to-transparent rounded-full blur-sm animate-pulse delay-200"></div>
        <div className="absolute top-48 right-16 w-1 h-6 bg-gradient-to-b from-blue-300/30 to-transparent rounded-full blur-sm animate-pulse delay-600"></div>
        <div className="absolute bottom-40 left-20 w-1.5 h-5 bg-gradient-to-b from-purple-300/25 to-transparent rounded-full blur-sm animate-pulse delay-900"></div>
        <div className="absolute top-60 left-3/4 w-1 h-4 bg-gradient-to-b from-cyan-300/30 to-transparent rounded-full blur-sm animate-pulse delay-400"></div>
        
        {/* Liquid glass overlay patterns */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/3 to-transparent opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 via-transparent to-purple-500/5 opacity-50"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center px-6">
        
        {/* Enhanced Close Button */}
        <button
          onClick={() => setMenuOpen(false)}
          className="absolute top-8 right-8 w-12 h-12 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 group shadow-lg hover:shadow-white/10"
          aria-label="Close Menu"
        >
          <FaTimes className="text-lg group-hover:rotate-180 transition-transform duration-500" />
          <div className="absolute -inset-1 bg-gradient-to-r from-red-500/20 to-pink-500/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </button>

        {/* Navigation Links with Liquid Glass Effects */}
        <div className="flex flex-col items-center space-y-8">
          {navItems.map((item, index) => (
            <a
              key={item.href}
              href={item.href}
              onClick={handleLinkClick}
              className={`relative group text-3xl font-medium text-white transition-all duration-700 ${
                menuOpen 
                  ? "opacity-100 translate-y-0 scale-100" 
                  : "opacity-0 translate-y-12 scale-95"
              }`}
              style={{ 
                transitionDelay: menuOpen ? `${index * 150 + 200}ms` : '0ms' 
              }}
            >
              <span className="relative z-10 px-8 py-4 block">
                {item.label}
              </span>
              
              {/* Multi-layer liquid glass hover effects */}
              <div className="absolute -inset-6 bg-gradient-to-r from-blue-500/15 via-purple-500/15 to-cyan-500/15 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-700 blur-xl scale-110 group-hover:scale-100"></div>
              
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-lg"></div>
              
              <div className="absolute -inset-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg"></div>
              
              {/* Ripple effect */}
              <div className="absolute -inset-8 bg-gradient-to-r from-blue-400/8 to-purple-400/8 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-900 blur-2xl"></div>
            </a>
          ))}
        </div>

        {/* Enhanced Download CV Button */}
        <div className="mt-16 relative group">
          <a
            href = {mobileCv}
            download
            className={`relative z-10 bg-gradient-to-r from-blue-500 via-blue-600 to-purple-600 text-white py-4 px-12 rounded-2xl font-semibold text-lg transition-all duration-700 flex items-center gap-4 backdrop-blur-sm border border-blue-400/30 shadow-2xl hover:shadow-blue-500/30 hover:scale-105 ${
              menuOpen 
                ? "opacity-100 translate-y-0 scale-100" 
                : "opacity-0 translate-y-12 scale-95"
            }`}
            style={{ 
              transitionDelay: menuOpen ? '800ms' : '0ms' 
            }}
            onClick={handleLinkClick}
          >
            <span>Download CV</span>
            <FaDownload className="animate-bounce text-lg" />
          </a>
          
          {/* Multi-layer liquid glass effects */}
          <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/40 to-purple-500/40 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-400"></div>
          <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-600"></div>
          <div className="absolute -inset-6 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-800"></div>
        </div>

        {/* Liquid glass decorative elements */}
        <div className={`absolute bottom-20 left-1/2 transform -translate-x-1/2 transition-all duration-1000 ${
          menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
        style={{ transitionDelay: menuOpen ? '1000ms' : '0ms' }}>
          <div className="flex space-x-3">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="w-2 h-2 bg-gradient-to-r from-blue-400/40 to-purple-400/40 rounded-full animate-pulse blur-sm"
                style={{ animationDelay: `${i * 200}ms` }}
              ></div>
            ))}
          </div>
        </div>
      </div>

      {/* Additional liquid glass edge effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-blue-500/8 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-purple-500/8 to-transparent"></div>
        <div className="absolute top-0 left-0 h-full w-40 bg-gradient-to-r from-cyan-500/8 to-transparent"></div>
        <div className="absolute top-0 right-0 h-full w-40 bg-gradient-to-l from-pink-500/8 to-transparent"></div>
      </div>

      {/* Ambient light effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-radial from-blue-500/5 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-gradient-radial from-purple-500/5 to-transparent rounded-full blur-2xl"></div>
      </div>
    </div>
  );
};

export default MobileMenu;