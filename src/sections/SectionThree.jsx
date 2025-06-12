 import { motion } from "framer-motion";  
import LearningSVG from "../assets/Learning-js.svg";

const SectionThree = () => { 
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },  
    visible: {
      opacity: 1,
      y: 0,  
      transition: {
        when: "beforeChildren",  
        duration: 0.8,  
        ease: "easeOut",  
        staggerChildren: 0.15,  
        delayChildren: 0.2, 
      },
    },
  };

   
  const itemVariants = {
    hidden: { opacity: 0, y: 20 }, 
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },  
  };
 
  const languageCardVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 }, 
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,  
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <>
      <motion.div
        className="sectionThree text-white lg:flex md:items-center 2xl:justify-center px-[2rem] md:px-[4rem] lg:px-[6rem] xl:px-[9rem] 2xl:px-[12rem] py-[1rem] md:py-[3rem]"
        variants={containerVariants}  
        initial="hidden"  
        whileInView="visible"  
        viewport={{ once: true, amount: 0.3 }} 
      >
        <div className="boxOne lg:w-1/2 ">
          <motion.h1
            className="text-3xl md:text-4xl font-medium py-4"
            variants={itemVariants}  
          >
            Driven by Code. Defined by Quality.
          </motion.h1>
          <motion.p
            className="text-gray-500 py-2 xl:py-4 md:text-lg lg:text-xl "
            variants={itemVariants}  
          >
            " As a programming and coding service company, we commit to designing
            high-quality projects ever for all clients. "
          </motion.p>
          <div className="boxLanguages py-4 flex flex-wrap gap-4"> 
            <motion.div
              className="box w-[47%] bg-gray-800 p-4 rounded"
              variants={languageCardVariants}  
            >
              <h3 className="text-xl font-medium">Python</h3>
              <p className="text-gray-400 text-sm xl:text-base 2xl:text-lg md:font-light p-2">
                Loved by developers for its simplicity, power, and endless
                possibilities.
              </p>
            </motion.div>
            <motion.div
              className="box w-[47%] bg-gray-800 p-4 rounded"
              variants={languageCardVariants}
            >
              <h3 className="text-xl font-medium">Node.js</h3>
              <p className="text-gray-400 text-sm xl:text-base 2xl:text-lg md:font-light p-2">
                Powering fast, scalable apps with JavaScript on the server side.
              </p>
            </motion.div>
            <motion.div
              className="box w-[47%] bg-gray-800 p-4 rounded"
              variants={languageCardVariants}
            >
              <h3 className="text-xl font-medium">JavaScript</h3>
              <p className="px-4 text-gray-400 text-center text-sm md:text-xs lg:text-sm xl:text-base 2xl:text-lg md:font-thin">
                The heartbeat of the web — dynamic, interactive, and everywhere.
              </p>
            </motion.div>
            <motion.div
              className="box w-[47%] bg-gray-800 p-4 rounded"
              variants={languageCardVariants}
            >
              <h3 className="text-xl font-medium">Java</h3>
              <p className="px-4 text-gray-400 text-center text-sm md:text-xs lg:text-sm xl:text-base 2xl:text-lg md:font-thin">
                Robust, secure, and built to run anywhere — from enterprise to
                mobile.
              </p>
            </motion.div>
          </div>
        </div>
        <div className="boxTwo lg:w-1/2 2xl:w-[35%] ">
          <motion.img
            src={LearningSVG}
            className="w-full h-full"
            alt="Learning"
            variants={itemVariants}  
          />
        </div>
      </motion.div>
    </>
  );
};

export default SectionThree;