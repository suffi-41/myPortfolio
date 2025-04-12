import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { SiLeetcode } from "react-icons/si";
import { ReactTyped } from "react-typed";
import { ScrollDown } from "../components/ArrowScroll";

const Welcome = () => {
  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const animatedInformation = [
    "Welcome to my portfolio ",
    "Hi, I'M Mohd Sufiyan",
    "Full stack Web developer",
  ];

  return (
    <section
      id="home"
      className="min-h-screen bg-transparent flex items-center justify-center relative overflow-hidden"
    >
      {/* Floating background elements */}
      <motion.div
        className="absolute w-64 h-64 rounded-full bg-purple-500/10 blur-xl"
        initial={{ y: 0, x: -100, rotate: 0 }}
        animate={{ y: -50, x: -200, rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      //
      <motion.div
        className="absolute w-96 h-96 bg-purple-500/10 blur-xl rounded-lg"
        initial={{ y: 200, x: 100, rotate: 45 }}
        animate={{ y: -100, x: 200, rotate: 405 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      />
      <div className="container mx-auto  p-10 z-10">
        <div className="flex flex-col-reverse md:flex-row items-center  justify-between gap-8">
          {/* Text content */}
          <motion.div
            className="md:w-1/2 text-center md:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 whitespace-nowrap">
              <ReactTyped
                strings={animatedInformation}
                typeSpeed={40}
                backSpeed={50}
                loop
              />
            </h1>

            <motion.p
              className="text-xl md:text-2xl text-gray-300 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Full Stack Developer using MERN{" "}
              <small>(MongoDB, Express, React, & Node.js)</small>
            </motion.p>

            <div className="flex gap-4 justify-center md:justify-start">
              <motion.a
                href="#contact"
                className="px-6 py-3 whitespace-nowrap bg-blue-500 text-white rounded-full hover:bg-blue-600 flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get in Touch
              </motion.a>
              <motion.a
                href="../assets/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border whitespace-nowrap border-blue-500 text-blue-500 rounded-full hover:bg-blue-500/10 flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                download
              >
                Download CV
              </motion.a>
            </div>

            {/* Social links */}
            <motion.div
              className="flex gap-4 mt-8 justify-center md:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <a
                href="https://github.com/suffi-41"
                target="_blank"
                rel="noreferrer"
              >
                <FiGithub className="text-2xl text-gray-300 hover:text-blue-400 transition-colors" />
              </a>
              <a
                href="https://www.linkedin.com/in/mohd-sufiyan-76039823b/"
                target="_blank"
                rel="noreferrer"
              >
                <FiLinkedin className="text-2xl text-gray-300 hover:text-blue-400 transition-colors" />
              </a>
              <a href="mailto:mohdbinsufiyan@gamil.com">
                <FiMail className="text-2xl text-gray-300 hover:text-blue-400 transition-colors" />
              </a>
            </motion.div>
          </motion.div>

          {/* Image/Illustration */}
          <motion.div
            className="md:w-1/2  flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative w-64 h-64 md:w-96 md:h-96">
              <motion.div
                className="absolute inset-0 bg-blue-500/20 rounded-full blur-xl"
                variants={floatingVariants}
                animate="animate"
              />
              <motion.img
                src="../../assets/media/mypic.jpg" // Replace with your image path
                alt="Profile"
                className="relative z-10 rounded-full border-4 border-blue-500/30 w-full h-full object-cover"
                variants={floatingVariants}
                animate="animate"
              />
            </div>
          </motion.div>
        </div>
      </div>
      {/* Scroll indicator */}
      <ScrollDown path="about" />
    </section>
  );
};

export default Welcome;
