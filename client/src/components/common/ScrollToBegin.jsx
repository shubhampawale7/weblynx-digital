// src/components/common/ScrollToBegin.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { animate } from "framer-motion";

const ScrollToBegin = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Replace window.scrollTo with Framer Motion's animate function
    // This gives us a much smoother, physics-based spring animation.
    const controls = animate(window.scrollY, 0, {
      type: "spring",
      damping: 20,
      stiffness: 100,
      onUpdate(value) {
        // This function runs on every frame of the animation
        window.scrollTo(0, value);
      },
    });

    // Cleanup function to stop the animation if the component unmounts mid-scroll
    return () => controls.stop();
  }, [pathname]);

  return null;
};

export default ScrollToBegin;
