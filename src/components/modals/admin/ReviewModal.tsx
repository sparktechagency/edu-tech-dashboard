import React from 'react';
import { Modal, Button, Avatar, Progress, Rate, Input } from 'antd';
import { X, CheckCircle, Edit3, Trash2 } from 'lucide-react';
import HeaderTitle from '../../shared/HeaderTitle';

interface ReviewModalProps {
    open: boolean;
    onCancel: () => void;
    student: any;
}

const ReviewModal: React.FC<ReviewModalProps> = ({ open, onCancel, student }) => {
    if (!student) return null;

    return (
        <Modal
            title={<HeaderTitle title="Review" />}
            open={open}
            onCancel={onCancel}
            footer={null}
            closeIcon={<X size={24} />}
            width={1000}
            centered
            className="review-modal"
        >
            <div className="flex gap-8 py-6">
                {/* Step 01: REVIEW */}
                <div className="w-1/2 pr-8 border-r border-gray-100">
                    <div className="mb-6">
                        <span className="text-[#722ed1] font-bold text-sm tracking-wider uppercase">
                            Step 01: REVIEW
                        </span>
                        <h4 className="text-xl font-bold text-gray-800 mt-1">Discovery Test Results</h4>
                        <p className="text-gray-400 text-sm">Review {student.name}'s answers before setting goals.</p>
                    </div>

                    <div className="p-4 border border-gray-100 rounded-xl mb-6">
                        <div className="flex items-center gap-3">
                            <Avatar src={student.avatar} size={48} className="bg-[#f6ffed]" />
                            <div>
                                <div className="font-bold text-gray-800">{student.name}</div>
                                <div className="text-xs text-gray-400">Student</div>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div className="p-4 border border-blue-50 bg-blue-50/20 rounded-xl relative">
                            <div className="text-xs font-bold text-blue-600 mb-1 uppercase">Question 1</div>
                            <div className="font-bold text-gray-800 text-sm mb-2">
                                What is your primary motivation for taking this Assignment?
                            </div>
                            <div className="text-gray-500 text-sm bg-white p-3 rounded-md border-l-4 border-blue-500 italic">
                                I want to transition from a marketing role to software development to build my own SaaS
                                products.
                            </div>
                        </div>

                        <div className="p-4 border border-gray-100 rounded-xl relative">
                            <div className="text-xs font-bold text-gray-400 mb-1 uppercase">Question 2</div>
                            <div className="font-bold text-gray-800 text-sm mb-2">
                                What is your preferred learning style?
                            </div>
                            <div className="text-gray-500 text-sm bg-white p-3 rounded-md border-l-4 border-gray-200 italic">
                                I learn best by doing. I need practical projects rather than just theory.
                            </div>
                        </div>
                    </div>
                </div>

                {/* Step 02: ACTION */}
                <div className="w-1/2">
                    <div className="mb-6">
                        <span className="text-[#722ed1] font-bold text-sm tracking-wider uppercase">
                            Step 02: ACTION
                        </span>
                        <h4 className="text-xl font-bold text-gray-800 mt-1">Set Goals & Progress</h4>
                    </div>

                    <div className="space-y-4 mb-8">
                        <div className="flex items-center gap-2 mb-2">
                            <CheckCircle size={20} className="text-[#52c41a]" />
                            <span className="font-bold text-gray-700">Define Goals</span>
                        </div>

                        <div className="p-4 bg-[#f9f9fc] rounded-xl flex justify-between items-center relative">
                            <span className="font-medium text-gray-700">Complete Module 4: React Basics</span>
                            <div className="flex items-center gap-2">
                                <Edit3 size={16} className="text-[#52c41a] cursor-pointer" />
                                <Trash2 size={16} className="text-[#ff4d4f] cursor-pointer" />
                            </div>
                        </div>

                        <div className="p-4 bg-[#f9f9fc] rounded-xl flex justify-between items-center relative">
                            <span className="font-medium text-gray-700">Build a personal portfolio website</span>
                            <div className="flex items-center gap-2">
                                <Edit3 size={16} className="text-[#52c41a] cursor-pointer" />
                                <Trash2 size={16} className="text-[#ff4d4f] cursor-pointer" />
                            </div>
                        </div>

                        <div className="flex gap-2">
                            <Input placeholder="e.g...." className="h-12 bg-[#f9f9f9] border-none rounded-xl" />
                            <Button
                                type="primary"
                                className="h-12 bg-[#52c41a] border-none rounded-xl font-bold px-6 flex items-center gap-2"
                            >
                                Add
                            </Button>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-8">
                        <div className="p-4 border border-gray-100 rounded-xl relative">
                            <div className="font-bold text-gray-800 text-sm mb-1">Assignment Completion</div>
                            <div className="text-[10px] text-gray-400 mb-3">
                                Solely reflects how far the student is with the material.
                            </div>
                            <div className="text-center font-bold text-gray-400 text-xs mb-1">45%</div>
                            <Progress percent={45} showInfo={false} strokeColor="#52c41a" trailColor="#e6f7ff" />
                            <div className="text-center text-[10px] text-gray-300 mt-2 italic">
                                Admin: Drag bar to update
                            </div>
                        </div>

                        <div className="p-4 border border-gray-100 rounded-xl">
                            <div className="font-bold text-gray-800 text-sm mb-1">General Performance</div>
                            <div className="text-[10px] text-gray-400 mb-4">
                                Overview of how the student is performing in general.
                            </div>
                            <Rate defaultValue={4} className="text-[#faad14] mb-2" />
                            <div className="flex justify-between items-center mt-2">
                                <span className="text-xs font-bold text-gray-300">4/5 stars</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-end gap-3 mt-8">
                        <Button
                            onClick={onCancel}
                            className="px-10 h-12 border-gray-100 text-gray-600 rounded-xl font-bold"
                        >
                            Cancel
                        </Button>
                        <Button
                            type="primary"
                            onClick={onCancel}
                            className="px-10 h-12 bg-[#52c41a] border-none hover:bg-[#73d13d] rounded-xl font-bold"
                        >
                            Save
                        </Button>
                    </div>
                </div>
            </div>
        </Modal>
    );
};

export default ReviewModal;
