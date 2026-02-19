import { useState } from 'react';
import { Table, Button, Input, Select, Space, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { SearchOutlined, FilterOutlined, EyeOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { IoTimeOutline, IoLocationOutline } from 'react-icons/io5';
import HeaderTitle from '../../../components/shared/HeaderTitle';
import { classSchedulesData } from '../../../constants/teacher-data';
import ClassDetailsModal from '../../../components/modals/teacher/ClassDetailsModal';
import CreateClassModal from '../../../components/modals/teacher/CreateClassModal';

export interface ClassScheduleItem {
    key: string;
    title: string;
    description: string;
    date: string;
    time: string;
    location: string;
    targets: string[];
    status: string;
}

const ClassSchedule = () => {
    const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
    const [selectedClass, setSelectedClass] = useState<ClassScheduleItem | null>(null);
    const [data, setData] = useState<ClassScheduleItem[]>(classSchedulesData);

    const handleView = (record: ClassScheduleItem) => {
        setSelectedClass(record);
        setIsDetailsModalOpen(true);
    };

    const handleEdit = (record: ClassScheduleItem) => {
        setSelectedClass(record);
        setIsCreateModalOpen(true);
    };

    const handleAdd = () => {
        setSelectedClass(null);
        setIsCreateModalOpen(true);
    };

    const handleSave = (values: any) => {
        if (selectedClass) {
            // Edit logic (update data)
            setData((prev) =>
                prev.map((item) =>
                    item.key === selectedClass.key
                        ? { ...item, ...values, date: values.date.format('DD/MM/YYYY') }
                        : item,
                ),
            );
        } else {
            // Create logic (add to data)
            const newItem = {
                ...values,
                key: (data.length + 1).toString(),
                date: values.date.format('DD/MM/YYYY'),
                time: '08:00 am', // Mock time
                targets: ['Skill Path', 'Data'], // Mock targets
                status: 'Active',
            };
            setData((prev) => [newItem, ...prev]);
        }
    };

    const columns: ColumnsType<ClassScheduleItem> = [
        {
            title: 'CLASS',
            dataIndex: 'title',
            key: 'title',
            render: (text, record) => (
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center border border-gray-100">
                        <IoTimeOutline size={20} className="text-gray-400" />
                    </div>
                    <div>
                        <div className="font-semibold text-gray-800">{text}</div>
                        <div className="text-xs text-gray-400 truncate w-40">{record.description}</div>
                    </div>
                </div>
            ),
        },
        {
            title: 'DATE & TIME',
            key: 'dateTime',
            render: (_, record) => (
                <div className="text-gray-600">
                    <div className="font-medium">{record.date}</div>
                    <div className="text-xs">{record.time}</div>
                </div>
            ),
        },
        {
            title: 'LOCATION',
            dataIndex: 'location',
            key: 'location',
            render: (text) => (
                <div className="flex items-center gap-2 text-gray-600">
                    <IoLocationOutline size={16} className="text-gray-400" />
                    <span className="text-sm">{text}</span>
                </div>
            ),
        },
        {
            title: 'TARGET',
            dataIndex: 'targets',
            key: 'targets',
            render: (targets: string[]) => (
                <div className="flex flex-col gap-1">
                    {targets.map((target, idx) => (
                        <Tag
                            key={idx}
                            className="bg-green-50 text-green-600 border-none rounded-full px-3 py-1 text-xs font-medium w-fit"
                        >
                            {target}
                        </Tag>
                    ))}
                </div>
            ),
        },
        {
            title: 'STATUS',
            dataIndex: 'status',
            key: 'status',
            render: (status) => (
                <Select
                    defaultValue={status}
                    style={{ width: 100 }}
                    bordered={true}
                    className="rounded-lg status-select"
                    options={[
                        { value: 'Active', label: <span className="text-green-600 font-medium">Active</span> },
                        { value: 'Inactive', label: <span className="text-red-600 font-medium">Inactive</span> },
                    ]}
                />
            ),
        },
        {
            title: 'ACTION',
            key: 'action',
            render: (_, record) => (
                <Space size="small">
                    <Button
                        icon={<EyeOutlined />}
                        onClick={() => handleView(record)}
                        className="flex items-center gap-1 border-gray-200 text-gray-600 hover:text-blue-600"
                    >
                        View
                    </Button>
                    <Button
                        icon={<EditOutlined />}
                        onClick={() => handleEdit(record)}
                        className="flex items-center gap-1 border-gray-200 text-gray-600 hover:text-green-600"
                    >
                        Edit
                    </Button>
                    <Button
                        icon={<DeleteOutlined />}
                        danger
                        className="flex items-center gap-1 border-red-100 bg-red-50 text-red-500 hover:bg-red-100"
                    >
                        Delete
                    </Button>
                </Space>
            ),
        },
    ];

    return (
        <div className="">
            <div className="flex justify-between items-center mb-6">
                <HeaderTitle title="Class Schedule Management" />
                <div className="flex gap-3">
                    <Input
                        placeholder="Search student"
                        prefix={<SearchOutlined className="text-gray-400" />}
                        className="w-72 h-[42px] rounded-lg border-gray-200"
                    />
                    <Button
                        icon={<FilterOutlined />}
                        className="h-[42px] px-6 rounded-lg border-gray-200 flex items-center gap-2 text-gray-600 font-medium"
                    >
                        Filter
                    </Button>
                    <button
                        onClick={handleAdd}
                        className="h-[42px] bg-[#22C55E] text-white text-sm border-none px-6 rounded-lg font-medium"
                    >
                        + Add Class Schedule
                    </button>
                </div>
            </div>

            <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
                <Table columns={columns} dataSource={data} pagination={{ pageSize: 6 }} className="" />
            </div>

            <ClassDetailsModal
                visible={isDetailsModalOpen}
                onClose={() => setIsDetailsModalOpen(false)}
                classData={selectedClass}
            />

            <CreateClassModal
                visible={isCreateModalOpen}
                onClose={() => setIsCreateModalOpen(false)}
                onSave={handleSave}
                initialValues={selectedClass}
            />
        </div>
    );
};

export default ClassSchedule;
