"use client";
import { useUpdateInterpreterMutation } from '@/store/query/patchapis';
import React, { useState } from 'react';
import { jwtDecode } from 'jwt-decode';
const ToggleSwitch = () => {
  const [isActive, setIsActive] = useState(true);
  const [UpdateInterpreter] = useUpdateInterpreterMutation();

  // Function to decode the token and get the user ID
  const getUserIdFromToken = () => {
    const token = localStorage.getItem('authToken');
    if (token) {
      const decoded = jwtDecode(token);  // Decode the JWT token
      return decoded.sub; // Assuming userId is present in the decoded token
    }
    return null;
  };

  // Get the user ID from the token
  const userId = getUserIdFromToken();

  // Form data (for example)
  const formData = {
    status: isActive ? 'active' : 'offline',  // Set the status based on the toggle
  };

  const handleToggle = async (event) => {
    event.preventDefault();
    setIsActive(!isActive); 

    if (userId) {
      try {
        await UpdateInterpreter({ id: userId, data: formData }).unwrap();
        alert('User updated successfully!');
      } catch (err) {
        console.error('Failed to update user:', err);
      }
    } else {
      console.error('User ID not found');
    }
  };

  return (
    <div className="flex items-center">
      <span className="mr-2 text-gray-600">{!isActive ? 'Active' : 'Offline'}</span>
      <div 
        className={`relative inline-block w-12 h-8 rounded-full cursor-pointer ${!isActive ? 'bg-green-500' : 'bg-red-500'}`}
        onClick={handleToggle}
      >
        <div 
          className={`absolute w-[55%] h-[90%] top-[5%] bg-white rounded-full p-[5px] shadow transform transition-transform 
          ${isActive ? 'translate-x-5' : 'translate-x-[5%]'}`}
        >
          {!isActive ? (
            <svg width="full" height="full" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.3334 1L5.00008 8.33333L1.66675 5" stroke="#34A853" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          ) : (
            <svg width="full" height="full" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 4L4 12" stroke="#EB4335" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M4 4L12 12" stroke="#EB4335" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          )}
        </div>
      </div>
    </div>
  );
};

export default ToggleSwitch;
