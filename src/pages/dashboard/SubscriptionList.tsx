import { Pagination, Table } from 'antd';
import {  AiOutlineEye } from 'react-icons/ai';
import CustomModal from '../../components/shared/CustomModal';
import moment from 'moment';
import { useState } from 'react';

import { IReview } from '../../types/types';
import { useGetAllSubscribesQuery } from '../../redux/apiSlices/subscribeSlice';
import { queryParmasBuilder } from '../../utils/queryParmasBuilder';
import SubscribeModal from '../../components/modals/SubscribeModal';

const SubscriptionList = () => {
    const [viewReview, setViewReview] = useState(false);
    const [page , setPage] = useState(1); 
    const [reviewData , setReviewData] = useState()

    const {data: allReviews}= useGetAllSubscribesQuery({query:queryParmasBuilder({page:page,limit:10})})

    


    const data = (allReviews?.data?.result as IReview[])?.map((item: any, index: number) => ({
        ...item,
        key: index + 1,
        date: moment(item.createdAt).format('DD-MM-YYYY'),
        email:item?.email,
        status: item?.isVisible,
        Comment: item?.content

    }))
    const columns = [
        { title: 'S.No', dataIndex: 'key', key: 'key' },
        { title: 'Date', dataIndex: 'date', key: 'date' },
        { title: 'Email', dataIndex: 'email', key: 'email' },
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
                body={<SubscribeModal record={reviewData as any} />}
                open={viewReview}
                setOpen={setViewReview}
                key={'review'}
                title="Subscriber Details"
                width={532}
            />
        </div>
    );
};

export default SubscriptionList;