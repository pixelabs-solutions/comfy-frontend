import { IoVideocam } from "react-icons/io"; 
import { BiSearchAlt2 } from 'react-icons/bi';
import React from 'react';
import { BsDownload } from 'react-icons/bs';
import Table from '../admin/components/ManageUserTable';

const qualitycontrol = () => {
    const columns = [
        { label: 'Client', key: 'Client' },
        { label: 'Interpreters', key: 'IntClient' },
        { label: '', key: 'icon' },
    ];

    const data = [
        {
            Client: 'Headphone',
            image: '/Admin/Ellipse 3.png',
            IntClient: 'John Doe',
            IntImage: '/Admin/Ellipse 3.png',
            icon: "",
        },

        // Add more rows as needed
    ];

    return (
        <>
            <h1 className="text-[30px] font-bold ">Quality Control</h1>
            <p className="my-2 text-sm text-[#666777]">Monday, 29, April, 2024</p>
            <div className="mb-8 flex w-full justify-end gap-5">
                <select name="" id="" className="bg-[#F5F7F9] px-2 py-1 rounded-md ">
                    <option value="" className="bg-[#F5F7F9]">
                        Weekly
                    </option>
                    <option value="" className="bg-[#F5F7F9] py-6">
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

export default qualitycontrol;
