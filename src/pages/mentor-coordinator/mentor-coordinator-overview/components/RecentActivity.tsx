import { recentActivityData } from '../../../../constants/mentor-coordinator-data';

const RecentActivity = () => {
    return (
        <div className="bg-white p-4 pb-5 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold text-gray-700 mb-6">Recent Activity</h2>
            <div className="space-y-4">
                {recentActivityData.map((activity) => (
                    <div key={activity.id} className="flex items-center space-x-4">
                        <div className={`p-3 rounded-lg ${activity.bgColor}`}>{activity.icon}</div>
                        <div>
                            <h3 className="font-semibold text-gray-800 text-sm">{activity.title}</h3>
                            <p className="text-xs text-gray-500">{activity.subTitle}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RecentActivity;
