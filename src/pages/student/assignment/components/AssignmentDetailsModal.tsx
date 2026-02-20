import { Modal, Input, Button, Upload } from 'antd';
import { LuCalendar, LuUploadCloud, LuCheckCircle2, LuDownload } from 'react-icons/lu';
import { Assignment } from '../../../../constants/student/assignments';

const { Dragger } = Upload;

interface AssignmentDetailsModalProps {
    isOpen: boolean;
    onCancel: () => void;
    assignment: Assignment | null;
}

export const AssignmentDetailsModal = ({ isOpen, onCancel, assignment }: AssignmentDetailsModalProps) => {
    if (!assignment) return null;

    return (
        <Modal
            open={isOpen}
            onCancel={onCancel}
            footer={null}
            width={850}
            centered
            title={<span className="text-2xl font-bold text-[#1E293B]">Assignments Details</span>}
            className="assignment-details-modal overflow-hidden [&>.ant-modal-content]:p-8 [&>.ant-modal-content]:rounded-[24px]"
        >
            <div className="mt-4 space-y-8 h-[80vh] overflow-y-auto">
                {/* Tags */}
                <div className="flex gap-2">
                    <span className="bg-[#F1F5F9] text-[#64748B] text-xs font-semibold px-4 py-1.5 rounded-full">
                        {assignment.status}
                    </span>
                    <span className="bg-[#E6FFFA] text-[#3BB77E] text-xs font-semibold px-4 py-1.5 rounded-full uppercase">
                        {assignment.subject}
                    </span>
                </div>

                {/* Title */}
                <h2 className="text-2xl font-bold text-[#1E293B]">{assignment.title}</h2>

                {/* Date Boxes */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white border border-gray-100 p-5 rounded-2xl flex flex-col gap-2">
                        <span className="text-sm font-medium text-[#64748B]">Open Date</span>
                        <div className="flex items-center gap-2 text-[#8B5CF6] font-semibold">
                            <LuCalendar size={18} />
                            <span>{assignment.openDate}</span>
                        </div>
                    </div>
                    <div className="bg-[#F0FFF4] border border-[#DCFCE7] p-5 rounded-2xl flex flex-col gap-2">
                        <span className="text-sm font-medium text-[#64748B]">Submission Date</span>
                        <div className="flex items-center gap-2 text-[#3BB77E] font-semibold">
                            <LuCalendar size={18} />
                            <span>{assignment.dueDate}</span>
                        </div>
                    </div>
                </div>

                {/* Description */}
                <div>
                    <h3 className="text-lg font-bold text-[#64748B] mb-3">Assignment Descriptions</h3>
                    <p className="text-[#64748B] leading-relaxed">
                        {assignment.description} For more detailed information, please refer to the course syllabus and
                        resources provided in the portal. Ensure all steps are followed and criteria are met for full
                        marks.
                    </p>
                </div>

                {/* Submission Area */}
                <div className="bg-white border border-gray-100 p-8 rounded-2xl shadow-sm space-y-6">
                    <div className="flex items-center gap-2 text-[#8B5CF6] font-bold">
                        <LuUploadCloud size={20} />
                        <span>{assignment.status === 'Completed' ? 'Submitted Work' : 'Submit Your Work'}</span>
                    </div>

                    {assignment.status === 'Completed' ? (
                        <div className="space-y-4">
                            <p className="text-sm text-[#94A3B8]">Your assignment has been successfully submitted.</p>
                            <div className="bg-[#F8FAFC] border border-gray-100 p-4 rounded-xl flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center border border-gray-50">
                                        <LuDownload size={20} className="text-[#3BB77E]" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold text-[#1E293B]">demo-assignment.pdf</p>
                                        <p className="text-[10px] text-[#94A3B8]">
                                            Submitted on {assignment.submissionDate || 'Jan 10, 2026'}
                                        </p>
                                    </div>
                                </div>
                                <a
                                    href="/assets/file/demo-assignment.pdf"
                                    download
                                    className="text-[#3BB77E] hover:text-[#34a873] font-bold text-sm underline transition-colors"
                                >
                                    Download
                                </a>
                            </div>
                        </div>
                    ) : (
                        <>
                            <p className="text-sm text-[#94A3B8]">Add any notes or comments about your submission</p>

                            <Dragger
                                style={{
                                    border: '1.5px dashed #CBD5E1',
                                    borderRadius: '16px',
                                    backgroundColor: '#F8FAFC',
                                }}
                                className="p-10 cursor-pointer "
                            >
                                <div className="flex flex-col items-center gap-3">
                                    <LuUploadCloud size={40} className="text-[#94A3B8]" />
                                    <p className="text-[#64748B] text-sm">
                                        <span className="font-semibold">Click to upload</span> or drag and drop
                                    </p>
                                    <p className="text-[#94A3B8] text-xs">PDF, DOC, JPG, PNG (max 10MB)</p>
                                </div>
                            </Dragger>
                        </>
                    )}

                    <div className="space-y-2">
                        <label className="text-sm font-bold text-[#1E293B]">Notes (Optional)</label>
                        <Input.TextArea
                            placeholder="Add any notes or comments about your work..."
                            rows={4}
                            className="rounded-xl border-gray-200 focus:border-[#3BB77E] focus:ring-[#3BB77E]/10"
                            disabled={assignment.status === 'Completed'}
                        />
                    </div>

                    <Button
                        type="primary"
                        className={`w-full h-14 border-none rounded-2xl text-lg font-bold flex items-center justify-center gap-2 mt-4 transition-all ${
                            assignment.status === 'Completed'
                                ? 'bg-gray-100 text-[#94A3B8] cursor-not-allowed hover:bg-gray-100'
                                : 'bg-[#3BB77E] hover:bg-[#34a873] text-white'
                        }`}
                        icon={<LuCheckCircle2 size={20} />}
                        disabled={assignment.status === 'Completed'}
                    >
                        {assignment.status === 'Completed' ? 'Assignment Submitted' : 'Submit Assignment'}
                    </Button>
                </div>
            </div>
        </Modal>
    );
};
