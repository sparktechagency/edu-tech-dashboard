// --- Mock Data ---

const initialAssignments = [
    {
        key: '1',
        title: 'Frontend Development',
        description: 'Introduction to React and Vite architecture.',
        type: 'PDF',
        targets: ['Skill Path', 'Data'],
        dueDate: '11/12/2025',
        status: 'Active',
        points: '100',
    },
    {
        key: '2',
        title: 'UI/UX Design Basics',
        description: 'Principles of modern web design and accessibility.',
        type: 'PDF',
        targets: ['Skill Path', 'Data'],
        dueDate: '11/12/2025',
        status: 'Active',
        points: '100',
    },
    ...Array(6)
        .fill(null)
        .map((_, i) => ({
            key: String(i + 3),
            title: 'Assignment ' + (i + 3),
            description: 'Module description for lesson ' + (i + 3),
            type: 'PDF',
            targets: ['Skill Path', 'Fullstack'],
            dueDate: '11/12/2025',
            status: 'Active',
            points: '100',
        })),
];

const initialSubmissions = [
    {
        key: '1',
        name: 'Jhon lura',
        email: 'jhon@mail.com',
        attachment: '1.2 MB',
        notes: 'Sorry for late submission, I had some technical issues.',
        submissionDate: '11/12/2025',
        grade: '98/100',
        status: 'Submitted',
        avatar: 'https://i.pravatar.cc/150?u=1',
    },
    {
        key: '2',
        name: 'Jane Smith',
        email: 'jane@mail.com',
        attachment: '2.5 MB',
        notes: 'Final project submission for the design module.',
        submissionDate: '11/12/2025',
        grade: '0/100',
        status: 'Late',
        avatar: 'https://i.pravatar.cc/150?u=2',
    },
    ...Array(5)
        .fill(null)
        .map((_, i) => ({
            key: String(i + 3),
            name: 'Student ' + (i + 3),
            email: `student${i + 3}@mail.com`,
            attachment: '1.2 MB',
            notes: 'Completed task as requested.',
            submissionDate: '11/12/2025',
            grade: '98/100',
            status: 'Submitted',
            avatar: `https://i.pravatar.cc/150?u=${i + 3}`,
        })),
];

export { initialAssignments, initialSubmissions };
