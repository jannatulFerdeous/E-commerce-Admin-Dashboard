import React from "react";
import Navbar from "../../widgets/Navbar";
import Heading from "../../widgets/Header/Heading";
import Footer from "../../widgets/Footer/Footer";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">  
      <div className="flex flex-1"> 
        <Navbar />
        <div className="flex-1 w-full transition-all duration-300 mx-auto"> 
          <Heading />
          {React.cloneElement(children)} 
        </div>
      </div>
      <Footer className="mt-auto" /> 
    </div>
  );
};

export default Layout;
