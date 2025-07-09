import { useEffect, useState } from "react";

export const LoadingScreen = ({ onComplete }) => {
  const [text, setText] = useState("");
  const fullTextMobile = "<Welcome/>";
  const fullTextDesktop = "<Welcome to my Portfolio/>";
  const [currentFullText, setCurrentFullText] = useState(fullTextDesktop);

  useEffect(() => {
    // Detect screen width on mount
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
    <div className="fixed inset-0 z-50 bg-black text-gray-100 flex flex-col items-center justify-center px-4">
      <div className="mb-4 text-2xl sm:text-3xl md:text-4xl font-mono font-bold text-center break-words">
        {text}
        <span className="animate-blink ml-1">|</span>
      </div>

      <div className="w-full max-w-[250px] h-[2px] bg-gray-800 rounded relative overflow-hidden">
        <div className="w-[40%] h-full bg-blue-500 shadow-[0_0_15px_#3b82f6] animate-loading-bar"></div>
      </div>
    </div>
  );
};
