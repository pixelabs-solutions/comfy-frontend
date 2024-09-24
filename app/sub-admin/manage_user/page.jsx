'use client';
import { BiPlusCircle } from 'react-icons/bi';
import React, { useState } from 'react';
import Table from '../../admin/components/ManageUserTable';
import { useManageUserQuery } from '@/store/query/getapis';
import AddUserForm from '@/app/signup/page'; // Import AddUserForm if needed

const ManageUser = () => {
    const [Form, SetForm] = useState(false);
    const [roleManageUser, setRoleManageUser] = useState(localStorage.getItem("SELECTEDROLE") || "interpreter");
    const { data: apidata, error, isLoading } = useManageUserQuery({ roleManageUser });

    const columns = [
        { label: 'Interpreters', key: 'product' },
        { label: 'Status', key: 'price' },
        { label: 'User Manager', key: 'discount' },
        { label: '', key: 'edit' },
        { label: '', key: '' },
    ];

    const tableData = apidata?.users?.map(user => ({
        product: user.username || 'N/A',
        price: user.status || 'N/A',
        discount: user.addedBy || 'N/A',
        image: user.image || '/path/to/default/image.png', // Set default image if none provided
        edit: "/Admin/stylus_note.png"// Replace with actual edit icon path
    })) || [];

    return (
        <>
            <h1 className="text-[30px] font-bold ">Manage Users</h1>
            <p className="my-2 text-sm text-[#666777]">Monday, 29, April, 2024</p>
            <div className="mb-8 flex lg:flex-nowrap flex-wrap w-full lg:justify-end gap-5">
                <button className="flex items-center gap-2 rounded-full bg-[#E1F2E5] px-2 py-1 text-[#656676]">
                    <div className="h-2 w-2 rounded-full bg-[#34A853]"></div>
                    <span>Active Users</span>
                    <p className="font-bold">{apidata?.activeCount || 0}</p>
                </button>
                <button onClick={() => SetForm(true)} className="flex items-center gap-2 bg-[#F5F7F9] px-2">
                    Add Users <BiPlusCircle />
                </button>
                <select 
                    value={roleManageUser} 
                    onChange={(e) => setRoleManageUser(e.target.value)} 
                    className="bg-[#F5F7F9] px-2"
                >
                    <option value="interpreter">Interpreter</option>
                    <option value="admin">Admin</option>
                    <option value="manager">Manager</option>
                </select>
            </div>
            {isLoading && <p>Loading...</p>}
            {error && <p>Error loading data...</p>}
            {Form && (
                <div className='fixed left-0 right-0 top-0 bottom-0 bg-[#B9B9B970] z-[100]'>
                    <AddUserForm />
                </div>
            )}
            {!isLoading && !error && <Table columns={columns} data={tableData} />}
        </>
    );
};

export default ManageUser;
