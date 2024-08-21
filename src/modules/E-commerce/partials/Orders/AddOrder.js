import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddOrder = () => {
  const [formData, setFormData] = useState({
    product: '',
    date: '',
    model: '',
    payment: 'UPI',
    status: 'Pending',
    price: ''
  });

  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newOrder = { ...formData, id: Date.now() };

    const existingOrders = JSON.parse(localStorage.getItem('orders')) || [];
    const updatedOrders = [...existingOrders, newOrder];

    localStorage.setItem('orders', JSON.stringify(updatedOrders));

    setSuccessMessage('Order added successfully!');

    setTimeout(() => {
      navigate('/totalOrders');
    }, 2000);

    setFormData({
      product: '',
      date: '',
      model: '',
      payment: 'UPI',
      status: 'Pending',
      price: ''
    });
  };

  return (
    <div className="flex justify-center items-center min-h-screen p-4 mt-14">
      <div className="bg-white rounded-lg shadow-lg max-w-5xl w-full p-8">
        <h2 className="text-xl font-semibold mb-4">Add New Order</h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Product</label>
              <input
                type="text"
                name="product"
                value={formData.product}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Date</label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Model</label>
              <input
                type="text"
                name="model"
                value={formData.model}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Payment</label>
              <select
                name="payment"
                value={formData.payment}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2"
                required
              >
                <option value="UPI">UPI</option>
                <option value="Banking">Banking</option>
                <option value="Paypal">Paypal</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Status</label>
              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2"
                required
              >
                <option value="Pending">Pending</option>
                <option value="Completed">Completed</option>
                <option value="Cancelled">Cancelled</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Price</label>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2"
                required
              />
            </div>
          </div>
          <button
            type="submit"
            className="bg-green-500 text-white px-4 py-2 rounded-md text-sm font-medium"
          >
            Save Order
          </button>
        </form>

        {successMessage && (
          <div className="mt-4 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
            <strong className="font-bold">{successMessage}</strong>
            <span className="block sm:inline"> Redirecting to orders page...</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default AddOrder;
