import { Form, Select, DatePicker, Input, Button } from 'antd';
import HeaderTitle from '../../../components/shared/HeaderTitle';

const TimeTracking = () => {
    const [form] = Form.useForm();

    const onFinish = (values: any) => {
        console.log('Form values:', values);
    };

    return (
        <section className="">
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden  mx-auto">
                <div className="p-6">
                    <HeaderTitle title="Request Time Off" />

                    <Form form={form} layout="vertical" onFinish={onFinish} className="space-y-6 pt-5">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                            <Form.Item
                                name="timeType"
                                label={<span className="font-semibold text-gray-700">Time Type</span>}
                            >
                                <Select
                                    placeholder="Banking For Better Days"
                                    className="h-12 text-gray-400"
                                    suffixIcon={null}
                                />
                            </Form.Item>

                            <Form.Item
                                name="startDate"
                                label={<span className="font-semibold text-gray-700">Start Date</span>}
                            >
                                <DatePicker className="w-full h-12 rounded-lg" placeholder="mm/dd/yyyy" />
                            </Form.Item>

                            <Form.Item
                                name="endDate"
                                label={<span className="font-semibold text-gray-700">End Date</span>}
                            >
                                <DatePicker className="w-full h-12 rounded-lg" placeholder="mm/dd/yyyy" />
                            </Form.Item>

                            <Form.Item
                                name="requesting"
                                label={<span className="font-semibold text-gray-700">Requesting</span>}
                            >
                                <Input placeholder="1:00" className="h-12 rounded-lg bg-gray-50 border-gray-200" />
                            </Form.Item>
                        </div>

                        <Form.Item name="comment" label={<span className="font-semibold text-gray-700">Comment</span>}>
                            <Input.TextArea
                                rows={4}
                                placeholder="Share Academy"
                                className="rounded-xl bg-gray-50 border-gray-200 pt-3"
                            />
                        </Form.Item>

                        <div className="pt-4 border-t border-gray-100">
                            <p className="text-gray-600 mb-8 font-medium">
                                For more information about your time account balances and absences, please go to{' '}
                                <span className="text-gray-800">Time Off.</span>
                            </p>

                            <div className="flex justify-end gap-3 mt-8">
                                <Button
                                    className="h-11 px-8 rounded-lg font-semibold bg-gray-50 border-gray-200 text-gray-600 hover:bg-gray-100 transition-colors"
                                    onClick={() => form.resetFields()}
                                >
                                    Cancel
                                </Button>
                                <Button
                                    type="primary"
                                    htmlType="submit"
                                    className="h-11 px-8 rounded-lg font-semibold bg-primary border-none hover:opacity-90 transition-opacity"
                                >
                                    Submit
                                </Button>
                            </div>
                        </div>
                    </Form>
                </div>
            </div>
        </section>
    );
};

export default TimeTracking;
