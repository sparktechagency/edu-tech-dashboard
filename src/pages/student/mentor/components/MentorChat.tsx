import { Message } from '../../../../constants/student/mentor';

interface MentorChatProps {
    messages: Message[];
    newMessage: string;
    setNewMessage: (msg: string) => void;
    onSendMessage: () => void;
}

export const MentorChat = ({ messages, newMessage, setNewMessage, onSendMessage }: MentorChatProps) => (
    <div className="bg-white p-8 rounded-2xl border border-gray-100 flex flex-col h-[500px]">
        <h2 className="text-xl font-bold text-[#1E293B] mb-6">Messages</h2>

        <div className="flex-1 overflow-y-auto space-y-4 mb-6 pr-2 custom-scrollbar">
            {messages.map((msg) => (
                <div key={msg.id} className={`flex flex-col ${msg.sender === 'student' ? 'items-end' : 'items-start'}`}>
                    <div className="bg-[#F8FAFC] p-4 rounded-xl max-w-[80%] border border-gray-50">
                        <p className="text-[#64748B] text-sm">{msg.text}</p>
                    </div>
                    <span className="text-[10px] text-gray-400 mt-1 px-1">{msg.timestamp}</span>
                </div>
            ))}
        </div>

        <div className="pt-6 border-t border-gray-100 flex gap-4">
            <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && onSendMessage()}
                placeholder="Type your message"
                className="flex-1 bg-[#F0FFF4] rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#3BB77E]/30"
            />
            <button
                onClick={onSendMessage}
                className="bg-[#5AD97C] hover:bg-[#4bc66c] text-white px-10 py-3 rounded-xl font-bold transition-colors shrink-0"
            >
                Send
            </button>
        </div>
    </div>
);
