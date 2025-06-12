import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isHidden, setisHidden] = useState(true);

  const toggleMenu = (e) => {
    setisHidden(!isHidden);
    // console.log(isHidden)
  };

  const menuVariants = {
    hidden : {opacity:0 , y:-20},
    visible : {opacity:100,y:0,transition:{duration:0.3 , ease:"easeOut"}},
    exit : {opacity:0,y:-20, transition:{duration:0.2, ease:"easeIn"}}
  }

  return (
    <>
      <div
        contentEditable={false}
        className="nav relative flex justify-between items-center  px-[2rem] md:px-[4rem] lg:px-[6rem] xl:px-[9rem] 2xl:px-[12rem] py-[1rem] md:py-[3rem] bg-gray-900 text-white"
      >
        <h2 className="font-normal text-3xl md:text-5xl lg:font-medium ">
          cocode
        </h2>
        <div className="navbar flex justify-evenly items-center gap-[2rem] ">
          <Link to="/home" className="hidden lg:inline  p-2 px-4  lg:text-xl xl:text-2xl">
            Home
          </Link>
          <Link to="/codespace" className="hidden lg:inline  p-2 px-4  lg:text-xl xl:text-2xl">
            Codespace
          </Link>
          <Link to="/about" className="hidden lg:inline  p-2 px-4  lg:text-xl xl:text-2xl">
            About
          </Link>
          <Link to="/login" className="hidden lg:inline  p-2 px-4  lg:text-xl xl:text-2xl">
            Login
          </Link>
          <Link to="/signup" className="hidden lg:inline bg-gray-700 p-2 px-4 rounded-lg text-xl lg:text-2xl xl:text-2xl lg:bg-transparent">
            Sign Up
          </Link>
          <p className="lg:hidden md:text-2xl" onClick={toggleMenu}>
            <FontAwesomeIcon icon={faBars} />
          </p>
        </div>

        <AnimatePresence>
          {!isHidden && (
            <motion.div

            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
              className={`navbar2 absolute w-[75%] top-[95%] rounded aspect-[1/1] md:aspect-[2/1] bg-gray-800 p-4 md:p-10 flex flex-col gap-4 lg:hidden `}
            >
              <h3 className="text-2xl md:text-3xl font-medium ">Menu</h3>
              <ul className="px-3 flex flex-col gap-2 text-sm md:text-2xl text-zinc-400 capitalize">
                <Link to="/" className="hover:bg-blue-500 active:scale-[0.9] p-1">
                  home
                </Link>
                <Link to="/codespace" className="hover:bg-blue-500 active:scale-[0.9] p-1">
                  codespace
                </Link>
                <Link to="/about" className="hover:bg-blue-500 active:scale-[0.9] p-1">
                  about
                </Link>
                <Link to="/login" className="hover:bg-blue-500 active:scale-[0.9] p-1">
                  LogIn
                </Link>
                <Link to="/signup" className="hover:bg-blue-500 active:scale-[0.9] p-1">
                  SignUp
                </Link>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Navbar;
