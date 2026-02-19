import React from 'react';
import { Modal, Button, Avatar, Tag, List } from 'antd';
import { UserOutlined } from '@ant-design/icons';

interface StudentDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const mockStudents = [
    {
        id: '1',
        name: 'Jhon Lura',
        email: 'jhon@examplemail.com',
        group: 'Skill Path',
        track: 'Data',
        avatar: 'https://i.pravatar.cc/150?u=1' 
    },
    {
        id: '2',
        name: 'Jhon Lura',
        email: 'jhon@examplemail.com',
        group: 'Skill Path',
        track: 'Data',
        avatar: 'https://i.pravatar.cc/150?u=2'
    },
    {
        id: '3',
        name: 'Jhon Lura',
        email: 'jhon@examplemail.com',
        group: 'Skill Path',
        track: 'Data',
        avatar: 'https://i.pravatar.cc/150?u=3'
    }
];

const StudentDetailsModal: React.FC<StudentDetailsModalProps> = ({ isOpen, onClose }) => {
  return (
    <Modal
      title={<span className="text-xl font-semibold">Student Details</span>}
      open={isOpen}
      onCancel={onClose}
      footer={[
        <Button key="back" onClick={onClose} className='h-10 px-6'>
          Cancel
        </Button>,
      ]}
      width={700} 
      centered
    >
        <div className="mt-6">
            <List
                itemLayout="horizontal"
                dataSource={mockStudents}
                split={false}
                renderItem={(item) => (
                    <div className="flex items-center justify-between py-4 mb-2">
                        <div className="flex items-center">
                            <Avatar size={48} src={item.avatar} icon={<UserOutlined />} className="mr-4" />
                            <div>
                                <h4 className="text-base font-medium m-0">{item.name}</h4>
                                <p className="text-gray-500 m-0">{item.email}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-6">
                            <div className='flex items-center gap-2'>
                                <span className="text-gray-800 font-medium">Group:</span>
                                <Tag color="green" className="border-0 rounded-full px-3 m-0 bg-green-100 text-green-700">{item.group}</Tag>
                            </div>
                            <div className='flex items-center gap-2'>
                                <span className="text-gray-800 font-medium">Track:</span>
                                <Tag className="border-0 bg-gray-100 rounded-full px-3 m-0 text-gray-600">{item.track}</Tag>
                            </div>
                        </div>
                    </div>
                )}
            />
        </div>
    </Modal>
  );
};

export default StudentDetailsModal;
