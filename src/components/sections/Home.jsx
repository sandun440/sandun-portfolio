import React, { useState, useEffect, useRef } from "react";
import { ChevronDown, Github, Linkedin } from "lucide-react";
import profilePic from "../../assets/profile.jpg";

/* ================= CURSOR NETWORK (DESKTOP + MOBILE) ================= */
const CursorNetwork = ({ pointCount = 250, connectDistance = 120 }) => {
  const canvasRef = useRef(null);
  const mouse = useRef({ x: null, y: null });
  const points = useRef([]);
  const isMobile = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      isMobile.current = window.innerWidth < 768;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const POINTS = isMobile.current ? 60 : pointCount;

    points.current = Array.from({ length: POINTS }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * (isMobile.current ? 0.2 : 0.6),
      vy: (Math.random() - 0.5) * (isMobile.current ? 0.2 : 0.6),
    }));

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw dots
      points.current.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.fillStyle = isMobile.current
          ? "rgba(59,130,246,0.35)"
          : "rgba(59,130,246,0.8)";

        ctx.beginPath();
        ctx.arc(p.x, p.y, isMobile.current ? 1.5 : 3, 0, Math.PI * 2);
        ctx.fill();
      });

      // Lines + mouse interaction (DESKTOP ONLY)
      if (!isMobile.current) {
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

          if (mouse.current.x !== null) {
            const dx = points.current[i].x - mouse.current.x;
            const dy = points.current[i].y - mouse.current.y;
            const dist = dx * dx + dy * dy;

            if (dist < connectDistance * connectDistance) {
              ctx.strokeStyle = "rgba(59,130,246,0.4)";
              ctx.beginPath();
              ctx.moveTo(points.current[i].x, points.current[i].y);
              ctx.lineTo(mouse.current.x, mouse.current.y);
              ctx.stroke();
            }
          }
        }
      }

      requestAnimationFrame(animate);
    };

    animate();

    const handleMouseMove = (e) => {
      if (!isMobile.current) {
        mouse.current.x = e.clientX;
        mouse.current.y = e.clientY;
      }
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

/* ================= HOME ================= */
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

  /* ---------- TYPEWRITER ---------- */
  useEffect(() => {
    const role = roles[currentRole];
    const speed = isDeleting ? 30 : 80;

    const timeout = setTimeout(() => {
      setDisplayedText((prev) =>
        isDeleting
          ? role.substring(0, prev.length - 1)
          : role.substring(0, prev.length + 1)
      );

      if (!isDeleting && displayedText === role) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && displayedText === "") {
        setIsDeleting(false);
        setCurrentRole((prev) => (prev + 1) % roles.length);
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentRole]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative px-4 sm:px-6 md:px-10 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden"
    >
      {/* Background */}
      <CursorNetwork />

      {/* CONTENT */}
      <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-20">
        {/* IMAGE */}
        <div className="relative group">
          <div
            className="w-72 h-72 sm:w-96 sm:h-96 md:w-[480px] md:h-[480px] rounded-full overflow-hidden cursor-pointer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-400 animate-spin-slow opacity-75" />
            <div className="absolute inset-1 rounded-full bg-slate-900" />
            <img
              src={profilePic}
              alt="Sandun Sameera"
              className={`absolute inset-2 w-[calc(100%-16px)] h-[calc(100%-16px)] object-cover rounded-full transition ${
                isHovered ? "scale-110" : ""
              }`}
            />
          </div>
        </div>

        {/* TEXT */}
        <div className="text-center md:text-left max-w-xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            <span className="text-blue-400">Hi, I'm</span>
            <br />
            <span className="text-white">Sandun Sameera</span>
          </h1>

          <div className="h-8 mb-6 text-blue-400 text-xl font-semibold">
            {displayedText}
            <span className="animate-pulse ml-1">|</span>
          </div>

          <p className="text-gray-400 mb-8">
            Software Engineering student at{" "}
            <span className="text-blue-400">
              The Open University of Sri Lanka
            </span>
            . Passionate about modern web & mobile development.
          </p>

          <div className="flex justify-center md:justify-start gap-4 mb-8">
            <a
              href="#projects"
              className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg text-white transition"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="border border-blue-400 px-6 py-3 rounded-lg text-blue-400 hover:bg-blue-500/10 transition"
            >
              Contact Me
            </a>
          </div>

          <div className="flex justify-center md:justify-start gap-6">
            <a href="https://github.com/sandun440" target="_blank">
              <Github className="hover:text-white transition" />
            </a>
            <a
              href="https://linkedin.com/in/sandun-sameera250"
              target="_blank"
            >
              <Linkedin className="hover:text-white transition" />
            </a>
          </div>
        </div>
      </div>

      <ChevronDown className="absolute bottom-6 text-gray-400 animate-bounce" />
    </section>
  );
};

export default Home;
