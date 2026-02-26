export const studentsData = [
  {
    key: '1',
    name: 'Labeeb Ahmad Tahir',
    email: 'lat712000@gmail.com',
    groups: ['Skill Path', 'Fullstack'],
    location: 'Amsterdam',
    status: 'Active',
    mentorInfo: null,
    firstName: 'Labeeb Ahmad',
    lastName: 'Tahir',
    phone: '+31687421112',
    bio: 'No bio provided',
    birthDate: '2000-02-15',
    vNumber: '123456',
    gender: 'Male',
    highestEducation: "Bachelor's Degree",
    programmingExperience: 'Intermediate: 1-3 years of experience',
    careerDirections: 'Labeeb Ahmad',
    hoursPerWeek: '1-5',
    hasLaptop: 'Yes',
    hobbies: 'No hobbies listed',
    city: 'Almere',
    zipCode: '1318 EN',
    streetAddress: 'Engelse Mijl 6',
    caseManager: 'Labeeb Ahmad Tahir',
    notes: 'No notes provided',
    linkedin: 'Not provided',
    github: 'Not provided',
    enrollmentDate: '2023-01-15',
  },
  {
    key: '2',
    name: 'Mostain Billah',
    email: 'mostainbillah794@gmail.co',
    groups: ['Beginners'],
    location: 'Rotterdam',
    status: 'Pending',
    mentorInfo: null,
    firstName: 'Mostain',
    lastName: 'Billah',
    phone: '+31 6 8765 4321',
    bio: 'No bio provided',
    birthDate: '1998-05-20',
    vNumber: '654321',
    gender: 'Male',
    highestEducation: "Master's Degree",
    programmingExperience: 'Advanced: 3+ years of experience',
    careerDirections: 'Web Development',
    hoursPerWeek: '10-15',
    hasLaptop: 'Yes',
    hobbies: 'Photography',
    city: 'Rotterdam',
    zipCode: '3011 AA',
    streetAddress: 'Example Street 1',
    caseManager: 'Admin User',
    notes: 'Very promising student',
    linkedin: 'linkedin.com/in/mostain',
    github: 'github.com/mostain',
    enrollmentDate: '2023-02-20',
  }
];

export const goalsData = [
  {
    key: '1',
    studentName: 'Sarah Connor',
    part: 'Digital Literacy',
    question: 'How comfortable are you with using spreadsheets?',
    status: 'In Progress',
    dueDate: '2024-03-30',
    progress: 45
  },
  {
    key: '2',
    studentName: 'John Doe',
    part: 'Web Development',
    question: 'Can you build a basic HTML page?',
    status: 'Completed',
    dueDate: '2024-02-15',
    progress: 100
  },
  {
    key: '3',
    studentName: 'Ellen Ripley',
    part: 'Cloud Computing',
    question: 'Do you understand what a VPC is?',
    status: 'Not Started',
    dueDate: '2024-04-10',
    progress: 0
  }
];

export const attendanceData = [
  {
    key: '1',
    studentName: 'Sarah Connor',
    email: 'sarah.connor@example.com',
    group: 'Beginners',
    date: '2024-02-24',
    status: 'Present'
  },
  {
    key: '2',
    studentName: 'John Doe',
    email: 'john.doe@example.com',
    group: 'Skill Path',
    date: '2024-02-24',
    status: 'Late'
  },
  {
    key: '3',
    studentName: 'Ellen Ripley',
    email: 'ellen.ripley@example.com',
    group: 'Expedition',
    date: '2024-02-24',
    status: 'Absent'
  },
  {
    key: '4',
    studentName: 'Kyle Reese',
    email: 'kyle.reese@example.com',
    group: 'Fullstack',
    date: '2024-02-24',
    status: 'Present'
  }
];

export const attendanceStatusOptions = [
  { label: 'Present', value: 'Present' },
  { label: 'Absent', value: 'Absent' },
  { label: 'Late', value: 'Late' }
];

export const studentStatusOptions = [
  { label: 'Active', value: 'Active' },
  { label: 'Inactive', value: 'Inactive' }
];
