import React from 'react';

import img1 from "../../../../../assets/image/avatar-1.jpg";
import img2 from "../../../../../assets/image/avatar-2.jpg";
import img3 from "../../../../../assets/image/avatar-3.jpg";
import img4 from "../../../../../assets/image/avatar-4.jpg";

import { FaRegCalendarAlt } from "react-icons/fa";

const RecentOrder = () => {
  const orders = [
    { name: 'Scott Holland', id: '#3652', amount: 3325.00, image: img1 },
    { name: 'Karen Savage', id: '#4789', amount: 2548.00, image: img2 },
    { name: 'Steven Sharp', id: '#4521', amount: 2985.00, image: img3 },
    { name: 'Teresa Himes', id: '#3269', amount: 1845.00, image: img4 },
    { name: 'Ralph Denton', id: '#4521', amount: 1422.00, image: img1 },
  ];

  return (
    <div className="bg-white rounded-lg p-6 shadow-md w-full h-full">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Recents Order</h2>
        <div className="relative">
          <button className="bg-gray-100 text-gray-600 px-3 py-1 rounded-lg flex items-center">
          <FaRegCalendarAlt className='inline-flex mr-2' />This Month
          </button>
        </div>
      </div>
      <ul>
        {orders.map((order, index) => (
          <li key={index} className="flex items-center justify-between py-3 border-b border-gray-200">
            <div className="flex items-center">
              <img
                src={order.image}
                alt={order.name}
                className="w-10 h-10 rounded-full mr-3"
              />
              <div>
                <span className="text-sm font-medium">{order.name}</span>
                <br />
                <span className="text-xs text-gray-400">{order.id}</span>
              </div>
            </div>
            <span className="text-green-500 font-semibold">${order.amount.toFixed(2)}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentOrder;
