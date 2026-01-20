
import { HiCurrencyDollar, HiMiniUserGroup } from 'react-icons/hi2';
import { IoBookmarks } from 'react-icons/io5';
// import { useGetAnalatysQuery } from '../../../redux/apiSlices/anlatycsSlice';
import { IAnalatycs } from '../../../types/types';

const DashboardStats = ({data}:{data:any}) => {
    

    const details:IAnalatycs = data?.data
    
    
    const datak = [
        {
            name: 'Total User',
            count: details?.totalUsers,
            icon: <HiMiniUserGroup color="#083A65" size={35} />,
            bgColor: '#fff',
            textColor: '#083A65',
        },
        {
            name: 'Total Earning',
            count: '$' + details?.totalEarning,
            icon: <HiCurrencyDollar color="#083A65" size={36} />,
            textColor: '#3F0D47',
            bgColor: '#fff',
        },
        {
            name: 'Total Booking',
            count: details?.totalBookings,
            icon: <IoBookmarks color="#083A65" size={30} />,
            textColor: '#DAA520',
            bgColor: '#fff',
        },
    ];

    return (
        <div>
            <div className="grid grid-cols-3 gap-8 items-center">
                {datak.map((item, index) => (
                    <div key={index} className="bg-white shadow-md rounded-xl p-8 border flex items-center gap-3">
                        <div className={`rounded-full flex items-center justify-center`}>
                            {item?.icon}
                        </div>
                        <div className="flex-1 flex justify-between items-center">
                            <p className="flex items-center justify-center text-lg text-[#242424] font-medium">
                                {item.name}
                            </p>
                            <div>
                                <p
                                    style={{ color: item.textColor }} // Inline style for text color
                                    className="text-3xl font-bold"
                                >
                                    {item.count} +
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DashboardStats;
