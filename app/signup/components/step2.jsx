'use client';
import React from 'react';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';

import ImageUploader from './upload_file';

// Define validation schema
const validationSchema = Yup.object({
    location: Yup.string().required('Location is required'),
    skypeId: Yup.string().required('Skype ID is required'),
    organization: Yup.string().required('Organization is required'),
    department: Yup.string().required('Department is required'),
    position: Yup.string().required('Position is required'),
});

const Step2 = (SetStep) => {
    return (
        <Formik
            initialValues={{
                location: '',
                skypeId: '',
                organization: '',
                department: '',
                position: '',
            }}
            validationSchema={validationSchema}
            onSubmit={(values) => {
                console.log(values);
            }}
        >
            {({ errors, touched }) => (
                <Form className="w-full">
                    <div className="mt-16 flex w-full justify-between rounded-md bg-[#F5F7F9] p-2">
                        <Field
                            name="location"
                            type="text"
                            placeholder="Enter Your Location"
                            className="emailInput text-[#A3A3A3]outline-none w-[90%] border-none bg-transparent text-lg text-[#A3A3A3]"
                        />
                        <div className="my-auto flex flex-col">
                            <img loading="lazy" src="/Admin/add_location_alt.png" alt="Location icon" className="aspect-[1.29] w-[18px] object-contain" />
                        </div>
                        {errors.location && touched.location && <div className="text-red-500">{errors.location}</div>}
                    </div>
                    <div className="mt-5 flex w-full justify-between rounded-md bg-[#F5F7F9] p-2">
                        <Field name="skypeId" type="text" placeholder="Enter Skype ID" className="emailInput text-[#A3A3A3]outline-none w-[90%] border-none bg-transparent text-lg text-[#A3A3A3]" />
                        <div className="my-auto flex flex-col">
                            <img loading="lazy" src="/Admin/Vector.png" alt="Skype icon" className="aspect-[1.29] w-[18px] object-contain" />
                        </div>
                        {errors.skypeId && touched.skypeId && <div className="text-red-500">{errors.skypeId}</div>}
                    </div>
                    <div className="mt-5 flex w-full justify-between rounded-md bg-[#F5F7F9] p-2">
                        <Field name="organization" type="text" placeholder="Organization" className="emailInput text-[#A3A3A3]outline-none w-[90%] border-none bg-transparent text-lg text-[#A3A3A3]" />
                        <div className="my-auto flex flex-col">
                            <img loading="lazy" src="/Admin/corporate_fare.png" alt="Organization icon" className="aspect-[1.29] w-[18px] object-contain" />
                        </div>
                        {errors.organization && touched.organization && <div className="text-red-500">{errors.organization}</div>}
                    </div>
                    <div className="flex gap-3">
                        <div className="mt-5 flex w-full justify-between rounded-md bg-[#F5F7F9] p-2">
                            <Field name="department" type="text" placeholder="Department" className="emailInput w-[90%] bg-transparent text-lg text-[#A3A3A3] outline-none" />
                            <div className="my-auto flex flex-col">
                                <img loading="lazy" src="/Admin/contact_page.png" alt="Department icon" className="aspect-[1.29] w-[18px] object-contain" />
                            </div>
                            {errors.department && touched.department && <div className="text-red-500">{errors.department}</div>}
                        </div>
                        <div className="mt-5 flex w-full justify-between rounded-md bg-[#F5F7F9] p-2">
                            <Field name="position" type="text" placeholder="Position" className="emailInput w-[90%] bg-transparent text-lg text-[#A3A3A3] outline-none" />
                            <div className="my-auto flex flex-col">
                                <img loading="lazy" src="/Admin/enterprise.png" alt="Position icon" className="aspect-[1.29] w-[18px] object-contain" />
                            </div>
                            {errors.position && touched.position && <div className="text-red-500">{errors.position}</div>}
                        </div>
                    </div>
                    <ImageUploader />
                    <div className="flex">
                        <button type="button" className="me-auto mt-8 flex rounded-md py-[8px] text-lg font-semibold" onClick={() => SetStep(0)}>
                            Back
                        </button>
                        <button type="submit" className="ms-auto mt-8 flex rounded-md bg-[#FBCC1D] px-12 py-[8px] text-lg font-semibold">
                            Submit
                        </button>
                    </div>
                </Form>
            )}
        </Formik>
    );
};

export default Step2;
