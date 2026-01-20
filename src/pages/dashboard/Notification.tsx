import { Button, Pagination } from 'antd';
import { useChangeStatusNotificationMutation, useGetNotificationQuery, useReadAllNotificationMutation } from '../../redux/apiSlices/notificationSlice';
import {  useMemo, useState } from 'react';
import { queryParmasBuilder } from '../../utils/queryParmasBuilder';
import { INotification, IPagination } from '../../types/types';
import { useNavigate } from 'react-router-dom';
import { io } from 'socket.io-client';
import { imageUrl } from '../../redux/api/baseApi';

const Notification = () => {
    const [page, setPage] = useState(1);
    const { data, refetch } = useGetNotificationQuery({ query: queryParmasBuilder({ page: page, limit: 10 }) });
    const [seenMessageData] = useChangeStatusNotificationMutation();
    const [seenAllNotifications]= useReadAllNotificationMutation();
    const navigate = useNavigate();
    const notifications: INotification[] = data?.data?.result;
    const pagination: IPagination = data?.data?.pagination;

    
    const socket = useMemo(()=>io(imageUrl),[])
    socket.on('new_notificaiton', () => {
        refetch();
    });

    const seenMessage = async (item: INotification) => {
        if (!item.seen) {
            await seenMessageData({ id: item._id }).unwrap();
            refetch();
        }

        switch (item.path) {
            case '/hotels':
                navigate('/users');
                break;

            case '/verification-plan':
                navigate('/users');
                break;
        }
    };

    const seenAll = async () => {
        await seenAllNotifications({}).unwrap();
        refetch()
    }

    return (
        <div className="mt-5">
            <div className="bg-white p-5 rounded-xl">
                <div className="flex items-center justify-between my-4">
                    <div>
                        <h1 className="text-2xl font-semibold text-primary">Notification</h1>
                    </div>
                    <div className="flex items-center gap-4">
                        <Button
                            style={{
                                height: '40px',

                                borderRadius: '8px',
                                border: '2px solid #2461CB',

                                background: 'white',

                                color: '#2461CB',
                                fontWeight: '400',
                                fontSize: 14,
                            }}
                            onClick={seenAll}
                        >
                            <span>Read all</span>
                        </Button>
                    </div>
                </div>
                <div>
                    {notifications?.map((item: INotification, index: number) => {
                        return (
                            <div
                                key={index}
                                onClick={() => seenMessage(item)}
                                className={`w-full mx-auto cursor-pointer p-4 my-4 min-h-20 ${
                                    !item.seen ? 'bg-[#F5F5F5]' : 'bg-white'
                                }  shadow-md`}
                            >
                                <div className=" text-sm">
                                    <div className="flex items-center gap-5">
                                        <p className="font-semibold text-[#555555]">{item?.title}</p>
                                        <div className="flex justify-between items-center gap-5 text-[#A7A7A7]">
                                            <span className="text-xs ">{new Date(item?.createdAt).toDateString()}</span>
                                            <span className="text-xs ">
                                                {new Date(item?.createdAt).toLocaleTimeString()}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="mt-2">
                                        <p className="text-sm text-[#818181]">{item?.message}</p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <Pagination defaultCurrent={1} total={pagination?.total} onChange={(page) => setPage(page)} />
            </div>
        </div>
    );
};

export default Notification;
