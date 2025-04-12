import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const LinearProgress = ({ value = 40 }) => {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === value) {
          clearInterval(interval);
          return value;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, value);
      });
    }, 100);
  }, []);
  return (
    <div className="w-full bg-gray-200 rounded-full h-3 relative flex">
      <motion.div
       initial={{ opacity: 0, width:0 }}
      whileInView={{ opacity: 1, width:`${progress}%`}}
      transition={{ delay: 0.2 }}
    
    
        className="bg-blue-600 h-3 rounded-full transition-all duration-500 ease-out "
       
      ></motion.div>
      <motion.small
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className=" flex items-end justify-center bg-gradient-to-r from-blue-500 text-sm font-bold to-purple-500 text-white p-5 w-8 h-6 relative bottom-10 rounded-sm right-8 align-middle"
        style={{
          clipPath:
            "polygon(0% 0%, 100% 0%, 100% 54%, 68% 61%, 75% 100%, 37% 59%, 1% 54%)",
        }}
      >
        {Math.floor(progress)}%
      </motion.small>
    </div>
  );
};

export default LinearProgress;
