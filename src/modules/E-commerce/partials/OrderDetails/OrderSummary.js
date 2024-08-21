import React from 'react';

const OrderSummary = () => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-md w-full">
      <div className="mb-4 flex justify-between items-center">
        <h2 className="text-lg font-semibold">Order Summary</h2>
        <span className="bg-orange-100 text-orange-600 text-xs font-medium px-3 py-1 rounded-full">Payment pending</span>
      </div>
      <div className="space-y-2">
        <div className="flex justify-between">
          <span className="text-gray-700">Items subtotal :</span>
          <span className="text-gray-700">$1060</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-700">Discount :</span>
          <span className="text-red-500">-$80</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-700">Tax :</span>
          <span className="text-gray-700">$180.70</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-700">Subtotal :</span>
          <span className="text-gray-700">$1160.70</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-700">Shipping Cost :</span>
          <span className="text-gray-700">$20</span>
        </div>
      </div>
      <div className="mt-4 pt-4 border-t border-gray-200 flex justify-between items-center">
        <span className="text-lg font-semibold">Total :</span>
        <span className="text-lg font-semibold text-gray-700">$1180.70</span>
      </div>
    </div>
  );
};

export default OrderSummary;
