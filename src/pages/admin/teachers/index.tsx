import { useState } from 'react';
import { Table, Button, Input, Select, Space, Tag, Avatar } from 'antd';
import { Search, Filter, Download as DownloadIcon, Plus, Eye, Edit2, Trash2, User } from 'lucide-react';
import { teachersData, statusOptions } from '../../../contents/admin-data/teachers';
import ImportExcelModal from '../../../components/modals/admin/ImportExcelModal';
import TeacherDetailsModal from '../../../components/modals/admin/TeacherDetailsModal';
import EditTeacherModal from '../../../components/modals/admin/EditTeacherModal';
import AddAssignmentModal from '../../../components/modals/admin/AddAssignmentModal';
import AddGoalsModal from '../../../components/modals/admin/AddGoalsModal';

const AdminTeachers = () => {
    const [isImportModalOpen, setIsImportModalOpen] = useState(false);
    const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isAddAssignmentModalOpen, setIsAddAssignmentModalOpen] = useState(false);
    const [isAddGoalsModalOpen, setIsAddGoalsModalOpen] = useState(false);
    const [selectedTeacher, setSelectedTeacher] = useState<any>(null);

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
                        <span className="text-gray-400 italic">No Group</span>
                    )}
                </div>
            ),
        },
        {
            title: 'TRACK',
            dataIndex: 'track',
            key: 'track',
            render: (track: string) => <span className="text-gray-500">{track}</span>,
        },
        {
            title: 'LOCATION',
            dataIndex: 'location',
            key: 'location',
            render: (location: string) => <span className="text-gray-500">{location}</span>,
        },
        {
            title: 'STATUS',
            dataIndex: 'status',
            key: 'status',
            render: (status: string) => (
                <Select
                    defaultValue={status}
                    options={statusOptions}
                    className="w-32 rounded-lg"
                    variant="filled"
                    style={{ backgroundColor: '#f5f5f5' }}
                />
            ),
        },
        {
            title: 'ACTION',
            key: 'action',
            render: (_: any, record: any) => (
                <Space size="middle">
                    <Button
                        icon={<Eye size={14} />}
                        className="flex items-center gap-2 border-gray-200 text-gray-700 hover:text-black font-medium"
                        onClick={() => {
                            setSelectedTeacher(record);
                            setIsDetailsModalOpen(true);
                        }}
                    >
                        View
                    </Button>
                    <Button
                        icon={<Edit2 size={14} />}
                        className="flex items-center gap-2 border-gray-200 text-gray-700 hover:text-black font-medium"
                        onClick={() => {
                            setSelectedTeacher(record);
                            setIsEditModalOpen(true);
                        }}
                    >
                        Edit
                    </Button>
                    <Button icon={<Trash2 size={14} />} danger className="flex items-center gap-2 font-medium">
                        Remove
                    </Button>
                </Space>
            ),
        },
    ];

    return (
        <div className="">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-2xl font-bold text-gray-800">Teachers Management</h1>
                <div className="flex items-center gap-4">
                    <Button
                        icon={<Filter size={16} />}
                        className="flex items-center gap-2 h-10 border-gray-100 bg-white text-gray-600"
                    >
                        Filter
                    </Button>
                    <Button
                        icon={<DownloadIcon size={16} />}
                        className="flex items-center gap-2 h-10 border-gray-100 bg-white text-gray-600"
                        onClick={() => setIsImportModalOpen(true)}
                    >
                        Import Excel
                    </Button>
                    <div className="relative">
                        <Input
                            placeholder="Search teacher"
                            prefix={<Search size={16} className="text-gray-400" />}
                            className="h-10 w-64 border-gray-100 bg-white rounded-md"
                        />
                    </div>
                    <Button
                        type="primary"
                        icon={<Plus size={16} />}
                        className="flex items-center gap-2 h-10 bg-[#52c41a] border-none hover:bg-[#73d13d] rounded-md font-semibold"
                        onClick={() => setIsAddAssignmentModalOpen(true)}
                    >
                        Add Assignment
                    </Button>
                    <Button
                        type="primary"
                        icon={<Plus size={16} />}
                        className="flex items-center gap-2 h-10 bg-[#52c41a] border-none hover:bg-[#73d13d] rounded-md font-semibold"
                        onClick={() => setIsAddGoalsModalOpen(true)}
                    >
                        Add Goals
                    </Button>
                </div>
            </div>

            <div className="border border-gray-100 rounded-xl overflow-hidden shadow-sm">
                <Table
                    columns={columns}
                    dataSource={teachersData}
                    pagination={false}
                    className="admin-teachers-table"
                    rowClassName="border-b last:border-0 border-gray-50"
                />
            </div>

            {/* Modals */}
            <ImportExcelModal open={isImportModalOpen} onCancel={() => setIsImportModalOpen(false)} />
            <TeacherDetailsModal
                open={isDetailsModalOpen}
                onCancel={() => setIsDetailsModalOpen(false)}
                teacher={selectedTeacher}
            />
            <EditTeacherModal
                open={isEditModalOpen}
                onCancel={() => setIsEditModalOpen(false)}
                teacher={selectedTeacher}
            />
            <AddAssignmentModal open={isAddAssignmentModalOpen} onCancel={() => setIsAddAssignmentModalOpen(false)} />
            <AddGoalsModal open={isAddGoalsModalOpen} onCancel={() => setIsAddGoalsModalOpen(false)} />
        </div>
    );
};

export default AdminTeachers;
