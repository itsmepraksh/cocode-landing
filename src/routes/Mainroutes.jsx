import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";

const Mainroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/codespace" element={}/> */}
      {/* <Route path="/about" element={}/> */}
      {/* <Route path="/login" element={}/> */}
      {/* <Route path="/signup" element={}/> */}
    </Routes>
  );
};

export default Mainroutes;
