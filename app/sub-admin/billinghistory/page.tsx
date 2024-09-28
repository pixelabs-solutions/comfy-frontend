'use client';
import { BsDownload } from 'react-icons/bs';
import React, { useState } from 'react';
import { useBillingHistoryQuery } from '@/store/query/getapis';
import Table from '@/app/admin/components/ManageUserTable';
import { CSVLink } from 'react-csv';

const BillingHistory = () => {
    const [filterDto, setFilterDto] = useState('weekly');
    const { data: apidata, isLoading, isError } = useBillingHistoryQuery({ filterDto });
    const [selectedData, setSelectedData] = useState<any[]>([]);

    // Prepare CSV data based on selected data
    const csvData = selectedData.map((item) => ({
        Interpreters: item.product,
        Status: item.statusBilling,
        Amount: item.amount, // Correct this key if needed
        Date: item.createdAt, // Adjusted for consistency with the original data
    }));

    const handleSelectedDataChange = (selectedData: any) => {
        console.log('Selected data:', selectedData); // For debugging
        setSelectedData(selectedData);
    };

    const columns = [
        { label: 'Interpreters', key: 'product' },
        { label: 'Status', key: 'statusBilling' },
        { label: 'Amount', key: 'amount' },
        { label: 'Date', key: 'createdAt' },
        { label: '', key: 'edit' },
        { label: '', key: 'download' },
    ];

    const data =
        apidata?.map((item: any) => ({
            product: `${item.interpreter.firstName} ${item.interpreter.lastName}`,
            image: item.interpreter.profilePicture[0],
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
                {selectedData.length > 0 ? (
                    <CSVLink
                        data={csvData}
                        className="flex items-center gap-2 bg-[#F5F7F9] px-2 py-1"
                        filename="billing_history.csv"
                    >
                        Download CSV
                        <BsDownload className="text-md" />
                    </CSVLink>
                ) : (
                    <button
                        className="flex items-center gap-2 bg-gray-300 px-2 py-1 cursor-not-allowed"
                        disabled
                    >
                        Download CSV
                        <BsDownload className="text-md" />
                    </button>
                )}
                <select
                    value={filterDto}
                    onChange={(e) => setFilterDto(e.target.value)}
                    className="bg-[#F5F7F9] px-2"
                >
                    <option value="weekly">Weekly</option>
                    <option value="daily">Daily</option>
                    <option value="monthly">Monthly</option>
                </select>
            </div>
            <Table columns={columns} onSelectedDataChange={handleSelectedDataChange} data={data} />
        </>
    );
};

export default BillingHistory;
