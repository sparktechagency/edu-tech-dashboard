import { useEffect, useState } from 'react';
import { ChatSidebar } from './ChatSidebar';
import { Grid } from 'antd';
import { ChatConversation } from './ChatConversation';

const demoChatRooms = [
    {
        _id: '1',
        participants: [
            {
                _id: 'u1',
                name: 'Omor Faruk',
                image: 'https://i.ibb.co.com/B5bpqrSF/IMG-20251222-172138-1.jpg',
            },
        ],
        status: true,
        lastMessage: {
            _id: 'm1',
            sender: 'u1',
            text: 'Hey teacher, I have a question about the assignment.',
            createdAt: new Date().toISOString(),
        },
        unread: 2,
        time: '12:45 PM',
    },
    {
        _id: '2',
        participants: [
            {
                _id: 'u2',
                name: 'Jane Smith',
                image: 'https://i.ibb.co.com/B5bpqrSF/IMG-20251222-172138-1.jpg',
            },
        ],
        status: true,
        lastMessage: {
            _id: 'm2',
            sender: 'u2',
            text: 'Thank you for the session today!',
            createdAt: new Date().toISOString(),
        },
        unread: 0,
        time: 'Yesterday',
    },
];

export default function StudentChat() {
    const { lg } = Grid.useBreakpoint();
    const [activeRoom, setActiveRoom] = useState<any>(null);
    const [messageId, setMessageId] = useState<string | null>(null);

    // Default to the first room on desktop
    useEffect(() => {
        if (lg && !messageId && demoChatRooms.length > 0) {
            setActiveRoom(demoChatRooms[0]);
            setMessageId(demoChatRooms[0]._id);
        }
    }, [lg, messageId]);

    const selectRoom = (room: any) => {
        setActiveRoom(room);
        setMessageId(room._id);
    };

    // Mobile view logic
    if (!lg) {
        if (messageId) {
            const selectedRoom = demoChatRooms.find((r) => r._id === messageId) || demoChatRooms[0];
            return (
                <div className="h-[calc(100vh-120px)] flex flex-col p-4">
                    <button
                        onClick={() => setMessageId(null)}
                        className="mb-4 text-[#055E6E] font-medium flex items-center gap-2"
                    >
                        ← Back to Messages
                    </button>
                    <div className="flex-1 overflow-hidden">
                        <ChatConversation activeUser={selectedRoom} messageId={messageId} />
                    </div>
                </div>
            );
        }
        return (
            <div className="p-4">
                <ChatSidebar messageId={null} onSelect={selectRoom} chatRooms={demoChatRooms} />
            </div>
        );
    }

    // Desktop view
    return (
        <div className="flex gap-6 h-[calc(100vh-210px)] ">
            <div className="w-[320px] shrink-0 bg-white rounded-2xl border border-gray-100 shadow-sm overflow-y-auto">
                <ChatSidebar messageId={messageId} onSelect={selectRoom} chatRooms={demoChatRooms} />
            </div>
            <div className="grow">
                <ChatConversation messageId={messageId} activeUser={activeRoom} />
            </div>
        </div>
    );
}
