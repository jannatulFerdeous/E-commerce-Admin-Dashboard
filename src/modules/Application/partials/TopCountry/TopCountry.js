import React from 'react';

import flag1 from "../../../../assets/image/us_flag.jpg";
import flag2 from "../../../../assets/image/flag4.jpg";
import flag3 from "../../../../assets/image/flag2.jpg";
import flag4 from "../../../../assets/image/flag5.jpg";

const TopCountry = () => {
  const countries = [
    {
      name: 'USA',
      count: '35,365',
      growth: '2.5%',
      img: flag1,
    },
    {
      name: 'Germany',
      count: '24,865',
      growth: '1.2%',
      img: flag2,
    },
    {
      name: 'Spain',
      count: '18,369',
      growth: '0.8%',
      img:flag3,
    },
    {
        name: 'Bahamas',
        count: '11,325',
        growth: '2.5%',
        img:flag4 ,
    },
  ];

  return (
    <div className="bg-white rounded-lg p-6 shadow-md w-72">
      <h2 className="text-base font-semibold mb-6">Top Country</h2>
      <div className="space-y-4">
        {countries.map((country, index) => (
          <div key={index}>
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center">
                <img src={country.img} alt={country.name} className="w-6 h-6 rounded-full mr-3" />
                <div>
                  <p className="text-lg font-semibold text-gray-800">{country.count}</p>
                  <p className="text-xs font-medium text-gray-500">
                    {country.name} . Last Month <span className="text-green-500">{country.growth}</span>
                  </p>
                </div>
              </div>
            </div>
            {/* Adding  hr */}
            {index < countries.length - 1 && <hr className="border-dashed border-1  border-gray-200" />}
          </div>
        ))}
      </div>
    </div>
  )
}

export default TopCountry;
