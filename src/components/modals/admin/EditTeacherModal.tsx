import React, { useEffect } from 'react';
import { Modal, Button, Form, Input, Select, Checkbox, Row, Col, Tag } from 'antd';
import { X, Plus } from 'lucide-react';
import JoditEditor from 'jodit-react';
import { groupOptions, trackOptions } from '../../../contents/admin-data/teachers';

interface EditTeacherModalProps {
    open: boolean;
    onCancel: () => void;
    teacher: any;
}

const EditTeacherModal: React.FC<EditTeacherModalProps> = ({ open, onCancel, teacher }) => {
    const [form] = Form.useForm();

    useEffect(() => {
        if (teacher) {
            form.setFieldsValue(teacher);
        }
    }, [teacher, form]);

    const config = {
        readonly: false,
        placeholder: 'Enter bio...',
        height: 300,
        toolbarAdaptive: false,
    };

    return (
        <Modal
            title={<span className="text-xl font-semibold">Edit Teacher</span>}
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
                    Update Teacher
                </Button>,
            ]}
            closeIcon={<X size={20} />}
            width={1000}
            centered
        >
            <Form form={form} layout="vertical" className="mt-6">
                <Row gutter={24}>
                    <Col span={12}>
                        <Form.Item label={<span className="font-semibold">First Name</span>} name="firstName">
                            <Input placeholder="Enter first name" className="h-11 rounded-md" />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item label={<span className="font-semibold">Last Name</span>} name="lastName">
                            <Input placeholder="Enter last name" className="h-11 rounded-md" />
                        </Form.Item>
                    </Col>
                </Row>

                <Form.Item label={<span className="font-semibold">Email</span>} name="email">
                    <Input placeholder="Enter email" className="h-11 rounded-md" />
                </Form.Item>

                <Form.Item label={<span className="font-semibold">Phone</span>} name="phone">
                    <Input placeholder="Enter phone" className="h-11 rounded-md" />
                </Form.Item>

                <Form.Item label={<span className="font-semibold">Groups</span>} name="groups">
                    <Checkbox.Group className="flex gap-12 mt-2">
                        {groupOptions.map((opt) => (
                            <Checkbox key={opt.value} value={opt.value}>
                                {opt.label}
                            </Checkbox>
                        ))}
                    </Checkbox.Group>
                </Form.Item>

                <Form.Item label={<span className="font-semibold">Track</span>} name="track">
                    <Select placeholder="Select option" className="h-11 rounded-md" options={trackOptions} />
                </Form.Item>

                <Form.Item label={<span className="font-semibold">Track (Tags)</span>} name="tags">
                    <div className="flex flex-wrap gap-2 p-2 border border-gray-200 rounded-md">
                        <Tag closable className="py-1 px-3 bg-gray-50 border-gray-200 rounded text-gray-600">
                            Python
                        </Tag>
                        <Tag closable className="py-1 px-3 bg-gray-50 border-gray-200 rounded text-gray-600">
                            React
                        </Tag>
                        <Tag closable className="py-1 px-3 bg-gray-50 border-gray-200 rounded text-gray-600">
                            Java
                        </Tag>
                        <Input
                            prefix={<Plus size={14} />}
                            placeholder="Add Languages..."
                            bordered={false}
                            className="w-40 border-none shadow-none focus:ring-0"
                        />
                    </div>
                </Form.Item>

                <Form.Item label={<span className="font-semibold">Bio</span>} name="bio">
                    <JoditEditor value={teacher?.bio || ''} config={config} onBlur={() => {}} />
                </Form.Item>

                <Row gutter={24}>
                    <Col span={8}>
                        <Form.Item label={<span className="font-semibold">LinkedIn</span>} name="linkedin">
                            <Input placeholder="Enter URL" className="h-11 rounded-md" />
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item label={<span className="font-semibold">GitHub</span>} name="github">
                            <Input placeholder="Enter URL" className="h-11 rounded-md" />
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item label={<span className="font-semibold">Portfolio</span>} name="portfolio">
                            <Input placeholder="Enter URL" className="h-11 rounded-md" />
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
        </Modal>
    );
};

export default EditTeacherModal;
