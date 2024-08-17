import { BiSearchAlt2 } from 'react-icons/bi';
import React from 'react';
import { BsDownload } from 'react-icons/bs';
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
        <div className='p-4 md:p-[45px]  '>
            <h1 className="text-[30px] font-bold ">Call History</h1>
            <p className="my-2 text-sm text-[#666777]">Monday, 29, April, 2024</p>
            <Table columns={columns} data={data} />
        </div>
    );
};

export default CallHistory;
