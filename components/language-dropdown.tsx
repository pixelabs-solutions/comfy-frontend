'use client';
import Dropdown from '@/components/dropdown';
import IconCaretDown from '@/components/icon/icon-caret-down';
import { getTranslation } from '@/i18n';
import { IRootState } from '@/store';
import { toggleRTL } from '@/store/themeConfigSlice';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

interface LanguageDropdownProps {
    className?: string;
}

const LanguageDropdown = ({ setSelectedLanguage, setSelectedLanguage2, setPopoup  ,setPopoup2 ,Popoup ,Popoup2 }: any) => {
    const dispatch = useDispatch();
    const router = useRouter();
    const { i18n } = getTranslation();

    const themeConfig = useSelector((state: IRootState) => state.themeConfig);

    const [searchTerm, setSearchTerm] = useState('');
    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };

    const handleLanguageClick = (code: string, name: string) => {
        Popoup === false ? (
            setPopoup(true),
        setSelectedLanguage(name)
        ) : (
            setPopoup2(true),
        setSelectedLanguage2(name)
        )
        i18n.changeLanguage(code);
        console.log(`Selected language: ${name}`);
    };

    // Filter the language list based on the search term
    const filteredLanguages = themeConfig.languageList.filter((item: any) => item.name.toLowerCase().includes(searchTerm.toLowerCase()));

    return (
        <div className="fixed bottom-0 left-0 right-0  top-0 z-[100] bg-[#b9b9b9] bg-opacity-[0.5]">
            <div className={`translate-y-[90%] ${Popoup2 ? "translate-x-[290%]" :"translate-x-[385%]"} scrollbar-hidden left-[25%] top-[120%] z-[100] w-[210px] rounded-lg bg-white  shadow-xl`}>
                <input type="text" placeholder="Search languages..." value={searchTerm} onChange={handleSearchChange} className="w-full  border-b px-3 py-3 rounded-t-lg outline-none" />
                <ul
                    className="grid h-[250px] w-[100%] grid-cols-1 gap-2 overflow-y-auto   px-5 py-5  font-semibold text-dark dark:text-white-dark dark:text-white-light/90"
                    style={{
                        scrollbarWidth: 'none',
                        msOverflowStyle: 'none',
                        overflowY: 'scroll', 
                    }}
                >
                    {filteredLanguages.length > 0 ? (
                        filteredLanguages.map((item: any) => (
                            <li key={item.code} className="my-[1%]">
                                <button
                                    type="button"
                                    className={`flex w-full rounded-lg p-2 hover:text-primary ${i18n.language === item.code ? 'bg-primary/10 text-primary' : ''}`}
                                    onClick={() => handleLanguageClick(item.code, item.name)}
                                >
                                    <img src={`/assets/images/flags/${item.code.toUpperCase()}.svg`} alt="flag" className="h-5 w-5 rounded-full object-cover" />
                                    <span className="ltr:ml-3 rtl:mr-3">{item.name}</span>
                                </button>
                            </li>
                        ))
                    ) : (
                        <li>No languages found</li>
                    )}
                </ul>
            </div>
        </div>
    );
};

export default LanguageDropdown;
