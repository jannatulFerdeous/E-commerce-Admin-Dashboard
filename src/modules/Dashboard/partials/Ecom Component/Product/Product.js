import React, { useState, useEffect } from 'react';
import { FaRegCalendarAlt } from "react-icons/fa";
import { IoTrashOutline } from "react-icons/io5";
import { MdOutlineEdit } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

export const Product = () => {
  const [product, setProduct] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedProduct = JSON.parse(localStorage.getItem('product')) || [];
    setProduct(storedProduct);
  }, []);

  const handleDelete = (id) => {
    const updatedProducts = product.filter(product => product.id !== id);
    localStorage.setItem('product', JSON.stringify(updatedProducts));
    setProduct(updatedProducts);
  };

  const handleEditProduct = (id) => {
    navigate(`/editPopularProduct/${id}`);
  };

  return (
    <div className="bg-white rounded-lg p-6 shadow-md w-full ">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-base font-semibold">Popular Products</h2>
        <button 
          onClick={() => navigate('/addPopularProduct')} 
          className="text-white px-6 py-2 rounded-md text-sm font-medium bg-green-500"
        >
          + Add Popular Product
        </button>
      </div>
      <table className="min-w-full bg-white">
        <thead>
          <tr className="w-full bg-gray-50">
            <th className="text-left py-2 px-4 font-medium text-sm">Product</th>
            <th className="text-left py-2 px-4 font-medium text-sm">Price</th>
            <th className="text-left py-2 px-4 font-medium text-sm">Sell</th>
            <th className="text-left py-2 px-4 font-medium text-sm">Status</th>
            <th className="text-left py-2 px-4 font-medium text-sm">Action</th>
          </tr>
        </thead>
        <tbody>
          {product.map((product) => (
            <tr key={product.id} className="border-b">
              <td className="py-4 flex items-center">
                <img src={product.image} alt={product.name} className="w-10 h-10 rounded-lg mr-3" />
                <div>
                  <p className="font-semibold text-gray-700 text-sm">{product.name}</p>
                  <p className="text-sm text-green-500">ID: {product.id}</p>
                </div>
              </td>
              <td className="py-4 px-4">
                <p className="text-gray-700">{product.price} <span className="text-sm line-through text-gray-400">{product.originalPrice}</span></p>
              </td>
              <td className="py-4 px-4">
                <p className="text-gray-700">{product.sell} <span className="text-sm text-gray-400">({product.originalSell})</span></p>
              </td>
              <td className="py-4 px-4">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${product.status === 'Stock' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
                  {product.status}
                </span>
              </td>
              <td className="py-4 px-4 flex space-x-2 text-xl">
                <button className="text-gray-400">
                  <MdOutlineEdit 
                  onClick={(e) => {
                    e.stopPropagation(); 
                    handleEditProduct(product.id);
                  }}
                  />
                </button>
                <button 
                  onClick={() => handleDelete(product.id)}
                  className="text-gray-400"
                >
                  <IoTrashOutline />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
