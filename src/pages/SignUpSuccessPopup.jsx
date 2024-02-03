// SignUpSuccessPopup.js
import React from 'react';

const SignUpSuccessPopup = ({ message, onClose }) => {
  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-75 flex justify-center items-center">
      <div className="bg-white p-4 rounded-lg shadow-lg">
        <p>{message}</p>
        <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default SignUpSuccessPopup;
