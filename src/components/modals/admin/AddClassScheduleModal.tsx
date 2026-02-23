import { Modal, Input, Select, DatePicker, TimePicker, Checkbox, Form } from 'antd';
import { X } from 'lucide-react';

interface AddClassScheduleModalProps {
    open: boolean;
    onCancel: () => void;
}

const AddClassScheduleModal = ({ open, onCancel }: AddClassScheduleModalProps) => {
    const [form] = Form.useForm();

    const handleSubmit = (values: any) => {
        console.log('Form values:', values);
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
                <h2 className="text-xl font-bold text-gray-800">Add New Class Schedule</h2>
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
                onFinish={handleSubmit}
                autoComplete="off"
                requiredMark={false}
                className="space-y-4"
            >
                <Form.Item
                    name="title"
                    label={<span className="text-sm font-semibold text-gray-700">Class Title</span>}
                    rules={[{ required: true, message: 'Please enter class title' }]}
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
                        rows={4}
                    />
                </Form.Item>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Form.Item
                        name="targetGroup"
                        label={<span className="text-sm font-semibold text-gray-700">Target Group</span>}
                    >
                        <Select placeholder="Select group" className="w-full h-11" />
                    </Form.Item>
                    <Form.Item
                        name="targetTrack"
                        label={<span className="text-sm font-semibold text-gray-700">Target Track</span>}
                    >
                        <Select placeholder="Select Track" className="w-full h-11" />
                    </Form.Item>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Form.Item name="date" label={<span className="text-sm font-semibold text-gray-700">Date</span>}>
                        <DatePicker className="w-full h-11 rounded-lg border-gray-200" />
                    </Form.Item>
                    <Form.Item name="time" label={<span className="text-sm font-semibold text-gray-700">Time</span>}>
                        <TimePicker className="w-full h-11 rounded-lg border-gray-200" format="HH:mm A" />
                    </Form.Item>
                </div>

                <div>
                    <Form.Item name="virtualClass" valuePropName="checked" className="mb-2">
                        <Checkbox>Virtual Class</Checkbox>
                    </Form.Item>
                    <Form.Item
                        name="location"
                        label={<span className="text-sm font-semibold text-gray-700">Location</span>}
                    >
                        <Input placeholder="Enter location" className="h-11 rounded-lg border-gray-200" />
                    </Form.Item>
                </div>

                <div className="flex justify-end pt-4">
                    <button
                        type="submit"
                        className="bg-[#22C55E] text-white px-8 py-2.5 rounded-lg font-semibold hover:bg-[#1ea34d] transition-colors"
                    >
                        Schedule Class
                    </button>
                </div>
            </Form>
        </Modal>
    );
};

export default AddClassScheduleModal;
