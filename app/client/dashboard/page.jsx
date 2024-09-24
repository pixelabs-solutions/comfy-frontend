import React from 'react';
import Languages from './components/languages';
import TopRated from './components/Toprated.jsx';
const dashboard = () => {
    // left-0 right-0 top-0 bottom-0  bg-[#b9b9b9] relative z-[100] bg-opacity-[0.8]
    return (
        <>
            <div className="bg-[#FFF9E3] px-4 rounded-t-[20px] md:px-[80px] py-[60px]  relative md:pb-20">
                <div className="flex  items-center justify-between">
                    <div>
                        <h1 className="text-[25px] font-bold ">Dashboard</h1>
                        <p className="my-2 text-sm text-[#666777]">Monday, 29, April, 2024</p>
                    </div>
                    <button className="flex items-center gap-2 rounded-full bg-[#F5F7F9] px-2 py-1 text-[#656676]">
                        <div className="h-2 w-2 rounded-full bg-[#34A853]"></div>
                        <span className="">Active Interpreters</span>
                        <p className="font-bold">278</p>
                    </button>
                </div>
                <Languages />
            </div>
            <div className='bg-white  px-4 md:px-[80px] md:py-[60px] mt-20'>
                <h1 className='font-bold text-xl my-2'>Top Rated Languages</h1>
            <TopRated />
            </div>
            {/* {!"Popoup" && ( */}
                    {/* <LanguageDropdown setSelectedLanguage={setSelectedLanguage} setPopoup={setPopoup} className="top-[100%]" /> */}
            {/* )} */}
        </>
    );
};

export default dashboard;
