import { Modal, Table } from 'antd';
import { X } from 'lucide-react';

interface WeeklyReportDetailsModalProps {
    open: boolean;
    onCancel: () => void;
    data: any;
}

const WeeklyReportDetailsModal = ({ open, onCancel, data }: WeeklyReportDetailsModalProps) => {
    const skillProgressData = [
        { key: '1', skill: 'HTML', progress: '100%' },
        { key: '2', skill: 'CSS', progress: '90%' },
    ];

    const skillColumns = [
        { title: 'Skill Name', dataIndex: 'skill', key: 'skill' },
        { title: 'Progress', dataIndex: 'progress', key: 'progress', align: 'right' as const },
    ];

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
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-gray-800">Weekly Reporting Details</h2>
                <button onClick={onCancel} className="text-gray-400 hover:text-gray-600 transition-colors">
                    <X size={20} />
                </button>
            </div>

            <div className="space-y-6">
                <section>
                    <h3 className="text-lg font-semibold mb-3 text-gray-800">Weekly Report</h3>
                    <div className="border border-gray-100 rounded-xl overflow-hidden shadow-sm">
                        <table className="w-full text-sm">
                            <tbody className="divide-y divide-gray-100">
                                <tr>
                                    <td className="px-5 py-3.5 bg-gray-50/50 font-medium text-gray-600 w-1/3">
                                        Student Name
                                    </td>
                                    <td className="px-5 py-3.5 text-gray-800 font-medium">
                                        {data?.studentName || 'Labeeb Ahmad Tahir'}
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-5 py-3.5 bg-gray-50/50 font-medium text-gray-600">Duration</td>
                                    <td className="px-5 py-3.5 text-gray-800">
                                        {data?.duration || '20/12/2025 - 20/12/2025'}
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-5 py-3.5 bg-gray-50/50 font-medium text-gray-600">Attendance</td>
                                    <td className="px-5 py-3.5">
                                        <span className="text-green-500 font-semibold">
                                            {data?.attendance || 'Present'}
                                        </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-5 py-3.5 bg-gray-50/50 font-medium text-gray-600">
                                        Hard Outcomes
                                    </td>
                                    <td className="px-5 py-3.5 text-gray-800">{data?.hardOutcomes || 2}</td>
                                </tr>
                                <tr>
                                    <td className="px-5 py-3.5 bg-gray-50/50 font-medium text-gray-600">Improvement</td>
                                    <td className="px-5 py-3.5 text-gray-800">{data?.improvements || 3}</td>
                                </tr>
                                <tr>
                                    <td className="px-5 py-3.5 bg-gray-50/50 font-medium text-gray-600">
                                        Skill Tracked
                                    </td>
                                    <td className="px-5 py-3.5 text-gray-800">3</td>
                                </tr>
                                <tr>
                                    <td className="px-5 py-3.5 bg-gray-50/50 font-medium text-gray-600">
                                        Skill Tracked
                                    </td>
                                    <td className="px-5 py-3.5 text-gray-800">3</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                <section>
                    <h3 className="text-lg font-semibold mb-3 text-gray-800">Skill Progress</h3>
                    <div className="border border-gray-100 rounded-xl overflow-hidden shadow-sm">
                        <Table
                            dataSource={skillProgressData}
                            columns={skillColumns}
                            pagination={false}
                            size="small"
                            showHeader={false}
                            className="skill-progress-table"
                        />
                    </div>
                </section>

                <section>
                    <h3 className="text-lg font-semibold mb-3 text-gray-800">Concerns & Comments</h3>
                    <div className="p-4 bg-white rounded-xl min-h-[120px] border border-gray-100 shadow-inner">
                        <textarea
                            className="w-full h-full bg-transparent border-none outline-none resize-none text-gray-500 text-sm placeholder:italic"
                            placeholder="Enter concerns or comments here..."
                            readOnly
                        ></textarea>
                    </div>
                </section>

                <div className="flex justify-end pt-2">
                    <button
                        onClick={onCancel}
                        className="px-8 py-2.5 rounded-lg border border-gray-200 text-gray-600 font-medium hover:bg-gray-50 transition-colors"
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </Modal>
    );
};

export default WeeklyReportDetailsModal;
