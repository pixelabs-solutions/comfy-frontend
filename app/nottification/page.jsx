'use client';
import React, { useEffect, useRef } from 'react';
import Notification_Comp from './component/Notification';

const Nottification = ({ onClose }) => {
    const Notificationref = useRef(null);
    const DummyNottification = [
        { id: 0, notification: '2500usd sent to interpreter @steve' },
        { id: 1, notification: '2500usd sent to interpreter @steve' },
        { id: 2, notification: '2500usd sent to interpreter @steve' },
    ];

    useEffect(() => {
        // Handler to close the box when clicking outside
        const handleClickOutside = (event) => {
            if (Notificationref.current && !Notificationref.current.contains(event.target)) {
                if (typeof onClose === 'function') {
                    onClose(); // Close notification
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
        <div className='bg-[#00000033] fixed left-0 right-0 top-0 p-8 bottom-0 z-[1000]'>
            <aside
                className='w-[25%] float-right bg-white p-8 h-full rounded-md'
                ref={Notificationref} // Attach ref to this aside
            >
                <div className='flex justify-between items-center'>
                    <h2 className='text-2xl font-bold'>Notification</h2>
                    <svg
                        onClick={onClose} 
                        width="30"
                        height="30"
                        viewBox="0 0 40 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <mask id="mask0_245_25169" maskUnits="userSpaceOnUse" x="0" y="0" width="40" height="40">
                            <rect width="40" height="40" fill="#D9D9D9" />
                        </mask>
                        <g mask="url(#mask0_245_25169)">
                            <path d="M5 30V26.6667H15V30H5ZM5 21.6667V18.3333H25V21.6667H5ZM5 13.3333V10H35V13.3333H5Z" fill="#1C1B1F" />
                        </g>
                    </svg>
                </div>
                <Notification_Comp DummyNottification={DummyNottification} />
            </aside>
        </div>
    );
};

export default Nottification;
