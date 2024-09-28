'use client';
import { BiPlusCircle } from 'react-icons/bi';
import React, { useState } from 'react';
import AddUserForm from '@/app/signup/page';
import { useManageUserQuery } from '@/store/query/getapis';
import Table from '../components/ManageUserTable';

const Manageuser = () => {
    const [Form, SetForm] = useState(false);
    const [roleManageUser, setRoleManageUser] = useState(localStorage.getItem('SELECTEDROLE') || 'interpreter');
    const { data: apidata, error, isLoading } = useManageUserQuery({ roleManageUser });

    const columns = [
        { label: `${roleManageUser}`, key: 'product' },
        { key: 'NotShowCheckbox' },
        {
            label: (
                <div className="flex items-center   gap-2">
                    <p>Status</p>
                    <svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 18L0.5 13.5L1.95 12.05L5 15.1L8.05 12.05L9.5 13.5L5 18ZM1.95 6.05001L0.5 4.60001L5 0.100006L9.5 4.60001L8.05 6.05001L5 3.00001L1.95 6.05001Z" fill="#37384D" />
                    </svg>
                </div>
            ),
            key: 'statusMangeUser',
        },
        { label: 'User Manager', key: 'discount' },
        { label: '', key: 'edit' },
        { label: '', key: '' },
    ];
    const tableData =
        apidata?.users?.map((user) => ({
            product: user.username || 'N/A',
            category: user.email || 'N/A',
            statusMangeUser: user.status || 'N/A',
            discount: user.addedBy || 'N/A',
            image: user.image || '/path/to/default/image.png', // Set default image if none provided
            edit: '/Admin/stylus_note.png',
        })) || [];

    return (
        <>
            <h1 className="text-[30px] font-bold ">Manage Users</h1>
            <p className="my-2 text-sm text-[#666777]">Monday, 29, April, 2024</p>
            <div className="mb-8 flex w-full flex-wrap gap-5 lg:flex-nowrap lg:justify-end">
                <button className="flex items-center gap-2 rounded-full bg-[#E1F2E5] px-2 py-1 text-[#656676]">
                    <div className="h-2 w-2 rounded-full bg-[#34A853]"></div>
                    <span>Active Users</span>
                    <p className="font-bold">{apidata?.activeCount || 0}</p>
                </button>
                <button onClick={() => SetForm(true)} className="flex items-center gap-2 bg-[#F5F7F9] px-2">
                    Add Users <BiPlusCircle />
                </button>
                <select onChange={(e) => setRoleManageUser(e.target.value)} className="bg-[#F5F7F9] px-2">
                    <option value="interpreter">Interpreters</option>
                    <option value="admin">Admins</option>
                    <option value="billing-manager">Billing Managers</option>
                    <option value="client">Client</option>
                    <option value="quality-control">Quality Controal</option>
                    <option value="sub-admin">Sub Admin</option>
                </select>
            </div>
            {isLoading && <p>Loading...</p>}
            {error && <p>Error loading data...</p>}
            {Form && (
                <div className="fixed bottom-0 left-0 right-0 top-0 z-[100] bg-[#B9B9B970]">
                    <AddUserForm SetForm={SetForm} />
                </div>
            )}
            {!isLoading && !error && <Table columns={columns} data={tableData} />}
        </>
    );
};

export default Manageuser;
