import { Modal, Button, Input, Select, Form } from 'antd';
import { IoCloseOutline } from 'react-icons/io5';

interface CreateResourceModalProps {
    visible: boolean;
    onClose: () => void;
    onSave: (values: any) => void;
    initialValues?: any;
}

const CreateResourceModal: React.FC<CreateResourceModalProps> = ({ visible, onClose, onSave, initialValues }) => {
    const [form] = Form.useForm();

    const handleOk = () => {
        form.validateFields().then((values) => {
            onSave(values);
            form.resetFields();
            onClose();
        });
    };

    if (visible && initialValues) {
        form.setFieldsValue(initialValues);
    }

    return (
        <Modal
            open={visible}
            onCancel={() => {
                form.resetFields();
                onClose();
            }}
            footer={null}
            closeIcon={<IoCloseOutline size={24} className="text-gray-500" />}
            width={700}
            centered
            title={
                <span className="text-xl font-semibold text-gray-800">
                    {initialValues ? 'Edit Resources' : 'Create New Resources'}
                </span>
            }
            className="create-resource-modal"
        >
            <Form form={form} layout="vertical" className="mt-6">
                <Form.Item
                    name="title"
                    label={<span className="font-semibold text-gray-700">Title</span>}
                    rules={[{ required: true, message: 'Please enter a title' }]}
                >
                    <Input placeholder="Enter title" className="h-[42px] rounded-lg border-gray-200" />
                </Form.Item>

                <Form.Item name="description" label={<span className="font-semibold text-gray-700">Description</span>}>
                    <Input.TextArea
                        placeholder="Write description..."
                        rows={4}
                        className="rounded-lg border-gray-200"
                    />
                </Form.Item>

                <div className="flex gap-6">
                    <Form.Item
                        name="type"
                        label={<span className="font-semibold text-gray-700">Type</span>}
                        className="flex-1"
                        rules={[{ required: true, message: 'Please select a type' }]}
                    >
                        <Select placeholder="Select" className="h-[42px] rounded-lg border-gray-200">
                            <Select.Option value="PDF">PDF</Select.Option>
                            <Select.Option value="Link">Link</Select.Option>
                            <Select.Option value="Video">Video</Select.Option>
                        </Select>
                    </Form.Item>

                    <Form.Item
                        name="contentUrl"
                        label={<span className="font-semibold text-gray-700">Content URL</span>}
                        className="flex-1"
                    >
                        <Input placeholder="https://..." className="h-[42px] rounded-lg border-gray-200" />
                    </Form.Item>
                </div>

                <Form.Item
                    name="materialType"
                    label={<span className="font-semibold text-gray-700">Material Type</span>}
                    rules={[{ required: true, message: 'Please select a material type' }]}
                >
                    <Select placeholder="Select" className="h-[42px] rounded-lg border-gray-200">
                        <Select.Option value="Learning Material">Learning Material</Select.Option>
                        <Select.Option value="Assignment">Assignment</Select.Option>
                        <Select.Option value="Reference">Reference</Select.Option>
                    </Select>
                </Form.Item>

                <div className="flex justify-end mt-4">
                    <Button
                        type="primary"
                        onClick={handleOk}
                        className="bg-[#22C55E] hover:bg-[#16a34a] border-none px-8 h-[42px] rounded-lg font-semibold"
                    >
                        {initialValues ? 'Save Changes' : 'Create Event'}
                    </Button>
                </div>
            </Form>
        </Modal>
    );
};

export default CreateResourceModal;
