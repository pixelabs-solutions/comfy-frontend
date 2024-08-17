import React from 'react'
import StatisticsSection from '../components/StatisticsSection'
import PaymentCard from '../components/paymentcard'
import Table from '../components/ManageUserTable'
const Payment = () => {
  const columns = [
    { label: 'Interpreters', key: 'product' },
    { label: 'Status', key: 'price' },
    { label: 'Amount', key: 'discount' },
    { label: 'Date', key: 'Date' },
    { label: '', key: 'edit' },
    { label: '', key: '' },
];

const data = [
    {
        product: 'Headphone',
        image: '/Admin/Ellipse 3.png',
        category: 'Digital',
        price: 'Active',
        discount: '$1213',
        Date: '13 December 2023',
        edit: '/Admin/download.png',
    },
];

  return (
    <>
        <h1 className='text-[25px] font-bold '>Payment</h1>
        <p className='text-[#666777] text-sm my-2'>Monday, 29, April, 2024</p>
        <div className='w-full flex justify-end gap-5'>
            <button className='bg-[#E1F2E5] rounded-full flex gap-2 py-1 px-2 items-center text-[#656676]'>
              <div className='bg-[#34A853] h-2 w-2 rounded-full'></div>
              <span className=''>Active Interpreters</span>
              <p className='font-bold'>278</p>
            </button>
            <select name="" id="" className='bg-[#F5F7F9] px-2 '>
              <option value="" className='bg-[#F5F7F9]'>Weekly</option>
              <option value="" className='bg-[#F5F7F9]'>Daily</option>
              <option value="" className='bg-[#F5F7F9]'>Monthly</option>
            </select>
        </div>
          <PaymentCard />
        <div className='mt-8 mb-10'>
        <Table columns={columns} data={data} />
        </div>

    </>
  )
}

export default Payment