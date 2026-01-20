import { Select } from 'antd';
import { XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Legend, Bar } from 'recharts';
import { IAnalatycs } from '../../../types/types';
import { useGetAnalatysQuery } from '../../../redux/apiSlices/anlatycsSlice';
import { useState } from 'react';
const { Option } = Select;
const SubscriptionChart = () => {
    interface UserData {
        month: string;
        totalSubscription: number;
        newSubscription: number; 
    }
    const [year, setYear] = useState(new Date().getFullYear().toString());
    const {data} = useGetAnalatysQuery({year:year});
    const anlatycs:IAnalatycs = data?.data

    const datak: UserData[] = anlatycs?.monthlyData?.map((item) => ({ month: item.month, totalSubscription: item.totalSubscriptions, newSubscription: item.newSubscriptions })) || [];

    return (
        <div className='bg-white drop-shadow-md  p-4 mx-2 rounded-2xl'
            style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 5,
            }}
        >
            <div className="px-2 flex items-center justify-between">
                <h1 className="text-xl font-medium">Total Subscriptions Statistics</h1>
                <Select defaultValue={new Date().getFullYear().toString()} onChange={(e) => setYear(e)} className="w-32 h-[40px]">
                    <Option value="2024">2024</Option>
                    <Option value="2025">2025</Option>
                    <Option value="2026">2026</Option>
                    <Option value="2027">2027</Option>
                    <Option value="2028">2028</Option>
                    <Option value="2029">2029</Option>
                    <Option value="2030">2030</Option>
                </Select>
            </div>
            <ResponsiveContainer width="100%" height={260}>
                <BarChart data={datak}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="totalSubscription" fill="#083A65" />
                    <Bar dataKey="newSubscription" fill="#5C450D" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default SubscriptionChart;
