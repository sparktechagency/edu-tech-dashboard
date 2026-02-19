import React from 'react';
import { Table, Tag, Select, Space, Button, Popconfirm } from 'antd';
import { FilePdfOutlined, FilterOutlined, EyeOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';

interface AssignmentTableProps {
    data: any[];
    onView: (record: any) => void;
    onEdit: (record: any) => void;
    onDelete: (key: string) => void;
}

const AssignmentTable: React.FC<AssignmentTableProps> = ({ data, onView, onEdit, onDelete }) => {
    const columns = [
        {
            title: 'TITLE',
            dataIndex: 'title',
            key: 'title',
            render: (text: string, record: any) => (
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center border border-gray-100">
                        <FilePdfOutlined className="text-gray-400 text-lg" />
                    </div>
                    <div>
                        <div className="font-bold text-gray-800">{text}</div>
                        <div className="text-xs text-gray-400 truncate max-w-[150px]">{record.description}</div>
                    </div>
                </div>
            ),
        },
        {
            title: 'ATTACHMENT',
            dataIndex: 'type',
            key: 'type',
            render: (text: string) => (
                <Tag color="error" className="bg-red-50 text-red-500 border-red-100 rounded px-2 font-medium">
                    {text || 'PDF'}
                </Tag>
            ),
        },
        {
            title: 'TARGET',
            dataIndex: 'targets',
            key: 'targets',
            render: (targets: string[]) => (
                <div className="flex flex-col gap-1">
                    {targets?.map((t) => (
                        <Tag
                            key={t}
                            className={`${t === 'Skill Path' ? 'bg-green-50 text-green-500 border-green-100' : 'bg-gray-50 text-gray-500 border-gray-100'} rounded-full px-3 py-0.5 text-[10px] w-fit font-medium`}
                        >
                            {t}
                        </Tag>
                    ))}
                </div>
            ),
        },
        {
            title: 'DUE DATE',
            dataIndex: 'dueDate',
            key: 'dueDate',
            render: (date: string) => <span className="font-medium text-gray-700">{date}</span>,
        },
        {
            title: 'STATUS',
            dataIndex: 'status',
            key: 'status',
            render: (status: string) => (
                <Select
                    defaultValue={status}
                    className="w-24 custom-select-green"
                    bordered={true}
                    suffixIcon={<FilterOutlined className="text-[10px]" />}
                >
                    <Select.Option value="Active">Active</Select.Option>
                    <Select.Option value="Inactive">Inactive</Select.Option>
                </Select>
            ),
        },
        {
            title: 'ACTION',
            key: 'action',
            render: (_: any, record: any) => (
                <Space size="middle">
                    <Button
                        icon={<EyeOutlined />}
                        className="flex items-center gap-2 font-medium border-gray-200"
                        onClick={() => onView(record)}
                    >
                        View
                    </Button>
                    <Button
                        icon={<EditOutlined />}
                        className="flex items-center gap-2 font-medium border-gray-200"
                        onClick={() => onEdit(record)}
                    >
                        Edit
                    </Button>
                    <Popconfirm
                        title="Delete Assignment"
                        description="Are you sure you want to delete this assignment?"
                        onConfirm={() => onDelete(record.key)}
                        okText="Yes"
                        cancelText="No"
                        okButtonProps={{ danger: true }}
                    >
                        <Button
                            icon={<DeleteOutlined />}
                            className="flex items-center gap-2 font-medium border-red-100 text-red-500 hover:text-red-600 bg-red-50 hover:bg-red-100"
                        />
                    </Popconfirm>
                </Space>
            ),
        },
    ];

    return (
        <Table columns={columns} dataSource={data} pagination={{ pageSize: 8 }} className="custom-dashboard-table" />
    );
};

export default AssignmentTable;
