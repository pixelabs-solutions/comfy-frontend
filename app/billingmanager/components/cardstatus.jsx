import { FiDownload } from 'react-icons/fi';
import { url } from 'inspector';
import React from 'react';

const CardStatus = ({ StatusData }) => {
    return (
        <>
            <div className="mt-10 grid 2xl:grid-cols-3 md:grid-cols-2  gap-10">
                {StatusData.map((data) => (
                    <div style={data.status === 'approved' ? { backgroundImage: "url('/Subtract.png')" } : { backgroundColor: '#F5F7F9' }} className="rounded-xl  px-12 pt-12 pb-5 text-center relative bg-cover bg-center">
                        <div>
                            <h2 className="text-xl font-bold">{data.name}</h2>
                            <p className="text-[#37384D]">{data.code}</p>
                        </div>
                        {data.status === "pending" && <div className='absolute -top-6  left-0 w-full'>
                              <img src="/cross.png" alt="Cross" className='mx-auto shadow bg-[#F5F7F9] p-2 rounded-full' />
                        </div>}
                        {data.status === "approved" &&<div className='absolute -top-6  left-0 w-full'>
                              <img src="/check_circle.png" alt="Cross" className='mx-auto shadow bg-[#25282E] p-2 rounded-full' />
                        </div>}
                        <div className="my-4 flex flex-col gap-2 border-b border-t border-[#B7B7B7] py-4">
                            <div className="flex justify-between">
                                <h2 className="font-bold">Billing Duration</h2>
                                <p className="text-[#78798A]">{data.duration}</p>
                            </div>
                            <div className="flex justify-between">
                                <h2 className="font-bold">Billing Amounth</h2>
                                <p className="text-[#78798A]">{data.amounth}</p>
                            </div>
                        </div>
                        {data.status === 'approved' ? (
                            <p className="flex justify-center gap-2 text-[#37384D]">
                                {' '}
                                <FiDownload />
                                Get PDF Receipt
                            </p>
                        ) : (
                            <p className="flex justify-center gap-2 text-[#37384D] underline decoration-[#37384D]"> Mark as Paid</p>
                        )}
                    </div>
                ))}
            </div>
        </>
    );
};

export default CardStatus;
