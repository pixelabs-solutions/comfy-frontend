import React, { useState } from 'react';

const Notification_Comp = ({ DummyNottification }) => {
    // State to manage clicked SVG IDs
    const [clickedSvgIds, setClickedSvgIds] = useState([]);

    // Handler function for SVG click
    const handleSvgClick = (id) => {
        // Check if the ID is already in the array
        if (clickedSvgIds.includes(id)) {
            // If it is, remove it (deselect)
            setClickedSvgIds(clickedSvgIds.filter(svgId => svgId !== id));
        } else {
            // If it isn't, add it (select)
            setClickedSvgIds([...clickedSvgIds, id]);
        }
    };

    return (
        <div className="mt-10 flex flex-col gap-3">
            {DummyNottification.map((data) => (
                <div key={data.id} className="rounded-lg border p-4 flex justify-between">
                    <h3 className='text-[#666777] text-sm'>{data.notification}</h3>
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className='hover:cursor-pointer'
                        onClick={() => handleSvgClick(data.id)} // Call handler on click
                    >
                        <mask id="mask0_298_301" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                            <rect width="24" height="24" fill="#A3A3A3" />
                        </mask>
                        <g mask="url(#mask0_298_301)">
                            <path
                                d="M6.6998 18L1.0498 12.35L2.4748 10.95L8.1248 16.6L6.6998 18ZM12.3498 18L6.6998 12.35L8.0998 10.925L12.3498 15.175L21.5498 5.97501L22.9498 7.40001L12.3498 18ZM12.3498 12.35L10.9248 10.95L15.8748 6.00001L17.2998 7.40001L12.3498 12.35Z"
                                fill={clickedSvgIds.includes(data.id) ? "#1C74D2" : "#A3A3A3"} // Change color on click
                            />
                        </g>
                    </svg>
                </div>
            ))}
        </div>
    );
};

export default Notification_Comp;
