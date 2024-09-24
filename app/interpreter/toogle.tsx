"use client"
import React, { useState } from 'react';

const ToggleSwitch = () => {
  const [isActive, setIsActive] = useState(true);

  const handleToggle = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="flex items-center">
      <span className="mr-2 text-gray-600">{isActive ? "Active" :"inactive"}</span>
      <div 
        className={`relative inline-block w-12 h-8 rounded-full cursor-pointer ${isActive ? 'bg-green-500' : 'bg-red-500'}`}
        onClick={handleToggle}
      >
        <div 
          className={`absolute w-[55%] h-[90%] top-[5%] bg-white rounded-full p-[5px] shadow transform transition-transform 
          ${isActive ? 'translate-x-5' : 'translate-x-[5%]'}`}
        >
          {isActive ? (
            <svg width="full" height="full" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.3334 1L5.00008 8.33333L1.66675 5" stroke="#34A853" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
          ) : (
                    <svg width="full" height="full" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 4L4 12" stroke="#EB4335" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M4 4L12 12" stroke="#EB4335" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    
          )}
        </div>
      </div>
    </div>
  );
};

export default ToggleSwitch;
