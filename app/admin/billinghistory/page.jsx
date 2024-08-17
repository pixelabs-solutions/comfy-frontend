import { BsDownload } from 'react-icons/bs';
import React from 'react';
import { BiPlusCircle } from 'react-icons/bi';
import Table from '../components/ManageUserTable';

const billinghistory = () => {
    const columns = [
        { label: 'Interpreters', key: 'product' },
        { label: 'Status', key: 'price' },
        { label: 'Amount', key: 'discount' },
        { label: 'Date', key: 'Date' },
        { label: '', key: 'edit' },
        { label: '', key: '' },
    ];

    const data = [
        {
            product: 'Headphone',
            image: '/Admin/Ellipse 3.png',
            category: 'Digital',
            price: 'Active',
            discount: '$1213',
            Date: '13 December 2023',
            edit: '/Admin/download.png',
        },

        // Add more rows as needed
    ];

    return (
        <>
            <h1 className="text-[30px] font-bold ">Billing History</h1>
            <p className="my-2 text-sm text-[#666777]">Monday, 29, April, 2024</p>
            <div className="mb-8 flex w-full justify-end gap-5">
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

export default billinghistory;
