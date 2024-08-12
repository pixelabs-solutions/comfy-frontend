import React from 'react';
import StatCard from './StatCard';

const statisticsData = [
  {
    id:0,
    title: "New calls",
    value: "430",
    percentage: "+3.2%",
    trend: "up",
    comparisonText: "vs last week"
  },
  {
    id:1,
    title: "New Interpreters",
    value: "27",
    percentage: "+3.2%",
    trend: "down",
    comparisonText: "vs last week"
  },
  {
    id:2,
    title: "New Clients",
    value: "3250",
    percentage: "+30.2%",
    trend: "up",
    comparisonText: "vs last week"
  }
];

const StatisticsSection =()=> {
  return (
    <section className="flex flex-col rounded-none justify-center">
      <div className="flex border  mt-8  rounded-xl  max-md:flex-col">
          {statisticsData.map((stat, index) => (
            <div key={index} className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
              {index > 0 && (
                <div className="shrink-0 w-px border-solid border-neutral-300" />
              )}
              <div className="flex grow gap-5 justify-between font-semibold max-md:mt-10">
                <StatCard {...stat} />
              </div>
            </div>
          ))}
        </div>
    </section>
  );
}

export default StatisticsSection;
