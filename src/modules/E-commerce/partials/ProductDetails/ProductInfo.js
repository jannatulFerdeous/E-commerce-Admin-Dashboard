import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';


const ProductInfo = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const navigate = useNavigate(); 

  useEffect(() => {
    const savedProducts = JSON.parse(localStorage.getItem('products')) || [];
    const foundProduct = savedProducts.find((item) => item.id.toString() === id);
    setProduct(foundProduct);
  }, [id]);

  if (!product) {
    return <div className="flex justify-center items-center min-h-screen bg-gray-100">Loading...</div>;
  }

  const handleViewAllClick = () => {
    navigate('/products');
  };
  

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white rounded-lg shadow-lg max-w-5xl w-full p-8 flex">
        <div className="flex flex-col space-y-4">
   
          {[1, 2, 3].map((_, index) => (
            <img
              key={index}
              src={product.image}
              alt={`${product.name} - ${index}`}
              className="w-16 h-16 object-cover border border-gray-200 rounded-lg"
            />
          ))}
        </div>
        <div className="flex-shrink-0 ml-8">
      
          <img
            src={product.image}
            alt={product.name}
            className="w-72 h-72 object-cover border border-gray-200 rounded-lg"
          />
        </div>
        <div className="ml-10 flex-1">

          <h2 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h2>
          <p className="text-lg text-gray-600 mb-2">Category: {product.category}</p>
          <p className="text-lg text-gray-600 mb-2">Pcs: {product.pcs}</p>
          <p className="text-lg text-gray-600 mb-2">Status: {product.status}</p>
          <p className="text-lg text-gray-600 mb-4">Created At: {product.createdAt}</p>
          <div className="flex items-center space-x-2 mb-4">
            <span className="text-red-500 text-2xl font-bold">Price: {product.price}</span>
          </div>
          <p className="text-gray-600 mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit animi veniam dicta soluta, 
            consequuntur debitis deserunt dolor nobis magnam quia molestiae quae expedita quidem dolorem repellendus 
            accusamus odio voluptate laudantium.
          </p>
          <button
            className="border-2 border-green-500 text-blue-950 hover:text-white font-bold py-3 px-6 w-60 rounded-lg hover:bg-green-500 transition duration-300"
            onClick={handleViewAllClick}
          >
            More
          </button>
        </div>
      </div>
    </div>

  );
};

export default ProductInfo;
