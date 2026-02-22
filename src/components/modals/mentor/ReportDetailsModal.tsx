import { Modal, Table } from 'antd';

interface ReportDetailsModalProps {
    open: boolean;
    onCancel: () => void;
    data: any;
}

const ReportDetailsModal = ({ open, onCancel, data }: ReportDetailsModalProps) => {
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
            title={<span className="text-xl font-bold">Weekly Reporting Details</span>}
            open={open}
            onCancel={onCancel}
            footer={false}
            width={700}
            className="rounded-2xl overflow-hidden"
            centered
        >
            <div className="space-y-6 pt-3">
                <section>
                    <div className="border border-gray-100 rounded-xl overflow-hidden">
                        <table className="w-full text-sm">
                            <tbody className="divide-y divide-gray-100">
                                <tr>
                                    <td className="px-4 py-3 bg-gray-50 font-medium text-gray-600 w-1/3">
                                        Student Name
                                    </td>
                                    <td className="px-4 py-3 text-gray-800">
                                        {data?.studentName || 'Labeeb Ahmad Tahir'}
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 bg-gray-50 font-medium text-gray-600">Duration</td>
                                    <td className="px-4 py-3 text-gray-800">
                                        {data?.duration || '20/12/2025 - 20/12/2025'}
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 bg-gray-50 font-medium text-gray-600">Attendance</td>
                                    <td className="px-4 py-3 text-green-500 font-semibold">
                                        {data?.attendance || 'Present'}
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 bg-gray-50 font-medium text-gray-600">Hard Outcomes</td>
                                    <td className="px-4 py-3 text-gray-800">{data?.hardOutcomes || 2}</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 bg-gray-50 font-medium text-gray-600">Improvement</td>
                                    <td className="px-4 py-3 text-gray-800">{data?.improvements || 3}</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 bg-gray-50 font-medium text-gray-600">Skill Tracked</td>
                                    <td className="px-4 py-3 text-gray-800">3</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                <section>
                    <h3 className="text-lg font-semibold mb-4 text-gray-800">Skill Progress</h3>
                    <div className="border border-blue-100 rounded-xl overflow-hidden">
                        <Table
                            dataSource={skillProgressData}
                            columns={skillColumns}
                            pagination={false}
                            size="small"
                            bordered
                        />
                    </div>
                </section>

                <section>
                    <h3 className="text-lg font-semibold mb-2 text-gray-800">Concerns & Comments</h3>
                    <div className="p-4 bg-gray-50 rounded-xl min-h-[100px] border border-gray-200">
                        <p className="text-gray-500 text-sm italic">No concerns or comments provided.</p>
                    </div>
                </section>
            </div>
        </Modal>
    );
};

export default ReportDetailsModal;
