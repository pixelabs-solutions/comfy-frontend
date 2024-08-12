import React from 'react';
import StatCard from './StatCard';

const statisticsData = [
  {
    title: "New calls",
    value: "430",
    percentage: "+3.2%",
    trend: "up",
    comparisonText: "vs last week"
  },
  {
    title: "New Interpreters",
    value: "27",
    percentage: "+3.2%",
    trend: "down",
    comparisonText: "vs last week"
  },
  {
    title: "New Clients",
    value: "3250",
    percentage: "+30.2%",
    trend: "up",
    comparisonText: "vs last week"
  }
];

const StatisticsSection =()=> {
  return (
    <section className="flex flex-col rounded-none">
      <div className="px-9 py-px w-full rounded-2xl border border-solid border-neutral-300 max-md:px-5 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          {statisticsData.map((stat, index) => (
            <div key={index} className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
              {index > 0 && (
                <div className="shrink-0 w-px border border-solid border-neutral-300 h-[175px]" />
              )}
              <div className="flex grow gap-5 justify-between font-semibold max-md:mt-10">
                <StatCard {...stat} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default StatisticsSection;
