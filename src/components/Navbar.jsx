import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { useState } from "react";

const Navbar = () => {
  

  const [isHidden, setisHidden] = useState(true)

  const toggleMenu = (e)=>{ 
    setisHidden(!isHidden) 
    // console.log(isHidden)
  } 

  return (
    <>
      <div contentEditable={false} className="nav relative flex justify-between items-center  px-[2rem] md:px-[4rem] lg:px-[6rem] xl:px-[9rem] 2xl:px-[12rem] py-[1rem] md:py-[3rem] bg-gray-900 text-white">
        <h2 className="font-normal text-3xl md:text-5xl lg:font-medium ">cocode</h2>
        <div className="navbar flex justify-evenly items-center gap-[2rem] ">
          <a className="hidden md:inline  p-2 px-4  text-2xl xl:text-3xl">Features</a>
          <a className="hidden md:inline bg-gray-700 p-2 px-4 rounded-lg text-xl lg:text-2xl xl:text-3xl lg:bg-transparent">Sign Up</a>
          <p className="md:hidden"  onClick={toggleMenu}>
            <FontAwesomeIcon icon={faBars} />
          </p>
        </div>

        <div className={`navbar2 absolute w-[75%] top-[95%] rounded aspect-[1/1] bg-gray-800 p-4 flex flex-col gap-4 ${isHidden ? 'hidden' : ''} md:hidden `}>
            <h3 className="text-2xl font-medium ">Menu</h3>
            <ul className="px-3 flex flex-col gap-2 text-sm text-zinc-400 capitalize">
              <a className="hover:bg-blue-500 active:scale-[0.9] p-1">Features</a>
              <a className="hover:bg-blue-500 active:scale-[0.9] p-1">codespace</a>
              <a className="hover:bg-blue-500 active:scale-[0.9] p-1">about</a>
              <a className="hover:bg-blue-500 active:scale-[0.9] p-1">LogIn</a>
              <a className="hover:bg-blue-500 active:scale-[0.9] p-1">SignUp</a>

            </ul>

        </div>
      </div>
    </>
  )
}

export default Navbar