import React from 'react';
import { Modal, Button, Progress, Divider, Tag } from 'antd';
import { X, Target, HelpCircle, Calendar, BarChart2 } from 'lucide-react';

interface GoalDetailsModalProps {
    open: boolean;
    onCancel: () => void;
    goal: any;
}

const GoalDetailsModal: React.FC<GoalDetailsModalProps> = ({ open, onCancel, goal }) => {
    if (!goal) return null;

    return (
        <Modal
            title={<span className="text-xl font-semibold">Goal Details</span>}
            open={open}
            onCancel={onCancel}
            footer={[
                <Button key="close" onClick={onCancel} className="px-8 h-10 border-gray-300 rounded-md">
                    Close
                </Button>,
            ]}
            closeIcon={<X size={20} />}
            width={600}
            centered
        >
            <div className="py-4">
                <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-blue-50 text-blue-500 rounded-xl font-bold">
                        <Target size={24} />
                    </div>
                    <div>
                        <h2 className="text-xl font-bold text-gray-800">{goal.part}</h2>
                        <p className="text-gray-500">Student: {goal.studentName}</p>
                    </div>
                </div>

                <Divider className="my-6" />

                <div className="space-y-6">
                    <div>
                        <div className="flex items-center gap-2 mb-2 text-gray-400">
                            <HelpCircle size={18} />
                            <span className="text-xs font-medium uppercase tracking-wider">Question</span>
                        </div>
                        <p className="text-gray-700 font-medium text-lg">{goal.question}</p>
                    </div>

                    <div className="grid grid-cols-2 gap-8">
                        <div>
                            <div className="flex items-center gap-2 mb-2 text-gray-400">
                                <BarChart2 size={18} />
                                <span className="text-xs font-medium uppercase tracking-wider">Status</span>
                            </div>
                            <Tag
                                color={
                                    goal.status === 'Completed'
                                        ? 'success'
                                        : goal.status === 'In Progress'
                                          ? 'processing'
                                          : 'warning'
                                }
                                className="rounded-full px-4 text-sm py-0.5"
                            >
                                {goal.status}
                            </Tag>
                        </div>
                        <div>
                            <div className="flex items-center gap-2 mb-2 text-gray-400">
                                <Calendar size={18} />
                                <span className="text-xs font-medium uppercase tracking-wider">Due Date</span>
                            </div>
                            <p className="text-gray-700 font-bold">{goal.dueDate}</p>
                        </div>
                    </div>

                    <div>
                        <div className="flex justify-between items-center mb-2">
                            <span className="text-xs text-gray-400 font-medium uppercase tracking-wider">Progress</span>
                            <span className="text-sm font-bold text-gray-800">{goal.progress}%</span>
                        </div>
                        <Progress percent={goal.progress} strokeColor="#52c41a" />
                    </div>
                </div>
            </div>
        </Modal>
    );
};

export default GoalDetailsModal;
