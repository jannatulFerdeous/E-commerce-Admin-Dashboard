import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddPopularProduct = () => {
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    originalPrice: '',
    sell: '',
    originalSell: '',
    status: 'Published',
    image: ''
  });

  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState('');
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
        setFormData({ ...formData, image: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newProduct = { ...formData, id: Date.now() };

    const existingProducts = JSON.parse(localStorage.getItem('product')) || [];
    const updatedProducts = [...existingProducts, newProduct];

    localStorage.setItem('product', JSON.stringify(updatedProducts));

    setSuccessMessage('Popular Product added successfully!');

    setTimeout(() => {
      navigate('/ecommerce');
    }, 2000);

    setFormData({
      name: '',
      price: '',
      originalPrice: '',
      sell: '',
      originalSell: '',
      status: 'Out of Stock',
      image: ''
    });
    setImageFile(null);
    setImagePreview('');
  };

  return (
    <div className="flex justify-center items-center min-h-screen p-4 mt-14">
      <div className="bg-white rounded-lg shadow-lg max-w-5xl w-full p-8">
        <h2 className="text-xl font-semibold mb-4">Add Popular Product</h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-4 mb-4">
            {/* Form Fields */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Product Name</label>
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
            <div>
              <label className="block text-sm font-medium text-gray-700">Original Price</label>
              <input
                type="number"
                name="originalPrice"
                value={formData.originalPrice}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Sell</label>
              <input
                type="number"
                name="sell"
                value={formData.sell}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Original Sell</label>
              <input
                type="number"
                name="originalSell"
                value={formData.originalSell}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2"
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
                <option value="Stock">Stock</option>
                <option value="Out of Stock">Out of Stock</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Image</label>
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
                <img src={imagePreview} alt="Preview" className="w-32 h-32 object-cover rounded-lg mt-4" />
              )}
            </div>
          </div>
          <button
            type="submit"
            className="bg-green-500 text-white px-4 py-2 rounded-md text-sm font-medium"
          >
            Save Product
          </button>
        </form>

        {/* Success Message */}
        {successMessage && (
          <div className="mt-4 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
            <strong className="font-bold">{successMessage}</strong>
            <span className="block sm:inline"> Redirecting to products page...</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default AddPopularProduct;
