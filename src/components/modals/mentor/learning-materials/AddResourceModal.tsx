import { Modal, Form, Input, Select, Button } from 'antd';

interface AddResourceModalProps {
    open: boolean;
    onCancel: () => void;
}

const AddResourceModal = ({ open, onCancel }: AddResourceModalProps) => {
    const [form] = Form.useForm();

    const onFinish = (values: any) => {
        console.log('Add Resource Values:', values);
        form.resetFields();
        onCancel();
    };

    return (
        <Modal
            title={<span className="text-xl font-bold">Add Resources</span>}
            open={open}
            onCancel={() => {
                form.resetFields();
                onCancel();
            }}
            footer={null}
            width={700}
            centered
            className="rounded-2xl"
        >
            <Form form={form} layout="vertical" onFinish={onFinish} className="pt-4">
                <Form.Item
                    name="title"
                    label={<span className="font-semibold text-gray-700">Resource Title</span>}
                    rules={[{ required: true, message: 'Please enter resource title' }]}
                >
                    <Input placeholder="Enter resource title" className="h-11 rounded-lg" />
                </Form.Item>

                <div className="grid grid-cols-2 gap-4">
                    <Form.Item
                        name="type"
                        label={<span className="font-semibold text-gray-700">Type</span>}
                        rules={[{ required: true, message: 'Please select type' }]}
                    >
                        <Select placeholder="Select option" className="h-11 rounded-lg custom-select-height">
                            <Select.Option value="pdf">PDF</Select.Option>
                            <Select.Option value="docx">DOCX</Select.Option>
                            <Select.Option value="video">Video</Select.Option>
                        </Select>
                    </Form.Item>

                    <Form.Item
                        name="category"
                        label={<span className="font-semibold text-gray-700">Category</span>}
                        rules={[{ required: true, message: 'Please select category' }]}
                    >
                        <Select placeholder="Select option" className="h-11 rounded-lg custom-select-height">
                            <Select.Option value="learning_materials">Learning Materials</Select.Option>
                            <Select.Option value="training">Training</Select.Option>
                        </Select>
                    </Form.Item>
                </div>

                <Form.Item
                    name="link"
                    label={
                        <span className="font-semibold text-gray-700">
                            Link / URL <span className="text-gray-400 font-normal">(Optional)</span>
                        </span>
                    }
                >
                    <Input placeholder="https://...." className="h-11 rounded-lg" />
                </Form.Item>

                <div className="flex justify-end gap-3 mt-8">
                    <Button
                        onClick={() => {
                            form.resetFields();
                            onCancel();
                        }}
                        className="h-11 px-8 rounded-lg font-semibold text-gray-600 border-gray-200"
                    >
                        Cancel
                    </Button>
                    <Button
                        type="primary"
                        htmlType="submit"
                        className="h-11 px-6 rounded-lg font-semibold bg-[#52C41A] hover:bg-[#45a013] border-none"
                    >
                        Add Resources
                    </Button>
                </div>
            </Form>
        </Modal>
    );
};

export default AddResourceModal;
