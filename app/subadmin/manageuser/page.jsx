'use client';
import { BiPlusCircle } from 'react-icons/bi';
import React from 'react';
import Table from '../../admin/components/ManageUserTable'

const ManageUser = () => {
    const columns = [
        { label: 'Interpreters', key: 'product' },
        { label: 'Status', key: 'price' },
        { label: 'User Manager', key: 'discount' },
        { label: '', key: 'edit' },
        { label: '', key: '' },
    ];

    const data = [
        {
            product: 'Headphone',
            image: '/Admin/Ellipse 3.png',
            category: 'Digital',
            price: 'Active',
            discount: 'DOHN JOE',
            edit: '/Admin/stylus_note.png',
        },
        {
            product: 'Headphone',
            image: '/Admin/Ellipse 3.png',
            category: 'Digital',
            price: 'Active',
            discount: 'DOHN JOE',
            edit: '/Admin/stylus_note.png',
        },
        {
            product: 'Headphone',
            image: '/Admin/Ellipse 3.png',
            category: 'Digital',
            price: 'Active',
            discount: 'DOHN JOE',
            edit: '/Admin/stylus_note.png',
        },
        {
            product: 'Headphone',
            image: '/Admin/Ellipse 3.png',
            category: 'Digital',
            price: 'Active',
            discount: 'DOHN JOE',
            edit: '/Admin/stylus_note.png',
        },
        {
            product: 'Headphone',
            image: '/Admin/Ellipse 3.png',
            category: 'Digital',
            price: 'Active',
            discount: 'DOHN JOE',
            edit: '/Admin/stylus_note.png',
        },
        {
            product: 'Headphone',
            image: '/Admin/Ellipse 3.png',
            category: 'Digital',
            price: 'Active',
            discount: 'DOHN JOE',
            edit: '/Admin/stylus_note.png',
        },
        {
            product: 'Headphone',
            image: '/Admin/Ellipse 3.png',
            category: 'Digital',
            price: 'Active',
            discount: 'DOHN JOE',
            edit: '/Admin/stylus_note.png',
        },
        // Add more rows as needed
    ];

    return (
        <>
            <h1 className="text-[30px] font-bold ">Manage Users</h1>
            <p className="my-2 text-sm text-[#666777]">Monday, 29, April, 2024</p>
            <div className="mb-8 flex-wrap flex w-full lg:justify-end gap-5">
                <button className="flex items-center gap-2 rounded-full bg-[#E1F2E5] px-2 py-1 text-[#656676]">
                    <div className="h-2 w-2 rounded-full bg-[#34A853]"></div>
                    <span className="">Active Interpreters</span>
                    <p className="font-bold">278</p>
                </button>
                <button className="flex items-center gap-2 bg-[#F5F7F9] px-2 ">
                    Add Users <BiPlusCircle />
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

export default ManageUser;
