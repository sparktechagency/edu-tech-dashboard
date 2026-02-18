export interface Resource {
    key: string;
    title: string;
    description: string;
    for: string;
    group: string;
    track: string;
    type: 'link' | 'assignment';
    link: string;
}

export const mockResources: Resource[] = [
    {
        key: '1',
        title: 'Lecture 3 Data Analyst',
        description:
            'Functions, modules and debugging. Deep dive into Python library structure and best practices for modular code.',
        for: 'Student',
        group: 'Skill Path',
        track: 'Data',
        type: 'link',
        link: 'https://docs.google.com/presentation/d/1lvoj99HIxqe9O7-lXPEor-nPcoTeh7j1LruVgSxw4kE/edit?slide=id.g3b980c88a02_0_72#slide=id.g3b980c88a02_0_72',
    },
    {
        key: '2',
        title: 'Lecture 2 Data Analyst',
        description: 'Lists and loops. Iteration patterns, list comprehensions, and basic data structures in Python.',
        for: 'Student',
        group: 'Skill Path',
        track: 'Data',
        type: 'link',
        link: 'https://docs.google.com/presentation/d/1lvoj99HIxqe9O7-lXPEor-nPcoTeh7j1LruVgSxw4kE/edit?slide=id.g3b980c88a02_0_72#slide=id.g3b980c88a02_0_72',
    },
    {
        key: '3',
        title: 'Lecture 1 Data Analyst',
        description: 'Intro to Python Fundamentals and Python first steps. Environment setup and basic syntax.',
        for: 'Student',
        group: 'Skill Path',
        track: 'Data',
        type: 'link',
        link: 'https://docs.google.com/presentation/d/1lvoj99HIxqe9O7-lXPEor-nPcoTeh7j1LruVgSxw4kE/edit?slide=id.g3b980c88a02_0_72#slide=id.g3b980c88a02_0_72',
    },
    {
        key: '4',
        title: 'Keyboard shortcuts practice',
        description:
            'Review the keyboard shortcuts from the slides. Choose 10 shortcuts and practice using them on your computer.',
        for: 'Student',
        group: 'All Groups',
        track: 'N/A',
        type: 'assignment',
        link: 'https://docs.google.com/presentation/d/1lvoj99HIxqe9O7-lXPEor-nPcoTeh7j1LruVgSxw4kE/edit?slide=id.g3b980c88a02_0_72#slide=id.g3b980c88a02_0_72',
    },
    {
        key: '5',
        title: 'Computer Essentials & Digital Navigation',
        description:
            'Daily typing practice. Focus on using correct fingers and improving accuracy. Learn main keyboard symbols.',
        for: 'Student',
        group: 'All Groups',
        track: 'N/A',
        type: 'assignment',
        link: 'https://docs.google.com/presentation/d/1lvoj99HIxqe9O7-lXPEor-nPcoTeh7j1LruVgSxw4kE/edit?slide=id.g3b980c88a02_0_72#slide=id.g3b980c88a02_0_72',
    },
    {
        key: '6',
        title: 'Internet + Security (OSINT) + File Management',
        description: 'Fundamental security practices and OSINT techniques for research and safe browsing.',
        for: 'Student',
        group: 'All Groups',
        track: 'Security',
        type: 'link',
        link: 'https://docs.google.com/presentation/d/1lvoj99HIxqe9O7-lXPEor-nPcoTeh7j1LruVgSxw4kE/edit?slide=id.g3b980c88a02_0_72#slide=id.g3b980c88a02_0_72',
    },
    {
        key: '7',
        title: 'Introduction to Python',
        description: 'Core concepts for mentors. Pedagogical approaches to teaching Python fundamentals.',
        for: 'Mentor',
        group: 'Skill Path',
        track: 'Data',
        type: 'link',
        link: 'https://docs.google.com/presentation/d/1lvoj99HIxqe9O7-lXPEor-nPcoTeh7j1LruVgSxw4kE/edit?slide=id.g3b980c88a02_0_72#slide=id.g3b980c88a02_0_72',
    },
];
