import React from 'react';
import { Modal, Button, Form, Input, Upload } from 'antd';
import { X, Upload as UploadIcon } from 'lucide-react';
import JoditEditor from 'jodit-react';

interface AddAssignmentModalProps {
    open: boolean;
    onCancel: () => void;
}

const AddAssignmentModal: React.FC<AddAssignmentModalProps> = ({ open, onCancel }) => {
    const [form] = Form.useForm();

    const config = {
        readonly: false,
        placeholder: 'Enter note...',
        height: 300,
        toolbarAdaptive: false,
    };

    return (
        <Modal
            title={<span className="text-xl font-semibold  w-full block">Add Assignment</span>} 
            open={open}
            onCancel={onCancel}
            footer={[
                <Button key="cancel" onClick={onCancel} className="px-8 h-10 border-gray-300 rounded-md">
                    Cancel
                </Button>,
                <Button
                    key="submit"
                    type="primary"
                    onClick={onCancel}
                    className="px-8 h-10 bg-[#52c41a] border-none hover:bg-[#73d13d] rounded-md"
                >
                    Upload
                </Button>,
            ]}
            closeIcon={<X size={20} />}
            width={700}
            centered
        >
            <Form form={form} layout="vertical" className="mt-6">
                <Form.Item label={<span className="font-semibold">Assignment title</span>} name="title">
                    <Input placeholder="Enter assignment title" className="h-11 rounded-md bg-gray-50/50" />
                </Form.Item>

                <Form.Item label={<span className="font-semibold">Assignment Descriptions</span>} name="description">
                    <Input.TextArea rows={4} placeholder="Enter descriptions..." className="rounded-md bg-gray-50/50" />
                </Form.Item>

                <Form.Item label={<span className="font-semibold">Submit Your Work</span>} name="file">
                    <Upload.Dragger
                        className="rounded-lg border-dashed border-2 border-gray-100 bg-gray-50/20"
                        height={160}
                    >
                        <div className="flex flex-col items-center justify-center py-4">
                            <UploadIcon size={32} className="text-gray-300 mb-2" />
                            <p className="text-gray-400 text-xs text-center">
                                Click to upload or drag and drop
                                <br />
                                PDF, DOC, JPG, PNG (max 10MB)
                            </p>
                        </div>
                    </Upload.Dragger>
                </Form.Item>

                <Form.Item label={<span className="font-semibold">Notes (Optional)</span>} name="notes">
                    <JoditEditor value={''} config={config} />
                </Form.Item>
            </Form>
        </Modal>
    );
};

export default AddAssignmentModal;
