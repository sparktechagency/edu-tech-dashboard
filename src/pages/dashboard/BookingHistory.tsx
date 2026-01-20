import { Pagination, Table, Tag } from 'antd';
import {  AiOutlineEye } from 'react-icons/ai';
import CustomModal from '../../components/shared/CustomModal';
import ReviewForm from '../../components/modals/ReviewForm';
import moment from 'moment';
import { useState } from 'react';
import {  useGetAllReviewsQuery, useUpdateReviewMutation } from '../../redux/apiSlices/reviewSlice';
import { IReview } from '../../types/types';

const Review = () => {
    const [viewReview, setViewReview] = useState(false);
    const [page , setPage] = useState(1); 
    const [reviewData , setReviewData] = useState()
    const { data: allReviews, refetch } = useGetAllReviewsQuery({});
    const [updateReview] = useUpdateReviewMutation();  
    // const [deleteReview] = useDeleteReviewMutation();

    //  const handleDelete = async (id: string) => {
    //     Swal.fire({
    //       title: "Are you sure?",
    //       icon: "warning",
    //       showCancelButton: true,
    //       confirmButtonColor: "#3085d6",
    //       cancelButtonColor: "#d33",
    //       confirmButtonText: "Yes",
    //       cancelButtonText: "No",
    //     }).then(async (result) => {
    //       if (result.isConfirmed) {
    //         await deleteReview(id).then((res) => {
    //           if (res?.data?.success) {
    //             Swal.fire({
    //               text: res?.data?.message,
    //               icon: "success",
    //               showConfirmButton: false,
    //               timer: 1500,
    //             }).then(() => {
    //               refetch();
    //             });
    //           } else {
    //             Swal.fire({
    //               title: "Oops",
    //               //@ts-ignore
    //               text: res?.error?.data?.message,
    //               icon: "error",
    //               timer: 1500,
    //               showConfirmButton: false,
    //             });
    //           }
    
    //         })
    //       }
    //     });
    //   }; 

    const handleToggleStatus = async (id: string) => {

      // console.log(status,id);
      
        try {
            await updateReview({ id}).then((res:any) => {
                if (res?.data?.success) {
                  // message.success(res?.data?.message);
                   refetch();
                } else {
                  console.error("Failed to update status");
                }
            })
           
        } catch (err) {
            console.error("Failed to update status", err);
        }
    };

    const data = (allReviews?.data as IReview[])?.map((item: any, index: number) => ({
        ...item,
        key: index + 1,
        date: moment(item.createdAt).format('DD-MM-YYYY'),
        userName:item?.user?.name,
        email:item?.user?.email,
        status: item?.isVisible,
        Comment: item?.content

    }))
    const columns = [
        { title: 'S.No', dataIndex: 'key', key: 'key' },
        { title: 'Date', dataIndex: 'date', key: 'date' },
        { title: "User's Name", dataIndex: 'userName', key: 'userName' },
        { title: 'Email', dataIndex: 'email', key: 'email' },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            render: (_: any, record: any) => (
                <Tag
                    color={record.status ? 'green' : 'volcano'}
                    onClick={() => handleToggleStatus(record._id)}
                    style={{ cursor: 'pointer' }}
                >
                    {record.status ? 'Active' : 'Inactive'}
                </Tag>
            ),
        },
        {
            title: 'Actions',
            key: 'action',
            render: (_:any, record: any) => (
                <div className="flex items-center gap-3">
                    <button onClick={() =>{ setViewReview(true); setReviewData(record)}} className="text-primary">
                        <AiOutlineEye size={24} />
                    </button>
                    {/* <button className="text-red-500" onClick={() => handleDelete(record?.id)}>
                        <AiOutlineDelete size={24} />
                    </button> */}
                </div>
            ),
        },
    ];

    return (
        <div className="">
            <div className="my-3">
                <h1 className="text-2xl text-primary font-semibold">Manage Reviews</h1>
            </div>
            <Table
                columns={columns}
                dataSource={data}
                rowClassName="hover:bg-gray-100" 
                pagination={false}
            /> 

            {
                allReviews?.data?.pagination?.total >= 10 && (
                    <Pagination
                        current={page}
                        total={allReviews?.data?.pagination?.total}
                        onChange={(page) => setPage(page)}
                    />
                )
            }
            <CustomModal
                body={<ReviewForm  reviewData={reviewData} />}
                open={viewReview}
                setOpen={setViewReview}
                key={'review'}
                title="Review"
                width={532}
            />
        </div>
    );
};

export default Review