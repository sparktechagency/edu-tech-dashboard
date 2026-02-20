export interface Event {
    id: string;
    title: string;
    date: string;
    month: string;
    day: string;
    startTime: string;
    endTime: string;
    location: string;
    description: string;
    image: string;
    color: string;
}

export const mockEvents: Event[] = [
    {
        id: '1',
        title: 'Workshop: Modern Design',
        date: 'Monday, Oct 24, 2026',
        month: 'FEB',
        day: '12',
        startTime: '14:00',
        endTime: '16:30 PM',
        location: 'Room 305, Arts Building',
        description:
            'Master the fundamentals of UI/UX design while focusing on modern aesthetic principles, usability best practices, accessibility standards, inclusive design approaches, responsive layouts, and creating intuitive digital experiences for diverse users across platforms.',
        image: 'https://studyportals.com/app/uploads/2025/06/shutterstock_2484576879-1-640x560.jpg',
        color: '#7C3AED',
    },
    {
        id: '2',
        title: 'Career Workshop',
        date: 'Wednesday, Mar 21, 2026',
        month: 'MAR',
        day: '21',
        startTime: '14:00',
        endTime: '16:30 PM',
        location: 'Room 305, Arts Building',
        description:
            'Master the fundamentals of UI/UX design while focusing on modern aesthetic principles, usability best practices, accessibility standards, inclusive design approaches, responsive layouts, and creating intuitive digital experiences for diverse users across platforms.',
        image: 'https://studyportals.com/app/uploads/2025/06/shutterstock_2484576879-1-640x560.jpg',
        color: '#10B981',
    },
    {
        id: '3',
        title: 'Career Workshop',
        date: 'Wednesday, Mar 21, 2026',
        month: 'MAR',
        day: '21',
        startTime: '14:00',
        endTime: '16:30 PM',
        location: 'Room 305, Arts Building',
        description:
            'Master the fundamentals of UI/UX design while focusing on modern aesthetic principles, usability best practices, accessibility standards, inclusive design approaches, responsive layouts, and creating intuitive digital experiences for diverse users across platforms.',
        image: 'https://studyportals.com/app/uploads/2025/06/shutterstock_2484576879-1-640x560.jpg',
        color: '#C0FF33',
    },
];
