import * as React from 'react';

function EmailInputField() {
  return (
     <div className='flex justify-between w-full mt-5 bg-[#F5F7F9] p-3 rounded-md'>
      <input
        className="text-xl text-neutral-400 bg-transparent outline-none w-[90%] emailInput"
        type="email"
        id="emailInput"
        placeholder="Enter Email Address"
        aria-label="Enter Email Address"
        tabIndex="0"
      />
      <div className="flex flex-col my-auto">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/6b7f688c97b2148b978984c13bb0763a49f427b4ae0e12360a17312a98983a42?placeholderIfAbsent=true&apiKey=411230a594914bdca96700bdc6c7d5b6" alt="Email icon" className="object-contain aspect-[1.29] w-[18px]" />
      </div>
     </div>
  );
}

export default EmailInputField;