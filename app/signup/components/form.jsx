import { AiOutlineUser } from "react-icons/ai"; 
import { AiFillEyeInvisible } from "react-icons/ai"; 
import { AiFillEye } from "react-icons/ai"; 
import React from 'react';

const Form = () => {
    return (
        <>
            <form action="" className="w-full">
                <select name="" id="" className="text-lg mt-10 w-full rounded-md bg-[#F5F7F9] p-2  outline-none text-[#37384D]">
                    <option value="Select User Type" aria-readonly>
                        Select User Type
                    </option>
                    <option value="Select User Type" aria-readonly>
                        Admin
                    </option>
                    <option value="Select User Type" aria-readonly>
                        Sub Admin
                    </option>
                </select>
                <div className="mt-5 grid w-full grid-cols-3 gap-2">
                    <input type="text" name="" id="" className="rounded-md bg-[#F5F7F9] p-3 outline-none text-lg text-[#A3A3A3]" placeholder="Last Name" />
                    <input type="text" name="" id="" className="text-lg rounded-md bg-[#F5F7F9] p-3 outline-none text-[#A3A3A3]" placeholder="Middle name" />
                    <input type="text" name="" id="" className="text-lg rounded-md bg-[#F5F7F9] p-3 outline-none text-[#A3A3A3]" placeholder="First Name" />
                </div>
                <div className="mt-5 flex w-full justify-between rounded-md bg-[#F5F7F9] p-2">
                    <input
                        className="emailInput w-[90%] bg-transparent text-lg text-[#A3A3A3]outline-none border-none text-[#A3A3A3]"
                        type="email"
                        id="emailInput"
                        placeholder="Enter Email Address"
                        aria-label="Enter Email Address"
                        tabIndex="0"
                    />
                    <div className="my-auto flex flex-col">
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/6b7f688c97b2148b978984c13bb0763a49f427b4ae0e12360a17312a98983a42?placeholderIfAbsent=true&apiKey=411230a594914bdca96700bdc6c7d5b6"
                            alt="Email icon"
                            className="aspect-[1.29] w-[18px] object-contain"
                        />
                    </div>
                </div>
                <div className='flex gap-3'>
                <div className="mt-5 flex w-full justify-between rounded-md bg-[#F5F7F9] p-2">
                    <input
                        className="emailInput w-[90%] bg-transparent text-lg text-[#A3A3A3] outline-none"
                        type="email"
                        id="emailInput"
                        placeholder="Enter Username"
                        aria-label="Enter Email Address"
                        tabIndex="0"
                    />
                    <div className="my-auto flex flex-col">
                       <AiOutlineUser className="text-[#A3A3A3] text-lg" />
                    </div>
                </div>
                  <select name="" id="" className="mt-5 flex w-full justify-between rounded-md bg-[#F5F7F9] p-2 text-lg text-[#A3A3A3] outline-none">
                    <option value="Gender" aria-readonly>Gender </option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Custom">Custom</option>
                  </select>
                </div>
                <div className='flex gap-3'>
                <div className="mt-5 flex w-full justify-between rounded-md bg-[#F5F7F9] p-2">
                    <input
                        className="emailInput w-[90%] bg-transparent text-lg text-[#A3A3A3] outline-none"
                        type="password"
                        id="emailInput"
                        placeholder="Create Password"
                        aria-label="Enter Email Address"
                        tabIndex="0"
                    />
                    <div className="my-auto flex flex-col">
                    {/* <AiFillEye className="text-lg text-[#A3A3A3]" /> */}
                    <AiFillEyeInvisible className="text-lg text-[#A3A3A3]" />
                    </div>
                </div>
                <div className="mt-5 flex w-full justify-between rounded-md bg-[#F5F7F9] p-2">
                    <input
                        className="emailInput w-[90%] bg-transparent text-lg text-[#A3A3A3] outline-none"
                        type="password"
                        id="emailInput"
                        placeholder="Confirm Password"
                        aria-label="Enter Email Address"
                        tabIndex="0"
                    />
                    <div className="my-auto flex flex-col">
                        <AiFillEye className="text-lg text-[#A3A3A3]" />
                        {/* <AiFillEyeInvisible className="text-lg text-[#A3A3A3]" /> */}
                    </div>
                </div>
                </div>
                <button className='px-12 font-semibold mt-8 ms-auto flex py-[8px] text-lg rounded-md bg-[#FBCC1D]'>Next</button>
            </form>
        </>
    );
};

export default Form;
