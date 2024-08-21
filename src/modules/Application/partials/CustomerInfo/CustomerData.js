import React from 'react';
import { FaRegCalendarAlt } from "react-icons/fa";

const CustomerData = () => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-md h-full w-full">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-base font-semibold">Customers Data</h2>
        <button className="bg-gray-100 px-4 py-2 rounded-md text-sm font-medium text-gray-600">
          <FaRegCalendarAlt className='inline-flex mr-2 mb-1' /> This Year
        </button>
      </div>   
    
      <div className='grid grid-cols-2 gap-6 mt-10'>
        <div className="text-center p-6 border-2 border-gray-100 rounded-lg  w-full flex flex-col justify-center ">
          <h3 className="text-xl font-semibold text-gray-800">38,321</h3>
          <p className="text-xs font-medium text-gray-500 mt-1">TOTAL CUSTOMERS</p>
        </div>
        <div className="text-center p-6 border-2 border-gray-100 rounded-lg  w-full flex flex-col justify-center">
          <h3 className="text-xl font-semibold text-gray-800">946</h3>
          <p className="text-xs font-medium text-gray-500 mt-1">NEW CUSTOMERS</p>
        </div>
        <div className="text-center p-6 border-2 border-gray-100 rounded-lg  w-full flex flex-col justify-center">
          <h3 className="text-xl font-semibold text-gray-800">70.8%</h3>
          <p className="text-xs font-medium text-gray-500 mt-1">RETURNING CUSTOMERS</p>
        </div>
        <div className="text-center p-6 border-2 border-gray-100  rounded-lg w-full flex flex-col justify-center">
          <h3 className="text-xl font-semibold text-gray-800">1.5%</h3>
          <p className="text-xs font-medium text-gray-500 mt-1">BOUNCE RATE</p>
        </div>
      </div>
    </div>
  )
}

export default CustomerData;
