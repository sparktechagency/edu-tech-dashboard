import React from 'react';
import { Modal, Button, Form, Select } from 'antd';
import { X } from 'lucide-react';

interface AssignMentorModalProps {
    open: boolean;
    onCancel: () => void;
    student: any;
}

const AssignMentorModal: React.FC<AssignMentorModalProps> = ({ open, onCancel, student }) => {
    const [form] = Form.useForm();

    return (
        <Modal
            title={<span className="text-2xl font-bold text-gray-800">Assign Mentor - {student?.name}</span>}
            open={open}
            onCancel={onCancel}
            footer={[
                <Button
                    key="cancel"
                    onClick={onCancel}
                    className="px-10 h-10 border-gray-100 text-gray-600 rounded-md font-medium"
                >
                    Cancel
                </Button>,
                <Button
                    key="submit"
                    type="primary"
                    onClick={onCancel}
                    className="px-10 h-10 bg-[#52c41a] border-none hover:bg-[#73d13d] rounded-md font-medium"
                >
                    Assign Mentor
                </Button>,
            ]}
            closeIcon={<X size={20} />}
            width={580}
            centered
        >
            <Form form={form} layout="vertical" className="mt-8 mb-4">
                <Form.Item label={<span className="font-bold text-gray-700">Select Mentor</span>} name="mentor">
                    <Select
                        placeholder="Choose a mentor"
                        className="h-11 rounded-md"
                        variant="filled"
                        style={{ backgroundColor: '#f9f9f9' }}
                        options={[
                            { label: 'aharoni amittai', value: '1' },
                            { label: 'Reem Halabia', value: '2' },
                        ]}
                    />
                </Form.Item>
            </Form>
        </Modal>
    );
};

export default AssignMentorModal;
