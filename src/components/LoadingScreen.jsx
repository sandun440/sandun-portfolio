import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const LoadingScreen = ({ onComplete }) => {
  const [text, setText] = useState("");
  const [isDone, setIsDone] = useState(false);
  const [visibleLogs, setVisibleLogs] = useState([]);

  const fullTextMobile = "< Welcome... />";
  const fullTextDesktop = "< Welcome To My Portfolio... />";
  const [currentFullText, setCurrentFullText] = useState(fullTextDesktop);

  const logs = [
    "> Initializing interface...",
    "> Loading assets...",
    "> Connecting to portfolio server...",
    "> Running system checks...",
    "> Launching environment...",
    "> Done ✔️",
  ];

  // Detect device width
  useEffect(() => {
    if (window.innerWidth <= 640) {
      setCurrentFullText(fullTextMobile);
    } else {
      setCurrentFullText(fullTextDesktop);
    }
  }, []);

  // Typing main text
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(currentFullText.substring(0, index));
      index++;
      if (index > currentFullText.length) {
        clearInterval(interval);
        // Start showing logs one by one
        showLogsSequentially();
      }
    }, 90);

    return () => clearInterval(interval);
  }, [currentFullText]);

  // Sequential logs
  const showLogsSequentially = () => {
    let i = 0;
    const logInterval = setInterval(() => {
      setVisibleLogs((prev) => [...prev, logs[i]]);
      i++;
      if (i === logs.length) {
        clearInterval(logInterval);
        // Wait before fade-out
        setTimeout(() => {
          setIsDone(true);
          setTimeout(onComplete, 1000);
        }, 1000);
      }
    }, 600);
  };

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          key="loading"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="fixed inset-0 z-50 bg-[#030712] flex items-center justify-center overflow-hidden"
        >
          {/* Subtle scanlines */}
          <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,rgba(0,255,255,0.05)_0px,rgba(0,255,255,0.05)_1px,transparent_1px,transparent_2px)] pointer-events-none" />

          {/* Blue glow overlay */}
          <div className="absolute inset-0 bg-cyan-500/10 blur-3xl" />

          {/* Terminal window */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="relative border border-cyan-400/40 rounded-xl bg-[#0b132b]/60 backdrop-blur-md px-6 py-8 w-[90%] max-w-2xl shadow-[0_0_30px_#00ffff40] font-mono"
          >
            {/* Terminal header dots */}
            <div className="flex gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
              <div className="w-3 h-3 rounded-full bg-green-400"></div>
            </div>

            {/* Typing main header */}
            <div className="text-cyan-400 text-lg sm:text-2xl md:text-3xl font-semibold ">
              {text}
              <span className="animate-blink text-cyan-300 ml-1">|</span>
            </div>

            {/* Neon progress bar */}
            <div className="w-full h-2 mt-6 bg-cyan-900/40 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 shadow-[0_0_15px_#00ffff]"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 2, ease: "easeInOut" }}
              />
            </div>

            {/* Sequential logs */}
            <div className="mt-6 text-cyan-300/80 text-sm sm:text-base leading-relaxed">
              {visibleLogs.map((log, idx) => (
                <motion.p
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  className="font-light drop-shadow-[0_0_4px_#00ffff]"
                >
                  {log}
                </motion.p>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
