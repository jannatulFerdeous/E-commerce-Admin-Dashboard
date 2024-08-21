import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddCustomer = () => {
  const [formData, setFormData] = useState({
    name: '',
    nickname: '',
    email: '',
    status: 'Active',
    order: '',
    spent: '',
    avatar: '',
    countryFlag: '',
    languages: [], // Holds the selected languages as an array
  });

  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState('');
  const [flagFile, setFlagFile] = useState(null);
  const [flagPreview, setFlagPreview] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageFile(file);
        setImagePreview(reader.result);
        setFormData({ ...formData, avatar: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleFlagChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFlagFile(file);
        setFlagPreview(reader.result);
        setFormData({ ...formData, countryFlag: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleLanguageChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      // Add the selected language
      setFormData({ ...formData, languages: [...formData.languages, value] });
    } else {
      // Remove the unselected language
      setFormData({
        ...formData,
        languages: formData.languages.filter((language) => language !== value),
      });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newCustomer = { ...formData, id: Date.now() };

    const existingCustomers = JSON.parse(localStorage.getItem('customers')) || [];

    // Add new customer to the list
    const updatedCustomers = [...existingCustomers, newCustomer];
    localStorage.setItem('customers', JSON.stringify(updatedCustomers));

    // Show success message
    setSuccessMessage('Customer added successfully!');

    setTimeout(() => {
      navigate('/customerInfo');
    }, 2000); // 2 seconds delay

    // Reset form fields
    setFormData({
      name: '',
      nickname: '',
      email: '',
      status: 'Active',
      order: '',
      spent: '',
      phone: '',
      avatar: '',
      countryFlag: '',
      languages: [], // Reset languages
    });
    setImageFile(null);
    setImagePreview('');
    setFlagFile(null);
    setFlagPreview('');
  };

  return (
    <div className="flex justify-center items-center min-h-screen p-4 mt-14">
      <div className="bg-white rounded-lg shadow-lg max-w-5xl w-full p-8">
        <h2 className="text-xl font-semibold mb-4">Add New Customer</h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-4 mb-4">
            {/* Name Fields */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Customer Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Customer Nickname</label>
              <input
                type="text"
                name="nickname"
                value={formData.nickname}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2"
                required
              />
            </div>

            {/* Email, Status, and Order */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2"
                required
              />
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
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
                <option value="VIP">VIP</option>
                <option value="Loyal">Loyal</option>
                <option value="Referral">Referral</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Order</label>
              <input
                type="number"
                name="order"
                value={formData.order}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Spent</label>
              <input
                type="number"
                name="spent"
                value={formData.spent}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2"
                required
              />
            </div>
              {/* Language Checkbox */}
          <div>
              <label className="block text-sm font-medium text-gray-700">Preferred Languages</label>
              <div className="mt-2">
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    name="languages"
                    value="English"
                    checked={formData.languages.includes('English')}
                    onChange={handleLanguageChange}
                    className="form-checkbox text-green-500"
                  />
                  <span className="ml-2">English</span>
                </label>
                <label className="inline-flex items-center ml-6">
                  <input
                    type="checkbox"
                    name="languages"
                    value="Bangla"
                    checked={formData.languages.includes('Bangla')}
                    onChange={handleLanguageChange}
                    className="form-checkbox text-green-500"
                  />
                  <span className="ml-2">Bangla</span>
                </label>
                <label className="inline-flex items-center ml-6">
                  <input
                    type="checkbox"
                    name="languages"
                    value="Hindi"
                    checked={formData.languages.includes('Hindi')}
                    onChange={handleLanguageChange}
                    className="form-checkbox text-green-500"
                  />
                  <span className="ml-2">Hindi</span>
                </label>
                <label className="inline-flex items-center ml-6">
                  <input
                    type="checkbox"
                    name="languages"
                    value="Other"
                    checked={formData.languages.includes('Other')}
                    onChange={handleLanguageChange}
                    className="form-checkbox text-green-500"
                  />
                  <span className="ml-2">Other</span>
                </label>
              </div>
            </div>
                    

            {/* Avatar and Flag Upload */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Customer Picture</label>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2"
                required
              />
            </div>
            <div>
              {imagePreview && (
                <img src={imagePreview} alt="Customer Preview" className="w-32 h-32 object-cover rounded-lg mt-4" />
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Country Flag</label>
              <input
                type="file"
                accept="image/*"
                onChange={handleFlagChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2"
                required
              />
            </div>
            <div>
              {flagPreview && (
                <img src={flagPreview} alt="Flag Preview" className="w-32 h-32 object-cover rounded-lg mt-4" />
              )}
            </div>
          </div>
          
          
          {/* Submit Button */}
          <button
            type="submit"
            className="bg-green-500 text-white px-4 py-2 rounded-md text-sm font-medium"
          >
            Save Customer
          </button>
        </form>

        {/* Success Message */}
        {successMessage && (
          <div className="mt-4 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
            <strong className="font-bold">{successMessage}</strong>
            <span className="block sm:inline"> Redirecting to customers page...</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default AddCustomer;
