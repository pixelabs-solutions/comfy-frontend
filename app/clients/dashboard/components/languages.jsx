'use client';
import React, { useEffect, useState } from 'react';
import { TbArrowsDiff } from 'react-icons/tb';
import LanguageDropdown from '@/components/language-dropdown';
import { useSelector } from 'react-redux';
import { useInitiateCallMutation } from '@/store/query/postapis';

const Languages = () => {
    const [languages, setSelectedLanguage] = useState('English');
    const [languages2, setSelectedLanguage2] = useState('English');
    const [Popoup, setPopoup] = useState(true);
    const [Popoup2, setPopoup2] = useState(true);
    const [InitiateCall] =useInitiateCallMutation()
    const Toprated = useSelector((state) => state.LangToprated);
     const valuesDummy ={
        client:19,
        interpreter:18,
        duration:"3:01:09",
        bill:1233
     }
    useEffect(() => {
      console.log(Toprated + "aa");
    }, [Toprated]); 

    const InitiateCallClick = async () => {
        try {
            await InitiateCall(valuesDummy).unwrap(); 
            console.log('Success');
        } catch (err) {
            console.error('Error:', err);
        }
    };
    return (
        <>
            <div>
                <ul className="absolute -bottom-6 left-1/2 mx-auto my-1 flex w-[95%] -translate-x-1/2 transform items-center justify-center rounded-lg border bg-[white] font-bold text-[#656676] md:w-[80%] lg:w-[50%]">
                    <div className="relative flex w-[70%] items-center">
                        <li className="w-full cursor-pointer py-4 text-center" onClick={() => setPopoup(false)}>
                            {Toprated}
                        </li>
                        <li className="absolute left-1/2 mx-auto -translate-x-1/2 transform rounded-full py-4 text-center">
                            <TbArrowsDiff className="rounded-full bg-[#FBCC1D] p-1 text-3xl text-black" />
                        </li>
                        <li className="w-full border-l-2 py-4 text-center" onClick={() => setPopoup2(false)}>{languages2}</li>
                    </div>
                    <div className="w-[30%]">
                        <li className="w-full rounded-r-lg bg-[#FBCC1D] py-4 text-center font-bold text-black" onClick={InitiateCallClick} >Initiate Call</li>
                    </div>
                </ul>
            </div>
            {!Popoup || !Popoup2 ? (
                <LanguageDropdown
                    setSelectedLanguage={setSelectedLanguage}
                    setSelectedLanguage2={setSelectedLanguage2}
                    setPopoup={setPopoup}
                    setPopoup2={setPopoup2}
                    Popoup2={Popoup2}
                    Popoup={Popoup}
                />
            ) : null}
        </>
    );
};

export default Languages;
