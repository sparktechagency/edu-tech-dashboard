import { Button, Modal, Tag } from 'antd';
import { EyeOutlined, LinkOutlined } from '@ant-design/icons';
import { Resource } from '../../../constants/mockResources';

interface CoordinatorDetailsModalProps {
    selectedResource: Resource | null;
    isModalVisible: boolean;
    setIsModalVisible: (visible: boolean) => void;
    handleLinkClick: (url: string) => void;
}

export default function CoordinatorDetailsModal({
    selectedResource,
    isModalVisible,
    setIsModalVisible,
    handleLinkClick,
}: CoordinatorDetailsModalProps) {
    return (
        <Modal
            title={null}
            open={isModalVisible}
            onCancel={() => setIsModalVisible(false)}
            footer={null}
            width={650}
            centered
            className="resource-modal"
        >
            <>
                <div className="flex items-center gap-3 py-2">
                    <div className="p-2 bg-primary/10 rounded-lg">
                        <EyeOutlined className="text-primary text-xl" />
                    </div>
                    <div>
                        <div className="text-lg font-bold text-[#333333]">{selectedResource?.title}</div>
                        <div className="text-xs font-normal text-gray-400 uppercase tracking-widest">
                            {selectedResource?.type} Material
                        </div>
                    </div>
                </div>
                {selectedResource && (
                    <div className="py-4">
                        <div className="mb-6">
                            <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">
                                Description
                            </h4>
                            <p className="text-gray-700 leading-relaxed text-base">{selectedResource.description}</p>
                        </div>
                        <div className="grid grid-cols-3 gap-6 pt-4 border-t border-gray-50">
                            <div>
                                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">
                                    Target
                                </h4>
                                <Tag
                                    color={selectedResource.for === 'Mentor' ? 'green' : 'blue'}
                                    className="px-4 py-0.5 rounded-full border-none font-bold"
                                >
                                    {selectedResource.for}
                                </Tag>
                            </div>
                            <div>
                                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">
                                    Group
                                </h4>
                                <Tag color="purple" className="px-4 py-0.5 rounded-full border-none font-bold">
                                    {selectedResource.group}
                                </Tag>
                            </div>
                            <div>
                                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">
                                    Track
                                </h4>
                                <Tag color="magenta" className="px-4 py-0.5 rounded-full border-none font-bold">
                                    {selectedResource.track}
                                </Tag>
                            </div>
                        </div>
                    </div>
                )}
                <div className="flex justify-end mt-6 gap-3">
                    <Button
                        key="back"
                        onClick={() => setIsModalVisible(false)}
                        className="h-10 px-6 rounded-lg font-medium"
                    >
                        Close
                    </Button>

                    <Button
                        key="link"
                        type="primary"
                        icon={<LinkOutlined />}
                        onClick={() => selectedResource && handleLinkClick(selectedResource.link)}
                        className="h-10 px-6 rounded-lg font-bold shadow-md"
                    >
                        Visit Link
                    </Button>
                </div>
            </>
        </Modal>
    );
}
