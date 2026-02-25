import { useState } from 'react';
import { Table, Button, Input, Space, Tag, Avatar, Progress } from 'antd';
import { Search, Filter, Download, Eye, Edit2, Trash2, User, Star, TrendingUp, Plus } from 'lucide-react';
import { mentorStats } from '../../../constants/admin-data/mentors';
import HeaderTitle from '../../../components/shared/HeaderTitle';
import ImportMentorsModal from '../../../components/modals/admin/ImportMentorsModal';
import MentorDetailsModal from '../../../components/modals/admin/MentorDetailsModal';
import EditMentorModal from '../../../components/modals/admin/EditMentorModal';
import ReviewMentorModal from '../../../components/modals/admin/ReviewMentorModal';
import MentorStudentsModal from '../../../components/modals/admin/MentorStudentsModal';
import { useDeleteAdminMentorMutation, useGetAdminMentorsQuery } from '../../../redux/apiSlices/admin/adminMentorsApi';
import { useGetAllStudentsQuery } from '../../../redux/apiSlices/admin/adminTeachersApi';
import AddMentorModal from '../../../components/modals/admin/AddMentorModal';
import { toast } from 'sonner';
import { Modal, message } from 'antd';

const AdminMentors = () => {
    const [isImportModalOpen, setIsImportModalOpen] = useState(false);
    const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
    const [isStudentsModalOpen, setIsStudentsModalOpen] = useState(false);
    const [isAddMentorModalOpen, setIsAddMentorModalOpen] = useState(false);
    const [selectedMentor, setSelectedMentor] = useState<any>(null);
    const [page, setPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState('');

    // API CALLS
    const { data: mentorsApi, isLoading, refetch } = useGetAdminMentorsQuery({ page, searchTerm });
    const { data: studentsApi } = useGetAllStudentsQuery({});
    const [deleteMentor] = useDeleteAdminMentorMutation();
    const mentors = mentorsApi?.data?.mentors || [];
    const pagination = mentorsApi?.data?.pagination;

    const columns = [
        {
            title: 'MENTOR',
            dataIndex: 'name',
            key: 'name',
            render: (_: string, record: any) => (
                <div className="flex items-center gap-3">
                    <Avatar
                        src={record.profile}
                        icon={<User size={16} />}
                        className="bg-[#f6ffed] text-[#52c41a] flex items-center justify-center border-none"
                    />
                    <div>
                        <div className="font-semibold text-gray-800">
                            {record.firstName} {record.lastName}
                        </div>
                        <div className="text-xs text-gray-400">{record.email}</div>
                    </div>
                </div>
            ),
        },
        {
            title: 'GROUPS',
            dataIndex: 'userGroup',
            key: 'groups',
            render: (userGroup: any[]) => (
                <div className="flex flex-wrap gap-2">
                    {userGroup && userGroup.length > 0 ? (
                        userGroup.map((group: any) => (
                            <Tag
                                key={group._id}
                                className="rounded-full px-4 py-0.5 bg-gray-50 border-gray-100 text-gray-500 font-medium"
                            >
                                {group.name}
                            </Tag>
                        ))
                    ) : (
                        <span className="text-gray-400 italic">No Group</span>
                    )}
                </div>
            ),
        },
        {
            title: 'TRACK',
            dataIndex: 'userGroupTrack',
            key: 'track',
            render: (track: string) => <span className="text-gray-500 font-medium">{track || 'N/A'}</span>,
        },
        {
            title: 'LOCATION',
            dataIndex: 'address',
            key: 'location',
            render: (address: string) => <span className="text-gray-500 font-medium">{address || 'N/A'}</span>,
        },
        {
            title: 'VERIFIED',
            dataIndex: 'verified',
            key: 'verified',
            render: (verified: boolean) => (
                <Tag color={verified ? 'success' : 'error'} className="rounded-full">
                    {verified ? 'Verified' : 'Unverified'}
                </Tag>
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
                    {/* <Button
                        icon={<Star size={14} />}
                        className="flex items-center gap-2 border-gray-200 text-gray-700 hover:text-black font-medium h-9 rounded-md"
                        onClick={() => {
                            setSelectedMentor(record);
                            setIsReviewModalOpen(true);
                        }}
                    >
                        Review
                    </Button> */}
                    <Button
                        icon={<Trash2 size={14} />}
                        danger
                        className="flex items-center gap-2 font-medium h-9 rounded-md border-red-200 text-red-500"
                        onClick={() => handleDelete(record._id)}
                    >
                        Remove
                    </Button>
                </Space>
            ),
        },
    ];

    const handleDelete = (id: string) => {
        Modal.confirm({
            title: 'Are you sure you want to remove this mentor?',
            content: 'This action cannot be undone.',
            okText: 'Yes, Remove',
            okType: 'danger',
            cancelText: 'No',
            onOk: async () => {
                try {
                    toast.promise(deleteMentor(id).unwrap(), {
                        loading: 'Removing mentor...',
                        success: (res: any) => {
                            if (res?.success) {
                                refetch();
                            }
                            return res?.message || 'Mentor removed successfully';
                        },
                        error: (err: any) => err?.data?.message || err?.message || 'Failed to remove mentor',
                    });
                } catch (error: any) {
                    message.error('Something went wrong');
                }
            },
        });
    };

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
                        type="primary"
                        icon={<Plus size={16} />}
                        className="flex items-center gap-2 h-10 bg-[#52c41a] border-none hover:bg-[#73d13d] rounded-md font-semibold"
                        onClick={() => setIsAddMentorModalOpen(true)}
                    >
                        Create Mentor
                    </Button>
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
                            placeholder="Search Mentors...."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
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
                    dataSource={mentors}
                    loading={isLoading}
                    pagination={{
                        total: pagination?.totalItems,
                        current: pagination?.currentPage,
                        pageSize: 10,
                        onChange: (page) => {
                            setPage(page);
                        },
                    }}
                    className="mentor-management-table"
                    rowClassName="hover:bg-gray-50/50 transition-colors"
                />
            </div>

            {/* Modals */}
            <ImportMentorsModal open={isImportModalOpen} onCancel={() => setIsImportModalOpen(false)} />
            <AddMentorModal
                open={isAddMentorModalOpen}
                onCancel={() => setIsAddMentorModalOpen(false)}
                refetch={refetch}
            />
            <MentorDetailsModal
                open={isDetailsModalOpen}
                onCancel={() => setIsDetailsModalOpen(false)}
                mentor={selectedMentor}
            />
            <EditMentorModal
                open={isEditModalOpen}
                onCancel={() => setIsEditModalOpen(false)}
                mentor={selectedMentor}
                students={studentsApi?.data?.data || []}
                refetch={refetch}
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
