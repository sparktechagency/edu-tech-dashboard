import { Modal, Input, Select, Checkbox, Form, Button } from 'antd';
import { X } from 'lucide-react';

interface AddLearningMaterialModalProps {
    open: boolean;
    onCancel: () => void;
}

const AddLearningMaterialModal = ({ open, onCancel }: AddLearningMaterialModalProps) => {
    const [form] = Form.useForm();

    const onFinish = (values: any) => {
        console.log('Success:', values);
        onCancel();
        form.resetFields();
    };

    return (
        <Modal
            title={null}
            open={open}
            onCancel={onCancel}
            footer={null}
            width={700}
            closeIcon={null}
            centered
            styles={{
                content: {
                    padding: '24px',
                    borderRadius: '16px',
                },
            }}
        >
            <div className="flex justify-between items-center mb-6 border-b pb-4">
                <h2 className="text-xl font-bold text-gray-800">Add New Learning Material</h2>
                <button
                    onClick={() => {
                        onCancel();
                        form.resetFields();
                    }}
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                    <X size={20} />
                </button>
            </div>

            <Form
                form={form}
                layout="vertical"
                onFinish={onFinish}
                autoComplete="off"
                requiredMark={false}
                className="space-y-4"
            >
                <Form.Item
                    name="title"
                    label={<span className="text-sm font-semibold text-gray-700">Title</span>}
                    rules={[{ required: true, message: 'Please enter title' }]}
                >
                    <Input placeholder="Enter title" className="h-11 rounded-lg border-gray-200" />
                </Form.Item>

                <Form.Item
                    name="description"
                    label={<span className="text-sm font-semibold text-gray-700">Description</span>}
                >
                    <Input.TextArea
                        placeholder="Write description..."
                        className="rounded-lg border-gray-200"
                        rows={5}
                    />
                </Form.Item>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Form.Item name="type" label={<span className="text-sm font-semibold text-gray-700">Type</span>}>
                        <Select placeholder="Select" className="w-full h-11">
                            <Select.Option value="link">Link</Select.Option>
                            <Select.Option value="pdf">PDF</Select.Option>
                            <Select.Option value="doc">Document</Select.Option>
                        </Select>
                    </Form.Item>
                    <Form.Item
                        name="contentUrl"
                        label={<span className="text-sm font-semibold text-gray-700">Content URL</span>}
                    >
                        <Input placeholder="https://..." className="h-11 rounded-lg border-gray-200" />
                    </Form.Item>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Form.Item
                        name="targetAudience"
                        label={<span className="text-sm font-semibold text-gray-700">Target Audience</span>}
                    >
                        <Select placeholder="Select" className="w-full h-11">
                            <Select.Option value="all">All</Select.Option>
                            <Select.Option value="students">Students</Select.Option>
                            <Select.Option value="mentors">Mentors</Select.Option>
                        </Select>
                    </Form.Item>
                    <Form.Item
                        name="targetGroup"
                        label={<span className="text-sm font-semibold text-gray-700">Target Group</span>}
                    >
                        <Select placeholder="Select group" className="w-full h-11">
                            <Select.Option value="fullstack">Full Stack</Select.Option>
                            <Select.Option value="frontend">Frontend</Select.Option>
                        </Select>
                    </Form.Item>
                </div>

                <Form.Item name="markAsAssignment" valuePropName="checked">
                    <Checkbox className="text-gray-600">Mark as Assignment</Checkbox>
                </Form.Item>

                <div className="flex justify-end pt-4">
                    <Button
                        type="primary"
                        htmlType="submit"
                        className="bg-[#22C55E] text-white px-8 py-5 rounded-lg font-semibold hover:!bg-[#1ea34d] border-none flex items-center justify-center h-11"
                    >
                        Create Event
                    </Button>
                </div>
            </Form>
        </Modal>
    );
};

export default AddLearningMaterialModal;
