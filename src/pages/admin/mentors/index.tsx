import { useState } from 'react';
import { Table, Button, Input, Select, Space, Tag, Avatar, Progress } from 'antd';
import { Search, Filter, Download, Eye, Edit2, Trash2, User, Star, TrendingUp } from 'lucide-react';
import { mentorsData, mentorStats, statusOptions } from '../../../constants/admin-data/mentors';
import HeaderTitle from '../../../components/shared/HeaderTitle';
import ImportMentorsModal from '../../../components/modals/admin/ImportMentorsModal';
import MentorDetailsModal from '../../../components/modals/admin/MentorDetailsModal';
import EditMentorModal from '../../../components/modals/admin/EditMentorModal';
import ReviewMentorModal from '../../../components/modals/admin/ReviewMentorModal';
import MentorStudentsModal from '../../../components/modals/admin/MentorStudentsModal';

const AdminMentors = () => {
    const [isImportModalOpen, setIsImportModalOpen] = useState(false);
    const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
    const [isStudentsModalOpen, setIsStudentsModalOpen] = useState(false);
    const [selectedMentor, setSelectedMentor] = useState<any>(null);

    const columns = [
        {
            title: 'TEACHER',
            dataIndex: 'name',
            key: 'name',
            render: (text: string, record: any) => (
                <div className="flex items-center gap-3">
                    <Avatar
                        icon={<User size={16} />}
                        className="bg-[#f6ffed] text-[#52c41a] flex items-center justify-center border-none"
                    />
                    <div>
                        <div className="font-semibold text-gray-800">{text}</div>
                        <div className="text-xs text-gray-400">{record.email}</div>
                    </div>
                </div>
            ),
        },
        {
            title: 'GROUPS',
            dataIndex: 'groups',
            key: 'groups',
            render: (groups: string[]) => (
                <div className="flex flex-wrap gap-2">
                    {groups.length > 0 ? (
                        groups.map((group) => (
                            <Tag
                                key={group}
                                className="rounded-full px-4 py-0.5 bg-gray-50 border-gray-100 text-gray-500 font-medium"
                            >
                                {group}
                            </Tag>
                        ))
                    ) : (
                        <span className="text-gray-400 font-medium ml-1">No Group</span>
                    )}
                </div>
            ),
        },
        {
            title: 'TRACK',
            dataIndex: 'track',
            key: 'track',
            render: (track: string) => <span className="text-gray-500 font-medium">{track}</span>,
        },
        {
            title: 'LOCATION',
            dataIndex: 'location',
            key: 'location',
            render: (location: string) => <span className="text-gray-500 font-medium">{location}</span>,
        },
        {
            title: 'STATUS',
            dataIndex: 'status',
            key: 'status',
            render: (status: string) => (
                <Select
                    defaultValue={status}
                    options={statusOptions}
                    className="w-32 rounded-lg mentor-status-select"
                    variant="filled"
                    style={{ backgroundColor: '#f9f9f9', borderRadius: '8px' }}
                />
            ),
        },
        {
            title: 'ACTION',
            key: 'action',
            render: (_: any, record: any) => (
                <Space size="small">
                    <Button
                        icon={<Eye size={14} />}
                        className="flex items-center gap-2 border-gray-200 text-gray-700 hover:text-black font-medium h-9 rounded-md"
                        onClick={() => {
                            setSelectedMentor(record);
                            setIsDetailsModalOpen(true);
                        }}
                    >
                        View
                    </Button>
                    <Button
                        icon={<Edit2 size={14} />}
                        className="flex items-center gap-2 border-gray-200 text-gray-700 hover:text-black font-medium h-9 rounded-md"
                        onClick={() => {
                            setSelectedMentor(record);
                            setIsEditModalOpen(true);
                        }}
                    >
                        Edit
                    </Button>
                    <Button
                        icon={<Star size={14} />}
                        className="flex items-center gap-2 border-gray-200 text-gray-700 hover:text-black font-medium h-9 rounded-md"
                        onClick={() => {
                            setSelectedMentor(record);
                            setIsReviewModalOpen(true);
                        }}
                    >
                        Review
                    </Button>
                    <Button
                        icon={<Trash2 size={14} />}
                        danger
                        className="flex items-center gap-2 font-medium h-9 rounded-md border-red-200 text-red-500"
                    >
                        Remove
                    </Button>
                </Space>
            ),
        },
    ];

    return (
        <div className="">
            {/* Header / Stats Title */}
            <div className="mb-6">
                <h2 className="text-xl font-bold text-gray-800 mb-3">Mentor Hours Logging</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
                    {/* Total Hours Card */}
                    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm relative overflow-hidden">
                        <p className="text-gray-400 text-xs font-bold mb-2 tracking-wider">TOTAL HOURS THIS MONTH</p>
                        <div className="flex items-baseline gap-2 mb-3">
                            <span className="text-3xl font-bold text-gray-800">{mentorStats[0].value}</span>
                            <span className="text-gray-400 text-sm">{mentorStats[0].unit}</span>
                        </div>
                        <div className="flex items-center gap-1 text-[#52c41a] text-xs font-semibold">
                            <TrendingUp size={14} />
                            <span>{mentorStats[0].trend}</span>
                        </div>
                    </div>

                    {/* Target Hours Card */}
                    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm relative overflow-hidden">
                        <p className="text-gray-400 text-xs font-bold mb-2 tracking-wider">TARGET HOURS</p>
                        <div className="flex items-baseline gap-2 mb-4">
                            <span className="text-3xl font-bold text-gray-800">{mentorStats[1].value}</span>
                            <span className="text-gray-400 text-sm">{mentorStats[1].unit}</span>
                        </div>
                        <Progress
                            percent={mentorStats[1].progress}
                            showInfo={false}
                            strokeColor="#52c41a"
                            trailColor="#f0f0f0"
                            strokeWidth={10}
                            className="mb-0"
                        />
                    </div>
                </div>
            </div>

            {/* Management Section Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 mt-8 gap-4">
                <HeaderTitle title="Mentor Management" />
                <div className="flex flex-wrap items-center gap-3">
                    <Button
                        icon={<Filter size={16} />}
                        className="flex items-center gap-2 h-10 border-gray-100 bg-white text-gray-600 rounded-lg px-4"
                    >
                        Filter
                    </Button>
                    <Button
                        icon={<Download size={16} />}
                        className="flex items-center gap-2 h-10 border-gray-200 bg-white text-gray-600 rounded-lg px-4"
                        onClick={() => setIsImportModalOpen(true)}
                    >
                        Import Excel
                    </Button>
                    <div className="relative">
                        <Input
                            placeholder="Search Students...."
                            prefix={<Search size={16} className="text-gray-400" />}
                            className="h-10 w-64 border-gray-100 bg-white rounded-lg"
                        />
                    </div>
                </div>
            </div>

            {/* Main Table */}
            <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm">
                <Table
                    columns={columns}
                    dataSource={mentorsData}
                    pagination={false}
                    className="mentor-management-table"
                    rowClassName="hover:bg-gray-50/50 transition-colors"
                />
            </div>

            {/* Modals */}
            <ImportMentorsModal open={isImportModalOpen} onCancel={() => setIsImportModalOpen(false)} />
            <MentorDetailsModal
                open={isDetailsModalOpen}
                onCancel={() => setIsDetailsModalOpen(false)}
                mentor={selectedMentor}
                onEditHours={() => {
                    setIsDetailsModalOpen(false);
                    setIsEditModalOpen(true);
                }}
            />
            <EditMentorModal
                open={isEditModalOpen}
                onCancel={() => setIsEditModalOpen(false)}
                mentor={selectedMentor}
            />
            <ReviewMentorModal open={isReviewModalOpen} onCancel={() => setIsReviewModalOpen(false)} />
            <MentorStudentsModal
                open={isStudentsModalOpen}
                onCancel={() => setIsStudentsModalOpen(false)}
                mentor={selectedMentor}
            />
        </div>
    );
};

export default AdminMentors;
