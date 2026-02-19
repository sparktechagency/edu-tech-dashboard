import { useState, useRef, useEffect } from 'react';
import { Image as AntdImage, Avatar, Typography } from 'antd';
import MessageInput from './MessageInput';

const { Text } = Typography;

export function ChatConversation({ messageId, activeUser }: { messageId: any; activeUser: any }) {
    const [messages, setMessages] = useState<any[]>([]);
    const containerRef = useRef<HTMLDivElement>(null);

    // Mock initial messages for the room
    useEffect(() => {
        if (messageId) {
            // In a real app, this would be an API call: useGetMessagesQuery(messageId)
            setMessages([
                {
                    _id: 'm1',
                    sender: 'u1',
                    text: 'Hello! I need some help with the layout.',
                    createdAt: new Date(Date.now() - 3600000).toISOString(),
                },
                {
                    _id: 'm2',
                    sender: 'me',
                    text: 'Sure, what exactly is the issue?',
                    createdAt: new Date(Date.now() - 3000000).toISOString(),
                },
                {
                    _id: 'm2',
                    sender: 'u1',
                    text: 'I miss You',
                    createdAt: new Date(Date.now() - 3000000).toISOString(),
                },
            ]);
        }
    }, [messageId]);

    const scrollToBottom = () => {
        const el = containerRef.current;
        if (el) {
            el.scrollTop = el.scrollHeight;
        }
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSendMessage = async (text: string, mediaFiles: File[]) => {
        // Mock sending message
        const newMessage = {
            _id: Math.random().toString(),
            sender: 'me',
            text: text,
            createdAt: new Date().toISOString(),
            image: mediaFiles.length > 0 ? URL.createObjectURL(mediaFiles[0]) : null,
        };
        setMessages((prev) => [...prev, newMessage]);
    };

    if (!messageId || !activeUser) {
        return (
            <div className="h-full flex flex-col items-center justify-center bg-gray-50 rounded-2xl border border-dashed border-gray-200 text-gray-400">
                <p>Select a conversation to start chatting</p>
            </div>
        );
    }

    return (
        <div className="bg-white border border-gray-100 rounded-2xl flex flex-col h-full shadow-sm overflow-hidden">
            {/* Header */}
            <div className="p-4 flex items-center justify-between border-b border-gray-50">
                <div className="flex items-center gap-3">
                    <Avatar size={44} src={activeUser?.participants[0]?.image} className="border border-gray-100" />
                    <div>
                        <h3 className="font-bold text-gray-800 text-[16px] leading-tight">
                            {activeUser?.participants[0]?.name}
                        </h3>
                        <Text type="secondary" className="text-[12px]">
                            Online
                        </Text>
                    </div>
                </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto bg-[#F9FAFB] px-6 py-6" ref={containerRef}>
                <div className="flex flex-col justify-end min-h-full gap-4">
                    {messages?.map((msg: any) => {
                        const isMe = msg.sender === 'me';
                        return (
                            <div
                                key={msg._id}
                                className={`flex items-end gap-3 max-w-[80%] ${isMe ? 'self-end flex-row-reverse' : 'self-start'}`}
                            >
                                {!isMe && (
                                    <Avatar
                                        size={32}
                                        src={activeUser?.participants[0]?.image}
                                        className="mb-1 shrink-0"
                                    />
                                )}
                                <div className="flex flex-col gap-1">
                                    <div
                                        className={`px-4 py-3 rounded-2xl text-[14px] shadow-sm  ${
                                            isMe
                                                ? 'bg-[#055E6E] text-white rounded-br-none'
                                                : 'bg-white text-gray-800 rounded-bl-none border border-gray-100 '
                                        }`}
                                    >
                                        {msg.image && (
                                            <div className="mb-2 rounded-lg overflow-hidden border border-gray-100/20">
                                                <AntdImage src={msg.image} width={200} className="object-cover" />
                                            </div>
                                        )}
                                        {msg.text && <p className="m-0 leading-relaxed font-medium">{msg.text}</p>}
                                    </div>
                                    <div
                                        className={`flex items-center gap-1 text-[10px] text-gray-400 ${isMe ? 'justify-end' : 'justify-start'}`}
                                    >
                                        {new Date(msg.createdAt).toLocaleTimeString([], {
                                            hour: '2-digit',
                                            minute: '2-digit',
                                        })}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Input */}
            <div className="p-4 bg-white border-t border-gray-100">
                <MessageInput onSend={handleSendMessage} />
            </div>
        </div>
    );
}
