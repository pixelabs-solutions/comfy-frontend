import { RxDotFilled } from "react-icons/rx"; 
import React from 'react';
import StatCard from './StatCard';

const paymentData = [
  {
    id:0,
    title: "Payment after deduction",
    value: "$93230",
    percentage: "+3.2%",
    trend: "up",
    comparisonText: "vs last week"
  },
  {
    id:1,
    title: "Interpreters",
    value: "$22227",
    percentage: "+3.2%",
    trend: "down",
    comparisonText: "vs last week"
  },
  {
    id:2,
    title: "Client",
    value: "$223250",
    percentage: "+30.2%",
    trend: "up",
    comparisonText: "vs last week"
  }
];

const PaymentCard =()=> {
  return (
    <section className="flex flex-col  rounded-none justify-center">
      <div className="flex border  mt-8  rounded-xl  max-lg:flex-col">
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
