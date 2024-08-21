import React from 'react';
import RefundRequest from './partials/Refund component/Refund Request/RefundRequest';
import OrderSummary from './partials/OrderDetails/OrderSummary';
import Amount from './partials/Refund component/Amount/Amount';

const Refunds = () => {
  return (
    <div className="flex flex-col transition-all duration-300 m-10 mt-32">
      <div className="flex flex-row gap-6">
        <div className="flex-1">
          <RefundRequest />
        </div>
        <div className="w-1/3">
          <OrderSummary />
        </div>
      </div>
    
      <div className="flex flex-row justify-end gap-6 mt-6">
        <div className="w-1/3 -mt-52">
          <Amount />
        </div>
      </div>
    </div>
  );
}

export default Refunds;
