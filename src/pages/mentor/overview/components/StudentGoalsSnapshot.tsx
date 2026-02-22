import { GraduationCap } from 'lucide-react';

const StudentGoalsSnapshot = () => {
    const students = [
        {
            name: 'Alex Johnson',
            goals: [
                'Improve Calculus grade to A',
                'Complete Python basic certification',
                'Apply to 3 summer internships',
            ],
        },
        {
            name: 'Sarah Lee',
            goals: ['Write college essay draft', 'Join group', 'Free learning materials'],
        },
    ];

    return (
        <div className="rounded-xl border border-gray-100 shadow-sm h-full bg-white p-6">
            <h3 className="text-[22px] font-semibold text-gray-800 pb-4">Student Goals Snapshot</h3>
            <div className="space-y-4">
                {students.map((student, index) => (
                    <div key={index} className="flex flex-col gap-3">
                        <div className="flex items-center gap-3">
                            <div className="bg-blue-50 p-2 rounded-lg text-blue-500">
                                <GraduationCap size={20} />
                            </div>
                            <h4 className="text-lg font-semibold text-gray-800">{student.name}</h4>
                        </div>
                        <ul className="space-y-2 ml-10">
                            {student.goals.map((goal, gIndex) => (
                                <li key={gIndex} className="text-gray-500 text-sm flex items-start gap-2">
                                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-300 flex-shrink-0" />
                                    {goal}
                                </li>
                            ))}
                        </ul>
                        {index < students.length - 1 && <div className="border-b border-gray-50 pt-2" />}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default StudentGoalsSnapshot;
