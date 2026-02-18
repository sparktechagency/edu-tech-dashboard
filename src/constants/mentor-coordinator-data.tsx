import { FaChalkboardTeacher, FaUserGraduate, FaUsers, FaBookOpen } from 'react-icons/fa';  
import { FaGraduationCap } from 'react-icons/fa'; 

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

export {studentsData , statsData , recentActivityData };