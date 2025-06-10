import CtaBtn from "../components/CtaBtn"

 
const SectionFour = () => {
  return (
    <>
     <div className="sectionFour  text-center text-white px-[2rem] md:px-[4rem] lg:px-[6rem] xl:px-[9rem] 2xl:px-[12rem] py-[1rem] md:py-[3rem] ">
      <p className="text-2xl md:text-3xl md:border-1 md:p-3 md:px-10 md:rounded md:inline-block uppercase font-medium py-2">join us</p>
      <h1 className=" text-zinc-300 md:text-2xl md:my-4">Master the skills today</h1>
      <p className=" px-7  text-zinc-500 md:text-lg">keep getting in touch with us for more works in the future</p>
       <CtaBtn text="start for free" />
     </div>
        
    </>
  )
}

export default SectionFour