import React from 'react';
import StatCard from './StatCard';

const StatisticsSection = ({ apidata ,timeRange}) => {
  // Fallback values if apidata properties are undefined
  const newCalls = apidata?.newCalls || { count: 0, percentageChange: 0 };
  const newInterpreters = apidata?.newInterpreters || { count: 0, percentageChange: 0 };
  const newClients = apidata?.newClients || { count: 0, percentageChange: 0 };

  const statisticsData = [
    { 
      id: 0,
      title: "New calls",
      value: newCalls.count.toString(),
      percentage: `${newCalls.percentageChange.toFixed(2)}%`,
      trend: newCalls.percentageChange >= 0 ? "up" : "down",
      comparisonText: `${'vs' + " " +timeRange}`
    },
    {
      id: 1,
      title: "New Interpreters",
      value: newInterpreters.count.toString(),
      percentage: `${newInterpreters.percentageChange.toFixed(2)}%`,
      trend: newInterpreters.percentageChange >= 0 ? "up" : "down",
      comparisonText: `${'vs' + " " +timeRange}`
    },
    {
      id: 2,
      title: "New Clients",
      value: newClients.count.toString(),
      percentage: `${newClients.percentageChange.toFixed(2)}%`,
      trend: newClients.percentageChange >= 0 ? "up" : "down",
      comparisonText: `${'vs' + " " +timeRange}`
    }
  ];

  return (
    <section className="flex flex-col rounded-none justify-center">
      <div className="flex border mt-8 rounded-xl max-lg:flex-col">
        {statisticsData.map((stat, index) => (
          <div key={index} className="flex flex-col w-[33%] max-lg:ml-0 max-lg:w-full">
            {index > 0 && (
              <div className="shrink-0 w-px border-solid border-neutral-300" />
            )}
            <div className="flex grow gap-5 justify-between font-semibold ">
              <StatCard {...stat} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default StatisticsSection;
