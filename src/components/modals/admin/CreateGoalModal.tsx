import React, { useEffect } from 'react';
import { Modal, Button, Form, Input } from 'antd';
import { X } from 'lucide-react';
import { useCreateGoalMutation, useUpdateGoalMutation } from '../../../redux/apiSlices/admin/adminStudentApi';
import { toast } from 'sonner';

interface CreateGoalModalProps {
    open: boolean;
    onCancel: () => void;
    goal?: any;
    refetch: () => void;
}

const CreateGoalModal: React.FC<CreateGoalModalProps> = ({ open, onCancel, goal, refetch }) => {
    const [form] = Form.useForm();
    const [createGoal, { isLoading: isCreating }] = useCreateGoalMutation();
    const [updateGoal, { isLoading: isUpdating }] = useUpdateGoalMutation();

    useEffect(() => {
        if (goal) {
            form.setFieldsValue({
                index: goal.index,
                title: goal.title,
                description: goal.description,
            });
        } else {
            form.resetFields();
        }
    }, [goal, form, open]);

    const handleOk = async () => {
        try {
            const values = await form.validateFields();
            if (goal) {
                // Update
                toast.promise(updateGoal({ id: goal._id, data: values }).unwrap(), {
                    loading: 'Updating goal...',
                    success: (res) => {
                        form.resetFields();
                        refetch();
                        onCancel();
                        return res?.message || 'Goal updated successfully!';
                    },
                    error: (err: any) => err?.data?.message || 'Failed to update goal',
                });
            } else {
                // Create
                toast.promise(createGoal(values).unwrap(), {
                    loading: 'Creating goal...',
                    success: (res) => {
                        form.resetFields();
                        refetch();
                        onCancel();
                        return res?.message || 'Goal created successfully!';
                    },
                    error: (err: any) => err?.data?.message || 'Failed to create goal',
                });
            }
        } catch (error) {
            console.error('Validate Failed:', error);
        }
    };

    return (
        <Modal
            title={
                <span className="text-xl font-semibold text-[#18212d]">{goal ? 'Edit Goal' : 'Create New Goal'}</span>
            }
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
                    onClick={handleOk}
                    loading={isCreating || isUpdating}
                    className="px-6 h-10 bg-[#63d97d] border-none hover:bg-[#52c41a] rounded-md font-medium"
                >
                    {goal ? 'Update Goal' : 'Create Goal'}
                </Button>,
            ]}
            closeIcon={<X size={20} />}
            width={750}
            centered
        >
            <Form form={form} layout="vertical" className="mt-4">
                <Form.Item
                    label={<span className="font-semibold text-gray-700">Index</span>}
                    name="index"
                    rules={[{ required: true, message: 'Please enter goal index' }]}
                >
                    <Input
                        placeholder="Enter Goal Index"
                        className="h-11 rounded-md bg-gray-50/50 border-gray-100"
                        type="number"
                    />
                </Form.Item>
                <Form.Item
                    label={<span className="font-semibold text-gray-700">Goal Title</span>}
                    name="title"
                    rules={[{ required: true, message: 'Please enter goal title' }]}
                >
                    <Input placeholder="Enter Goal Title" className="h-11 rounded-md bg-gray-50/50 border-gray-100" />
                </Form.Item>

                <Form.Item
                    label={<span className="font-semibold text-gray-700">Description</span>}
                    name="description"
                    rules={[{ required: true, message: 'Please enter description' }]}
                >
                    <Input.TextArea
                        placeholder="Enter goal description"
                        rows={4}
                        className="rounded-md bg-gray-50/50 border-gray-100"
                    />
                </Form.Item>
            </Form>
        </Modal>
    );
};

export default CreateGoalModal;
