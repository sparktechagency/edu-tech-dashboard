import React from 'react';
import { Modal, Button, Upload } from 'antd';
import { X, Download } from 'lucide-react';

interface ImportMentorsModalProps {
    open: boolean;
    onCancel: () => void;
}

const ImportMentorsModal: React.FC<ImportMentorsModalProps> = ({ open, onCancel }) => {
    return (
        <Modal
            title={<span className="text-xl font-semibold text-[#18212d]">Import Mentors from Excel</span>}
            open={open}
            onCancel={onCancel}
            footer={[
                <Button
                    key="cancel"
                    onClick={onCancel}
                    className="px-6 h-10 border-gray-300 rounded-md font-medium text-gray-500"
                >
                    Cancel
                </Button>,
                <Button
                    key="submit"
                    type="primary"
                    onClick={onCancel}
                    className="px-6 h-10 bg-[#52c41a] border-none hover:bg-[#45a016] rounded-md font-medium"
                >
                    Update Mentors
                </Button>,
            ]}
            closeIcon={<X size={20} />}
            width={600}
            centered
        >
            <div className="py-2">
                <div className="bg-[#f0f7ff] p-6 rounded-lg mb-6 flex justify-between items-center">
                    <div>
                        <h3 className="text-[#1890ff] font-semibold text-lg mb-1 leading-tight">Download Template</h3>
                        <p className="text-gray-500 text-sm">Use our template to ensure proper formatting</p>
                    </div>
                    <Button
                        icon={<Download size={16} />}
                        className="flex items-center gap-2 h-10 px-4 rounded-md border-gray-200"
                    >
                        Download Template
                    </Button>
                </div>

                <div className="mb-6">
                    <label className="block text-[#18212d] font-semibold mb-2">Select Excel File</label>
                    <Upload.Dragger
                        name="file"
                        multiple={false}
                        action=""
                        className="rounded-lg border-2 border-dashed border-gray-200 bg-gray-50/30 py-8"
                    >
                        <p className="flex justify-center mb-2">{/* Placeholder for no file chose as per image */}</p>
                        <p className="text-gray-500">
                            <span className="font-semibold text-[#18212d]">Choose File</span> No file chose
                        </p>
                    </Upload.Dragger>
                    <p className="text-right text-[#52c41a] text-xs mt-2 italic">Supported formats: .xlsx, .xls</p>
                </div>

                <div className="bg-gray-50/50 p-6 rounded-lg">
                    <h4 className="font-semibold text-[#18212d] mb-4">Expected Excel Format:</h4>
                    <div className="space-y-3 text-sm">
                        <div className="flex">
                            <span className="w-24 text-gray-400">Column A</span>
                            <span className="text-gray-400 mr-2">:</span>
                            <span className="text-gray-600">First Name (required)</span>
                        </div>
                        <div className="flex">
                            <span className="w-24 text-gray-400">Column B</span>
                            <span className="text-gray-400 mr-2">:</span>
                            <span className="text-gray-600">Last Name (required)</span>
                        </div>
                        <div className="flex">
                            <span className="w-24 text-gray-400">Column C</span>
                            <span className="text-gray-400 mr-2">:</span>
                            <span className="text-gray-600">Email (required)</span>
                        </div>
                        <div className="flex">
                            <span className="w-24 text-gray-400">Column d</span>
                            <span className="text-gray-400 mr-2">:</span>
                            <span className="text-gray-600">
                                Password (optional - if empty, temporary password will be generated)
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    );
};

export default ImportMentorsModal;
