import { Avatar } from 'antd';
import { useProfileQuery } from '../../../../redux/apiSlices/authSlice';
import { imageUrl } from '../../../../redux/api/baseApi';

const MentorProfileCard = () => {
    const { data } = useProfileQuery({});

    const mentor = data?.data?.data ?? data?.data ?? data;
    return (
        <div className="bg-white p-6 rounded-xl border border-gray-100 flex items-center gap-6 mb-6">
            <div className="relative">
                <Avatar
                    size={100}
                    src={mentor?.profile ? imageUrl + mentor?.profile : undefined}
                    className="border-2 border-white shadow-md"
                />
            </div>

            <div className="flex-1">
                <div className="flex justify-between items-start mb-1">
                    <div>
                        <h2 className="text-xl font-bold text-gray-800">{mentor?.name}</h2>
                        <span className="text-green-600 font-medium text-sm">{mentor?.role}</span>
                    </div>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed max-w-4xl">
                    Helping aspiring developers navigate the journey from code newbie to professional engineer.
                    Specializing in cloud architecture and scalable frontend patterns.
                </p>
            </div>
        </div>
    );
};

export default MentorProfileCard;
