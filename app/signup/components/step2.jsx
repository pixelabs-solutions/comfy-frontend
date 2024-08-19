import React from 'react';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';

const Step2 = () => {
    return (
        <>
            <div className="w-full">
                <div className="mt-5 flex w-full justify-between rounded-md bg-[#F5F7F9] p-2">
                    <input
                        className="emailInput text-[#A3A3A3]outline-none w-[90%] border-none bg-transparent text-lg text-[#A3A3A3]"
                        type="email"
                        id="emailInput"
                        placeholder="Enter Your Location"
                        aria-label="Enter Email Address"
                        tabIndex="0"
                    />
                    <div className="my-auto flex flex-col">
                    <img
                            loading="lazy"
                            src="/Admin/add_location_alt.png"
                            alt="Email icon"
                            className="aspect-[1.29] w-[18px] object-contain"
                        />
                    </div>
                </div>
                <div className="mt-5 flex w-full justify-between rounded-md bg-[#F5F7F9] p-2">
                    <input
                        className="emailInput text-[#A3A3A3]outline-none w-[90%] border-none bg-transparent text-lg text-[#A3A3A3]"
                        type="email"
                        id="emailInput"
                        placeholder="Enter Skype ID"
                        aria-label="Enter Email Address"
                        tabIndex="0"
                    />
                    <div className="my-auto flex flex-col">
                        <img
                            loading="lazy"
                            src="/Admin/Vector.png"
                            alt="Email icon"
                            className="aspect-[1.29] w-[18px] object-contain"
                        />
                    </div>
                </div>
                <div className="mt-5 flex w-full justify-between rounded-md bg-[#F5F7F9] p-2">
                    <input
                        className="emailInput text-[#A3A3A3]outline-none w-[90%] border-none bg-transparent text-lg text-[#A3A3A3]"
                        type="email"
                        id="emailInput"
                        placeholder="Organization"
                        aria-label="Enter Email Address"
                        tabIndex="0"
                    />
                    <div className="my-auto flex flex-col">
                        <img
                            loading="lazy"
                            src="/Admin/corporate_fare.png"
                            alt="Email icon"
                            className="aspect-[1.29] w-[18px] object-contain"
                        />
                    </div>
                </div>
                <div className="flex gap-3">
                    <div className="mt-5 flex w-full justify-between rounded-md bg-[#F5F7F9] p-2">
                        <input
                            className="emailInput w-[90%] bg-transparent text-lg text-[#A3A3A3] outline-none"
                            type="text"
                            id="emailInput"
                            placeholder="Department"
                            aria-label="Enter Email Address"
                            tabIndex="0"
                        />
                        <div className="my-auto flex flex-col">
                            {/* <AiFillEye className="text-lg text-[#A3A3A3]" /> */}
                            <img
                            loading="lazy"
                            src="/Admin/contact_page.png"
                            alt="Email icon"
                            className="aspect-[1.29] w-[18px] object-contain"
                        />
                        </div>
                    </div>
                    <div className="mt-5 flex w-full justify-between rounded-md bg-[#F5F7F9] p-2">
                        <input
                            className="emailInput w-[90%] bg-transparent text-lg text-[#A3A3A3] outline-none"
                            type="text"
                            id="emailInput"
                            placeholder="Position"
                            aria-label="Enter Email Address"
                            tabIndex="0"
                        />
                        <div className="my-auto flex flex-col">
                        <img
                            loading="lazy"
                            src="/Admin/enterprise.png"
                            alt="Email icon"
                            className="aspect-[1.29] w-[18px] object-contain"
                        />
                        </div>
                    </div>
                </div>
                {/* <div>
                   <div className="my-auto flex w-[62px] items-start self-stretch">
                        <div className="flex h-[62px] min-h-[62px] w-[62px] items-center justify-center rounded-[999px] bg-gray-500">
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/e074bf3f1fe42541ad2d5f208b7c28b8013eee002850390e9fbc8bcba340f591?placeholderIfAbsent=true&apiKey=411230a594914bdca96700bdc6c7d5b6"
                                alt="User profile picture"
                                className="my-auto aspect-square w-[62px] self-stretch rounded-[999px] object-contain"
                            />
                        </div>
                    </div>
                    <div className="my-auto flex items-start self-stretch text-center text-base font-semibold tracking-normal text-white">
                        <button className="gap-2 self-stretch overflow-hidden rounded-lg bg-gray-700 px-3 py-2.5">Upload picture</button>
                    </div>
                    <p className="my-auto self-stretch text-center text-sm font-medium leading-none tracking-normal text-gray-500">No file chosen</p>
                   </div> */}
             <div className="flex">
                <button className='px-12 font-semibold mt-8 me-auto flex py-[8px] text-lg rounded-md '>Back</button>
             <button className='px-12 font-semibold mt-8 ms-auto flex py-[8px] text-lg rounded-md bg-[#FBCC1D]'>Next</button>
                </div>
            </div>
        </>
    );
};

export default Step2;
