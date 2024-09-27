import React, { useState } from 'react';
import { CgProfile } from 'react-icons/cg';
import { useUpdateInterpreterMutation } from './../../store/query/patchapis'; // Adjust the import based on your file structure
import { useSelector, useDispatch } from 'react-redux';
import { setImageUrl } from './../../store/updateprofile';
import { jwtDecode } from 'jwt-decode';

const uploadFile = async (file) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(URL.createObjectURL(file)); // Simulated URL for demonstration
    }, 1000);
  });
};

const ProfileComponent = () => {
  const dispatch = useDispatch();
  const imageUrl = useSelector((state) => state.profile.imageUrl); // Access image URL from Redux
  const [updateInterpreter, { isLoading, error }] = useUpdateInterpreterMutation();
  let token = localStorage.getItem('authToken');
  let decoded = jwtDecode(token); 

  const getUserIdFromToken = () => {
    if (token) {
      return decoded.sub; // Assuming userId is present in the decoded token
    }
    return null;
  };

  const handleFileChange = async (e) => {
    const files = e.target.files;
    if (files.length > 0) {
      try {
        const file = files[0];
        const url = await uploadFile(file); // Upload file and get URL
        console.log('Uploaded file URL:', url); // Log the URL to the console

        // Dispatch action to update the Redux state
        dispatch(setImageUrl(url));

        // Call the update API
        await updateInterpreter({ id: getUserIdFromToken(), data: { profilePicture: [url] } }).unwrap();
      } catch (error) {
        console.error('File upload failed: ', error);
      }
    }
  };

  return (
    <div className="group relative flex items-center justify-center gap-2">
      <div className="relative">
        {imageUrl ? (
          <img src={imageUrl} alt="Profile" className="h-12 w-12 rounded-md" />
        ) : (
          <CgProfile className="text-4xl" />
        )}
        <div className="absolute inset-0 flex items-center justify-center rounded-md bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <label htmlFor="file-upload" className="cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.232 5.232a2.828 2.828 0 114 4L7.5 21H3v-4.5L15.232 5.232z"
              />
            </svg>
            <input
              id="file-upload"
              type="file"
              name="profilePicture"
              accept="image/*"
              className="hidden"
              onChange={handleFileChange}
            />
          </label>
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <span className="text-md font-bold text-black dark:text-white-dark">
         {decoded.username}
        </span>
        <span className="text-xs font-medium text-gray-600 dark:text-gray-400">
          {decoded.email}
        </span>
      </div>
    </div>
  );
};

export default ProfileComponent;
