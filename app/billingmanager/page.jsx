import React from 'react';
import CardStatus from './components/cardstatus';

const BillingManager = () => {
    const StatusData =[
        {
        id:0,
        name: "Darrell Steward",
        code:"#223423",
        duration:"15 May 24 - 20 May 24",
        amounth:"$1240 USD",
        status:"approved"
    },
        {
        id:1,
        name: "Darrell Steward",
        code:"#223423",
        duration:"15 May 24 - 20 May 24",
        amounth:"$1240 USD",
        status:"pending"
    },
        {
        id:2,
        name: "Darrell Steward",
        code:"#223423",
        duration:"15 May 24 - 20 May 24",
        amounth:"$1240 USD",
        status:"approved"
    },
        {
        id:3,
        name: "Darrell Steward",
        code:"#223423",
        duration:"15 May 24 - 20 May 24",
        amounth:"$1240 USD",
        status:"pending"
    },
        {
        id:4,
        name: "Darrell Steward",
        code:"#223423",
        duration:"15 May 24 - 20 May 24",
        amounth:"$1240 USD",
        status:"approved"
    },
        {
        id:4,
        name: "Darrell Steward",
        code:"#223423",
        duration:"15 May 24 - 20 May 24",
        amounth:"$1240 USD",
        status:"pending"
    },
]
    return (
        <>
            <div className="flex md:flex-row flex-col md:items-center md:justify-between">
             <div>
             <h1 className="text-[25px] font-bold ">Dashboard</h1>
             <p className="my-2 text-sm text-[#666777]">Monday, 29, April, 2024</p>
             </div>
                <div className="flex md:flex-nowrap flex-wrap md:justify-end md:mt-0 mt-3  gap-5">
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
            <CardStatus StatusData={StatusData} />
        </>
    );
};

export default BillingManager;
