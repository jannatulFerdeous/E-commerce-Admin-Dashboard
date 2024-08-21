import React, { useState, useEffect } from 'react';

import { MdOutlineEdit } from "react-icons/md";
import { IoTrashOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

const CustomersInfo = () => {
    const [customers, setCustomers] = useState([]);
    const navigate = useNavigate();

    
    useEffect(() => {
        const savedCustomers = JSON.parse(localStorage.getItem('customers')) || [];
        setCustomers(savedCustomers);
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

    const handleCustomerClick = (id) => {
        navigate(`/customerDetails/${id}`);
    };

    const handleAddCustomerClick = () => {
        navigate(`/addCustomer`);
    };

    const handleEditCustomerClick = (id) => {
        navigate(`/editCustomer/${id}`);
      };
    const handleDeleteCustomer = (id) => {
        const customerToDelete = customers.find(customers => customers.id === id);
    
        if (window.confirm(`Are you sure you want to delete the product "${customerToDelete.name}"?`)) {
          const updatedCustomers = customers.filter(customers => customers.id !== id);
          setCustomers(updatedCustomers);
          localStorage.setItem('customers', JSON.stringify(updatedCustomers));
          alert(`customers "${customerToDelete.name}" has been successfully deleted.`);
        }
      };

    const filteredCustomers = customers.filter((customer) =>
        customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        customer.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        customer.status.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const totalPages = Math.ceil(filteredCustomers.length / entriesPerPage);
    const startIndex = (currentPage - 1) * entriesPerPage;
    const selectedCustomers = filteredCustomers.slice(startIndex, startIndex + entriesPerPage);

    return (
        <div className="bg-white rounded-lg p-6 shadow-md w-full">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-base font-semibold">Customers</h2>
                <div className="flex space-x-2">
                    <button className="bg-green-100 text-green-600 px-4 py-2 rounded-md">Filter</button>
                    <button className="bg-green-500 text-white px-4 py-2 rounded-md text-sm font-medium"
                    onClick={handleAddCustomerClick}>+ Add Customer</button>
                </div>
            </div>
            <div className="flex justify-between items-center mb-4">
                <div className='inline-flex gap-1'>
                    <select value={entriesPerPage} onChange={handleEntriesChange} className="border border-gray-300 rounded px-2 py-1">
                        <option value="5">05</option>
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

            {/* Table section */}
            <table className="min-w-full bg-white">
                <thead>
                    <tr className="bg-gray-50">
                        <th className="text-left py-2 px-4 font-medium text-sm">Customer</th>
                        <th className="text-left py-2 px-4 font-medium text-sm">Email</th>
                        <th className="text-left py-2 px-4 font-medium text-sm">Status</th>
                        <th className="text-left py-2 px-4 font-medium text-sm">Order</th>
                        <th className="text-left py-2 px-4 font-medium text-sm">Spent</th>
                        <th className="text-left py-2 px-4 font-medium text-sm">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {selectedCustomers.map((customer) => (
                        <tr key={customer.id} className="border-b">
                            <td className="py-4 px-4 flex items-center cursor-pointer" onClick={() => handleCustomerClick(customer.id)}>
                                <input type="checkbox" className="mr-2" />
                                <img src={customer.avatar} alt={customer.name} className="w-10 h-10 rounded-full mr-3" />
                                <div>
                                    <p className="font-semibold text-gray-700 text-sm">{customer.name}</p>
                                </div>
                                
                            </td>
                            
                            <td className="py-4 px-4">{customer.email}</td>
                            <td className="py-4 px-4">
                                <span className={`px-3 py-1 rounded-full text-sm font-medium ${customer.status === 'VIP' ? 'bg-pink-100 text-pink-600' :
                                    customer.status === 'Loyal' ? 'bg-teal-100 text-teal-600' :
                                    customer.status === 'Referral' ? 'bg-blue-100 text-blue-600' :
                                    customer.status === 'Inactive' ? 'bg-gray-100 text-gray-600' :
                                    'bg-green-100 text-green-600'}`}>
                                    {customer.status}
                                </span>
                            </td>
                            <td className="py-4 px-4">{customer.order}</td>
                            <td className="py-4 px-4">${customer.spent}</td>
                            <td className="py-4 px-4 flex space-x-2 text-xl">
                                <button className="text-gray-400">
                                    <MdOutlineEdit 
                                    onClick={(e) => {
                                        e.stopPropagation(); 
                                        handleEditCustomerClick(customer.id);
                                      }}/>
                                </button>
                                <button className="text-gray-400">
                                    <IoTrashOutline 
                                    onClick={(e) => {
                                        e.stopPropagation(); 
                                        handleDeleteCustomer(customer.id);
                                      }}/>
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="flex justify-between items-center mt-4">
                <p className="text-sm text-gray-500">
                    Showing {startIndex + 1} to {Math.min(startIndex + entriesPerPage, filteredCustomers.length)} of {filteredCustomers.length} entries
                </p>
                <div className="flex items-center space-x-2">
                    {Array.from({ length: totalPages }, (_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentPage(index + 1)}
                            className={`px-3 py-1 rounded border border-gray-300 ${currentPage === index + 1 ? 'bg-green-500 text-white' : 'bg-gray-50 text-gray-500'}`}
                        >
                            {index + 1}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default CustomersInfo
