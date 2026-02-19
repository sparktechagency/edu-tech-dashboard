import React from 'react';
import { Modal, Avatar, Typography, Form, Input, Button } from 'antd';
import { PlusOutlined, FilePdfOutlined, DownloadOutlined } from '@ant-design/icons';

const { Text } = Typography;

interface SubmissionReviewModalProps {
    open: boolean;
    onCancel: () => void;
    submission: any;
    onReview: (id: string, grade: string) => void;
}

const SubmissionReviewModal: React.FC<SubmissionReviewModalProps> = ({ open, onCancel, submission, onReview }) => {
    const [form] = Form.useForm();

    if (!submission) return null;

    return (
        <Modal
            title={null}
            open={open}
            onCancel={onCancel}
            footer={null}
            width={700}
            centered
            closeIcon={
                <div className="bg-gray-100 p-1.5 rounded-full hover:bg-gray-200 transition-colors mt-2 mr-2">
                    <PlusOutlined className="rotate-45" />
                </div>
            }
        >
            <div className="pt-4 px-2">
                <div className="flex items-center gap-4 mb-8">
                    <Avatar src={submission.avatar} size={64} className="border-2 border-white shadow-sm" />
                    <div>
                        <h3 className="text-xl font-bold text-gray-800 !m-0">{submission.name}</h3>
                        <Text type="secondary" className="text-sm">
                            Submission Date: {submission.submissionDate}
                        </Text>
                    </div>
                </div>

                <div className="bg-gray-50/50 border border-gray-100 p-4 rounded-xl flex items-center justify-between mb-8">
                    <div className="flex items-center gap-4">
                        <div className="bg-blue-50 p-2.5 rounded-lg border border-blue-100">
                            <FilePdfOutlined className="text-[#3182CE] text-xl" />
                        </div>
                        <div>
                            <div className="font-bold text-gray-800">Assignment File</div>
                            <div className="text-xs text-gray-400">
                                {submission.attachment || '1.2 MB'} • PDF Document
                            </div>
                        </div>
                    </div>
                    <a
                        href="#"
                        className="flex items-center justify-center h-10 w-10 bg-blue-50/50 rounded-full hover:bg-blue-100 transition-colors text-[#3182CE]"
                    >
                        <DownloadOutlined />
                    </a>
                </div>

                <Form form={form} layout="vertical">
                    <Form.Item label={<span className="font-bold text-gray-700 text-base">Student Notes</span>}>
                        <Input.TextArea
                            rows={4}
                            defaultValue={submission.notes}
                            readOnly
                            className="rounded-xl bg-gray-50/30 border-gray-100 py-4 px-5 text-gray-600 focus:bg-white"
                        />
                    </Form.Item>

                    <div className="flex items-center gap-4 mt-4">
                        <span className="font-bold text-gray-800">Grade</span>
                        <div className="flex items-center">
                            <Form.Item name="grade" initialValue={submission.grade?.split('/')[0] || '98'} noStyle>
                                <Input className="w-20 h-14 rounded-xl text-center font-bold text-xl bg-white border-gray-200" />
                            </Form.Item>
                            <span className="ml-3 text-gray-400 font-bold text-lg">/100</span>
                        </div>
                    </div>

                    <div className="flex justify-end gap-4 mt-10">
                        <Button className="h-12 px-10 rounded-xl font-bold bg-white border-gray-200" onClick={onCancel}>
                            Cancel
                        </Button>
                        <Button
                            type="primary"
                            className="h-12 px-12 rounded-xl font-bold bg-[#3182CE] hover:bg-[#2b71b1] border-none shadow-md shadow-blue-200 transition-all hover:-translate-y-0.5"
                            onClick={() => {
                                onReview(submission.key, form.getFieldValue('grade'));
                                onCancel();
                            }}
                        >
                            Review
                        </Button>
                    </div>
                </Form>
            </div>
        </Modal>
    );
};

export default SubmissionReviewModal;
