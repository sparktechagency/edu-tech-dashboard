import { useState } from 'react';
import { Button, Table } from 'antd';
import { CiEdit } from 'react-icons/ci';
import CreateSubscription from '../../components/modals/CreateSubscription';
import { useDeletePackageMutation, useGetPackagesQuery } from '../../redux/apiSlices/packageSlice';
import { IPackage } from '../../types/types';
import { RxCross1 } from 'react-icons/rx';
import Swal from 'sweetalert2';


const Subscription = () => {
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState(); 
  const {data} = useGetPackagesQuery({})
  const [deletePackage] = useDeletePackageMutation();


  const packages:IPackage[] = data?.data?.result?.map((item: any, index: any) => ({ ...item, key: index + 1 }));

  
  const columns = [
    {
      title: "S.No",
      dataIndex: "key",
      key: "key",
    },
    {
      title: "Package Name",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: (_:any, record:any) => (
        <div className="flex items-center gap-3">
          <button
          onClick={() => {
            setOpen(true);
            setItems(record);
          }}
          className="cursor-pointer border-none outline-none text-[#00809E] bg-white"
        >
          <CiEdit size={25} />
        </button>
        <button
        className="cursor-pointer border-none outline-none text-[#f83757] bg-white"
        onClick={() => handleDelete(record)}
        >
          <RxCross1 size={25} />
          
        </button>
        </div>
      ),
    },
  ];

  const handleDelete = async(record: any) => {
    
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
          await deletePackage({ id: record._id }).unwrap();
          Swal.fire("Deleted!", "Package has been deleted.", "success");
        } catch (err) {
          console.log(err);
          Swal.fire("Error!", "Something went wrong.", "error");
        }
      }
    });

  
  
  }

  return (
    <div className="p-5">
      <div className="my-3 flex items-center justify-between mb-5">
                <h1 className="text-2xl text-primary font-semibold">Packages</h1>
                <Button
                    onClick={() => setOpen(true)}
                    style={{
                        height: 40,
                    }}
                    type="primary"
                >
                    Create Package
                </Button>
            </div>
      <div className=""> 
      <Table columns={columns} dataSource={packages} />
      <CreateSubscription open={open} setOpen={setOpen} items={items} />
    </div>
    </div>
  );
};

export default Subscription;