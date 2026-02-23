import { useState } from 'react';
import { Table, Button, Select, Input } from 'antd';
import { Search, Plus, Calendar, MapPin, Eye, Edit, Trash2, ChevronDown, Filter as FilterIcon } from 'lucide-react';
import HeaderTitle from '../../../components/shared/HeaderTitle';
import AddClassScheduleModal from '../../../components/modals/admin/AddClassScheduleModal';
import ClassScheduleDetailsModal from '../../../components/modals/admin/ClassScheduleDetailsModal';
import DeleteScheduleModal from '../../../components/modals/admin/DeleteScheduleModal';

const scheduleData = [
    {
        key: '1',
        title: 'Introduction Computer Basic',
        description: 'This season introduce for student...',
        date: '17/10/2025',
        time: '11:30 am',
        target: ['Skill Path', 'Fullstack'],
        location: '12 Street, Florida',
        status: 'Active',
    },
    {
        key: '2',
        title: 'Introduction Computer Basic',
        description: 'This season introduce for student...',
        date: '17/10/2025',
        time: '11:30 am',
        target: ['Skill Path', 'Fullstack'],
        location: '12 Street, Florida',
        status: 'Active',
    },
    {
        key: '3',
        title: 'Introduction Computer Basic',
        description: 'This season introduce for student...',
        date: '17/10/2025',
        time: '11:30 am',
        target: ['Skill Path', 'Fullstack'],
        location: '12 Street, Florida',
        status: 'Active',
    },
    {
        key: '4',
        title: 'Introduction Computer Basic',
        description: 'This season introduce for student...',
        date: '17/10/2025',
        time: '11:30 am',
        target: ['Skill Path', 'Fullstack'],
        location: '12 Street, Florida',
        status: 'Active',
    },
    {
        key: '5',
        title: 'Introduction Computer Basic',
        description: 'This season introduce for student...',
        date: '17/10/2025',
        time: '11:30 am',
        target: ['Skill Path', 'Fullstack'],
        location: '12 Street, Florida',
        status: 'Active',
    },
    {
        key: '6',
        title: 'Introduction Computer Basic',
        description: 'This season introduce for student...',
        date: '17/10/2025',
        time: '11:30 am',
        target: ['Skill Path', 'Fullstack'],
        location: '12 Street, Florida',
        status: 'Active',
    },
];

const AdminSchedule = () => {
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [selectedSchedule, setSelectedSchedule] = useState<any>(null);

    const columns = [
        {
            title: 'CLASS',
            key: 'class',
            render: (_: any, record: any) => (
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-500">
                        <Calendar size={18} />
                    </div>
                    <div>
                        <p className="font-semibold text-gray-800">{record.title}</p>
                        <p className="text-xs text-gray-400">{record.description}</p>
                    </div>
                </div>
            ),
        },
        {
            title: 'DATE & TIME',
            key: 'dateTime',
            render: (_: any, record: any) => (
                <div className="text-sm">
                    <p className="font-medium text-gray-800">{record.date}</p>
                    <p className="text-gray-400">{record.time}</p>
                </div>
            ),
        },
        {
            title: 'TARGET',
            dataIndex: 'target',
            key: 'target',
            render: (tags: string[]) => (
                <div className="flex gap-1.5">
                    {tags.map((tag) => (
                        <span
                            key={tag}
                            className="px-2.5 py-1 bg-gray-50 text-gray-400 text-[10px] rounded-full border border-gray-100 uppercase tracking-tighter"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            ),
        },
        {
            title: 'LOCATION',
            dataIndex: 'location',
            key: 'location',
            render: (text: string) => (
                <div className="flex items-center gap-1.5 text-sm text-gray-600">
                    <MapPin size={14} className="text-gray-400" />
                    <span>{text}</span>
                </div>
            ),
        },
        {
            title: 'STATUS',
            dataIndex: 'status',
            key: 'status',
            render: (text: string) => (
                <div className="flex items-center gap-2 px-3 py-1 border border-green-200 rounded-lg bg-green-50 text-green-600 text-xs font-medium cursor-pointer w-fit">
                    {text}
                    <ChevronDown size={14} />
                </div>
            ),
        },
        {
            title: 'ACTION',
            key: 'action',
            render: (_: any, record: any) => (
                <div className="flex items-center gap-2">
                    <Button
                        icon={<Eye size={16} />}
                        className="flex items-center justify-center gap-1.5 text-sm text-gray-500 hover:text-blue-500 border-none shadow-none bg-transparent"
                        onClick={() => {
                            setSelectedSchedule(record);
                            setIsDetailsModalOpen(true);
                        }}
                    >
                        View
                    </Button>
                    <Button
                        icon={<Edit size={16} />}
                        className="flex items-center justify-center gap-1.5 text-sm text-gray-500 hover:text-green-500 border-none shadow-none bg-transparent"
                    >
                        Edit
                    </Button>
                    <Button
                        icon={<Trash2 size={16} />}
                        className="flex items-center justify-center gap-1.5 text-sm text-red-500 hover:bg-red-50 border border-red-100 rounded-lg px-3 py-1.5 h-auto transition-colors"
                        onClick={() => {
                            setSelectedSchedule(record);
                            setIsDeleteModalOpen(true);
                        }}
                    >
                        Delete
                    </Button>
                </div>
            ),
        },
    ];

    return (
        <section className="space-y-6">
            <div className="flex justify-between items-center">
                <HeaderTitle title="Class Schedule" />
                <div className="flex gap-3">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 z-10" />
                        <Input
                            placeholder="Search materials"
                            className="h-10 pl-10 bg-[#F9FAFB] border-none shadow-none w-64"
                            style={{ backgroundColor: 'white' }}
                        />
                    </div>
                    <Button
                        icon={<FilterIcon className="w-4 h-4" />}
                        className="h-10 px-6 border-gray-200 text-gray-600 font-medium flex items-center gap-2 rounded-lg"
                    >
                        Filter
                    </Button>
                    <Button
                        icon={<Plus className="w-4 h-4" />}
                        className="h-10 px-6 bg-[#22C55E] text-white hover:bg-[#1ea34d] border-none font-medium flex items-center gap-2 rounded-lg"
                        onClick={() => setIsAddModalOpen(true)}
                    >
                        Add Schedule
                    </Button>
                </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                <div className="flex items-center gap-4">
                    <div className="bg-gray-50 p-2.5 rounded-lg border border-gray-100">
                        <FilterIcon size={18} className="text-gray-400" />
                    </div>
                    <Select
                        placeholder="All Groups"
                        className="w-48 h-10"
                        options={[{ value: 'all', label: 'All Groups' }]}
                    />
                    <Select
                        placeholder="Select option"
                        className="w-48 h-10"
                        options={[{ value: 'option1', label: 'Option 1' }]}
                    />
                    <button className="text-gray-800 font-medium px-6 py-2 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                        Clear Filters
                    </button>
                </div>
            </div>

            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                <Table
                    columns={columns}
                    dataSource={scheduleData}
                    pagination={{ pageSize: 6 }}
                    className="schedule-table"
                />
            </div>

            <AddClassScheduleModal open={isAddModalOpen} onCancel={() => setIsAddModalOpen(false)} />

            <ClassScheduleDetailsModal
                open={isDetailsModalOpen}
                onCancel={() => setIsDetailsModalOpen(false)}
                data={selectedSchedule}
            />

            <DeleteScheduleModal
                open={isDeleteModalOpen}
                onCancel={() => setIsDeleteModalOpen(false)}
                onDelete={() => setIsDeleteModalOpen(false)}
            />
        </section>
    );
};

export default AdminSchedule;
