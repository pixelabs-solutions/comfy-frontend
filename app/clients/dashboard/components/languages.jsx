import React from 'react';
import { TbArrowsDiff } from 'react-icons/tb';

const Languages = () => {
    return (
        <>
            <div>
                <ul className="lg:w-[50%] md:w-[80%] w-[95%] absolute -bottom-6  my-1 left-1/2 mx-auto -translate-x-1/2 transform flex items-center justify-center rounded-lg  border bg-[#F5F7F9] font-bold text-[#656676]">
                    <div className="relative items-center flex w-[70%]">
                        <li className="w-full py-4 text-center">English</li>
                        <li className="absolute left-1/2 mx-auto -translate-x-1/2 transform rounded-full py-4 text-center">
                            <TbArrowsDiff className="rounded-full  bg-[#FBCC1D] p-1 text-3xl text-black" />
                        </li>
                        <li className="w-full  border-l-2 py-4 text-center">German</li>
                    </div>
                    <div className='w-[30%]'>
                    <li className="w-full rounded-r-lg bg-[#FBCC1D] py-4  text-center font-bold text-black ">Initiate Call</li>
                    </div>
                </ul>
            </div>
        </>
    );
};

export default Languages;
