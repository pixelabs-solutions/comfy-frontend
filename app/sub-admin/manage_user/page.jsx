// 'use client';
// import { BiPlusCircle } from 'react-icons/bi';
// import React, { useState } from 'react';
// import Table from '../../admin/components/ManageUserTable';
// import { useManageUserQuery } from '@/store/query/getapis';
// import AddUserForm from '@/app/signup/page'; // Import AddUserForm if needed

// const ManageUser = () => {
//     const [Form, SetForm] = useState(false);
//     const [roleManageUser, setRoleManageUser] = useState(localStorage.getItem("SELECTEDROLE") || "interpreter");
//     const { data: apidata, error, isLoading } = useManageUserQuery({ roleManageUser });

//     const columns = [
//         { label: 'Interpreters', key: 'product' },
//         { label: 'Status', key: 'price' },
//         { label: 'User Manager', key: 'discount' },
//         { label: '', key: 'edit' },
//         { label: '', key: '' },
//     ];

//     const tableData = apidata?.users?.map(user => ({
//         product: user.username || 'N/A',
//         price: user.status || 'N/A',
//         discount: user.addedBy || 'N/A',
//         image: user.image || '/path/to/default/image.png', // Set default image if none provided
//         edit: "/Admin/stylus_note.png"// Replace with actual edit icon path
//     })) || [];

//     return (
//         <>
//             <h1 className="text-[30px] font-bold ">Manage Users</h1>
//             <p className="my-2 text-sm text-[#666777]">Monday, 29, April, 2024</p>
//             <div className="mb-8 flex lg:flex-nowrap flex-wrap w-full lg:justify-end gap-5">
//                 <button className="flex items-center gap-2 rounded-full bg-[#E1F2E5] px-2 py-1 text-[#656676]">
//                     <div className="h-2 w-2 rounded-full bg-[#34A853]"></div>
//                     <span>Active Users</span>
//                     <p className="font-bold">{apidata?.activeCount || 0}</p>
//                 </button>
//                 <button onClick={() => SetForm(true)} className="flex items-center gap-2 bg-[#F5F7F9] px-2">
//                     Add Users <BiPlusCircle />
//                 </button>
//                 <select 
//                     value={roleManageUser} 
//                     onChange={(e) => setRoleManageUser(e.target.value)} 
//                     className="bg-[#F5F7F9] px-2"
//                 >
//                      <option value="interpreter" className="bg-[#F5F7F9]">interpreter</option>
//                     <option value="client" className="bg-[#F5F7F9]">client</option>
//                     <option value="sub-admin" className="bg-[#F5F7F9]">sub-admin</option>
//                     <option value="admin" className="bg-[#F5F7F9]">admin</option>
//                     <option value="billing-manager" className="bg-[#F5F7F9]">billing manager</option>
//                     <option value="quality-control" className="bg-[#F5F7F9]">quality Control</option>
//                 </select>
//             </div>
//             {isLoading && <p>Loading...</p>}
//             {error && <p>Error loading data...</p>}
//             {Form && (
//                 <div className='fixed left-0 right-0 top-0 bottom-0 bg-[#B9B9B970] z-[100]'>
//                     <AddUserForm />
//                 </div>
//             )}
//             {!isLoading && !error && <Table columns={columns} data={tableData} />}
//         </>
//     );
// };

// export default ManageUser;
"use client"
import { BiPlusCircle } from 'react-icons/bi';
import React, { useState, useEffect } from 'react';
import AddUserForm from '@/app/signup/page';
import { useManageUserQuery } from '@/store/query/getapis';
import Table from '@/app/admin/components/ManageUserTable';

const Manageuser = () => {
    const [Form, SetForm] = useState(false);
    const [roleManageUser, setRoleManageUser] = useState(localStorage.getItem("SELECTEDROLE") || "interpreter");
    const { data: apidata, error, isLoading } = useManageUserQuery({ roleManageUser });

    // Define the label for the first column based on the selected role
    const getLabelForRole = (role) => {
        switch (role) {
            case 'interpreter':
                return 'Interpreters';
            case 'admin':
                return 'Admins';
            case 'billing-manager':
                return 'Billing Managers';
            case 'client':
                return 'Clients';
            case 'quality-control':
                return 'Quality Control';
            case 'sub-admin':
                return 'Sub Admins';
            default:
                return 'Users';
        }
    };

    const [columns, setColumns] = useState([
        { label: getLabelForRole(roleManageUser), key: 'product' },
        { label: 'Status', key: 'price' },
        { label: 'User Manager', key: 'discount' },
        { label: '', key: 'edit' },
        { label: '', key: '' },
    ]);

    // Update columns when roleManageUser changes
    useEffect(() => {
        setColumns([
            { label: getLabelForRole(roleManageUser), key: 'product' },
            { label: 'Status', key: 'statusMangeUser' },
            { label: 'Email Adress', key: 'discount' },
            { label: '', key: 'edit' },
            { label: '', key: '' },
        ]);
    }, [roleManageUser]);

    const tableData = apidata?.users?.map(user => ({
        product: user.username || 'N/A',
        category: user.email || 'N/A',
        statusMangeUser: user.status || 'N/A',
        discount: user.email || 'N/A',
        image: user.image || '/path/to/default/image.png', // Set default image if none provided
        edit: '/Admin/stylus_note.png',
    })) || [];

    return (
        <>
            <h1 className="text-[30px] font-bold">Manage Users</h1>
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
                    onChange={(e) => setRoleManageUser(e.target.value)} 
                    className="bg-[#F5F7F9] px-2"
                    value={roleManageUser}
                >
                    <option value="interpreter">Interpreters</option>
                    <option value="admin">Admins</option>
                    <option value="billing-manager">Billing Managers</option>
                    <option value="client">Clients</option>
                    <option value="quality-control">Quality Control</option>
                    <option value="sub-admin">Sub Admin</option>
                </select>
            </div>
            {isLoading && <p>Loading...</p>}
            {error && <p>Error loading data...</p>}
            {Form && (
                <div className='fixed left-0 right-0 top-0 bottom-0 bg-[#B9B9B970] z-[100]'>
                    <AddUserForm SetForm={SetForm} />
                </div>
            )}
            {!isLoading && !error && <Table columns={columns} data={tableData} />}
        </>
    );
};

export default Manageuser;
