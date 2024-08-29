'use client';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { getTranslation } from '@/i18n';
import { IRootState } from '@/store';
import { toggleRTL } from '@/store/themeConfigSlice';
import { GetCountries } from 'react-country-state-city';
interface LanguageDropdownProps {
    setSelectedLanguage: (language: string) => void;
    setSelectedLanguage2: (language: string) => void;
    setPopoup: (state: boolean) => void;
    setPopoup2: (state: boolean) => void;
    Popoup: boolean;
    Popoup2: boolean;
}

const LanguageDropdown = ({
    setSelectedLanguage,
    setSelectedLanguage2,
    setPopoup,
    setPopoup2,
    Popoup,
    Popoup2
}: LanguageDropdownProps) => {
    const dispatch = useDispatch();
    const router = useRouter();
    const { i18n } = getTranslation();
    const themeConfig = useSelector((state: IRootState) => state.themeConfig);

    const [searchTerm, setSearchTerm] = useState('');
    const [countriesList, setCountriesList] = useState<any[]>([]); // State for countries list
    const [filteredCountries, setFilteredCountries] = useState<any[]>([]);

    useEffect(() => {
        const fetchCountries = async () => {
            try {
                const countries = await GetCountries();
                setCountriesList(countries);
                setFilteredCountries(countries); // Initialize with all countries
            } catch (error) {
                console.error('Error fetching countries:', error);
            }
        };

        fetchCountries();
    }, []);

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
        const filtered = countriesList.filter((country) =>
            country.name.toLowerCase().includes(e.target.value.toLowerCase())
        );
        setFilteredCountries(filtered);
    };

    const handleLanguageClick = (code: string, name: string) => {
        if (Popoup === false) {
            setPopoup(true);
            setSelectedLanguage(name);
        } else {
            setPopoup2(true);
            setSelectedLanguage2(name);
        }
        i18n.changeLanguage(code);
        console.log(`Selected language: ${name}`);
    };

    return (
        <div className="fixed bottom-0 left-0 right-0 top-0 z-[100] bg-[#b9b9b9] bg-opacity-[0.5]">
            <div className={`translate-y-[90%] ${Popoup2 ? "translate-x-[290%]" : "translate-x-[385%]"} scrollbar-hidden left-[25%] top-[120%] z-[100] w-[210px] rounded-lg bg-white shadow-xl`}>
                <input
                    type="text"
                    placeholder="Search countries..."
                    value={searchTerm}
                    onChange={handleSearchChange}
                    className="w-full border-b px-3 py-3 rounded-t-lg outline-none"
                />
                <ul
                    className="grid h-[250px] w-[100%] grid-cols-1 gap-2 overflow-y-auto px-5 py-5 font-semibold text-dark dark:text-white-dark dark:text-white-light/90"
                    style={{
                        scrollbarWidth: 'none',
                        msOverflowStyle: 'none',
                        overflowY: 'scroll',
                    }}
                >
                    {filteredCountries.length > 0 ? (
                        filteredCountries.map((country) => (
                            <li key={country.code || country.name} className="my-[1%]">
                                <button
                                    type="button"
                                    className={`flex w-full rounded-lg p-2 hover:text-primary ${i18n.language === country.code ? 'bg-primary/10 text-primary' : ''}`}
                                    onClick={() => handleLanguageClick(country.code || '', country.name || '')}
                                >
                                    <img
                                        src={`/assets/images/flags/${country.code ? country.code.toUpperCase() : 'default'}.svg`}
                                        alt="flag"
                                        className="h-5 w-5 rounded-full object-cover"
                                    />
                                    <span className="ltr:ml-3 rtl:mr-3">{country.name}</span>
                                </button>
                            </li>
                        ))
                    ) : (
                        <li>No countries found</li>
                    )}
                </ul>
            </div>
        </div>
    );
};

export default LanguageDropdown;
