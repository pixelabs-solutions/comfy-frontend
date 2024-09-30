'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation'; // Import useRouter for navigation

const InitiateCallPopup = ({meetingLink}) => {
  const router = useRouter(); // Initialize useRouter
  const [loading, setLoading] = useState(true); // Set loading to true initially
  const [interpreterFound, setInterpreterFound] = useState(false);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      setInterpreterFound(true); // Simulate that the interpreter was found

      // After finding the interpreter, send the email
      sendEmailToInterpreter();
    }, 2000); 

    return () => clearTimeout(timer); // Cleanup on unmount
  }, []);

  // Function to send an email using mailto link
  const sendEmailToInterpreter = () => {
    const email = 'sardarmuneebakmal@gmail.com'; // Email address of the interpreter
    const subject = 'Interpreter Found'; // Email subject
    const body = `${meetingLink}` + 'meeting Link'; // Email body

    // Create mailto link specifically for Gmail
    const mailtoLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailtoLink, '_blank'); // Open in a new tab
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[120]">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full relative">
        <h2 className="text-2xl font-bold text-center mb-4">Initiating Call...</h2>

        {loading && (
          <div className="flex items-center justify-center mb-4">
            <div className="animate-spin border-t-4 border-blue-500 rounded-full h-10 w-10" />
            <span className="ml-2 text-gray-600">Finding Interpreter...</span>
          </div>
        )}

        {interpreterFound && (
          <div className="text-green-600 text-sm text-center mb-4">
            Interpreter found successfully! 
          </div>
        )}
      </div>
    </div>
  );
};

export default InitiateCallPopup;
