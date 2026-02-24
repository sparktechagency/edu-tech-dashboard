import { Modal, Form, Input, DatePicker, Button } from 'antd';
import { useCreateTimeTrackingMutation } from '../../../../redux/apiSlices/mentor/timeTrackingApi';
import { toast } from 'sonner';

interface AddTimeTrackModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const AddTimeTrackModal = ({ isOpen, onClose }: AddTimeTrackModalProps) => {
    const [form] = Form.useForm();
    const [createTimeTracking, { isLoading }] = useCreateTimeTrackingMutation();

    const onFinish = async (values: any) => {
        const payload = {
            ...values,
            startTime: values.startTime.toISOString(),
            endTime: values.endTime.toISOString(),
        };

        try {
            await createTimeTracking(payload).unwrap();
            toast.success('Time track created successfully');
            form.resetFields();
            onClose();
        } catch (error: any) {
            toast.error(error?.data?.message || 'Failed to create time track');
        }
    };

    return (
        <Modal
            open={isOpen}
            onCancel={onClose}
            footer={null}
            title={<span className="text-xl font-bold text-gray-800">Add Time Track</span>}
            width={600}
            centered
        >
            <Form form={form} layout="vertical" onFinish={onFinish} className="space-y-4 pt-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Form.Item
                        name="timeType"
                        label={<span className="font-semibold text-gray-700">Time Type</span>}
                        rules={[{ required: true, message: 'Please input time type!' }]}
                    >
                        <Input
                            placeholder="Banking For Better Days"
                            className="h-11 rounded-lg bg-gray-50 border-gray-200"
                        />
                    </Form.Item>

                    <Form.Item
                        name="requesting"
                        label={<span className="font-semibold text-gray-700">Requesting</span>}
                        rules={[{ required: true, message: 'Please input requesting!' }]}
                    >
                        <Input placeholder="1:00" className="h-11 rounded-lg bg-gray-50 border-gray-200" />
                    </Form.Item>

                    <Form.Item
                        name="startTime"
                        label={<span className="font-semibold text-gray-700">Start Time</span>}
                        rules={[{ required: true, message: 'Please select start time!' }]}
                    >
                        <DatePicker showTime className="w-full h-11 rounded-lg" placeholder="Select start time" />
                    </Form.Item>

                    <Form.Item
                        name="endTime"
                        label={<span className="font-semibold text-gray-700">End Time</span>}
                        rules={[{ required: true, message: 'Please select end time!' }]}
                    >
                        <DatePicker showTime className="w-full h-11 rounded-lg" placeholder="Select end time" />
                    </Form.Item>
                </div>

                <Form.Item
                    name="comments"
                    label={<span className="font-semibold text-gray-700">Comments</span>}
                    rules={[{ required: true, message: 'Please input comments!' }]}
                >
                    <Input.TextArea
                        rows={4}
                        placeholder="Extra hours for backend deployment."
                        className="rounded-xl bg-gray-50 border-gray-200 pt-3"
                    />
                </Form.Item>

                <div className="flex justify-end gap-3 pt-4">
                    <Button
                        className="h-10 px-6 rounded-lg font-semibold bg-gray-50 border-gray-200 text-gray-600 hover:bg-gray-100 transition-colors"
                        onClick={onClose}
                    >
                        Cancel
                    </Button>
                    <Button
                        type="primary"
                        htmlType="submit"
                        loading={isLoading}
                        className="h-10 px-6 rounded-lg font-semibold bg-primary border-none hover:opacity-90 transition-opacity"
                    >
                        Submit
                    </Button>
                </div>
            </Form>
        </Modal>
    );
};

export default AddTimeTrackModal;
