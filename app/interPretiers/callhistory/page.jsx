import { BiSearchAlt2 } from 'react-icons/bi';
import React from 'react';
import { BsDownload } from 'react-icons/bs';
import ToggleSwitch from "../toogle"
import Table from '../../admin/components/ManageUserTable';

const CallHistory = () => {
    const columns = [
//         { label: 'Client', key: 'Client' },
//         { label: 'Interpreters', key: 'IntClient' },
        { label: 'Call Duration', key: 'Duration' },
        { label: 'Date and Time', key: 'Date' },
        { label: 'Bill', key: 'Bill' },
        //         { label: '', key: '' },
    ];

    const data = [
        {
            Client: 'Headphone',
            image: '/Admin/Ellipse 3.png',
            IntClient: 'John Doe',
            IntImage: '/Admin/Ellipse 3.png',
            Duration: '03:44',
            Date: '15 May 2020 8:30 am',
            Bill: '$293.01',
        },

        // Add more rows as needed
    ];

    return (
        <>
             <div className='flex justify-between mb-8'>
   <div>
   <h1 className='text-[25px] font-bold '>Call History</h1>
   <p className='text-[#666777] text-sm my-2'>Monday, 29, April, 2024</p>
   </div>
        <ToggleSwitch />
     </div>
            <Table columns={columns} data={data} />
        </>
    );
};

export default CallHistory;
