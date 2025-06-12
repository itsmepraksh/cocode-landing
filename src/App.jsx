 
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

const App = () => {

  
  
  return (
    <>
      {/* px-[2rem] md:px-[4rem] lg:px-[6rem] xl:px-[9rem] 2xl:px-[12rem] py-[1rem] md:py-[3rem] */}
      <Navbar />
      <Home />
     <Footer/>
    </>
  );
};

export default App;
