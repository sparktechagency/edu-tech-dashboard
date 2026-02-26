export interface Goal {
    id: number;
    title: string;
    description: string;
    deadline: string;
    assignTo: string;
}

export const GOALS_DATA: Goal[] = [
    {
        id: 1,
        title: "Complete Module 1: Fundamentals",
        description: "Watch all video lectures and complete the quiz for Module 1.",
        deadline: "2024-03-01",
        assignTo: "John Doe",
    },
    {
        id: 2,
        title: "Database Design Workshop",
        description: "Attend the live workshop on SQL vs NoSQL schema design patterns.",
        deadline: "2024-03-05",
        assignTo: "Jane Smith",
    },
    {
        id: 3,
        title: "Database Design Workshop",
        description: "Attend the live workshop on SQL vs NoSQL schema design patterns.",
        deadline: "2024-03-10",
        assignTo: "Alice Johnson",
    },
];
