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
import { IRootState } from '@/store';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { getTranslation } from '@/i18n';
import Nottification from '@/app/nottification/page';
const Sidebar = () => {
    const dispatch = useDispatch();
    const { t } = getTranslation();
    const pathname = usePathname();
    const [currentMenu, setCurrentMenu] = useState<string>('');
    const [errorSubMenu, setErrorSubMenu] = useState(false);
    const themeConfig = useSelector((state: IRootState) => state.themeConfig);
    const semidark = useSelector((state: IRootState) => state.themeConfig.semidark);
    const [Notification, setNotifaction] = useState(true);
    const toggleMenu = (value: string) => {
        setCurrentMenu((oldValue) => {
            return oldValue === value ? '' : value;
        });
    };

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
        setActiveRoute();
        if (window.innerWidth < 1024 && themeConfig.sidebar) {
            dispatch(toggleSidebar());
        }
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

    const handleImageChange = (e :any) => {
      const file = e.target.files?.[0]; // Add optional chaining for safety
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setImage(reader.result as string); // Type assertion since reader.result can be string or ArrayBuffer
        };
        reader.readAsDataURL(file); // Convert the image to a data URL for preview
      }
    }
    return (
        <div className="bg-[#D4D4D4]">
            <nav className={`sidebar fixed bottom-0 top-0 z-50 h-full min-h-screen w-[240px] pl-4 transition-all duration-300 ${semidark ? 'text-white-dark' : ''}`}>
                <div className="h-full bg-[#F5F7F9] py-[2.5rem] dark:bg-black">
                    <div className="flex items-center justify-between px-4 py-3">
                        {/*   <Link href="/" className="main-logo flex shrink-0 items-center">
                            <img className="ml-[5px] w-8 flex-none" src="/assets/images/logo.svg" alt="logo" />
                            <span className="align-middle text-2xl font-semibold ltr:ml-1.5 rtl:mr-1.5 dark:text-white-light lg:inline">VRISTO</span>
                        </Link>

                        <button
                            type="button"
                            className="collapse-icon flex h-8 w-8 items-center rounded-full transition duration-300 hover:bg-gray-500/10 rtl:rotate-180 dark:text-white-light dark:hover:bg-dark-light/10"
                            onClick={() => dispatch(toggleSidebar())}
                        >
                            <IconCaretsDown className="m-auto rotate-90" />
                        </button>*/}

                        {/* add profile image from the public folder and and user name and email as a profile detail in one div with flex row  */}

                        {/* <div className="flex items-center justify-center gap-2">
                            <img className="h-[50px] w-[50px] rounded-md object-cover" src="/profile.png" alt="user" />
                            <div className="flex flex-col  gap-1">
                                <span className="text-md font-bold  text-black dark:text-white-dark">Steve Handrison</span>
                                <span className="text-xs font-medium text-gray-600 dark:text-gray-400">admin@vristo.com</span>
                            </div>
                        </div> */}
                  <div className="relative group flex items-center justify-center gap-2">
     <div className='relative'>
     <img
        className="h-[50px] w-[50px] rounded-md object-cover"
        src={image} // Use the dynamic image state
        alt="user"
      />
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <label htmlFor="file-upload" className="cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.232 5.232a2.828 2.828 0 114 4L7.5 21H3v-4.5L15.232 5.232z"
            />
          </svg>
          <input
            id="file-upload"
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleImageChange} // Call the function on file change
          />
        </label>
      </div>
     </div>
      <div className="flex flex-col gap-1">
        <span className="text-md font-bold text-black dark:text-white-dark">
          Steve Handrison
        </span>
        <span className="text-xs font-medium text-gray-600 dark:text-gray-400">
          admin@vristo.com
        </span>
      </div>
    </div>
                    </div>
                    <PerfectScrollbar className="relative mt-12 h-[calc(100vh-80px)] ">
                        <div className="flex h-[calc(100vh-200px)] flex-col justify-between">
                            <ul className="relative space-y-0.5  py-0 font-semibold">
                                <li className="nav-item">
                                    <ul>
                                        <li className="nav-item mb-0 sm:mb-12">
                                            <Link href="/admin/dashboard" className="group">
                                                <div className="flex items-center">
                                                    <HiOutlineViewGridAdd className="shrink-0 group-hover:!text-primary" />

                                                    {/* <IconMenuChat /> */}
                                                    <span className="text-black dark:text-[#506690] dark:group-hover:text-white-dark ltr:pl-3 rtl:pr-3">Dashboard</span>
                                                </div>
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link href="/admin/manage_user" className="group">
                                                <div className="flex items-center">
                                                    <FiUsers className="shrink-0 group-hover:!text-primary" />
                                                    <span className="text-black dark:text-[#506690] dark:group-hover:text-white-dark ltr:pl-3 rtl:pr-3">Manage User</span>
                                                </div>
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link href="/admin/billinghistory" className="group">
                                                <div className="flex items-center">
                                                    <BiHistory className="shrink-0 group-hover:!text-primary" />
                                                    <span className="text-black dark:text-[#506690] dark:group-hover:text-white-dark ltr:pl-3 rtl:pr-3">Billing History</span>
                                                </div>
                                            </Link>
                                        </li>

                                        <li className="nav-item">
                                            <Link href="/admin/callhistory" className="group">
                                                <div className="flex items-center">
                                                    <HiOutlinePhoneMissedCall className="shrink-0 group-hover:!text-primary" />
                                                    <span className="text-black dark:text-[#506690] dark:group-hover:text-white-dark ltr:pl-3 rtl:pr-3">Call History</span>
                                                </div>
                                            </Link>
                                        </li>

                                        <li className="nav-item">
                                            <Link href="/admin/payment" className="group">
                                                <div className="flex items-center">
                                                    <MdPayments className="shrink-0 group-hover:!text-primary" />
                                                    <span className="text-black dark:text-[#506690] dark:group-hover:text-white-dark ltr:pl-3 rtl:pr-3">Payments</span>
                                                </div>
                                            </Link>
                                        </li>

                                        <li className="nav-item">
                                            <Link href="/admin/pendingUsers" className="group">
                                                <div className="flex items-center">
                                                    <MdOutlineManageAccounts className="shrink-0 group-hover:!text-primary" />
                                                    <span className="text-black dark:text-[#506690] dark:group-hover:text-white-dark ltr:pl-3 rtl:pr-3">Pending Accounts</span>
                                                </div>
                                            </Link>
                                        </li>

                                        <li className="nav-item">
                                            <Link href="#" className="group" onClick={() => setNotifaction(false)}>
                                                <div className="flex items-center">
                                                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <mask id="mask0_292_189" maskUnits="userSpaceOnUse" x="0" y="0" width="25" height="25">
                                                            <rect width="25" height="25" fill="#656676" />
                                                        </mask>
                                                        <g mask="url(#mask0_292_189)">
                                                            <path
                                                                d="M4.16675 19.7916V17.7083H6.25008V10.4166C6.25008 8.97567 6.68411 7.69529 7.55216 6.5755C8.42022 5.45571 9.54869 4.7222 10.9376 4.37498V3.64581C10.9376 3.21179 11.0895 2.84286 11.3933 2.53904C11.6971 2.23522 12.0661 2.08331 12.5001 2.08331C12.9341 2.08331 13.303 2.23522 13.6069 2.53904C13.9107 2.84286 14.0626 3.21179 14.0626 3.64581V4.37498C15.4515 4.7222 16.5799 5.45571 17.448 6.5755C18.3161 7.69529 18.7501 8.97567 18.7501 10.4166V17.7083H20.8334V19.7916H4.16675ZM12.5001 22.9166C11.9272 22.9166 11.4367 22.7127 11.0287 22.3047C10.6207 21.8967 10.4167 21.4062 10.4167 20.8333H14.5834C14.5834 21.4062 14.3794 21.8967 13.9714 22.3047C13.5634 22.7127 13.073 22.9166 12.5001 22.9166ZM8.33341 17.7083H16.6667V10.4166C16.6667 9.27081 16.2588 8.28991 15.4428 7.47394C14.6268 6.65797 13.6459 6.24998 12.5001 6.24998C11.3542 6.24998 10.3733 6.65797 9.55737 7.47394C8.7414 8.28991 8.33341 9.27081 8.33341 10.4166V17.7083Z"
                                                                fill="#656676"
                                                            />
                                                        </g>
                                                    </svg>

                                                    <span className="text-black dark:text-[#506690] dark:group-hover:text-white-dark ltr:pl-3 rtl:pr-3">Notifications</span>
                                                </div>
                                            </Link>
                                        </li>
                                        {!Notification &&  <Nottification Notificationprop={Notification} setNotifaction={setNotifaction}   />}
                                    </ul>
                                </li>
                            </ul>
                            <Link href="/apps/mailbox" className="group">
                                <div className="flex items-center">
                                    <BiLogIn className="shrink-0 group-hover:!text-primary" />
                                    <span className="text-black dark:text-[#506690] dark:group-hover:text-white-dark ltr:pl-3 rtl:pr-3">Log Out</span>
                                </div>
                            </Link>
                        </div>
                    </PerfectScrollbar>
                </div>
            </nav>
        </div>
    );
};

export default Sidebar;
