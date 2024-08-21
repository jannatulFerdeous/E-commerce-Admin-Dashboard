import React from 'react'

import { AiOutlineReload } from "react-icons/ai";



const TotalVisit = () => {
    const products = [
        {
          name: 'Organic Search',
          sessions: '10853',
          sessionPer :'52%',
          period: '566',
          periodPer: '92%',
          change : '52.80%',
        },
        {
            name: 'Direct',
            sessions: '2545',
            sessionPer :'47%',
            period: '498',
            periodPer: '81%',
            change : '-17.20%',
        },
        {
            name: 'Referal',
            sessions: '1836',
            sessionPer :'38%',
            period: '455',
            periodPer: '74%',
            change : '41.12%',
        },
        {
            name: 'Email',
            sessions: '1958',
            sessionPer :'31%',
            period: '361',
            periodPer: '61%',
            change : '-8.24%',
        },
        {
            name: 'Social',
            sessions: '1566',
            sessionPer :'31%',
            period: '299',
            periodPer: '49%',
            change : '29.33%',
        },
        

        
        
      ];
  return (
    <div className="bg-white rounded-lg p-6 shadow-md w-full ">
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-base font-semibold">Total Visits</h2>
    </div>
    <table className="min-w-full bg-white">
      <thead>
        <tr className="w-full bg-gray-50">
          <th className="text-left py-2 px-4 font-medium text-sm ">Channel</th>
          <th className="text-left py-2 px-4 font-medium text-sm ">Sessions</th>
          <th className="text-left py-2 px-4 font-medium text-sm ">Pre.Period</th>
          <th className="text-left py-2 px-4 font-medium text-sm">% Change</th>

        </tr>
      </thead>
      <tbody>
        {products.map((product,index) => (
          <tr key={index} className="border-b ">
            <td className="py-3 px-4 flex items-center ">
              <div>
                <p className=" text-green-600 text-sm">{product.name}</p>
              </div>
            </td>
            <td className="py-3 px-4 ">
            <p className="text-gray-700 text-sm">{product.sessions} <span className="text-xs text-gray-400"> ({product.sessionPer})</span></p>
              
            </td>
            <td className="py-3 px-4">
              <p className="text-gray-700 text-sm">{product.period} <span className="text-xs text-gray-400"> ({product.periodPer})</span></p>              
            </td>
            <td className="py-3 px-4">
              <span className={`px-3 py-1 rounded-full text-sm`}>
                {product.change}
              </span>
            </td>
            
          </tr>
        ))}
      </tbody>
    </table>
    <div className='inline-flex gap-2'>
        <p className='text-xs pt-1 italic font-semibold text-gray-500'>Last data updated - 13min ago  </p>
        <button className='mt-2 text-red-600'><AiOutlineReload /></button>
    </div>
  </div>
  )
}

export default TotalVisit