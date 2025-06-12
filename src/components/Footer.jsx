import {
  faGithub,
  faLinkedin,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";

const Footer = () => {
  
  const footerVariants = {
    hidden:{
      opacity:0,
      y:40
    },
    visible:{
      opacity:1,
      y:0,
      transition:{
        when:"beforeChildren",
        duration:0.8,
        ease:"easeOut",
        staggerChildren:0.1,
        delayChildren:0.2
      }
    }
  }

  const sectionVariants = {
    hidden:{
      opacity:0,
      y:30
    },
    visible:{
      opacity:1,
      y:0,
      transition:{
        duration:0.6,
        ease:"easeOut"
      }
    }
  }
  return (
    <> 

      <motion.footer className="px-[2rem] pb-10 text-white md:px-[4rem] lg:px-[6rem] xl:px-[9rem] 2xl:px-[12rem] py-[1rem] md:py-[3rem] "
      variants={footerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{once:true,amount:0.2}}
      >
        <motion.div className="xl:flex xl:items-baseline gap-4 xl:justify-between  "
        variants={sectionVariants}
        >
          <div className="footOne xl:w-1/2">
            <div className=" py-4 text-3xl md:text-4xl font-medium">Cocode</div>
            <p className="text-zinc-400 md:text-gray-500 md:text-lg xl:text-xl xl:w-2/3">
              Dive into the future of software development with us,
              transitioning from traditional coding to a more innovative,
              efficient, and streamlined approach
            </p>
            <div className="socialIcon py-6 md:py-7 flex gap-4 text-xl md:text-2xl  ">
              <FontAwesomeIcon className="cursor-pointer" icon={faGithub} />
              <FontAwesomeIcon className="cursor-pointer" icon={faXTwitter} />
              <FontAwesomeIcon className="cursor-pointer" icon={faLinkedin} />
            </div>
          </div>
          <div className="footTwo xl:w-1/2 flex flex-wrap lg:flex-nowrap gap-2">
            <div className="fOne w-[48%] text-sm md:text-base 2xl:text-lg text-gray-500 ">
              <h3 className=" text-zinc-200 py-2 text-base md:text-lg xl:text-xl 2xl:text-2xl font-medium">Home</h3>
              <p>Code</p>
              <p>Features</p>
              <p>Benefits</p>
              <p>Pricing</p>
            </div>
            <div className="w-[48%] text-sm md:text-base 2xl:text-lg text-gray-500  fTwo">
              <h3 className=" text-zinc-200 py-2 text-base md:text-lg  xl:text-xl 2xl:text-2xl font-medium">Company</h3>
              <p>FAQ</p>
              <p>About us</p>
              <p>Careers</p>
              <p>Blog</p>
            </div>
            <div className="w-[48%] text-sm md:text-base 2xl:text-lg text-gray-500  fThree">
              <h3 className=" text-zinc-200 py-2 text-base md:text-lg  xl:text-xl 2xl:text-2xl font-medium">Products</h3>
              <p>API</p>
              <p>Training</p>
              <p>Security</p>
              <p>Terms & conditions</p>
              <p>Privacy</p>
            </div>
            <div className="w-[48%] text-sm md:text-base 2xl:text-lg text-gray-500  fFour">
              <h3 className=" text-zinc-200 py-2 text-base md:text-lg xl:text-xl 2xl:text-2xl font-medium">
                Resources
              </h3>
              <p>Codespace</p>
              <p>Issues</p>
              <p>Discussions</p>
            </div>
          </div>
        </motion.div>

        <hr className="my-4 md:my-6 border-gray-700" />

        <motion.div className="text-xs md:text-sm xl:text-base 2xl:text-lg text-gray-700 md:text-gray-500 xl:flex xl:items-center gap-4 xl:justify-evenly"
        variants={sectionVariants}>
          <p className="text-sm md:text-base 2xl:text-xl text-zinc-400 "> 
            &copy;Copyright 2025 All rights reserved - Cocode
          </p>

          <p className="text-zinc-600 md:text-zinc-500  py-2">svg credits : </p>
          <ul className="flex flex-col md:flex-row gap-2">
            <a href="https://storyset.com/web">Web illustrations by Storyset</a>
            <a href="https://storyset.com/technology">Technology illustrations by Storyset</a>
            <a href="https://storyset.com/work">Work illustrations by Storyset</a>
          </ul>
        </motion.div>
      </motion.footer>
    </>
  );
};

export default Footer;
