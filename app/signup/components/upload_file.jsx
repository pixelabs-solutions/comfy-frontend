import React, { useState, useEffect } from 'react';
import { useField } from 'formik';
import { CgProfile } from "react-icons/cg";

// Simulate file upload and get the file URL
const uploadFile = async (file) => {
  // Replace this with your actual file upload logic
  // Simulating a successful upload by returning a mock URL
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(URL.createObjectURL(file)); // Simulated URL for demonstration
    }, 1000);
  });
};

const ImageUploader = ({ name = 'profilePicture', setFieldValue }) => {
  const [field, meta] = useField(name);
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    if (field.value && Array.isArray(field.value) && field.value.length > 0) {
      setImageUrl(field.value[0]); // Use the first URL in the array
    } else {
      setImageUrl(null);
    }
  }, [field.value]);

  const handleFileChange = async (e) => {
    const files = e.target.files;
    if (files.length > 0) {
      try {
        const file = files[0];
        const url = await uploadFile(file); // Upload file and get URL
        console.log('Uploaded file URL:', url); // Log the URL to the console
        setFieldValue(name, [url]); // Set the URL in Formik as an array
      } catch (error) {
        console.error('File upload failed: ', error);
      }
    } else {
      setFieldValue(name, []); // Clear the field if no file is selected
    }
  };
  
  return (
    <div className="mt-8 flex max-w-sm items-center gap-5">
      <div>
        {imageUrl ? (
          <img
            src={imageUrl}
            alt="Profile"
            className="h-12 w-12 rounded-full"
          />
        ) : (
          <CgProfile className="text-4xl" />
        )}
      </div>
      <div>
        <label className="block">
          <span className="sr-only">Choose profile photo</span>
          <input
            type="file"
            name={name}
            className="block w-full text-sm text-gray-500
              file:me-4 file:rounded-lg file:border-0
              file:bg-[#37384D] file:px-4
              file:py-2 file:text-sm
              file:font-semibold file:text-white
              file:disabled:pointer-events-none file:disabled:opacity-50
              dark:text-neutral-500
              dark:file:bg-blue-500
              dark:hover:file:bg-blue-400
            "
            onChange={handleFileChange}
          />
        </label>
      </div>
    </div>
  );
};

export default ImageUploader;
