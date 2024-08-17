'use client';
import React, { useEffect } from 'react';

function StatCard({ title, value, percentage, trend, comparisonText, id }) {
    useEffect(() => {
        return () => {
            console.log('isId :' + id);
        };
    }, []);

    return (
        <div className={` flex w-full flex-col items-start  self-stretch px-6 py-4 font-semibold ${id === 2 ? 'border-none' : 'border-b-2  lg:border-b-0 lg:border-r-2'}`}>
            <h3 className="text-lg font-bold text-gray-500">{title}</h3>
            <p className="mt-3 text-3xl font-bold text-gray-700">{value}</p>
            <div className="mt-2 flex gap-1.5 self-stretch text-lg font-medium">
                <div className={`flex gap-1 ${trend === 'up' ? 'text-green-600' : 'text-red-500'} whitespace-nowrap`}>
                    {/* <img loading="lazy" src={`http://b.io/ext_${trend === 'up' ? '1' : '2'}-`} className="object-contain shrink-0 w-6 aspect-square" alt={trend === 'up' ? 'Upward trend' : 'Downward trend'} /> */}
                    <span>{percentage}</span>
                </div>
                <div className="shrink grow text-gray-500 ">{comparisonText}</div>
            </div>
        </div>
    );
}

export default StatCard;
