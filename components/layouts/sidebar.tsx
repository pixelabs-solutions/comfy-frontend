'use client';
import { BiLogIn } from 'react-icons/bi';
import { FiUsers } from 'react-icons/fi';
import { IoIosNotificationsOutline } from 'react-icons/io';
import { MdOutlineManageAccounts } from 'react-icons/md';
// import { IoCardSharp } from "react-icons/io";
import { HiOutlinePhoneMissedCall } from 'react-icons/hi';
import { BiHistory } from 'react-icons/bi';
import { MdPayments } from 'react-icons/md';

import { HiOutlineViewGridAdd } from 'react-icons/hi';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';
import { toggleSidebar } from '@/store/themeConfigSlice';
import { IRootState } from '@/store/store';
import { useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { getTranslation } from '@/i18n';
import Nottification from '@/app/nottification/page';
import { Router } from 'next/router';
import { useUpdateInterpreterMutation } from '@/store/query/patchapis';
import ProfileComponent from './imageupload';
const Sidebar = () => {
    const dispatch = useDispatch();
    const { t } = getTranslation();
    const pathname = usePathname();
    const [currentMenu, setCurrentMenu] = useState<string>('');
    const [errorSubMenu, setErrorSubMenu] = useState(false);
    const themeConfig = useSelector((state: IRootState) => state.themeConfig);
    const semidark = useSelector((state: IRootState) => state.themeConfig.semidark);
    const [Notification, setNotifaction] = useState(true);
    const [UpdateInterpreter] =useUpdateInterpreterMutation()
    const toggleMenu = (value: string) => {
        setCurrentMenu((oldValue) => {
            return oldValue === value ? '' : value;
        });
    };
    const router = useRouter();
    const LogOutFun = () =>{
        localStorage.removeItem('authToken');
        router.push('/auth')
    }
    useEffect(() => {
        const selector = document.querySelector('.sidebar ul a[href="' + window.location.pathname + '"]');
        if (selector) {
            selector.classList.add('active');
            const ul: any = selector.closest('ul.sub-menu');
            if (ul) {
                let ele: any = ul.closest('li.menu').querySelectorAll('.nav-link') || [];
                if (ele.length) {
                    ele = ele[0];
                    setTimeout(() => {
                        ele.click();
                    });
                }
            }
        }
    }, []);

    useEffect(() => {
        let allLinks = document.querySelectorAll('.sidebar ul a.active');
        allLinks.forEach(link => link.classList.remove('active'));
        
        const selector = document.querySelector('.sidebar ul a[href="' + window.location.pathname + '"]');
        selector?.classList.add('active');
    }, [pathname]);

    const setActiveRoute = () => {
        let allLinks = document.querySelectorAll('.sidebar ul a.active');
        for (let i = 0; i < allLinks.length; i++) {
            const element = allLinks[i];
            element?.classList.remove('active');
        }
        const selector = document.querySelector('.sidebar ul a[href="' + window.location.pathname + '"]');
        selector?.classList.add('active');
    };
    const [image, setImage] = useState<string>('/profile.png'); // Default profile image
    var Roles = localStorage.getItem('authRoles');

    return (
        <div className="bg-[#D4D4D4]">
            <nav className={`sidebar fixed bottom-0 top-0 z-50 h-full min-h-screen w-[240px] pl-4 transition-all duration-300 ${semidark ? 'text-white-dark' : ''}`}>
                <div className="h-full bg-[#F5F7F9] py-[2.5rem] dark:bg-black">
                    <div className="flex items-center justify-between px-4 py-3">
                        <ProfileComponent />
                    </div>
                    <PerfectScrollbar className="relative mt-12 h-[calc(100vh-80px)] ">
                        <div className="flex h-[calc(100vh-200px)] flex-col justify-between">
                            <ul className="relative space-y-0.5  py-0 font-semibold">
                                <li className="nav-item">
                                    <ul>
                                        {(Roles === 'client' || Roles === 'interpreter'  ||  Roles === 'quality-control' ||Roles === 'billing-manager' || Roles === 'sub-admin' || Roles === 'admin') && (
                                            <li className="nav-item mb-0 sm:mb-12">
                                                <Link href={`/${Roles}/dashboard`} className="group">
                                                    <div className="flex items-center">
                                                        <HiOutlineViewGridAdd className="shrink-0 group-hover:!text-primary" />
                                                        <span className="text-black dark:text-[#506690] dark:group-hover:text-white-dark ltr:pl-3 rtl:pr-3">Dashboard</span>
                                                    </div>
                                                </Link>
                                            </li>
                                        )}

                                        {(Roles === 'sub-admin' || Roles === 'admin') && (
                                            <li className="nav-item">
                                                <Link href={`/${Roles}/manage_user`} className="group">
                                                    <div className="flex items-center">
                                                        <FiUsers className="shrink-0 group-hover:!text-primary" />
                                                        <span className="text-black dark:text-[#506690] dark:group-hover:text-white-dark ltr:pl-3 rtl:pr-3">Manage User</span>
                                                    </div>
                                                </Link>
                                            </li>
                                        )}

                                        {(Roles === 'client' || Roles === 'interpreter' || Roles === 'sub-admin' || Roles === 'admin') && (
                                            <li className="nav-item">
                                                <Link href={`/${Roles}/billinghistory`} className="group">
                                                    <div className="flex items-center">
                                                        <BiHistory className="shrink-0 group-hover:!text-primary" />
                                                        <span className="text-black dark:text-[#506690] dark:group-hover:text-white-dark ltr:pl-3 rtl:pr-3">Billing History</span>
                                                    </div>
                                                </Link>
                                            </li>
                                        )}

                                        {(Roles === 'client' || Roles === 'interpreter' || Roles === 'sub-admin' || Roles === 'admin') && (
                                            <li className="nav-item">
                                                <Link href={`/${Roles}/callhistory`} className="group">
                                                    <div className="flex items-center">
                                                        <HiOutlinePhoneMissedCall className="shrink-0 group-hover:!text-primary" />
                                                        <span className="text-black dark:text-[#506690] dark:group-hover:text-white-dark ltr:pl-3 rtl:pr-3">Call History</span>
                                                    </div>
                                                </Link>
                                            </li>
                                        )}

                                        {Roles === 'admin' && (
                                            <li className="nav-item">
                                                <Link href={`/${Roles}/payment`} className="group">
                                                    <div className="flex items-center">
                                                        <MdPayments className="shrink-0 group-hover:!text-primary" />
                                                        <span className="text-black dark:text-[#506690] dark:group-hover:text-white-dark ltr:pl-3 rtl:pr-3">Payments</span>
                                                    </div>
                                                </Link>
                                            </li>
                                        )}

                                        {Roles === 'admin' && (
                                            <li className="nav-item">
                                                <Link href={`/${Roles}/pendingUsers`} className="group">
                                                    <div className="flex items-center">
                                                        <MdOutlineManageAccounts className="shrink-0 group-hover:!text-primary" />
                                                        <span className="text-black dark:text-[#506690] dark:group-hover:text-white-dark ltr:pl-3 rtl:pr-3">Pending Accounts</span>
                                                    </div>
                                                </Link>
                                            </li>
                                        )}

                                        {(Roles === 'client' || Roles === 'sub-admin' || Roles === 'admin' || Roles === 'billing-manager' ||  Roles === 'interpreter') && (
                                            <li className="nav-item">
                                                <Link href="#" className="group" onClick={() => setNotifaction(false)}>
                                                    <div className="flex items-center">
                                                        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <mask id="mask0_112_539" maskUnits="userSpaceOnUse" x="0" y="0" width="25" height="25">
                                                                <rect width="25" height="25" fill="#656676" />
                                                            </mask>
                                                            <g mask="url(#mask0_112_539)">
                                                                <path
                                                                    d="M4.16663 19.7916V17.7083H6.24996V10.4166C6.24996 8.97567 6.68399 7.69529 7.55204 6.5755C8.4201 5.45571 9.54857 4.7222 10.9375 4.37498V3.64581C10.9375 3.21179 11.0894 2.84286 11.3932 2.53904C11.697 2.23522 12.0659 2.08331 12.5 2.08331C12.934 2.08331 13.3029 2.23522 13.6067 2.53904C13.9105 2.84286 14.0625 3.21179 14.0625 3.64581V4.37498C15.4513 4.7222 16.5798 5.45571 17.4479 6.5755C18.3159 7.69529 18.75 8.97567 18.75 10.4166V17.7083H20.8333V19.7916H4.16663ZM12.5 22.9166C11.927 22.9166 11.4366 22.7127 11.0286 22.3047C10.6206 21.8967 10.4166 21.4062 10.4166 20.8333H14.5833C14.5833 21.4062 14.3793 21.8967 13.9713 22.3047C13.5633 22.7127 13.0729 22.9166 12.5 22.9166ZM8.33329 17.7083H16.6666V10.4166C16.6666 9.27081 16.2586 8.28991 15.4427 7.47394C14.6267 6.65797 13.6458 6.24998 12.5 6.24998C11.3541 6.24998 10.3732 6.65797 9.55725 7.47394C8.74128 8.28991 8.33329 9.27081 8.33329 10.4166V17.7083Z"
                                                                    fill="#656676"
                                                                />
                                                            </g>
                                                        </svg>

                                                        <span className="text-black dark:text-[#506690] dark:group-hover:text-white-dark ltr:pl-3 rtl:pr-3">Notifications</span>
                                                    </div>
                                                </Link>
                                            </li>
                                        )}

                                        {!Notification && <Nottification Role={Roles} onClose={() => setNotifaction(true)} />}
                                    </ul>
                                </li>
                            </ul>
                                <div className="flex items-center cursor-pointer  group" onClick={LogOutFun}>
                                    <BiLogIn className="shrink-0 group-hover:!text-primary" />
                                    <span className="text-black dark:text-[#506690] dark:group-hover:text-white-dark ltr:pl-3 rtl:pr-3">Log Out</span>
                                </div>
                        </div>
                    </PerfectScrollbar>
                </div>
            </nav>
        </div>
    );
};

export default Sidebar;
