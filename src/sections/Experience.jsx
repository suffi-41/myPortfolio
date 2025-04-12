// sections/Experience.jsx
import { motion } from "framer-motion";
import { FiBriefcase } from "react-icons/fi";
import {ScrollDown} from "../components/ArrowScroll"

const experiences =[
  {
    company: "Self-Driven Projects",
    role: "Full Stack Developer",
    duration: "2023 - Present",
    description: "Developed full-stack applications (e.g., Hotel Management System, real-time chat apps) using the MERN stack, Tailwind CSS, and modern libraries like Framer Motion. Built RESTful APIs and integrated databases like MongoDB.",
  },
  {
    company: "Consultants (Internship)",
    role: "Frontend Web Developer Intern",
    duration: "August 2023",
    description: "Enhanced responsive UIs with React.js, fixed frontend bugs, and collaborated on real-time features using JavaScript and CSS frameworks.",
  },
  {
    company: "Consultants (Internship)",
    role: "Backend Web Developer Intern",
    duration: "July 2024 (Expected)",
    description: "Will work on backend systems, API integrations, and database optimization for web applications (details to be updated post-internship).",
  },
  {
    company: "Backend Developer Intern", // *Replace with actual company name
    role: "PHP Backend Developer Intern",
    duration: "45 Days (2023)",
    description: "Implemented PHP-based backend logic, managed MySQL databases, and handled form validation/session management for web applications.",
  }
]

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4 w-full">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">
          Experience
        </h2>
        <div className="relative">
          <div className="absolute left-8 md:left-1/2 h-full w-1 bg-gray-700/50" />
          {experiences.map((exp, index) => (
            <motion.div
              style={{ marginLeft: index % 2 === 0 ? 0 : "auto" }}
              key={index}
              className="relative mb-12 md:w-1/2 md:ml-8"
              initial={{ opacity: 0, x: index % 2 === 0 ? -200 : 200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
            >
              <div className="p-6 bg-gray-800 rounded-lg relative shadow-xl">
                <div className="absolute -left-8 top-6 w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center">
                  <FiBriefcase className="text-white text-2xl" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  {exp.role}
                </h3>
                <p className="text-blue-400 mb-2">{exp.company}</p>
                <p className="text-gray-400 mb-2">{exp.duration}</p>
                <p className="text-gray-300">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="mt-40 flex items-start relative">
              <ScrollDown path="skills" />
            </div>
    </section>
  );
};

export default Experience;
