import { useContext, useState } from 'react';
import { Button, Avatar } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import { UserContext } from '../../../provider/User';
import { imageUrl } from '../../../redux/api/baseApi';
import EditProfile from './components/EditProfile';

export default function MentorCoordinatorProfile() {
    const user = useContext(UserContext);
    const [isEditing, setIsEditing] = useState(false);

    if (isEditing) {
        return (
            <div className="">
                <div className="flex justify-between items-center mb-6">
                    <div>
                        <h2 className="text-xl font-semibold text-[#333333]">Edit Profile</h2>
                        <p className="text-gray-500 text-sm">Update your professional information and mentor profile</p>
                    </div>
                    <Button onClick={() => setIsEditing(false)}>Back to Profile</Button>
                </div>
                <EditProfile onCancel={() => setIsEditing(false)} />
            </div>
        );
    }

    const profilePic = user?.profilePic?.startsWith('http') ? user?.profilePic : `${imageUrl}${user?.profilePic}`;

    const infoItem = (label: string, value: string | undefined) => (
        <div className="mb-4">
            <span className="text-gray-500 text-sm block mb-1">{label}</span>
            <div className="bg-gray-50 p-3 rounded-md border border-gray-100 min-h-[48px] flex items-center">
                <span className="text-[#333333]">{value || 'N/A'}</span>
            </div>
        </div>
    );

    return (
        <div className="">
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h2 className="text-2xl font-bold text-[#333333]">Profile</h2>
                    <p className="text-gray-500 text-sm">Manage your professional information and mentor profile</p>
                </div>
                <Button
                    icon={<EditOutlined />}
                    onClick={() => setIsEditing(true)}
                    className="flex items-center h-10 px-6 rounded-md"
                >
                    Edit Profile
                </Button>
            </div>

            {/* Profile Summary Card */}
            <div className="bg-white p-5 rounded-xl border border-gray-200 inline-flex items-center gap-5 mb-10 shadow-sm min-w-[320px]">
                <Avatar
                    shape="square"
                    size={80}
                    src={user?.profilePic ? profilePic : undefined}
                    className="rounded-lg shadow-sm"
                />
                <div>
                    <h3 className="text-lg font-bold text-[#333333]">{user?.name}</h3>
                    <p className="text-gray-500 text-sm">{user?.email}</p>
                    <span className="text-green-600 font-semibold text-sm mt-1 block px-3 py-0.5 bg-green-50 rounded-full w-fit border border-green-100">
                        {user?.role}
                    </span>
                </div>
            </div>

            {/* About Me */}
            <div className="mb-10">
                <h3 className="text-lg font-bold text-[#333333] mb-4">About Me</h3>
                <div className="bg-white p-8 rounded-xl border border-gray-200 min-h-[140px] flex items-center justify-center shadow-sm">
                    {user?.aboutMe ? (
                        <p className="text-gray-700 leading-relaxed text-left w-full">{user.aboutMe}</p>
                    ) : (
                        <p className="text-gray-400 italic">No bio Available</p>
                    )}
                </div>
            </div>

            {/* Basic Information */}
            <div className="mb-10">
                <h3 className="text-lg font-bold text-[#333333] mb-4">Basic Information</h3>
                <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-2">
                        {infoItem('Full Name', user?.name)}
                        {infoItem('Email', user?.email)}
                        {infoItem('Professional Title', user?.professionalTitle)}
                        {infoItem('Preferred Group', user?.preferredGroup)}
                        {infoItem('Phone', user?.contact)}
                        {infoItem('Available Hours', user?.availableHours)}
                    </div>
                </div>
            </div>

            {/* Links */}
            <div className="mb-10">
                <h3 className="text-lg font-bold text-[#333333] mb-4">Links</h3>
                <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-2">
                        {infoItem('Linkedin Profile', user?.linkedin)}
                        {infoItem('GitHub Profile', user?.github)}
                        {infoItem('Personal Website', user?.personalWebsite)}
                    </div>
                </div>
            </div>

            {/* Address Information */}
            <div className="mb-10">
                <h3 className="text-lg font-bold text-[#333333] mb-4">Address Information</h3>
                <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-2">
                        {infoItem('City', user?.city)}
                        {infoItem('Zip Code', user?.zipCode)}
                        {infoItem('Street Address', user?.streetAddress)}
                    </div>
                </div>
            </div>
        </div>
    );
}
