import React from 'react';
import { Table, Avatar, Tag, Button } from 'antd';
import { FilePdfOutlined, EyeOutlined } from '@ant-design/icons';

interface SubmissionTableProps {
    data: any[];
    onView: (record: any) => void;
}

const SubmissionTable: React.FC<SubmissionTableProps> = ({ data, onView }) => {
    const columns = [
        {
            title: 'NAME',
            dataIndex: 'name',
            key: 'name',
            render: (text: string, record: any) => (
                <div className="flex items-center gap-3">
                    <Avatar src={record.avatar} size={40} />
                    <div>
                        <div className="font-bold text-gray-800">{text}</div>
                        <div className="text-xs text-gray-400">{record.email}</div>
                    </div>
                </div>
            ),
        },
        {
            title: 'ATTACHMENT',
            dataIndex: 'attachment',
            key: 'attachment',
            render: (text: string) => (
                <div className="flex items-center gap-2 text-[#3182CE]">
                    <div className="bg-[#3182CE]/10 p-1.5 rounded">
                        <FilePdfOutlined />
                    </div>
                    <span className="text-xs font-medium text-gray-500">{text}</span>
                </div>
            ),
        },
        {
            title: 'NOTES',
            dataIndex: 'notes',
            key: 'notes',
            render: (text: string) => (
                <span className="text-gray-500 text-sm truncate max-w-[200px] block">{text}</span>
            ),
        },
        {
            title: 'SUBMISSION DATE',
            dataIndex: 'submissionDate',
            key: 'submissionDate',
            render: (date: string) => <span className="font-medium text-gray-700">{date}</span>,
        },
        {
            title: 'GRADE',
            dataIndex: 'grade',
            key: 'grade',
            render: (text: string) => <span className="text-[#3182CE] font-bold">{text}</span>,
        },
        {
            title: 'STATUS',
            dataIndex: 'status',
            key: 'status',
            render: (status: string) => (
                <div className="flex flex-col gap-1">
                    <Tag
                        className={`${status === 'Submitted' ? 'bg-green-50 text-green-500 border-green-100' : 'bg-orange-50 text-orange-400 border-orange-100'} rounded-full px-3 py-0.5 text-[10px] w-fit font-medium`}
                    >
                        {status}
                    </Tag>
                    {status === 'Submitted' && (
                        <Tag className="bg-blue-50 text-blue-500 border-blue-100 rounded-full px-3 py-0.5 text-[10px] w-fit font-medium">
                            Review
                        </Tag>
                    )}
                </div>
            ),
        },
        {
            title: 'ACTION',
            key: 'action',
            render: (_: any, record: any) => (
                <Button
                    icon={<EyeOutlined />}
                    className="flex items-center gap-2 font-medium border-gray-200"
                    onClick={() => onView(record)}
                >
                    View
                </Button>
            ),
        },
    ];

    return (
        <Table columns={columns} dataSource={data} pagination={{ pageSize: 8 }} className="custom-dashboard-table" />
    );
};

export default SubmissionTable;
