import React from 'react';
import { BiPlusCircle } from 'react-icons/bi';
import Table from '../components/ManageUserTable';

const PendingUsers = () => {
    const columns = [
        { label: 'Interpreters', key: 'product' },
        { label: 'User Manager', key: 'discount' },
        { label: '', key: 'price' },
        { label: '', key: 'rejected' },
    ];

    const data = [
        {
            product: 'Headphone',
            image: '/Admin/Ellipse 3.png',
            category: 'Digital',
            discount: 'DOHN JOE',
            edit: '/Admin/stylus_note.png',
            price:"Approved",
            rejected:"Rejected"
        },
        {
            product: 'Headphone',
            image: '/Admin/Ellipse 3.png',
            category: 'Digital',
            discount: 'DOHN JOE',
            edit: '/Admin/stylus_note.png',
            price:"Approved",
            rejected:"Rejected"
        },
        {
            product: 'Headphone',
            image: '/Admin/Ellipse 3.png',
            category: 'Digital',
            discount: 'DOHN JOE',
            edit: '/Admin/stylus_note.png',
            price:"Approved",
            rejected:"Rejected"
        },
        {
            product: 'Headphone',
            image: '/Admin/Ellipse 3.png',
            category: 'Digital',
            discount: 'DOHN JOE',
            edit: '/Admin/stylus_note.png',
            price:"Approved",
            rejected:"Rejected"
        },
        {
            product: 'Headphone',
            image: '/Admin/Ellipse 3.png',
            category: 'Digital',
            discount: 'DOHN JOE',
            edit: '/Admin/stylus_note.png',
            price:"Approved",
            rejected:"Rejected"
        },
        {
            product: 'Headphone',
            image: '/Admin/Ellipse 3.png',
            category: 'Digital',
            discount: 'DOHN JOE',
            edit: '/Admin/stylus_note.png',
            price:"Approved",
            rejected:"Rejected"
        },
        {
            product: 'Headphone',
            image: '/Admin/Ellipse 3.png',
            category: 'Digital',
            discount: 'DOHN JOE',
            edit: '/Admin/stylus_note.png',
            price:"Approved",
            rejected:"Rejected"
        },
        
        // Add more rows as needed
    ];
    return (
        <>
            <h1 className="text-[30px] font-bold ">Pending Users</h1>
            <p className="my-2 text-sm text-[#666777]">Monday, 29, April, 2024</p>
            <div className="mb-8 flex w-full justify-end gap-5">
                <button className="flex items-center gap-2 rounded-full bg-[#EB433533] px-2 py-1 text-[#656676]">
                    <div className="h-2 w-2 rounded-full bg-[#EB4335]"></div>
                    <span className="">Active Interpreters</span>
                    <p className="font-bold">278</p>
                </button>
                <select name="" id="" className="bg-[#F5F7F9] px-2 ">
                    <option value="" className="bg-[#F5F7F9]">
                        InterPretier
                    </option>
                    <option value="" className="bg-[#F5F7F9]">
                        Client
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

export default PendingUsers;
