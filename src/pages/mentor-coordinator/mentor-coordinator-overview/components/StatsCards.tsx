import { FaBookOpen, FaChalkboardTeacher, FaUserGraduate, FaUsers } from 'react-icons/fa';
import { useGetOverViewQuery } from '../../../../redux/apiSlices/coordinator/overViewSlice';


const StatsCards = () => { 
    const {data} = useGetOverViewQuery(undefined); 
    const overviewData = data?.data || []


const statsData = [
  {
    id: 1,
    title: 'Total Mentors',
    count: overviewData?.totalMentors || 0,
    icon: <FaChalkboardTeacher className="text-blue-500 text-2xl" />,
    bgColor: 'bg-blue-50',
  },
  {
    id: 2,
    title: 'Total Student',
    count: overviewData?.totalStudents || 0,
    icon: <FaUserGraduate className="text-orange-500 text-2xl" />,
    bgColor: 'bg-orange-50',
  },
  {
    id: 3,
    title: 'Total Group',
    count: overviewData?.totalGroups || 0,
    icon: <FaUsers className="text-purple-500 text-2xl" />,
    bgColor: 'bg-purple-50',
  },
  {
    id: 4,
    title: 'Learning Materials',
    count: overviewData?.totalLearningMaterials || 0,
    icon: <FaBookOpen className="text-red-500 text-2xl" />,
    bgColor: 'bg-red-50',
  },
];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {statsData?.map((stat:any) => (
                <div key={stat.id} className="bg-white p-6 rounded-lg shadow-sm flex items-center space-x-4">
                    <div className={`p-4 rounded-lg ${stat.bgColor}`}>{stat.icon}</div>
                    <div>
                        <h2 className="text-2xl font-bold text-gray-800">{stat.count}</h2>
                        <p className="text-gray-500 text-sm">{stat.title}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default StatsCards;
