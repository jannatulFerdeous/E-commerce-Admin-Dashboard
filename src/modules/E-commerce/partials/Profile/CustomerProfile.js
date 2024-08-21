import React from 'react';
import { FaGlobe, FaEnvelope, FaPhoneAlt, FaTwitter, FaInstagram, FaFacebookF } from 'react-icons/fa';
import { AiOutlineMessage } from "react-icons/ai";

const CustomerProfile = ({ customer }) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-md w-full h-full"> 
        <div className="flex justify-between items-center gap-5 mb-4">
            <div className="flex -space-x-7 space-y-10">
                <img src={customer.avatar} alt={customer.name} className="w-28 h-28 rounded-full mr-4" /> 

                <img src={customer.countryFlag} alt="Flag" className="w-7 h-7 ml-auto rounded-full border-2 border-white" />
            </div>

            <div>
                <h2 className="text-xl font-semibold mt-4">{customer.name}</h2>
                <p className="text-gray-500">@{customer.nickname}</p>
            </div>

            <div>
                <button className="flex items-center hover:bg-green-500 hover:text-white text-green-600 text-sm px-4 py-2 mt-4 mr-3 rounded-md w-full border border-green-500 mb-4 font-medium text-center"> 
                <AiOutlineMessage className="mr-2" /> Message
                </button>
            </div>
        </div>

      <div className="mb-4 mt-8 ml-3">
        <p className="flex items-center mb-2 text-gray-500"> 
          <FaGlobe className="mr-2 text-lg" />
          <span className="font-medium text-gray-700">Language :</span>
          <span className="ml-2">{customer.languages.join(' || ')}</span>
        </p>

        <p className="flex items-center mb-2 text-gray-500"> 
          <FaEnvelope className="mr-2 text-lg" />
          <span className="font-medium text-gray-700">Email :</span>
          <span className="ml-2 text-green-600">{customer.email}</span>
        </p>
   
        <p className="flex items-center mb-2 text-gray-500"> 
          <FaPhoneAlt className="mr-2 text-lg" />
          <span className="font-medium text-gray-700">Phone : +{customer.phone}</span>
          
        </p>
      </div>

      <div className="flex items-center space-x-4 justify-start mt-8"> 
        <a href="#" className="text-gray-400 hover:text-white border-2 hover:bg-blue-600 hover:border-blue-600 border-gray-300 p-2 rounded-full">
          <FaTwitter size={20} />
        </a>
        <a href="#" className="text-gray-400 hover:text-white border-2 hover:bg-red-500 hover:border-red-500 border-gray-300 p-2 rounded-full">
          <FaInstagram size={20} />
        </a>
        <a href="#" className="text-gray-400 hover:text-white border-2 hover:bg-blue-600 hover:border-blue-600 border-gray-300 p-2 rounded-full">
          <FaFacebookF size={20} />
        </a>
      </div>
    </div>
  );
};

export default CustomerProfile;
