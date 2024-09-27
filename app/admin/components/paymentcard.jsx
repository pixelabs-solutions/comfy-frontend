import React from 'react';
import StatCard from './StatCard';

const PaymentCard = ({ Paymentdata, period }) => {
  // Check if Paymentdata is defined
  if (!Paymentdata) {
    return <div>Loading...</div>; // or any placeholder you prefer
  }

  // Prepare payment data
  const paymentData = [
    {
      id: 0,
      title: "Payment after deduction",
      value: `$${Paymentdata.paymentAfterDeduction.amount.toLocaleString()}`,
      percentage: `${Paymentdata.paymentAfterDeduction.percentageChange.toFixed(2)}%`,
      trend: Paymentdata.paymentAfterDeduction.percentageChange >= 0 ? "up" : "down",
      comparisonText: `vs ${period}`
    },
    {
      id: 1,
      title: "Interpreters",
      value: `$${Paymentdata.interpreters.amount.toLocaleString()}`,
      percentage: `${Paymentdata.interpreters.percentageChange.toFixed(2)}%`,
      trend: Paymentdata.interpreters.percentageChange >= 0 ? "up" : "down",
      comparisonText: `vs ${period}`
    },
    {
      id: 2,
      title: "Clients",
      value: `$${Paymentdata.clients.amount.toLocaleString()}`,
      percentage: `${Paymentdata.clients.percentageChange.toFixed(2)}%`,
      trend: Paymentdata.clients.percentageChange >= 0 ? "up" : "down",
      comparisonText: `vs ${period}`
    }
  ];

  return (
    <section className="flex flex-col rounded-none justify-center">
      <div className="flex border mt-8 rounded-xl max-lg:flex-col">
        {paymentData.map((stat, index) => (
          <div key={index} className="flex flex-col w-[33%] max-lg:ml-0 max-lg:w-full">
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
};

export default PaymentCard;
