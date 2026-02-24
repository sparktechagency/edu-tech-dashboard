import React from 'react';
import { Modal, Button, Upload, message } from 'antd';
import { X, Download, FileText } from 'lucide-react';

interface ImportExcelModalProps {
    open: boolean;
    onCancel: () => void;
}

const ImportExcelModal: React.FC<ImportExcelModalProps> = ({ open, onCancel }) => {
    return (
        <Modal
            title={<span className="text-xl font-semibold">Import Teachers from Excel</span>}
            open={open}
            onCancel={onCancel}
            footer={[
                <Button key="cancel" onClick={onCancel} className="px-6 h-10 border-gray-300 rounded-md">
                    Cancel
                </Button>,
                <Button
                    key="submit"
                    type="primary"
                    onClick={onCancel}
                    className="px-6 h-10 bg-[#52c41a] border-none hover:bg-[#73d13d] rounded-md"
                >
                    Update Teachers
                </Button>,
            ]}
            closeIcon={<X size={20} />}
            width={600}
        >
            <div className="py-2">
                <div className="bg-[#f0f7ff] p-6 rounded-lg mb-6 flex justify-between items-center">
                    <div>
                        <h3 className="text-[#1890ff] font-semibold text-lg mb-1">Download Template</h3>
                        <p className="text-gray-500 text-sm">Use our template to ensure proper formatting</p>
                    </div>
                    <Button icon={<Download size={16} />} className="flex items-center gap-2 h-10 px-4 rounded-md">
                        Download Template
                    </Button>
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-2">Select Excel File</label>
                    <Upload.Dragger
                        name="file"
                        multiple={false}
                        action=""
                        onChange={(info) => {
                            const { status } = info.file;
                            if (status === 'done') {
                                message.success(`${info.file.name} file uploaded successfully.`);
                            } else if (status === 'error') {
                                message.error(`${info.file.name} file upload failed.`);
                            }
                        }}
                        className="rounded-lg border-dashed border-2 border-gray-200"
                    >
                        <p className="ant-upload-drag-icon flex justify-center mb-2">
                            <FileText size={32} className="text-gray-400" />
                        </p>
                        <p className="ant-upload-text text-gray-500">
                            <span className="font-semibold text-black">Choose File</span> No file chose
                        </p>
                    </Upload.Dragger>
                    <p className="text-right text-[#52c41a] text-xs mt-1 italic">Supported formats: .xlsx, .xls</p>
                </div>
            </div>
        </Modal>
    );
};

export default ImportExcelModal;
