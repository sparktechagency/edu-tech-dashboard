import React from 'react';
import { Modal, Button, Form, Input } from 'antd';
import { X } from 'lucide-react';

interface ReviewMentorModalProps {
    open: boolean;
    onCancel: () => void;
}

const ReviewMentorModal: React.FC<ReviewMentorModalProps> = ({ open, onCancel }) => {
    const [form] = Form.useForm();

    return (
        <Modal
            title={<span className="text-xl font-semibold text-[#18212d]">Review</span>}
            open={open}
            onCancel={onCancel}
            footer={[
                <Button
                    key="cancel"
                    onClick={onCancel}
                    className="px-10 h-10 border-gray-300 rounded-md font-medium text-gray-500"
                >
                    Cancel
                </Button>,
                <Button
                    key="submit"
                    type="primary"
                    onClick={onCancel}
                    className="px-10 h-10 bg-[#52c41a] border-none hover:bg-[#45a016] rounded-md font-medium"
                >
                    Submit
                </Button>,
            ]}
            closeIcon={<X size={20} />}
            width={550}
            centered
        >
            <Form form={form} layout="vertical" className="mt-4">
                <Form.Item label={<span className="font-semibold text-gray-700">Student Name</span>} name="studentName">
                    <Input placeholder="Enter student name" className="h-11 rounded-md bg-gray-50/50 border-gray-100" />
                </Form.Item>

                <Form.Item label={<span className="font-semibold text-gray-700">Email</span>} name="email">
                    <Input placeholder="Enter email" className="h-11 rounded-md bg-gray-50/50 border-gray-100" />
                </Form.Item>

                <Form.Item label={<span className="font-semibold text-gray-700">Rating</span>} name="rating">
                    <Input placeholder="Enter rating" className="h-11 rounded-md bg-gray-50/50 border-gray-100" />
                </Form.Item>

                <Form.Item label={<span className="font-semibold text-gray-700">Success Rate</span>} name="successRate">
                    <Input placeholder="Enter Success Rate" className="h-11 rounded-md bg-gray-50/50 border-gray-100" />
                </Form.Item>
            </Form>
        </Modal>
    );
};

export default ReviewMentorModal;
