import { useState, useEffect } from "react";
// If not imported globally, you can import here:
// import "@/styles/animations.css";

const SplashScreen = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [animateOut, setAnimateOut] = useState(false);

  useEffect(() => {
    // 1) Wait 2 seconds to start the outro animation
    const introTimer = setTimeout(() => {
      setAnimateOut(true); // Trigger outro classes

      // 2) Wait for the outro animation to finish, then unmount
      const outroTimer = setTimeout(() => {
        setIsVisible(false);
      }, 3000); // match your .bounce-out-top / .text-blur-out animation duration

      return () => clearTimeout(outroTimer);
    }, 3000);

    return () => clearTimeout(introTimer);
  }, []);

  // If not visible, render nothing
  if (!isVisible) return null;

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-background space-y-4">
      {/* Logo Image */}
      <div
        className={`flex-shrink-0 ${animateOut ? "bounce-out-top" : "roll-in-left"
          }`}
      >
        <img
          src="/images/logoSingle.png"
          alt="SOOF Factoring Logo"
          className="w-36 h-36 md:w-48 md:h-48"
        />
      </div>

      {/* Company Name */}
      <div className="text-center">
        <h1
          className={`text-4xl md:text-7xl font-bold text-secondary ${animateOut ? "text-blur-out" : "tracking-in-expand"
            }`}
        >
          SOOF Factoring B.V.
        </h1>
      </div>
    </div>

  );
};

export default SplashScreen;
