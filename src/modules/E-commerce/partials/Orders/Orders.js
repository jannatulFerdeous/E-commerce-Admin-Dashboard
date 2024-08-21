import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoTrashOutline } from "react-icons/io5";
import { MdOutlineEdit } from "react-icons/md";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchOrders = () => {
      const savedOrders = JSON.parse(localStorage.getItem('orders')) || [];
      setOrders(savedOrders);
    };

    fetchOrders(); 
  }, []);

  const handleViewAllOrderClick = () => {
    navigate('/totalOrders');
  };
  


    
    return (
        <div className="bg-white rounded-lg shadow-md p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-base font-semibold">Orders</h2>
        <button
          className="bg-green-500 text-white px-4 py-2 rounded-md text-sm font-medium"
          onClick={handleViewAllOrderClick}
        >
         View all
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Payment</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>

            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {orders.map((order) => (
              <tr key={order.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-green-400">{order.id}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 font-semibold">
                  {order.product}<br />
                  <span className="text-sm text-gray-400">{order.model}</span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.date}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.payment}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {order.status === "Completed" ? (
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      {order.status}
                    </span>
                  ) : order.status === "Cancelled" ? (
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                      {order.status}
                    </span>
                  ) : (
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                      {order.status}
                    </span>
                  )}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${order.price}</td>
                
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    );
}

export default Orders;
