import React, { useEffect } from 'react';
import { Modal, Button, Form, Input, Select, Row, Col } from 'antd';
import { X } from 'lucide-react';
import JoditEditor from 'jodit-react';
import { groupOptions, genderOptions } from '../../../contents/admin-data/mentors';

interface EditMentorModalProps {
    open: boolean;
    onCancel: () => void;
    mentor: any;
}

const EditMentorModal: React.FC<EditMentorModalProps> = ({ open, onCancel, mentor }) => {
    const [form] = Form.useForm();

    useEffect(() => {
        if (mentor) {
            form.setFieldsValue(mentor);
        }
    }, [mentor, form]);

    const config = {
        readonly: false,
        placeholder: 'Enter bio...',
        height: 200,
        toolbarAdaptive: false,
        buttons: [
            'bold',
            'italic',
            'underline',
            'strikethrough',
            'eraser',
            'ul',
            'ol',
            'font',
            'fontsize',
            'paragraph',
            'classSpan',
            'lineHeight',
            'spellcheck',
            'cut',
            'copy',
            'paste',
            'selectall',
            'copyformat',
            'hr',
            'table',
            'link',
            'symbols',
            'indent',
            'outdent',
            'left',
            'center',
            'right',
            'justify',
            'undo',
            'redo',
            'find',
            'source',
            'fullsize',
            'preview',
            'print',
        ],
    };

    return (
        <Modal
            title={<span className="text-xl font-semibold text-[#18212d]">Edit Mentor</span>}
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
                    Update Mentor
                </Button>,
            ]}
            closeIcon={<X size={20} />}
            width={750}
            centered
        >
            <Form form={form} layout="vertical" className="mt-4">
                <Row gutter={24}>
                    <Col span={12}>
                        <Form.Item
                            label={<span className="font-semibold text-gray-700">First Name</span>}
                            name="firstName"
                        >
                            <Input
                                placeholder="Enter first name"
                                className="h-11 rounded-md bg-gray-50/50 border-gray-100"
                            />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            label={<span className="font-semibold text-gray-700">Last Name</span>}
                            name="lastName"
                        >
                            <Input
                                placeholder="Enter last name"
                                className="h-11 rounded-md bg-gray-50/50 border-gray-100"
                            />
                        </Form.Item>
                    </Col>
                </Row>

                <Form.Item label={<span className="font-semibold text-gray-700">Email</span>} name="email">
                    <Input placeholder="Enter email" className="h-11 rounded-md bg-gray-50/50 border-gray-100" />
                </Form.Item>

                <Form.Item label={<span className="font-semibold text-gray-700">Phone</span>} name="phone">
                    <Input placeholder="Enter phone" className="h-11 rounded-md bg-gray-50/50 border-gray-100" />
                </Form.Item>

                <Form.Item label={<span className="font-semibold text-gray-700">Bio</span>} name="bio">
                    <JoditEditor value={mentor?.bio || ''} config={config} onBlur={() => {}} />
                </Form.Item>

                <Row gutter={24}>
                    <Col span={12}>
                        <Form.Item label={<span className="font-semibold text-gray-700">Company</span>} name="company">
                            <Input
                                placeholder="Enter company name"
                                className="h-11 rounded-md bg-gray-50/50 border-gray-100"
                            />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item label={<span className="font-semibold text-gray-700">Gender</span>} name="gender">
                            <Select placeholder="Enter gender" className="h-11 rounded-md" options={genderOptions} />
                        </Form.Item>
                    </Col>
                </Row>

                <Form.Item
                    label={<span className="font-semibold text-gray-700">Preferred Group</span>}
                    name="preferredGroup"
                >
                    <Select placeholder="Select preferred group" className="h-11 rounded-md" options={groupOptions} />
                </Form.Item>

                <div className="mt-4">
                    <h3 className="font-bold text-[#18212d] mb-4 text-base">Available Hours Management</h3>
                    <Form.Item
                        label={<span className="font-semibold text-gray-700">Total Available Hours</span>}
                        name="totalHours"
                    >
                        <Input placeholder="Enter hours" className="h-11 rounded-md bg-gray-50/50 border-gray-100" />
                    </Form.Item>
                </div>
            </Form>
        </Modal>
    );
};

export default EditMentorModal;
