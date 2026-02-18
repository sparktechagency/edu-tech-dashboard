import React from 'react';
import { Modal, Button, Avatar, Tag } from 'antd';
import { UserOutlined } from '@ant-design/icons';

interface MentorDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  mentor: any;
}

const MentorDetailsModal: React.FC<MentorDetailsModalProps> = ({ isOpen, onClose, mentor }) => {
  if (!mentor) return null;

  return (
    <Modal
      title={<span className="text-xl font-semibold">Mentor details</span>}
      open={isOpen} 
      onCancel={onClose}
      footer={[
        <Button key="back" onClick={onClose}>
          Cancel
        </Button>,
      ]}
      width={600} 
      centered
      className="mentor-details-modal"
    >
      <div className="flex items-center mb-6 mt-4">
        <Avatar size={64} icon={<UserOutlined />} src="https://i.pravatar.cc/150?u=a042581f4e29026024d" className="mr-4" />
        <div>
          <h3 className="text-lg font-medium m-0">{mentor.name}</h3>
          <p className="text-gray-500 m-0">{mentor.email}</p>
        </div>
      </div>

      <div className="border border-gray-100 rounded-lg overflow-hidden">
        {/* Helper for rows */}
        <div className="flex border-b border-gray-100 last:border-b-0">
          <div className="w-1/3 p-4 bg-gray-50 text-gray-500 font-medium">Role</div>
          <div className="w-2/3 p-4 bg-white">Mentor</div>
        </div>

        <div className="flex border-b border-gray-100 last:border-b-0">
          <div className="w-1/3 p-4 bg-gray-50 text-gray-500 font-medium">Student</div>
          <div className="w-2/3 p-4 bg-white">62</div>
        </div>

        <div className="flex border-b border-gray-100 last:border-b-0">
          <div className="w-1/3 p-4 bg-gray-50 text-gray-500 font-medium">Group/Track</div>
          <div className="w-2/3 p-4 bg-white flex gap-2">
            <Tag color="green" className="border-0 rounded-full px-3">Skill Path</Tag>
            <Tag className="border-0 bg-gray-100 rounded-full px-3">Data</Tag>
          </div>
        </div>

        <div className="flex border-b border-gray-100 last:border-b-0">
            <div className="w-1/3 p-4 bg-gray-50 text-gray-500 font-medium">Location</div>
            <div className="w-2/3 p-4 bg-white">Amsterdam</div>
        </div>

        <div className="flex border-b border-gray-100 last:border-b-0">
            <div className="w-1/3 p-4 bg-gray-50 text-gray-500 font-medium">Availability</div>
            <div className="w-2/3 p-4 bg-white">40 hrs</div>
        </div>

        <div className="flex border-b border-gray-100 last:border-b-0">
            <div className="w-1/3 p-4 bg-gray-50 text-gray-500 font-medium">Contact No.</div>
            <div className="w-2/3 p-4 bg-white">+99 4637 1238</div>
        </div>

        <div className="flex border-b border-gray-100 last:border-b-0">
            <div className="w-1/3 p-4 bg-gray-50 text-gray-500 font-medium">Linkdin</div>
            <div className="w-2/3 p-4 bg-white text-gray-400">Not Provide</div>
        </div>

        <div className="flex border-b border-gray-100 last:border-b-0">
            <div className="w-1/3 p-4 bg-gray-50 text-gray-500 font-medium">Status</div>
            <div className="w-2/3 p-4 bg-white">
                 <Tag color={mentor.status === 'Active' ? 'green' : 'red'} className="border-0 rounded-full px-3">
                    {mentor.status}
                </Tag>
            </div>
        </div>

      </div>
    </Modal>
  );
};

export default MentorDetailsModal;
