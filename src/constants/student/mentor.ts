export interface Message {
    id: string;
    text: string;
    sender: 'student' | 'mentor';
    timestamp: string;
}

export interface Mentor {
    name: string;
    role: string;
    subtext: string;
    avatar: string;
    location: string;
    specialization: string;
    availability: string;
    email: string;
}

export const mockMentor: Mentor = {
    name: 'Dr. Alexander Thorne',
    role: 'Mentor',
    subtext: 'Get to know your mentor and connect for guidance',
    avatar: 'https://img.freepik.com/free-photo/dark-blonde-bearded-man-crosses-his-hands-chest-posing-black-shirt_8353-1116.jpg?semt=ais_user_personalization&w=740&q=80',
    location: 'Amsterdam',
    specialization: 'Specailizes in Expedition',
    availability: '40 hours/week available',
    email: 'test@share-academy.org',
};

export const initialMessages: Message[] = [
    {
        id: '1',
        text: 'hello',
        sender: 'mentor',
        timestamp: '11/11/2025, 4:41:12 PM',
    },
    {
        id: '2',
        text: 'hello',
        sender: 'mentor',
        timestamp: '11/11/2025, 4:41:12 PM',
    },
];
