import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceDot, Area } from 'recharts';
import { FaRegCalendarAlt } from "react-icons/fa";

const CustomerGrowth = () => {
  const data = [
    { name: 'Jan', newCustomers: 19, returningCustomers: 13 },
    { name: 'Feb', newCustomers: 30, returningCustomers: 25 },
    { name: 'Mar', newCustomers: 40, returningCustomers: 30 },
    { name: 'Apr', newCustomers: 25, returningCustomers: 20 },
    { name: 'May', newCustomers: 35, returningCustomers: 28 },
    { name: 'Jun', newCustomers: 27, returningCustomers: 22 },
    { name: 'Jul', newCustomers: 50, returningCustomers: 40 },
    { name: 'Aug', newCustomers: 70, returningCustomers: 55 },
    { name: 'Sep', newCustomers: 60, returningCustomers: 50 },
    { name: 'Oct', newCustomers: 75, returningCustomers: 60 },
    { name: 'Nov', newCustomers: 90, returningCustomers: 70 },
    { name: 'Dec', newCustomers: 95, returningCustomers: 80 },
  ];

  return (
    <div className="bg-white rounded-lg p-6 shadow-md w-full">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-base font-semibold">Customers Growth</h2>
        <button className="bg-gray-100 px-4 py-2 rounded-md text-sm font-medium text-gray-600">
          <FaRegCalendarAlt className='inline-flex mr-2 mb-1' /> This Year
        </button>
      </div>   
  
      <div className="w-full overflow-x-auto -ml-1">
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <defs>
              <linearGradient id="colorNew" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#00e676" stopOpacity={1}/>
                <stop offset="95%" stopColor="#00c853" stopOpacity={1}/>
              </linearGradient>
              <linearGradient id="colorReturning" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#cfd8dc" stopOpacity={1}/>
                <stop offset="95%" stopColor="#b0bec5" stopOpacity={1}/>
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
              cursor={{ stroke: '#00e676', strokeWidth: 2, strokeDasharray: "5 5" }}
            />
            <Line 
              type="monotone" 
              dataKey="newCustomers" 
              stroke="url(#colorNew)" 
              strokeWidth={3} 
              dot={false} 
            />
            <Line 
              type="monotone" 
              dataKey="returningCustomers" 
              stroke="url(#colorReturning)" 
              strokeWidth={3} 
              dot={false} 
              filter="url(#shadow)" 
            />
            <ReferenceDot x="Jun" y={27} r={5} fill="#00e676" stroke="none" />
            <Area type="monotone" dataKey="newCustomers" stroke="#00e676" fill="url(#colorNew)" opacity={0.2} />
            <Area type="monotone" dataKey="returningCustomers" stroke="#cfd8dc" fill="url(#colorReturning)" opacity={0.2} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default CustomerGrowth;
