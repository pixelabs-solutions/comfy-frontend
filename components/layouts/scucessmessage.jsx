import React, { useRef, useEffect } from 'react';
import { FaCheckCircle } from 'react-icons/fa'; // Import a success icon

const SuccessMessage = ({ onClose, Message }) => {
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
      {/* Background overlay with click handler */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black opacity-50 backdrop-blur-sm"
      ></div>
      <div
        ref={boxRef}
        className="relative bg-white p-8 rounded-lg shadow-lg w-[90%] sm:w-[70%] md:w-[50%] lg:w-[25%] py-14 animate-fadeIn"
        onClick={(e) => e.stopPropagation()} // Prevent click inside the box from closing it
      >
        <div className="flex items-center mb-4">
          <FaCheckCircle className="text-green-500 text-7xl mx-auto" />
        </div>
        <h1 className='text-xl font-bold text-center'>{Message}</h1>
      </div>
    </div>
  );
};

export default SuccessMessage;
