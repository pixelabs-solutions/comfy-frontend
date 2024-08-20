import SignInForm from '@/components/auth/components-auth-login-form';
import ComponentsAuthLoginForm from '@/components/auth/components-auth-login-form';
import LogoSite from '@/components/Logo';
import { Metadata } from 'next';
import Link from 'next/link';
import React from 'react';

export const metadata: Metadata = {
    title: 'Login Cover',
};

const CoverLogin = () => {
    return (
        <main className="flex lg:flex-row flex-col bg-white h-screen lg:gap-[10%] ">
            <section className="lg:mt-7 mt-2 flex lg:w-[40%] flex-col 2xl:px-32 xl:px-28 md:px-16  px-5">
                <LogoSite />
                <SignInForm />
            </section>
            <div className="w-[50%]  lg:flex hidden bg-cover h-screen" style={{ backgroundImage: "url('/assets/images/auth/login.png')" }}></div>
        </main>
    );
};

export default CoverLogin;
