// sections/Projects.jsx
import { motion } from "framer-motion";
import { FiGithub } from "react-icons/fi";
import { ScrollDown } from "../components/ArrowScroll";

const projects = [
  {
    title: "Chat Web Application",
    description:
      "Full-stack chat applicaion platform with Html, Css, Javascript , Express.js , SQL & Sockect.io ",
    tech: ["Html", "Css", "Javascript", "Express.js", "SQL", "Sockect.io"],
    link: "#",
  },
  {
    title: "Hotel Managemet System",
    description:
      "A MERN stack Hotel Management System with modules for managers, receptionists, guest management, and room booking",
    tech: ["React", "Tailwind", "Express.js", "MongoDB", "Socket.io"],
    link: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4  ">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">
          Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -200 : 200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-gray-700/20 rounded-xl p-6 hover:bg-gray-700/40 "
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-white">
                  {project.title}
                </h3>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FiGithub className="text-2xl text-gray-400 hover:text-blue-400" />
                </a>
              </div>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="mt-40 flex items-start relative">
                    <ScrollDown path="contact" />
                  </div>
    </section>
  );
};

export default Projects;
