import React, { useState } from 'react';
import { Modal, Button, Form, Input, Radio } from 'antd';
import { X, Plus, Trash2 } from 'lucide-react';

interface AddGoalsModalProps {
    open: boolean;
    onCancel: () => void;
}

const AddGoalsModal: React.FC<AddGoalsModalProps> = ({ open, onCancel }) => {
    const [form] = Form.useForm();
    const [options, setOptions] = useState([
        { id: 'A', text: 'I have never really used a computer' },
        { id: 'B', text: 'I can use basic things (email, browser)' },
        { id: 'C', text: 'I can work with documents and online tools' },
    ]);

    const addOption = () => {
        const nextId = String.fromCharCode(65 + options.length);
        setOptions([...options, { id: nextId, text: '' }]);
    };

    const removeOption = (id: string) => {
        setOptions(options.filter((opt) => opt.id !== id));
    };

    return (
        <Modal
            title={<span className="text-xl font-semibold">Add Goals</span>}
            open={open}
            onCancel={onCancel}
            footer={[
                <Button key="cancel" onClick={onCancel} className="px-8 h-10 border-gray-300 rounded-md">
                    Cancel
                </Button>,
                <Button
                    key="submit"
                    type="primary"
                    onClick={onCancel}
                    className="px-8 h-10 bg-[#52c41a] border-none hover:bg-[#73d13d] rounded-md"
                >
                    Upload
                </Button>,
            ]}
            closeIcon={<X size={20} />}
            width={700}
            centered
        >
            <Form form={form} layout="vertical" className="mt-6">
                <Form.Item label={<span className="font-semibold">Part</span>} name="part">
                    <Input placeholder="Enter part" className="h-11 rounded-md bg-gray-50/50" />
                </Form.Item>

                <Form.Item label={<span className="font-semibold">Question</span>} name="question">
                    <Input placeholder="Enter question" className="h-11 rounded-md bg-gray-50/50" />
                </Form.Item>

                <div className="mb-4">
                    <label className="block text-gray-700 font-semibold mb-4">Choose options</label>
                    <div className="space-y-4">
                        {options.map((opt) => (
                            <div key={opt.id} className="flex items-center gap-4">
                                <Radio disabled checked={false} className="m-0" />
                                <span className="text-gray-500 whitespace-nowrap min-w-[70px]">Option {opt.id}</span>
                                <Input
                                    value={opt.text}
                                    placeholder={`Enter option ${opt.id.toLowerCase()}`}
                                    className="h-11 rounded-md bg-gray-50/50"
                                    onChange={(e) => {
                                        const newOptions = [...options];
                                        const index = newOptions.findIndex((o) => o.id === opt.id);
                                        newOptions[index].text = e.target.value;
                                        setOptions(newOptions);
                                    }}
                                />
                                <Button
                                    type="text"
                                    danger
                                    icon={<Trash2 size={18} />}
                                    onClick={() => removeOption(opt.id)}
                                    className="flex items-center justify-center border border-red-100 bg-red-50/30 h-11 w-11 rounded-md"
                                />
                            </div>
                        ))}
                    </div>

                    <Button
                        icon={<Plus size={16} />}
                        onClick={addOption}
                        className="mt-6 w-full h-11 border-none bg-[#52c41a] text-white hover:bg-[#73d13d] flex items-center justify-center gap-2 rounded-md font-medium"
                    >
                        Add Another Option
                    </Button>
                </div>
            </Form>
        </Modal>
    );
};

export default AddGoalsModal;
