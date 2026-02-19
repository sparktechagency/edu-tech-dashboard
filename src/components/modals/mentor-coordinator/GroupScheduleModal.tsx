import React from 'react';
import { Modal, Button } from 'antd';
import { GroupSchedule } from '../../../constants/mentor-coordinator-data';

interface GroupScheduleModalProps {
    isOpen: boolean;
    onClose: () => void;
    schedule: GroupSchedule | undefined;
}

const GroupScheduleModal: React.FC<GroupScheduleModalProps> = ({ isOpen, onClose, schedule }) => {
    if (!schedule) return null;

    return (
        <Modal
            title={<span className="text-xl font-semibold">Class Details</span>}
            open={isOpen}
            onCancel={onClose}
            footer={[
                <Button key="back" onClick={onClose} className="px-8">
                    Cancel
                </Button>,
            ]}
            width={600}
            centered
            className="group-schedule-details-modal"
        >
            <div className="mt-4 border border-gray-100 rounded-lg overflow-hidden">
                <div className="flex border-b border-gray-100 last:border-b-0">
                    <div className="w-1/3 p-4 bg-gray-50 text-gray-400 font-medium">Title</div>
                    <div className="w-2/3 p-4 bg-white text-gray-700">{schedule.title}</div>
                </div>

                <div className="flex border-b border-gray-100 last:border-b-0">
                    <div className="w-1/3 p-4 bg-gray-50 text-gray-400 font-medium">Date</div>
                    <div className="w-2/3 p-4 bg-white text-gray-700">{schedule.date}</div>
                </div>

                <div className="flex border-b border-gray-100 last:border-b-0">
                    <div className="w-1/3 p-4 bg-gray-50 text-gray-400 font-medium">Time</div>
                    <div className="w-2/3 p-4 bg-white text-gray-700">{schedule.time}</div>
                </div>

                <div className="flex border-b border-gray-100 last:border-b-0">
                    <div className="w-1/3 p-4 bg-gray-50 text-gray-400 font-medium">Group/Track</div>
                    <div className="w-2/3 p-4 bg-white flex gap-2">
                        <p className="border-0 text-[#387742] bg-[#D0F3D5] rounded-full px-4 py-1 w-fit font-medium text-xs">
                            {schedule.group}
                        </p>
                        <p className="border-0 text-[#71717A] bg-[#F6F6F6] rounded-full px-4 py-1 w-fit font-medium text-xs">
                            {schedule.track}
                        </p>
                    </div>
                </div>

                <div className="flex border-b border-gray-100 last:border-b-0">
                    <div className="w-1/3 p-4 bg-gray-50 text-gray-400 font-medium">Location</div>
                    <div className="w-2/3 p-4 bg-white text-gray-700">{schedule.location}</div>
                </div>

                <div className="flex border-b border-gray-100 last:border-b-0">
                    <div className="w-1/3 p-4 bg-gray-50 text-gray-400 font-medium">Sources</div>
                    <div className="w-2/3 p-4 bg-white text-gray-700">{schedule.sources}</div>
                </div>

                <div className="flex border-b border-gray-100 last:border-b-0">
                    <div className="w-1/3 p-4 bg-gray-50 text-gray-400 font-medium">Status</div>
                    <div className="w-2/3 p-4 bg-white">
                        <p className="border-0 text-[#387742] bg-[#D0F3D5] rounded-full px-4 py-1 w-fit font-medium text-xs">
                            {schedule.status}
                        </p>
                    </div>
                </div>
            </div>
        </Modal>
    );
};

export default GroupScheduleModal;
