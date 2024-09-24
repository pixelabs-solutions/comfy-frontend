'use client'
import { BiSearchAlt2 } from 'react-icons/bi';
import React from 'react';
import { BsDownload } from 'react-icons/bs';
import Table from '../../admin/components/ManageUserTable'; // Ensure Table component is correctly imported
import { useClientsCallHistoryQuery } from '@/store/query/getapis';

const CallHistory = () => {
    const timeRange = "yearly"; // Currently unused, but keep for future logic
    const date = new Date().toLocaleDateString('en-US'); // Get the current date
    const { data: apidata, isLoading, error } = useClientsCallHistoryQuery(); // Handle loading and error states

    // Map API data to the format expected by the table
    const data = apidata?.map(item => ({
        Duration: item.duration, // Call duration
        Date: new Date(item.createdAt).toLocaleString('en-US', {
            year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', hour12: true
        }), // Format date and time
        Bill: `$${item.bill}`, // Format bill
    })) || [];

    const columns = [
        { label: 'Call Duration', key: 'Duration' },
        { label: 'Date and Time', key: 'Date' },
        { label: 'Bill', key: 'Bill' },
    ];

    // Handle loading and error states
    if (isLoading) return <p>Loading call history...</p>;
    if (error) return <p>Error fetching call history data.</p>;

    return (
        <div className='p-4 md:p-[45px]'>
            <h1 className="text-[30px] font-bold">Call History</h1>
            <p className="my-2 text-sm text-[#666777]">{date}</p>
            <div className="mt-10">
                <Table columns={columns} data={data} />
            </div>
        </div>
    );
};

export default CallHistory;
