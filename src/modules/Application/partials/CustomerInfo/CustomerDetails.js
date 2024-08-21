import React, { useState, useEffect } from 'react';



const CustomerDetails = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    fetch('/fake data/customer.json')
      .then((response) => response.json())
      .then((data) => setCustomers(data));
  }, []);

  return (
    <div className="bg-white rounded-lg p-6 shadow-md w-full">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-base font-semibold">Customers Details</h2>
      </div>
      <table className="min-w-full bg-white">
        <thead>
          <tr className="w-full bg-gray-50">
            <th className="text-left py-2 px-4 font-medium text-sm">Name</th>
            <th className="text-left py-2 px-4 font-medium text-sm">Ext.</th>
            <th className="text-left py-2 px-4 font-medium text-sm">City</th>
            <th className="text-left py-2 px-4 font-medium text-sm">Start Date</th>
            <th className="text-left py-2 px-4 font-medium text-sm">Completion</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => (
            <tr key={customer.id} className="border-b">
              <td className="py-4 flex items-center">
                <img src={customer.avatar} alt={customer.name} className="w-10 h-10 rounded-full mr-3" />
                <div>
                  <p className="font-semibold text-gray-700 text-sm">{customer.name}</p>
                </div>
              </td>
              <td className="py-4 px-4">
                <p className="text-gray-700">{customer.ext}</p>
              </td>
              <td className="py-4 px-4">
                <p className="text-gray-700">{customer.city}</p>
              </td>
              <td className="py-4 px-4">
                <p className="text-gray-700">{customer.startDate}</p>
              </td>
              <td className="py-4 px-4">
                <p className="text-gray-700">{customer.completion}</p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CustomerDetails;
