'use client'
import { BiPlusCircle } from "react-icons/bi"; 
import React from 'react';
import Table from '../components/ManageUserTable';

const App = () => {
  const columns = [
    { label: 'Interpreters', key: 'product' },
    { label: 'Status', key: 'price' },
    { label: 'User Manager', key: 'discount' },
    { label: '', key: '' },
    { label: '', key: '' },
  ];

  const data = [
    {
      product: 'Headphone',
      image: '/Admin/Ellipse 3.png',
      category: 'Digital',
      price: '$168.09',
      discount: '20%',
      sold: 'as',
      source: '/Admin/stylus_note.png',
    },
    // Add more rows as needed
  ];

  return(
  <>
  <h1 className='text-[25px] font-bold '>Manage Users</h1>
        <p className='text-[#666777] text-sm my-2'>Monday, 29, April, 2024</p>
        <div className='w-full flex justify-end gap-5 mb-8'>
            <button className='bg-[#E1F2E5] rounded-full flex gap-2 py-1 px-2 items-center text-[#656676]'>
              <div className='bg-[#34A853] h-2 w-2 rounded-full'></div>
              <span className=''>Active Interpreters</span>
              <p className='font-bold'>278</p>
            </button>
            <button className="flex items-center px-2 gap-2 bg-[#F5F7F9] ">
              Add Users <BiPlusCircle />
            </button>
            <select name="" id="" className='bg-[#F5F7F9] px-2 '>
              <option value="" className='bg-[#F5F7F9]'>Weekly</option>
              <option value="" className='bg-[#F5F7F9]'>Daily</option>
              <option value="" className='bg-[#F5F7F9]'>Monthly</option>
            </select>
        </div>
   <Table columns={columns} data={data}  />
   </>
  )
};

export default App;
