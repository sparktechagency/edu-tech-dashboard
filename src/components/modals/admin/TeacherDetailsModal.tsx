import React from 'react';
import { Modal, Button } from 'antd';
import { X } from 'lucide-react';

interface TeacherDetailsModalProps {
    open: boolean;
    onCancel: () => void;
    teacher: any;
}

const TeacherDetailsModal: React.FC<TeacherDetailsModalProps> = ({ open, onCancel, teacher }) => {
    if (!teacher) return null;

    const details = [
        { label: 'First Name', value: teacher.firstName || 'mentortest' },
        { label: 'Last Name', value: teacher.lastName || 'mentortest' },
        { label: 'Email', value: teacher.email || 'mentortest@share-network.org' },
        { label: 'Phone', value: teacher.phone || '+31635699002' },
        { label: 'Groups', value: teacher.groups?.length > 0 ? teacher.groups.join(', ') : 'No groups' },
        { label: 'Track', value: teacher.track || 'Data' },
        { label: 'Bio', value: teacher.bio || 'No bio provided' },
        { label: 'LinkedIn', value: teacher.linkedin || 'Not provided' },
        { label: 'GitHub', value: teacher.github || 'Male' }, // Image shows 'Male' in GitHub row, likely a placeholder or mapping error in mock
        { label: 'Portfolio', value: teacher.portfolio || 'Not provided' },
    ];

    return (
        <Modal
            title={<span className="text-xl font-semibold">Teacher Details</span>}
            open={open}
            onCancel={onCancel}
            footer={[
                <Button key="cancel" onClick={onCancel} className="px-8 h-10 border-gray-300 rounded-md">
                    Cancel
                </Button>,
            ]}
            closeIcon={<X size={20} />}
            width={700}
        >
            <div className="border border-gray-100 rounded-lg overflow-hidden mt-4">
                <table className="w-full text-sm">
                    <tbody>
                        {details.map((item, index) => (
                            <tr
                                key={index}
                                className={`${index !== details.length - 1 ? 'border-b border-gray-100' : ''}`}
                            >
                                <td className="py-4 px-6 bg-gray-50/50 text-gray-500 w-1/3 font-medium">
                                    {item.label}
                                </td>
                                <td className="py-4 px-6 text-gray-700">{item.value}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </Modal>
    );
};

export default TeacherDetailsModal;
