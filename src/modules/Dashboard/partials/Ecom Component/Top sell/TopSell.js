import React from 'react';

import flag1 from "../../../../../assets/image/flag.png";
import flag2 from "../../../../../assets/image/flag2.jpg";
import flag3 from "../../../../../assets/image/flag3.jpg";
import flag4 from "../../../../../assets/image/flag4.jpg";
import flag5 from "../../../../../assets/image/flag5.jpg";


import { FaRegCalendarAlt } from "react-icons/fa";

const TopSell = () => {
  const countries = [
    { name: 'Bangladesh', image: flag1, percentage: 85, sales: 5860.00 },
    { name: 'Spain', image: flag2, percentage: 78, sales: 5422.00 },
    { name: 'France', image: flag3, percentage: 71, sales: 4587.00 },
    { name: 'Germany', image: flag4, percentage: 65, sales: 3655.00 },
    { name: 'Bahamas', image: flag5, percentage: 48, sales: 3325.00 },
  ];

  return (
    <div className="bg-white rounded-lg p-6 shadow-md w-full h-full">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Top Selling by Country</h2>
        <div className="relative">
          <button className="bg-gray-100 text-gray-600 px-3 py-1 rounded-lg">
          <FaRegCalendarAlt className='inline-flex mr-1 mb-1' />This Month
          </button>
        </div>
      </div>
      <ul className='mt-9'>
        {countries.map((country, index) => (
          <React.Fragment key={index}>
            <li className="flex items-center justify-between mb-3">
              <div className="flex items-center w-full">
                <img
                  src={country.image}
                  alt={country.name}
                  className="w-10 h-10 rounded-full mr-3"
                />
                <div className="flex-1">
                  <span className="text-sm">{country.name}</span>
                  <div className="flex items-center ">
                    <div className="w-44 bg-gray-200 rounded-full h-1 mr-2">
                      <div
                        className="bg-green-500 h-full rounded-full"
                        style={{ width: `${country.percentage}%` }}
                      ></div>
                    </div>
                    <span className="text-gray-600 text-xs">{country.percentage}%</span>
                  </div>
                </div>
              </div>
              <div className="text-sm mt-6 ">${country.sales}.00</div>
            </li>
            {index < countries.length - 2 && (
              <hr className="border-gray-200 my-3 w-full" />
            )}
          </React.Fragment>
        ))}
      </ul>
    </div>
  );
};

export default TopSell;
