import { Modal, Button } from 'antd';
import { IoCloseOutline } from 'react-icons/io5';

interface ResourceDetailsModalProps {
    visible: boolean;
    onClose: () => void;
    resource: any;
}

const ResourceDetailsModal: React.FC<ResourceDetailsModalProps> = ({ visible, onClose, resource }) => {
    if (!resource) return null;

    const details = [
        { label: 'Title', value: resource.title },
        { label: 'Description', value: resource.description },
        { label: 'Type', value: resource.type },
        { label: 'Target', value: 'Fullstack', isTag: true, tagColor: '#F3F4F6', textColor: '#374151' },
        { label: 'Upload Date', value: resource.uploadDate },
        { label: 'Status', value: resource.status, isTag: true, tagColor: '#E6F9F0', textColor: '#22C55E' },
    ];

    return (
        <Modal
            open={visible}
            onCancel={onClose}
            footer={null}
            closeIcon={<IoCloseOutline size={24} className="text-gray-500" />}
            width={700}
            centered
            title={<span className="text-xl font-semibold text-gray-800">{resource.title}</span>}
            className="resource-details-modal"
        >
            <div className="mt-4 border border-[#E5E7EB] rounded-lg overflow-hidden">
                {details.map((item, index) => (
                    <div
                        key={index}
                        className={`flex items-center min-h-[56px] ${index !== details.length - 1 ? 'border-b border-[#E5E7EB]' : ''}`}
                    >
                        <div className="w-1/3 px-6 py-4 bg-[#F9FAFB] text-gray-500 font-medium border-r border-[#E5E7EB]">
                            {item.label}
                        </div>
                        <div className="w-2/3 px-6 py-4 text-gray-800">
                            {item.isTag ? (
                                <span
                                    className="px-3 py-1 rounded-full text-sm font-medium"
                                    style={{ backgroundColor: item.tagColor, color: item.textColor }}
                                >
                                    {item.value}
                                </span>
                            ) : (
                                item.value
                            )}
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex justify-end mt-8">
                <Button
                    onClick={onClose}
                    className="px-8 h-10 rounded-lg border-gray-300 text-gray-600 font-medium hover:text-gray-800 hover:border-gray-800"
                >
                    Cancel
                </Button>
            </div>
        </Modal>
    );
};

export default ResourceDetailsModal;
