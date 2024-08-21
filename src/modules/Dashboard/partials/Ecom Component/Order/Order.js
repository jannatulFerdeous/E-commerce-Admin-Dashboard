import React from 'react';
import { LineChart, Line, ResponsiveContainer, Tooltip } from 'recharts';

import { FaOpencart } from "react-icons/fa6";

export const Order = () => {

  const data = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  return (
    <div className="bg-white rounded-lg p-6 shadow-md w-96">
    <div className="flex justify-between items-center mb-4">
      <div className="flex flex-col items-center">
        <div className="border-2 border-gray-300 rounded-full p-3 mb-2 text-2xl text-gray-400">
        <FaOpencart />
        </div>
        <span className="text-gray-600 font-semibold">New Order</span>
      </div>
      <div className="w-1/2">
        <ResponsiveContainer width="100%" height={40}>
          <LineChart data={data}>
            <Line type="monotone" dataKey="pv" stroke="#a3a6b8" strokeWidth={2} />
            <Tooltip />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
    <hr className="p-2" />
    <div className="flex justify-between items-center">
      <div className="text-2xl font-bold mb-2 text-blue-950">
        $8365.00
        <br />
        <span className="text-slate-400 text-sm"><span className="text-green-500">8.5%</span> New Sessions Today</span>
      </div>
      <button className=" text-sm text-gray-400 border-2 border-gray-300 font-semibold px-6 py-2 rounded">View Report</button>
    </div>
  </div>
  )
}
