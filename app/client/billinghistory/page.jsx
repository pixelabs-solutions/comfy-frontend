"use client"
import { BsDownload } from 'react-icons/bs';
import React from 'react';
import { BiPlusCircle } from 'react-icons/bi';
import Table from '../../admin/components/ManageUserTable';
import { useBillingHistoryQuery, useClientsBillHistoryQuery } from '../../../store/query/getapis';

const BillingHistory = () => {
    const { data: apidata } = useClientsBillHistoryQuery();

    // Map API data to the format expected by the table
    const data = apidata?.map(item => ({
        duration: item.duration || 'N/A', // You might want to compute or get this from somewhere
        price: item.status, // Assuming 'status' corresponds to 'Status'
        discount: `$${item.bill}`, // Format amount
        Date: new Date(item.createdAt).toLocaleDateString('en-US', {
            year: 'numeric', month: 'long', day: 'numeric'
        }), // Format date
        edit: '/Admin/download.png', // Replace with appropriate link or action
    })) || [];

    const columns = [
        { label: 'Duration', key: 'duration' },
        { label: 'Status', key: 'price' },
        { label: 'Amount', key: 'discount' },
        { label: 'Date', key: 'Date' },
        { label: '', key: 'edit' },
    {    key: 'NotShowCheckbox'},

        { label: '', key: '' },
    ];

    return (
        <div className='p-4 md:p-[45px]'>
            <h1 className="text-[30px] font-bold">Billing History</h1>
            <p className="my-2 text-sm text-[#666777]">{new Date().toLocaleDateString()}</p>
            <div className="mt-10">
                <Table columns={columns} data={data} />
            </div>
        </div>
    );
};

export default BillingHistory;
