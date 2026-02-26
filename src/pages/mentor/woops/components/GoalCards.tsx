import { goalsData } from '../../../../constants/mentor-data';

const GoalCards = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {goalsData.map((goal) => (
                <div
                    key={goal.id}
                    className="p-5 rounded-2xl border relative shadow-sm"
                    style={{
                        backgroundColor: goal.bgColor,
                        borderColor: goal.borderColor,
                    }}
                >
                    <h3 className="font-bold text-lg mb-2" style={{ color: goal.active ? goal.color : '#9CA3AF' }}>
                        Goal: {goal.id}
                    </h3>
                    <h4 className="text-gray-800 font-bold mb-1">{goal.title}</h4>
                    <p className="text-gray-500 text-sm">{goal.description}</p>
                </div>
            ))}
        </div>
    );
};

export default GoalCards;
