'use client'
import { BsDownload } from 'react-icons/bs';
import React from 'react';
import Table from '../../admin/components/ManageUserTable';
import ToggleSwitch from "../toogle";
import { useInterpreterBillHistoryQuery } from '@/store/query/getapis';

const BillingHistory = () => {
    // Fetch data from your query
    const { data: apidata } = useInterpreterBillHistoryQuery();

    // Define table columns
    const columns = [
        { label: 'Date', key: 'date' },
        { label: 'Status', key: 'status' },
        { label: 'Amount', key: 'amount' },
        { label: 'Actions', key: 'edit' },
    ];

    // Format date function
    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

    // Map the API data to match the table's expected format
    const data = apidata?.map((item) => ({
        date: formatDate(item.createdAt),
        status: item.status || 'N/A',
        amount: `$${item.amount}` || 'N/A',
        edit: '/Admin/download.png',
    })) || [];

    return (
        <>
            <div className='flex justify-between mb-8'>
                <div>
                    <h1 className='text-[25px] font-bold'>Billing History</h1>
                    <p className='text-[#666777] text-sm my-2'>Monday, 29, April, 2024</p>
                </div>
                <ToggleSwitch />
            </div>
            <Table columns={columns} data={data} />
        </>
    );
};

export default BillingHistory;
