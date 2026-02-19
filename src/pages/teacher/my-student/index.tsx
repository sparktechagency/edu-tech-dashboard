import { useState } from 'react';
import { Table, Input, Button, Avatar, Select } from 'antd';
import { IoEyeOutline } from 'react-icons/io5';
import { FilterOutlined, SearchOutlined } from '@ant-design/icons';
import type { ColumnsType } from 'antd/es/table';
import StudentDetailsModal from '../../../components/modals/teacher/StudentDetailsModal';
import HeaderTitle from '../../../components/shared/HeaderTitle';

interface StudentData {
    key: string;
    name: string;
    email: string;
    contact: string;
    group: string;
    track: string;
    joined: string;
    status: string;
    avatar: string;
}

const MyStudent = () => {
    const [searchText, setSearchText] = useState('');
    const [selectedStudent, setSelectedStudent] = useState<StudentData | null>(null);
    const [isModalVisible, setIsModalVisible] = useState(false);

    const mockData: StudentData[] = Array(8)
        .fill(null)
        .map((_, index) => ({
            key: index.toString(),
            name: 'Jhon lura',
            email: 'jhon@mail.com',
            contact: '+99 5489 8721',
            group: 'Skill Path',
            track: 'Data',
            joined: '12/09/2025',
            status: 'Active',
            avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Jhon',
        }));

    const columns: ColumnsType<StudentData> = [
        {
            title: 'STUDENT NAME',
            dataIndex: 'name',
            key: 'name',
            render: (text, record) => (
                <div className="flex items-center gap-3">
                    <Avatar src={record.avatar} size={40} className="border border-gray-100" />
                    <div className="flex flex-col">
                        <span className="font-semibold text-gray-800 leading-none mb-1">{text}</span>
                        <span className="text-gray-400 text-xs">{record.email}</span>
                    </div>
                </div>
            ),
        },
        {
            title: 'CONTACT',
            dataIndex: 'contact',
            key: 'contact',
            render: (text) => <span className="text-gray-600 font-medium">{text}</span>,
        },
        {
            title: 'GROUP',
            dataIndex: 'group',
            key: 'group',
            render: (text) => (
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-[#E6F9F0] text-[#22C55E]">{text}</span>
            ),
        },
        {
            title: 'TRACK',
            dataIndex: 'track',
            key: 'track',
            render: (text) => (
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-[#F3F4F6] text-[#6B7280]">{text}</span>
            ),
        },
        {
            title: 'JOINED',
            dataIndex: 'joined',
            key: 'joined',
            render: (text) => <span className="text-gray-600 font-medium">{text}</span>,
        },
        {
            title: 'STATUS',
            dataIndex: 'status',
            key: 'status',
            render: (status: string) => (
                <Select
                    defaultValue={status}
                    style={{ width: 100 }}
                    options={[
                        { value: 'Active', label: 'Active' },
                        { value: 'Inactive', label: 'Inactive' },
                    ]}
                    className={status === 'Active' ? 'text-green-600' : 'text-red-600'}
                />
            ),
        },
        {
            title: 'ACTION',
            key: 'action',
            render: (_, record) => (
                <Button
                    icon={<IoEyeOutline size={16} />}
                    onClick={() => {
                        setSelectedStudent(record);
                        setIsModalVisible(true);
                    }}
                    className="flex items-center gap-2 border-gray-200 text-gray-600 px-4 h-9 rounded-lg hover:text-gray-900"
                >
                    View
                </Button>
            ),
        },
    ];

    return (
        <div className="">
            <div className="flex justify-between items-center mb-6">
                <HeaderTitle title="My Student" />
                <div className="flex gap-4">
                    <Input
                        placeholder="Search student"
                        onChange={(e) => setSearchText(e.target.value)}
                        prefix={<SearchOutlined className="text-gray-400 text-lg" />}
                        className="w-72 rounded-lg border-gray-200"
                        style={{ height: '42px' }}
                    />
                    <Button
                        icon={<FilterOutlined />}
                        className="flex items-center gap-2 h-[42px] px-6 rounded-lg border-gray-200 font-medium"
                    >
                        Filter
                    </Button>
                </div>
            </div>

            <div className="bg-white rounded-lg border border-gray-100  overflow-hidden shadow-sm">
                <Table
                    columns={columns}
                    dataSource={mockData.filter(
                        (student) =>
                            student.name.toLowerCase().includes(searchText.toLowerCase()) ||
                            student.email.toLowerCase().includes(searchText.toLowerCase()),
                    )}
                    pagination={{ pageSize: 7 }}
                    className="student-table"
                    rowClassName="hover:bg-gray-50/50 transition-colors"
                    onRow={() => ({
                        className: 'h-[72px]',
                    })}
                />
            </div>

            <StudentDetailsModal
                visible={isModalVisible}
                onClose={() => setIsModalVisible(false)}
                student={selectedStudent}
            />
        </div>
    );
};

export default MyStudent;
