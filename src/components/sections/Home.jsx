import React, { useEffect, useRef, useState } from "react";
import { ChevronDown, Github, Linkedin } from "lucide-react";
import profilePic from "../../assets/profile.jpg";

export default function Home() {
  const canvasRef = useRef(null);
  const mouse = useRef({ x: null, y: null });
  const points = useRef([]);
  const isMobile = useRef(false);

  const roles = [
    "Software Engineering Student.",
    "Full Stack Developer.",
    "Web Developer.",
  ];

  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  /* ================= TYPEWRITER ================= */
  useEffect(() => {
    const current = roles[roleIndex];
    const speed = deleting ? 30 : 80;

    const timer = setTimeout(() => {
      setText((prev) =>
        deleting
          ? current.substring(0, prev.length - 1)
          : current.substring(0, prev.length + 1)
      );

      if (!deleting && text === current) {
        setTimeout(() => setDeleting(true), 1000);
      }

      if (deleting && text === "") {
        setDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [text, deleting, roleIndex]);

  /* ================= CURSOR NETWORK ================= */
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      isMobile.current = window.innerWidth < 768;
    };

    resize();
    window.addEventListener("resize", resize);

    const POINTS = isMobile.current ? 60 : 220;

    points.current = Array.from({ length: POINTS }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * (isMobile.current ? 0.2 : 0.6),
      vy: (Math.random() - 0.5) * (isMobile.current ? 0.2 : 0.6),
    }));

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      points.current.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.fillStyle = "rgba(59,130,246,0.4)";
        ctx.beginPath();
        ctx.arc(p.x, p.y, isMobile.current ? 1.5 : 2.5, 0, Math.PI * 2);
        ctx.fill();
      });

      if (!isMobile.current) {
        for (let i = 0; i < points.current.length; i++) {
          for (let j = i + 1; j < points.current.length; j++) {
            const dx = points.current[i].x - points.current[j].x;
            const dy = points.current[i].y - points.current[j].y;
            const dist = dx * dx + dy * dy;

            if (dist < 120 * 120) {
              ctx.strokeStyle = `rgba(59,130,246,${
                1 - Math.sqrt(dist) / 120
              })`;
              ctx.lineWidth = 0.8;
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

            if (dist < 120 * 120) {
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

    const move = (e) => {
      if (!isMobile.current) {
        mouse.current.x = e.clientX;
        mouse.current.y = e.clientY;
      }
    };

    const leave = () => {
      mouse.current.x = null;
      mouse.current.y = null;
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseleave", leave);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseleave", leave);
      window.removeEventListener("resize", resize);
    };
  }, []);

  /* ================= UI ================= */
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 px-6"
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0"
        style={{ pointerEvents: "none", zIndex: 0 }}
      />

      <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* IMAGE */}
        <div className="flex justify-center">
          <img
            src={profilePic}
            alt="Sandun Sameera"
            className="w-56 h-56 sm:w-72 sm:h-72 md:w-[420px] md:h-[420px] rounded-full object-cover border-4 border-blue-500/40 shadow-xl"
          />
        </div>

        {/* TEXT */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            <span className="text-blue-400">Hi, I'm</span>
            <br />
            <span className="text-white">Sandun Sameera</span>
          </h1>

          <p className="text-xl text-blue-400 font-semibold h-8">
            {text}
            <span className="animate-pulse">|</span>
          </p>

          <p className="mt-6 text-gray-400 max-w-lg">
            Software Engineering student at{" "}
            <span className="text-blue-400">
              The Open University of Sri Lanka
            </span>
            . Passionate about building modern web & mobile applications.
          </p>

          <div className="mt-8 flex justify-center md:justify-start gap-4">
            <a
              href="#projects"
              className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg text-white font-medium transition"
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

          <div className="mt-6 flex justify-center md:justify-start gap-6">
            <a href="https://github.com/sandun440" target="_blank">
              <Github className="text-gray-400 hover:text-white transition" />
            </a>
            <a
              href="https://linkedin.com/in/sandun-sameera250"
              target="_blank"
            >
              <Linkedin className="text-gray-400 hover:text-white transition" />
            </a>
          </div>
        </div>
      </div>

      <ChevronDown className="absolute bottom-6 text-gray-400 animate-bounce" />
    </section>
  );
}
