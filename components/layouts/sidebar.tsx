
'use client';
import { BiLogIn } from "react-icons/bi"; 

import { FiUsers } from "react-icons/fi"; 
import { IoIosNotificationsOutline } from "react-icons/io"; 
import { MdOutlineManageAccounts } from "react-icons/md"; 
// import { IoCardSharp } from "react-icons/io"; 
import { HiOutlinePhoneMissedCall } from "react-icons/hi"; 
import { BiHistory } from "react-icons/bi"; 
import { MdPayments } from "react-icons/md"; 

import { HiOutlineViewGridAdd } from "react-icons/hi"; 
import PerfectScrollbar from 'react-perfect-scrollbar';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';
import { toggleSidebar } from '@/store/themeConfigSlice';
import AnimateHeight from 'react-animate-height';
import { IRootState } from '@/store';
import { useState, useEffect } from 'react';
import IconCaretsDown from '@/components/icon/icon-carets-down';
import IconMenuDashboard from '@/components/icon/menu/icon-menu-dashboard';
import IconCaretDown from '@/components/icon/icon-caret-down';
import IconMinus from '@/components/icon/icon-minus';
import IconMenuChat from '@/components/icon/menu/icon-menu-chat';
import IconMenuMailbox from '@/components/icon/menu/icon-menu-mailbox';
import IconMenuTodo from '@/components/icon/menu/icon-menu-todo';
import IconMenuNotes from '@/components/icon/menu/icon-menu-notes';
import IconMenuScrumboard from '@/components/icon/menu/icon-menu-scrumboard';
import IconMenuContacts from '@/components/icon/menu/icon-menu-contacts';
import IconMenuInvoice from '@/components/icon/menu/icon-menu-invoice';
import IconMenuCalendar from '@/components/icon/menu/icon-menu-calendar';
import IconMenuComponents from '@/components/icon/menu/icon-menu-components';
import IconMenuElements from '@/components/icon/menu/icon-menu-elements';
import IconMenuCharts from '@/components/icon/menu/icon-menu-charts';
import IconMenuWidgets from '@/components/icon/menu/icon-menu-widgets';
import IconMenuFontIcons from '@/components/icon/menu/icon-menu-font-icons';
import IconMenuDragAndDrop from '@/components/icon/menu/icon-menu-drag-and-drop';
import IconMenuTables from '@/components/icon/menu/icon-menu-tables';
import IconMenuDatatables from '@/components/icon/menu/icon-menu-datatables';
import IconMenuForms from '@/components/icon/menu/icon-menu-forms';
import IconMenuUsers from '@/components/icon/menu/icon-menu-users';
import IconMenuPages from '@/components/icon/menu/icon-menu-pages';
import IconMenuAuthentication from '@/components/icon/menu/icon-menu-authentication';
import IconMenuDocumentation from '@/components/icon/menu/icon-menu-documentation';
import { usePathname } from 'next/navigation';
import { getTranslation } from '@/i18n';
import Nottification from "@/app/nottification/page";
const Sidebar = () => {
    const dispatch = useDispatch();
    const { t } = getTranslation();
    const pathname = usePathname();
    const [currentMenu, setCurrentMenu] = useState<string>('');
    const [errorSubMenu, setErrorSubMenu] = useState(false);
    const themeConfig = useSelector((state: IRootState) => state.themeConfig);
    const semidark = useSelector((state: IRootState) => state.themeConfig.semidark);
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

    return (
        <div className="bg-[#D4D4D4]">
            <Nottification />
            <nav
                className={`sidebar fixed bottom-0 top-0 z-50 h-full min-h-screen w-[240px] pl-4 transition-all duration-300 ${semidark ? 'text-white-dark' : ''}`}
            >
                <div className="h-full bg-[#F5F7F9] dark:bg-black py-[2.5rem]" >
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

                        <div className="flex items-center justify-center gap-2">
                            <img className="w-[30px] h-[30px] rounded-full object-cover" src="" alt="user" />
                            <div className="flex flex-col  gap-1">
                                <span className="text-sm font-medium text-black dark:text-white-dark">{t('admin')}</span>
                                <span className="text-xs font-medium text-gray-600 dark:text-gray-400">admin@vristo.com</span>
                            </div>
                        </div>
                    </div>
                    <PerfectScrollbar className="relative mt-12 h-[calc(100vh-80px)] ">
                        <div className="flex flex-col justify-between h-[calc(100vh-200px)]">

                   
                        <ul className="relative space-y-0.5  py-0 font-semibold">
                          

                    

                            <li className="nav-item">
                                <ul>
                                    <li className="nav-item mb-0 sm:mb-12">
                                        <Link href="/admin/dashboard" className="group">
                                            <div className="flex items-center">
<HiOutlineViewGridAdd className="shrink-0 group-hover:!text-primary" />

                                                {/* <IconMenuChat /> */}
                                                <span className="text-black ltr:pl-3 rtl:pr-3 dark:text-[#506690] dark:group-hover:text-white-dark">Dashboard</span>
                                            </div>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link href="/admin/manage_user" className="group">
                                            <div className="flex items-center">
                                                <FiUsers className="shrink-0 group-hover:!text-primary" />
                                                <span className="text-black ltr:pl-3 rtl:pr-3 dark:text-[#506690] dark:group-hover:text-white-dark">Manage User</span>
                                            </div>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link href="/admin/billinghistory" className="group">
                                            <div className="flex items-center">
                                                 <BiHistory className="shrink-0 group-hover:!text-primary" />
                                                <span className="text-black ltr:pl-3 rtl:pr-3 dark:text-[#506690] dark:group-hover:text-white-dark">Billing History</span>
                                            </div>
                                        </Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link href="/admin/callhistory" className="group">
                                            <div className="flex items-center">
                                                <HiOutlinePhoneMissedCall  className="shrink-0 group-hover:!text-primary" />
                                                <span className="text-black ltr:pl-3 rtl:pr-3 dark:text-[#506690] dark:group-hover:text-white-dark">Call History</span>
                                            </div>
                                        </Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link href="/admin/payment" className="group">
                                            <div className="flex items-center">
                                              <MdPayments  className="shrink-0 group-hover:!text-primary" />
                                                <span className="text-black ltr:pl-3 rtl:pr-3 dark:text-[#506690] dark:group-hover:text-white-dark">Payments</span>
                                            </div>
                                        </Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link href="/admin/pendingUsers" className="group">
                                            <div className="flex items-center">
                                            <MdOutlineManageAccounts className="shrink-0 group-hover:!text-primary" />
                                                <span className="text-black ltr:pl-3 rtl:pr-3 dark:text-[#506690] dark:group-hover:text-white-dark">Pending Accounts</span>
                                            </div>
                                        </Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link href="/admin/notification" className="group">
                                            <div className="flex items-center">
                                                <IoIosNotificationsOutline  className="shrink-0 group-hover:!text-primary" />
                                                <span className="text-black ltr:pl-3 rtl:pr-3 dark:text-[#506690] dark:group-hover:text-white-dark">Notifications</span>
                                            </div>
                                        </Link>
                                    </li>

                                </ul>
                            </li>

                           
                        </ul>
                        <Link href="/apps/mailbox" className="group">
                                            <div className="flex items-center">
                                            <BiLogIn  className="shrink-0 group-hover:!text-primary" />
                                                <span className="text-black ltr:pl-3 rtl:pr-3 dark:text-[#506690] dark:group-hover:text-white-dark">Log Out</span>
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
