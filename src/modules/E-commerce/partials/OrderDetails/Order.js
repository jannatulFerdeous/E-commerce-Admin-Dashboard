import React from 'react';

import product1 from "../../../../assets/image/product1.png";
import product2 from "../../../../assets/image/product2.png";
import product3 from "../../../../assets/image/product3.png";
import product4 from "../../../../assets/image/product4.png";
import product5 from "../../../../assets/image/product5.png";

const Order = () => {
    const products = [
        {
            name: 'Royal Purse',
            image: product1,
            price: '$80',
            quantity: 3,
            total: '$240',
            details: 'Pure Leather 100%',
        },
        {
            name: 'Apple Watch',
            image: product2,
            price: '$100',
            quantity: 1,
            total: '$100',
            details: 'Size-05 (Model 2021)',
        },
        {
            name: 'Cosco Volleyball',
            image: product3,
            price: '$20',
            quantity: 4,
            total: '$80',
            details: 'Size-04 (Model 2021)',
        },
        {
            name: 'Reebok Shoes',
            image: product4,
            price: '$50',
            quantity: 10,
            total: '$500',
            details: 'Size-08 (Model 2021)',
        },
        {
            name: 'Morden Chair',
            image: product5,
            price: '$70',
            quantity: 2,
            total: '$140',
            details: 'Size-Medium (Model 2021)',
        },
    ];

    return (
        <div className="bg-white rounded-lg p-6 shadow-md w-full">
            <div className='flex justify-between item-center'>
              <div className="mb-4">
                  <h2 className="text-lg font-semibold">Orders #234755</h2>
                  <p className="text-sm text-gray-500">15 March 2024 at 09:45 am from draft orders</p>
              </div>
              <div className="">
                <button className="text-white px-4 py-2 rounded-md text-sm font-medium bg-green-500">
                    + Add Item
                </button>
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
                    {products.map((product, index) => (
                        <tr key={index} className=" border-b border-dashed">
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

export default Order;
