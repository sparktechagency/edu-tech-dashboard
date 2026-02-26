import { Modal } from 'antd';
import React from 'react';
interface GoalSuccessModalProps {
    onClose: () => void;
    isOpen: boolean;
}

const GoalSuccessModal: React.FC<GoalSuccessModalProps> = ({ onClose, isOpen }) => {
    return (
        <Modal open={isOpen} onCancel={onClose} footer={null} width={600} centered>
            <div className="w-full flex items-center justify-center">
                <div className="max-w-[510px] flex flex-col items-center text-center space-y-6">
                    <div className="relative">
                        <div className="w-32 h-32 bg-[#D0F3D5] rounded-full flex items-center justify-center">
                            <span className="text-6xl">👍</span>
                        </div>
                    </div>

                    <div className="space-y-3">
                        <h2 className="text-[28px] font-bold text-[#444141] leading-tight">
                            Thank you for filling in the Discovery Goal Test.
                        </h2>
                        <p className="text-lg text-[#757474] font-medium">You will see your results within 14 days</p>
                    </div>
                </div>
            </div>
        </Modal>
    );
};

export default GoalSuccessModal;
