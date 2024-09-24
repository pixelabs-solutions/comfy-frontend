import { BsDownload } from 'react-icons/bs';
import React from 'react';
import { BiPlusCircle } from 'react-icons/bi';
import Table from '../../admin/components/ManageUserTable';
import ToggleSwitch from "../toogle"
const billinghistory = () => {
    const columns = [
        //         { label: 'Interpreters', key: 'product' },
        { label: 'Duration', key: 'duration' },
        { label: 'Status', key: 'price' },
        { label: 'Amount', key: 'discount' },
        { label: 'Date', key: 'Date' },
        { label: '', key: 'edit' },
        { label: '', key: '' },
    ];

    const data = [
        {
            duration: '03:44',
            price: 'Active',
            discount: '$1213',
            Date: '13 December 2023',
            edit: '/Admin/download.png',
        },

        // Add more rows as needed
    ];

    return (
        <>
            <div className='flex justify-between mb-8'>
   <div>
   <h1 className='text-[25px] font-bold '>Billing History</h1>
   <p className='text-[#666777] text-sm my-2'>Monday, 29, April, 2024</p>
   </div>
        <ToggleSwitch />
     </div>
            <Table columns={columns} data={data} />
        </>
    );
};

export default billinghistory;
