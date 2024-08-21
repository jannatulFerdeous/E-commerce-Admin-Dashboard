import React from 'react';

import { FaUser, FaRegSmile, FaEnvelope, FaDollarSign, FaCalendarAlt, FaTruck, FaMapMarkerAlt } from 'react-icons/fa';
import { FaRegUserCircle } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { ImCoinDollar } from "react-icons/im";
import { MdOutlineDateRange } from "react-icons/md";
import { CiDeliveryTruck } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";


const OrderInfor = () => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-md w-full ">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold">Order Information</h2>
        <button className="text-blue-500">Edit</button>
      </div>
      <div className="mt-4 space-y-5">
        <div className="flex items-center">
          < FaRegUserCircle className="text-gray-500 mr-2" />
          <span>Username :</span>
          <span className="ml-auto">@donFlo</span>
        </div>

        <div className="flex items-center">
          <FaRegSmile className="text-gray-500 mr-2" />
          <span>Full Name :</span>
          <span className="ml-auto">Don Flowers</span>
        </div>

        <div className="flex items-center">
          <MdOutlineEmail className="text-gray-500 mr-2" />
          <span>Email :</span>
          <span className="ml-auto">DonLFlowers@jourrapide.com</span>
        </div>

        <div className="flex items-center">
          <ImCoinDollar className="text-gray-500 mr-2" />
          <span>Total Payment :</span>
          <span className="ml-auto text-green-500">$2450</span>
          <span className="text-sm text-gray-500 ml-1">($30 for transportation)</span>
        </div>

        <div className="flex items-center">
          <MdOutlineDateRange className="text-gray-500 mr-2" />
          <span>Order Date :</span>
          <span className="ml-auto">31 Dec 2023</span>
        </div>

        <div className="flex items-center">
          <MdOutlineDateRange className="text-gray-500 mr-2" />
          <span>Delivery Date :</span>
          <span className="ml-auto">05 Jan 2024</span>
        </div>

        <div className="flex items-center">
          <CiDeliveryTruck className="text-gray-500 mr-2" />
          <span>Courier :</span>
          <span className="ml-auto">FedEx Corporation</span>
        </div>

        <div className="flex items-center">
          <CiLocationOn className="text-gray-500 mr-2" />
          <span>Address:</span>
          <span className="ml-auto">718 Bingamon Branch Road 7 </span>
        </div>
      </div>
    </div>
  );
}

export default OrderInfor;
