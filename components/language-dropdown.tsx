'use client';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { getTranslation } from '@/i18n';
import { IRootState } from '@/store/store';
import { toggleRTL } from '@/store/themeConfigSlice';
import { GetCountries } from 'react-country-state-city';

interface LanguageDropdownProps {
    setSelectedLanguage: (language: string) => void;
    setSelectedLanguage2: (language: string) => void;
    setPopoup: (state: boolean) => void;
    setPopoup2: (state: boolean) => void;
    Popoup: boolean;
    Popoup2: boolean;
    onClose: () => void; // Add onClose prop
}

const LanguageDropdown = ({
    setSelectedLanguage,
    setSelectedLanguage2,
    setPopoup,
    setPopoup2,
    Popoup,
    Popoup2,
    onClose // Destructure onClose
}: LanguageDropdownProps) => {
    const dispatch = useDispatch();
    const router = useRouter();
    const { i18n } = getTranslation();
    const themeConfig = useSelector((state: IRootState) => state.themeConfig);

    const [searchTerm, setSearchTerm] = useState('');
    const [countriesList, setCountriesList] = useState<any[]>([]);
    const [filteredCountries, setFilteredCountries] = useState<any[]>([]);

    useEffect(() => {
        const fetchCountries = async () => {
            try {
                const countries = await GetCountries();
                setCountriesList(countries);
                setFilteredCountries(countries);
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
        if (!Popoup) {
            setPopoup(true);
            setSelectedLanguage(name);
        } else {
            setPopoup2(true);
            setSelectedLanguage2(name);
        }
        i18n.changeLanguage(code);
        console.log(`Selected language: ${name}`);
        onClose(); // Close dropdown after selection
    };

    return (
        <div className="fixed inset-0 z-[100] bg-[#b9b9b9] bg-opacity-[0.5] flex justify-center items-center">
            <div className={`w-[210px] rounded-lg bg-white shadow-xl p-2`}>
                <input
                    type="text"
                    placeholder="Search countries..."
                    value={searchTerm}
                    onChange={handleSearchChange}
                    className="w-full border-b px-3 py-2 rounded-t-lg outline-none"
                />
                <ul className="max-h-[250px] overflow-y-auto font-semibold text-dark dark:text-white">
                    {filteredCountries.length > 0 ? (
                        filteredCountries.map((country) => (
                            <li key={country.code || country.name}>
                                <button
                                    type="button"
                                    className={`flex items-center w-full rounded-lg p-2 hover:text-primary ${i18n.language === country.code ? 'bg-primary/10 text-primary' : ''}`}
                                    onClick={() => handleLanguageClick(country.code || '', country.name || '')}
                                >
                                    <img
                                        src={`/assets/images/flags/${country.code ? country.code.toUpperCase() : 'default'}.svg`}
                                        alt="flag"
                                        className="h-5 w-5 rounded-full object-cover"
                                    />
                                    <span className="ml-3">{country.name}</span>
                                </button>
                            </li>
                        ))
                    ) : (
                        <li className="text-center">No countries found</li>
                    )}
                </ul>
            </div>
        </div>
    );
};

export default LanguageDropdown;
