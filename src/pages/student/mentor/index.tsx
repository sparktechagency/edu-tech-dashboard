import { useState } from 'react';
import { mockMentor, initialMessages, Message } from '../../../constants/student/mentor';
import { MentorHeader } from './components/MentorHeader';
import { MentorSidebar } from './components/MentorSidebar';
import { MentorJourney } from './components/MentorJourney';
import { MentorChat } from './components/MentorChat';
import { useNavigate } from 'react-router-dom';

export default function Mentor() {
    const [messages, setMessages] = useState<Message[]>(initialMessages);
    const [newMessage, setNewMessage] = useState('');
    const navigate = useNavigate();
    const handleSendMessage = () => {
        if (!newMessage.trim()) return;

        const message: Message = {
            id: Date.now().toString(),
            text: newMessage,
            sender: 'student',
            timestamp: new Date().toLocaleString(),
        };

        setMessages([...messages, message]);
        setNewMessage('');
    };
    const handleConversation = () => {
        navigate('/student/chat');
    };

    return (
        <section className="space-y-6 overflow-hidden">
            <MentorHeader mentor={mockMentor} />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                <MentorSidebar mentor={mockMentor} handleConversation={handleConversation} />

                <div className="lg:col-span-7 space-y-6">
                    <MentorJourney />
                    <MentorChat
                        messages={messages}
                        newMessage={newMessage}
                        setNewMessage={setNewMessage}
                        onSendMessage={handleSendMessage}
                    />
                </div>
            </div>
        </section>
    );
}
