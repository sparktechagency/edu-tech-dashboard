import { useState } from 'react';
import { Table, Button } from 'antd';
import { Eye, Plus } from 'lucide-react';
import { weeklyReports } from '../../../constants/mentor-data';
import AddReportModal from '../../../components/modals/mentor/AddReportModal';
import ReportDetailsModal from '../../../components/modals/mentor/ReportDetailsModal';
import HeaderTitle from '../../../components/shared/HeaderTitle';

const WeeklyReport = () => {
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
    const [selectedReport, setSelectedReport] = useState<any>(null);

    const columns = [
        {
            title: 'Student Name',
            dataIndex: 'studentName',
            key: 'studentName',
            render: (text: string) => <span className="text-gray-600 font-medium">{text}</span>,
        },
        {
            title: 'Duration',
            dataIndex: 'duration',
            key: 'duration',
            render: (text: string) => <span className="text-gray-500">{text}</span>,
        },
        {
            title: 'Attendance',
            dataIndex: 'attendance',
            key: 'attendance',
            render: (text: string) => <span className="text-gray-600">{text}</span>,
        },
        {
            title: 'Hard Outcomes',
            dataIndex: 'hardOutcomes',
            key: 'hardOutcomes',
            align: 'center' as const,
            render: (val: number) => <span className="text-gray-600 font-semibold">{val}</span>,
        },
        {
            title: 'Improvements',
            dataIndex: 'improvements',
            key: 'improvements',
            align: 'center' as const,
            render: (val: number) => <span className="text-gray-600 font-semibold">{val}</span>,
        },
        {
            title: 'Skills Tracked',
            dataIndex: 'skillsTracked',
            key: 'skillsTracked',
            align: 'center' as const,
            render: (val: number) => <span className="text-gray-600 font-semibold">{val}</span>,
        },
        {
            title: 'Action',
            key: 'action',
            render: (_: any, record: any) => (
                <Button
                    icon={<Eye className="w-4 h-4 mr-1" />}
                    onClick={() => {
                        setSelectedReport(record);
                        setIsDetailsModalOpen(true);
                    }}
                    className="flex items-center text-gray-400 border-gray-200 hover:text-primary hover:border-primary transition-colors h-9 px-4 rounded-lg"
                >
                    View
                </Button>
            ),
        },
    ];

    return (
        <section className="space-y-6">
            <div className="flex justify-between items-start">
                <div>
                    <HeaderTitle title="Weekly Reporting" />
                    <p className="text-gray-500 mt-1">Log your hours and submit student progress reports.</p>
                </div>
                <button
                    onClick={() => setIsAddModalOpen(true)}
                    className="h-10 px-6 rounded-lg bg-gray-50 border border-[#d9d9d9] text-[#666] flex items-center font-medium"
                >
                    <span className="flex items-center">
                        <Plus className="w-4 h-4 mr-1" /> Add Report
                    </span>
                </button>
            </div>

            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                <Table
                    columns={columns}
                    dataSource={weeklyReports}
                    pagination={{ pageSize: 7, hideOnSinglePage: true }}
                    className=""
                />
            </div>

            <AddReportModal open={isAddModalOpen} onCancel={() => setIsAddModalOpen(false)} />

            <ReportDetailsModal
                open={isDetailsModalOpen}
                onCancel={() => setIsDetailsModalOpen(false)}
                data={selectedReport}
            />
        </section>
    );
};

export default WeeklyReport;
