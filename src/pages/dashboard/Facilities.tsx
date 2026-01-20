import { Button, Table } from 'antd';
import { useState } from 'react';
import { AiOutlineDelete } from 'react-icons/ai';
import AddFacilityModal from '../../components/modals/AddFacilityModal';
import { useDeleteFacilityMutation, useGetFacilitiesQuery } from '../../redux/apiSlices/facilitySlice';
import { IFacility, IPagination } from '../../types/types';
import { queryParmasBuilder } from '../../utils/queryParmasBuilder';
import { imageUrl } from '../../redux/api/baseApi';
import Swal from 'sweetalert2';

// Sample data
// const data = [
//     {
//         key: '1',
//         name: 'Gym',
//         logo: '/company1.png',
//     },
//     {
//         key: '2',
//         name: 'Swimming Pool',
//         logo: '/company2.png',
//     },
//     {
//         key: '3',
//         name: 'Parking',
//         logo: '/company3.png',
//     },
//     {
//         key: '4',
//         name: 'Spa',
//         logo: '/company1.png',
//     },
//     {
//         key: '5',
//         name: 'Conference Room',
//         logo: '/company2.png',
//     },
//     {
//         key: '6',
//         name: 'Playground',
//         logo: '/company3.png',
//     },
//     {
//         key: '7',
//         name: 'Restaurant',
//         logo: '/company1.png',
//     },
//     {
//         key: '8',
//         name: 'Lounge',
//         logo: '/company3.png',
//     },
//     {
//         key: '9',
//         name: 'Laundry',
//         logo: '/company2.png',
//     },
// ];

// Column definitions

const Facilities = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [page, setPage] = useState(1);
    const {data}=useGetFacilitiesQuery({query:queryParmasBuilder({page:page,limit:10})})
    const [deleteFacility] = useDeleteFacilityMutation();
    const facilitys:IFacility[] = data?.data?.data?.map((facility:IFacility,index:number)=>({...facility,key:index+1}))
    
    
    const handleDelete = async (record: IFacility) => {
        
        
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this action!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await deleteFacility({ _id: record._id }).unwrap();
          Swal.fire("Deleted!", "Facility has been deleted.", "success");
        } catch (err) {
            console.log(err);
            
          Swal.fire("Error!", "Something went wrong.", "error");
        }
      }
    });
  };
    const pagination:IPagination = data?.data?.pagination

    const columns = [
        {
            title: 'S/No',
            dataIndex: 'key',
            key: 'key',
        },
        {
            title: 'Facilities Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Facilities Logo',
            dataIndex: 'logo',
            key: 'logo',
            render: (logo: string) => <img src={imageUrl+logo} alt="logo" style={{ width: 50, height: 43, objectFit: 'contain' }} />,
        },
        {
            title: 'Actions',
            key: 'action',
            render: (_: any, record: any) => (
                <div className="flex items-center gap-3">

                    <button onClick={() => handleDelete(record)} className="text-red-500">
                        <AiOutlineDelete size={24} />
                    </button>
                </div>
            ),
        },
    ];
    return (
        <div className="">
            <div className="my-3 flex items-center justify-between mb-5">
                <h1 className="text-2xl text-primary font-semibold">Facilities</h1>
                <Button
                    onClick={() => setIsOpen(true)}
                    style={{
                        height: 40,
                    }}
                    type="primary"
                >
                    Create Facilities
                </Button>
            </div>
            <Table columns={columns} dataSource={facilitys} onChange={(e) => setPage(e.current||1)} rowClassName="hover:bg-gray-100" pagination={{ pageSize: pagination?.limit, total: pagination?.total }} />
            <AddFacilityModal isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
    );
};

export default Facilities;