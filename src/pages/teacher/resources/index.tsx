import { useState } from 'react';
import { Table, Button, Input, Select, Space, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { SearchOutlined, FilterOutlined, EyeOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { HiOutlineDocumentText } from 'react-icons/hi';
import HeaderTitle from '../../../components/shared/HeaderTitle';
import { resourcesData } from '../../../constants/teacher-data';
import ResourceDetailsModal from '../../../components/modals/teacher/ResourceDetailsModal';
import CreateResourceModal from '../../../components/modals/teacher/CreateResourceModal';

export interface ResourceItem {
    key: string;
    title: string;
    description: string;
    type: string;
    targets: string[];
    uploadDate: string;
    status: string;
    contentUrl?: string;
    materialType?: string;
}

const Resources = () => {
    const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
    const [selectedResource, setSelectedResource] = useState<ResourceItem | null>(null);
    const [data, setData] = useState<ResourceItem[]>(resourcesData);

    const handleView = (record: ResourceItem) => {
        setSelectedResource(record);
        setIsDetailsModalOpen(true);
    };

    const handleEdit = (record: ResourceItem) => {
        setSelectedResource(record);
        setIsCreateModalOpen(true);
    };

    const handleAdd = () => {
        setSelectedResource(null);
        setIsCreateModalOpen(true);
    };

    const handleSave = (values: any) => {
        if (selectedResource) {
            setData((prev) => prev.map((item) => (item.key === selectedResource.key ? { ...item, ...values } : item)));
        } else {
            const newItem = {
                ...values,
                key: (data.length + 1).toString(),
                uploadDate: new Date().toLocaleDateString('en-GB'),
                targets: ['Skill Path', 'Data'],
                status: 'Active',
            };
            setData((prev) => [newItem, ...prev]);
        }
    };

    const columns: ColumnsType<ResourceItem> = [
        {
            title: 'TITLE',
            dataIndex: 'title',
            key: 'title',
            render: (text) => (
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center border border-gray-100">
                        <HiOutlineDocumentText size={20} className="text-gray-400" />
                    </div>
                    <span className="font-semibold text-gray-800">{text}</span>
                </div>
            ),
        },
        {
            title: 'TYPE',
            dataIndex: 'type',
            key: 'type',
            render: (type) => (
                <Tag className="bg-red-50 text-red-500 border-none rounded px-3 py-1 text-xs font-semibold">{type}</Tag>
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
            title: 'UPLOAD DATE',
            dataIndex: 'uploadDate',
            key: 'uploadDate',
            render: (date) => <span className="text-gray-600">{date}</span>,
        },
        {
            title: 'STATUS',
            dataIndex: 'status',
            key: 'status',
            render: (status) => (
                <Select
                    defaultValue={status}
                    style={{ width: 100 }}
                    className="rounded-lg"
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
                <HeaderTitle title="Resources" />
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
                        + Add Resources
                    </button>
                </div>
            </div>

            <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
                <Table columns={columns} dataSource={data} pagination={{ pageSize: 5 }} className="" />
            </div>

            <ResourceDetailsModal
                visible={isDetailsModalOpen}
                onClose={() => setIsDetailsModalOpen(false)}
                resource={selectedResource}
            />

            <CreateResourceModal
                visible={isCreateModalOpen}
                onClose={() => setIsCreateModalOpen(false)}
                onSave={handleSave}
                initialValues={selectedResource}
            />
        </div>
    );
};

export default Resources;
