import React, { useState, useEffect } from "react";

import dp from "../../../assets/image/dp.png";
import flag from "../../../assets/image/flag.png";

import { FaSearch, FaRegBell } from "react-icons/fa";
import { AiOutlineUser } from "react-icons/ai";

const Heading = () => {
  const [scrolled, setScrolled] = useState(false);
  

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed right-8 left-80 w-auto  mt-7 flex justify-between items-center p-5 mx-auto rounded-lg transition-all duration-300 z-50 ${
        scrolled ? "bg-gray-100  shadow-md" : "bg-transparent"
      }`}
    >
      {/* Left Section */}
      <div className="flex items-center">
        <div className={`text-2xl font-bold text-gray-700`}>
          Good Morning, Jannat!
        </div>
      </div>

      {/* Middle Section */}
      <div className="flex items-center relative rounded-3xl">
        <FaSearch className="absolute text-gray-500 h-10 left-3" />
        <input
          type="text"
          placeholder="Search here..."
          className="px-4 py-2 w-72 pl-10 rounded-3xl border border-gray-300 focus:outline-none"
        />
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-6 text-2xl">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 flex items-center justify-center bg-white rounded-full">
            <img src={flag} alt="Flag" className="w-6 h-6 rounded-full" />
          </div>
          <div className="w-10 h-10 flex items-center justify-center bg-white rounded-full">
            <FaRegBell className="text-gray-600" />
          </div>
          <div className="w-10 h-10 flex items-center justify-center bg-white rounded-full">
            <AiOutlineUser className="text-gray-600" />
          </div>
        </div>
        <div className="w-10 h-10">
          <img
            src={dp}
            alt="User Avatar"
            className="w-full h-full rounded-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Heading;
