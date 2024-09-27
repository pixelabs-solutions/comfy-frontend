'use client'
import React, { useState } from 'react';
import StarRating from './starrating';

const FeedbackForm = () => {
  const [initialRating ,setRating] =useState(1);
  return (
    <form className="flex flex-col p-6 bg-white rounded-3xl border border-gray-300 border-solid max-w-[446px] mx-auto translate-y-32">
      <header className="flex flex-col w-full text-center">
        <h2 className="flex-1 shrink gap-2.5 self-stretch w-full text-2xl font-bold mb-1 text-gray-800">
          Session feedback
        </h2>
        <p className="flex-1 shrink self-stretch w-full text-sm leading-none text-gray-600">
          Please rate your experience below
        </p>
      </header>

      <div className="flex gap-9 justify-center items-center mt-6 w-full">
        <StarRating setRating2={setRating} initialRating={initialRating} />
        <span className="gap-1.5 self-stretch my-auto text-sm leading-none text-gray-500">
         {initialRating}/5 stars
        </span>
      </div>

      <div className="flex flex-col mt-6 w-full text-sm leading-none max-w-[398px]">
        <label htmlFor="additionalFeedback" className="flex-1 shrink self-stretch w-full text-gray-500">
          Additional feedback
        </label>
        <textarea
          id="additionalFeedback"
          className="flex flex-col justify-center px-3.5 py-3 mt-1 w-full text-gray-600 rounded-lg border border-gray-300 border-solid min-h-[100px]"
          defaultValue="My feedback!!"
        />
      </div>

      <div className="flex flex-col items-center mt-6 w-full text-base font-semibold text-black max-w-[398px]">
        <button type="submit" className="flex overflow-hidden gap-1.5 justify-center items-center px-4 py-2.5 w-full bg-yellow-400 rounded-lg shadow-sm">
          <span className="self-stretch px-0.5 my-auto">Submit feedback</span>
        </button>
      </div>
    </form>
  );
};

export default FeedbackForm;