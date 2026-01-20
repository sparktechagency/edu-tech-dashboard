import React from 'react';

import { Layout, theme } from 'antd';
import { Outlet } from 'react-router-dom';
import HeaderDashboard from './HeaderDashboard';
import Sidebar from './Sidebar';

const { Content } = Layout;

const MainLayout: React.FC = () => {
    const {
        token: { borderRadiusLG },
    } = theme.useToken();

    return (
        <div className=' flex flex-col h-screen '> 
                {/* header */}
 
 <div className='bg-[#21C45D] h-20 w-full flex-center'> 
    <HeaderDashboard /> 
 </div> 

 <div className='container flex-center'> 
    <Sidebar />
 </div>
                
                <Content style={{ margin: 10 }} className='overflow-y-scroll' >
                    <div
                        style={{
                            padding: 0,
                            minHeight: '50vh',
                            width: '100%',
                            background: '#F6F6F6',
                            borderRadius: borderRadiusLG,
                        }} 
                        className=''
                    >
                        <Outlet />
                    </div>
                </Content>
        </div>
    );
};

export default MainLayout;
