import { Table, Input } from 'antd';
import { FiSearch } from 'react-icons/fi';
import {  useGetHostsQuery } from '../../redux/apiSlices/userSlice';
import { queryParmasBuilder } from '../../utils/queryParmasBuilder';
import { IPagination, IUser } from '../../types/types';
import { imageUrl } from '../../redux/api/baseApi';
import {  useState } from 'react';
import CustomModal from '../../components/shared/CustomModal';
import HostEarningModal from '../../components/modals/HostEarningModal';
import { CiCircleInfo } from 'react-icons/ci';
// Sample data

const HostList = () => {
const [open, setOpen] = useState(false);
const [host, setHost] = useState<IUser | null>(null);
const [searchQuery, setSearchQuery] = useState('');
const [page, setPage] = useState(1);
const {data}=useGetHostsQuery({query:queryParmasBuilder({page:page,limit:10,searchTerm:searchQuery})});
const users:IUser[] = data?.data?.data;

const pagination:IPagination = data?.data?.pagination;


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
        <img src={record.profilePic?imageUrl+record.profilePic:'https://img.freepik.com/premium-photo/3d-avatar-cartoon-character_113255-93283.jpg'} alt={record.name} className="w-10 h-10 rounded-full object-cover" />
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
    title: 'Earning',
    key: 'action',
    render: (_: any, record: any) => (
      <button onClick={() => {
        setOpen(true);
        setHost(record);
      }}>
        <CiCircleInfo size={24} />
      </button>
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
                        prefix={<FiSearch color="#083A65" size={20} />}
                    />


                </div>
            </div>
            <CustomModal
            body={
                <HostEarningModal
                user={host as any}
                />
            }
            open={open}
            setOpen={setOpen}
            key={"hostEarning"}
            title={"Host Earning"}
            width={700}
            />
            <Table columns={columns} dataSource={users} onChange={(e) => setPage(e.current||1)} pagination={{ pageSize: pagination?.limit,total:pagination?.total }} rowClassName="hover:bg-gray-100" />

           
        </div>
    );
};

export default HostList;
