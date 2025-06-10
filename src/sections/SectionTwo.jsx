 

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPython } from "@fortawesome/free-brands-svg-icons";
import {
  faCodeCompare,
  faLaptopCode,
  faPeopleGroup,
} from "@fortawesome/free-solid-svg-icons";
import DeveloperActivityBroo from "../assets/Developer-activity-broo.svg";


const SectionTwo = () => {
  return (
    <>
        
      <div className="sectionTwo  text-white px-[2rem] md:px-[4rem] lg:px-[6rem] xl:px-[9rem] 2xl:px-[12rem] py-[1rem] md:py-[3rem] flex flex-col md:flex-row md:gap-[2rem] 2xl:gap-0 items-baseline 2xl:items-center justify-evenly">
        <hr className="text-gray-800 border-[0.1rem] w-full md:hidden " />
        <div className="partOne p-4 md:py-0 md:w-1/2 2xl:w-1/3   ">
          <div className="mininav capitalize flex justify-center md:justify-items-stretch items-center  gap-[2rem] md:gap-0 uppercase text-xs md:text-base xl:text-lg  text-zinc-400 font-medium">
            <a className="active:bg-blue-800 p-2 rounded">values</a>
            <a className="active:bg-blue-800 p-2 rounded">mission</a>
            <a className="active:bg-blue-800 p-2 rounded">vision</a>
          </div>
          <img
            src={DeveloperActivityBroo}
            alt="Loving to coding"
            className="w-64 md:w-[30rem] h-64 md:h-[30rem]  "
          />
        </div>
        <div className="partTwo md:w-1/2    2xl:w-1/3 ">
          <h3 className="uppercase text-xs md:text-base xl:text-lg text-blue-500  font-medium">
            Why choose us
          </h3>
          <h1 className="py-2 md:py-6 text-3xl md:text-4xl font-semibold">
            We use experience and knowledge to make services better.
          </h1>

          <div className="infoPoints py-6 flex flex-col md:flex-row md:flex-wrap md:items-center    gap-4  md:gap-2">
            <div className="info md:h-[10rem] md:w-[48%] flex flex-col md:items-center md:justify-center md:shrink-[0] gap-4 bg-gray-800 p-4 md:p-3 rounded ">
              <FontAwesomeIcon
                className="text-5xl md:text-4xl font-thin "
                icon={faCodeCompare}
              />
              <p className="px-4 text-gray-400 text-center text-sm md:text-xs lg:text-sm xl:text-base 2xl:text-lg md:font-thin">
                {" "}
                Real-time collaborative coding using Websockets
              </p>
            </div>

            <div className="info md:h-[10rem] md:w-[48%] flex flex-col md:items-center md:justify-center md:shrink-[0] gap-4 bg-gray-800 p-4 md:p-3 rounded ">
              <FontAwesomeIcon
                className="text-5xl md:text-4xl font-thin "
                icon={faLaptopCode}
              />
              <p className="px-4 text-gray-400 text-center text-sm md:text-xs lg:text-sm xl:text-base 2xl:text-lg md:font-thin">
                {" "}
                Live code execution, and output sharing
              </p>
            </div>

            <div className="info md:h-[10rem] md:w-[48%] flex flex-col md:items-center md:justify-center md:shrink-[0] gap-4 bg-gray-800 p-4 md:p-3 rounded ">
              <FontAwesomeIcon
                className="text-5xl md:text-4xl font-thin "
                icon={faPython}
              />
              <p className="px-4 text-gray-400 text-center text-sm md:text-xs lg:text-sm xl:text-base 2xl:text-lg md:font-thin">
                {" "}
                Language support: Javascript, Python,etc
              </p>
            </div>

            <div className="info md:h-[10rem] md:w-[48%] flex flex-col md:items-center md:justify-center md:shrink-[0] gap-4 bg-gray-800 p-4 md:p-3 rounded ">
              <FontAwesomeIcon
                className="text-5xl md:text-4xl font-thin "
                icon={faPeopleGroup}
              />
              <p className="px-4 text-gray-400 text-center text-sm md:text-xs lg:text-sm xl:text-base 2xl:text-lg md:font-thin">
                {" "}
                Ideal for teams, Interviews and hatcons
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SectionTwo