'use client';
import { IRootState } from '@/store/store';
import React from 'react';
import { useSelector } from 'react-redux';

const MainContainer = ({ children }: { children: React.ReactNode }) => {
    const themeConfig = useSelector((state: IRootState) => state.themeConfig);
    return <div className={`${themeConfig.navbar} main-container min-h-screen text-black dark:text-white-dark bg-[#F5F7F9] p-0 md:p-[2.5rem]`}> {children}</div>;
};

export default MainContainer;
