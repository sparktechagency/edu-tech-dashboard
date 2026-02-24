import React from 'react';
import { Modal, Button, Form, Input, DatePicker } from 'antd';
import { X } from 'lucide-react';

const { TextArea } = Input;

interface AssignIndividualClassModalProps {
    open: boolean;
    onCancel: () => void;
    student: any;
}

const AssignIndividualClassModal: React.FC<AssignIndividualClassModalProps> = ({ open, onCancel }) => {
    const [form] = Form.useForm();

    return (
        <Modal
            title={<span className="text-2xl font-bold text-gray-800">Assign Individual Class</span>}
            open={open}
            onCancel={onCancel}
            footer={[
                <Button
                    key="cancel"
                    onClick={onCancel}
                    className="px-10 h-10 border-gray-100 text-gray-600 rounded-md font-medium"
                >
                    Cancel
                </Button>,
                <Button
                    key="submit"
                    type="primary"
                    onClick={onCancel}
                    className="px-10 h-10 bg-[#52c41a] border-none hover:bg-[#73d13d] rounded-md font-medium"
                >
                    Assign Class
                </Button>,
            ]}
            closeIcon={<X size={20} />}
            width={650}
            centered
        >
            <Form form={form} layout="vertical" className="mt-8 mb-4">
                <Form.Item label={<span className="font-bold text-gray-700">Class Title</span>} name="title">
                    <Input placeholder="Enter class title" className="h-11 rounded-md bg-[#f9f9f9] border-none" />
                </Form.Item>

                <Form.Item label={<span className="font-bold text-gray-700">Select Mentor</span>} name="date">
                    <DatePicker placeholder="mm/dd/yyyy" className="h-11 w-full rounded-md bg-[#f9f9f9] border-none" />
                </Form.Item>

                <Form.Item label={<span className="font-bold text-gray-700">Location</span>} name="location">
                    <Input
                        placeholder="Online meeting link or physical location"
                        className="h-11 rounded-md bg-[#f9f9f9] border-none"
                    />
                </Form.Item>

                <Form.Item label={<span className="font-bold text-gray-700">Description</span>} name="description">
                    <TextArea
                        rows={4}
                        placeholder="Enter class description"
                        className="rounded-md bg-[#f9f9f9] border-none"
                    />
                </Form.Item>
            </Form>
        </Modal>
    );
};

export default AssignIndividualClassModal;
