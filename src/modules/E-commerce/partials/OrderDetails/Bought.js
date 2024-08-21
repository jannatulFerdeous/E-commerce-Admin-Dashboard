import React from 'react';
import { FaHome } from 'react-icons/fa';
import { MdLocalShipping } from 'react-icons/md';
import { GoLocation } from 'react-icons/go';
import { FiDownload } from 'react-icons/fi';

const Bought = () => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-md w-full">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Bought - Awaiting Delivery</h2>
        <button className="text-gray-400 flex items-center space-x-1">
          <FiDownload />
          <span className="underline text-sm">Download Invoice</span>
        </button>
      </div>     
      <div className="flex justify-between items-center mb-4">
        <div className="bg-green-500 text-white p-2 rounded-full">
            <FaHome />
        </div>
        <div className="flex-1 h-1 bg-green-300 relative">
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <div className=" text-green-500 p-2 rounded-full -mt-4 bg-green-200 bg-opacity-50 "> <MdLocalShipping /></div>
          </div>
        </div>
        <div className="bg-gray-200 text-gray-700 p-2 rounded-full">
            <GoLocation />
        </div>
      </div>
      <div className="flex justify-between items-center mb-4">
        <div className="">
          <p className="text-sm font-semibold text-gray-700 mt-2">Order Created</p>
          <p className="text-xs text-gray-500">15 Feb 2024, 11:30 AM</p>
        </div>

        <div className="text-center">
          <p className="text-sm font-semibold text-center text-gray-700 mt-2">On Delivery</p>
          <p className="text-xs text-center text-gray-500">18 Feb 2024, 05:15 PM</p>
        </div>

        <div className="text-right">
          <p className="text-sm font-semibold text-gray-700 mt-2">Order Delivered</p>
          <p className="text-xs text-gray-500">20 Feb 2024, 01:00 PM</p>
        </div>
      </div>
      <div className="bg-green-50 text-green-600 p-4 rounded-md border border-dashed border-green-300">
        <p className='text-sm'>
          <span className="font-semibold ">Note :</span> Ship all the ordered items together by Monday and I sent you an email, please check. Thanks!
        </p>
      </div>
    </div>
  );
}

export default Bought;
