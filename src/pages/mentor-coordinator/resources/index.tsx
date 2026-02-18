import { useState } from 'react';
import { Table, Tag, Space, Input, Select, Button, Tooltip } from 'antd';
import { SearchOutlined, EyeOutlined, LinkOutlined, FilterOutlined } from '@ant-design/icons';
import { mockResources, Resource } from '../../../constants/mockResources';
import CoordinatorDetailsModal from '../../../components/modals/mentor-coordinator/DetailsModal';

const { Option } = Select;

export default function CoordinatorResources() {
    const [searchText, setSearchText] = useState('');
    const [filterGroup, setFilterGroup] = useState('All');
    const [selectedResource, setSelectedResource] = useState<Resource | null>(null);
    const [isModalVisible, setIsModalVisible] = useState(false);

    const filteredData = mockResources?.filter((item) => {
        const matchesSearch =
            item.title.toLowerCase().includes(searchText.toLowerCase()) ||
            item.description.toLowerCase().includes(searchText.toLowerCase());
        const matchesFilter = filterGroup === 'All' || item.group === filterGroup;
        return matchesSearch && matchesFilter;
    });

    const showDetails = (record: Resource) => {
        setSelectedResource(record);
        setIsModalVisible(true);
    };

    const handleLinkClick = (url: string) => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    const columns = [
        {
            title: 'Material Name',
            dataIndex: 'title',
            key: 'title',
            render: (text: string, record: Resource) => (
                <div>
                    <div className="font-bold text-[#333333] text-base">{text}</div>
                    <div className="text-gray-400 text-xs truncate max-w-[300px]">{record.description}</div>
                </div>
            ),
        },
        {
            title: 'For',
            dataIndex: 'for',
            key: 'for',
            render: (text: string) => (
                <Tag color={text === 'Mentor' ? 'green' : 'blue'} className="rounded-full px-3 border-none font-medium">
                    {text}
                </Tag>
            ),
        },
        {
            title: 'Group',
            dataIndex: 'group',
            key: 'group',
            render: (text: string) => (
                <Tag color="purple" className="rounded-full px-3 border-none font-medium">
                    {text}
                </Tag>
            ),
        },
        {
            title: 'Track',
            dataIndex: 'track',
            key: 'track',
            render: (text: string) =>
                text !== 'N/A' ? (
                    <Tag color="magenta" className="rounded-full px-3 border-none font-medium">
                        {text}
                    </Tag>
                ) : (
                    <span className="text-gray-300">-</span>
                ),
        },
        {
            title: 'Type',
            dataIndex: 'type',
            key: 'type',
            render: (text: string) => (
                <div className="flex items-center gap-2">
                    {text === 'link' ? (
                        <div className="bg-blue-50 text-blue-500 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider">
                            Link
                        </div>
                    ) : (
                        <div className="bg-orange-50 text-orange-500 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider">
                            Assignment
                        </div>
                    )}
                </div>
            ),
        },
        {
            title: 'Actions',
            key: 'actions',
            render: (_: any, record: Resource) => (
                <Space size="middle">
                    <Tooltip title="View Details">
                        <Button
                            icon={<EyeOutlined />}
                            onClick={() => showDetails(record)}
                            className="flex items-center justify-center border-gray-200 hover:text-primary hover:border-primary transition-colors h-9 w-9 rounded-lg"
                        />
                    </Tooltip>
                    <Tooltip title="Open Link">
                        <Button
                            icon={<LinkOutlined />}
                            onClick={() => handleLinkClick(record.link)}
                            className="flex items-center justify-center border-gray-200 hover:text-primary hover:border-primary transition-colors h-9 w-9 rounded-lg shadow-sm"
                        />
                    </Tooltip>
                </Space>
            ),
        },
    ];

    return (
        <div className="pb-8 animate-fadeIn">
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm mb-8">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="relative w-full md:max-w-xl">
                        <Input
                            placeholder="Search materials, topics, keywords..."
                            prefix={<SearchOutlined className="text-gray-400 mr-2" />}
                            className="h-11 rounded-xl border-gray-200 hover:border-primary focus:border-primary transition-all shadow-sm"
                            onChange={(e) => setSearchText(e.target.value)}
                        />
                    </div>
                    <div className="flex items-center gap-3">
                        <span className="text-gray-500 font-medium hidden sm:inline">Filter by:</span>
                        <Select
                            defaultValue="All"
                            className="w-44 h-11 custom-select"
                            onChange={(value) => setFilterGroup(value)}
                            suffixIcon={<FilterOutlined className="text-gray-400" />}
                        >
                            <Option value="All">All Groups</Option>
                            <Option value="Skill Path">Skill Path</Option>
                            <Option value="All Groups">All Groups</Option>
                        </Select>
                    </div>
                </div>
                {filterGroup !== 'All' && (
                    <div className="mt-4 flex items-center gap-2">
                        <span className="text-sm text-gray-500">
                            Filtering by: <span className="font-bold text-primary">{filterGroup}</span>
                        </span>
                        <button
                            className="text-xs text-red-400 hover:text-red-500 underline ml-2 transition-colors"
                            onClick={() => setFilterGroup('All')}
                        >
                            Clear filter
                        </button>
                    </div>
                )}
            </div>

            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden border-b-0">
                <Table
                    columns={columns}
                    dataSource={filteredData}
                    pagination={{ pageSize: 8, hideOnSinglePage: true }}
                    className="custom-table"
                    rowClassName="hover:bg-gray-50/50 transition-colors pointer-cursor"
                />
            </div>

            {/* View Details Modal */}
            <CoordinatorDetailsModal
                selectedResource={selectedResource}
                isModalVisible={isModalVisible}
                setIsModalVisible={setIsModalVisible}
                handleLinkClick={handleLinkClick}
            />
        </div>
    );
}
