import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { SiUpwork } from "react-icons/si";
import ScrollProgess from "./ScrollProgess";

const Navbar = ({ value }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    {name:"Experience", href:"#experience"},
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" }
  ];

  const socialLinks = [
    { icon: <FiGithub />, href: "https://github.com/suffi-41" },
    {
      icon: <FiLinkedin />,
      href: "https://www.linkedin.com/in/mohd-sufiyan-76039823b/",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(value > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-gray-900/90 shadow-lg" : "bg-transparent"
      } backdrop-blur-lg shadow-lg`}
    >
      <ScrollProgess value={value} />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo with animated underline */}
          <motion.a
            href="#home"
            className="relative group"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-2xl font-bold text-white">Portfolio</span>
            <span className="absolute -bottom-1 left-0 w-0 h-1 bg-blue-400 transition-all group-hover:w-full" />
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                className="relative px-3 py-2 text-white hover:text-gray-200 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {link.name}
                <span className="absolute -bottom-1 left-1/2 w-0 h-1 bg-blue-400 transition-all group-hover:w-3/4 group-hover:left-1/4" />
              </motion.a>
            ))}
            <div className="flex space-x-4 ml-6 border-l pl-6 border-white/20">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-blue-400"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
            <motion.a
              href="#contact"
              className="ml-4 px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Hire Me
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden p-2 text-white hover:text-gray-200"
            onClick={() => setIsOpen(!isOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isOpen ? (
              <FiX className="h-6 w-6" />
            ) : (
              <FiMenu className="h-6 w-6" />
            )}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden absolute top-20 left-0 right-0 bg-gray-900/95 backdrop-blur-sm shadow-lg"
            >
              <div className="px-4 pt-2 pb-6 space-y-2">
                {navLinks.map((link) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    className="block px-4 py-3 text-white hover:bg-gray-800 rounded-lg"
                    onClick={() => setIsOpen(false)}
                    initial={{ x: -20 }}
                    animate={{ x: 0 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {link.name}
                  </motion.a>
                ))}
                <div className="pt-4 border-t border-white/20">
                  <div className="flex justify-center space-x-6">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-blue-400 p-2"
                        whileHover={{ scale: 1.1 }}
                      >
                        {social.icon}
                      </motion.a>
                    ))}
                  </div>
                  <motion.a
                    href="#contact"
                    className="block mt-4 w-full text-center px-6 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600"
                    onClick={() => setIsOpen(false)}
                  >
                    Get in Touch
                  </motion.a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
