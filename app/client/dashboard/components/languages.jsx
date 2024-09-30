// "use client";
// import React, { useEffect, useRef, useState } from 'react';
// import { TbArrowsDiff } from 'react-icons/tb';
// import LanguageDropdown from '@/components/language-dropdown';
// import { useSelector } from 'react-redux';
// import { useInitiateCallMutation } from '@/store/query/postapis';
// import TopRated from './Toprated.jsx'; // Import TopRated
// import Link from 'next/link.js';

// const Languages = () => {
//     const [selectedLanguage, setSelectedLanguage] = useState('');
//     const [selectedLanguage2, setSelectedLanguage2] = useState('');
//     const [showDropdown, setShowDropdown] = useState(false);
//     const [showDropdown2, setShowDropdown2] = useState(false);
//     const dropdownRef = useRef(null); // Ref to dropdown

//     const [InitiateCall] = useInitiateCallMutation();
//     const Toprated = useSelector((state) => state.LangToprated);
//     const valuesDummy = {
//         client: 19,
//         interpreter: 24,
//         duration: "3:01:09",
//         bill: 1500
//     };

//     const InitiateCallClick = async () => {
//         try {
//             await InitiateCall(valuesDummy).unwrap();
//             console.log('Success');
//         } catch (err) {
//             console.error('Error:', err);
//         }
//     };

//     // Handle clicks outside the dropdown
//     useEffect(() => {
//         const handleClickOutside = (event) => {
//             if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//                 setShowDropdown(false);
//                 setShowDropdown2(false);
//             }
//         };

//         document.addEventListener('mousedown', handleClickOutside);
//         return () => {
//             document.removeEventListener('mousedown', handleClickOutside);
//         };
//     }, []);

//     // Close dropdowns
//     const closeDropdown = () => {
//         setShowDropdown(false);
//         setShowDropdown2(false);
//     };
//     const roomName = `${selectedLanguage2 || Toprated[0] || 'English'} to ${selectedLanguage || Toprated[1] || 'Urdu'}`;
//     return (
//      <>
//        <div className="bg-[#FFF9E3] px-4 rounded-t-[20px] md:px-[80px] md:pb-[100px] relative py-10 ">
//                 <div className="flex items-center justify-between">
//                     <div>
//                         <h1 className="text-[25px] font-bold">Dashboard</h1>
//                         <p className="my-2 text-sm text-[#666777]">Monday, 29, April, 2024</p>
//                     </div>
//                     <button
//                         className="flex items-center gap-2 rounded-full bg-[#F5F7F9] px-2 py-1 text-[#656676]"
//                         onClick={() => setPopoup(!Popoup)} // Toggle the dropdown on button click
//                     >
//                         <div className="h-2 w-2 rounded-full bg-[#34A853]"></div>
//                         <span>Active Interpreters</span>
//                         <p className="font-bold">278</p>
//                     </button>
//                 </div>
//                 <div className="">

// <ul className="absolute -bottom-6 left-1/2 mx-auto my-1 flex w-[95%] -translate-x-1/2 transform items-center justify-center rounded-lg border bg-[white] font-bold text-[#656676] md:w-[80%] xl:w-[40%]">
//     <div className="relative flex w-[70%] items-center">
//         <li
//             className="w-full cursor-pointer py-4 text-center"
//             onClick={() => setShowDropdown(!showDropdown)}
//         >
//             {selectedLanguage2 || Toprated[0] || "English"}
//         </li>
//         <li className="absolute left-1/2 mx-auto -translate-x-1/2 transform rounded-full py-4 text-center">
//             <TbArrowsDiff className="rounded-full bg-[#FBCC1D] p-1 text-3xl text-black" />
//         </li>
//         <li
//             className="w-full border-l-2 py-4 text-center"
//             onClick={() => setShowDropdown2(!showDropdown2)}
//         >
//             {selectedLanguage || Toprated[1] || "Urdu"}
//         </li>
//     </div>
//         <Link href={`/client/jisti_meet?roomName=${encodeURIComponent(roomName)}`}  className="w-[30%]">
//                 <li className="w-full rounded-r-lg bg-[#FBCC1D] py-4 text-center font-bold text-black" onClick={InitiateCallClick}>
//                     Initiate Call
//                 </li>
//         </Link>
// </ul>
// {(showDropdown || showDropdown2) && (
//     <div ref={dropdownRef}>
//         <LanguageDropdown
//             setSelectedLanguage={setSelectedLanguage}
//             setSelectedLanguage2={setSelectedLanguage2}
//             setPopoup={setShowDropdown}
//             setPopoup2={setShowDropdown2}
//             Popoup={showDropdown}
//             Popoup2={showDropdown2}
//             onClose={closeDropdown} // Close dropdown after selection
//         />
//     </div>
// )}
           
// </div>
//             </div>
      
// <div className='bg-white px-4 md:px-[80px] md:py-[60px] mt-16'>
// <h1 className='font-bold text-xl my-2'>Top Rated Languages</h1>
// <TopRated setSelectedLanguage={setSelectedLanguage2} setSelectedLanguage2={setSelectedLanguage} />
// </div>
//      </>
//     );
// };

// export default Languages;
"use client";
import React, { useEffect, useRef, useState } from 'react';
import { TbArrowsDiff } from 'react-icons/tb';
import LanguageDropdown from '@/components/language-dropdown';
import { useSelector } from 'react-redux';
import { useInitiateCallMutation } from '@/store/query/postapis';
import TopRated from './Toprated.jsx'; // Import TopRated
import Link from 'next/link.js';

const Languages = () => {
    const [selectedLanguage, setSelectedLanguage] = useState('');
    const [selectedLanguage2, setSelectedLanguage2] = useState('');
    const [showDropdown, setShowDropdown] = useState(false);
    const [showDropdown2, setShowDropdown2] = useState(false);
    const dropdownRef = useRef(null); // Ref to dropdown

    const [InitiateCall] = useInitiateCallMutation();
    const Toprated = useSelector((state) => state.LangToprated);
    const valuesDummy = {
        client: 19,
        interpreter: 24,
        duration: "3:01:09",
        bill: 1500
    };

    const roomName = `${selectedLanguage2 || Toprated[0] || 'English'} to ${selectedLanguage || Toprated[1] || 'Urdu'}`;

    const InitiateCallClick = async () => {
        try {
            // Save room name in local storage
            localStorage.setItem('roomName', roomName);

            await InitiateCall(valuesDummy).unwrap();
            console.log('Success');
        } catch (err) {
            console.error('Error:', err);
        }
    };

    // Handle clicks outside the dropdown
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setShowDropdown(false);
                setShowDropdown2(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    // Close dropdowns
    const closeDropdown = () => {
        setShowDropdown(false);
        setShowDropdown2(false);
    };

    return (
        <>
            <div className="bg-[#FFF9E3] px-4 rounded-t-[20px] md:px-[80px] md:pb-[100px] relative py-10">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-[25px] font-bold">Dashboard</h1>
                        <p className="my-2 text-sm text-[#666777]">Monday, 29, April, 2024</p>
                    </div>
                    <button
                        className="flex items-center gap-2 rounded-full bg-[#F5F7F9] px-2 py-1 text-[#656676]"
                        onClick={() => setPopoup(!Popoup)} // Toggle the dropdown on button click
                    >
                        <div className="h-2 w-2 rounded-full bg-[#34A853]"></div>
                        <span>Active Interpreters</span>
                        <p className="font-bold">278</p>
                    </button>
                </div>
                <div className="">
                    <ul className="absolute -bottom-6 left-1/2 mx-auto my-1 flex w-[95%] -translate-x-1/2 transform items-center justify-center rounded-lg border bg-[white] font-bold text-[#656676] md:w-[80%] xl:w-[40%]">
                        <div className="relative flex w-[70%] items-center">
                            <li
                                className="w-full cursor-pointer py-4 text-center"
                                onClick={() => setShowDropdown(!showDropdown)}
                            >
                                {selectedLanguage2 || Toprated[0] || "English"}
                            </li>
                            <li className="absolute left-1/2 mx-auto -translate-x-1/2 transform rounded-full py-4 text-center">
                                <TbArrowsDiff className="rounded-full bg-[#FBCC1D] p-1 text-3xl text-black" />
                            </li>
                            <li
                                className="w-full border-l-2 py-4 text-center"
                                onClick={() => setShowDropdown2(!showDropdown2)}
                            >
                                {selectedLanguage || Toprated[1] || "Urdu"}
                            </li>
                        </div>
                        <Link href={`/client/jisti_meet`} className="w-[30%]">
                            <li className="w-full rounded-r-lg bg-[#FBCC1D] py-4 text-center font-bold text-black" onClick={InitiateCallClick}>
                                Initiate Call
                            </li>
                        </Link>
                    </ul>
                    {(showDropdown || showDropdown2) && (
                        <div ref={dropdownRef}>
                            <LanguageDropdown
                                setSelectedLanguage={setSelectedLanguage}
                                setSelectedLanguage2={setSelectedLanguage2}
                                setPopoup={setShowDropdown}
                                setPopoup2={setShowDropdown2}
                                Popoup={showDropdown}
                                Popoup2={showDropdown2}
                                onClose={closeDropdown} // Close dropdown after selection
                            />
                        </div>
                    )}
                </div>
            </div>

            <div className='bg-white px-4 md:px-[80px] md:py-[60px] mt-16'>
                <h1 className='font-bold text-xl my-2'>Top Rated Languages</h1>
                <TopRated setSelectedLanguage={setSelectedLanguage2} setSelectedLanguage2={setSelectedLanguage} />
            </div>
        </>
    );
};

export default Languages;
