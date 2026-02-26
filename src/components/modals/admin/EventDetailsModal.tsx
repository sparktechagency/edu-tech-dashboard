import { Modal } from 'antd';
import { X } from 'lucide-react';

interface EventDetailsModalProps {
    open: boolean;
    onCancel: () => void;
    data: any;
}

const EventDetailsModal = ({ open, onCancel, data }: EventDetailsModalProps) => {
    return (
        <Modal
            title={null}
            open={open}
            onCancel={onCancel}
            footer={null}
            width={600}
            closeIcon={null}
            centered
            styles={{
                content: {
                    padding: '24px',
                    borderRadius: '16px',
                },
            }}
        >
            <div className="flex justify-between items-center mb-6 border-b pb-4">
                <h2 className="text-xl font-bold text-gray-800">Event Details</h2>
                <button onClick={onCancel} className="text-gray-400 hover:text-gray-600 transition-colors">
                    <X size={20} />
                </button>
            </div>

            <div className="border border-gray-100 rounded-xl overflow-hidden mb-6 shadow-sm">
                <table className="w-full text-sm">
                    <tbody className="divide-y divide-gray-100">
                        <tr>
                            <td className="px-5 py-4 bg-gray-50/50 font-medium text-gray-500 w-1/3 text-[13px]">
                                Title
                            </td>
                            <td className="px-5 py-4 text-gray-800 font-medium text-[13px]">
                                {data?.title || 'Ai training workshop'}
                            </td>
                        </tr>
                        <tr>
                            <td className="px-5 py-4 bg-gray-50/50 font-medium text-gray-500 text-[13px]">
                                Description
                            </td>
                            <td className="px-5 py-4 text-gray-800 text-[13px] leading-relaxed">
                                {data?.description || 'This is for beginners'}
                            </td>
                        </tr>
                        <tr>
                            <td className="px-5 py-4 bg-gray-50/50 font-medium text-gray-500 text-[13px]">
                                Event Date
                            </td>
                            <td className="px-5 py-4 text-gray-800 text-[13px]">{data?.date || '12 Oct, 2025'}</td>
                        </tr>
                        <tr>
                            <td className="px-5 py-4 bg-gray-50/50 font-medium text-gray-500 text-[13px]">Location</td>
                            <td className="px-5 py-4 text-gray-800 text-[13px]">
                                {data?.location || '12 Street, USA'}
                            </td>
                        </tr>
                        <tr>
                            <td className="px-5 py-4 bg-gray-50/50 font-medium text-gray-500 text-[13px]">Type</td>
                            <td className="px-5 py-4 text-gray-800 text-[13px]">
                                <span className="px-3 py-1 bg-blue-50 text-blue-500 rounded-full text-xs font-semibold border border-blue-100">
                                    {data?.type || 'Workshop'}
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td className="px-5 py-4 bg-gray-50/50 font-medium text-gray-500 text-[13px]">
                                Target Track
                            </td>
                            <td className="px-5 py-4">
                                <span className="px-3 py-1 bg-gray-50 text-gray-500 rounded-full text-xs font-semibold border border-gray-100">
                                    {data?.targetUser?.name || 'Fullstack'}
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td className="px-5 py-4 bg-gray-50/50 font-medium text-gray-500 text-[13px]">
                                Target Group
                            </td>
                            <td className="px-5 py-4 text-gray-800 text-[13px]">{data?.targetGroup?.name || 'All'}</td>
                        </tr>
                        <tr>
                            <td className="px-5 py-4 bg-gray-50/50 font-medium text-gray-500 text-[13px]">Status</td>
                            <td className="px-5 py-4">
                                <span className="px-3 py-1 bg-green-100 text-[#16A34A] rounded-full text-xs font-semibold">
                                    {data?.status || 'Active'}
                                </span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="flex justify-end">
                <button
                    onClick={onCancel}
                    className="px-8 py-2.5 rounded-lg border border-gray-200 text-gray-600 font-semibold hover:bg-gray-50 transition-colors text-sm shadow-sm"
                >
                    Cancel
                </button>
            </div>
        </Modal>
    );
};

export default EventDetailsModal;
