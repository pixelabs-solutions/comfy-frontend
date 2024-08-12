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
        <main className="flex overflow-hidden flex-wrap gap-10 pl-20 text-xl justify-between font-semibold text-black bg-white max-md:pl-5">
        <section className="flex flex-col lg:w-[35%] mt-7 max-md:max-w-full">
          <LogoSite />
          <SignInForm />
        </section>
        <div className="  w-full  lg:max-w-[50%]  ">
                     
                     <img src="/assets/images/auth/login.png" alt="Cover Image" className="w-full lg:max-h-[700px] " />
            
             
         </div>
      </main>
    );
};

export default CoverLogin;





