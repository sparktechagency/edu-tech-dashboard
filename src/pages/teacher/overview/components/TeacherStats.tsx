import { FaUsers, FaCalendarAlt, FaBookOpen, FaChartLine } from 'react-icons/fa';
import { teacherStatsData } from '../../../../constants/teacher-data';

const iconMap: Record<string, React.ReactNode> = {
    users: <FaUsers className="text-blue-500 text-2xl" />,
    calendar: <FaCalendarAlt className="text-orange-500 text-2xl" />,
    book: <FaBookOpen className="text-purple-500 text-2xl" />,
    chart: <FaChartLine className="text-red-500 text-2xl" />,
};

const TeacherStats = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
            {teacherStatsData.map((stat) => (
                <div
                    key={stat.id}
                    className="bg-white p-4 rounded-xl shadow-sm border border-gray-50 flex items-center space-x-4 transition-all hover:shadow-md"
                >
                    <div className={`p-4 rounded-xl ${stat.bgColor} flex items-center justify-center`}>
                        {iconMap[stat.iconType] || null}
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold text-gray-800 leading-none">{stat.count}</h2>
                        <p className="text-gray-400 text-sm mt-1">{stat.title}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default TeacherStats;
