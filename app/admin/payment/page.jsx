"use client"
import React, { useState } from 'react'
import StatisticsSection from '../components/StatisticsSection'
import PaymentCard from '../components/paymentcard'
import Table from '../components/ManageUserTable'
import { useBillingHistoryQuery, usePaymentHistoryQuery } from '@/store/query/getapis'
const Payment = () => {
  const [period, setPeriod] = useState('week');
  const {data :Paymentdata} =usePaymentHistoryQuery({period})
  const filterDto =period;
  const { data:billingdata    , error, isLoading } = useBillingHistoryQuery({filterDto});

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
const handlePeriodChange = (e) => {
  setPeriod(e.target.value);
};
  return (
    <>
        <h1 className='text-[25px] font-bold '>Payment</h1>
        <p className='text-[#666777] text-sm my-2'>Monday, 29, April, 2024</p>
        <div className='w-full flex justify-end gap-5'>
            <button className='bg-[#E1F2E5] rounded-full flex gap-2 py-1 px-2 items-center text-[#656676]'>
              <div className='bg-[#34A853] h-2 w-2 rounded-full'></div>
              <span className=''>Active Interpreters</span>
              <p className='font-bold'>{data.activeInterpreters || "1"}</p>
            </button>
            <select 
          value={period} 
          onChange={handlePeriodChange} 
          className='bg-[#F5F7F9] px-2'
        >
          <option value="week">Weekly</option>
          <option value="month">Monthly</option>
          <option value="year">Yearly</option>
        </select>
        </div>
          <PaymentCard period={period}  Paymentdata={Paymentdata} />
        <div className='mt-8 mb-10'>
        <Table columns={columns} data={data}  />
        </div>

    </>
  )
}

export default Payment