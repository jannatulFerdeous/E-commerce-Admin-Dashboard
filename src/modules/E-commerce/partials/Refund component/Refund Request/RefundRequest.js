import React, { useState, useEffect } from 'react';

import { PiSealWarning } from "react-icons/pi";

const RefundRequest = () => {
    const [refunds, setRefunds] = useState([]);

    useEffect(() => {
        fetch('/fake data/refundProducts.json')
          .then((response) => response.json())
          .then((data) => setRefunds(data));
      }, []);

    return (
        <div className="bg-white rounded-lg p-6 shadow-md w-full">
            <div className='flex justify-between items-center mb-4'>
                <div>
                    <h2 className="text-lg font-semibold">Refund Request</h2>
                    <p className="text-sm text-gray-500">Orders #234755</p>
                </div>
                <div className="flex items-center space-x-2 text-gray-600 text-sm font-medium">
                    <PiSealWarning />
                    <button>Order Detail</button>
                </div>
            </div>
            
            <table className="min-w-full bg-white">
                <thead>
                    <tr className="w-full bg-gray-50">
                        <th className="text-left py-3 px-4 font-medium text-sm">Item</th>
                        <th className="text-left py-3 px-4 font-medium text-sm">Price</th>
                        <th className="text-left py-3 px-4 font-medium text-sm">Quantity</th>
                        <th className="text-left py-3 px-4 font-medium text-sm">Total</th>
                    </tr>
                </thead>
                <tbody>
                    {refunds.map((product, index) => (
                        <tr key={index} className="border-b border-dashed">
                            <td className="py-4 px-4 flex items-center">
                                <img src={product.image} alt={product.name} className="w-10 h-10 rounded-lg mr-3" />
                                <div>
                                    <p className="font-semibold text-gray-700 text-sm">{product.name}</p>
                                    <p className="text-sm text-gray-500">{product.details}</p>
                                </div>
                            </td>
                            <td className="text-sm py-4 px-4 text-gray-700">{product.price}</td>
                            <td className="text-sm py-4 px-4 text-gray-700">{product.quantity}</td>
                            <td className="text-sm py-4 px-4 text-gray-700">{product.total}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default RefundRequest;
