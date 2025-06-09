import CodingAmico from "../assets/Coding-amico.svg";

import CtaBtn from "../components/CtaBtn";

const SectionOne = () => {
  return (
    <>
      <div className="heroSection bg-gray-900 text-white 2xl:flex 2xl:flex-col 2xl:items-center 2xl:gap-[4rem]  px-[2rem] md:px-[4rem] lg:px-[6rem] xl:px-[9rem] 2xl:[px-12rem] py-[4rem] xl:py-[6rem]">
        <h1 className="text-6xl md:text-8xl xl:text-9xl leading-[1.1] xl:leading-[1.2] font-medium">
          Code <br className="lg:hidden" />
          Together. <br className="2xl:hidden" /> Live.
        </h1>

        <div className="md:flex md:gap-2">
          <div className="  md:w-1/2  ">
            <p className="py-[2rem] xl:py-[4rem] text-2xl md:text-3xl lg:text-4xl xl:text-6xl lg:leading-[1.3]">
              Real-time collaborative coding in your browser.
            </p>
            <CtaBtn />
          </div>

          <div className="heroImg  md:w-1/2  ">
            <img
              src={CodingAmico}
              className="w-72 lg:w-96 xl:w-[30rem] h-72 lg:h-96 xl:h-[30rem]"
              alt="coding illustration"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionOne;
