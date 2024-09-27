"use client";
import { BiSearchAlt2 } from 'react-icons/bi';
import React, { useState, useMemo } from 'react';
import Table from '../../admin/components/ManageUserTable';
import { useSubadminCallHistoryQuery } from '../../../store/query/getapis'; // Updated query hook
import { format } from 'date-fns'; // Import date-fns for formatting

const CallHistory = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [timeRange, setTimeRange] = useState('weekly'); // Default time range selection

    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + 1); // Adjusting the current date
    const formattedCurrentDate = format(currentDate, 'yyyy-MM-dd'); // Formatting the current date

    // Using updated query with new parameters
    const { data: apidata, isLoading, isError } = useSubadminCallHistoryQuery({ timeRange, date: formattedCurrentDate });
    
    const columns = [
        { label: 'Client', key: 'Client' },
        { label: 'Interpreters', key: 'IntClient' },
        { label: 'Duration', key: 'Duration' },
        { label: 'Date and Time', key: 'Date' },
        { label: 'Bill', key: 'Bill' },
    ];

    const data = useMemo(() => {
        if (!apidata) return [];
        
        return apidata["result"].map((item) => ({
            Client: `${item.client.firstName} ${item.client.lastName}`,
            image: Array.isArray(item.client.profilePicture) && item.client.profilePicture.length > 0
                ? item.client.profilePicture[0]
                : '/Admin/defaultClientImage.png', // Default image if not available
            IntClient: `${item.interpreter.firstName} ${item.interpreter.lastName}`,
            IntImage: Array.isArray(item.interpreter.profilePicture) && item.interpreter.profilePicture.length > 0
                ? item.interpreter.profilePicture[0]
                : '/Admin/defaultInterpreterImage.png', // Default image if not available
            Duration: item.duration,
            Date: format(new Date(item.createdAt), 'MMM dd, yyyy hh:mm a'), // Formatting the date for display
            Bill: item.bill ? `$${item.bill}` : 'N/A', // Displaying bill with a default value if not available
        }));
    }, [apidata]);

    const filteredData = useMemo(() => {
        return searchTerm
            ? data.filter(row => row.Client.toLowerCase().includes(searchTerm.toLowerCase()))
            : data;
    }, [data, searchTerm]);

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value); // Setting the search term
    };

    return (
        <>
            <h1 className="text-[30px] font-bold">Call History</h1>
            <p className="my-2 text-sm text-[#666777]">{formattedCurrentDate}</p>
            <div className="mb-8 flex flex-wrap w-full lg:justify-end gap-5">
                <div className="flex items-center gap-2 rounded-md bg-[#F5F7F9] py-[6px] px-5">
                    <input
                        type="text"
                        placeholder="Search by name or phone number"
                        className="bg-transparent outline-none w-56"
                        value={searchTerm}
                        onChange={handleSearchChange}
                        aria-label="Search"
                    />
                    <BiSearchAlt2 className="text-lg text-gray-500" />
                </div>
                <select
                    name="timeRange"
                    id="timeRange"
                    className="bg-[#F5F7F9] px-2"
                    value={timeRange}
                    onChange={(e) => setTimeRange(e.target.value)} // Handling time range selection
                    aria-label="Select Time Range"
                >
                    <option value="weekly">Weekly</option>
                    <option value="monthly">Monthly</option>
                    <option value="yearly">Yearly</option>
                </select>
            </div>
            {isLoading ? (
                <p>Loading data...</p>
            ) : isError ? (
                <p>Error loading data.</p>
            ) : (
                <Table columns={columns} data={filteredData} /> // Rendering filtered data in the table
            )}
        </>
    );
};

export default CallHistory;
