import { BiMessageRoundedError } from "react-icons/bi"; 
import React, { useRef, useEffect } from 'react';

const ErrorBox = ({ onClose, errorMessage }) => {
  const boxRef = useRef(null);

  useEffect(() => {
    // Handler to close the box when clicking outside
    const handleClickOutside = (event) => {
      if (boxRef.current && !boxRef.current.contains(event.target)) {
        if (typeof onClose === 'function') {
          onClose();
        }
      }
    };

    // Add event listener for mousedown events
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Clean up the event listener on component unmount
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 flex items-center justify-center z-[1000]">
      {/* Background overlay */}
      <div
        className="absolute inset-0 bg-black opacity-50 backdrop-blur-sm cursor-pointer"
        onClick={onClose} // Close box when clicking on the background
      ></div>
      <div
        ref={boxRef}
        className="relative bg-white p-8 rounded-lg shadow-lg w-[90%] sm:w-[70%] md:w-[50%] lg:w-[25%] py-14 animate-fadeIn"
        onClick={(e) => e.stopPropagation()} // Prevent click inside the box from closing it
        role="alert" // Accessibility enhancement
        aria-live="assertive" // Accessibility enhancement
      >
        <div className="flex items-center mb-4">
          <BiMessageRoundedError className="text-red-500 text-7xl mx-auto" />
        </div>
        <h1 className='text-xl font-bold text-center'>
          {errorMessage || "An unexpected error occurred."} {/* Fallback content */}
        </h1>
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 transition duration-300 text-2xl"
          aria-label="Close error message" // Accessibility enhancement
        >
          &times;
        </button>
      </div>        
    </div>
  );
};

export default ErrorBox;
