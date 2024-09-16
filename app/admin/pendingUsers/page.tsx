"use client";
import React, { useState, useEffect } from 'react';
import { BiPlusCircle } from 'react-icons/bi';
import Table from '../components/ManageUserTable';
import { usePendingUsersQuery } from '@/store/query/getapis';

// Function to get the stored role from local storage
const getStoredRole = () => {
    if (typeof window !== 'undefined') {
        return localStorage.getItem('selectedRole') || 'InterPretier'; // Default value
    }
    return 'InterPretier'; // Default value if local storage is not available
};

const PendingUsers = () => {
    const [selectedRole, setSelectedRole] = useState<string>(getStoredRole());
    const { data: apiData } = usePendingUsersQuery({ role: selectedRole });

    // Function to handle role changes
    const handleRoleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const role = event.target.value;
        setSelectedRole(role);

        // Save the selected role to local storage
        if (typeof window !== 'undefined') {
            localStorage.setItem('selectedRole', role);
        }

        // Optionally, force a page reload to apply the new filter
        window.location.reload();
    };

    // Define columns including a single 'status' column
    const columns = [
        { label: selectedRole, key: 'product' },
        { label: 'User Manager', key: 'discount' },
        { label: '', key: 'status' }, // Combined status column
    ];

    // Update data structure to include a single 'status' key
    const data = apiData?.users.map((user: any) => ({
        product: `${user.firstName} ${user.lastName}`, // Use the role as the value for the 'product' column
        image: user.profilePicture || '/Admin/Ellipse 3.png', // Use default image if no profile picture
        category: user.gender, // Example usage, adjust as needed
        discount: `${user.firstName} ${user.lastName}`, // Example usage, adjust as needed
        status: ["Approved", "Reject"] // Example status, adjust as needed
    })) || [];

    return (
        <>
            <h1 className="text-[30px] font-bold">Pending Users</h1>
            <p className="my-2 text-sm text-[#666777]">Monday, 29, April, 2024</p>
            <div className="mb-8 flex w-full justify-end gap-5">
                <button className="flex items-center gap-2 rounded-full bg-[#EB433533] px-2 py-1 text-[#656676]">
                    <div className="h-2 w-2 rounded-full bg-[#EB4335]"></div>
                    <span>Active Interpreters</span>
                    <p className="font-bold">{apiData?.count}</p>
                </button>
                <select
                    name="role"
                    id="role"
                    className="bg-[#F5F7F9] px-2"
                    value={selectedRole}
                    onChange={handleRoleChange}
                >
                    <option value="interpreter" className="bg-[#F5F7F9]">interpreter</option>
                    <option value="client" className="bg-[#F5F7F9]">client</option>
                    <option value="sub-admin" className="bg-[#F5F7F9]">sub-admin</option>
                </select>
            </div>
            <Table columns={columns} data={data} />
        </>
    );
};

export default PendingUsers;
