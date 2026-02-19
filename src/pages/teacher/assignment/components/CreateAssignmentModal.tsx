import React, { useEffect } from 'react';
import { Modal, Form, Input, Select, DatePicker, Upload, Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import dayjs from 'dayjs';

interface CreateAssignmentModalProps {
    open: boolean;
    onCancel: () => void;
    onFinish: (values: any) => void;
    initialValues?: any;
    mode: 'create' | 'edit';
}

const CreateAssignmentModal: React.FC<CreateAssignmentModalProps> = ({
    open,
    onCancel,
    onFinish,
    initialValues,
    mode,
}) => {
    const [form] = Form.useForm();

    useEffect(() => {
        if (open) {
            if (mode === 'edit' && initialValues) {
                form.setFieldsValue({
                    ...initialValues,
                    dueDate: initialValues.dueDate ? dayjs(initialValues.dueDate, 'DD/MM/YYYY') : null,
                });
            } else {
                form.resetFields();
            }
        }
    }, [open, mode, initialValues, form]);

    const handleSubmit = () => {
        form.validateFields()
            .then((values) => {
                onFinish({
                    ...values,
                    dueDate: values.dueDate ? values.dueDate.format('DD/MM/YYYY') : null,
                    key: mode === 'edit' ? initialValues.key : undefined,
                });
                onCancel();
            })
            .catch((info) => {
                console.log('Validate Failed:', info);
            });
    };

    return (
        <Modal
            title={
                <span className="text-xl font-bold text-gray-800">
                    {mode === 'edit' ? 'Edit Assignment' : 'Create New Assignment'}
                </span>
            }
            open={open}
            onCancel={onCancel}
            footer={null}
            width={700}
            centered
            closeIcon={
                <div className="bg-gray-100 p-1.5 rounded-full hover:bg-gray-200 transition-colors">
                    <PlusOutlined className="rotate-45" />
                </div>
            }
        >
            <Form form={form} layout="vertical" className="mt-6">
                <Form.Item
                    label={<span className="font-semibold text-gray-700 text-base">Title</span>}
                    name="title"
                    rules={[{ required: true, message: 'Please enter a title' }]}
                >
                    <Input placeholder="Enter title" className="h-11 rounded-lg bg-gray-50 border-gray-100" />
                </Form.Item>

                <Form.Item
                    label={<span className="font-semibold text-gray-700 text-base">Description</span>}
                    name="description"
                    rules={[{ required: true, message: 'Please enter a description' }]}
                >
                    <Input.TextArea
                        placeholder="Write description..."
                        rows={4}
                        className="rounded-lg bg-gray-50 border-gray-100 py-3"
                    />
                </Form.Item>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Form.Item
                        label={<span className="font-semibold text-gray-700 text-base">Type</span>}
                        name="type"
                        rules={[{ required: true, message: 'Please select a type' }]}
                    >
                        <Select placeholder="Select" className="h-11 custom-select-full rounded-lg">
                            <Select.Option value="PDF">PDF</Select.Option>
                            <Select.Option value="HTML">HTML</Select.Option>
                            <Select.Option value="CSS">CSS</Select.Option>
                            <Select.Option value="JS">JS</Select.Option>
                        </Select>
                    </Form.Item>
                    <Form.Item
                        label={<span className="font-semibold text-gray-700 text-base">Target Track</span>}
                        name="targets"
                        rules={[{ required: true, message: 'Please select at least one track' }]}
                    >
                        <Select
                            mode="multiple"
                            placeholder="Select"
                            className="custom-select-full rounded-lg min-h-[44px]"
                        >
                            <Select.Option value="Skill Path">Skill Path</Select.Option>
                            <Select.Option value="Data">Data</Select.Option>
                            <Select.Option value="Fullstack">Fullstack</Select.Option>
                        </Select>
                    </Form.Item>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Form.Item
                        label={<span className="font-semibold text-gray-700 text-base">Due Date</span>}
                        name="dueDate"
                        rules={[{ required: true, message: 'Please select a due date' }]}
                    >
                        <DatePicker
                            placeholder="dd/mm/yyyy"
                            className="w-full h-11 rounded-lg bg-gray-50 border-gray-100"
                            format="DD/MM/YYYY"
                        />
                    </Form.Item>
                    <Form.Item
                        label={<span className="font-semibold text-gray-700 text-base">Total Points</span>}
                        name="points"
                        initialValue="100"
                    >
                        <Input placeholder="100" className="h-11 rounded-lg bg-gray-50 border-gray-100" />
                    </Form.Item>
                </div>

                <Form.Item
                    label={<span className="font-semibold text-gray-700 text-base">Attachments (PDF/HTML/CSS/JS)</span>}
                >
                    <Upload.Dragger className="rounded-xl border-dashed border-2 border-gray-200 bg-gray-50 py-6">
                        <p className="ant-upload-text text-gray-400 font-medium">Choose files</p>
                    </Upload.Dragger>
                    <div className="text-xs text-gray-400 mt-2">
                        You can select multiple files. Max size - 15 MB per file.
                    </div>
                </Form.Item>

                <div className="flex justify-end mt-8">
                    <Button
                        type="primary"
                        className="bg-[#21C35D] hover:bg-[#1da950] h-12 px-10 rounded-xl font-bold text-lg border-none"
                        onClick={handleSubmit}
                    >
                        {mode === 'edit' ? 'Update Assignment' : 'Create Event'}
                    </Button>
                </div>
            </Form>
        </Modal>
    );
};

export default CreateAssignmentModal;
