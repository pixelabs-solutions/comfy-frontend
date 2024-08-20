'use client';
import { CgProfile } from "react-icons/cg"; 
import React, { useState } from 'react';

const ImageUploader = () => {
    const [image, setImage] = useState(null);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImage(reader.result);
            };
            reader.readAsDataURL(file);
        } else {
            setImage(null);
        }
    };

    return (
        <div className="mt-8 flex max-w-sm items-center gap-5">
            <div>{image ? <img src={image} alt="Profile" className="h-12 w-12 rounded-full" /> : <CgProfile className="text-4xl" />}</div>
            <div>
                <form>
                    <label className="block">
                        <span className="sr-only">Choose profile photo</span>
                        <input
                            type="file"
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
                </form>
            </div>
        </div>
    );
};

export default ImageUploader;
