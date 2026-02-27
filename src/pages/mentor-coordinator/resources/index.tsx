import { useState } from 'react';
import { Table, Tag, Space, Input, Select, Button, Tooltip } from 'antd';
import { SearchOutlined, EyeOutlined, LinkOutlined, FilterOutlined } from '@ant-design/icons';
import { useGetResourcesQuery } from '../../../redux/apiSlices/coordinator/resources';
import CoordinatorDetailsModal from '../../../components/modals/mentor-coordinator/DetailsModal';
import HeaderTitle from '../../../components/shared/HeaderTitle';

const { Option } = Select;

interface Resource {
    key: string;
    title: string;
    type: string;
    link: string;
    targetAudience: string;
    group: string;
    status: boolean;
    createdAt: string;
}

export default function CoordinatorResources() {
    const [searchText, setSearchText] = useState('');
    const [filterGroup, setFilterGroup] = useState('All');
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(10);
    const [selectedId, setSelectedId] = useState<string | null>(null);

    const { data, isLoading } = useGetResourcesQuery({
        page,
        limit,
        searchTerm: searchText,
        markAsAssigned: true,
    });

    const resources: Resource[] =
        data?.data?.resources?.map((item: any) => ({
            key: item._id,
            title: item.title,
            type: item.type,
            link: item.contentUrl,
            targetAudience: item.targeteAudience,
            group: item.targertGroup?.name || 'N/A',
            status: item.markAsAssigned,
            createdAt: item.createdAt,
        })) || [];

    const filteredResources = filterGroup === 'All' ? resources : resources.filter((r) => r.group === filterGroup);

    const columns = [
        {
            title: 'Material Name',
            dataIndex: 'title',
            render: (text: string) => <div className="font-bold text-[#333333] text-base">{text}</div>,
        },
        {
            title: 'For',
            dataIndex: 'targetAudience',
            render: (text: string) => (
                <Tag color={text === 'MENTOR' ? 'green' : 'blue'} className="rounded-full px-3 border-none font-medium">
                    {text}
                </Tag>
            ),
        },
        {
            title: 'Group',
            dataIndex: 'group',
            render: (text: string) => (
                <Tag color="purple" className="rounded-full px-3 border-none font-medium">
                    {text}
                </Tag>
            ),
        },
        {
            title: 'Type',
            dataIndex: 'type',
            render: (text: string) => (
                <Tag color="magenta" className="rounded-full px-3 border-none font-medium">
                    {text}
                </Tag>
            ),
        },
        {
            title: 'Actions',
            render: (_: any, record: Resource) => (
                <Space size="middle">
                    <Tooltip title="View Details">
                        <Button
                            icon={<EyeOutlined />}
                            onClick={() => setSelectedId(record.key)}
                            className="flex items-center justify-center border-gray-200 hover:text-primary hover:border-primary transition-colors h-9 w-9 rounded-lg"
                        />
                    </Tooltip>

                    <Tooltip title="Open Link">
                        <Button
                            icon={<LinkOutlined />}
                            onClick={() => window.open(record.link, '_blank')}
                            className="flex items-center justify-center border-gray-200 hover:text-primary hover:border-primary transition-colors h-9 w-9 rounded-lg shadow-sm"
                        />
                    </Tooltip>
                </Space>
            ),
        },
    ];

    return (
        <div>
            <div className="flex justify-between items-center mb-4">
                <HeaderTitle title="Resources" />
                <div className="flex gap-4">
                    <Input
                        placeholder="Search resources..."
                        value={searchText}
                        onChange={(e) => {
                            setSearchText(e.target.value);
                            setPage(1);
                        }}
                        allowClear
                        prefix={<SearchOutlined />}
                        style={{ height: '42px' }}
                        className="w-72 rounded-lg"
                    />

                    <Select
                        value={filterGroup}
                        style={{ height: '42px', width: 150 }}
                        allowClear={false}
                        onChange={(value) => setFilterGroup(value)}
                        suffixIcon={<FilterOutlined className="text-gray-400" />}
                    >
                        <Option value="All">All Groups</Option>
                        <Option value="FullStack">FullStack</Option>
                        <Option value="DataScience">Data Science</Option>
                        <Option value="AI">AI</Option>
                        <Option value="ML">ML</Option>
                    </Select>
                    {filterGroup !== 'All' && (
                        <div className="mt-4 flex items-center gap-2">
                            {/* <span className="text-sm text-gray-500">
          Filtering by:{" "}
          <span className="font-bold text-primary">
            {filterGroup}
          </span>
        </span> */}
                            <button
                                className="text-xs text-red-400 hover:text-red-500 underline ml-2 transition-colors"
                                onClick={() => setFilterGroup('All')}
                            >
                                Clear filter
                            </button>
                        </div>
                    )}
                </div>
            </div>

            {/* ===== Table ===== */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100">
                <Table
                    columns={columns}
                    dataSource={filteredResources}
                    loading={isLoading}
                    rowKey="key"
                    pagination={{
                        current: page,
                        pageSize: limit,
                        total: data?.data?.pagination?.total || 0,
                        onChange: (newPage, newLimit) => {
                            setPage(newPage);
                            setLimit(newLimit);
                        },
                    }}
                />
            </div>

            {/* Modal */}
            <CoordinatorDetailsModal resourceId={selectedId} onClose={() => setSelectedId(null)} />
        </div>
    );
}
