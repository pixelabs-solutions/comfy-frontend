"use client";
import { BiSearchAlt2 } from 'react-icons/bi';
import React, { useState, useMemo } from 'react';
import Table from '../../admin/components/ManageUserTable';
import { useSubadminCallHistoryQuery } from '../../../store/query/getapis';
import { format } from 'date-fns';
import { BsDownload } from 'react-icons/bs';
import { CSVLink } from 'react-csv';

const CallHistory = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [timeRange, setTimeRange] = useState('weekly');
    const [selectedData, setSelectedData] = useState<any[]>([]);

    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + 1);
    const formattedCurrentDate = format(currentDate, 'yyyy-MM-dd');

    const { data: apidata, isLoading, isError } = useSubadminCallHistoryQuery({ timeRange, date: formattedCurrentDate });

    const csvData = selectedData.map((item) => ({
        Interpreters: item.Interpreters,
        Client:item.Client,
        Duration: item.Duration,
        Date: item.Date,
        Bill: item.Bill,
    }));

    const columns = [
        { label: 'Client', key: 'Client' },
        { label: 'Interpreters', key: 'Interpreters' },
        { label: 'Duration', key: 'Duration' },
        { label: 'Date and Time', key: 'Date' },
        { label: 'Bill', key: 'Bill' },
    ];

    const data = useMemo(() => {
        if (!apidata) return [];

        return apidata["result"].map((item: any) => ({
            Client: `${item.client.firstName} ${item.client.lastName}`,
            Interpreters: `${item.interpreter.firstName} ${item.interpreter.lastName}`,
            Duration: item.duration,
            Date: format(new Date(item.createdAt), 'MMM dd, yyyy hh:mm a'),
            Bill: item.bill ? `$${item.bill}` : 'N/A',
        }));
    }, [apidata]);

    const filteredData = useMemo(() => {
        return searchTerm
            ? data.filter(row => row.Client.toLowerCase().includes(searchTerm.toLowerCase()))
            : data;
    }, [data, searchTerm]);

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };

    const handleSelectedDataChange = (selectedData: any[]) => {
        console.log('Selected data:', selectedData);
        setSelectedData(selectedData);
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
                {selectedData.length > 0 ? (
                <CSVLink
                    data={csvData}
                    className="flex items-center gap-2 bg-[#F5F7F9] px-2 py-1"
                    filename="call_history.csv"
                >
                    Download CSV
                    <BsDownload className="text-md" />
                </CSVLink>
            ) : (
                <button className="flex items-center gap-2 bg-gray-300 px-2 py-1 cursor-not-allowed" disabled>
                    Download CSV
                    <BsDownload className="text-md" />
                </button>
            )}
                <select
                    name="timeRange"
                    id="timeRange"
                    className="bg-[#F5F7F9] px-2"
                    value={timeRange}
                    onChange={(e) => setTimeRange(e.target.value)}
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
            ) : filteredData.length === 0 ? (
                <p>No records found.</p>
            ) : (
                <Table onSelectedDataChange={handleSelectedDataChange} columns={columns} data={filteredData} />
            )}
        </>
    );
};

export default CallHistory;
