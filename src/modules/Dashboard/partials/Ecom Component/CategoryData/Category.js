import React, { useState } from 'react';

const Category = () => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const categories = [
    { name: 'Mobile', items: 1380 },
    { name: 'Men Fashion', items: 1120 },
    { name: 'Women Fashion', items: 950 },
    { name: 'Beauty', items: 850 },
    { name: 'Health', items: 780 },
    { name: 'Sports', items: 620 },
    { name: 'Kids', items: 450 },
    { name: 'Music', items: 320 },
  ];

  const handleMouseEnter = (index) => {
    setHoveredItem(index);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  return (
    <div className="bg-white rounded-lg p-6 shadow-md w-auto h-full relative">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Categories Data</h2>
        <span className='font-semibold text-gray-400'>+24 Categories</span>
      </div>
      <ul className="space-y-2">
        {categories.map((category, index) => (
          <li
            key={index}
            className="relative flex items-center"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >

   
            <div className="bg-green-100 hover:bg-green-300 transition-all duration-300 rounded-full p-1 flex-grow">
              <div className="text-center">{category.name}</div>
            </div>
            {hoveredItem === index && (
              <div className="absolute left-44 top-0 ml-4 bg-white p-3 border rounded-lg shadow-lg z-10">
                <div className="font-semibold">{category.name}</div>
                <hr className="mt-2" />
                <div className="text-sm text-gray-600 flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                  Items: {category.items}
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
      <button className="mt-4 bg-green-500 text-white px-2 py-2 rounded-lg w-full">
        More Detail →
      </button>
    </div>
  );
};

export default Category;
