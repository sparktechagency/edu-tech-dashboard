import { Button, Select, Input, Tag, Table } from 'antd';
import { Filter, Info, FileText, CheckCircle, Save } from 'lucide-react';
import {
    ATTENDANCE_STUDENTS_DATA,
    ATTENDANCE_STATUS_OPTIONS,
    GROUP_OPTIONS,
    AttendanceStudent,
} from '../../../../constants/admin-data/attendance';

const TakeAttendance = () => {
    // const [selectedGroup, setSelectedGroup] = useState<string | null>(null);

    const columns = [
        {
            title: 'STUDENT',
            dataIndex: 'name',
            key: 'name',
            render: (text: string, record: AttendanceStudent) => (
                <div className="py-2">
                    <div className="font-semibold text-gray-700">{text}</div>
                    <div className="text-xs text-gray-400">{record.email}</div>
                </div>
            ),
        },
        {
            title: 'GROUP/TRACK',
            dataIndex: 'groups',
            key: 'groups',
            render: (groups: string[]) => (
                <div className="flex flex-wrap gap-2">
                    {groups.map((group) => (
                        <Tag
                            key={group}
                            className="bg-gray-50 border-gray-100 text-gray-400 rounded-full px-3 py-0.5 text-xs font-medium"
                        >
                            {group}
                        </Tag>
                    ))}
                </div>
            ),
        },
        {
            title: 'STATUS',
            dataIndex: 'status',
            key: 'status',
            render: () => (
                <Select
                    placeholder="-------------"
                    className="w-full h-10 rounded-lg status-select-attendance"
                    variant="filled"
                    options={ATTENDANCE_STATUS_OPTIONS}
                    style={{ backgroundColor: '#f9f9f9', borderRadius: '8px' }}
                />
            ),
        },
        {
            title: 'NOTES',
            dataIndex: 'notes',
            key: 'notes',
            render: () => <Input placeholder="Optional" className="h-10 border-gray-100 bg-gray-50/50 rounded-lg" />,
        },
    ];

    return (
        <div className="pb-10">
            {/* Top Filters & Buttons */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 flex items-center justify-center border border-gray-100 rounded-lg bg-white text-gray-400">
                        <Filter size={18} />
                    </div>
                    <Select placeholder="All Groups" className="w-44 h-11" options={GROUP_OPTIONS} />

                    <Select placeholder="Select option" className="w-44 h-11" options={[]} />
                    <Button className="h-11 px-6 border-gray-100 bg-gray-50 text-gray-600 font-medium rounded-lg hover:bg-gray-100">
                        Clear Filters
                    </Button>
                </div>
                <div className="flex items-center gap-3">
                    <Button
                        type="primary"
                        icon={<CheckCircle size={18} />}
                        className="h-11 bg-[#63d97d] border-none hover:bg-[#52c41a] px-6 rounded-lg font-semibold flex items-center gap-2"
                    >
                        Take Attendance
                    </Button>
                    <Button
                        className="h-11 px-6 border-gray-100 bg-gray-50 text-gray-600 font-medium rounded-lg hover:bg-gray-100 flex items-center gap-2"
                        icon={<FileText size={18} />}
                    >
                        Logs
                    </Button>
                </div>
            </div>

            {/* Info Alert */}
            <div className="bg-[#fff9ec] border border-[#ffecd2] rounded-xl p-4 flex items-start gap-3 mb-8">
                <div className="mt-0.5">
                    <div className="w-6 h-6 rounded-full border border-gray-800 flex items-center justify-center text-gray-800">
                        <Info size={14} />
                    </div>
                </div>
                <p className="text-[#856404] text-[15px] leading-relaxed">
                    You must select a <span className="font-bold">Group</span> before taking attendance. After choosing
                    a group, you can set statuses and save. Any student whose status you don't change will be saved as{' '}
                    <span className="font-bold text-gray-800">Absent</span> by default.
                </p>
            </div>

            {/* Bulk Actions & Save Button */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                <div className="flex items-center gap-3">
                    {['Present', 'Absent', 'Late', 'Excused'].map((status) => (
                        <Button
                            key={status}
                            className="h-10 border-gray-100 bg-gray-50 text-gray-500 font-medium rounded-lg px-5"
                        >
                            Set all: {status}
                        </Button>
                    ))}
                </div>
                <Button
                    type="primary"
                    icon={<Save size={18} />}
                    className="h-11 bg-[#a5ebb3] border-none hover:bg-[#63d97d] px-8 rounded-lg font-semibold flex items-center gap-2"
                >
                    Save Attendance
                </Button>
            </div>

            {/* Attendance Table */}
            <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm">
                <Table
                    columns={columns}
                    dataSource={ATTENDANCE_STUDENTS_DATA}
                    pagination={false}
                    className="attendance-table"
                    rowClassName="hover:bg-gray-50/50 transition-colors"
                />
            </div>
        </div>
    );
};

export default TakeAttendance;
