import { Button, Table, Tag } from 'antd';
import HeaderTitle from '../../../components/shared/HeaderTitle';
import { useProfileQuery } from '../../../redux/apiSlices/authSlice';
import { useGetTimeTrackingQuery } from '../../../redux/apiSlices/mentor/timeTrackingApi';
import { useState } from 'react';
import AddTimeTrackModal from './components/AddTimeTrackModal';
import dayjs from 'dayjs';
import { Plus } from 'lucide-react';

const TimeTracking = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    // api calls
    const { data: userData } = useProfileQuery({});
    const user = userData?.data;
    const { data: timeTrackingData, isLoading } = useGetTimeTrackingQuery(user?._id);
    const timeTracking = timeTrackingData?.data || [];

    const columns = [
        {
            title: 'Time Type',
            dataIndex: 'timeType',
            key: 'timeType',
            render: (text: string) => <span className="font-semibold text-gray-700">{text}</span>,
        },
        {
            title: 'Start Time',
            dataIndex: 'startTime',
            key: 'startTime',
            render: (date: string) => dayjs(date).format('MMM DD, YYYY hh:mm A'),
        },
        {
            title: 'End Time',
            dataIndex: 'endTime',
            key: 'endTime',
            render: (date: string) => dayjs(date).format('MMM DD, YYYY hh:mm A'),
        },
        {
            title: 'Comments',
            dataIndex: 'comments',
            key: 'comments',
            render: (text: string) => <span className="text-gray-600 italic">{text || 'N/A'}</span>,
        },
        {
            title: 'Mentor',
            key: 'mentor',
            render: (_: any, record: any) => (
                <Tag
                    color="blue"
                    className="rounded-full px-3 py-0.5 border-none bg-primary/10 text-primary font-medium"
                >
                    {record.mentorId?.firstName} {record.mentorId?.lastName}
                </Tag>
            ),
        },
    ];

    return (
        <section className="">
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden mx-auto">
                <div className="p-6">
                    <div className="flex justify-between items-center mb-6">
                        <HeaderTitle title="Time Tracking" />
                        <Button
                            type="primary"
                            icon={<Plus className="w-4 h-4" />}
                            onClick={() => setIsModalOpen(true)}
                            className="h-10 px-6 rounded-lg font-semibold bg-primary border-none hover:opacity-90 transition-opacity flex items-center gap-2"
                        >
                            Create Time Track
                        </Button>
                    </div>

                    <Table
                        dataSource={timeTracking}
                        columns={columns}
                        loading={isLoading}
                        rowKey="_id"
                        pagination={{ pageSize: 10 }}
                        className="custom-table"
                    />
                </div>
            </div>

            <AddTimeTrackModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </section>
    );
};

export default TimeTracking;
