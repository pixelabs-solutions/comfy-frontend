'use client'
import React from 'react';
import { BsDownload } from 'react-icons/bs';
import ToggleSwitch from "../toogle";
import Table from '../../admin/components/ManageUserTable';
import { useInterCallHistoryQuery } from '@/store/query/getapis';

const CallHistory = () => {
    // Fetch data using your custom query hook
    const { data: apidata } = useInterCallHistoryQuery();

    // Define table columns
    const columns = [
        { label: 'Call Duration', key: 'duration' },
        { label: 'Date and Time', key: 'date' },
        { label: 'Bill', key: 'bill' },
    ];

    // Format date function
    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

    // Map the API data to match the table's expected format
    const data = apidata?.map((item) => ({
        duration: item.duration || 'N/A',
        date: formatDate(item.createdAt),
        bill: `$${item.bill}` || 'N/A',
    })) || [];

    return (
        <>
            <div className='flex justify-between mb-8'>
                <div>
                    <h1 className='text-[25px] font-bold'>Call History</h1>
                    <p className='text-[#666777] text-sm my-2'>Monday, 29, April, 2024</p>
                </div>
                <ToggleSwitch />
            </div>
            <Table columns={columns} data={data} />
        </>
    );
};

export default CallHistory;
