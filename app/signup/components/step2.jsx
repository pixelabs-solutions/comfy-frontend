'use client'
import React from 'react';
import { Field, Form, ErrorMessage } from 'formik';
import ImageUploader from './upload_file';

const Step2 = ({setFieldValue}) => {
    return (
        <div className="w-full">
           <div className="mt-6 flex w-full justify-between rounded-md bg-[#F5F7F9] p-2">
                <Field
                    name="address"
                    type="text"
                    placeholder="Enter Your address"
                    className="emailInput outline-none w-[90%] border-none bg-transparent text-lg text-[#A3A3A3]"
                />
            </div>
            <ErrorMessage name="address" component="div" className="text-red-500 mt-1" />

            <div className="mt-5 flex w-full justify-between rounded-md bg-[#F5F7F9] p-2">
                <Field
                    name="skypeId"
                    type="text"
                    placeholder="Enter Skype ID"
                    className="emailInput text-[#A3A3A3] outline-none w-[90%] border-none bg-transparent text-lg text-[#A3A3A3]"
                />
                <div className="my-auto flex flex-col">
                    <img loading="lazy" src="/Admin/Vector.png" alt="Skype icon" className="aspect-[1.29] w-[18px] object-contain" />
                </div>
            </div>
            <ErrorMessage name="skypeId" component="div" className="text-red-500 mt-1" />

            <div className="mt-5 flex w-full justify-between rounded-md bg-[#F5F7F9] p-2">
                <Field
                    name="organization"
                    type="text"
                    placeholder="Organization"
                    className="emailInput text-[#A3A3A3] outline-none w-[90%] border-none bg-transparent text-lg text-[#A3A3A3]"
                />
                <div className="my-auto flex flex-col">
                    <img loading="lazy" src="/Admin/corporate_fare.png" alt="Organization icon" className="aspect-[1.29] w-[18px] object-contain" />
                </div>
            </div>
            <ErrorMessage name="organization" component="div" className="text-red-500 mt-1" />

            <div className="flex gap-3">
               <div className='w-full'>
               <div className="mt-5 flex w-full justify-between rounded-md bg-[#F5F7F9] p-2">
                    <Field
                        name="department"
                        type="text"
                        placeholder="Department"
                        className="emailInput w-[90%] bg-transparent text-lg text-[#A3A3A3] outline-none"
                    />
                    <div className="my-auto flex flex-col">
                        <img loading="lazy" src="/Admin/contact_page.png" alt="Department icon" className="aspect-[1.29] w-[18px] object-contain" />
                    </div>
                </div>
                <ErrorMessage name="department" component="div" className="text-red-500 mt-1" />
               </div>

              <div className='w-full'>
              <div className="mt-5 flex w-full justify-between rounded-md bg-[#F5F7F9] p-2">
                    <Field
                        name="position"
                        type="text"
                        placeholder="Position"
                        className="emailInput w-[90%] bg-transparent text-lg text-[#A3A3A3] outline-none"
                    />
                    <div className="my-auto flex flex-col">
                        <img loading="lazy" src="/Admin/enterprise.png" alt="Position icon" className="aspect-[1.29] w-[18px] object-contain" />
                    </div>
                </div>
                <ErrorMessage name="position" component="div" className="text-red-500 mt-1" />
              </div>

            </div>
            <ImageUploader setFieldValue={setFieldValue} />
            <ErrorMessage name="profilePicture" component="div" className="text-red-500 mt-1" />

        </div>
    );
};

export default Step2;
