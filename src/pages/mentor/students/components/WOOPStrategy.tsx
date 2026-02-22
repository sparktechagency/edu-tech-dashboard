import { Card } from 'antd';

const strategies = [
    {
        title: 'Wish',
        description:
            'WOOP (Wish, Outcome, Obstacle, Plan) is a science-based mental strategy that helps people achieve their goals.',
    },
    {
        title: 'Outcome',
        description: 'Limited portfolio projects and interview anxiety',
    },
    {
        title: 'Obstacle',
        description: 'Limited portfolio projects and interview anxiety',
    },
    {
        title: 'Plan',
        description:
            'Build 3 substantial projects showcasing different skills and practice mock interviews weekly with peers',
    },
];

const WOOPStrategy = () => {
    return (
        <Card
            className="shadow-sm border-none rounded-2xl overflow-hidden"
            title={<span className="text-xl font-bold">WOOP Strategy</span>}
        >
            <div className="grid grid-cols-2 gap-4">
                {strategies.map((strategy, idx) => (
                    <div key={idx}>
                        <h4 className="font-bold text-gray-800 mb-2">{strategy.title}</h4>
                        <p className="text-sm text-gray-500 leading-relaxed">{strategy.description}</p>
                    </div>
                ))}
            </div>
        </Card>
    );
};

export default WOOPStrategy;
