import React, { useEffect } from 'react';
import { Modal, Button, Form, Input, Select, Row, Col } from 'antd';
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
            form.setFieldsValue(student);
        }
    }, [student, form]);

    return (
        <Modal
            title={<span className="text-xl font-semibold">Edit Student Details</span>}
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
                    Update Student
                </Button>,
            ]}
            closeIcon={<X size={20} />}
            width={700}
            centered
        >
            <Form form={form} layout="vertical" className="mt-6">
                <Row gutter={16}>
                    <Col span={12}>
                        <Form.Item label={<span className="font-semibold">First Name</span>} name="firstName">
                            <Input className="h-11 rounded-md bg-gray-50/50" />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item label={<span className="font-semibold">Last Name</span>} name="lastName">
                            <Input className="h-11 rounded-md bg-gray-50/50" />
                        </Form.Item>
                    </Col>
                </Row>

                <Row gutter={16}>
                    <Col span={12}>
                        <Form.Item label={<span className="font-semibold">Email</span>} name="email">
                            <Input className="h-11 rounded-md bg-gray-50/50" />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item label={<span className="font-semibold">Phone</span>} name="phone">
                            <Input className="h-11 rounded-md bg-gray-50/50" />
                        </Form.Item>
                    </Col>
                </Row>

                <Row gutter={16}>
                    <Col span={12}>
                        <Form.Item label={<span className="font-semibold">Group</span>} name="group">
                            <Select className="h-11 rounded-md" variant="filled" />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item label={<span className="font-semibold">Track</span>} name="track">
                            <Select className="h-11 rounded-md" variant="filled" />
                        </Form.Item>
                    </Col>
                </Row>

                <Row gutter={16}>
                    <Col span={12}>
                        <Form.Item label={<span className="font-semibold">Location</span>} name="location">
                            <Input className="h-11 rounded-md bg-gray-50/50" />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item label={<span className="font-semibold">Gender</span>} name="gender">
                            <Select className="h-11 rounded-md" variant="filled" />
                        </Form.Item>
                    </Col>
                </Row>

                <Form.Item label={<span className="font-semibold">Assigned Mentor</span>} name="mentor">
                    <Select className="h-11 rounded-md" variant="filled" />
                </Form.Item>
            </Form>
        </Modal>
    );
};

export default EditStudentModal;
