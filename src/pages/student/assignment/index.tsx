import { useState } from 'react';
import { Tabs } from 'antd';
import { mockAssignments, type Assignment, AssignmentStatus } from '../../../constants/student/assignments';
import { AssignmentCard } from './components/AssignmentCard';
import { AssignmentDetailsModal } from './components/AssignmentDetailsModal';

export default function StudentAssignment() {
    const [activeTab, setActiveTab] = useState<AssignmentStatus>('Pending');
    const [selectedAssignment, setSelectedAssignment] = useState<Assignment | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleCardClick = (assignment: Assignment) => {
        setSelectedAssignment(assignment);
        setIsModalOpen(true);
    };

    const filteredAssignments = mockAssignments.filter((assignment) => assignment.status === activeTab);

    const tabItems = [
        { key: 'Pending', label: 'Pending' },
        { key: 'In Process', label: 'In Process' },
        { key: 'Completed', label: 'Completed' },
    ];

    return (
        <section className="space-y-6">
            <div className="bg-white px-2 rounded-2xl border border-gray-100 shadow-sm">
                <Tabs
                    activeKey={activeTab}
                    onChange={(key) => setActiveTab(key as AssignmentStatus)}
                    items={tabItems}
                    className="assignment-tabs [&>.ant-tabs-nav]:mb-0 [&>.ant-tabs-nav::before]:border-none"
                />
            </div>

            <div className="grid grid-cols-1 gap-6">
                {filteredAssignments.length > 0 ? (
                    filteredAssignments.map((assignment) => (
                        <AssignmentCard key={assignment.id} assignment={assignment} onClick={handleCardClick} />
                    ))
                ) : (
                    <div className="bg-white p-12 rounded-2xl border border-gray-100 text-center">
                        <p className="text-[#94A3B8] text-lg font-medium">
                            No {activeTab.toLowerCase()} assignments found.
                        </p>
                    </div>
                )}
            </div>

            {/* Details & Submission Modal */}
            <AssignmentDetailsModal
                isOpen={isModalOpen}
                onCancel={() => setIsModalOpen(false)}
                assignment={selectedAssignment}
            />
        </section>
    );
}
