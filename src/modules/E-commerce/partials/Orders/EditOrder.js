import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const EditOrder = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [orderData, setOrderData] = useState({
    product: '',
    date: '',
    payment: '',
    status: '',
    price: ''
  });

  useEffect(() => {
    const orders = JSON.parse(localStorage.getItem('orders')) || [];
    const orderToEdit = orders.find(order => order.id === parseInt(id));
    if (orderToEdit) {
      setOrderData(orderToEdit);
    }
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setOrderData({
      ...orderData,
      [name]: value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const orders = JSON.parse(localStorage.getItem('orders')) || [];
    const updatedOrders = orders.map(order =>
      order.id === parseInt(id) ? { ...orderData, id: parseInt(id) } : order
    );
    localStorage.setItem('orders', JSON.stringify(updatedOrders));
    navigate('/totalOrders', { state: { successMessage: 'Order successfully updated!' } });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-4xl mx-auto mt-12 ">
      <h2 className="text-lg font-semibold mb-4">Edit Order</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="grid grid-cols-2 gap-6">
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Product</label>
          <input
            type="text"
            name="product"
            value={orderData.product}
            onChange={handleInputChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Date</label>
          <input
            type="date"
            name="date"
            value={orderData.date}
            onChange={handleInputChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Payment</label>
          <select
            name="payment"
            value={orderData.payment}
            onChange={handleInputChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
            required
          >
            <option value="UPI">UPI</option>
            <option value="Banking">Banking</option>
            <option value="Paypal">Paypal</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Status</label>
          <select
            name="status"
            value={orderData.status}
            onChange={handleInputChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
            required
          >
            <option value="Pending">Pending</option>
            <option value="Completed">Completed</option>
            <option value="Cancelled">Cancelled</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Price</label>
          <input
            type="number"
            name="price"
            value={orderData.price}
            onChange={handleInputChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        </div>
        <div className="flex justify-end space-x-4 mt-6">
              <button
                type="button"
                onClick={() => navigate('/totalOrders')}
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-green-500 text-white px-4 py-2 rounded-md"
              >
                Save Changes
              </button>
            </div>
      </form>
    </div>
    </div>
  );
};

export default EditOrder;
