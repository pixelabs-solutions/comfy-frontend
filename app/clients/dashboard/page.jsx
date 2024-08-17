import React from 'react';

const dashboard = () => {
    return (
        <div>
            <div className="flex justify-between items-center bg-[#FFF9E3] p-4 md:p-[45px]  ">
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
        </div>
    );
};

export default dashboard;
