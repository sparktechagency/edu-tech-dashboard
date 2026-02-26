import React from 'react';
import { Modal, Button, Form, Input, DatePicker, Row, Col } from 'antd';
import { X } from 'lucide-react';

interface CreateGoalModalProps {
    open: boolean;
    onCancel: () => void;
}

const CreateGoalModal: React.FC<CreateGoalModalProps> = ({ open, onCancel }) => {
    const [form] = Form.useForm();

    const handleCreate = () => {
        form.validateFields().then((values) => {
            console.log('Form values:', values);
            form.resetFields();
            onCancel();
        });
    };

    return (
        <Modal
            title={<span className="text-xl font-semibold text-[#18212d]">Create New Goal</span>}
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
                    onClick={handleCreate}
                    className="px-6 h-10 bg-[#63d97d] border-none hover:bg-[#52c41a] rounded-md font-medium"
                >
                    Create Goal
                </Button>,
            ]}
            closeIcon={<X size={20} />}
            width={750}
            centered
        >
            <Form form={form} layout="vertical" className="mt-4">
                <Form.Item
                    label={<span className="font-semibold text-gray-700">Goal Title</span>}
                    name="title"
                    rules={[{ required: true, message: 'Please enter goal title' }]}
                >
                    <Input placeholder="Enter Goal Title" className="h-11 rounded-md bg-gray-50/50 border-gray-100" />
                </Form.Item>

                <Row gutter={24}>
                    <Col span={12}>
                        <Form.Item
                            label={<span className="font-semibold text-gray-700">Deadline</span>}
                            name="deadline"
                            rules={[{ required: true, message: 'Please select deadline' }]}
                        >
                            <DatePicker
                                className="w-full h-11 rounded-md bg-gray-50/50 border-gray-100"
                                placeholder="mm/dd/yyyy"
                            />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            label={<span className="font-semibold text-gray-700">Assign To</span>}
                            name="assignTo"
                            rules={[{ required: true, message: 'Please enter student name' }]}
                        >
                            <Input
                                placeholder="Student name"
                                className="h-11 rounded-md bg-gray-50/50 border-gray-100"
                            />
                        </Form.Item>
                    </Col>
                </Row>

                <Form.Item
                    label={<span className="font-semibold text-gray-700">Description</span>}
                    name="description"
                    rules={[{ required: true, message: 'Please enter description' }]}
                >
                    <Input.TextArea
                        placeholder="Enter class description"
                        rows={4}
                        className="rounded-md bg-gray-50/50 border-gray-100"
                    />
                </Form.Item>
            </Form>
        </Modal>
    );
};

export default CreateGoalModal;
