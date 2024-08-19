import React from 'react';

const BillingManager = () => {
    return (
        <>
            <div className="flex items-center justify-between">
             <div>
             <h1 className="text-[25px] font-bold ">Dashboard</h1>
             <p className="my-2 text-sm text-[#666777]">Monday, 29, April, 2024</p>
             </div>
                <div className="flex justify-end gap-5">
                    <button className="flex items-center gap-2 rounded-full bg-[#E1F2E5] px-2 py-1 text-[#656676]">
                        <div className="h-2 w-2 rounded-full bg-[#34A853]"></div>
                        <span className="">Active Interpreters</span>
                        <p className="font-bold">278</p>
                    </button>
                    <select name="" id="" className="bg-[#F5F7F9] px-2 ">
                        <option value="" className="bg-[#F5F7F9]">
                            Weekly
                        </option>
                        <option value="" className="bg-[#F5F7F9]">
                            Daily
                        </option>
                        <option value="" className="bg-[#F5F7F9]">
                            Monthly
                        </option>
                    </select>
                    <select name="" id="" className="bg-[#F5F7F9] px-2 ">
                        <option value="" className="bg-[#F5F7F9]">
                            All Bills
                        </option>
                        <option value="" className="bg-[#F5F7F9]">
                            Daily
                        </option>
                        <option value="" className="bg-[#F5F7F9]">
                            Monthly
                        </option>
                    </select>
                </div>
            </div>
        </>
    );
};

export default BillingManager;
