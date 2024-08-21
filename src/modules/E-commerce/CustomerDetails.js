import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CustomerProfile from './partials/Profile/CustomerProfile';
import Asset from './partials/Profile/Asset';
import Orders from './partials/Orders/Orders';

const CustomerDetails = () => {
    const { id } = useParams();
    const [customers, setCustomers] = useState(null);

    useEffect(() => {
        const savedCustomers = JSON.parse(localStorage.getItem('customers')) || [];
        const foundCustomers = savedCustomers.find((item) => item.id.toString() === id);
        setCustomers(foundCustomers);
      }, [id]);
    
      if (!customers) {
        return <div className="flex justify-center items-center min-h-screen bg-gray-100">Loading...</div>;
      }


  
    return (
        <div className={`flex-1 flex flex-col transition-all duration-300 m-10 mt-32`}>       
            <div className="flex space-x-6">
                <div className="flex-2">
                    {customers && <CustomerProfile customer={customers} />}
                </div>
                <div className="flex-1">
                    <Asset />
                </div>
            </div>
            <div className='mt-6'>
                <Orders />
            </div>
        </div>
    )
}

export default CustomerDetails;
