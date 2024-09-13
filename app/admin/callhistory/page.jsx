import { BiSearchAlt2 } from 'react-icons/bi';
import React from 'react';
import { BsDownload } from 'react-icons/bs';
import Table from '../components/ManageUserTable';

const CallHistory = () => {
    const columns = [
        { label: 'Client', key: 'Client' },
        { label: 'Interpreters', key: 'IntClient' },
        { label: 'Duration', key: 'Duration' },
        { label: 'Date and Time', key: 'Date' },
        { label: 'Bill', key: 'Bill' },
        //         { label: '', key: '' },
    ];

    const data = [
        {
            Client: 'Headphone',
            image: '/Admin/Ellipse 3.png',
            IntClient: 'John Doe',
            IntImage: '/Admin/Ellipse 3.png',
            Duration: '03:44',
            Date: '15 May 2020 8:30 am',
            Bill: '$293.01',
        },

        // Add more rows as needed
    ];

    return (
        <>
            <h1 className="text-[30px] font-bold ">Call History</h1>
            <p className="my-2 text-sm text-[#666777]">Monday, 29, April, 2024</p>
            <div className="mb-8 flex lg:flex-nowrap  flex-wrap w-full lg:justify-end gap-5">
                <div className="flex items-center gap-2 rounded-md bg-[#F5F7F9]  px-5 lg:py-0 py-2">
                    <input type="text" placeholder="search by name or phone number" className="bg-transparent outline-none w-56" />
                    <BiSearchAlt2 className="text-lg  text-gray-500" />
                </div>
                <button className="flex items-center gap-2 bg-[#F5F7F9] px-2 py-1">
                    Download csv
                    <BsDownload className="text-md" />
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
            </div>
            <Table columns={columns} data={data} />
        </>
    );
};

export default CallHistory;
