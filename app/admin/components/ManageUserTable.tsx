// 'use client';
// import React, { useState } from 'react';
// import { BsDownload } from 'react-icons/bs';
// import { CSVLink } from 'react-csv';

// const Table = ({ columns, data }: any) => {
//     const [selectedRows, setSelectedRows] = useState<number[]>([]);

//     const handleSelectAll = (e: React.ChangeEvent<HTMLInputElement>) => {
//         if (e.target.checked) {
//             setSelectedRows(data.map((_: any, index: any) => index)); // Select all rows
//         } else {
//             setSelectedRows([]); // Deselect all rows
//         }
//     };

//     const handleSelectRow = (index: number) => {
//         if (selectedRows.includes(index)) {
//             setSelectedRows(selectedRows.filter((i) => i !== index));
//         } else {
//             setSelectedRows([...selectedRows, index]);
//         }
//     };

//     const renderCell = (column: any, row: any) => {
//         if (column.key === 'product') {
//             return (
//                 <div className="flex items-center">
//                     <img className="mr-3 h-8 w-8 rounded-md object-cover" src={row.image || '/path/to/default-image.png'} alt="product" />
//                     <p className="whitespace-nowrap">
//                         {row[column.key]}
//                         <span className="block text-xs text-gray-800">{row.category}</span>
//                     </p>
//                 </div>
//             );
//         }
//         if (column.key === 'icon') {
//             return (
//                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                     <path
//                         d="M2 11.5C2 8.21252 2 6.56878 2.90796 5.46243C3.07418 5.25989 3.25989 5.07418 3.46243 4.90796C4.56878 4 6.21252 4 9.5 4C12.7875 4 14.4312 4 15.5376 4.90796C15.7401 5.07418 15.9258 5.25989 16.092 5.46243C17 6.56878 17 8.21252 17 11.5V12.5C17 15.7875 17 17.4312 16.092 18.5376C15.9258 18.7401 15.7401 18.9258 15.5376 19.092C14.4312 20 12.7875 20 9.5 20C6.21252 20 4.56878 20 3.46243 19.092C3.25989 18.9258 3.07418 18.7401 2.90796 18.5376C2 17.4312 2 15.7875 2 12.5V11.5Z"
//                         stroke="#666777"
//                         strokeWidth="1.5"
//                     />
//                     <path
//                         d="M17 9.50019L17.6584 9.17101C19.6042 8.19807 20.5772 7.7116 21.2886 8.15127C22 8.59094 22 9.67872 22 11.8543V12.1461C22 14.3217 22 15.4094 21.2886 15.8491C20.5772 16.2888 19.6042 15.8023 17.6584 14.8294L17 14.5002V9.50019Z"
//                         stroke="#666777"
//                         strokeWidth="1.5"
//                     />
//                 </svg>
//             );
//         }
//         if (column.key === 'Client' || column.key === 'IntClient') {
//             return (
//                 <div className="flex items-center">
//                 <img
//                     className="mr-3 h-8 w-8 rounded-md object-cover"
//                     src={column.key === 'Client' ? row.image : row.IntImage} 
//                     alt="profile"
//                 />
//                 <p className="whitespace-nowrap">{row[column.key]}</p>
//             </div>
//             );
//         }
//         if (column.key === 'price') {
//             return (
//                 <div className={`${column.key === 'rejected' ? 'flex justify-end gap-2' : ''}`}>
//                     {column.key === 'rejected' && (
//                         <button type="button" className="flex items-center gap-1 rounded-full border border-[#37384d] px-3 py-[1px]">
//                             <div className="h-2 w-2 rounded-full border-[2px] border-[#37384d]"></div>
//                             {row.rejected}
//                         </button>
//                     )}
//                     <button type="button" className="flex items-center gap-1 rounded-full bg-[#37384d] px-3 py-[1px] text-white">
//                         <div className="h-2 w-2 rounded-full border-[2px]"></div>
//                         {row[column.key]}
//                     </button>
//                 </div>
//             );
//         }
//         if (column.key === 'edit') {
//             return (
//                 <div className="flex">
//                     <CSVLink data={data} className="flex items-center gap-2  px-2 py-1">
//                         <img src={row[column.key]} alt="edit" width={20} />
//                     </CSVLink>
//                 </div>
//             );
//         }
//         if (column.key === 'status') {
//             return (
//                 <div className="flex justify-start gap-2">
//                     {row.status === 'active' || row.status === 'cleared' ? (
//                         <button type="button" className="flex items-center gap-1 rounded-full bg-[#37384d] px-3 py-[1px] text-white">
//                             <svg width="15" height="15" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                 <path
//                                     d="M6.80866 16.8125L5.30449 14.2792L2.45449 13.6458L2.73158 10.7167L0.791992 8.5L2.73158 6.28333L2.45449 3.35417L5.30449 2.72083L6.80866 0.1875L9.50033 1.33542L12.192 0.1875L13.6962 2.72083L16.5462 3.35417L16.2691 6.28333L18.2087 8.5L16.2691 10.7167L16.5462 13.6458L13.6962 14.2792L12.192 16.8125L9.50033 15.6646L6.80866 16.8125ZM7.48158 14.7938L9.50033 13.9229L11.5587 14.7938L12.667 12.8938L14.8441 12.3792L14.6462 10.1625L16.1107 8.5L14.6462 6.79792L14.8441 4.58125L12.667 4.10625L11.5191 2.20625L9.50033 3.07708L7.44199 2.20625L6.33366 4.10625L4.15658 4.58125L4.35449 6.79792L2.88991 8.5L4.35449 10.1625L4.15658 12.4187L6.33366 12.8938L7.48158 14.7938ZM8.66908 11.3104L13.142 6.8375L12.0337 5.68958L8.66908 9.05417L6.96699 7.39167L5.85866 8.5L8.66908 11.3104Z"
//                                     fill="white"
//                                 />
//                             </svg>
//                             {row.status}
//                         </button>
//                     ) : (
//                         <button type="button" className="flex items-center gap-1 rounded-full border border-[#37384d] px-4 py-[1px]">
//                             <div className="h-2 w-2 rounded-full border-[2px] border-[#37384d]"></div>
//                             {row.status}
//                         </button>
//                     )}
//                 </div>
//             );
//         }
//         if (column.key === 'statusBilling') {
//             return (
//                 <div className="flex justify-start gap-2">
//                     {row.statusBilling === 'cleared' ? (
//                         <button type="button" className="flex items-center gap-1 rounded-full bg-[#37384d] px-3 py-[1px] text-white">
//                             <svg width="15" height="15" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                 <path
//                                     d="M6.80866 16.8125L5.30449 14.2792L2.45449 13.6458L2.73158 10.7167L0.791992 8.5L2.73158 6.28333L2.45449 3.35417L5.30449 2.72083L6.80866 0.1875L9.50033 1.33542L12.192 0.1875L13.6962 2.72083L16.5462 3.35417L16.2691 6.28333L18.2087 8.5L16.2691 10.7167L16.5462 13.6458L13.6962 14.2792L12.192 16.8125L9.50033 15.6646L6.80866 16.8125ZM7.48158 14.7938L9.50033 13.9229L11.5587 14.7938L12.667 12.8938L14.8441 12.3792L14.6462 10.1625L16.1107 8.5L14.6462 6.79792L14.8441 4.58125L12.667 4.10625L11.5191 2.20625L9.50033 3.07708L7.44199 2.20625L6.33366 4.10625L4.15658 4.58125L4.35449 6.79792L2.88991 8.5L4.35449 10.1625L4.15658 12.4187L6.33366 12.8938L7.48158 14.7938ZM8.66908 11.3104L13.142 6.8375L12.0337 5.68958L8.66908 9.05417L6.96699 7.39167L5.85866 8.5L8.66908 11.3104Z"
//                                     fill="white"
//                                 />
//                             </svg>
//                             {row.statusBilling}
//                         </button>
//                     ) : (
//                         <button type="button" className="flex items-center gap-1 rounded-full border border-[#37384d] px-4 py-[1px]">
//                             <div className="h-2 w-2 rounded-full border-[2px] border-[#37384d]"></div>
//                             {row.statusBilling}
//                         </button>
//                     )}
//                 </div>
//             );
//         }
//         if (column.key === 'statusBilling') {
//             return (
//                 <div className="flex justify-start gap-2">
//                     {row.statusBilling === 'cleared' ? (
//                         <button type="button" className="flex items-center gap-1 rounded-full bg-[#37384d] px-3 py-[1px] text-white">
//                             <svg width="15" height="15" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                 <path
//                                     d="M6.80866 16.8125L5.30449 14.2792L2.45449 13.6458L2.73158 10.7167L0.791992 8.5L2.73158 6.28333L2.45449 3.35417L5.30449 2.72083L6.80866 0.1875L9.50033 1.33542L12.192 0.1875L13.6962 2.72083L16.5462 3.35417L16.2691 6.28333L18.2087 8.5L16.2691 10.7167L16.5462 13.6458L13.6962 14.2792L12.192 16.8125L9.50033 15.6646L6.80866 16.8125ZM7.48158 14.7938L9.50033 13.9229L11.5587 14.7938L12.667 12.8938L14.8441 12.3792L14.6462 10.1625L16.1107 8.5L14.6462 6.79792L14.8441 4.58125L12.667 4.10625L11.5191 2.20625L9.50033 3.07708L7.44199 2.20625L6.33366 4.10625L4.15658 4.58125L4.35449 6.79792L2.88991 8.5L4.35449 10.1625L4.15658 12.4187L6.33366 12.8938L7.48158 14.7938ZM8.66908 11.3104L13.142 6.8375L12.0337 5.68958L8.66908 9.05417L6.96699 7.39167L5.85866 8.5L8.66908 11.3104Z"
//                                     fill="white"
//                                 />
//                             </svg>
//                             {row.statusBilling}
//                         </button>
//                     ) : (
//                         <button type="button" className="flex items-center gap-1 rounded-full border border-[#37384d] px-4 py-[1px]">
//                             <div className="h-2 w-2 rounded-full border-[2px] border-[#37384d]"></div>
//                             {row.statusBilling}
//                         </button>
//                     )}
//                 </div>
//             );
//         }
//         if (column.key === 'statusMangeUser') {
//             return (
//                 <div className="flex justify-start gap-2">
//                     {row.statusMangeUser === 'active' ? (
//                         <button type="button" className="flex items-center gap-1 rounded-full bg-[#37384d] px-5 py-[1px] text-white">
//                             <div className="h-2 w-2 rounded-full border-[2px] border-[white]"></div>
//                             {row.statusMangeUser}
//                         </button>
//                     ) : (
//                         <button type="button" className="flex items-center gap-1 rounded-full border border-[#37384d] px-4 py-[1px]">
//                             <div className="h-2 w-2 rounded-full border-[2px] border-[#37384d]"></div>
//                             {row.statusMangeUser}
//                         </button>
//                     )}
//                 </div>
//             );
//         }
//         if (column.key === 'statuspendinguser') {
//             return (
//                 <div className="flex justify-center gap-2">
//                 <button type="button" className="flex items-center gap-1 rounded-full border border-[#37384d] px-4 py-[1px]">
//                     <div className="h-2 w-2 rounded-full border-[2px] border-[#37384d]"></div>
//                     {row.statuspendinguser[1]}
//                 </button>
//                 <button type="button" className="flex items-center gap-1 rounded-full bg-[#37384d] px-3 py-[1px] text-white">
//                     <svg width="15" height="15" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path
//                             d="M6.80866 16.8125L5.30449 14.2792L2.45449 13.6458L2.73158 10.7167L0.791992 8.5L2.73158 6.28333L2.45449 3.35417L5.30449 2.72083L6.80866 0.1875L9.50033 1.33542L12.192 0.1875L13.6962 2.72083L16.5462 3.35417L16.2691 6.28333L18.2087 8.5L16.2691 10.7167L16.5462 13.6458L13.6962 14.2792L12.192 16.8125L9.50033 15.6646L6.80866 16.8125ZM7.48158 14.7938L9.50033 13.9229L11.5587 14.7938L12.667 12.8938L14.8441 12.3792L14.6462 10.1625L16.1107 8.5L14.6462 6.79792L14.8441 4.58125L12.667 4.10625L11.5191 2.20625L9.50033 3.07708L7.44199 2.20625L6.33366 4.10625L4.15658 4.58125L4.35449 6.79792L2.88991 8.5L4.35449 10.1625L4.15658 12.4187L6.33366 12.8938L7.48158 14.7938ZM8.66908 11.3104L13.142 6.8375L12.0337 5.68958L8.66908 9.05417L6.96699 7.39167L5.85866 8.5L8.66908 11.3104Z"
//                             fill="white"
//                         />
//                     </svg>
//                     {row.statuspendinguser[0]}
//                 </button>
//             </div>
//             );
//         }
      
//         return row[column.key];
//     };

//     return (
//         <div className="overflow-x-auto text-nowrap">
//             <table className="Table_Uses_All w-full overflow-hidden rounded-lg">
//                 <thead className="text-md rounded-lg border text-gray-600">
//                     <tr className="rounded-lg ">
//                         <th className="bg-white">
//                             <input type="checkbox" onChange={handleSelectAll} className="scale-125" checked={selectedRows.length === data.length} />
//                         </th>

//                         {columns.map((column: any, index: any) => (
//                             <th key={index} className={`bg-white ${index === 0 ? 'rounded-l-md' : ''} ${index === columns.length - 1 ? 'rounded-r-md' : ''}`}>
//                                 {column.label}
//                             </th>
//                         ))}
//                     </tr>
//                 </thead>
//                 <tbody className="rounded-lg border">
//                     {data.map((row: any, rowIndex: any) => (
//                         <tr key={rowIndex} className="group border text-white-dark hover:text-black">
//                             <td className="bg-transparent">
//                                 <input type="checkbox" className="scale-125" checked={selectedRows.includes(rowIndex)} onChange={() => handleSelectRow(rowIndex)} />
//                             </td>
//                             {columns.map((column: any, colIndex: any) => (
//                                 <td key={colIndex} className={`bg-transparent ${column.className} ${colIndex === 0 ? 'min-w-[150px]' : ''} text-black`}>
//                                     {renderCell(column, row)}
//                                 </td>
//                             ))}
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// };

// export default Table;
// 'use client';
// import React, { useState } from 'react';
// import { BsDownload } from 'react-icons/bs';
// import { CSVLink } from 'react-csv';

// const Table = ({ columns, data }: any) => {
//     const [selectedRows, setSelectedRows] = useState<number[]>([]);

//     const handleSelectAll = (e: React.ChangeEvent<HTMLInputElement>) => {
//         if (e.target.checked) {
//             setSelectedRows(data.map((_: any, index: any) => index)); // Select all rows
//         } else {
//             setSelectedRows([]); // Deselect all rows
//         }
//     };

//     const handleSelectRow = (index: number) => {
//         setSelectedRows((prev) => 
//             prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
//         );
//     };

//     const renderCell = (column: any, row: any) => {
//         switch (column.key) {
//             case 'product':
//                 return (
//                     <div className="flex items-center">
//                         <img className="mr-3 h-8 w-8 rounded-md object-cover" src={row.image || '/path/to/default-image.png'} alt="product" />
//                         <p className="whitespace-nowrap">
//                             {row[column.key]}
//                             <span className="block text-xs text-gray-800">{row.category}</span>
//                         </p>
//                     </div>
//                 );
//             case 'icon':
//                 return (
//                     <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path
//                             d="M2 11.5C2 8.21252 2 6.56878 2.90796 5.46243C3.07418 5.25989 3.25989 5.07418 3.46243 4.90796C4.56878 4 6.21252 4 9.5 4C12.7875 4 14.4312 4 15.5376 4.90796C15.7401 5.07418 15.9258 5.25989 16.092 5.46243C17 6.56878 17 8.21252 17 11.5V12.5C17 15.7875 17 17.4312 16.092 18.5376C15.9258 18.7401 15.7401 18.9258 15.5376 19.092C14.4312 20 12.7875 20 9.5 20C6.21252 20 4.56878 20 3.46243 19.092C3.25989 18.9258 3.07418 18.7401 2.90796 18.5376C2 17.4312 2 15.7875 2 12.5V11.5Z"
//                             stroke="#666777"
//                             strokeWidth="1.5"
//                         />
//                         <path
//                             d="M17 9.50019L17.6584 9.17101C19.6042 8.19807 20.5772 7.7116 21.2886 8.15127C22 8.59094 22 9.67872 22 11.8543V12.1461C22 14.3217 22 15.4094 21.2886 15.8491C20.5772 16.2888 19.6042 15.8023 17.6584 14.8294L17 14.5002V9.50019Z"
//                             stroke="#666777"
//                             strokeWidth="1.5"
//                         />
//                     </svg>
//                 );
//             case 'Client':
//             case 'IntClient':
//                 return (
//                     <div className="flex items-center">
//                         <img className="mr-3 h-8 w-8 rounded-md object-cover" src={column.key === 'Client' ? row.image : row.IntImage} alt="profile" />
//                         <p className="whitespace-nowrap">{row[column.key]}</p>
//                     </div>
//                 );
//             case 'price':
//                 return (
//                     <div className="flex justify-end gap-2">
//                         {row.rejected && (
//                             <button type="button" className="flex items-center gap-1 rounded-full border border-[#37384d] px-3 py-[1px]">
//                                 <div className="h-2 w-2 rounded-full border-[2px] border-[#37384d]"></div>
//                                 {row.rejected}
//                             </button>
//                         )}
//                         <button type="button" className="flex items-center gap-1 rounded-full bg-[#37384d] px-3 py-[1px] text-white">
//                             <div className="h-2 w-2 rounded-full border-[2px]"></div>
//                             {row[column.key]}
//                         </button>
//                     </div>
//                 );
//             case 'edit':
//                 return (
//                     <div className="flex">
//                         <CSVLink data={data} className="flex items-center gap-2 px-2 py-1">
//                             <img src={row[column.key]} alt="edit" width={20} />
//                         </CSVLink>
//                     </div>
//                 );
//             case 'status':
//             case 'statusBilling':
//                 const isCleared = row.status === 'active' || row.status === 'cleared' || row.statusBilling === 'cleared';
//                 return (
//                     <div className="flex justify-start gap-2">
//                         <button type="button" className={`flex items-center gap-1 rounded-full px-3 py-[1px] ${isCleared ? 'bg-[#37384d] text-white' : 'border border-[#37384d]'}`}>
//                             <div className={`h-2 w-2 rounded-full ${isCleared ? 'bg-white' : 'border-[2px] border-[#37384d]'}`}></div>
//                             {row.status || row.statusBilling}
//                         </button>
//                     </div>
//                 );
//             default:
//                 return <p>{row[column.key]}</p>;
//         }
//     };

//     return (
//         <div className="overflow-x-auto">
//             <table className="min-w-full table-auto border-collapse">
//                 <thead>
//                     <tr>
//                         <th>
//                             <input type="checkbox" onChange={handleSelectAll} />
//                         </th>
//                         {columns.map((column: any, index: number) => (
//                             <th key={index} className="px-4 py-2 text-left">{column.label}</th>
//                         ))}
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {data.map((row: any, rowIndex: number) => (
//                         <tr key={rowIndex} className={selectedRows.includes(rowIndex) ? 'bg-gray-100' : ''}>
//                             <td>
//                                 <input
//                                     type="checkbox"
//                                     checked={selectedRows.includes(rowIndex)}
//                                     onChange={() => handleSelectRow(rowIndex)}
//                                 />
//                             </td>
//                             {columns.map((column: any, colIndex: number) => (
//                                 <td key={colIndex} className="px-4 py-2">{renderCell(column, row)}</td>
//                             ))}
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// };

// export default Table;
'use client';
import { useUpdateInterpreterMutation } from '@/store/query/patchapis';
import React, { useState } from 'react';
import { CSVLink } from 'react-csv';
interface Column {
    key: string;
    label: string;
    render?: (row: any) => React.ReactNode;
}

interface TableProps {
    columns: Column[];
    data: any[];
    onSelectedDataChange: (selectedData: any[]) => void; // Callback to return selected data
}

const Table: React.FC<TableProps> = ({ columns, data, onSelectedDataChange }) => {
    const [selectedRows, setSelectedRows] = useState<number[]>([]);
    const [updateInterpreter] = useUpdateInterpreterMutation();
    // Toggle row selection when checkbox is clicked
    const handleCheckboxChange = (index: number) => {
        const newSelectedRows = selectedRows.includes(index)
            ? selectedRows.filter(i => i !== index)
            : [...selectedRows, index];

        setSelectedRows(newSelectedRows);

        // Trigger callback to send selected data back
        const selectedData = data.filter((_, i) => newSelectedRows.includes(i));
        onSelectedDataChange(selectedData);
    };
    const handleStatusChange = async (id :string , status:string) => {
        // e.preventDefault();
        try {
            const response = await updateInterpreter({ id: id, data: {status :status} }).unwrap();
            console.log('Interpreter updated successfully:', response);
            // Optionally, handle successful update (e.g., show a notification, refresh data)
        } catch (error) {
            console.error('Failed to update interpreter:', error);
            // Optionally, handle error (e.g., show error message)
        }
    };
    const renderCell = (column: any, row: any) => {
        if (column.key === 'product') {
            return (
                <div className="flex items-center">
                    <img className="mr-3 h-8 w-8 rounded-md object-cover" src={row.image || '/path/to/default-image.png'} alt="product" />
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
                        strokeWidth="1.5"
                    />
                    <path
                        d="M17 9.50019L17.6584 9.17101C19.6042 8.19807 20.5772 7.7116 21.2886 8.15127C22 8.59094 22 9.67872 22 11.8543V12.1461C22 14.3217 22 15.4094 21.2886 15.8491C20.5772 16.2888 19.6042 15.8023 17.6584 14.8294L17 14.5002V9.50019Z"
                        stroke="#666777"
                        strokeWidth="1.5"
                    />
                </svg>
            );
        }
        if (column.key === 'Client' || column.key === 'IntClient') {
            return (
                <div className="flex items-center">
                <img
                    className="mr-3 h-8 w-8 rounded-md object-cover"
                    src={column.key === 'Client' ? row.image : row.IntImage} 
                    alt="profile"
                />
                <p className="whitespace-nowrap">{row[column.key]}</p>
            </div>
            );
        }
        if (column.key === 'price') {
            return (
                <div className={`${column.key === 'rejected' ? 'flex justify-end gap-2' : ''}`}>
                    {column.key === 'rejected' && (
                        <button type="button" className="flex items-center gap-1 rounded-full border border-[#37384d] px-3 py-[1px]">
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
                <div className="flex">
                    <CSVLink data={data} className="flex items-center gap-2  px-2 py-1">
                        <img src={row[column.key]} alt="edit" width={20} />
                    </CSVLink>
                </div>
            );
        }
        if (column.key === 'status') {
            return (
                <div className="flex justify-start gap-2">
                    {row.status === 'active' || row.status === 'cleared' ? (
                        <button type="button" className="flex items-center gap-1 rounded-full bg-[#37384d] px-3 py-[1px] text-white">
                            <svg width="15" height="15" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M6.80866 16.8125L5.30449 14.2792L2.45449 13.6458L2.73158 10.7167L0.791992 8.5L2.73158 6.28333L2.45449 3.35417L5.30449 2.72083L6.80866 0.1875L9.50033 1.33542L12.192 0.1875L13.6962 2.72083L16.5462 3.35417L16.2691 6.28333L18.2087 8.5L16.2691 10.7167L16.5462 13.6458L13.6962 14.2792L12.192 16.8125L9.50033 15.6646L6.80866 16.8125ZM7.48158 14.7938L9.50033 13.9229L11.5587 14.7938L12.667 12.8938L14.8441 12.3792L14.6462 10.1625L16.1107 8.5L14.6462 6.79792L14.8441 4.58125L12.667 4.10625L11.5191 2.20625L9.50033 3.07708L7.44199 2.20625L6.33366 4.10625L4.15658 4.58125L4.35449 6.79792L2.88991 8.5L4.35449 10.1625L4.15658 12.4187L6.33366 12.8938L7.48158 14.7938ZM8.66908 11.3104L13.142 6.8375L12.0337 5.68958L8.66908 9.05417L6.96699 7.39167L5.85866 8.5L8.66908 11.3104Z"
                                    fill="white"
                                />
                            </svg>
                            {row.status}
                        </button>
                    ) : (
                        <button type="button" className="flex items-center gap-1 rounded-full border border-[#37384d] px-4 py-[1px]">
                            <div className="h-2 w-2 rounded-full border-[2px] border-[#37384d]"></div>
                            {row.status}
                        </button>
                    )}
                </div>
            );
        }
        if (column.key === 'statusBilling') {
            return (
                <div className="flex justify-start gap-2">
                    {row.statusBilling === 'cleared' ? (
                        <button type="button" className="flex items-center gap-1 rounded-full bg-[#37384d] px-3 py-[1px] text-white">
                            <svg width="15" height="15" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M6.80866 16.8125L5.30449 14.2792L2.45449 13.6458L2.73158 10.7167L0.791992 8.5L2.73158 6.28333L2.45449 3.35417L5.30449 2.72083L6.80866 0.1875L9.50033 1.33542L12.192 0.1875L13.6962 2.72083L16.5462 3.35417L16.2691 6.28333L18.2087 8.5L16.2691 10.7167L16.5462 13.6458L13.6962 14.2792L12.192 16.8125L9.50033 15.6646L6.80866 16.8125ZM7.48158 14.7938L9.50033 13.9229L11.5587 14.7938L12.667 12.8938L14.8441 12.3792L14.6462 10.1625L16.1107 8.5L14.6462 6.79792L14.8441 4.58125L12.667 4.10625L11.5191 2.20625L9.50033 3.07708L7.44199 2.20625L6.33366 4.10625L4.15658 4.58125L4.35449 6.79792L2.88991 8.5L4.35449 10.1625L4.15658 12.4187L6.33366 12.8938L7.48158 14.7938ZM8.66908 11.3104L13.142 6.8375L12.0337 5.68958L8.66908 9.05417L6.96699 7.39167L5.85866 8.5L8.66908 11.3104Z"
                                    fill="white"
                                />
                            </svg>
                            {row.statusBilling}
                        </button>
                    ) : (
                        <button type="button" className="flex items-center gap-1 rounded-full border border-[#37384d] px-4 py-[1px]">
                            <div className="h-2 w-2 rounded-full border-[2px] border-[#37384d]"></div>
                            {row.statusBilling}
                        </button>
                    )}
                </div>
            );
        }
        if (column.key === 'statusBilling') {
            return (
                <div className="flex justify-start gap-2">
                    {row.statusBilling === 'cleared' ? (
                        <button type="button" className="flex items-center gap-1 rounded-full bg-[#37384d] px-3 py-[1px] text-white">
                            <svg width="15" height="15" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M6.80866 16.8125L5.30449 14.2792L2.45449 13.6458L2.73158 10.7167L0.791992 8.5L2.73158 6.28333L2.45449 3.35417L5.30449 2.72083L6.80866 0.1875L9.50033 1.33542L12.192 0.1875L13.6962 2.72083L16.5462 3.35417L16.2691 6.28333L18.2087 8.5L16.2691 10.7167L16.5462 13.6458L13.6962 14.2792L12.192 16.8125L9.50033 15.6646L6.80866 16.8125ZM7.48158 14.7938L9.50033 13.9229L11.5587 14.7938L12.667 12.8938L14.8441 12.3792L14.6462 10.1625L16.1107 8.5L14.6462 6.79792L14.8441 4.58125L12.667 4.10625L11.5191 2.20625L9.50033 3.07708L7.44199 2.20625L6.33366 4.10625L4.15658 4.58125L4.35449 6.79792L2.88991 8.5L4.35449 10.1625L4.15658 12.4187L6.33366 12.8938L7.48158 14.7938ZM8.66908 11.3104L13.142 6.8375L12.0337 5.68958L8.66908 9.05417L6.96699 7.39167L5.85866 8.5L8.66908 11.3104Z"
                                    fill="white"
                                />
                            </svg>
                            {row.statusBilling}
                        </button>
                    ) : (
                        <button type="button" className="flex items-center gap-1 rounded-full border border-[#37384d] px-4 py-[1px]">
                            <div className="h-2 w-2 rounded-full border-[2px] border-[#37384d]"></div>
                            {row.statusBilling}
                        </button>
                    )}
                </div>
            );
        }
        if (column.key === 'statusMangeUser') {
            return (
                <div className="flex justify-start gap-2">
                    {row.statusMangeUser === 'active' ? (
                        <button type="button" className="flex items-center gap-1 rounded-full bg-[#37384d] px-5 py-[1px] text-white">
                            <div className="h-2 w-2 rounded-full border-[2px] border-[white]"></div>
                            {row.statusMangeUser}
                        </button>
                    ) : (
                        <button type="button" className="flex items-center gap-1 rounded-full border border-[#37384d] px-4 py-[1px]">
                            <div className="h-2 w-2 rounded-full border-[2px] border-[#37384d]"></div>
                            {row.statusMangeUser}
                        </button>
                    )}
                </div>
            );
        }
  
        if (column.key === 'statuspendinguser') {
            return (
                <div className="flex justify-center gap-2">
                <button type="button" className="flex items-center gap-1 rounded-full border border-[#37384d] px-4 py-[1px]"  onClick={() => handleStatusChange(row.id , 'pending')}>
                    <div className="h-2 w-2 rounded-full border-[2px] border-[#37384d]"></div>
                    
                    {row.statuspendinguser[1]}
                </button>
                <button type="button" className="flex items-center gap-1 rounded-full bg-[#37384d] px-3 py-[1px] text-white"  onClick={() => handleStatusChange(row.id ,'cleared')}>
                    <svg width="15" height="15" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M6.80866 16.8125L5.30449 14.2792L2.45449 13.6458L2.73158 10.7167L0.791992 8.5L2.73158 6.28333L2.45449 3.35417L5.30449 2.72083L6.80866 0.1875L9.50033 1.33542L12.192 0.1875L13.6962 2.72083L16.5462 3.35417L16.2691 6.28333L18.2087 8.5L16.2691 10.7167L16.5462 13.6458L13.6962 14.2792L12.192 16.8125L9.50033 15.6646L6.80866 16.8125ZM7.48158 14.7938L9.50033 13.9229L11.5587 14.7938L12.667 12.8938L14.8441 12.3792L14.6462 10.1625L16.1107 8.5L14.6462 6.79792L14.8441 4.58125L12.667 4.10625L11.5191 2.20625L9.50033 3.07708L7.44199 2.20625L6.33366 4.10625L4.15658 4.58125L4.35449 6.79792L2.88991 8.5L4.35449 10.1625L4.15658 12.4187L6.33366 12.8938L7.48158 14.7938ZM8.66908 11.3104L13.142 6.8375L12.0337 5.68958L8.66908 9.05417L6.96699 7.39167L5.85866 8.5L8.66908 11.3104Z"
                            fill="white"
                        />
                    </svg>
                    {row.statuspendinguser[0]}
                </button>
            </div>
            );
        }
      
        return row[column.key];
    };
            const handleSelectAll = (e: React.ChangeEvent<HTMLInputElement>) => {
                if (e.target.checked) {
                    // Select all rows
                    const allSelectedRows = data.map((_, index) => index); // Select all row indices
                    setSelectedRows(allSelectedRows);
                    
                    // Send all data to the parent function
                    onSelectedDataChange(data); // Send all row data, not just indices
                } else {
                    // Deselect all rows
                    setSelectedRows([]);
                    
                    // Send an empty array (no selected data)
                    onSelectedDataChange([]);
                }
            };
            
    return (
        <div className="overflow-x-auto text-nowrap">
        <table className="Table_Uses_All w-full overflow-hidden rounded-lg">
        <thead className="text-md rounded-lg border text-gray-600">
               <tr className="rounded-lg ">
              {columns.some(col => col.key === 'NotShowCheckbox') ? (
                            ''
                        ):(
                            <th className="bg-white">
                                <input 
                                    type="checkbox" 
                                    className="scale-125" 
                                    onChange={handleSelectAll} 
                                    checked={selectedRows.length === data.length} 
                                />
                            </th>
                        )}

                    {columns.map((column: any, index: any) => (
                        <th key={index} className={`bg-white scale-125" ${index === 0 ? 'rounded-l-md' : ''} ${index === columns.length - 1 ? 'rounded-r-md' : ''} ${columns.some(col => col.key === 'NotShowCheckbox') ? "!pl-12" : "pl-auto"}`}>
                            {column.label}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody className="rounded-lg border">
                {data.map((row: any, rowIndex: any) => (
                    <tr key={rowIndex} className={`group border text-gray-600 `}>
                       
                       {columns.some(col => col.key === 'NotShowCheckbox') ? ''  :(
                          <td className="bg-transparent">
                          <input
                        type="checkbox"
                        checked={selectedRows.includes(rowIndex)}
                        onChange={() => handleCheckboxChange(rowIndex)}
                        className='scale-125'
                    />
                      </td>
                       )}
                        {/* {columns.map((column: any, colIndex: any) => (
                            <td key={colIndex} className={`bg-transparent ${column.className} ${colIndex === 0 ? 'min-w-[150px]' : ''} text-black`}>
                                {renderCell(column, row)}
                            </td>
                        ))} */}
                       {columns.map((column) => (
                           <td key={column.key} className={`px-4 py-3 border-b ${columns.some(col => col.key === 'NotShowCheckbox') ? "!pl-12" : "pl-auto"}`}>
                               {column.render ? column.render(row) : renderCell(column, row)}
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
    //   <div className="overflow-x-auto text-nowrap">
    //          <table className="Table_Uses_All w-full overflow-hidden rounded-lg">
    //          <thead className="text-md rounded-lg border text-gray-600">
    //                 <tr className="rounded-lg ">
    //                     <th className="bg-white">
    //                         <input type="checkbox" onChange={handleSelectAll} className="scale-125" checked={selectedRows.length === data.length} />
    //                      </th>

    //                      {columns.map((column: any, index: any) => (
    //                          <th key={index} className={`bg-white ${index === 0 ? 'rounded-l-md' : ''} ${index === columns.length - 1 ? 'rounded-r-md' : ''}`}>
    //                              {column.label}
    //                          </th>
    //                      ))}
    //                  </tr>
    //              </thead>
    //              <tbody className="rounded-lg border">
    //                  {data.map((row: any, rowIndex: any) => (
    //                      <tr key={rowIndex} className="group border text-white-dark hover:text-black">
    //                           <input
    //                                 type="checkbox"
    //                                 checked={selectedRows.includes(rowIndex)}
    //                                 onChange={() => handleCheckboxChange(rowIndex)}
    //                             />
    //                          {/* {columns.map((column: any, colIndex: any) => (
    //                              <td key={colIndex} className={`bg-transparent ${column.className} ${colIndex === 0 ? 'min-w-[150px]' : ''} text-black`}>
    //                                  {renderCell(column, row)}
    //                              </td>
    //                          ))} */}
    //                         {columns.map((column) => (
    //                             <td key={column.key} className="px-4 py-2 border-b">
    //                                 {column.render ? column.render(row) : renderCell(column, row)}
    //                             </td>
    //                         ))}
    //                      </tr>
    //                  ))}
    //              </tbody>
    //          </table>
    //      </div>