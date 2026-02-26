import { Modal, Form, Input, Select, Button } from 'antd';
import { useAddMaterialsMutation } from '../../../../redux/apiSlices/mentor/learningApi';
import { toast } from 'sonner';

interface AddResourceModalProps {
    open: boolean;
    onCancel: () => void;
    refetch: () => void;
}

const AddResourceModal = ({ open, onCancel, refetch }: AddResourceModalProps) => {
    const [form] = Form.useForm();
    const [addMaterials] = useAddMaterialsMutation();

    const onFinish = async (values: any) => {
        try {
            toast.promise(addMaterials(values).unwrap(), {
                loading: 'Adding resource...',
                success: (res) => {
                    form.resetFields();
                    refetch();
                    onCancel();
                    return res.message || 'Resource added successfully';
                },
                error: (err) => err.data?.message || 'Failed to add resource',
            });
        } catch (error) {
            console.error('Add Resource Error:', error);
        }
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
                            <Select.Option value="PDF">PDF</Select.Option>
                            <Select.Option value="DOCX">DOCX</Select.Option>
                            <Select.Option value="VIDEO">Video</Select.Option>
                            <Select.Option value="LINK">Link</Select.Option>
                        </Select>
                    </Form.Item>

                    <Form.Item
                        name="targeteAudience"
                        label={<span className="font-semibold text-gray-700">Target Audience</span>}
                        rules={[{ required: true, message: 'Please select audience' }]}
                        initialValue="STUDENT"
                    >
                        <Select placeholder="Select option" className="h-11 rounded-lg custom-select-height">
                            <Select.Option value="STUDENT">Student</Select.Option>
                            <Select.Option value="MENTOR">Mentor</Select.Option>
                        </Select>
                    </Form.Item>
                </div>

                <Form.Item
                    name="contentUrl"
                    label={
                        <span className="font-semibold text-gray-700">
                            Link / URL <span className="text-gray-400 font-normal">(Required)</span>
                        </span>
                    }
                    rules={[{ required: true, message: 'Please enter content URL' }]}
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
