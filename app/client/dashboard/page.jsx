'use client'
import React, { useState } from 'react';
import Languages from './components/languages';
import TopRated from './components/Toprated.jsx';
import LanguageDropdown from '@/components/language-dropdown';

const Dashboard = () => {
    const [selectedLanguage, setSelectedLanguage] = useState('');
    const [selectedLanguage2, setSelectedLanguage2] = useState('');
    const [Popoup, setPopoup] = useState(false);
    const [Popoup2, setPopoup2] = useState(false);

    const handleDropdownClose = () => {
        setPopoup(false);
        setPopoup2(false);
    };

    return (
        <>
            <Languages />
            {Popoup && (
                <LanguageDropdown
                    setSelectedLanguage={setSelectedLanguage}
                    setSelectedLanguage2={setSelectedLanguage2}
                    setPopoup={setPopoup}
                    setPopoup2={setPopoup2}
                    Popoup={Popoup}
                    Popoup2={Popoup2}
                    onClose={handleDropdownClose} // Pass the onClose handler
                />
            )}
        </>
    );
};

export default Dashboard;
