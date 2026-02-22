import { Modal, Button } from 'antd';

interface RemoveResourceModalProps {
    open: boolean;
    onCancel: () => void;
    onRemove: () => void;
    resourceName?: string;
}

const RemoveResourceModal = ({ open, onCancel, onRemove, resourceName }: RemoveResourceModalProps) => {
    return (
        <Modal
            title={<span className="text-xl font-bold">Remove Section</span>}
            open={open}
            onCancel={onCancel}
            footer={null}
            width={550}
            centered
            className="rounded-2xl"
        >
            <div className="py-2">
                <p className="text-gray-500 text-lg leading-relaxed">
                    Are you sure you want to remove this {resourceName || 'Section'}? This action will permanently
                    delete the resource from the system and cannot be undone.
                </p>
            </div>

            <div className="flex justify-end gap-3 mt-8">
                <Button onClick={onCancel} className="h-11 px-8 rounded-lg font-semibold text-gray-600 border-gray-200">
                    Cancel
                </Button>
                <Button
                    danger
                    type="primary"
                    onClick={onRemove}
                    className="h-11 px-6 rounded-lg font-semibold bg-[#FF4D4F] hover:bg-[#ff3131] border-none"
                >
                    Remove Section
                </Button>
            </div>
        </Modal>
    );
};

export default RemoveResourceModal;
