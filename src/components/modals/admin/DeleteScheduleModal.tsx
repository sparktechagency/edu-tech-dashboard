import { Modal } from 'antd';
import { X } from 'lucide-react';

interface DeleteScheduleModalProps {
    open: boolean;
    onCancel: () => void;
    onDelete: () => void;
}

const DeleteScheduleModal = ({ open, onCancel, onDelete }: DeleteScheduleModalProps) => {
    return (
        <Modal
            title={null}
            open={open}
            onCancel={onCancel}
            footer={null}
            width={500}
            closeIcon={null}
            centered
            styles={{
                content: {
                    padding: '24px',
                    borderRadius: '16px',
                },
            }}
        >
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-gray-800">Delete Class Schedule</h2>
                <button onClick={onCancel} className="text-gray-400 hover:text-gray-600 transition-colors">
                    <X size={20} />
                </button>
            </div>

            <div className="space-y-6">
                <p className="text-gray-600">
                    Are you sure you want to delete this class schedule? This action will permanently delete the class
                    schedule from the system and cannot be undone.
                </p>

                <div className="flex justify-end gap-3 pt-2">
                    <button
                        onClick={onCancel}
                        className="px-6 py-2 rounded-lg bg-gray-50 border border-gray-200 text-gray-600 font-medium hover:bg-gray-100 transition-colors"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={onDelete}
                        className="px-6 py-2 rounded-lg bg-[#FF4D4F] text-white font-medium hover:bg-[#ff7875] transition-colors"
                    >
                        Delete
                    </button>
                </div>
            </div>
        </Modal>
    );
};

export default DeleteScheduleModal;
