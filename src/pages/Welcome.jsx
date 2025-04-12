import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import bg from "../../public/assets/media/bg-23.avif";
import { ReactTyped } from "react-typed";

const WelcomeScreen = () => {
  return (
    <motion.div
      style={{
        backgroundImage: `url(${bg})`,
      }}
      className="fixed inset-0  flex items-center justify-center z-50 no-repeat  bg-cover bg-center "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
        className="text-center"
      >
        <h1 className="text-3xl md:text-6xl font-bold text-white mb-4">
          <ReactTyped
            strings={["Welcome to my portfolio"]}
            typeSpeed={40}
            backSpeed={50}
            loop={false}
          />
        </h1>
      </motion.div>
    </motion.div>
  );
};
export default WelcomeScreen;
