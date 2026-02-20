export type AssignmentStatus = 'Pending' | 'In Process' | 'Completed';

export interface Assignment {
    id: string;
    subject: string;
    title: string;
    description: string;
    status: AssignmentStatus;
    dueDate: string;
    openDate: string;
    submissionDate?: string;
    color: string;
    icon: string;
}

export const mockAssignments: Assignment[] = [
    {
        id: '1',
        subject: 'MATHEMATICS',
        title: 'Advanced Calculus - 2',
        description: 'Complete problems 14 through 28 on Integration of Multi-variable Functions.',
        status: 'In Process',
        dueDate: 'Feb 18, 11:59 PM',
        openDate: 'Jan 02, 08:50 AM',
        color: '#F0FFF4',
        icon: '',
    },
    {
        id: '2',
        subject: 'CHEMISTRY',
        title: 'Organic Lab Report',
        description:
            'Complete final report detailing the procedures, observations, and results of the Aspirin synthesis experiment.',
        status: 'Pending',
        dueDate: 'Jan 14, 11:59 PM',
        openDate: 'Jan 01, 09:00 AM',
        color: '#EBF5FB',
        icon: '',
    },
    {
        id: '3',
        subject: 'HISTORY',
        title: 'The Industrial Era',
        description:
            'An 800-word essay analyzing how steam power influenced urban growth, cities, and population concentration.',
        status: 'Pending',
        dueDate: 'Jan 14, 11:59 PM',
        openDate: 'Jan 01, 10:00 AM',
        color: '#FEF5E7',
        icon: '',
    },
    {
        id: '4',
        subject: 'PHYSICS',
        title: 'Quantum Mechanics Basics',
        description: 'Solve the wave equation for a particle in a one-dimensional box.',
        status: 'Completed',
        dueDate: 'Jan 10, 11:59 PM',
        openDate: 'Jan 01, 08:00 AM',
        submissionDate: 'Jan 09, 04:30 PM',
        color: '#F5EEFB',
        icon: '',
    },
];
