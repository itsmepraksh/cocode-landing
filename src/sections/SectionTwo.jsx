import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPython } from "@fortawesome/free-brands-svg-icons";
import {
  faCodeCompare,
  faLaptopCode,
  faPeopleGroup,
} from "@fortawesome/free-solid-svg-icons";
import DeveloperActivityBroo from "../assets/Developer-activity-broo.svg";
import { motion } from "framer-motion";

const SectionTwo = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        when: "beforeChildren",
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <>
      <motion.div
        className="sectionTwo text-white px-[2rem] md:px-[4rem] lg:px-[6rem] xl:px-[9rem] 2xl:px-[12rem] py-[1rem] md:py-[3rem] flex flex-col md:flex-row md:gap-[2rem] 2xl:gap-0 items-baseline 2xl:items-center justify-evenly"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <hr className="text-gray-800 border-[0.1rem] w-full md:hidden " />
        <div className="partOne p-4 md:py-0 md:w-1/2 2xl:w-1/3 ">
          <div className="mininav capitalize flex justify-center md:justify-items-stretch items-center gap-[2rem] md:gap-0 uppercase text-xs md:text-base xl:text-lg text-zinc-400 font-medium">
            <a className="active:bg-blue-800 p-2 rounded">values</a>
            <a className="active:bg-blue-800 p-2 rounded">mission</a>
            <a className="active:bg-blue-800 p-2 rounded">vision</a>
          </div>
          <motion.img
            src={DeveloperActivityBroo}
            alt="Loving to coding"
            className="w-64 md:w-[30rem] h-64 md:h-[30rem] "
            variants={itemVariants}
          />
        </div>
        <div className="partTwo md:w-1/2 2xl:w-1/3 ">
          <motion.h3
            className="uppercase text-xs md:text-base xl:text-lg text-blue-500 font-medium"
            variants={itemVariants}
          >
            Why choose us
          </motion.h3>
          <motion.h1
            className="py-2 md:py-6 text-3xl md:text-4xl font-semibold"
            variants={itemVariants}  
          >
            We use experience and knowledge to make services better.
          </motion.h1>

          <div className="infoPoints py-6 flex flex-col md:flex-row md:flex-wrap md:items-center gap-4 md:gap-2">
            
            <motion.div
              className="info md:h-[10rem] md:w-[48%] flex flex-col md:items-center md:justify-center md:shrink-[0] gap-4 bg-gray-800 p-4 md:p-3 rounded "
              variants={itemVariants}
            >
              <FontAwesomeIcon
                className="text-5xl md:text-4xl font-thin "
                icon={faCodeCompare}
              />
              <p className="px-4 text-gray-400 text-center text-sm md:text-xs lg:text-sm xl:text-base 2xl:text-lg md:font-thin">
                Real-time collaborative coding using Websockets
              </p>
            </motion.div>

            <motion.div
              className="info md:h-[10rem] md:w-[48%] flex flex-col md:items-center md:justify-center md:shrink-[0] gap-4 bg-gray-800 p-4 md:p-3 rounded "
              variants={itemVariants}
            >
              <FontAwesomeIcon
                className="text-5xl md:text-4xl font-thin "
                icon={faLaptopCode}
              />
              <p className="px-4 text-gray-400 text-center text-sm md:text-xs lg:text-sm xl:text-base 2xl:text-lg md:font-thin">
                Live code execution, and output sharing
              </p>
            </motion.div>

            <motion.div
              className="info md:h-[10rem] md:w-[48%] flex flex-col md:items-center md:justify-center md:shrink-[0] gap-4 bg-gray-800 p-4 md:p-3 rounded "
              variants={itemVariants}
            >
              <FontAwesomeIcon
                className="text-5xl md:text-4xl font-thin "
                icon={faPython}
              />
              <p className="px-4 text-gray-400 text-center text-sm md:text-xs lg:text-sm xl:text-base 2xl:text-lg md:font-thin">
                Language support: Javascript, Python,etc
              </p>
            </motion.div>

            <motion.div
              className="info md:h-[10rem] md:w-[48%] flex flex-col md:items-center md:justify-center md:shrink-[0] gap-4 bg-gray-800 p-4 md:p-3 rounded "
              variants={itemVariants}
            >
              <FontAwesomeIcon
                className="text-5xl md:text-4xl font-thin "
                icon={faPeopleGroup}
              />
              <p className="px-4 text-gray-400 text-center text-sm md:text-xs lg:text-sm xl:text-base 2xl:text-lg md:font-thin">
                Ideal for teams, Interviews and hatcons
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default SectionTwo;
