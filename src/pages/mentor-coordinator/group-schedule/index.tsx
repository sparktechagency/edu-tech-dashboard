import { useState } from 'react';
import { Table, Button, Select, Input } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { FilterOutlined, EyeOutlined, SearchOutlined, DesktopOutlined, EnvironmentOutlined } from '@ant-design/icons';
import { initialGroupScheduleData, GroupSchedule } from '../../../constants/mentor-coordinator-data';
import GroupScheduleModal from '../../../components/modals/mentor-coordinator/GroupScheduleModal';
import HeaderTitle from '../../../components/shared/HeaderTitle';

const GroupSchedulePage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedScheduleId, setSelectedScheduleId] = useState<string | null>(null);

    const handleViewDetails = (id: string) => {
        setSelectedScheduleId(id);
        setIsModalOpen(true);
    };

    const columns: ColumnsType<GroupSchedule> = [
        {
            title: 'TITLE',
            dataIndex: 'title',
            key: 'title',
            render: (text) => (
                <div className="flex items-center gap-3 py-2">
                    <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center border border-gray-100">
                        <DesktopOutlined className="text-gray-400 text-lg" />
                    </div>
                    <span className="font-medium text-gray-700">{text}</span>
                </div>
            ),
        },
        {
            title: 'DATE & TIME',
            key: 'dateTime',
            render: (_, record) => (
                <div className="flex flex-col py-2">
                    <span className="font-medium text-gray-700">{record.date}</span>
                    <span className="text-gray-400 text-sm font-medium">{record.time}</span>
                </div>
            ),
        },
        {
            title: 'GROUP/TRACK',
            key: 'groupTrack',
            render: (_, record) => (
                <div className="flex flex-col gap-1.5 py-2">
                    <p className="border-0 text-[#387742] bg-[#D0F3D5] rounded-full px-4 py-1 w-fit font-medium text-xs">
                        {record.group}
                    </p>
                    <p className="border-0 text-[#7A7D85] bg-[#F6F6F6] rounded-full px-4 py-1 w-fit font-medium text-xs">
                        {record.track}
                    </p>
                </div>
            ),
        },
        {
            title: 'LOCATION',
            dataIndex: 'location',
            key: 'location',
            render: (text) => (
                <div className="flex items-center gap-2 font-medium text-gray-700 py-2">
                    <EnvironmentOutlined className="text-gray-400" />
                    <span>{text}</span>
                </div>
            ),
        },
        {
            title: 'STATUS',
            dataIndex: 'status',
            key: 'status',
            render: (status: string) => (
                <Select
                    defaultValue={status}
                    style={{ width: 110 }}
                    options={[
                        { value: 'Active', label: 'Active' },
                        { value: 'Inactive', label: 'Inactive' },
                    ]}
                    className="custom-status-select"
                />
            ),
        },
        {
            title: 'ACTION',
            key: 'action',
            render: (_, record) => (
                <Button
                    icon={<EyeOutlined />}
                    onClick={() => handleViewDetails(record.key)}
                    className="flex items-center gap-2 border-gray-200 hover:border-blue-500 hover:text-blue-500 rounded-lg py-5 px-6 font-medium"
                >
                    View
                </Button>
            ),
        },
    ];

    return (
        <div className="">
            <div className="flex justify-between items-center mb-4">
                <HeaderTitle title="Group Schedule" />
                <div className="flex gap-4">
                    <Input
                        placeholder="Search student"
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

            <div className="bg-white rounded-xl shadow-sm border border-gray-200">
                <Table
                    columns={columns}
                    dataSource={initialGroupScheduleData}
                    pagination={{ pageSize: 5 }}
                    className="group-schedule-table"
                    rowClassName="hover:bg-gray-50/50"
                />
            </div>

            <GroupScheduleModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                schedule={initialGroupScheduleData.find((s) => s.key === selectedScheduleId)}
            />
        </div>
    );
};

export default GroupSchedulePage;
