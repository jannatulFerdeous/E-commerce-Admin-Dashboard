import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const EditProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    price: '',
    pcs: '',
    status: ''
  });
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    const savedProducts = JSON.parse(localStorage.getItem('products')) || [];
    const productToEdit = savedProducts.find((p) => p.id === parseInt(id));
    if (productToEdit) {
      setProduct(productToEdit);
      setFormData({
        name: productToEdit.name,
        category: productToEdit.category,
        price: productToEdit.price,
        pcs: productToEdit.pcs,
        status: productToEdit.status
      });
    }
  }, [id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const savedProducts = JSON.parse(localStorage.getItem('products')) || [];
    const updatedProducts = savedProducts.map((p) =>
      p.id === parseInt(id) ? { ...p, ...formData } : p
    );
    localStorage.setItem('products', JSON.stringify(updatedProducts));
    setIsSuccess(true);
  };

  useEffect(() => {
    if (isSuccess) {
      const timer = setTimeout(() => {
        navigate(`/products`);
      }, 1000); 

      return () => clearTimeout(timer);
    }
  }, [isSuccess, navigate, id]);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-4xl mx-auto mt-12 ">
        <h2 className="text-2xl font-semibold mb-6 text-gray-700">Edit Product</h2>
        {product ? (
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-6">
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                  Product Name
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
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="category">
                  Category
                </label>
                <input
                  type="text"
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="price">
                  Price
                </label>
                <input
                  type="number"
                  id="price"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="pcs">
                  Pcs
                </label>
                <input
                  type="number"
                  id="pcs"
                  name="pcs"
                  value={formData.pcs}
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
                  <option value="Published">Published</option>
                  <option value="Unpublished">Unpublished</option>
                </select>
              </div>
            </div>

            <div className="flex justify-end space-x-4 mt-6">
              <button
                type="button"
                onClick={() => navigate('/products')}
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
          <p>Product not found</p>
        )}

        {isSuccess && (
          <div className="mt-4 p-4 bg-green-100 text-green-800 rounded">
            Product updated successfully!
          </div>
        )}
      </div>
    </div>
  );
};

export default EditProduct;
