import React from 'react';
import { ResponsiveContainer, BarChart, Bar, XAxis, Tooltip } from 'recharts';

import img1 from "../../../../../assets/image/avatar-1.jpg";
import img2 from "../../../../../assets/image/avatar-2.jpg";
import img3 from "../../../../../assets/image/avatar-3.jpg";
import img4 from "../../../../../assets/image/avatar-4.jpg";


const barData = [
  { name: 'Sun', uv: 600 },
  { name: 'Mon', uv: 900 },
  { name: 'Tue', uv: 1200 },
  { name: 'Wed', uv: 1600 },
  { name: 'Thu', uv: 1400 },
  { name: 'Fri', uv: 1500 },
  { name: 'Sat', uv: 1100 },
];

const Visitor = () => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-md w-full h-full">
      <div className="flex justify-between items-center mb-4 gap-8 ">
        <div >
          <h2 className="text-xl font-semibold text-gray-800">New Visitors</h2>
          <p className="text-3xl font-bold text-gray-800">1,282</p>
        </div>
        <div className="flex items-center">
          <div className="flex -space-x-2">
            <img src={img1} alt="Customer 1" className="w-10 h-10 rounded-full border-2 border-white" />
            <img src={img2} alt="Customer 2" className="w-10 h-10 rounded-full border-2 border-white" />
            <img src={img3} alt="Customer 3" className="w-10 h-10 rounded-full border-2 border-white" />
            <img src={img4} alt="Customer 4" className="w-10 h-10 rounded-full border-2 border-white" />
          </div>
          <div className="text-sm text-green-500 bg-green-200 w-10 h-10 rounded-full font-semibold flex justify-center items-center ml-2">
            +6
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <ResponsiveContainer width="90%" height={250}>
          <BarChart data={barData}>
            <XAxis 
              dataKey="name" 
              tick={{ 
                angle: 0, 
                textAnchor: 'middle', 
                dy: 10 
              }} 
              interval={0}
            />
            <Tooltip 
              formatter={(value, name, props) => [`${value} Visitors`, `Day: ${props.payload.name}`]} 
            />
            <Bar dataKey="uv" fill="#34c759" radius={[10, 10, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <button className="mt-6 w-full py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition duration-200">
        More Detail →
      </button>
    </div>
  );
}

export default Visitor;
