
import { Table, Button } from 'antd';
import type { ColumnsType } from 'antd/es/table';

interface MentorData {
  key: string;
  name: string;
  email: string;
  company: string;
  jobTitle: string;
}

const mentorsData: MentorData[] = Array.from({ length: 6 }).map((_, i) => ({
  key: `${i}`,
  name: 'Test',
  email: 'test@mail.com',
  company: 'ABN AMRO',
  jobTitle: 'Data Analyst',
}));

const columns: ColumnsType<MentorData> = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: 'Company',
    dataIndex: 'company',
    key: 'company',
  },
  {
    title: 'Job Title',
    dataIndex: 'jobTitle',
    key: 'jobTitle',
  },
  {
    title: 'Action',
    key: 'action',
    render: () => (
      <Button className="text-green-500 border-green-500 hover:text-green-600 hover:border-green-600 rounded-full px-6">
        Student
      </Button>
    ),
  },
];

const MentorsTable = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h2 className="text-xl font-bold mb-4">Mentors</h2>
      <Table
        columns={columns}
        dataSource={mentorsData}
        pagination={false}
        className="w-full"
      />
    </div>
  );
};

export default MentorsTable;
