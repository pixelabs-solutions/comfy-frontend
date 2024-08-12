'use client'
import React, { useState } from 'react';
import IconEye from '../icon/icon-eye';

const SignInForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-start pl-4 mt-44 w-full max-md:mt-10 max-md:max-w-full">
      <h2 className="text-4xl">Sign in</h2>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="type your email"
        aria-label="Email"
        className="self-stretch px-6 py-4 mt-7 rounded-lg bg-slate-100 text-neutral-400 max-md:px-5 max-md:max-w-full"
      />
      <div className="flex flex-wrap gap-5 justify-between self-stretch px-6 py-4 mt-6 rounded-lg bg-slate-100 text-neutral-400 max-md:px-5 max-md:max-w-full">
        <input
          type={showPassword ? 'text' : 'password'}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="type your password"
          aria-label="Password"
          className="bg-transparent border-none outline-none"
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="focus:outline-none"
        >
         {showPassword ? <IconEye/> : <IconEye/>}
        </button>
      </div>
      <button type="submit" className="px-20 py-4 mt-7 whitespace-nowrap bg-yellow-400 rounded-lg max-md:px-5">
        Login
      </button>
    </form>
  );
};

export default SignInForm;