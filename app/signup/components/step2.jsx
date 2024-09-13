import React from 'react';
import { Field, Form, ErrorMessage } from 'formik';
import ImageUploader from './upload_file';
import * as Yup from 'yup';

// Define validation schema
const validationSchema = Yup.object({
    address: Yup.string().required('Address is required'),
    skypeId: Yup.string().required('Skype ID is required'),
    organization: Yup.string().required('Organization is required'),
    department: Yup.string().required('Department is required'),
    position: Yup.string().required('Position is required'),
});

const Step2 = ({ values, setFieldValue, onBack, onSubmit }) => {
    const handleSubmit = () => {
        console.log('Address:', values.address); // Log address to console
        onSubmit(); // Call onSubmit to proceed to the next step or submit
    };

    return (
        <Form className="w-full">
           <div className="mt-6 flex w-full justify-between rounded-md bg-[#F5F7F9] p-2">
                <Field
                    name="address"
                    type="text"
                    placeholder="Enter Your address"
                    className="emailInput outline-none w-[90%] border-none bg-transparent text-lg text-[#A3A3A3]"
                />
                <ErrorMessage name="address" component="div" className="text-red-500" />
            </div>
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
                <ErrorMessage name="skypeId" component="div" className="text-red-500" />
            </div>
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
                <ErrorMessage name="organization" component="div" className="text-red-500" />
            </div>
            <div className="flex gap-3">
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
                    <ErrorMessage name="department" component="div" className="text-red-500" />
                </div>
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
                    <ErrorMessage name="position" component="div" className="text-red-500" />
                </div>
            </div>
            <ImageUploader setFieldValue={setFieldValue} />

            <div className="flex justify-between mt-8">
                <button
                    type="button"
                    onClick={onBack}
                    className="rounded-md  mr-auto  py-2 text-lg font-semibold"
                >
                    Back
                </button>
                <button
                    type="button"
                    onClick={handleSubmit}
                    className="rounded-md bg-[#FBCC1D] ml-auto px-8 py-2 text-lg font-semibold"
                >
                    Submit
                </button>
            </div>
        </Form>
    );
};

export default Step2;
