import { FaChalkboardTeacher, FaUserGraduate, FaUsers, FaBookOpen } from 'react-icons/fa';  
import { FaGraduationCap } from 'react-icons/fa'; 
import { Mentor } from '../pages/mentor-coordinator/mentors';

export interface GroupSchedule {
  key: string;
  title: string;
  date: string;
  time: string;
  group: string;
  track: string;
  location: string;
  status: 'Active' | 'Inactive';
  sources: string;
}

const studentsData = [
  {
    id: 1,
    name: 'Jhon Lura',
    email: 'jhon@examplemail.com',
    group: 'Skill Path',
    track: 'Data',
    avatar: 'https://i.pravatar.cc/150?img=1',
  },
  {
    id: 2,
    name: 'Jhon Lura',
    email: 'jhon@examplemail.com',
    group: 'Skill Path',
    track: 'Data',
    avatar: 'https://i.pravatar.cc/150?img=2',
  },
  {
    id: 3,
    name: 'Jhon Lura',
    email: 'jhon@examplemail.com',
    group: 'Skill Path',
    track: 'Data',
    avatar: 'https://i.pravatar.cc/150?img=3',
  },
]; 

const statsData = [
  {
    id: 1,
    title: 'Total Mentors',
    count: 12,
    icon: <FaChalkboardTeacher className="text-blue-500 text-2xl" />,
    bgColor: 'bg-blue-50',
  },
  {
    id: 2,
    title: 'Total Student',
    count: 24,
    icon: <FaUserGraduate className="text-orange-500 text-2xl" />,
    bgColor: 'bg-orange-50',
  },
  {
    id: 3,
    title: 'Total Group',
    count: 5,
    icon: <FaUsers className="text-purple-500 text-2xl" />,
    bgColor: 'bg-purple-50',
  },
  {
    id: 4,
    title: 'Learning Materials',
    count: 14,
    icon: <FaBookOpen className="text-red-500 text-2xl" />,
    bgColor: 'bg-red-50',
  },
];

const recentActivityData = [
  {
    id: 1,
    title: '23 Students under your guidance',
    subTitle: 'View only access',
    icon: <FaGraduationCap className="text-purple-500 text-xl" />,
    bgColor: 'bg-purple-50',
  },
  {
    id: 2,
    title: '23 Students under your guidance',
    subTitle: 'View only access',
    icon: <FaGraduationCap className="text-purple-500 text-xl" />,
    bgColor: 'bg-purple-50',
  },
  {
    id: 3,
    title: '23 Students under your guidance',
    subTitle: 'View only access',
    icon: <FaGraduationCap className="text-purple-500 text-xl" />,
    bgColor: 'bg-purple-50',
  },
]; 

const initialMentorsData: Mentor[] = [
  {
    key: '1',
    name: 'Rens Groot',
    email: 'rens@mail.com',
    company: 'ABN AMRO',
    jobTitle: 'Data Analyst',
    status: 'Active',
  },
  {
    key: '2',
    name: 'Rens Groot',
    email: 'rens@mail.com',
    company: 'ABN AMRO',
    jobTitle: 'Data Analyst',
    status: 'Active',
  },
  {
    key: '3',
    name: 'Rens Groot',
    email: 'rens@mail.com',
    company: 'ABN AMRO',
    jobTitle: 'Data Analyst',
    status: 'Active',
  },
  {
    key: '4',
    name: 'Rens Groot',
    email: 'rens@mail.com',
    company: 'ABN AMRO',
    jobTitle: 'Data Analyst',
    status: 'Active',
  },
  {
    key: '5',
    name: 'Rens Groot',
    email: 'rens@mail.com',
    company: 'ABN AMRO',
    jobTitle: 'Data Analyst',
    status: 'Active',
  },
  {
    key: '6',
    name: 'Rens Groot',
    email: 'rens@mail.com',
    company: 'ABN AMRO',
    jobTitle: 'Data Analyst',
    status: 'Active',
  },
  {
    key: '7',
    name: 'Rens Groot',
    email: 'rens@mail.com',
    company: 'ABN AMRO',
    jobTitle: 'Data Analyst',
    status: 'Active',
  },
  {
    key: '8',
    name: 'Rens Groot',
    email: 'rens@mail.com',
    company: 'ABN AMRO',
    jobTitle: 'Data Analyst',
    status: 'Active',
  },
];
const initialGroupScheduleData: GroupSchedule[] = [
  {
    key: '1',
    title: 'Computer Basic Skill',
    date: '11/12/2025',
    time: '08:12 am',
    group: 'Skill Path',
    track: 'Data',
    location: '12 central street road',
    status: 'Active',
    sources: 'No sources attached',
  },
  {
    key: '2',
    title: 'Computer Basic Skill',
    date: '11/12/2025',
    time: '08:12 am',
    group: 'Skill Path',
    track: 'Data',
    location: '12 central street road',
    status: 'Active',
    sources: 'No sources attached',
  },
  {
    key: '3',
    title: 'Computer Basic Skill',
    date: '11/12/2025',
    time: '08:12 am',
    group: 'Skill Path',
    track: 'Data',
    location: '12 central street road',
    status: 'Active',
    sources: 'No sources attached',
  },
  {
    key: '4',
    title: 'Computer Basic Skill',
    date: '11/12/2025',
    time: '08:12 am',
    group: 'Skill Path',
    track: 'Data',
    location: '12 central street road',
    status: 'Active',
    sources: 'No sources attached',
  },
  {
    key: '5',
    title: 'Computer Basic Skill',
    date: '11/12/2025',
    time: '08:12 am',
    group: 'Skill Path',
    track: 'Data',
    location: '12 central street road',
    status: 'Active',
    sources: 'No sources attached',
  },
  {
    key: '6',
    title: 'Computer Basic Skill',
    date: '11/12/2025',
    time: '08:12 am',
    group: 'Skill Path',
    track: 'Data',
    location: '12 central street road',
    status: 'Active',
    sources: 'No sources attached',
  },
  {
    key: '7',
    title: 'Computer Basic Skill',
    date: '11/12/2025',
    time: '08:12 am',
    group: 'Skill Path',
    track: 'Data',
    location: '12 central street road',
    status: 'Active',
    sources: 'No sources attached',
  },
];

export {studentsData , statsData , recentActivityData , initialMentorsData, initialGroupScheduleData };
