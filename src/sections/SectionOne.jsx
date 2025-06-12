import { motion } from "framer-motion";
import CodingAmico from "../assets/Coding-amico.svg";

import CtaBtn from "../components/CtaBtn";

const SectionOne = () => {


  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type:'spring',
        stiffness:100,
        damping:10,
      },
    },
  };

  const imageVariants = {
    hidden:{opacity:0,x:100},
    visible:{opacity:1,x:0,transition:{type:"spring" , stiffness:80,damping:10,delay:0.5}}
  }

  return (
    <>
      <motion.div className="heroSection   text-white 2xl:flex 2xl:flex-col 2xl:items-center 2xl:gap-[4rem]  px-[2rem] md:px-[4rem] lg:px-[6rem] xl:px-[9rem] 2xl:[px-12rem] py-[4rem] xl:py-[6rem]"
      variants={containerVariants}
      initial= "hidden"
      animate="visible"
      >
        <motion.h1 className="text-5xl md:text-8xl xl:text-9xl leading-[1.1] xl:leading-[1.2] font-medium"
        variants={itemVariants}
        >
          Code <br className="lg:hidden" />
          Together. <br className="2xl:hidden" /> Live.
        </motion.h1>

        <div className="md:flex md:gap-2">
          <div className="  md:w-1/2  ">
            <motion.p className="py-[2rem] xl:py-[4rem] text-2xl md:text-3xl lg:text-4xl xl:text-6xl lg:leading-[1.3]"
            variants={itemVariants}
            >
              Real-time collaborative coding in your browser.
            </motion.p>
            <CtaBtn text="Start Coding Now" />
          </div>

          <div className="heroImg  md:w-1/2  ">
            <motion.img
              src={CodingAmico}
              className="w-72 lg:w-96 xl:w-[30rem] h-72 lg:h-96 xl:h-[30rem]"
              alt="coding illustration"
              variants={imageVariants}
            />
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default SectionOne;
