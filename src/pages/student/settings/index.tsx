import { Tabs } from 'antd';
import MentorCoordinatorProfile from '../../mentor-coordinator/profile';
import { useState } from 'react';
import ChangePassword from './components/ChangePassword';

export default function StudentProfile() {
    const [activeTab, setActiveTab] = useState('1');
    const tabItems = [
        {
            key: '1',
            label: 'Profile Info',
            children: <MentorCoordinatorProfile />,
        },
        {
            key: '2',
            label: 'Change Password',
            children: <ChangePassword />,
        },
    ];

    return (
        <section>
            <div className="p-6 sm:p-8 bg-white rounded-md">
                <Tabs activeKey={activeTab} onChange={setActiveTab} items={tabItems} size="large" />
            </div>
        </section>
    );
}
