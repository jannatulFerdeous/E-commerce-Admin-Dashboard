import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const EditCustomer = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [customer, setCustomer] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    status: ''
  });
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    const savedCustomers = JSON.parse(localStorage.getItem('customers')) || [];
    const customerToEdit = savedCustomers.find((c) => c.id === parseInt(id));
    if (customerToEdit) {
      setCustomer(customerToEdit);
      setFormData({
        name: customerToEdit.name,
        nickname: customerToEdit.nickname,
        email: customerToEdit.email,
        phone: customerToEdit.phone,
        address: customerToEdit.address,
        status: customerToEdit.status,
        order: customerToEdit.order,
        spent:  customerToEdit.spent,
      });
    }
  }, [id]);

//   name: '',
//       nickname: '',
//       email: '',
//       status: 'Active',
//       order: '',
//       spent: '',
//       phone: '',
//       avatar: '',
//       countryFlag: '',
//       languages: [], 
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const savedCustomers = JSON.parse(localStorage.getItem('customers')) || [];
    const updatedCustomers = savedCustomers.map((c) =>
      c.id === parseInt(id) ? { ...c, ...formData } : c
    );
    localStorage.setItem('customers', JSON.stringify(updatedCustomers));
    setIsSuccess(true);
  };

  useEffect(() => {
    if (isSuccess) {
      const timer = setTimeout(() => {
        navigate(`/customerInfo`);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [isSuccess, navigate, id]);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-4xl mx-auto mt-12">
        <h2 className="text-2xl font-semibold mb-6 text-gray-700">Edit Customer</h2>
        {customer ? (
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-6">
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                  Nick Name
                </label>
                <input
                  type="text"
                  id="nickname"
                  name="nickname"
                  value={formData.nickname}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="order">
                  Order
                </label>
                <input
                  type="number"
                  id="number"
                  name="phone"
                  value={formData.order}

                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="order">
                  Spent
                </label>
                <input
                  type="number"
                  id="number"
                  name="spent"
                  value={formData.spent}

                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="status">
                  Status
                </label>
                <select
                  id="status"
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  required
                >
                  <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
                <option value="VIP">VIP</option>
                <option value="Loyal">Loyal</option>
                <option value="Referral">Referral</option>
                </select>
              </div>
            </div>

            <div className="flex justify-end space-x-4 mt-6">
              <button
                type="button"
                onClick={() => navigate('/customerInfo')}
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
        ) : (
          <p>Customer not found</p>
        )}

        {isSuccess && (
          <div className="mt-4 p-4 bg-green-100 text-green-800 rounded">
            Customer updated successfully!
          </div>
        )}
      </div>
    </div>
  );
};

export default EditCustomer;
