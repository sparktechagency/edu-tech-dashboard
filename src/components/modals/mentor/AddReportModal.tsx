import { Modal, Form, Select, DatePicker, Checkbox, Input, Slider } from 'antd';

interface AddReportModalProps {
    open: boolean;
    onCancel: () => void;
}

const AddReportModal = ({ open, onCancel }: AddReportModalProps) => {
    const [form] = Form.useForm();

    const onFinish = (values: any) => {
        console.log('Success:', values);
        onCancel();
    };

    return (
        <Modal
            title={<span className="text-xl font-bold">Add Report</span>}
            open={open}
            onCancel={onCancel}
            footer={null}
            width={700}
            className="rounded-2xl overflow-hidden"
            centered
        >
            <Form form={form} layout="vertical" onFinish={onFinish} className="space-y-4">
                <Form.Item name="student" label={<span className="font-semibold">Student</span>}>
                    <Select placeholder="Select Student">
                        <Select.Option value="1">Labeeb Ahmad</Select.Option>
                    </Select>
                </Form.Item>

                <div className="grid grid-cols-2 gap-4">
                    <Form.Item name="startDate" label={<span className="font-semibold">Week Start Date</span>}>
                        <DatePicker className="w-full" placeholder="mm/dd/yyyy" />
                    </Form.Item>
                    <Form.Item name="endDate" label={<span className="font-semibold">Week End Date</span>}>
                        <DatePicker className="w-full" placeholder="mm/dd/yyyy" />
                    </Form.Item>
                </div>

                <div className="space-y-4">
                    <h3 className="font-bold text-gray-800">Weekly Report</h3>
                    <Form.Item
                        name="attendance"
                        label={<span className="text-sm font-medium">Was the student present?</span>}
                    >
                        <Checkbox.Group>
                            <Checkbox value="yes">Yes</Checkbox>
                            <Checkbox value="no">No</Checkbox>
                        </Checkbox.Group>
                    </Form.Item>

                    <Form.Item
                        name="outcomes"
                        label={
                            <span className="text-sm font-medium">
                                Has the student achieved any of the hard outcomes since the last mentor meeting?
                            </span>
                        }
                    >
                        <Checkbox.Group className="grid grid-cols-3 gap-2">
                            <Checkbox value="assignment">Assignment</Checkbox>
                            <Checkbox value="homework">Homework</Checkbox>
                            <Checkbox value="employment">Employment</Checkbox>
                            <Checkbox value="training">Training</Checkbox>
                            <Checkbox value="volunteering">Volunteering</Checkbox>
                        </Checkbox.Group>
                    </Form.Item>

                    <Form.Item
                        name="improvements"
                        label={
                            <span className="text-sm font-medium">
                                Has the student made any improvements in any of the following?
                            </span>
                        }
                    >
                        <Checkbox.Group className="grid grid-cols-2 gap-2">
                            <Checkbox value="communication">Communication</Checkbox>
                            <Checkbox value="settings">Settings and achieving goals</Checkbox>
                            <Checkbox value="management">The management</Checkbox>
                            <Checkbox value="confidence">Confidence</Checkbox>
                        </Checkbox.Group>
                    </Form.Item>

                    <Form.Item
                        name="concerns"
                        label={
                            <span className="text-sm font-medium">Did you have any concerns of future comments?</span>
                        }
                    >
                        <Input.TextArea rows={4} placeholder="Type concerns here..." className="rounded-xl" />
                    </Form.Item>
                </div>

                <div className="">
                    <h3 className="font-semibold text-lg text-gray-800 pb-2">Goal Sheet</h3>

                    <Form.Item name="skillName" label={<span className="text-sm font-medium">Skill Name</span>}>
                        <Input placeholder="HTML/CSS Development" className="rounded-lg h-10" />
                    </Form.Item>

                    <div className="grid grid-cols-2 gap-4">
                        <Form.Item
                            label={
                                <div className="flex justify-between w-full">
                                    <span className="text-sm font-medium">Planed Progress</span>
                                    <span className="text-sm font-bold ms-1">18%</span>
                                </div>
                            }
                        >
                            <Slider
                                defaultValue={18}
                                tooltip={{ open: false }}
                                trackStyle={{ backgroundColor: '#8B5CF6' }}
                            />
                        </Form.Item>

                        <Form.Item
                            label={
                                <div className="flex justify-between w-full">
                                    <span className="text-sm font-medium">Planed Progress</span>
                                    <span className="text-sm font-bold ms-1">18%</span>
                                </div>
                            }
                        >
                            <Slider
                                defaultValue={18}
                                tooltip={{ open: false }}
                                trackStyle={{ backgroundColor: '#8B5CF6' }}
                            />
                        </Form.Item>
                    </div>
                </div>

                <div className="">
                    <h3 className="font-semibold text-lg text-gray-800 pb-2">Objectives</h3>
                    <Form.Item label={<span className="text-sm font-medium">Write the objectives</span>}>
                        <Input.TextArea rows={4} className="rounded-xl" />
                    </Form.Item>
                </div>

                <div className="flex gap-4 pt-4">
                    <button className="flex-1 h-11 rounded-xl font-semibold bg-primary border-none ">Submit</button>
                </div>
            </Form>
        </Modal>
    );
};

export default AddReportModal;
