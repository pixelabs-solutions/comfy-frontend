'use client';
import React, { useEffect } from 'react';

function StatCard({ title, value, percentage, trend, comparisonText, id }) {
    useEffect(() => {
        return () => {
            console.log('isId :' + id);
        };
    }, []);

    return (
        <div className={` flex w-full flex-col items-start  self-stretch px-6 py-5 font-semibold ${id === 2 ? 'border-none' : 'border-b-2  lg:border-b-0 lg:border-r-2'}`}>
            <h3 className="text-lg font-bold text-gray-500">{title}</h3>
            <p className="mt-3 text-3xl font-bold text-gray-700">{value}</p>
            <div className="mt-2 flex flex-wrap gap-1.5 self-stretch text-lg font-medium">
                <div className={`flex flex-wrap items-center gap-1 ${trend === 'up' ? 'text-green-600' : 'text-red-500'} whitespace-nowrap`}>
                    {trend === "up" ? (
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <mask id="mask0_112_575" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                            <rect width="24" height="24" fill="#D9D9D9" />
                        </mask>
                        <g mask="url(#mask0_112_575)">
                            <path d="M6.4 18L5 16.6L14.6 7H6V5H18V17H16V8.4L6.4 18Z" fill="#34A853" />
                        </g>
                    </svg>

                    ) :(
                        <svg width="10" height="10" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.4 0L0 1.4L9.6 11H1V13H13V1H11V9.6L1.4 0Z" fill="#EB4335"/>
</svg>

                    )}
                    <span>{percentage}</span>
                </div>
                <div className="shrink grow text-gray-500 ">{comparisonText}</div>
            </div>
        </div>
    );
}

export default StatCard;
