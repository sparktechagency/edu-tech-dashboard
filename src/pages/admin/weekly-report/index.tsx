import { useState } from 'react';
import { Table, Button, Input } from 'antd';
import { Eye, Search, Filter } from 'lucide-react';
import WeeklyReportDetailsModal from '../../../components/modals/admin/WeeklyReportDetailsModal';
import HeaderTitle from '../../../components/shared/HeaderTitle';
import { useGetWeeklyReportQuery } from '../../../redux/apiSlices/admin/adminWeeklyReport';
import moment from 'moment';

const AdminWeeklyReport = () => {
    const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
    const [selectedReport, setSelectedReport] = useState<any>(null);
    const [page, setPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState('');
    // API CALLS
    const { data: weeklyReportApi } = useGetWeeklyReportQuery({ page: page, limit: 10, searchTerm: searchTerm });

    const reportsData = weeklyReportApi?.data?.reports?.map((item: any) => ({
        key: item?._id,
        studentName: `${item?.studentId?.firstName} ${item?.studentId?.lastName}`,
        duration: `${moment(item?.weekStartDate).format('DD/MM/YYYY')} - ${moment(item?.weekEndDate).format('DD/MM/YYYY')}`,
        attendance: `${item?.isPresent ? 'Present' : 'Absent'}`,
        hardOutcomes: item?.achievedHardOutcomes?.length,
        improvements: item?.softSkillImprovements?.length,
        skillsTracked: item?.studentId?.userGroup?.length,
        goalSheet: item?.goalSheet,
        comments: item?.comments,
    }));

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
                <div className="flex gap-3 w-full md:w-auto">
                    <div className="relative flex-1 md:w-64">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 z-10" />
                        <Input
                            placeholder="Search materials"
                            onChange={(e) => setSearchTerm(e.target.value)}
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
                    dataSource={reportsData}
                    pagination={{
                        current: page,
                        pageSize: 10,
                        total: weeklyReportApi?.data?.total,
                        showSizeChanger: false,
                        onChange: (page) => setPage(page),
                    }}
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
