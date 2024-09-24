"use client";
import React, { useEffect, useState } from 'react';
import { useAdminKpiQuery } from '@/store/query/getapis';
import GraphChart from '../components/graph';
import StatisticsSection from '../components/StatisticsSection';

const AdminDashboard: React.FC = () => {
    const [timeRange, setTimeRange] = useState<'weekly' | 'monthly' | 'yearly'>('weekly');

    useEffect(() => {
        const storedTimeRange = localStorage.getItem('adminTimeRange') as 'weekly' | 'monthly' | 'yearly';
        if (storedTimeRange) {
            setTimeRange(storedTimeRange);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('adminTimeRange', timeRange);
    }, [timeRange]);

    const { data: apiData, error, isLoading } = useAdminKpiQuery(timeRange);

    const handleTimeRangeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setTimeRange(e.target.value as 'weekly' | 'monthly' | 'yearly');
    };

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {'Something went wrong'}</div>;

    return (
        <>
            <h1 className='text-[25px] font-bold'>Admin Dashboard</h1>
            <p className='text-[#666777] text-sm my-2'>Monday, 29, April, 2024</p>
            <div className='w-full flex justify-end gap-5'>
                <button className='bg-[#E1F2E5] rounded-full flex gap-2 py-1 px-2 items-center text-[#656676]'>
                    <div className='bg-[#34A853] h-2 w-2 rounded-full'></div>
                    <span>Active Interpreters</span>
                    <p className='font-bold'>{apiData?.activeInterpreters || 0}</p>
                </button>
                <select value={timeRange} onChange={handleTimeRangeChange} className='bg-[#F5F7F9] px-2'>
                    <option value="weekly">Weekly</option>
                    <option value="monthly">Monthly</option>
                    <option value="yearly">Yearly</option>
                </select>
            </div>
            <StatisticsSection apidata={apiData} timeRange={timeRange} />
            <div className='mt-8 mb-10'>
                <h2 className='text-[20px] font-bold'>{timeRange.charAt(0).toUpperCase() + timeRange.slice(1)} Interactions</h2>
                <GraphChart apidata={apiData} timeRange={timeRange} />
            </div>
        </>
    );
};

export default AdminDashboard;
