import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceDot, Area } from 'recharts';
import { FaRegCalendarAlt } from "react-icons/fa";

const Overview = () => {

  const data = [
    { name: 'Jan', value1: 40, value2: 30, amount: 40000 },
    { name: 'Feb', value1: 60, value2: 50, amount: 60000 },
    { name: 'Mar', value1: 80, value2: 60, amount: 80000 },
    { name: 'Apr', value1: 50, value2: 70, amount: 50000 },
    { name: 'May', value1: 70, value2: 60, amount: 70000 },
    { name: 'Jun', value1: 50, value2: 40, amount: 50000 },
    { name: 'Jul', value1: 90, value2: 80, amount: 90000 },
    { name: 'Aug', value1: 120, value2: 100, amount: 120000 },
    { name: 'Sep', value1: 100, value2: 90, amount: 100000 },
    { name: 'Oct', value1: 110, value2: 95, amount: 110000 },
    { name: 'Nov', value1: 130, value2: 110, amount: 130000 },
    { name: 'Dec', value1: 140, value2: 120, amount: 140000 },
  ];

  return (
    <div className="bg-white rounded-lg p-6 shadow-md w-auto h-full">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Audience Overview</h2>
        <button className="bg-gray-100 px-4 py-2 rounded-md text-sm font-medium text-gray-600">
          <FaRegCalendarAlt className='inline-flex mr-2 mb-1' /> This Year
        </button>
      </div>
      <div className="w-full overflow-x-auto">
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <defs>
              <linearGradient id="colorGreen" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#00e676" stopOpacity={1}/>
                <stop offset="95%" stopColor="#00c853" stopOpacity={1}/>
              </linearGradient>
              <filter id="shadow" height="200%">
                <feDropShadow dx="0" dy="5" stdDeviation="4" floodColor="#cfd8dc" />
              </filter>
            </defs>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip 
              wrapperStyle={{
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                border: 'none',
                borderRadius: '8px',
                boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
              }}
              contentStyle={{ fontSize: 12, color: '#333' }}
              cursor={{ stroke: '#39e267', strokeWidth: 2, strokeDasharray: "5 5" }}
              formatter={(value, name) => [`$${value}k`, name === 'amount' ? 'Amount' : 'Value']}
            />
            {/* First Line with enhanced contrast gradient */}
            <Line 
              type="monotone" 
              dataKey="value1" 
              stroke="url(#colorGreen)" 
              strokeWidth={3} 
              dot={false} 
            />
            {/* Second Line with shadow */}
            <Line 
              type="monotone" 
              dataKey="value2" 
              stroke="#cfd8dc" 
              strokeWidth={3} 
              dot={false} 
              filter="url(#shadow)" 
            />
            <ReferenceDot x="Jun" y={50} r={5} fill="#39e267" stroke="none" />
            <Area type="monotone" dataKey="value1" stroke="#39e267" fill="url(#colorUv)" opacity={0.2} />
            <Area type="monotone" dataKey="value2" stroke="#cfd8dc" fill="url(#colorUv2)" opacity={0.2} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default Overview;
