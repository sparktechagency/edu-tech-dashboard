import { useState } from 'react';
import { Table, Button, Select, Input } from 'antd';
import { Eye, Search, Filter } from 'lucide-react';
import { weeklyReports } from '../../../constants/mentor-data';
import WeeklyReportDetailsModal from '../../../components/modals/admin/WeeklyReportDetailsModal';
import HeaderTitle from '../../../components/shared/HeaderTitle';

const AdminWeeklyReport = () => {
    const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
    const [selectedReport, setSelectedReport] = useState<any>(null);

    const columns = [
        {
            title: 'Student Name',
            dataIndex: 'studentName',
            key: 'studentName',
            render: (text: string) => <span className="text-[#333] font-medium">{text}</span>,
        },
        {
            title: 'Duration',
            dataIndex: 'duration',
            key: 'duration',
            render: (text: string) => <span className="text-[#666]">{text}</span>,
        },
        {
            title: 'Attendance',
            dataIndex: 'attendance',
            key: 'attendance',
            render: (text: string) => <span className="text-[#666]">{text}</span>,
        },
        {
            title: 'Hard Outcomes',
            dataIndex: 'hardOutcomes',
            key: 'hardOutcomes',
            align: 'center' as const,
            render: (val: number) => <span className="text-[#666] font-semibold">{val}</span>,
        },
        {
            title: 'Improvements',
            dataIndex: 'improvements',
            key: 'improvements',
            align: 'center' as const,
            render: (val: number) => <span className="text-[#666] font-semibold">{val}</span>,
        },
        {
            title: 'Skills Tracked',
            dataIndex: 'skillsTracked',
            key: 'skillsTracked',
            align: 'center' as const,
            render: (val: number) => <span className="text-[#666] font-semibold">{val}</span>,
        },
        {
            title: 'Action',
            key: 'action',
            render: (_: any, record: any) => (
                <Button
                    icon={<Eye className="w-4 h-4 mr-1 text-[#666]" />}
                    onClick={() => {
                        setSelectedReport(record);
                        setIsDetailsModalOpen(true);
                    }}
                    className="flex items-center text-[#666] border-[#d9d9d9] hover:text-[#4ADE80] hover:border-[#4ADE80] transition-colors h-9 px-4 rounded-lg bg-white shadow-sm"
                >
                    View
                </Button>
            ),
        },
    ];

    return (
        <section className="space-y-6">
            <div className="flex justify-between items-center">
                <HeaderTitle title="Weekly Report" />
            </div>

            <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
                <div className="w-full md:w-1/3">
                    <Select
                        placeholder="Select Mentor"
                        className="w-full h-11"
                        suffixIcon={<Filter className="w-4 h-4 text-gray-400" />}
                        options={[{ value: 'all', label: 'All Mentors' }]}
                    />
                </div>
                <div className="flex gap-3 w-full md:w-auto">
                    <div className="relative flex-1 md:w-64">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 z-10" />
                        <Input
                            placeholder="Search materials"
                            className="h-11 pl-10 border-none shadow-none"
                            style={{ backgroundColor: '#fff' }}
                        />
                    </div>
                    <Button
                        icon={<Filter className="w-4 h-4 text-[#4ADE80]" />}
                        className="h-11 px-6 border-[#4ADE80] text-[#4ADE80] font-medium flex items-center gap-2 rounded-lg"
                    >
                        Filter
                    </Button>
                </div>
            </div>

            <div className="bg-white rounded-2xl border border-[#FAFAFA] shadow-sm overflow-hidden">
                <Table
                    columns={columns}
                    dataSource={weeklyReports}
                    pagination={{ pageSize: 7 }}
                    className="weekly-report-table"
                    rowClassName="hover:bg-[#F9FAFB] transition-colors"
                />
            </div>

            <WeeklyReportDetailsModal
                open={isDetailsModalOpen}
                onCancel={() => setIsDetailsModalOpen(false)}
                data={selectedReport}
            />
        </section>
    );
};

export default AdminWeeklyReport;
