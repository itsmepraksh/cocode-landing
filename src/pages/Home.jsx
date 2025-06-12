import { useEffect, useState } from "react"
import SectionFour from "../sections/SectionFour"
import SectionOne from "../sections/SectionOne"
import SectionThree from "../sections/SectionThree"
import SectionTwo from "../sections/SectionTwo"


const Home = () => {
  
  const [animationStep, setAnimationStep] = useState(0)
  useEffect(() => {
    
    const timer1 = setTimeout(()=>{
      setAnimationStep(1)
    },500 )

    const timer2 = setTimeout(()=>{
      setAnimationStep(2)
    },1000)

    const timer3 = setTimeout(()=>{
      setAnimationStep(3)
    },1500)

    const timer4 = setTimeout(()=>{
      setAnimationStep(4)
    },2000)
  
    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
      clearTimeout(timer3)
    }
  }, [])
  return (
    <>
        <SectionOne shouldAnimate={animationStep >=1}/>
        <SectionTwo shouldAnimate={animationStep >=2}/>
        <SectionThree shouldAnimate = {animationStep >=3}/>
        <SectionFour shouldAnimate = {animationStep >=4}/>
    </>
  )
}

export default Home