'use client';
import React, { useState } from 'react';
import StatisticsSection from '../components/StatisticsSection';
import PaymentCard from '../components/paymentcard';
import Table from '../components/ManageUserTable';
import { useBillingHistoryQuery, usePaymentHistoryQuery } from '@/store/query/getapis';
const Payment = () => {
    const [period, setPeriod] = useState('week');
    const { data: Paymentdata } = usePaymentHistoryQuery({ period });
    const filterDto = period;
    const { data: billingdata, error, isLoading } = useBillingHistoryQuery({ filterDto });

    const columns = [
        { label: 'Interpreters', key: 'product' },
        {
            label: (
                <div className="flex items-center   gap-2">
                    <p>Status</p>
                    <svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 18L0.5 13.5L1.95 12.05L5 15.1L8.05 12.05L9.5 13.5L5 18ZM1.95 6.05001L0.5 4.60001L5 0.100006L9.5 4.60001L8.05 6.05001L5 3.00001L1.95 6.05001Z" fill="#37384D" />
                    </svg>
                </div>
            ),
            key: 'statusBilling',
            
        },
    {    key: 'NotShowCheckbox'},

        { label: 'Amount', key: 'discount' },
        { label: 'Date', key: 'Date' },
        { label: '', key: 'edit' },
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
    const handlePeriodChange = (e) => {
        setPeriod(e.target.value);
    };
    return (
        <>
            <h1 className="text-[25px] font-bold ">Payment</h1>
            <p className="my-2 text-sm text-[#666777]">Monday, 29, April, 2024</p>
            <div className="flex w-full justify-end gap-5">
                <button className="flex items-center gap-2 rounded-full bg-[#E1F2E5] px-2 py-1 text-[#656676]">
                    <div className="h-2 w-2 rounded-full bg-[#34A853]"></div>
                    <span className="">Active Interpreters</span>
                    <p className="font-bold">{data.activeInterpreters || '1'}</p>
                </button>
                <select value={period} onChange={handlePeriodChange} className="bg-[#F5F7F9] px-2">
                    <option value="week">Weekly</option>
                    <option value="month">Monthly</option>
                    <option value="year">Yearly</option>
                </select>
            </div>
            <PaymentCard period={period} Paymentdata={Paymentdata} />
            <div className="mb-10 mt-8">
                <Table columns={columns} data={data} />
            </div>
        </>
    );
};

export default Payment;
