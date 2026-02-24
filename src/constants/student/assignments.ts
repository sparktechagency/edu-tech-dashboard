export type AssignmentStatus = 'PENDING' | 'IN_PROCESS' | 'COMPLETED';


export interface SubmittedAssignment {
    _id: string;
    fileAssignment: string;
    notes?: string;
    createdAt: string;
}

export interface Assignment {
    id: string;
    title: string;
    description: string;
    status: "PENDING" | "COMPLETED";
    dueDate: string;
    openDate?: string;
    totalPoint: number;
    attachment?: string;
    subject?: string;
    color?: string;
    submitAssignment?: SubmittedAssignment[];
    teacher?: {
        _id: string;
        firstName: string;
        lastName: string;
        profile: string;
    };
    userGroup?: { _id: string; name: string }[];
    userGroupTrack?: { _id: string; name: string };
}
// export const mockAssignments: Assignment[] = [
//     {
//         id: '1',
//         subject: 'MATHEMATICS',
//         title: 'Advanced Calculus - 2',
//         description: 'Complete problems 14 through 28 on Integration of Multi-variable Functions.',
//         status: 'IN_PROCESS',
//         dueDate: 'Feb 18, 11:59 PM',
//         openDate: 'Jan 02, 08:50 AM',
//         color: '#F0FFF4',
//         icon: '',
//     },
//     {
//         id: '2',
//         subject: 'CHEMISTRY',
//         title: 'Organic Lab Report',
//         description:
//             'Complete final report detailing the procedures, observations, and results of the Aspirin synthesis experiment.',
//         status: 'PENDING',
//         dueDate: 'Jan 14, 11:59 PM',
//         openDate: 'Jan 01, 09:00 AM',
//         color: '#EBF5FB',
//         icon: '',
//     },
//     {
//         id: '3',
//         subject: 'HISTORY',
//         title: 'The Industrial Era',
//         description:
//             'An 800-word essay analyzing how steam power influenced urban growth, cities, and population concentration.',
//         status: 'PENDING',
//         dueDate: 'Jan 14, 11:59 PM',
//         openDate: 'Jan 01, 10:00 AM',
//         color: '#FEF5E7',
//         icon: '',
//     },
//     {
//         id: '4',
//         subject: 'PHYSICS',
//         title: 'Quantum Mechanics Basics',
//         description: 'Solve the wave equation for a particle in a one-dimensional box.',
//         status: 'COMPLETED',
//         dueDate: 'Jan 10, 11:59 PM',
//         openDate: 'Jan 01, 08:00 AM',
//         submissionDate: 'Jan 09, 04:30 PM',
//         color: '#F5EEFB',
//         icon: '',
//     },
// ];
