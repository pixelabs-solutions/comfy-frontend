"use client";
import React, { useEffect, useState } from 'react';
import GraphChart from '@/app/admin/components/graph';
import StatisticsSection from '@/app/admin/components/StatisticsSection';
import { useSubadminKpiQuery } from '@/store/query/getapis';

const SubadminDashboard: React.FC = () => {
    const [filterDto, setFilterDto] = useState<string>('weekly');

    useEffect(() => {
        const storedFilterDto = localStorage.getItem('subadminTimeRange') || 'weekly';
        setFilterDto(storedFilterDto);
    }, []);

    useEffect(() => {
        localStorage.setItem('subadminTimeRange', filterDto);
    }, [filterDto]);

    const { data: subadmindata, isLoading, error } = useSubadminKpiQuery({ filterDto });

    const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setFilterDto(event.target.value);
    };

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message || 'Something went wrong'}</div>;

    return (
        <>
            <h1 className='text-[25px] font-bold'>Subadmin Dashboard</h1>
            <p className='text-[#666777] text-sm my-2'>Monday, 29, April, 2024</p>
            <div className='w-full flex justify-end gap-5'>
                <button className='bg-[#E1F2E5] rounded-full flex gap-2 py-1 px-2 items-center text-[#656676]'>
                    <div className='bg-[#34A853] h-2 w-2 rounded-full'></div>
                    <span>Active Interpreters</span>
                    <p className='font-bold'>{subadmindata?.activeInterpreters || 0}</p>
                </button>
                <select className='bg-[#F5F7F9] px-2' value={filterDto} onChange={handleFilterChange}>
                    <option value='weekly'>Weekly</option>
                    <option value='monthly'>Monthly</option>
                    <option value='yearly'>Yearly</option>
                </select>
            </div>
            <StatisticsSection apidata={subadmindata} timeRange={filterDto} />
            <div className='mt-8 mb-10'>
                <h2 className='text-[20px] font-bold'>{filterDto.charAt(0).toUpperCase() + filterDto.slice(1)} Interactions</h2>
                <GraphChart apidata={subadmindata} />
            </div>
        </>
    );
};

export default SubadminDashboard;
