import { Modal, Avatar, Button } from 'antd';
import { IoCloseOutline } from 'react-icons/io5';

interface StudentDetailsModalProps {
    visible: boolean;
    onClose: () => void;
    student: any;
}

const StudentDetailsModal: React.FC<StudentDetailsModalProps> = ({ visible, onClose, student }) => {
    if (!student) return null;

    const details = [
        { label: 'Name', value: student.name },
        { label: 'Contact', value: student.contact },
        { label: 'Group', value: student.group, isTag: true, tagColor: '#E6F9F0', textColor: '#22C55E' },
        { label: 'Track', value: student.track, isTag: true, tagColor: '#F3F4F6', textColor: '#6B7280' },
        { label: 'Joined', value: student.joined },
        { label: 'Action', value: student.status, isTag: true, tagColor: '#E6F9F0', textColor: '#22C55E' },
    ];

    return (
        <Modal
            open={visible}
            onCancel={onClose}
            footer={null}
            closeIcon={<IoCloseOutline size={24} className="text-gray-500" />}
            width={600}
            centered
            className="student-details-modal"
        >
            <div className="flex items-center gap-4 mb-4 ">
                <Avatar size={64} src={student.avatar} style={{ border: '2px solid #F3F4F6' }} />
                <div>
                    <h2 className="text-xl font-semibold text-gray-800 m-0 leading-tight">{student.name}</h2>
                    <p className="text-gray-500 m-0">{student.email}</p>
                </div>
            </div>

            <div className="border border-[#E5E7EB] rounded-lg overflow-hidden">
                {details.map((item, index) => (
                    <div
                        key={index}
                        className={`flex items-center min-h-[56px] ${index !== details.length - 1 ? 'border-b border-[#E5E7EB]' : ''}`}
                    >
                        <div className="w-1/2 px-6 py-4 bg-[#F9FAFB] text-gray-500 font-medium border-r border-[#E5E7EB]">
                            {item.label}
                        </div>
                        <div className="w-1/2 px-6 py-4 text-gray-800">
                            {item.isTag ? (
                                <span
                                    className="px-3 py-1 rounded-full text-sm font-medium"
                                    style={{ backgroundColor: item.tagColor, color: item.textColor }}
                                >
                                    {item.value}
                                </span>
                            ) : (
                                item.value
                            )}
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex justify-end mt-8">
                <Button
                    onClick={onClose}
                    className="px-8 h-10 rounded-lg border-gray-200 text-gray-600 font-medium hover:text-gray-800 hover:border-gray-800"
                >
                    Cancel
                </Button>
            </div>
        </Modal>
    );
};

export default StudentDetailsModal;
