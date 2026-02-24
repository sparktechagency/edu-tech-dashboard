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
                    <InfoRow label="Phone" value={student.phone} />
                    <InfoRow label="Group" value={student.groups?.[0]} isTag />
                    <InfoRow
                        label="Status"
                        value={student.status}
                        isTag
                        tagColor={student.status === 'Active' ? '#f6ffed' : '#fff7e6'}
                    />
                    <InfoRow label="Bio" value={student.bio} />
                    <InfoRow label="Birth Date" value={student.birthDate} />
                    <InfoRow label="V Number" value={student.vNumber} />
                    <InfoRow label="Gender" value={student.gender} />
                    <InfoRow label="Highest Education" value={student.highestEducation} />
                    <InfoRow label="Programming Experience" value={student.programmingExperience} />
                </div>

                {/* Motivation Section */}
                <SectionHeader title="Motivation" />
                <div className="border border-gray-100 rounded-xl overflow-hidden mb-6">
                    <InfoRow label="Career Directions" value={student.careerDirections} />
                    <InfoRow label="Hours per Week" value={student.hoursPerWeek} />
                    <InfoRow label="Has Laptop" value={student.hasLaptop} />
                    <InfoRow label="Hobbies & Interests" value={student.hobbies} />
                </div>

                {/* Address Information Section */}
                <SectionHeader title="Address Information" />
                <div className="border border-gray-100 rounded-xl overflow-hidden mb-6">
                    <InfoRow label="City" value={student.city} />
                    <InfoRow label="Zip Code" value={student.zipCode} />
                    <InfoRow label="Street Address" value={student.streetAddress} />
                </div>

                {/* Administration Information Section */}
                <SectionHeader title="Administration Information" />
                <div className="border border-gray-100 rounded-xl overflow-hidden mb-6">
                    <InfoRow label="Contact Person/Case Manager" value={student.caseManager} />
                    <InfoRow label="V-Number" value={student.vNumber} />
                    <InfoRow label="Notes" value={student.notes} />
                    <InfoRow label="LinkedIn" value={student.linkedin} />
                    <InfoRow label="GitHub" value={student.github} />
                    <InfoRow label="Street Address" value={student.streetAddress} />
                </div>
            </div>
        </Modal>
    );
};

export default StudentDetailsModal;
