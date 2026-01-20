
import { useGetAnalatysQuery } from '../../../redux/apiSlices/anlatycsSlice';
import DashboardStats from './DashboardStats';
import EarningChart from './EarningChart';
import SubscriptionChart from './SubscriptionChart';
import UserChart from './UserChart';

const Dashboard = () => {
    const {data}=useGetAnalatysQuery({})
    return (
        <div className=" ">
            <DashboardStats data={data} />

            <div className="grid grid-cols-12  gap-2 items-center mt-5">
                <div className=" col-span-12  mb-3">
                    {/* total services */}

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <EarningChart/>
                        <SubscriptionChart/>
                    </div>


                </div>
                <div className="col-span-12 bg-white drop-shadow-md p-4 pb-0 mx-2 rounded-2xl">
                    <UserChart />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
