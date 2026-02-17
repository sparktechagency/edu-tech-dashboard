import { TSidebarItem } from './generateSidebarItems';
// import {  AiOutlineDollarCircle } from 'react-icons/ai';
import { IoBarChartOutline } from 'react-icons/io5';
import {  TbMessage2Check } from 'react-icons/tb';
import { HiOutlineUserGroup } from 'react-icons/hi2';
import { BsBuildingGear } from 'react-icons/bs';
import { LuCrown } from 'react-icons/lu';
import { PiUsersThreeDuotone } from 'react-icons/pi';
import { RiUserStarLine } from 'react-icons/ri';

const sidebarItems: TSidebarItem[] = [
    {
        key: '',
        label: 'Analytics',
        path: '',
        icon: <IoBarChartOutline size={24} />,
    },
    {
        key: 'users',
        label: 'User Management',
        path: 'admin/student',
        icon: <HiOutlineUserGroup size={24} />,
    },
    {
        key: 'hosts',
        label: 'Host List',
        path: 'admin/mentors',
        icon: <RiUserStarLine size={24} />,
    },
    
    {
        key: 'facilities',
        label: 'Facilities',
        path: 'facilities',
        icon: <BsBuildingGear size={24} />,
    },
    {
        key: 'subscription',
        label: 'Subscription',
        path: 'subscription',
        icon: <LuCrown size={24} />,
    },
    // {
    //     key: 'transactions',
    //     label: 'Transactions',
    //     path: 'transactions',
    //     icon: <AiOutlineDollarCircle size={24} />,
    // },
    {
        key: 'booking-history',
        label: 'User Reviews',
        path: 'reviews',
        icon: <TbMessage2Check size={24} />,
    },
    {
        key: 'subscription-list',
        label: 'Subscription List',
        path: 'subscription-list',
        icon: <PiUsersThreeDuotone  size={24} />,
    },

    
];

export default sidebarItems;
