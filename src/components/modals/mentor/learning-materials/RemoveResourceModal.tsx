import { Modal, Button } from 'antd';
import { useDeleteMaterialsMutation } from '../../../../redux/apiSlices/mentor/learningApi';
import { toast } from 'sonner';

interface RemoveResourceModalProps {
    open: boolean;
    onCancel: () => void;
    onRemove: () => void;
    resource?: any;
}

const RemoveResourceModal = ({ open, onCancel, onRemove, resource }: RemoveResourceModalProps) => {
    const [deleteMaterials] = useDeleteMaterialsMutation();

    const handleRemove = async () => {
        if (!resource?._id) return;

        try {
            await toast.promise(deleteMaterials({ id: resource._id }).unwrap(), {
                loading: 'Removing resource...',
                success: (res) => {
                    onRemove();
                    onCancel();
                    return res.message || 'Resource removed successfully';
                },
                error: (err) => err.data?.message || 'Failed to remove resource',
            });
        } catch (error) {
            console.error('Remove Resource Error:', error);
        }
    };

    return (
        <Modal
            title={<span className="text-xl font-bold text-red-600">Remove Resource</span>}
            open={open}
            onCancel={onCancel}
            footer={null}
            width={550}
            centered
            className="rounded-2xl"
        >
            <div className="py-2">
                <p className="text-gray-500 text-lg leading-relaxed">
                    Are you sure you want to remove <span className="font-bold text-gray-800">"{resource?.title}"</span>
                    ? This action will permanently delete the resource from the system and cannot be undone.
                </p>
            </div>

            <div className="flex justify-end gap-3 mt-8">
                <Button onClick={onCancel} className="h-11 px-8 rounded-lg font-semibold text-gray-600 border-gray-200">
                    Cancel
                </Button>
                <Button
                    danger
                    type="primary"
                    onClick={handleRemove}
                    className="h-11 px-6 rounded-lg font-semibold bg-[#FF4D4F] hover:bg-[#ff3131] border-none"
                >
                    Remove Resource
                </Button>
            </div>
        </Modal>
    );
};

export default RemoveResourceModal;
