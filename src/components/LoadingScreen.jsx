import { useEffect, useState } from "react";

export const LoadingScreen = ({ onComplete }) => {
  const [text, setText] = useState("");
  const fullTextMobile = "< Welcome... />";
  const fullTextDesktop = "< Welcome To My Portfolio... />";
  const [currentFullText, setCurrentFullText] = useState(fullTextDesktop);

  useEffect(() => {
    if (window.innerWidth <= 640) {
      setCurrentFullText(fullTextMobile);
    } else {
      setCurrentFullText(fullTextDesktop);
    }
  }, []);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(currentFullText.substring(0, index));
      index++;

      if (index > currentFullText.length) {
        clearInterval(interval);
        setTimeout(() => {
          onComplete();
        }, 1000);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [currentFullText, onComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-black flex items-center justify-center px-6 sm:px-8">
      <div className="flex flex-col items-center justify-center text-gray-100 w-full max-w-2xl">
        <div className="mb-6 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-mono font-bold text-center leading-snug break-words">
          {text}
          <span className="animate-blink ml-1">|</span>
        </div>

        <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-[3px] bg-gray-800 rounded overflow-hidden relative">
          <div className="w-[40%] h-full bg-blue-500 shadow-[0_0_15px_#3b82f6] animate-loading-bar"></div>
        </div>
      </div>
    </div>
  );
};
