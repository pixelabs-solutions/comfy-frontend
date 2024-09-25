"use client";

import React, { useState, useEffect } from 'react';
import { Field, Form, Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useLoginUserMutation, useRefreshTokenMutation } from '@/store/query/postapis';
import { useRouter } from 'next/navigation';
import { jwtDecode } from 'jwt-decode';
import SuccessMessage from '@/components/layouts/scucessmessage';
import ErrorBox from '@/components/layouts/errormessage';
import IconEye from '@/components/icon/icon-eye';
import { useBillingManagerDropdownQuery } from '@/store/query/getapis';
import { getToken, isTokenExpired ,checkUserRoleAndRedirect } from './servicetokken';

// Validation schema using Yup
const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Email is Required'),
    password: Yup.string().required('Password is Required'),
});

// Initial values
const initialValues = {
    email: '',
    password: '',
};

const SignInForm: React.FC = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [loginUser] = useLoginUserMutation();
    const [refreshToken] = useRefreshTokenMutation();
    const router = useRouter();
    const [messagesShows, setMessagesShows] = useState<string | null>(null);
    const [isPolling, setIsPolling] = useState(false);
    
    const handleSubmit = async (values: typeof initialValues, { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }) => {
        try {
            const response = await loginUser(values).unwrap();
            const { access_token, refresh_token } = response; // Ensure you get the refresh token
            localStorage.setItem('authToken', access_token);
            localStorage.setItem('refreshToken', refresh_token); // Store refresh token
            const decoded: { exp?: number, role?: string } = jwtDecode(access_token);
            const role = decoded.role ?? '';
            localStorage.setItem('authRoles', role);    
            setMessagesShows('Success');

            // Start polling for token refresh after successful login
            setIsPolling(true);

            if (role === 'admin') {
                router.push('/admin/dashboard');
            } 
            if (role === 'sub-admin') {
                router.push('/sub-admin/dashboard');
            } 
            if(role === "client"){
              router.push('/client/dashboard');
            }
            if(role === "billing-manager"){
              router.push('/billingmanager/dashboard');
            }
            if(role === "interpreter"){
              router.push('/interpreter/dashboard');
            }
            if(role === "quality-control"){
              router.push('/qualitycontrol');
            }
            // Add other role redirects here...
        } catch (error) {
            setMessagesShows('Error');
            console.error('Error logging in:', error);
        } finally {
            setSubmitting(false);
        }
    };
    useEffect(() => {
        const token = getToken();
        // Check if there's an existing token and if it's not expired
        if (token && !isTokenExpired(token)) {
          // Redirect the user based on their role
          checkUserRoleAndRedirect();
        }
      }, [router]);

    return (
        <>
            {messagesShows === 'Success' && <SuccessMessage Message={'You Are Logged In Successfully'} onClose={() => setMessagesShows(null)} />}
            {messagesShows === 'Error' && <ErrorBox errorMessage={'Failed to log in. Please try again.'} onClose={() => setMessagesShows(null)} />}
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
                {({ isSubmitting }) => (
                    <Form className="mt-10 flex w-full flex-col items-start max-md:mt-10 max-md:max-w-full lg:mt-20 xl:mt-44">
                        <h2 className="text-4xl font-bold">Sign in</h2>
                        <div className="self-stretch">
                            <Field
                                type="email"
                                name="email"
                                placeholder="Type your email"
                                aria-label="Email"
                                className="mt-7 w-full rounded-md bg-slate-100 px-6 py-3 text-neutral-400 outline-none max-md:max-w-full max-md:px-5"
                            />
                            <ErrorMessage name="email" component="div" className="my-2 text-red-500" />
                        </div>
                        <div className="self-stretch">
                            <div className="mt-6 flex flex-wrap justify-between gap-5 self-stretch rounded-lg bg-slate-100 px-6 py-3 text-neutral-400 max-md:max-w-full max-md:px-5">
                                <Field
                                    type={showPassword ? 'text' : 'password'}
                                    name="password"
                                    placeholder="Type your password"
                                    aria-label="Password"
                                    className="border-none bg-transparent outline-none"
                                />
                                <button type="button" onClick={() => setShowPassword(!showPassword)} className="focus:outline-none">
                                    {showPassword ? <IconEye /> : <IconEye />}
                                </button>
                            </div>
                            <ErrorMessage name="password" component="div" className="my-2 text-red-500" />
                        </div>
                        <button type="submit" disabled={isSubmitting} className="mt-7 w-full whitespace-nowrap rounded-lg bg-[#FBCC1D] py-4 font-bold max-md:px-5 lg:w-[40%]">
                            Login
                        </button>
                    </Form>
                )}
            </Formik>
        </>
    );
};

export default SignInForm;
