import React from 'react';

const Amount = () => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-md w-full">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="amount">
          Amount
        </label>
        <input
          id="amount"
          type="text"
          placeholder="Amount"
          className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
          Message
        </label>
        <textarea
          id="message"
          placeholder="writing here.."
          className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows="3"
        ></textarea>
      </div>
      <div className="flex justify-start gap-2">
        <button className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none">
          Refund
        </button>
        <button className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 focus:outline-none">
          Decline
        </button>
      </div>
    </div>
  );
}

export default Amount;
