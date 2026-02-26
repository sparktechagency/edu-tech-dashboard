
import { useNavigate } from 'react-router-dom';
import { useProfileQuery } from '../../../redux/apiSlices/authSlice';
import { MentorHeader } from './components/MentorHeader';
import { MentorSidebar } from './components/MentorSidebar';
import { MentorJourney } from './components/MentorJourney';
import { imageUrl } from '../../../redux/api/baseApi';

export default function Mentor() {
    const navigate = useNavigate();
    const { data: profileData } = useProfileQuery(
        {},
        { selectFromResult: ({ data }) => ({ data: data?.data || data }) }
    );

    // Extract mentor from student profile
    const mentorRaw = profileData?.mentorId;

    // Format mentor for UI
    const formattedMentor = mentorRaw
        ? {
              ...mentorRaw,
              profile: mentorRaw.profile
                  ? `${imageUrl}${mentorRaw.profile}`
                  : 'https://via.placeholder.com/150',
              role: 'Mentor',
              subtext: 'Guiding you towards success',
              location: mentorRaw.address || 'Not provided',
              specialization: mentorRaw.professionalTitle || 'Not provided',
              availability: 'Available',
          }
        : null;



    const handleConversation = () => navigate('/student/chat');

    if (!formattedMentor) return <p>Loading mentor...</p>;

    return (
        <section className="space-y-6 overflow-hidden">
            <MentorHeader mentor={formattedMentor} />
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                <MentorSidebar
                    mentor={formattedMentor}
                    handleConversation={handleConversation}
                />
                <div className="lg:col-span-7 space-y-6">
                    <MentorJourney />
                    {/* <MentorChat
                        messages={messages}
                        newMessage={newMessage}
                        setNewMessage={setNewMessage}
                        onSendMessage={handleSendMessage}
                    /> */}
                </div>
            </div>
            {/* Contact & Professional Links */}
            
        
        </section>
    );
}

