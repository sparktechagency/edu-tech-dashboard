import { useState } from 'react';
import { Table, Button, Select, Space, Input } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { FilterOutlined, EyeOutlined, SearchOutlined } from '@ant-design/icons';
import MentorDetailsModal from '../../../components/modals/mentor-coordinator/MentorDetailsModal';
import StudentDetailsModal from '../../../components/modals/mentor-coordinator/StudentDetailsModal';
import { initialMentorsData } from '../../../constants/mentor-coordinator-data';
import HeaderTitle from '../../../components/shared/HeaderTitle';

export interface Mentor {
  key: string;
  name: string;
  email: string;
  company: string;
  jobTitle: string;
  status: 'Active' | 'Inactive';
}

const Mentors = () => {
    const [isViewStudentsModalOpen, setIsViewStudentsModalOpen] = useState(false);
    const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);

    const [selectedMentorId, setSelectedMentorId] = useState<string | null>(null);

    const handleViewStudents = (mentorId: string) => {
        console.log(`View Students clicked for mentor: ${mentorId}`);
        setSelectedMentorId(mentorId);
        setIsViewStudentsModalOpen(true);
    };

    const handleDetails = (mentorId: string) => {
        console.log(`Details clicked for mentor: ${mentorId}`);
        setSelectedMentorId(mentorId);
        setIsDetailsModalOpen(true);
    };

    const columns: ColumnsType<Mentor> = [
        {
            title: 'NAME',
            dataIndex: 'name',
            key: 'name',
            render: (text) => <span className="font-medium text-gray-700">{text}</span>,
        },
        {
            title: 'EMAIL',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'COMPANY',
            dataIndex: 'company',
            key: 'company',
        },
        {
            title: 'JOB TITLE',
            dataIndex: 'jobTitle',
            key: 'jobTitle',
        },
        {
            title: 'STATUS',
            dataIndex: 'status',
            key: 'status',
            render: (status: string) => (
                <Select
                    defaultValue={status}
                    style={{ width: 100 }}
                    options={[
                        { value: 'Active', label: 'Active' },
                        { value: 'Inactive', label: 'Inactive' },
                    ]}
                    className={
                        status === 'Active' ? 'text-green-600' : 'text-red-600'
                    }
                />
            ),
        },
        {
            title: 'ACTION',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    <Button 
                        type="primary" 
                        icon={<EyeOutlined />}
                        onClick={() => handleViewStudents(record.key)}
                        style={{ backgroundColor: '#007bff'}}
                    >
                        View Students
                    </Button>
                    <Button 
                        onClick={() => handleDetails(record.key)}
                        className="bg-gray-100 hover:bg-gray-200 border-none"
                    >
                        Details
                    </Button>
                </Space>
            ),
        },
    ];

    return (
        <div className="">
                   <div className="flex justify-between items-center mb-4">
                <HeaderTitle title="Mentors" /> 
                <div className="flex gap-4"> 
                    <Input 
                        placeholder="Search student" 
                        prefix={<SearchOutlined className='text-gray-400 text-lg' />} 
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

            <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100">
                <Table 
                    columns={columns} 
                    dataSource={initialMentorsData} 
                    className="w-full"
                    rowClassName="hover:bg-gray-50" 
                    pagination={{ pageSize: 10 }}
                />
            </div> 

            <MentorDetailsModal
                isOpen={isDetailsModalOpen}
                onClose={() => setIsDetailsModalOpen(false)}
                mentor={initialMentorsData.find(m => m.key === selectedMentorId)}
            />

            <StudentDetailsModal
                isOpen={isViewStudentsModalOpen}
                onClose={() => setIsViewStudentsModalOpen(false)}
                // mentor={initialMentorsData.find(m => m.key === selectedMentorId)} 
            />
        </div>
    );
};

export default Mentors;