import React from 'react';
import { Modal, Tag } from 'antd';
import { X } from 'lucide-react';

interface StudentDetailsModalProps {
    open: boolean;
    onCancel: () => void;
    student: any;
}

const StudentDetailsModal: React.FC<StudentDetailsModalProps> = ({ open, onCancel, student }) => {
    if (!student) return null;

    const InfoRow = ({
        label,
        value,
        isTag,
        tagColor,
    }: {
        label: string;
        value: any;
        isTag?: boolean;
        tagColor?: string;
    }) => (
        <div className="grid grid-cols-2 border-b border-gray-100 last:border-0 h-14 items-center">
            <div className="pl-6 text-gray-400 font-medium text-sm">{label}</div>
            <div className="pl-6 text-gray-600">
                {isTag ? (
                    <Tag
                        className="rounded-full px-4 border-none font-medium"
                        style={{
                            backgroundColor: tagColor || '#f5f5f5',
                            color: tagColor === '#f6ffed' ? '#52c41a' : tagColor === '#fff7e6' ? '#faad14' : '#666',
                        }}
                    >
                        {value}
                    </Tag>
                ) : (
                    <span className="font-medium text-sm">{value || 'Not provided'}</span>
                )}
            </div>
        </div>
    );

    const SectionHeader = ({ title }: { title: string }) => (
        <h3 className="text-gray-700 font-bold mb-4 mt-8 px-2">{title}</h3>
    );

    return (
        <Modal
            title={<span className="text-xl font-semibold">Student Details - {student.name}</span>}
            open={open}
            onCancel={onCancel}
            footer={null}
            closeIcon={<X size={20} />}
            width={800}
            centered
            className="student-details-modal"
        >
            <div className="py-2 max-h-[80vh] overflow-y-auto px-2">
                {/* Basic Section */}
                <div className="border border-gray-100 rounded-xl overflow-hidden mb-6">
                    <InfoRow label="First Name" value={student.firstName} />
                    <InfoRow label="Last Name" value={student.lastName} />
                    <InfoRow label="Email" value={student.email} />
                    <InfoRow label="Contact Number" value={student.contactNumber} />
                    <InfoRow label="Group" value={student.userGroup?.[0]?.name} isTag />
                    <InfoRow
                        label="Status"
                        value={student.verified ? 'Verified' : 'Unverified'}
                        isTag
                        tagColor={student.verified ? '#f6ffed' : '#fff7e6'}
                    />
                    <InfoRow label="About" value={student.about} />
                    <InfoRow label="V Number" value={student.vNumber} />
                    <InfoRow label="Gender" value={student.gender} />
                    <InfoRow label="Highest Education" value={student.highestEducation} />
                    <InfoRow label="Available Hours" value={student.aviliableHours} />
                </div>

                {/* Motivation Section */}
                <SectionHeader title="Motivation" />
                <div className="border border-gray-100 rounded-xl overflow-hidden mb-6">
                    <InfoRow label="Career Directions" value={student.careerDirections?.join(', ')} />
                    <InfoRow label="Note" value={student.note} />
                    <InfoRow label="Has Laptop" value={student.havealaptop ? 'Yes' : 'No'} />
                </div>

                {/* Portfolio & Socials Section */}
                <SectionHeader title="Portfolio & Socials" />
                <div className="border border-gray-100 rounded-xl overflow-hidden mb-6">
                    <InfoRow label="LinkedIn Profile" value={student.linkedInProfile} />
                    <InfoRow label="GitHub Profile" value={student.githubProfile} />
                    <InfoRow label="Portfolio Website" value={student.PortfolioWebsite} />
                </div>

                {/* Address Information Section */}
                <SectionHeader title="Address Information" />
                <div className="border border-gray-100 rounded-xl overflow-hidden mb-6">
                    <InfoRow label="Address" value={student.address} />
                </div>

                {/* Assigned Mentor Section */}
                {student.mentorId && (
                    <>
                        <SectionHeader title="Assigned Mentor" />
                        <div className="border border-gray-100 rounded-xl overflow-hidden mb-6">
                            <InfoRow
                                label="Mentor Name"
                                value={`${student.mentorId.firstName} ${student.mentorId.lastName}`}
                            />
                            <InfoRow label="Mentor Email" value={student.mentorId.email} />
                        </div>
                    </>
                )}
            </div>
        </Modal>
    );
};

export default StudentDetailsModal;
