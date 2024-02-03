import React from "react";
const Delete = ({ onClose }) => {
    return (
      <div className="popup-overlay" onClick={onClose}>
        <div className="popup-content" onClick={e => e.stopPropagation()}>
          <p>Item removed successfully!</p>
          <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded" onClick={onClose}>Close❌</button>
        </div>
      </div>
    );
  };
  
  export default Delete;
  