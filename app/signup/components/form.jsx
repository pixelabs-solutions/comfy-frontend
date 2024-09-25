import React, { useState } from 'react';
import { Field, Form, ErrorMessage, useFormikContext } from 'formik';
import { AiOutlineUser, AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';
import * as Yup from 'yup';

const FormComponent = ({ onNext }) => {
    // const { submitForm, validateForm } = useFormikContext();
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const togglePasswordVisibility = () => setShowPassword(!showPassword);
    const toggleConfirmPasswordVisibility = () => setShowConfirmPassword(!showConfirmPassword);

    // const handleNextClick = async () => {
    //     // Trigger form validation
    //     const errors = await validateForm();
    //     if (Object.keys(errors).length === 0) {
    //         submitForm(); // Form is valid, proceed with submission
    //         onNext(); // Execute onNext if provided
    //     } else {
    //         // Handle errors if needed
    //         console.log('Validation errors:', errors);
    //     }
    // };

    return (
        <div className="w-full">
            <div className="mt-6 text-lg">
                <Field as="select" name="role" className="w-full rounded-md bg-[#F5F7F9] p-2 text-[#37384D] outline-none">
                    <option value="" label="Select Role" />
                    <option value="admin" label="Admin" />
                    <option value="sub-admin" label="Sub Admin" />
                    <option value="user-manager" label="User Manager" />
                    <option value="interpreter" label="Interpreter" />
                    <option value="client" label="Client" />
                    <option value="billing-manager" label="Billing Manager" />
                </Field>
                <ErrorMessage name="role" component="div" className="text-red-500  text-sm" />
            </div>

            <div className="mt-5 flex flex-wrap w-[100%]  gap-3">
               <div className='w-[31.8%]'>
               <Field type="text" name="lastName" className="rounded-md w-full bg-[#F5F7F9] p-3 text-lg text-[#A3A3A3] outline-none" placeholder="Last Name" />
               <ErrorMessage name="lastName" component="div" className="text-red-500" />
               </div>
<div className='w-[31.8%]'>
<Field type="text" name="middleName" className="rounded-md w-full bg-[#F5F7F9] p-3 text-lg text-[#A3A3A3] outline-none" placeholder="Middle Name" />
                <ErrorMessage name="middleName" component="div" className="text-red-500" />
</div>

               <div className='w-[31.8%]'>
               <Field type="text" name="firstName" className="rounded-md w-full bg-[#F5F7F9] p-3 text-lg text-[#A3A3A3] outline-none" placeholder="First Name" />
               <ErrorMessage name="firstName" component="div" className="text-red-500" />
               </div>
            </div>

            <div>
            <div className="mt-5 flex w-full justify-between rounded-md bg-[#F5F7F9] p-2">
                <Field type="email" name="email" className="w-[90%] border-none bg-transparent text-lg text-[#A3A3A3] outline-none" placeholder="Enter Email Address" />
                <div className="my-auto flex flex-col">
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/6b7f688c97b2148b978984c13bb0763a49f427b4ae0e12360a17312a98983a42?placeholderIfAbsent=true&apiKey=411230a594914bdca96700bdc6c7d5b6"
                        alt="Email icon"
                        className="aspect-[1.29] w-[18px] object-contain"
                    />
                </div>

            </div>
            <ErrorMessage name="email" component="div" className="text-red-500" />
            </div>

            <div className="flex gap-3">
            <div className='w-full'>
                    <div className="mt-5 flex w-full justify-between rounded-md bg-[#F5F7F9] p-2">
                    <Field type="text" name="username" className="w-[90%] bg-transparent text-lg text-[#A3A3A3] outline-none" placeholder="Enter Username" />
                    <div className="my-auto flex flex-col">
                        <AiOutlineUser className="text-lg text-[#A3A3A3]" />
                    </div>
                </div>
                <ErrorMessage name="username" component="div" className="text-red-500" />
            </div>
<div className='w-full'>
    
<Field as="select" name="gender" className="mt-5 flex w-full justify-between rounded-md bg-[#F5F7F9] p-2 text-lg text-[#A3A3A3] outline-none">
                    <option value="" label="Select Gender" />
                    <option value="male" label="Male" />
                    <option value="female" label="Female" />
                    <option value="other" label="Other" />
                </Field>
                <ErrorMessage name="gender" component="div" className="text-red-500" />
</div>
            </div>

            <div className="flex gap-3">
              <div className='w-full'>
              <div className="mt-5 flex w-full justify-between rounded-md bg-[#F5F7F9] p-2">
                    <Field
                        type={showPassword ? 'text' : 'password'}
                        name="password"
                        className="w-[90%] bg-transparent text-lg text-[#A3A3A3] outline-none"
                        placeholder="Create Password"
                    />
                    <div className="my-auto flex flex-col">
                        {showPassword ? (
                            <AiFillEye onClick={togglePasswordVisibility} className="text-lg text-[#A3A3A3] cursor-pointer" />
                        ) : (
                            <AiFillEyeInvisible onClick={togglePasswordVisibility} className="text-lg text-[#A3A3A3] cursor-pointer" />
                        )}
                    </div>

                </div>
                <ErrorMessage name="password" component="div" className="text-red-500" />
              </div>

            <div className='w-full'>
            <div className="mt-5 flex w-full justify-between rounded-md bg-[#F5F7F9] p-2">
                    <Field
                        type={showConfirmPassword ? 'text' : 'password'}
                        name="confirmPassword"
                        className="w-[90%] bg-transparent text-lg text-[#A3A3A3] outline-none"
                        placeholder="Confirm Password"
                    />
                    <div className="my-auto flex flex-col">
                        {showConfirmPassword ? (
                            <AiFillEye onClick={toggleConfirmPasswordVisibility} className="text-lg text-[#A3A3A3] cursor-pointer" />
                        ) : (
                            <AiFillEyeInvisible onClick={toggleConfirmPasswordVisibility} className="text-lg text-[#A3A3A3] cursor-pointer" />
                        )}
                    </div>
                </div>
                <ErrorMessage name="confirmPassword" component="div" className="text-red-500" />

            </div>
            </div>

           
        </div>
    );
};

export default FormComponent;
