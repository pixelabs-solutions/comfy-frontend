"use client";
import { BsDownload } from 'react-icons/bs';
import React, { useState } from 'react';
import Table from '../components/ManageUserTable';
import { useBillingHistoryQuery } from '@/store/query/getapis';
import { CSVLink } from "react-csv";

const BillingHistory = () => {
    const [filterDto, setFilterDto] = useState('weekly'); // Initial state is 'weekly'
    
    const { data: billingdata, error, isLoading } = useBillingHistoryQuery({ filterDto });

    const columns = [
        { label: 'Interpreters', key: 'product' },
        { label: 'Status', key: 'price' },
        { label: 'Amount', key: 'discount' },
        { label: 'Date', key: 'Date' },
        { label: '', key: 'edit' },
        { label: '', key: '' },
    ];

    // Transform billingdata to match table structure
    const data = billingdata ? billingdata.map(item => ({
        product: item.interpreter.firstName + ' ' + item.interpreter.lastName,
        price: item.interpreter.status.charAt(0).toUpperCase() + item.interpreter.status.slice(1),
        discount: `$${parseFloat(item.amount).toLocaleString()}`,
        Date: new Date(item.createdAt).toLocaleDateString(),
        edit: '/Admin/download.png',
    })) : [];

    return (
        <>
            <h1 className="text-[30px] font-bold">Billing History</h1>
            <p className="my-2 text-sm text-[#666777]">{new Date().toLocaleDateString()}</p>
            <div className="mb-8 flex w-full justify-end gap-5">
                <CSVLink data={data} className="flex items-center gap-2 bg-[#F5F7F9] px-2 py-1">
                    Download csv
                    <BsDownload className="text-md" />
                </CSVLink>
                <select
                    className="bg-[#F5F7F9] px-2"
                    value={filterDto}
                    onChange={(e) => setFilterDto(e.target.value)} // Update filterDto on change
                >
                    <option value="weekly">Weekly</option>
                    <option value="daily">Daily</option>
                    <option value="monthly">Monthly</option>
                </select>
            </div>
            <Table columns={columns} data={data} />
        </>
    );
};

export default BillingHistory;
