import React from 'react';
import StatCard from './StatCard';

const PaymentCard = ({ Paymentdata ,period }) => {
  // Check if Paymentdata is defined
  if (!Paymentdata) {
    return <div>Loading...</div>; // or any placeholder you prefer
  }

  const paymentData = [
    {
      id: 0,
      title: "Payment after deduction",
      value: `$${Paymentdata.paymentAfterDeduction.toLocaleString()}`,
      percentage: "+3.2%", // You might want to calculate this based on real data
      trend: Paymentdata.paymentAfterDeduction >= 0 ? "up" : "down",
      comparisonText: `vs ${period}`
    },
    {
      id: 1,
      title: "Interpreters",
      value: `$${Paymentdata.interpreters.toLocaleString()}`,
      percentage: "+3.2%", // Adjust this as needed
      trend: Paymentdata.interpreters >= 0 ? "up" : "down",
      comparisonText: `vs ${period}`
    },
    {
      id: 2,
      title: "Clients",
      value: `$${Paymentdata.clients.toLocaleString()}`,
      percentage: "+30.2%", // Adjust based on your requirements
      trend: Paymentdata.clients >= 0 ? "up" : "down",
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
}

export default PaymentCard;
