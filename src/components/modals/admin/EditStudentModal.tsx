import React, { useEffect } from 'react';
import { Modal, Button, Form, Select, Row, Col } from 'antd';
import { X } from 'lucide-react';

interface EditStudentModalProps {
    open: boolean;
    onCancel: () => void;
    student: any;
}

const EditStudentModal: React.FC<EditStudentModalProps> = ({ open, onCancel, student }) => {
    const [form] = Form.useForm();

    useEffect(() => {
        if (student) {
            form.setFieldsValue({
                group: student.groups?.[0], // Assuming we edit the primary group
                track: student.track,
                status: student.status,
            });
        }
    }, [student, form]);

    return (
        <Modal
            title={<span className="text-2xl font-bold text-gray-800">Edit Student</span>}
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
                    Update Student
                </Button>,
            ]}
            closeIcon={<X size={20} />}
            width={600}
            centered
        >
            <Form form={form} layout="vertical" className="mt-8">
                <Row gutter={24}>
                    <Col span={12}>
                        <Form.Item label={<span className="font-bold text-gray-700">Group</span>} name="group">
                            <Select
                                placeholder="Select group"
                                className="h-11 rounded-md"
                                variant="filled"
                                style={{ backgroundColor: '#f9f9f9' }}
                            />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item label={<span className="font-bold text-gray-700">Track</span>} name="track">
                            <Select
                                placeholder="Select track"
                                className="h-11 rounded-md"
                                variant="filled"
                                style={{ backgroundColor: '#f9f9f9' }}
                            />
                        </Form.Item>
                    </Col>
                </Row>

                <Form.Item
                    label={<span className="font-bold text-gray-700">Status</span>}
                    name="status"
                    className="mt-4"
                >
                    <Select
                        placeholder="Select option"
                        className="h-11 rounded-md"
                        variant="filled"
                        style={{ backgroundColor: '#f9f9f9' }}
                    />
                </Form.Item>
            </Form>
        </Modal>
    );
};

export default EditStudentModal;
