export interface StudentAttendance {
    key: string;
    name: string;
    description: string;
    groups: string[];
    status: 'present' | 'late' | 'absent' | 'excused' | null;
    notes: string;
    avatar?: string;
    classId?: string
}

// export const initialStudents: StudentAttendance[] = [
//     {
//         key: '1',
//         name: 'John Doe',
//         description: 'Web Development Student',
//         groups: ['Morning Batch', 'Skill Path'],
//         status: 'Present',
//         notes: '',
//         avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=John',
//     },
//     {
//         key: '2',
//         name: 'Jane Smith',
//         description: 'UI/UX Design Student',
//         groups: ['Evening Batch', 'Data'],
//         status: 'Late',
//         notes: '',
//         avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Jane',
//     },
//     {
//         key: '3',
//         name: 'Robert Johnson',
//         description: 'Full Stack Student',
//         groups: ['Weekend Batch', 'Skill Path'],
//         status: 'Absent',
//         notes: '',
//         avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Robert',
//     },
//     {
//         key: '4',
//         name: 'Emily Davis',
//         description: 'Mobile App Dev Student',
//         groups: ['Morning Batch', 'Skill Path'],
//         status: null,
//         notes: '',
//         avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Emily',
//     },
//     {
//         key: '5',
//         name: 'Michael Brown',
//         description: 'Data Science Student',
//         groups: ['Evening Batch', 'Data'],
//         status: 'Present',
//         notes: '',
//         avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Michael',
//     },
//     {
//         key: '6',
//         name: 'Sarah Wilson',
//         description: 'Cybersecurity Student',
//         groups: ['Morning Batch', 'Skill Path'],
//         status: 'Present',
//         notes: '',
//         avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah',
//     },
//     {
//         key: '7',
//         name: 'David Miller',
//         description: 'Artificial Intelligence Student',
//         groups: ['Weekend Batch', 'Data'],
//         status: 'Excused',
//         notes: 'Medical leave',
//         avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=David',
//     },
// ];
