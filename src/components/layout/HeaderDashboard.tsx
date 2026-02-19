import {  useNavigate } from 'react-router-dom';
import { FiLogOut } from "react-icons/fi";
import { toast } from 'sonner';

const HeaderDashboard = () => {
    const navigate = useNavigate()

    return (
        <div className='container  bg-transparent flex items-center justify-between text-white '> 
        <div> 
                      <div onClick={()=>navigate("/")} className=' cursor-pointer'>
                    <div className=' flex items-center justify-center gap-2.5'>
                        <img src="/logo.png" alt="" className=' w-11 h-14 ' /> 
                        <div className='flex flex-col gap-y-0.5 text-white'> 
                            <p className='text-2xl font-bold font-heading'> Share Network Admin</p>
                            <p className='text-sm font-medium '>Platform Management Dashboard</p>
                        </div>
                    </div>
                </div>
        </div>
            <div className="flex items-center justify-end gap-5 h-full">
            <button 
                onClick={() => {
                    localStorage.removeItem('token');
                    toast.success('Logged out successfully');
                    navigate('/login')}}
                className="flex items-center gap-3 bg-white/10 hover:bg-white/310 backdrop-blur-md border border-white/40 rounded-xl px-6 py-2.5 text-white transition-all duration-300 shadow-lg group hover:shadow-xl"
            >
                <FiLogOut className="text-xl group-hover:translate-x-1 transition-transform" />
                <span className="text-lg font-medium tracking-wide">Log Out</span>
            </button>
            </div>
        </div>
    );
};

export default HeaderDashboard;
