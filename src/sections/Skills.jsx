import CircularProgress from "../components/CirculerProgress";
import LinearProgress from "../components/LinearProgress";
import { TiHtml5 } from "react-icons/ti";
import { IoLogoCss3 } from "react-icons/io5";
import { FaBootstrap, FaReact, FaNodeJs } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { DiJavascript1 } from "react-icons/di";
import { SiExpress, SiMysql,SiSocketdotio } from "react-icons/si";
import { BiLogoMongodb } from "react-icons/bi";
import { ScrollDown } from "../components/ArrowScroll";
import { motion } from "framer-motion";


export default function Skills() {
  return (
    <section className="overflow-hidden py-20 mt-10  bg-gray-800/50 relative" id="skills">
      <h2 className="text-center font-bold text-3xl text-white">My Skills</h2>
      <div className="w-full flex flex-wrap justify-around p-10">
        <motion.div
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="md:w-1/2 w-full order-1 md:order-none my-4 md:p-10"
        >
          <h2 className="text-xl text-center font-bold text-white">
            Technical skills for frontent developer
          </h2>
          <div className="flex flex-col justify-between  gap-2">
            <div>
              <TiHtml5 className="text-4xl text-red-500" />
              <LinearProgress value={90} />
            </div>
            <div>
              <IoLogoCss3 className="text-4xl text-blue-600" />
              <LinearProgress value={70} />
            </div>
            <div>
              <FaBootstrap className="text-4xl text-blue-800" />
              <LinearProgress value={87} />
            </div>
            <div>
              <RiTailwindCssFill className="text-4xl text-blue-400" />
              <LinearProgress value={76} />
            </div>
            <div>
              <DiJavascript1 className="text-4xl text-yellow-600" />
              <LinearProgress value={75} />
            </div>
            <div>
              <FaReact className="text-4xl text-blue-500" />
              <LinearProgress value={80} />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="  md:w-1/2 w-full m-auto order-2 md:order-none my-4"
        >
          <h2 className="text-xl text-center font-bold text-white">
            Professinal Skills
          </h2>
          <div className="flex flex-wrap justify-center items-center w-full my-4 ">
            <CircularProgress value={70} nameofSkill={"Problem Solving"} />
            <CircularProgress value={50} nameofSkill={"Communication"} />
            <CircularProgress value={60} nameofSkill={"Creativity"} />
            <CircularProgress value={50} nameofSkill={"Teamwork"} />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="  md:w-1/2 w-full m-auto my-4 md:p-10"
        >
          <h2 className="text-xl text-center font-bold text-white">
            Programming languages
          </h2>
          <div className="flex flex-wrap justify-center items-center w-full md:order-none order-4 my-4 gap-3 ">
            <CircularProgress value={70} nameofSkill={"C language"} />
            <CircularProgress value={50} nameofSkill={"C++"} />
            <CircularProgress value={45} nameofSkill={"Python"} />
            <CircularProgress value={30} nameofSkill={"Php"} />
            <CircularProgress value={60} nameofSkill={"MYSQl"} />
            <CircularProgress value={30} nameofSkill={"MongoDB"} />
            <CircularProgress value={80} nameofSkill={"JavaScript"} />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="md:w-1/2 w-full md:order-none order-3 md:p-10 my-4"
        >
          <h2 className="text-2xl text-center  px-2 shadow-md text-white font-bold">
            Technical skills for backend developer
          </h2>
          <div className="flex flex-col  gap-3 my-3 justify-between">
            <div>
              <FaNodeJs className="text-4xl text-green-600" />
              <LinearProgress value={50} />
            </div>
            <div>
              <SiExpress className="text-4xl text-green-700" />
              <LinearProgress value={70} />
            </div>
            <div>
              <BiLogoMongodb className="text-4xl text-green-900" />
              <LinearProgress value={40} />
            </div>
            <div>
              <SiMysql className="text-4xl text-blue-400" />
              <LinearProgress value={60} />
            </div>
            <div>
              <bold className="text-sm text-black text-white ">Rest API</bold>
              <LinearProgress value={75} />
            </div>
            <div>
              <SiSocketdotio className="text-2xl text-blue-500 mb-2" />
              <LinearProgress value={80} />
            </div>
          </div>
        </motion.div>
      </div>

      <ScrollDown path="projects" />
    </section>
  );
}
