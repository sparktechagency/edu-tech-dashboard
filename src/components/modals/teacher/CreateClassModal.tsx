import { Modal, Button, Input, DatePicker, Checkbox, Form } from 'antd';
import { IoCloseOutline } from 'react-icons/io5';
import dayjs from 'dayjs';

interface CreateClassModalProps {
    visible: boolean;
    onClose: () => void;
    onSave: (values: any) => void;
    initialValues?: any;
}

const CreateClassModal: React.FC<CreateClassModalProps> = ({ visible, onClose, onSave, initialValues }) => {
    const [form] = Form.useForm();

    const handleOk = () => {
        form.validateFields().then((values) => {
            onSave(values);
            form.resetFields();
            onClose();
        });
    };

    // Set initial values when modal opens
    if (visible && initialValues) {
        form.setFieldsValue({
            ...initialValues,
            date: initialValues.date ? dayjs(initialValues.date, 'DD/MM/YYYY') : null,
        });
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
                    {initialValues ? 'Edit Class' : 'Create New Class'}
                </span>
            }
            className="create-class-modal"
        >
            <Form form={form} layout="vertical" className="mt-6" initialValues={{ virtualClass: false }}>
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
                        name="date"
                        label={<span className="font-semibold text-gray-700">Class Date</span>}
                        className="flex-1"
                        rules={[{ required: true, message: 'Please select a date' }]}
                    >
                        <DatePicker className="w-full h-[42px] rounded-lg border-gray-200" />
                    </Form.Item>

                    <Form.Item
                        name="location"
                        label={<span className="font-semibold text-gray-700">Location</span>}
                        className="flex-1"
                    >
                        <Input placeholder="Enter Location" className="h-[42px] rounded-lg border-gray-200" />
                    </Form.Item>
                </div>

                <div className="flex justify-between items-center mt-4">
                    <Form.Item name="virtualClass" valuePropName="checked" noStyle>
                        <Checkbox className="text-gray-600 font-medium">Virtual Class</Checkbox>
                    </Form.Item>

                    <Button
                        type="primary"
                        onClick={handleOk}
                        className="bg-[#22C55E] hover:bg-[#16a34a] border-none px-8 h-[42px] rounded-lg font-semibold"
                    >
                        {initialValues ? 'Save Changes' : 'Create Class'}
                    </Button>
                </div>
            </Form>
        </Modal>
    );
};

export default CreateClassModal;
