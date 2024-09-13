'use client';
import { IoVideocam } from 'react-icons/io';
import React, { useState } from 'react';

const Table = ({ columns, data }) => {
    const [selectedRows, setSelectedRows] = useState([]);

    const handleSelectAll = (e) => {
        if (e.target.checked) {
            setSelectedRows(data.map((_, index) => index)); // Select all rows
        } else {
            setSelectedRows([]); // Deselect all rows
        }
    };

    const handleSelectRow = (index) => {
        if (selectedRows.includes(index)) {
            setSelectedRows(selectedRows.filter((i) => i !== index));
        } else {
            setSelectedRows([...selectedRows, index]);
        }
    };

    const renderCell = (column, row) => {
        if (column.key === 'product') {
            return (
                <div className="flex">
                    <img className="h-8 w-8 rounded-md object-cover ltr:mr-3 rtl:ml-3" src={row.image} alt="product" />
                    <p className="whitespace-nowrap">
                        {row[column.key]}
                        <span className="block text-xs text-gray-800">{row.category}</span>
                    </p>
                </div>
            );
        }
        if (column.key === 'icon') {
            return (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M2 11.5C2 8.21252 2 6.56878 2.90796 5.46243C3.07418 5.25989 3.25989 5.07418 3.46243 4.90796C4.56878 4 6.21252 4 9.5 4C12.7875 4 14.4312 4 15.5376 4.90796C15.7401 5.07418 15.9258 5.25989 16.092 5.46243C17 6.56878 17 8.21252 17 11.5V12.5C17 15.7875 17 17.4312 16.092 18.5376C15.9258 18.7401 15.7401 18.9258 15.5376 19.092C14.4312 20 12.7875 20 9.5 20C6.21252 20 4.56878 20 3.46243 19.092C3.25989 18.9258 3.07418 18.7401 2.90796 18.5376C2 17.4312 2 15.7875 2 12.5V11.5Z"
                        stroke="#666777"
                        stroke-width="1.5"
                    />
                    <path
                        d="M17 9.50019L17.6584 9.17101C19.6042 8.19807 20.5772 7.7116 21.2886 8.15127C22 8.59094 22 9.67872 22 11.8543V12.1461C22 14.3217 22 15.4094 21.2886 15.8491C20.5772 16.2888 19.6042 15.8023 17.6584 14.8294L17 14.5002V9.50019Z"
                        stroke="#666777"
                        stroke-width="1.5"
                    />
                </svg>
            );
        }
        if (column.key === 'Client') {
            return (
                <div className="flex items-center">
                    <img className="h-8 w-8 rounded-md object-cover ltr:mr-3 rtl:ml-3" src={row.image} alt="product" />
                    <p className="whitespace-nowrap">{row[column.key]}</p>
                </div>
            );
        }
        if (column.key === 'IntClient') {
            return (
                <div className="flex items-center">
                    <img className="h-8 w-8 rounded-md object-cover ltr:mr-3 rtl:ml-3" src={row.image} alt="product" />
                    <p className="whitespace-nowrap">{row[column.key]}</p>
                </div>
            );
        }
        if (column.key === 'price') {
            return (
                <div className={`${column.key === 'rejected' ? 'flex justify-center gap-2' : ''}`}>
                    {column.key === 'rejected' && (
                        <button type="button" className="flex items-center gap-1 rounded-full  border border-[#37384d] px-3 py-[1px]">
                            <div className="h-2 w-2 rounded-full border-[2px] border-[#37384d]"></div>
                            {row.rejected}
                        </button>
                    )}
                    <button type="button" className="flex items-center gap-1 rounded-full bg-[#37384d] px-3 py-[1px] text-white">
                        <div className="h-2 w-2 rounded-full border-[2px]"></div>
                        {row[column.key]}
                    </button>
                </div>
            );
        }
        if (column.key === 'edit') {
            return (
                <div className="flex justify-end ">
                    <img src={row[column.key]} alt="edit" width={20} />
                </div>
            );
        }

        return row[column.key];
    };

    return (
        <div className='overflow-x-auto text-nowrap'>
            <table className="overflow-hidden rounded-md">
            <thead className="text-md  rounded-md border text-gray-600">
                <tr>
                    <th className="bg-white">
                        <input type="checkbox" onChange={handleSelectAll} className="scale-125 " checked={selectedRows.length === data.length} />
                    </th>

                    {columns.map((column, index) => (
                        <th key={index} className={`bg-white ${index === 0 ? 'ltr:rounded-l-md rtl:rounded-r-md' : ''} ${index === columns.length - 1 ? 'ltr:rounded-r-md rtl:rounded-l-md' : ''}`}>
                            {column.label}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody className="rounded-md border">
                {data.map((row, rowIndex) => (
                    <tr key={rowIndex} className="group border  text-white-dark hover:text-black dark:hover:text-white-light/90">
                        <td className="bg-transparent ">
                            <input type="checkbox" className="scale-125" checked={selectedRows.includes(rowIndex)} onChange={() => handleSelectRow(rowIndex)} />
                        </td>
                        {columns.map((column, colIndex) => (
                            <td key={colIndex} className={`bg-transparent ${column.className} ${colIndex === 0 ? 'min-w-[150px]' : ''} text-black dark:text-white`}>
                                {renderCell(column, row)}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
        </div>
    );
};

export default Table;
