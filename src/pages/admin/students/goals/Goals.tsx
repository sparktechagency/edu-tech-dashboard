import { useState } from 'react';
import { Button } from 'antd';
import { Target, Edit2, Trash2 } from 'lucide-react';
import { GOALS_DATA, Goal } from '../../../../constants/admin-data/goals';
import CreateGoalModal from '../../../../components/modals/admin/CreateGoalModal';
import HeaderTitle from '../../../../components/shared/HeaderTitle';

const GoalCard = ({ goal }: { goal: Goal }) => {
    return (
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden flex flex-col h-full">
            <div className="p-6 flex-grow">
                <h3 className="text-xl font-bold text-gray-800 mb-3 leading-tight">{goal.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{goal.description}</p>
            </div>
            <div className="p-6 pt-0 flex justify-end gap-3">
                <button className="w-10 h-10 flex items-center justify-center rounded-full bg-[#f0f0ff] text-[#8e8eff] hover:bg-[#e0e0ff] transition-colors">
                    <Edit2 size={18} />
                </button>
                <button className="w-10 h-10 flex items-center justify-center rounded-full bg-[#fff0f0] text-[#ff8e8e] hover:bg-[#ffe0e0] transition-colors">
                    <Trash2 size={18} />
                </button>
            </div>
        </div>
    );
};

const Goals = () => {
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

    return (
        <div className="pb-6">
            <div className="flex justify-between items-center mb-8">
                <HeaderTitle title="Goals" />
                <Button
                    type="primary"
                    icon={<Target size={18} />}
                    onClick={() => setIsCreateModalOpen(true)}
                    className="h-11 bg-[#63d97d] border-none hover:bg-[#52c41a] px-6 rounded-lg font-semibold flex items-center gap-2"
                >
                    New Goal
                </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {GOALS_DATA.map((goal) => (
                    <GoalCard key={goal.id} goal={goal} />
                ))}
            </div>

            <CreateGoalModal open={isCreateModalOpen} onCancel={() => setIsCreateModalOpen(false)} />
        </div>
    );
};

export default Goals;
