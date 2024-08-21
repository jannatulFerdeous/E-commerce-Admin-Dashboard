import React, { useState } from "react";
import WorldMap from "react-svg-worldmap";


import flag1 from "../../../../../assets/image/flag.png"; 
import flag2 from "../../../../../assets/image/flag2.jpg";
import flag3 from "../../../../../assets/image/flag3.jpg"; 
import flag4 from "../../../../../assets/image/flag4.jpg"; 


const allCountryData = [
  { country: "cn", name: "China", traffic: 1389618778, change: "2.5%" },
  { country: "in", name: "India", traffic: 1311559204, change: "1.2%" },
  { country: "us", name: "United States", traffic: 35365, change: "2.5%" },
  { country: "de", name: "Germany", traffic: 24865, change: "1.2%" },
  { country: "es", name: "Spain", traffic: 18369, change: "0.8%" },
  { country: "bs", name: "Bahamas", traffic: 11325, change: "2.5%" },
  { country: "id", name: "Indonesia", traffic: 264935824, change: "2.5%" },
  { country: "pk", name: "Pakistan", traffic: 210797836, change: "1.8%" },
  { country: "br", name: "Brazil", traffic: 210301591, change: "2.1%" },
  { country: "ng", name: "Nigeria", traffic: 208679114, change: "1.7%" },
  { country: "bd", name: "Bangladesh", traffic: 161062905, change: "1.4%" },
  { country: "ru", name: "Russia", traffic: 141944641, change: "1.6%" },
  { country: "mx", name: "Mexico", traffic: 127318112, change: "1.3%" },
 
];

const flagMap = {
  bd: flag1,
  us: flag2,
  de: flag3,
  es: flag4,
};

const displayCountries = ["bd", "us", "de", "es"];

const OrganicTraffic = () => {
  const [tooltip, setTooltip] = useState({ show: false, country: null });

  const handleMouseEnter = (event, countryCode) => {
    const country = allCountryData.find(c => c.country === countryCode);
    const rect = event.target.getBoundingClientRect();
    setTooltip({
      show: true,
      country,
      x: rect.x + rect.width / 2,
      y: rect.y
    });
  };

  const handleMouseLeave = () => {
    setTooltip({ show: false, country: null });
  };

  const data = allCountryData.map(({ country, traffic }) => ({
    country,
    value: traffic
  }));

  const filteredCountryData = allCountryData.filter(({ country }) =>
    displayCountries.includes(country)
  );

  return (
    <div className="bg-white rounded-lg p-6 shadow-md w-full h-full flex">
      {/* Map section */}
      <div className="w-2/3 flex flex-col">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-xl font-semibold">Organic Traffic In World</h1>
          
        </div>
        <div className="w-full h-80 flex justify-center items-center">
          <WorldMap
            color="red"
            value-suffix="people"
            size="md"
            data={data}
            onClickFunction={(event, countryCode) =>
              handleMouseEnter(event, countryCode)
            }
            onMouseLeave={handleMouseLeave}
          />
        </div>
        {tooltip.show && tooltip.country && (
          <div
            className="absolute bg-black text-white px-2 py-1 rounded text-xs"
            style={{
              top: tooltip.y - 20,
              left: tooltip.x,
              transform: "translateX(-50%)",
            }}
          >
            <div className="font-semibold">{tooltip.country.name}</div>
            <div>Traffic: {tooltip.country.traffic.toLocaleString()}</div>
            <div>Change: {tooltip.country.change}</div>
          </div>
        )}
      </div>

      {/* Country details section */}
      <div className="w-1/3 ml-4 flex flex-col mt-14">
        {filteredCountryData.map((country, index) => (
          <div key={index} className="flex items-center mb-2">
            <img
              src={flagMap[country.country]}
              alt={`${country.name} flag`}
              className="w-6 h-6 mr-2"
            />
            <div>
              <div className="font-semibold">{country.traffic.toLocaleString()}</div>
              <div className="text-sm text-gray-500">
                {country.name} . Last Month {country.change}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrganicTraffic;
