import React from "react";
import '../App.css';

function BankHomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <div className="max-w-3xl w-full bg-white shadow-lg rounded-lg p-6 border border-gray-200">
        <h1 className="text-3xl font-bold text-gray-900">Welcome, User!</h1>
        
        {/* Balance Section */}
        <div className="mt-4 p-4 bg-blue-100 rounded-lg text-center">
          <h2 className="text-xl font-semibold text-gray-800">Account Balance</h2>
          <p className="text-3xl font-bold text-gray-900">$5,000.00</p>
        </div>
        
        {/* Actions Section */}
        <div className="mt-6 grid grid-cols-2 gap-4">
          <button className="bg-blue-500 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-600">Transfer</button>
          <button className="bg-green-500 text-white py-2 px-4 rounded-lg font-medium hover:bg-green-600">Transaction History</button>
          <button className="bg-yellow-500 text-white py-2 px-4 rounded-lg font-medium hover:bg-yellow-600 col-span-2">View Profile</button>
        </div>
      </div>
    </div>
  );
};

export default BankHomePage;