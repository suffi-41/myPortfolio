// sections/About.jsx
import { motion } from "framer-motion";
import { ScrollDown } from "../components/ArrowScroll";

const About = () => {
  const skills = [
    "React",
    "Tailwind",
    "Node.js",
    "JavaScript",
    "Express",
    "AWS",
    "MongoDB",
  ];

  return (
    <section id="about" className="w-full py-20 px-4 bg-gray-800/50 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-4xl font-bold text-white mb-12 text-center">
            About Me
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center p-2">
            <motion.div
              className="relative group"
              initial={{ opacity: 0, x: -200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
            >
              <div className="absolute inset-0 bg-blue-500/20 rounded-xl transform rotate-3" />
              <img
                src="../../assets/media/mypic.jpg"
                alt="Profile"
                className="rounded-xl relative z-10 w-full h-auto"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
            >
              <div className="text-gray-300 text-lg space-y-5 mb-6">
                <p>
                  I'm a dedicated Full-Stack Developer with hands-on experience
                  in building modern, scalable web applications using the MERN
                  stack.
                </p>
                <p>
                  I specialize in creating clean user interfaces with React and
                  Tailwind CSS, and powerful backend services with Node.js,
                  Express, and MongoDB.
                </p>
                <p>
                  My passion lies in solving real-world problems through code —
                  whether it's crafting seamless user experiences on the
                  frontend or optimizing performance on the backend. I’m
                  constantly learning and adapting to new tools and frameworks
                  to stay ahead in the fast-evolving tech landscape.
                </p>
                <p>
                  From concept to deployment, I enjoy the full journey of
                  development and take pride in writing code that is efficient,
                  maintainable, and user-focused.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
        <div className="grid md:grid-cols-4 grid-cols-2 gap-4">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="flex items-center bg-gray-700/50 rounded-lg p-3"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="h-2 w-2 bg-blue-400 rounded-full mr-2" />
              <span className="text-gray-300">{skill}</span>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mt-40 flex items-start relative">
        <ScrollDown path="experience" />
      </div>
    </section>
  );
};

export default About;
