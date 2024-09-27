'use client';
import { BsDownload } from 'react-icons/bs';
import React, { useState } from 'react';
import { useBillingHistoryQuery } from '@/store/query/getapis';
import Table from '@/app/admin/components/ManageUserTable';
import { CSVLink, CSVDownload } from 'react-csv';
const BillingHistory = () => {
    const [filterDto, setFilterDto] = useState('weekly');
    const { data: apidata, isLoading, isError } = useBillingHistoryQuery({ filterDto });

    const columns = [
        { label: 'Interpreters', key: 'product' },
        { label: 'Status', key: 'statusBilling' },
        { label: 'Amount', key: 'amount' },
        { label: 'Date', key: 'createdAt' },
        { label: '', key: 'edit' },
        { label: '', key: 'download' },
    ];

    const data =
        apidata?.map((item) => ({
            product: `${item.interpreter.firstName} ${item.interpreter.lastName}`,
            image: item.interpreter.profilePicture[0], // Assuming the first image is the one to display
            statusBilling: item.status,
            amount: `$${item.amount}`,
            createdAt: new Date(item.createdAt).toLocaleDateString(),
            edit: '/Admin/download.png',
        })) || [];

    if (isLoading) return <p>Loading...</p>;
    if (isError) return <p>Error loading data.</p>;

    return (
        <>
            <h1 className="text-[30px] font-bold">Billing History</h1>
            <p className="my-2 text-sm text-[#666777]">{new Date().toLocaleDateString()}</p>
            <div className="mb-8 flex w-full justify-end gap-5">
                <CSVLink data={data} className="flex items-center gap-2 bg-[#F5F7F9] px-2 py-1">
                    Download CSV
                    <BsDownload className="text-md" />
                </CSVLink>
                <select value={filterDto} onChange={(e) => setFilterDto(e.target.value)} className="bg-[#F5F7F9] px-2">
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
