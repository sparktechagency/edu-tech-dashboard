import { GraduationCap, Link2, Users, User, Activity } from 'lucide-react';
import { useGetOverviewQuery, useGetRecentActivityQuery } from '../../../redux/apiSlices/admin/adminOverviewApi';
import moment from 'moment';

function AdminOverview() {
    const { data: overview } = useGetOverviewQuery(undefined);
    const { data: activity } = useGetRecentActivityQuery(undefined);
    const totalOverview = overview?.data;
    const recentActivity = activity?.data;

    const statsData = [
        {
            title: 'Total Users',
            value: totalOverview?.total,
            icon: <Users className="text-blue-500" size={20} />,
            bgColor: 'bg-blue-50',
        },
        {
            title: 'Students',
            value: totalOverview?.totalStudents,
            icon: <GraduationCap className="text-green-500" size={20} />,
            bgColor: 'bg-green-50',
        },
        {
            title: 'Mentors',
            value: totalOverview?.totalMentors,
            icon: <User className="text-purple-500" size={20} />,
            bgColor: 'bg-purple-50',
        },
        {
            title: 'Teachers',
            value: totalOverview?.totalTeachers,
            icon: <Link2 className="text-red-500" size={20} />,
            bgColor: 'bg-red-50',
        },
    ];
    return (
        <div className=" space-y-4">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {statsData.map((stat, index) => (
                    <div
                        key={index}
                        className="bg-white p-6 rounded-xl border border-gray-100 flex justify-between items-start shadow-sm"
                    >
                        <div>
                            <p className="text-sm text-gray-500 mb-1">{stat.title}</p>
                            <h2 className="text-3xl font-bold text-gray-900">{stat.value}</h2>
                        </div>
                        <div className={`p-3 rounded-lg ${stat.bgColor}`}>{stat.icon}</div>
                    </div>
                ))}
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
                <div className="p-6 border-b border-gray-100">
                    <div className="flex items-center gap-2">
                        <Activity className="text-gray-600" size={20} />
                        <h3 className="text-lg font-semibold text-gray-900">Recent Activity</h3>
                    </div>
                </div>
                <div className="divide-y divide-gray-50">
                    {recentActivity?.map(
                        (activity: { _id: number; title: string; activityType: string; createdAt: string }) => (
                            <div
                                key={activity._id}
                                className="p-4 hover:bg-gray-50 transition-colors flex items-center justify-between"
                            >
                                <div className="flex items-center gap-4">
                                    <div
                                        className={`p-2 rounded-full ${activity.activityType === 'event' ? 'bg-green-50 text-green-500' : 'bg-purple-50 text-purple-500'}`}
                                    >
                                        {activity.activityType === 'event' ? (
                                            <GraduationCap size={18} />
                                        ) : (
                                            <User size={18} />
                                        )}
                                    </div>
                                    <p className="text-gray-700">
                                        <span className="font-semibold text-gray-900">{activity.title}</span>
                                    </p>
                                </div>
                                <p className="text-sm text-gray-400">
                                    <span>{moment(activity.createdAt).format('DD MMM')}</span>
                                    <span className="ml-2">{moment(activity.createdAt).format('h:mm A')}</span>
                                </p>
                            </div>
                        ),
                    )}
                </div>
            </div>
        </div>
    );
}

export default AdminOverview;
