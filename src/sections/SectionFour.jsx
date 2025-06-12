import { motion } from "framer-motion";
import CtaBtn from "../components/CtaBtn";

const SectionFour = () => {
  const containerVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        when: "beforeChildren",
        duration: 0.7,
        ease: "easeOut",
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };
  return (
    <>
      <motion.div
        className="sectionFour  text-center text-white px-[2rem] md:px-[4rem] lg:px-[6rem] xl:px-[9rem] 2xl:px-[12rem] py-[1rem] md:py-[3rem] "
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
      >
        <motion.p
          className="text-2xl md:text-3xl md:border-1 md:p-3 md:px-10 md:rounded md:inline-block uppercase font-medium py-2"
          variants={itemVariants}
        >
          join us
        </motion.p>
        <motion.h1
          className=" text-zinc-300 md:text-2xl xl:text-3xl md:my-4 xl:my-6"
          variants={itemVariants}
        >
          Master the skills today
        </motion.h1>
        <motion.p
          className=" px-7  text-zinc-500 md:text-lg xl:text-2xl"
          variants={itemVariants}
        >
          keep getting in touch with us for more works in the future
        </motion.p>

        <motion.div variants={itemVariants}>
          <CtaBtn text="start for free" />
        </motion.div>
      </motion.div>
    </>
  );
};

export default SectionFour;
