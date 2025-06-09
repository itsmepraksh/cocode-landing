 import LearningSVG from "../assets/Learning-js.svg";

const SectionThree = () => {
  return (
    <>
         <div className="sectionThree  bg-gray-900 text-white lg:flex lg:items-center 2xl:justify-center  px-[2rem] md:px-[4rem] lg:px-[6rem] xl:px-[9rem] 2xl:px-[12rem] py-[1rem] md:py-[3rem]">
        <div className="boxOne w-1/2 ">
          <h1 className="text-3xl md:text-4xl font-medium py-4">Driven by Code. Defined by Quality.</h1>
          <p className="text-gray-500  py-2 xl:py-4 md:text-lg lg:text-xl  ">
            " As a programming and coding service company, we commit to designing
            high-quality projects ever for all clients. "
          </p>
          <div className="boxLanguages py-4 flex flex-wrap gap-4">
            <div className="box w-[47%] bg-gray-800 p-4 rounded">
              <h3 className="text-xl font-medium">Python</h3>
              <p className="text-gray-400 text-xs xl:text-base 2xl:text-lg md:font-light p-2">
                Loved by developers for its simplicity, power, and endless
                possibilities.
              </p>
            </div>
            <div className="box w-[47%] bg-gray-800 p-4 rounded">
              <h3 className="text-xl font-medium">Node.js</h3>
              <p className="text-gray-400 text-xs xl:text-base 2xl:text-lg md:font-light p-2">
                Powering fast, scalable apps with JavaScript on the server side.
              </p>
            </div>
            <div className="box w-[47%] bg-gray-800 p-4 rounded">
              <h3 className="text-xl font-medium">JavaScript</h3>
              <p className="text-gray-400 text-xs xl:text-base 2xl:text-lg md:font-light p-2">
                The heartbeat of the web — dynamic, interactive, and everywhere.
              </p>
            </div>
            <div className="box w-[47%] bg-gray-800 p-4 rounded">
              <h3 className="text-xl font-medium">Java</h3>
              <p className="text-gray-400 text-xs xl:text-base 2xl:text-lg md:font-light p-2">
                Robust, secure, and built to run anywhere — from enterprise to
                mobile.
              </p>
            </div>
          </div>
        </div>
        <div className="boxTwo w-1/2 2xl:w-[35%] ">
          <img src={LearningSVG} alt="" />
        </div>
      </div>
    </>
  )
}

export default SectionThree