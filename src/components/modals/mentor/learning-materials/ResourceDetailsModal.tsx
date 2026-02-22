import { Modal, Button } from 'antd';

interface ResourceDetailsModalProps {
    open: boolean;
    onCancel: () => void;
    resource?: {
        title: string;
        type: string;
        category: string;
        link: string;
    };
}

const ResourceDetailsModal = ({ open, onCancel, resource }: ResourceDetailsModalProps) => {
    return (
        <Modal
            title={<span className="text-xl font-bold">Resources Details</span>}
            open={open}
            onCancel={onCancel}
            footer={null}
            width={600}
            centered
            className="rounded-2xl"
        >
            <div className="mt-6 border border-gray-100 rounded-xl overflow-hidden">
                <div className="grid grid-cols-2 border-b border-gray-100">
                    <div className="bg-gray-50/50 p-4 font-semibold text-gray-500 text-sm">Resource Title</div>
                    <div className="p-4 text-gray-700 text-sm">{resource?.title || 'Basic Computer'}</div>
                </div>
                <div className="grid grid-cols-2 border-b border-gray-100">
                    <div className="bg-gray-50/50 p-4 font-semibold text-gray-500 text-sm">Type</div>
                    <div className="p-4 text-gray-700 text-sm">{resource?.type || 'PDF'}</div>
                </div>
                <div className="grid grid-cols-2 border-b border-gray-100">
                    <div className="bg-gray-50/50 p-4 font-semibold text-gray-500 text-sm">Category</div>
                    <div className="p-4 text-gray-700 text-sm">{resource?.category || 'Learning Materials'}</div>
                </div>
                <div className="grid grid-cols-2">
                    <div className="bg-gray-50/50 p-4 font-semibold text-gray-500 text-sm">Link URL</div>
                    <div className="p-4">
                        <a href={resource?.link || '#'} className="text-primary hover:underline text-sm font-medium">
                            View Link
                        </a>
                    </div>
                </div>
            </div>

            <div className="flex justify-end mt-6">
                <Button onClick={onCancel} className="h-10 px-8 rounded-lg font-semibold text-gray-600 border-gray-200">
                    Cancel
                </Button>
            </div>
        </Modal>
    );
};

export default ResourceDetailsModal;
