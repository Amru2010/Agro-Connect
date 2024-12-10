import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useMousePosition } from "../../hooks/products/useMousePosition";
import { useNavigate } from "react-router-dom";
function useProgressiveImg(lowQualitySrc, highQualitySrc) {
  const [src, setSrc] = useState(lowQualitySrc);
  const navigate = useNavigate();
  useEffect(() => {
    const img = new Image();
    img.src = highQualitySrc;
    img.onload = () => {
      setSrc(highQualitySrc);
    };
  }, [highQualitySrc]);

  return [src, { blur: src === lowQualitySrc }];
}

function Hero({ scrollToCategories }) {
  const [src, { blur }] = useProgressiveImg(
    "/images/home-banner/home-compressed.webp",
    "/images/home-banner/home.webp"
  );

  const mousePosition = useMousePosition();

  const handleGetStarted = () => {
    scrollToCategories();
  };
  return (
    <section className="relative overflow-hidden h-screen flex items-center justify-center">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${src})`,
          filter: blur ? "blur(20px)" : "none",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent z-10" />

      <motion.div
        className="absolute inset-0 z-20"
        animate={{
          background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`,
        }}
      />

      <div className="relative z-30 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="backdrop-blur-md bg-white/10 p-8 rounded-2xl shadow-2xl"
        >
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white mb-4">
            Agro
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-rose-400 to-rose-700">
              Connect
            </span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 mb-8">
            Connecting Farmers and Consumers - Bringing Fresh Produce to Your
            Doorstep!
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={handleGetStarted}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-gradient-to-r from-rose-500 to-rose-700 text-white font-bold rounded-full text-lg transition duration-300 ease-in-out transform hover:shadow-lg"
          >
            Get Started
          </motion.button>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-20" />
    </section>
  );
}

export default Hero;
