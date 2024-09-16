
"use client";
import { BiSearchAlt2 } from 'react-icons/bi';
import React, { useState, useEffect } from 'react';
import { BsDownload } from 'react-icons/bs';
import { useCallHistoryQuery } from '@/store/query/getapis';
import Table from '../components/ManageUserTable';

// Function to get the current date in the desired format (YYYY-MM-DD)
const getCurrentDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
};

const CallHistory: React.FC = () => {
    // Get the saved timeRange and date from local storage or use defaults
    const savedTimeRange = typeof window !== 'undefined' ? localStorage.getItem('timeRange') : 'monthly';
    const savedDate = typeof window !== 'undefined' ? localStorage.getItem('date') : getCurrentDate();

    const [timeRange, setTimeRange] = useState<string>(savedTimeRange || 'monthly');
    const [date, setDate] = useState<string>(savedDate || getCurrentDate());

    const columns = [
        { label: 'Client', key: 'Client' },
        { label: 'Interpreters', key: 'IntClient' },
        { label: 'Duration', key: 'Duration' },
        { label: 'Date and Time', key: 'Date' },
        { label: 'Bill', key: 'Bill' },
    ];

    const { data, isLoading, error } = useCallHistoryQuery({ timeRange, date });

    useEffect(() => {
        // Save timeRange and date to local storage whenever they change
        if (typeof window !== 'undefined') {
            localStorage.setItem('timeRange', timeRange);
            localStorage.setItem('date', date);
        }
    }, [timeRange, date]);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: Something went wrong</div>;
    }

    const data1 = data?.result.map((item: any) => ({
        Client: `${item.client.firstName} ${item.client.lastName}`,
        image: (item.client.profilePicture && item.client.profilePicture.length > 0) ? item.client.profilePicture[0] : '/Admin/Ellipse 3.png',
        IntClient: `${item.interpreter.firstName} ${item.interpreter.lastName}`,
        IntImage: (item.interpreter.profilePicture && item.interpreter.profilePicture.length > 0) ? item.interpreter.profilePicture[0] : '/path/to/default-image.png',
        Duration: item.duration,
        Date: new Date(item.createdAt).toLocaleString(),
        Bill: `$${item.bill}`,
    })) || [];
    

    const handleTimeRangeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const value = event.target.value;
        setTimeRange(value !== '' ? value : 'monthly'); // Default to "monthly" if no value is selected

        // Force a page reload to apply the new filter
        window.location.reload();
    };

    return (
        <>
            <h1 className="text-[30px] font-bold ">Call History</h1>
            <p className="my-2 text-sm text-[#666777]">Monday, {new Date().toLocaleDateString()}</p>
            <div className="mb-8 flex lg:flex-nowrap flex-wrap w-full lg:justify-end gap-5">
                <div className="flex items-center gap-2 rounded-md bg-[#F5F7F9] px-5 lg:py-0 py-2">
                    <input type="text" placeholder="search by name or phone number" className="bg-transparent outline-none w-56" />
                    <BiSearchAlt2 className="text-lg text-gray-500" />
                </div>
                <button className="flex items-center gap-2 bg-[#F5F7F9] px-2 py-1">
                    Download csv
                    <BsDownload className="text-md" />
                </button>
                <select
                    name="timeRange"
                    id="timeRange"
                    className="bg-[#F5F7F9] px-2"
                    value={timeRange}
                    onChange={handleTimeRangeChange}
                >
                    <option value="">All</option>
                    <option value="weekly">Weekly</option>
                    <option value="daily">Daily</option>
                    <option value="monthly">Monthly</option>
                </select>
            </div>
            <Table columns={columns} data={data1} />
        </>
    );
};

export default CallHistory;
