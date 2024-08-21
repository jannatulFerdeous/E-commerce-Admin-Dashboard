import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell} from 'recharts';
import { FaRegCalendarAlt } from "react-icons/fa";

export const Chart = () => {

  const data = [
    { name: 'Jan', value: 2.3, amount: 2000 },
    { name: 'Feb', value: 3.1, amount: 3100 },
    { name: 'Mar', value: 4, amount: 4000 },
    { name: 'Apr', value: 10.1, amount: 10100 },
    { name: 'May', value: 4, amount: 4000 },
    { name: 'Jun', value: 3.6, amount: 3600 },
    { name: 'Jul', value: 3.2, amount: 3200 },
    { name: 'Aug', value: 2.3, amount: 2300 },
    { name: 'Sep', value: 1.4, amount: 1400 },
    { name: 'Oct', value: 0.8, amount: 800 },
    { name: 'Nov', value: 0.5, amount: 500 },
    { name: 'Dec', value: 0.2, amount: 200 },
  ];
  
  return (
    <div className="bg-white rounded-lg p-6 shadow-md w-full h-full">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Monthly Avg. Income</h2>
        <button className="bg-gray-100 px-4 py-2 rounded-md text-sm font-medium text-gray-600">
        <FaRegCalendarAlt className='inline-flex mr-2 mb-1' /> This Year
        </button>
      </div>
      <div className="w-full overflow-x-auto">
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
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
            cursor={{ fill: 'rgba(200, 200, 200, 0.2)' }}
            formatter={(value, name) => [`${value}`, name === 'amount' ? 'Amount' : 'Value']}
          />
          <Bar
            dataKey="amount"
            radius={[10, 10, 0, 0]}
            barSize={23} 
          >
            {
             
              data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={entry.name === 'Apr' ? '#39e267' : '#b0bec5'} 
                />
              ))
            }
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
      <div className="flex justify-between mt-4">
        <div className="flex flex-col items-center border-2  border-gray-200 p-6 rounded-xl">
          <div className="text-xl font-bold ">$24,500</div>
          <div className="text-sm text-gray-500">Today's Revenue</div>
        </div>
        <div className="flex flex-col items-center border-2  border-gray-200 p-6 rounded-xl">
          <div className="text-xl font-bold">82.8%</div>
          <div className="text-sm text-gray-500">Conversion Rate</div>
        </div>
        <div className="flex flex-col items-center border-2  border-gray-200 p-6 rounded-xl">
          <div className="text-xl font-bold">$9982.00</div>
          <div className="text-sm text-gray-500">Total Expenses</div>
        </div>
        <div className="flex flex-col items-center border-2  border-gray-200 p-6 rounded-xl">
          <div className="text-xl font-bold">$80.5</div>
          <div className="text-sm text-gray-500">Avg. Value</div>
        </div>
      </div>
    </div>
  )
}
