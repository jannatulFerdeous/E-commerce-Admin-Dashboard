import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { FaRegCalendarAlt } from "react-icons/fa";

import img1 from "../../../../../assets/image/avatar-1.jpg";
import img2 from "../../../../../assets/image/avatar-2.jpg";
import img3 from "../../../../../assets/image/avatar-3.jpg";
import img4 from "../../../../../assets/image/avatar-4.jpg";

export const Customer = () => {
  const data = [
    { name: 'Current', value: 50, color: '#34c759' },
    { name: 'New', value: 30, color: '#007aff' },
    { name: 'Retargeted', value: 20, color: '#ffcc00' },
  ];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({ cx, cy }) => {
    return (
      <text
        x={cx}
        y={cy}
        fill="white"
        textAnchor="middle"
        dominantBaseline="central"
        fontSize={18}
        fontWeight="bold"
        className="text-green-500"
      >
        {`Current: 50 %`}
      </text>
    );
  };

  return (
    <div className="bg-white rounded-lg p-6 shadow-md w-full h-full">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Customers</h2>
        <div className="flex items-center">
          <div className="flex -space-x-2">
            <img src={img1} alt="Customer 1" className="w-10 h-10 rounded-full border-2 border-white" />
            <img src={img2} alt="Customer 2" className="w-10 h-10 rounded-full border-2 border-white" />
            <img src={img3} alt="Customer 3" className="w-10 h-10 rounded-full border-2 border-white" />
            <img src={img4} alt="Customer 4" className="w-10 h-10 rounded-full border-2 border-white" />
          </div>
          <div className="text-sm text-green-500 bg-green-200 w-10 h-10 rounded-full font-semibold">
            <span className='flex justify-center items-center mt-2'>+6</span>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <ResponsiveContainer width="90%" height={250}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={70}
              outerRadius={90}
              fill="#8884d8"
              dataKey="value"
              label={renderCustomizedLabel}
              labelLine={false}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip formatter={(value, name) => [`${value}%`, name]} />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="flex justify-center space-x-4  text-sm">
        <div className="flex items-center">
          <span className="w-3 h-3 rounded-full bg-green-500 mr-2"></span>
          Current
        </div>
        <div className="flex items-center">
          <span className="w-3 h-3 rounded-full bg-blue-500 mr-2"></span>
          New
        </div>
        <div className="flex items-center">
          <span className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></span>
          Retargeted
        </div>
      </div>
      <div className="bg-gray-50 p-4 rounded-lg mt-5 text-sm">
        <div className="flex items-center text-gray-500">
          <FaRegCalendarAlt className='inline-flex mr-2 mb-1' />
          01 January 2024 to 31 December 2024
        </div>
      </div>
      <p className="mt-2 text-gray-600 text-center text-sm">
        To review the new order by James, <span className="text-green-500 font-medium">detail</span>.
      </p>
    </div>
  );
};
