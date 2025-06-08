import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = () => {
  return (
    <>
      <div contentEditable={false} className="nav flex justify-between items-center  px-[2rem] md:px-[4rem] lg:px-[6rem] xl:px-[9rem] 2xl:px-[12rem] py-[1rem] md:py-[3rem] bg-gray-900 text-white">
        <h2 className="font-normal text-3xl md:text-5xl lg:font-medium ">cocode</h2>
        <div className="navbar flex justify-evenly items-center gap-[2rem] ">
          <a className="hidden lg:inline  p-2 px-4  text-2xl xl:text-3xl">Features</a>
          <a className="hidden md:inline bg-gray-700 p-2 px-4 rounded-lg text-xl lg:text-2xl xl:text-3xl lg:bg-transparent">Sign Up</a>
          <p className="md:hidden">
            <FontAwesomeIcon icon={faBars} />
          </p>
        </div>
      </div>
    </>
  )
}

export default Navbar