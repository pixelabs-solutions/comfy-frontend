'use client';
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
                <div className={`${column.key === "rejected" ? "flex gap-2 justify-center":""}`}>
                     {column.key === 'rejected' &&  <button type="button" className="flex items-center gap-1 rounded-full  px-3 py-[1px] border-[#37384d] border">
                        <div className="h-2 w-2 rounded-full border-[2px] border-[#37384d]"></div>
                        {row.rejected}
                    </button>}
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
    );
};

export default Table;
