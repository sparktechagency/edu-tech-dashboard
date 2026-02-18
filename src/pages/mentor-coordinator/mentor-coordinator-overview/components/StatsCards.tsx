import { statsData } from '../../../../constants/mentor-coordinator-data';

const StatsCards = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {statsData.map((stat) => (
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
