import { useState } from 'react';
import { Table, Button, Input, Select } from 'antd';
import { Search, Filter, Plus, Eye, Edit, Trash2, ChevronDown, Calendar } from 'lucide-react';
import HeaderTitle from '../../../components/shared/HeaderTitle';
import AddEventModal from '../../../components/modals/admin/AddEventModal';
import EventDetailsModal from '../../../components/modals/admin/EventDetailsModal';

const eventsData = [
    {
        key: '1',
        title: 'Essential Experts Training',
        description: 'Join us for an engaging session',
        date: '17/10/2025',
        location: 'Single 126, 1015 AE, Amsterdam',
        type: 'Workshop',
        target: ['Skill Path'],
        status: 'Active',
    },
    {
        key: '2',
        title: 'Essential Experts Training',
        description: 'Join us for an engaging session',
        date: '17/10/2025',
        location: 'Single 126, 1015 AE, Amsterdam',
        type: 'Workshop',
        target: ['Skill Path'],
        status: 'Active',
    },
    {
        key: '3',
        title: 'Essential Experts Training',
        description: 'Join us for an engaging session',
        date: '17/10/2025',
        location: 'Single 126, 1015 AE, Amsterdam',
        type: 'Workshop',
        target: ['Skill Path'],
        status: 'Active',
    },
    {
        key: '4',
        title: 'Essential Experts Training',
        description: 'Join us for an engaging session',
        date: '17/10/2025',
        location: 'Single 126, 1015 AE, Amsterdam',
        type: 'Workshop',
        target: ['Skill Path'],
        status: 'Active',
    },
    {
        key: '5',
        title: 'Essential Experts Training',
        description: 'Join us for an engaging session',
        date: '17/10/2025',
        location: 'Single 126, 1015 AE, Amsterdam',
        type: 'Workshop',
        target: ['Skill Path'],
        status: 'Active',
    },
    {
        key: '6',
        title: 'Essential Experts Training',
        description: 'Join us for an engaging session',
        date: '17/10/2025',
        location: 'Single 126, 1015 AE, Amsterdam',
        type: 'Workshop',
        target: ['Skill Path'],
        status: 'Active',
    },
    {
        key: '7',
        title: 'Essential Experts Training',
        description: 'Join us for an engaging session',
        date: '17/10/2025',
        location: 'Single 126, 1015 AE, Amsterdam',
        type: 'Workshop',
        target: ['Skill Path'],
        status: 'Active',
    },
];

const AdminEvents = () => {
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState<any>(null);

    const columns = [
        {
            title: 'EVENT',
            key: 'event',
            render: (_: any, record: any) => (
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-purple-50 flex items-center justify-center text-purple-500 border border-purple-100 shadow-sm">
                        <Calendar size={18} />
                    </div>
                    <div>
                        <p className="font-semibold text-gray-800 text-[13px]">{record.title}</p>
                        <p className="text-xs text-gray-400">{record.description}</p>
                    </div>
                </div>
            ),
        },
        {
            title: 'DATE & LOCATION',
            key: 'dateLocation',
            render: (_: any, record: any) => (
                <div>
                    <p className="font-semibold text-gray-800 text-[12px]">{record.date}</p>
                    <p className="text-[11px] text-gray-400">{record.location}</p>
                </div>
            ),
        },
        {
            title: 'TYPE',
            dataIndex: 'type',
            key: 'type',
            render: (text: string) => (
                <span className="px-3 py-1 bg-blue-50 text-blue-500 text-[11px] rounded-full border border-blue-100 font-medium">
                    {text}
                </span>
            ),
        },
        {
            title: 'TARGET',
            dataIndex: 'target',
            key: 'target',
            render: (tags: string[]) => (
                <div className="flex gap-2">
                    {tags.map((tag) => (
                        <span
                            key={tag}
                            className="px-3 py-1 bg-gray-50 text-gray-400 text-[11px] rounded-full border border-gray-100 font-medium"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            ),
        },
        {
            title: 'STATUS',
            dataIndex: 'status',
            key: 'status',
            render: (text: string) => (
                <Select
                    defaultValue={text}
                    className="status-select"
                    suffixIcon={<ChevronDown size={14} className="text-green-600" />}
                    bordered={false}
                    options={[
                        { value: 'Active', label: 'Active' },
                        { value: 'Inactive', label: 'Inactive' },
                    ]}
                    style={{
                        backgroundColor: '#F0FDF4',
                        border: '1px solid #BBF7D0',
                        borderRadius: '8px',
                        color: '#16A34A',
                        fontSize: '11px',
                        fontWeight: 600,
                        width: 'fit-content',
                    }}
                    dropdownStyle={{ borderRadius: '8px' }}
                />
            ),
        },
        {
            title: 'ACTION',
            key: 'action',
            render: (_: any, record: any) => (
                <div className="flex items-center gap-2.5">
                    <Button
                        icon={<Eye size={16} />}
                        className="flex items-center justify-center gap-1.5 text-[11px] text-gray-600 hover:!text-blue-500 border-none shadow-none bg-[#F9FAFB] px-3 py-1.5 h-auto font-medium"
                        onClick={() => {
                            setSelectedEvent(record);
                            setIsDetailsModalOpen(true);
                        }}
                    >
                        View
                    </Button>
                    <Button
                        icon={<Edit size={16} />}
                        className="flex items-center justify-center gap-1.5 text-[11px] text-gray-600 hover:!text-green-500 border-none shadow-none bg-[#F9FAFB] px-3 py-1.5 h-auto font-medium"
                    >
                        Edit
                    </Button>
                    <Button
                        icon={<Trash2 size={16} />}
                        className="flex items-center justify-center gap-1.5 text-[11px] text-red-500 hover:!bg-red-50 border border-red-100 rounded-lg px-3 py-1.5 h-auto font-medium shadow-none"
                    >
                        Remove
                    </Button>
                </div>
            ),
        },
    ];

    return (
        <section className="space-y-6">
            <div className="flex justify-between items-center">
                <HeaderTitle title="Event Management" />
                <div className="flex gap-3">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 z-10" />
                        <Input
                            placeholder="Search events"
                            className="h-10 pl-10 bg-[#F9FAFB] border border-gray-100 shadow-sm w-72 rounded-lg"
                        />
                    </div>
                    <Button
                        icon={<Filter className="w-4 h-4" />}
                        className="h-10 px-6 border-gray-100 text-gray-600 font-semibold flex items-center gap-2 rounded-lg shadow-sm"
                    >
                        Filter
                    </Button>
                    <Button
                        icon={<Plus className="w-4 h-4" />}
                        className="h-10 px-6 bg-[#22C55E] text-white hover:!bg-[#1ea34d] border-none font-semibold flex items-center gap-2 rounded-lg shadow-sm"
                        onClick={() => setIsAddModalOpen(true)}
                    >
                        Create New Event
                    </Button>
                </div>
            </div>

            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                <Table
                    columns={columns}
                    dataSource={eventsData}
                    pagination={{ pageSize: 7, position: ['none' as any] }}
                    className="events-table"
                />
            </div>

            <AddEventModal open={isAddModalOpen} onCancel={() => setIsAddModalOpen(false)} />

            <EventDetailsModal
                open={isDetailsModalOpen}
                onCancel={() => setIsDetailsModalOpen(false)}
                data={selectedEvent}
            />
        </section>
    );
};

export default AdminEvents;
