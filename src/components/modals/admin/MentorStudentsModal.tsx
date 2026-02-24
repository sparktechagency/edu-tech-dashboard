import React from 'react';
import { Modal, Button } from 'antd';
import { X, GraduationCap } from 'lucide-react';

interface MentorStudentsModalProps {
    open: boolean;
    onCancel: () => void;
    mentor: any;
}

const MentorStudentsModal: React.FC<MentorStudentsModalProps> = ({ open, onCancel, mentor }) => {
    return (
        <Modal
            title={
                <div className="flex items-center gap-2">
                    <GraduationCap size={20} className="text-[#18212d]" />
                    <span className="text-xl font-semibold text-[#18212d]">
                        Students of {mentor?.firstName} {mentor?.lastName}
                    </span>
                </div>
            }
            open={open}
            onCancel={onCancel}
            footer={[
                <Button
                    key="cancel"
                    onClick={onCancel}
                    className="px-8 h-10 border-gray-300 rounded-md font-medium text-gray-500"
                >
                    Cancel
                </Button>,
            ]}
            closeIcon={<X size={20} />}
            width={600}
            centered
        >
            <div className="py-10 text-center">
                <p className="text-gray-500 text-lg">No matched students for this mentor.</p>
            </div>
        </Modal>
    );
};

export default MentorStudentsModal;
