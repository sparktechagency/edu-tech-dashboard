import { useState } from 'react';
import { Table, Button, Input, Tag, Avatar } from 'antd';
import {
    Search,
    Filter,
    Download as DownloadIcon,
    Plus,
    Eye,
    Edit2,
    Trash2,
    Link,
    Calendar,
    Star,
    GraduationCap,
} from 'lucide-react';
import { studentsData } from '../../../../contents/admin-data/students';
import ImportExcelModal from '../../../../components/modals/admin/ImportExcelModal';
import StudentDetailsModal from '../../../../components/modals/admin/StudentDetailsModal';
import EditStudentModal from '../../../../components/modals/admin/EditStudentModal';

const Student = () => {
    const [isImportModalOpen, setIsImportModalOpen] = useState(false);
    const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [selectedStudent, setSelectedStudent] = useState<any>(null);

    const columns = [
        {
            title: 'STUDENT',
            dataIndex: 'name',
            key: 'name',
            render: (text: string, record: any) => (
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#f6ffed] flex items-center justify-center text-[#52c41a]">
                        <GraduationCap size={20} />
                    </div>
                    <div>
                        <div className="font-semibold text-gray-800">{text}</div>
                        <div className="text-xs text-gray-400">{record.email}</div>
                    </div>
                </div>
            ),
        },
        {
            title: 'GROUP/TRACK',
            dataIndex: 'groups',
            key: 'groups',
            render: (groups: string[]) => (
                <div className="flex gap-2">
                    {groups?.map((group) => (
                        <Tag
                            key={group}
                            className="rounded-full px-4 py-0.5 bg-[#f6ffed] border-none text-[#52c41a] font-medium"
                        >
                            {group}
                        </Tag>
                    ))}
                </div>
            ),
        },
        {
            title: 'CURRENT MENTOR',
            dataIndex: 'mentorInfo',
            key: 'mentorInfo',
            render: (mentor: any) => {
                if (!mentor) {
                    return (
                        <Tag className="rounded-full px-4 py-0.5 bg-gray-50 border-gray-100 text-gray-400 font-medium">
                            No mentor assignment
                        </Tag>
                    );
                }
                return (
                    <div className="flex items-center gap-2">
                        <Avatar src={mentor.avatar} size="small" />
                        <span className="text-gray-600 font-medium">{mentor.name}</span>
                    </div>
                );
            },
        },
        {
            title: 'STATUS',
            dataIndex: 'status',
            key: 'status',
            render: (status: string) => {
                const color = status === 'Active' ? '#f6ffed' : '#fff7e6';
                const textColor = status === 'Active' ? '#52c41a' : '#faad14';
                return (
                    <Tag
                        className="rounded-full px-4 py-0.5 border-none font-medium"
                        style={{ backgroundColor: color, color: textColor }}
                    >
                        {status}
                    </Tag>
                );
            },
        },
        {
            title: 'ACTION',
            key: 'action',
            render: (_: any, record: any) => (
                <div className="flex flex-wrap gap-2">
                    <Button
                        icon={<Eye size={14} />}
                        className="flex items-center gap-2 border-gray-200 text-gray-500 rounded-md h-8"
                        onClick={() => {
                            setSelectedStudent(record);
                            setIsDetailsModalOpen(true);
                        }}
                    >
                        View
                    </Button>
                    <Button
                        icon={<Edit2 size={14} />}
                        className="flex items-center gap-2 border-gray-200 text-gray-500 rounded-md h-8"
                        onClick={() => {
                            setSelectedStudent(record);
                            setIsEditModalOpen(true);
                        }}
                    >
                        Edit
                    </Button>
                    <Button
                        icon={<Link size={14} />}
                        className="flex items-center gap-2 border-gray-200 text-gray-500 rounded-md h-8"
                    >
                        Assign
                    </Button>
                    <Button
                        icon={<Calendar size={14} />}
                        className="flex items-center gap-2 border-gray-200 text-gray-500 rounded-md h-8"
                    >
                        Class
                    </Button>
                    <Button
                        icon={<Star size={14} />}
                        className="flex items-center gap-2 border-gray-200 text-gray-500 rounded-md h-8"
                    >
                        Review
                    </Button>
                    <Button
                        icon={<Trash2 size={14} />}
                        danger
                        className="flex items-center gap-2 rounded-md h-8 border-[#ff4d4f]"
                    ></Button>
                </div>
            ),
        },
    ];

    return (
        <div className="py-6">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-2xl font-bold text-gray-800">Student Management</h1>
                <div className="flex items-center gap-4">
                    <Button
                        icon={<Filter size={16} />}
                        className="flex items-center gap-2 h-10 border-gray-100 bg-white text-gray-600 rounded-md"
                    >
                        Filter
                    </Button>
                    <Button
                        icon={<DownloadIcon size={16} />}
                        className="flex items-center gap-2 h-10 border-gray-100 bg-white text-gray-600 rounded-md"
                        onClick={() => setIsImportModalOpen(true)}
                    >
                        Import Excel
                    </Button>
                    <div className="relative">
                        <Input
                            placeholder="Search student"
                            prefix={<Search size={16} className="text-gray-400" />}
                            className="h-10 w-64 border-gray-100 bg-white rounded-md"
                        />
                    </div>
                    <Button
                        type="primary"
                        icon={<Plus size={16} />}
                        className="flex items-center gap-2 h-10 bg-[#52c41a] border-none hover:bg-[#73d13d] rounded-md font-semibold"
                    >
                        Add Student
                    </Button>
                </div>
            </div>

            <div className="border border-gray-100 rounded-xl overflow-hidden shadow-sm bg-white">
                <Table
                    columns={columns}
                    dataSource={studentsData}
                    pagination={false}
                    className="admin-students-table"
                    rowClassName="border-b last:border-0 border-gray-50"
                />
            </div>

            {/* Modals */}
            <ImportExcelModal open={isImportModalOpen} onCancel={() => setIsImportModalOpen(false)} />
            <StudentDetailsModal
                open={isDetailsModalOpen}
                onCancel={() => setIsDetailsModalOpen(false)}
                student={selectedStudent}
            />
            <EditStudentModal
                open={isEditModalOpen}
                onCancel={() => setIsEditModalOpen(false)}
                student={selectedStudent}
            />
        </div>
    );
};

export default Student;
