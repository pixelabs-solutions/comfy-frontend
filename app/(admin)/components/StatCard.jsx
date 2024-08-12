import React from 'react';

function StatCard({ title, value, percentage, trend, comparisonText }) {
  return (
    <div className="flex flex-col items-start self-stretch my-auto w-full font-semibold">
      <h3 className="text-2xl text-gray-500">{title}</h3>
      <p className="mt-5 text-5xl text-gray-700">{value}</p>
      <div className="flex gap-1.5 self-stretch mt-2 text-xl font-medium">
        <div className={`flex gap-1 ${trend === 'up' ? 'text-green-600' : 'text-red-500'} whitespace-nowrap`}>
          <img loading="lazy" src={`http://b.io/ext_${trend === 'up' ? '1' : '2'}-`} className="object-contain shrink-0 w-6 aspect-square" alt={trend === 'up' ? 'Upward trend' : 'Downward trend'} />
          <span>{percentage}</span>
        </div>
        <div className="grow shrink text-gray-500 w-[100px]">{comparisonText}</div>
      </div>
    </div>
  );
}

export default StatCard;