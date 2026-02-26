import { Card } from 'antd';
import { Users, Trophy } from 'lucide-react';

const goals = [
    {
        icon: <Users className="text-blue-500 w-6 h-6" />,
        bg: 'bg-blue-50',
        title: 'Interview Ready',
        description: 'Practice mock interviews weekly with peers and mentors.',
    },
    {
        icon: <Trophy className="text-purple-500 w-6 h-6" />,
        bg: 'bg-purple-50',
        title: 'Portfolio Mastery',
        description: 'Complete 3 substantial projects showcasing UI/UX skills.',
    },
];

const CoreGoals = () => {
    return (
        <Card
            className="shadow-sm border-none rounded-2xl overflow-hidden"
            title={<span className="text-xl font-bold">Core Goals</span>}
        >
            <div className="space-y-6">
                {goals.map((goal, idx) => (
                    <div key={idx} className="flex gap-4">
                        <div
                            className={`w-12 h-12 rounded-2xl ${goal.bg} flex items-center justify-center flex-shrink-0`}
                        >
                            {goal.icon}
                        </div>
                        <div>
                            <h4 className="font-bold text-gray-800 text-lg">{goal.title}</h4>
                            <p className="text-gray-500 leading-relaxed">{goal.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </Card>
    );
};

export default CoreGoals;
