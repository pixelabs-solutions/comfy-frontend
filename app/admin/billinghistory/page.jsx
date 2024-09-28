'use client';
import { BsDownload } from 'react-icons/bs';
import React, { useState } from 'react';
import Table from '../components/ManageUserTable';
import { useBillingHistoryQuery } from '@/store/query/getapis';
import { CSVLink } from 'react-csv';

const BillingHistory = () => {
    const [filterDto, setFilterDto] = useState('weekly'); // Initial state is 'weekly'
    const [selectedData, setSelectedData] = useState([]);
    const { data: billingdata, error, isLoading } = useBillingHistoryQuery({ filterDto });

    const columns = [
        {
            label: (
                <div className="flex items-center gap-2">
                    <p>Interpreters</p>
                    <svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 18L0.5 13.5L1.95 12.05L5 15.1L8.05 12.05L9.5 13.5L5 18ZM1.95 6.05001L0.5 4.60001L5 0.100006L9.5 4.60001L8.05 6.05001L5 3.00001L1.95 6.05001Z" fill="#37384D" />
                    </svg>
                </div>
            ),
            key: 'product',
        },
        {
            label: (
                <div className="flex items-center gap-2">
                    <p>Status</p>
                    <svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 18L0.5 13.5L1.95 12.05L5 15.1L8.05 12.05L9.5 13.5L5 18ZM1.95 6.05001L0.5 4.60001L5 0.100006L9.5 4.60001L8.05 6.05001L5 3.00001L1.95 6.05001Z" fill="#37384D" />
                    </svg>
                </div>
            ),
            key: 'statusBilling',
        },
        { label: 'Amount', key: 'discount' },
        { label: 'Date', key: 'Date' },
        { label: '', key: 'edit' },
        {  key: 'NotShowCheckbox' },
        { label: '', key: '' },
    ];

    // Transform billingdata to match table structure
    const data = billingdata
        ? billingdata.map((item) => ({
              product: item.interpreter.firstName + ' ' + item.interpreter.lastName,
              statusBilling: item.status,
              discount: `$${parseFloat(item.amount).toLocaleString()}`,
              Date: new Date(item.createdAt).toLocaleDateString(),
              edit: '/Admin/download.png',
          }))
        : [];

    // Map selected data to match CSV labels, not keys
    const csvData = selectedData.map((item) => {
        return {
            Interpreters: item.product,
            Status: item.statusBilling,
            Amount: item.discount,
            Date: item.Date,
        };
    });

    const handleSelectedDataChange = (selectedData) => {
        console.log('Selected data:', selectedData); // For debugging
        setSelectedData(selectedData);
    };

    return (
        <>
            <h1 className="text-[30px] font-bold">Billing History</h1>
            <p className="my-2 text-sm text-[#666777]">{new Date().toLocaleDateString()}</p>
            <div className="mb-8 flex w-full justify-end gap-5">
                {selectedData.length > 0 ? (
                    <CSVLink
                        data={csvData}
                        className="flex items-center gap-2 bg-[#F5F7F9] px-2 py-1"
                        filename="billing_history.csv"
                    >
                        Download csv
                        <BsDownload className="text-md" />
                    </CSVLink>
                ) : (
                    <button
                        className="flex items-center gap-2 bg-gray-300 px-2 py-1 cursor-not-allowed"
                        disabled
                    >
                        Download csv
                        <BsDownload className="text-md" />
                    </button>
                )}
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
            <Table columns={columns} data={data} onSelectedDataChange={handleSelectedDataChange} />
        </>
    );
};

export default BillingHistory;
