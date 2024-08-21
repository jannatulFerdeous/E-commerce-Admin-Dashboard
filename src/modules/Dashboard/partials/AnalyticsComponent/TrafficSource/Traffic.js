import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { RiUserSearchFill } from "react-icons/ri";
import { RiArrowDropDownLine } from "react-icons/ri";

const data = [
  { name: 'Current', value: 76, color: '#b0b0cb ' },
  { name: 'New', value: 24, color: '#e0e0f3 ' },
];

const Traffic = () => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-md w-full h-full">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-gray-600 font-medium">Traffic Sources</h2>
        <div className="flex items-center gap-2 bg-gray-100 text-gray-600 rounded-lg p-2 space-x-2 ">
          <button>Direct</button>
          <RiUserSearchFill className=' text-gray-600 ' />
        </div>
      </div>
      <div className="relative flex justify-center items-center -mt-16">
        <ResponsiveContainer width={320} height={220}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="100%"
              startAngle={180}
              endAngle={0}
              innerRadius={120}
              outerRadius={130}
        
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip formatter={(value, name) => [`${value}%`, name]} />
          </PieChart>
        </ResponsiveContainer>
        <div className="absolute mt-44 flex justify-center items-center text-2xl font-semibold">
          76%
        </div>       
      </div>
      <hr className='  mt-4 mb-5 w-20 mx-auto border-1 border-dashed border-gray-800  '/>
      <div className="text-center text-gray-700 text-2xl font-medium mt-2">
        Direct Visitors
      </div>
      <div className="text-center text-gray-500 mt-2 text-sm">
        This is a simple hero unit, a simple jumbotron-style component
      </div>
      <div className="flex justify-center mt-4">
        <button className="bg-white border border-green-500 text-green-500 px-4 py-2 rounded-lg hover:bg-green-500 hover:text-white">
          More details
        </button>
      </div>
    </div>
  );
};

export default Traffic;
