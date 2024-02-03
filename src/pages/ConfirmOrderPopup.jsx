// ConfirmOrderPopup.js
import React from 'react';
import { useState } from 'react';
// In your Cart component



const ConfirmOrderPopup = ({ cartItems, products, onClose ,sum ,onConfirmOrder}) => {
    // Function to sanitize and parse amount string to float
  
    const parseAmount = (amountString) => {
      // Remove any characters that are not digits or a decimal point
      const numericString = amountString.replace(/[^0-9.]/g, '');
    
      const parsed = parseFloat(numericString);
      sum=sum+parsed;

      console.log("parsed value" ,parsed );
      return isNaN(parsed) ? 0 : parsed; // Return 0 if parsed result is NaN
    };
   
  
    // Calculate total amount
    const totalAmount = cartItems.reduce((acc, item) => {
      const product = products.find(product => product.id === item.productId);
      if (!product) return acc; // Skip if product not found
  
      const amount = parseAmount(product.amount);
      return acc + (amount * item.quantity);
    }, 0);
    console.log("Final sum" ,sum);
    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full" onClick={onClose}>
        <div className="relative top-20 mx-auto p-5 border w-11/12 md:w-2/3 lg:w-1/2 xl:w-1/3 shadow-lg rounded-md bg-white" onClick={e => e.stopPropagation()}>
          <h2 className="text-xl font-semibold text-gray-900">Confirm Order</h2>
          <ul className="my-4">
            {cartItems.map((item) => {
              const product = products.find(product => product.id === item.productId);
              return product ? (
                <li key={item.id} className="flex justify-between items-center py-2">
                  <span className="text-sm font-medium text-gray-700">{product.title}</span>
                  <span className="text-sm text-gray-500">{product.amount} x {1}</span>
                </li>
              ) : null;
            })}
          </ul>
          <p className="text-lg font-bold text-gray-900">Total: ${sum}</p>
          <div className="flex justify-end space-x-3 mt-4">
            <button className="px-4 py-2 rounded-md bg-blue-500 text-white font-medium hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50" onClick={() => { onConfirmOrder(); onClose(); }}>
              Confirm Order
            </button>
            <button className="px-4 py-2 rounded-md bg-gray-300 text-gray-700 font-medium hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-opacity-50" onClick={onClose}>
              Close
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  
  export default ConfirmOrderPopup;
  
