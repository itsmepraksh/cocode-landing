import { motion } from "framer-motion"


const CtaBtn = ({text,onClick}) => {
 
  

  return (
    <>
        <motion.div className="ctaBtn capitalize bg-blue-700 p-3 px-[2rem]  lg:px-[3rem] md:py-[1rem] lg:py-[2rem] inline-flex md:text-xl lg:text-3xl xl:4xl rounded-lg my-[2rem] active:bg-gray-800  cursor-pointer"
        onClick={onClick}

        whileHover={{scale:1.05, boxShadow: "0px 0px 8px rgb(59,130,246)"}}
        whileTap={{scale:0.95 }}
        transition={{type:"spring" , stiffness:400, damping:10}}
        >
          {text}
        </motion.div>
    </>
  )
}

export default CtaBtn