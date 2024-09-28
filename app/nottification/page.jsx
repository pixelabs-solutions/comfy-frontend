'use client';
import React, { useEffect, useRef, useState } from 'react'; // Ensure useState is imported
import Notification_Comp from './component/Notification';

const Notification = ({ onClose, Role }) => {
    const [AdminNot, SetAdminNot] = useState(false);
    const Notificationref = useRef(null);
    const DummyNotification = [
        { id: 0, notification: '2500 USD sent to interpreter @steve' },
        { id: 1, notification: '2500 USD sent to interpreter @steve' },
        { id: 2, notification: '2500 USD sent to interpreter @steve' },
    ];

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (Notificationref.current && !Notificationref.current.contains(event.target)) {
                if (typeof onClose === 'function') {
                    onClose(); // Close notification
                }
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [onClose]);

    const HandleOPenorclose = () => {
         console.log(Role)
        if (Role === 'admin') {
            SetAdminNot((prev) => !prev); // Toggle AdminNot state
        } else {
            onClose(); 
        }
    };

    return (
        <div className='bg-[#00000033] fixed left-0 right-0 top-0 p-4 md:p-8 bottom-0 z-[1000]'>
            <aside
                className='w-full md:w-[25%] bg-white shadow-lg top-0 p-4 md:p-8 h-full float-right rounded-md overflow-y-auto'
                ref={Notificationref} // Attach ref to this aside
            >
                <div className='flex justify-between items-center mb-4'>
                    <h2 className='text-xl md:text-2xl font-bold'>Notification</h2>
                    <svg
                        onClick={HandleOPenorclose}
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
                <Notification_Comp AdminNot={AdminNot}  DummyNottification={DummyNotification} />
            </aside>
        </div>
    );
};

export default Notification;
