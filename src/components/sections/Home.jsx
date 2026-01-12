import React, { useState, useEffect, useRef } from "react";
import { ChevronDown, Github, Linkedin } from "lucide-react";
import profilePic from "../../assets/profile.jpg";

// Cursor Network Component
const CursorNetwork = ({ pointCount = 250, connectDistance = 120 }) => {
  const canvasRef = useRef(null);
  const mouse = useRef({ x: null, y: null });
  const points = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();

    window.addEventListener("resize", resizeCanvas);

    // Initialize points
    points.current = Array.from({ length: pointCount }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.6,
      vy: (Math.random() - 0.5) * 0.6,
    }));

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Move and draw points
      points.current.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.fillStyle = "rgba(59,130,246,0.8)";
        ctx.beginPath();
        ctx.arc(p.x, p.y, 3, 0, Math.PI * 2);
        ctx.fill();
      });

      // Draw lines
      for (let i = 0; i < points.current.length; i++) {
        for (let j = i + 1; j < points.current.length; j++) {
          const dx = points.current[i].x - points.current[j].x;
          const dy = points.current[i].y - points.current[j].y;
          const dist = dx * dx + dy * dy;
          if (dist < connectDistance * connectDistance) {
            ctx.strokeStyle = `rgba(59,130,246,${
              1 - Math.sqrt(dist) / connectDistance
            })`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(points.current[i].x, points.current[i].y);
            ctx.lineTo(points.current[j].x, points.current[j].y);
            ctx.stroke();
          }
        }

        // Connect to mouse
        if (mouse.current.x !== null && mouse.current.y !== null) {
          const dx = points.current[i].x - mouse.current.x;
          const dy = points.current[i].y - mouse.current.y;
          const dist = dx * dx + dy * dy;
          if (dist < connectDistance * connectDistance) {
            ctx.strokeStyle = `rgba(59,130,246,${
              1 - Math.sqrt(dist) / connectDistance
            })`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(points.current[i].x, points.current[i].y);
            ctx.lineTo(mouse.current.x, mouse.current.y);
            ctx.stroke();
          }
        }
      }

      requestAnimationFrame(animate);
    };

    animate();

    const handleMouseMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };
    const handleMouseLeave = () => {
      mouse.current.x = null;
      mouse.current.y = null;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [pointCount, connectDistance]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0"
      style={{ pointerEvents: "none", zIndex: 0 }}
    />
  );
};

// Reveal on scroll animation
const RevealOnScroll = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div
      className={`transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      {children}
    </div>
  );
};

export const Home = () => {
  const roles = [
    "Software Engineering Student.",
    "Full Stack Developer.",
    "Web Developer.",
  ];

  const [currentRole, setCurrentRole] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const role = roles[currentRole];
    let typingSpeed = isDeleting ? 10 : 80;

    const timeout = setTimeout(() => {
      setDisplayedText((prev) =>
        !isDeleting
          ? role.substring(0, prev.length + 1)
          : role.substring(0, prev.length - 1)
      );

      if (!isDeleting && displayedText === role) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && displayedText === "") {
        setIsDeleting(false);
        setCurrentRole((prev) => (prev + 1) % roles.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentRole]);

  useEffect(() => {
    const generateParticles = () => {
      const newParticles = [];
      for (let i = 0; i < 30; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 6 + 2,
          delay: Math.random() * 4,
          duration: Math.random() * 4 + 3,
          color: ["blue", "purple", "cyan", "green", "pink"][
            Math.floor(Math.random() * 5)
          ],
        });
      }
      setParticles(newParticles);
    };
    generateParticles();
  }, []);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative px-4 sm:px-6 md:px-10 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden"
      onMouseMove={handleMouseMove}
      style={{
        background: `
          radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.1), transparent 50%),
          radial-gradient(circle at 80% 20%, rgba(139, 92, 246, 0.1), transparent 50%),
          radial-gradient(circle at 40% 80%, rgba(34, 197, 94, 0.1), transparent 50%),
          linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)
        `,
      }}
    >
      {/* Cursor Network Background */}
      <CursorNetwork />

      {/* Background particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className={`absolute rounded-full opacity-70 animate-pulse ${
            {
              blue: "bg-blue-400",
              purple: "bg-purple-400",
              cyan: "bg-cyan-400",
              green: "bg-green-400",
              pink: "bg-pink-400",
            }[particle.color]
          }`}
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            animationDelay: `${particle.delay}s`,
            animationDuration: `${particle.duration}s`,
            zIndex: 1,
            animation: `pulse ${particle.duration}s ease-in-out ${particle.delay}s infinite alternate, float ${
              particle.duration * 2
            }s ease-in-out ${particle.delay}s infinite`,
          }}
        />
      ))}

      {/* Main content */}
      <RevealOnScroll>
        <div className="flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-20 relative z-10 max-w-6xl mx-auto">
          {/* Profile picture */}
          <div className="relative group mt-18 px-4 sm:px-6 md:px-0 sm:mt-0">
            <div
              className="w-72 h-72 sm:w-96 sm:h-96 md:w-[480px] md:h-[480px] lg:w-[550px] lg:h-[550px] rounded-full overflow-hidden flex-shrink-0 relative md:left-[-40px] md:top-[60px] mx-auto md:mx-0 cursor-pointer"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-400 animate-spin-slow opacity-75" />
              <div className="absolute inset-1 rounded-full bg-slate-900" />
              <img
                src={profilePic}
                alt="Sandun Sameera"
                className={`absolute inset-2 w-[calc(100%-16px)] h-[calc(100%-16px)] object-cover rounded-full transition-all duration-500 ${
                  isHovered ? "scale-110 brightness-110" : ""
                }`}
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.nextSibling.style.display = "flex";
                }}
              />
              <div className="absolute inset-2 w-[calc(100%-16px)] h-[calc(100%-16px)] bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full flex items-center justify-center" style={{ display: "none" }}>
                <div className="text-white text-6xl font-bold">SS</div>
              </div>
              <div
                className={`absolute inset-2 rounded-full bg-blue-500/20 flex items-center justify-center transition-all duration-300 ${
                  isHovered ? "opacity-100" : "opacity-0"
                }`}
              >
                <div className="text-white text-center">
                  <div className="text-xl font-bold mb-2">Hello!</div>
                  <div className="text-sm">Let's connect</div>
                </div>
              </div>
            </div>
          </div>

          {/* Text content */}
          <div className="text-center md:text-left max-w-xl mx-auto md:mx-0">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight whitespace-nowrap">
              <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                Hi, I'm
              </span>
              <br />
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Sandun Sameera
              </span>
            </h1>

            <div className="mb-8 h-8 flex items-center justify-center md:justify-start">
              <span className="text-gray-400 text-xl mr-2">I'm a</span>
              <span className="text-blue-400 text-xl font-semibold min-w-[200px] text-left whitespace-nowrap">
                {displayedText}
                <span className="animate-blink ml-1">|</span>
              </span>
            </div>

            <p className="text-gray-400 text-base sm:text-lg mb-8 leading-relaxed">
              passionate and dedicated Software Engineering student at
              <br />
              <span className="text-blue-400 font-medium">
                {" "}
                The Open University of Sri Lanka
              </span>
              . I enjoy building creative and practical software solutions,
              especially in web and mobile development.
            </p>

            <div className="flex justify-center md:justify-start space-x-4 mb-8">
              <a
                href="#projects"
                className="group relative bg-gradient-to-r from-blue-500 to-cyan-400 text-white py-3 px-6 rounded-lg font-medium transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] hover:-translate-y-1"
              >
                <span className="relative z-10">View Projects</span>
              </a>
              <a
                href="#contact"
                className="group relative border border-blue-500/50 text-blue-400 py-3 px-6 rounded-lg font-medium transition-all duration-300 hover:bg-blue-500/10 hover:scale-105"
              >
                Contact Me
              </a>
            </div>

            <div className="flex justify-center md:justify-start space-x-6">
              {[
                {
                  icon: Github,
                  href: "https://github.com/sandun440",
                  label: "GitHub",
                },
                {
                  icon: Linkedin,
                  href: "https://linkedin.com/in/sandun-sameera250",
                  label: "LinkedIn",
                },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-slate-800/50 backdrop-blur-sm border border-slate-700 flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-500/20 hover:border-blue-500/50 transition-all duration-300 hover:scale-110"
                  title={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </RevealOnScroll>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 animate-bounce z-10">
        <ChevronDown size={24} />
      </div>
    </section>
  );
};

export default Home;