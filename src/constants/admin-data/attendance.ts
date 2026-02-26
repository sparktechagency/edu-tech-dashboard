export interface AttendanceStudent {
    key: string;
    name: string;
    email: string;
    groups: string[];
}

export const ATTENDANCE_STUDENTS_DATA: AttendanceStudent[] = [
    {
        key: '1',
        name: 'Labeeb Ahmad Tahir',
        email: 'lat712000@gmail.com',
        groups: ['Skill Path', 'Fullstack'],
    },
    {
        key: '2',
        name: 'studenttest studenttest',
        email: 'teacher@share-network.org',
        groups: ['Skill Path', 'Fullstack'],
    },
    {
        key: '3',
        name: 'Nawar Awad',
        email: 'nori0aw@gmail.com',
        groups: ['beginners'],
    },
    {
        key: '4',
        name: 'Fredrick Kiprono',
        email: 'fredrickkiprono13@gmail.com',
        groups: ['beginners'],
    },
    {
        key: '5',
        name: 'Ando Ny Aina Eninera Tambazason',
        email: 'sixanaando@gmail.com',
        groups: ['Skill Path', 'Data'],
    },
    {
        key: '6',
        name: 'Olzhas Saukambekov',
        email: 'olzhasaukambekov@gmail.com',
        groups: ['Expedition'],
    },
];

export const ATTENDANCE_STATUS_OPTIONS = [
    { label: 'Present', value: 'Present' },
    { label: 'Absent', value: 'Absent' },
    { label: 'Late', value: 'Late' },
    { label: 'Excused', value: 'Excused' },
];

export const GROUP_OPTIONS = [
    { label: 'All Groups', value: 'all' },
    { label: 'Skill Path', value: 'skill-path' },
    { label: 'Beginners', value: 'beginners' },
    { label: 'Expedition', value: 'expedition' },
];
