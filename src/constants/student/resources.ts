export interface Resource {
    id: number;
    title: string;
    description: string;
    due: string;
    date: string;
    file: string;
}

export const resources: Resource[] = [
    {
        id: 1,
        title: 'Effective Mentoring Guide',
        description: 'Complete guide on mentoring best practices and strategies',
        due: 'Jan 10, 2026',
        date: 'Jan 9',
        file: '/assets/file/demo-assignment.pdf',
    },
    {
        id: 2,
        title: 'Weekly Check-in Template',
        description: 'Structured template for conducting productive weekly sessions',
        due: 'Jan 10, 2026',
        date: 'Jan 9',
        file: '/assets/file/demo-assignment.pdf',
    },
];
