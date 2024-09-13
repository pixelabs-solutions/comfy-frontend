"use client"
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { SavingValuePair } from '@/store/topratedlang';
import { TbArrowsDiff } from 'react-icons/tb';

const languagePairs = [
  { from: 'English', to: 'German' },
  { from: 'English', to: 'French' },
  { from: 'Spanish', to: 'Italian' },
  { from: 'English', to: 'Japanese' },
  { from: 'Chinese', to: 'Korean' }
];

const TopRated = () => {
  const [languageValue, setLanguageValue] = useState([]);
  const dispatch = useDispatch();

  const handleClick = (from, to) => {
    const newPair = [from, to];  // Corrected array creation
    setLanguageValue((prev) => [...prev, newPair]);  // Update state correctly
    dispatch(SavingValuePair([newPair]));  // Dispatch with the correct newPair array
  };

  return (
    <div className="grid grid-cols-1 items-center gap-[5%] md:grid-cols-2 xl:grid-cols-3">
      {languagePairs.map((pair, index) => (
        <div key={index} onClick={() => handleClick(pair.from, pair.to)}>
          <ul className="relative my-1 flex items-center justify-center rounded-lg border bg-[#F5F7F9] font-bold text-[#656676]">
            <li className="w-full py-4 text-center">{pair.from}</li>
            <li className="absolute left-1/2 mx-auto -translate-x-1/2 transform rounded-full py-4 text-center">
              <TbArrowsDiff className="text-3xl bg-[#FBCC1D] rounded-full text-black p-1" />
            </li>
            <li className="w-full border-l-2 py-4 text-center">{pair.to}</li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default TopRated;
