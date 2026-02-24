import React from 'react';
import { Modal, Button, Tag } from 'antd';
import { X, Edit3 } from 'lucide-react';

interface MentorDetailsModalProps {
    open: boolean;
    onCancel: () => void;
    mentor: any;
    onEditHours: () => void;
}

const MentorDetailsModal: React.FC<MentorDetailsModalProps> = ({ open, onCancel, mentor, onEditHours }) => {
    if (!mentor) return null;

    const details = [
        { label: 'First Name', value: mentor.firstName },
        { label: 'Last Name', value: mentor.lastName },
        { label: 'Email', value: mentor.email },
        { label: 'Phone', value: mentor.phone },
        { label: 'Bio', value: mentor.bio },
        { label: 'Company', value: mentor.company },
        { label: 'Job Title', value: mentor.jobTitle },
        { label: 'Location', value: mentor.location },
        { label: 'Gender', value: mentor.gender },
        { label: 'Preferred Group', value: mentor.preferredGroup },
        {
            label: 'Status',
            value: (
                <Tag
                    color="success"
                    className="px-3 py-0.5 rounded-full border-none bg-[#e6f7e9] text-[#52c41a] font-medium"
                >
                    {mentor.status}
                </Tag>
            ),
        },
    ];

    return (
        <Modal
            title={<span className="text-xl font-semibold text-[#18212d]">Mentor Details</span>}
            open={open}
            onCancel={onCancel}
            footer={false}
            closeIcon={<X size={20} />}
            width={700}
            centered
        >
            <div className="border border-gray-100 rounded-lg overflow-hidden mt-6 mb-8">
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
                                <td className="py-4 px-6 text-gray-700 font-medium">{item.value}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="mb-4 px-2">
                <h3 className="font-bold text-[#18212d] mb-4 text-base">Available Hours Management</h3>
                <div className="flex justify-between items-center bg-gray-50/30 p-4 rounded-lg border border-gray-50">
                    <div>
                        <p className="text-gray-400 text-xs font-semibold mb-1 uppercase tracking-wider">
                            Total Available Hours
                        </p>
                        <p className="text-gray-800 font-medium">{mentor.totalHours} hours available</p>
                    </div>
                    <Button
                        icon={<Edit3 size={14} />}
                        className="flex items-center gap-2 h-9 border-gray-200 text-gray-600 rounded-md px-4"
                        onClick={onEditHours}
                    >
                        Edit Hours
                    </Button>
                </div>
            </div>
        </Modal>
    );
};

export default MentorDetailsModal;
