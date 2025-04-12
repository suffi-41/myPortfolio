import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail, FiCode, FiHeart } from "react-icons/fi";
import { SiLeetcode } from "react-icons/si";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 pt-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold text-white flex items-center">
              <FiCode className="mr-2" />
              Mohd Sufiyan
            </h3>
            <p className="text-sm">
              Full-stack developer passionate about creating beautiful and
              functional web experiences
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/suffi-41"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiGithub className="text-2xl hover:text-blue-400 transition-colors" />
              </a>
              <a
                href="https://www.linkedin.com/in/mohd-sufiyan-76039823b/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiLinkedin className="text-2xl hover:text-blue-400 transition-colors" />
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold text-white">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: "Home", href: "#home" },
                { name: "About", href: "#about" },
                { name: "Experience", href: "#experience" },
                { name: "Skills", href: "#skills" },
                { name: "Projects", href: "#projects" },
                { name: "Contact", href: "#contact" },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-blue-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold text-white">Get in Touch</h3>
            <div className="space-y-2">
              <div className="flex items-center">
                <FiMail className="mr-2" />
                mohdbinsufiyan@gmail.com
              </div>
              <div className="flex items-center">
                <FiCode className="mr-2" />
                +91 6307874140
              </div>
              <div className="flex items-center">
                <FiHeart className="mr-2" />
                Hyderabad, India
              </div>
            </div>
          </motion.div>
        </div>

        {/* Copyright Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="border-t border-gray-800 mt-12 py-6 text-center"
        >
          <p className="text-sm">
            © {currentYear} Mohd Suifyan. Made with{" "}
            <FiHeart className="inline text-red-400" /> using React & Tailwind
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
