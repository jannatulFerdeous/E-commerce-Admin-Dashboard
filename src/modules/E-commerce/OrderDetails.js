import React from 'react';
import Order from './partials/OrderDetails/Order';
import OrderSummary from './partials/OrderDetails/OrderSummary';
import Bought from './partials/OrderDetails/Bought';
import OrderInfor from './partials/OrderDetails/OrderInfor';

const OrderDetails = () => {
  return (
    <div className="flex flex-col transition-all duration-300 m-10 mt-32">
      
    
      <div className="flex flex-row gap-6">
        <div className="flex-1">
          <Order />
        </div>
        <div className="w-1/3">
          <OrderSummary />
        </div>
      </div>

    
      <div className="flex flex-row gap-6 mt-6">
        <div className="flex-1">
          <Bought />
        </div>
        <div className="w-1/3 -mt-52">
          <OrderInfor />
        </div>
      </div>
    </div>
  );
}

export default OrderDetails;
