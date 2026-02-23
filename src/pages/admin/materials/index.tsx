import { useState } from 'react';
import { Table, Button, Input, Select } from 'antd';
import { Search, Filter, Plus, Eye, Edit, Trash2, ChevronDown, FileText, BookOpen } from 'lucide-react';
import HeaderTitle from '../../../components/shared/HeaderTitle';
import AddLearningMaterialModal from '../../../components/modals/admin/AddLearningMaterialModal';
import LearningMaterialDetailsModal from '../../../components/modals/admin/LearningMaterialDetailsModal';

const materialsData = [
    {
        key: '1',
        title: 'Essential Experts Training',
        description: 'Join us for an engaging session',
        type: 'link',
        url: 'https://example.pdf',
        target: ['Skill Path', 'Fullstack'],
        status: 'Active',
    },
    {
        key: '2',
        title: 'Essential Experts Training',
        description: 'Join us for an engaging session',
        type: 'link',
        url: 'https://example.pdf',
        target: ['Skill Path', 'Fullstack'],
        status: 'Active',
    },
    {
        key: '3',
        title: 'Essential Experts Training',
        description: 'Join us for an engaging session',
        type: 'pdf',
        url: 'https://example.pdf',
        target: ['Skill Path', 'Fullstack'],
        status: 'Active',
    },
    {
        key: '4',
        title: 'Essential Experts Training',
        description: 'Join us for an engaging session',
        type: 'pdf',
        url: 'https://example.pdf',
        target: ['Skill Path', 'Fullstack'],
        status: 'Active',
    },
    {
        key: '5',
        title: 'Essential Experts Training',
        description: 'Join us for an engaging session',
        type: 'link',
        url: 'https://example.pdf',
        target: ['Skill Path', 'Fullstack'],
        status: 'Active',
    },
    {
        key: '6',
        title: 'Essential Experts Training',
        description: 'Join us for an engaging session',
        type: 'link',
        url: 'https://example.pdf',
        target: ['Skill Path', 'Fullstack'],
        status: 'Active',
    },
];

const AdminLearningMaterials = () => {
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
    const [selectedMaterial, setSelectedMaterial] = useState<any>(null);

    const columns = [
        {
            title: 'Material',
            key: 'material',
            render: (_: any, record: any) => (
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-500 border border-blue-100 shadow-sm">
                        <BookOpen size={18} />
                    </div>
                    <div>
                        <p className="font-semibold text-gray-800 text-[13px]">{record.title}</p>
                        <p className="text-xs text-gray-400">{record.description}</p>
                    </div>
                </div>
            ),
        },
        {
            title: 'TYPE',
            key: 'type',
            render: (_: any, record: any) => (
                <div>
                    {record.type === 'link' ? (
                        <a
                            href={record.url}
                            className="text-gray-400 text-xs flex items-center gap-1.5 hover:text-blue-500 transition-colors border-b border-gray-200 border-dotted pb-0.5"
                        >
                            {record.url}
                        </a>
                    ) : (
                        <div className="bg-green-50 w-8 h-8 rounded flex items-center justify-center text-green-500 shadow-sm border border-green-100">
                            <FileText size={18} />
                        </div>
                    )}
                </div>
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
                            className="px-3 py-1 bg-gray-50 text-gray-400 text-[10px] rounded-full border border-gray-200 uppercase tracking-tight font-medium"
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
                        fontSize: '12px',
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
                        className="flex items-center justify-center gap-1.5 text-xs text-gray-600 hover:!text-blue-500 border-none shadow-none bg-[#F9FAFB] px-3 py-1.5 h-auto font-medium"
                        onClick={() => {
                            setSelectedMaterial(record);
                            setIsDetailsModalOpen(true);
                        }}
                    >
                        View
                    </Button>
                    <Button
                        icon={<Edit size={16} />}
                        className="flex items-center justify-center gap-1.5 text-xs text-gray-600 hover:!text-green-500 border-none shadow-none bg-[#F9FAFB] px-3 py-1.5 h-auto font-medium"
                    >
                        Edit
                    </Button>
                    <Button
                        icon={<Trash2 size={16} />}
                        className="flex items-center justify-center gap-1.5 text-xs text-red-500 hover:!bg-red-50 border border-red-100 rounded-lg px-3 py-1.5 h-auto font-medium shadow-none"
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
                <HeaderTitle title="Learning Materials" />
                <div className="flex gap-3">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 z-10" />
                        <Input
                            placeholder="Search materials"
                            className="h-10 pl-10 bg-white border border-gray-200 shadow-sm w-72 rounded-lg"
                        />
                    </div>
                    <Button
                        icon={<Filter className="w-4 h-4" />}
                        className="h-10 px-6 border-gray-200 text-gray-600 font-semibold flex items-center gap-2 rounded-lg shadow-sm"
                    >
                        Filter
                    </Button>
                    <Button
                        icon={<Plus className="w-4 h-4" />}
                        className="h-10 px-6 bg-[#22C55E] text-white hover:!bg-[#1ea34d] border-none font-semibold flex items-center gap-2 rounded-lg shadow-sm"
                        onClick={() => setIsAddModalOpen(true)}
                    >
                        Add Material
                    </Button>
                </div>
            </div>

            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                <Table
                    columns={columns}
                    dataSource={materialsData}
                    pagination={{ pageSize: 6, position: ['bottomRight'] }}
                    className="materials-table"
                />
            </div>

            <AddLearningMaterialModal open={isAddModalOpen} onCancel={() => setIsAddModalOpen(false)} />

            <LearningMaterialDetailsModal
                open={isDetailsModalOpen}
                onCancel={() => setIsDetailsModalOpen(false)}
                data={selectedMaterial}
            />
        </section>
    );
};

export default AdminLearningMaterials;
