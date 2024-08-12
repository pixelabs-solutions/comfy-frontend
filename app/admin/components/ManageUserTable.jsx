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
          <img
            className="h-8 w-8 rounded-md object-cover ltr:mr-3 rtl:ml-3"
            src={row.image}
            alt="product"
          />
          <p className="whitespace-nowrap">
            {row[column.key]}
            <span className="block text-xs text-primary">{row.category}</span>
          </p>
        </div>
      );
    }
    if (column.key === 'source') {
      return (
        <button type="button" className="flex items-center text-danger">
          {/* Replace with your icon component */}
          Direct
        </button>
      );
    }
    return row[column.key];
  };

  return (
    <table className='border rounded-lg'>
      <thead>
        <tr className="border-b-0">
          <th>
            <input
              type="checkbox"
              onChange={handleSelectAll}
              checked={selectedRows.length === data.length}
            />
          </th>
          {columns.map((column, index) => (
            <th
              key={index}
              className={`${index === 0 ? 'ltr:rounded-l-md rtl:rounded-r-md' : ''} ${
                index === columns.length - 1 ? 'ltr:rounded-r-md rtl:rounded-l-md' : ''
              }`}
            >
              {column.label}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr
            key={rowIndex}
            className="group text-white-dark hover:text-black dark:hover:text-white-light/90"
          >
            <td>
              <input
                type="checkbox"
                checked={selectedRows.includes(rowIndex)}
                onChange={() => handleSelectRow(rowIndex)}
              />
            </td>
            {columns.map((column, colIndex) => (
              <td
                key={colIndex}
                className={`${column.className} ${colIndex === 0 ? 'min-w-[150px]' : ''} text-black dark:text-white`}
              >
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
