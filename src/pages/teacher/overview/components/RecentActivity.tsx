import { FaGraduationCap } from 'react-icons/fa';
import { teacherRecentActivityData } from '../../../../constants/teacher-data';

const iconMap: Record<string, React.ReactNode> = {
    graduation: <FaGraduationCap className="text-purple-500 text-xl" />,
};

const RecentActivity = () => {
    return (
        <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-50 mt-4">
            <h2 className="text-lg font-semibold text-gray-600 mb-2 font-heading">Recent Activity</h2>
            <div className="space-y-2">
                {teacherRecentActivityData.map((activity) => (
                    <div
                        key={activity.id}
                        className="flex items-center space-x-4 p-3 rounded-xl transition-all hover:bg-gray-50"
                    >
                        <div className={`p-3 rounded-lg ${activity.bgColor} flex items-center justify-center`}>
                            {iconMap[activity.iconType] || null}
                        </div>
                        <div>
                            <h3 className="font-medium text-gray-800 text-sm">{activity.title}</h3>
                            <p className="text-gray-400 text-xs mt-0.5">{activity.subTitle}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RecentActivity;
