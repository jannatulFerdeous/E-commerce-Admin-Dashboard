import React from 'react';

import product1 from "../../../../../assets/image/chrome.png";
import product2 from "../../../../../assets/image/micro-edge.png";
import product3 from "../../../../../assets/image/in-explorer.png";
import product4 from "../../../../../assets/image/opera.png";




const Report = () => {
    const products = [
        {
          name: 'Chrome',
          image: product1,
          sessions: '10853',
          sessionPer : '52%',
          bounceRate: '52.80%',
          transaction: '566',
          transactionPer: '92%',

        },
        {
            name: 'Microsoft Edge',
            image: product2,
            sessions: '2545',
            sessionPer : '47%',
            bounceRate: '47.54%',
            transaction: '498',
            transactionPer: '81%',
  
        },
        {
            name: 'Internet-Explorer',
            image: product3,
            sessions: '1836',
            sessionPer : '38%',
            bounceRate: '41.12%',
            transaction: '455',
            transactionPer: '74%',
  
        },
        {
            name: 'Opera',
            image: product4,
            sessions: '1958',
            sessionPer : '31%',
            bounceRate: '36.82%',
            transaction: '361',
            transactionPer: '61%',
  
        },
        {
            name: 'Microsoft Edge',
            image: product2,
            sessions: '2545',
            sessionPer : '47%',
            bounceRate: '47.54%',
            transaction: '498',
            transactionPer: '81%',
  
        },
        
        

        
        
      ];
    
  return (
    <div className="bg-white rounded-lg p-6 shadow-md w-full ">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-base font-semibold">Browser Used & Traffic Reports</h2>
      </div>
      <table className="min-w-full bg-white">
        <thead>
          <tr className="w-full bg-gray-50">
            <th className="text-left py-2 px-4 font-medium text-sm ">Browser</th>
            <th className="text-left py-2 px-4 font-medium text-sm ">Sessions</th>
            <th className="text-left py-2 px-4 font-medium text-sm ">Bounce Rate</th>
            <th className="text-left py-2 px-4 font-medium text-sm">Transactions</th>

          </tr>
        </thead>
        <tbody>
          {products.map((product,index) => (
            <tr key={index} className="border-b ">
              <td className="py-3 px-4 flex items-center ">
                <img src={product.image} alt={product.name} className="w-7 h-7 rounded-lg mr-4" />
                <div>
                  <p className="font-semibold text-gray-700 text-sm">{product.name}</p>
                </div>
              </td>
              <td className="py-3 px-4 ">
              <p className="text-gray-700 text-sm">{product.sessions} <span className="text-xs text-gray-400"> ({product.sessionPer})</span></p>
                
              </td>
              <td className="py-3 px-4">
                <span className={`px-3 py-1 rounded-full text-sm`}>
                  {product.bounceRate}
                </span>
              </td>
              <td className="py-3 px-4">
                <p className="text-gray-700 text-sm">{product.transaction} <span className="text-xs text-gray-400"> ({product.transactionPer})</span></p>              
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Report