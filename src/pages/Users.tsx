import { Table, Input, Select } from 'antd';
import { FiSearch } from 'react-icons/fi';
import { useState } from 'react';

const Users = () => {

const data = [
  {
    key: '00001',
    name: 'Christine Brooks',
    image: 'https://randomuser.me/api/portraits/women/1.jpg',
    email: 'alma.lawson@example.com',
    location: 'San Francisco, CA',
  },
  {
    key: '00002',
    name: 'Rosie Pearson',
    image: 'https://randomuser.me/api/portraits/women/2.jpg',
    email: 'tim.jennings@example.com',
    location: 'Austin, TX',
  },
  {
    key: '00003',
    name: 'Darrell Caldwell',
    image: 'https://randomuser.me/api/portraits/men/3.jpg',
    email: 'debra.holt@example.com',
    location: 'Denver, CO',
  },
  {
    key: '00004',
    name: 'Gilbert Johnston',
    image: 'https://randomuser.me/api/portraits/men/4.jpg',
    email: 'kenzi.lawson@example.com',
    location: 'Seattle, WA',
  },
  {
    key: '00005',
    name: 'Alan Cain',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
    email: 'willie.jennings@example.com',
    location: 'New York, NY',
  },
];
const [searchQuery, setSearchQuery] = useState('');

    // Column definitions
  const columns = [ 
    {
    title: 'S.No',
    dataIndex: 'key',
    key: 'key',
  },
  {
    title: 'User',
    dataIndex: 'name',
    key: 'name',
    render: (_: any, record: any) => (
      <div className="flex items-center gap-3">
        <img src={'https://img.freepik.com/premium-photo/3d-avatar-cartoon-character_113255-93283.jpg'} alt={record.name} className="w-10 h-10 rounded-full object-cover" />
        <span>{record.name}</span>
      </div>
    ),
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: 'Location',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Action',
    key: 'action',
    render: (_: any, record: any) => (
      <Select
        defaultValue={record.status=="active"?"active":"delete"}
        // onChange={()=>handleDelete(record)}
        style={{ width: 120 }}
      >
        <Select.Option value="active">Active</Select.Option>
        <Select.Option value="delete">Inactive</Select.Option>
      </Select>
    ),
  },
]; 
    return (
        <div className="">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-2xl text-primary font-semibold">All Users</h1>
                </div>
                <div className="flex items-center gap-5 justify-end mb-5">
                    <Input
                        style={{
                            width: 400,
                            height: 42, 
                            borderRadius:10
                        }}
                        placeholder="Search"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        prefix={<FiSearch color="#66D978" size={20} />}
                    />


                </div>
            </div>
            <Table columns={columns} dataSource={data} rowClassName="hover:bg-gray-100" />

           
        </div>
    );
};

export default Users;
