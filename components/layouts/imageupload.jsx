"use client"
import { useState } from 'react';

const ProfileComponent = () => {
  const [image, setImage] = useState('/profile.png'); // Default profile image

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result); // Update the image state with the new image
      };
      reader.readAsDataURL(file); // Convert the image to a data URL for preview
    }
  };

  return (
    <div className="relative group flex items-center justify-center gap-2">
      <img
        className="h-[50px] w-[50px] rounded-md object-cover"
        src={image} // Use the dynamic image state
        alt="user"
      />
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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
            accept="image/*"
            className="hidden"
            onChange={handleImageChange} // Call the function on file change
          />
        </label>
      </div>
      <div className="flex flex-col gap-1">
        <span className="text-md font-bold text-black dark:text-white-dark">
          Steve Handrison
        </span>
        <span className="text-xs font-medium text-gray-600 dark:text-gray-400">
          admin@ssss.com
        </span>
      </div>
    </div>
  );
};

export default ProfileComponent;
