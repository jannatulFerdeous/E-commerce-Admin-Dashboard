import React, { useState, useEffect } from 'react';
import { MdOutlineEdit } from "react-icons/md";
import { IoTrashOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

const ProductDetails = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
 
    const savedProducts = JSON.parse(localStorage.getItem('products')) || [];
    setProducts(savedProducts);
  }, []);

  const [entriesPerPage, setEntriesPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');

  const handleEntriesChange = (event) => {
    setEntriesPerPage(Number(event.target.value));
    setCurrentPage(1);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1);
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.price.toString().includes(searchTerm)
  );

  const totalPages = Math.ceil(filteredProducts.length / entriesPerPage);
  const startIndex = (currentPage - 1) * entriesPerPage;
  const selectedProducts = filteredProducts.slice(startIndex, startIndex + entriesPerPage);

  const handleProductClick = (id) => {
    navigate(`/productInfo/${id}`);
  };

  const handleAddProductClick = () => {
    navigate('/addProduct');
  };

  const handleEditProductClick = (id) => {
    navigate(`/editProduct/${id}`);
  };

  const handleDeleteProduct = (id) => {
    const productToDelete = products.find(product => product.id === id);

    if (window.confirm(`Are you sure you want to delete the product "${productToDelete.name}"?`)) {
      const updatedProducts = products.filter(product => product.id !== id);
      setProducts(updatedProducts);
      localStorage.setItem('products', JSON.stringify(updatedProducts));
      alert(`Product "${productToDelete.name}" has been successfully deleted.`);
    }
  };

  return (
    <div className="bg-white rounded-lg p-6 shadow-md w-full">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-base font-semibold">Products</h2>
        <div className="flex space-x-2">
          <button className="bg-green-100 text-green-600 px-4 py-2 rounded-md">Filter</button>
          <button className="bg-green-500 text-white px-4 py-2 rounded-md text-sm font-medium" onClick={handleAddProductClick}>+ Add Product</button>
        </div>
      </div>

      <div className="flex justify-between items-center mb-4">
        <div className='inline-flex gap-1'>
          <select value={entriesPerPage} onChange={handleEntriesChange} className="border border-gray-300 rounded px-2 py-1">
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
          </select>
          <p className='mt-1 text-sm text-gray-500 font-medium'> Entries per page</p>
        </div>
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="border border-gray-300 rounded p-1 text-sm"
        />
      </div>

      {/* Table Section */}
      <table className="min-w-full bg-white">
        <thead>
          <tr className="bg-gray-50">
            <th className="text-left py-2 px-4 font-medium text-sm">Product Name</th>
            <th className="text-left py-2 px-4 font-medium text-sm">Category</th>
            <th className="text-left py-2 px-4 font-medium text-sm">Pcs</th>
            <th className="text-left py-2 px-4 font-medium text-sm">Price</th>
            <th className="text-left py-2 px-4 font-medium text-sm">Status</th>
            <th className="text-left py-2 px-4 font-medium text-sm">Created at</th>
            <th className="text-left py-2 px-4 font-medium text-sm">Action</th>
          </tr>
        </thead>
        <tbody>
          {selectedProducts.map((product) => (
            <tr
              key={product.id}
              className="border-b cursor-pointer"
              onClick={() => handleProductClick(product.id)}
            >
              <td className="py-4 px-4 flex items-center">
                <input type="checkbox" className="mr-2" />
                <img src={product.image} alt={product.name} className="w-10 h-10 rounded-lg mr-3" />
                <div>
                  <p className="font-semibold text-gray-700 text-sm">{product.name}</p>
                  <p className="text-sm text-gray-500">Size-08 (Model 2021)</p>
                </div>
              </td>
              <td className="py-4 px-4">{product.category}</td>
              <td className="py-4 px-4">{product.pcs}</td>
              <td className="py-4 px-4">${product.price}</td>
              <td className="py-4 px-4">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${product.status === 'Published' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
                  {product.status}
                </span>
              </td>
              <td className="py-4 px-4">{product.createdAt}</td>
              <td className="py-4 px-4 flex space-x-2 text-xl">
              <button 
                  className="text-gray-400" 
                  onClick={(e) => {
                    e.stopPropagation(); 
                    handleEditProductClick(product.id);
                  }}
                >
                  <MdOutlineEdit />
                </button>
                <button 
                  className="text-gray-400" 
                  onClick={(e) => {
                    e.stopPropagation(); 
                    handleDeleteProduct(product.id);
                  }}
                >
                  <IoTrashOutline />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-4">
        <p className="text-sm text-gray-500">
          Showing {startIndex + 1} to {Math.min(startIndex + entriesPerPage, filteredProducts.length)} of {filteredProducts.length} entries
        </p>
        <div className="flex items-center space-x-2">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index + 1)}
              className={`px-3 py-1 rounded border border-gray-300 ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-50 text-gray-500'}`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
