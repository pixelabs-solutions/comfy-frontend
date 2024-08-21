// FormComponent.js
import React from 'react';
import { Field, Form, ErrorMessage } from 'formik';
import { AiOutlineUser, AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';
import * as Yup from 'yup';

// Define validation schema
const validationSchema = Yup.object({
    userType: Yup.string().required('User type is required'),
    lastName: Yup.string().required('Last name is required'),
    middleName: Yup.string().required('Middle name is required'),
    firstName: Yup.string().required('First name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    username: Yup.string().required('Username is required'),
    gender: Yup.string().required('Gender is required'),
    password: Yup.string().required('Password is required'),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Confirm password is required'),
});

const FormComponent = ({ values, setFieldValue, onNext }) => {
    return (
        <Form className="w-full">
            <div className="mt-10 text-lg">
                <Field as="select" name="userType" className="w-full rounded-md bg-[#F5F7F9] p-2 text-[#37384D] outline-none">
                    <option value="" label="Select User Type" />
                    <option value="Admin" label="Admin" />
                    <option value="Sub Admin" label="Sub Admin" />
                </Field>
                <ErrorMessage name="userType" component="div" className="text-red-500" />
            </div>

            <div className="mt-5 grid w-full grid-cols-3 gap-2">
                <Field type="text" name="lastName" className="rounded-md bg-[#F5F7F9] p-3 text-lg text-[#A3A3A3] outline-none" placeholder="Last Name" />
                <ErrorMessage name="lastName" component="div" className="text-red-500" />

                <Field type="text" name="middleName" className="rounded-md bg-[#F5F7F9] p-3 text-lg text-[#A3A3A3] outline-none" placeholder="Middle Name" />
                <ErrorMessage name="middleName" component="div" className="text-red-500" />

                <Field type="text" name="firstName" className="rounded-md bg-[#F5F7F9] p-3 text-lg text-[#A3A3A3] outline-none" placeholder="First Name" />
                <ErrorMessage name="firstName" component="div" className="text-red-500" />
            </div>

            <div className="mt-5 flex w-full justify-between rounded-md bg-[#F5F7F9] p-2">
                <Field type="email" name="email" className="w-[90%] border-none bg-transparent text-lg text-[#A3A3A3] outline-none" placeholder="Enter Email Address" />
                <ErrorMessage name="email" component="div" className="text-red-500" />
                <div className="my-auto flex flex-col">
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/6b7f688c97b2148b978984c13bb0763a49f427b4ae0e12360a17312a98983a42?placeholderIfAbsent=true&apiKey=411230a594914bdca96700bdc6c7d5b6"
                        alt="Email icon"
                        className="aspect-[1.29] w-[18px] object-contain"
                    />
                </div>
            </div>

            <div className="flex gap-3">
                <div className="mt-5 flex w-full justify-between rounded-md bg-[#F5F7F9] p-2">
                    <Field type="text" name="username" className="w-[90%] bg-transparent text-lg text-[#A3A3A3] outline-none" placeholder="Enter Username" />
                    <ErrorMessage name="username" component="div" className="text-red-500" />
                    <div className="my-auto flex flex-col">
                        <AiOutlineUser className="text-lg text-[#A3A3A3]" />
                    </div>
                </div>
                <Field as="select" name="gender" className="mt-5 flex w-full justify-between rounded-md bg-[#F5F7F9] p-2 text-lg text-[#A3A3A3] outline-none">
                    <option value="" label="Gender" />
                    <option value="Male" label="Male" />
                    <option value="Female" label="Female" />
                    <option value="Custom" label="Custom" />
                </Field>
                <ErrorMessage name="gender" component="div" className="text-red-500" />
            </div>

            <div className="flex gap-3">
                <div className="mt-5 flex w-full justify-between rounded-md bg-[#F5F7F9] p-2">
                    <Field type="password" name="password" className="w-[90%] bg-transparent text-lg text-[#A3A3A3] outline-none" placeholder="Create Password" />
                    <ErrorMessage name="password" component="div" className="text-red-500" />
                    <div className="my-auto flex flex-col">
                        <AiFillEyeInvisible className="text-lg text-[#A3A3A3]" />
                    </div>
                </div>

                <div className="mt-5 flex w-full justify-between rounded-md bg-[#F5F7F9] p-2">
                    <Field type="password" name="confirmPassword" className="w-[90%] bg-transparent text-lg text-[#A3A3A3] outline-none" placeholder="Confirm Password" />
                    <ErrorMessage name="confirmPassword" component="div" className="text-red-500" />
                    <div className="my-auto flex flex-col">
                        <AiFillEye className="text-lg text-[#A3A3A3]" />
                    </div>
                </div>
            </div>

            <button type="button" onClick={onNext} className="ms-auto mt-8 flex rounded-md bg-[#FBCC1D] px-12 py-[8px] text-lg font-semibold">
                Next
            </button>
        </Form>
    );
};

export default FormComponent;
