import React, { useEffect, useState } from 'react';
import { PiTargetLight } from 'react-icons/pi';
import HeaderTitle from '../../../../components/shared/HeaderTitle';
import { useProfileQuery } from '../../../../redux/apiSlices/authSlice';

const GoalResults: React.FC = () => {
    const { data: profileData, isLoading } = useProfileQuery(undefined);

    const woopGoals = profileData?.data?.woop || [];

    const [selectedGoalId, setSelectedGoalId] = useState<string | null>(null);

    // set first goal after load
    useEffect(() => {
        if (woopGoals.length > 0) {
            setSelectedGoalId(woopGoals[0]._id);
        }
    }, [woopGoals]);

    const selectedGoal =
        woopGoals.find((g: any) => g._id === selectedGoalId) || woopGoals[0];

    if (isLoading) return <div>Loading...</div>;

    if (!woopGoals.length) {
        return (
            <div className="text-center py-10">
                <h2 className="text-xl font-semibold">No Goals Found</h2>
            </div>
        );
    }

    return (
        <div className="space-y-8 animate-fadeIn">
            <HeaderTitle title="Goals" />

            {/* Goal Selector List (OLD DESIGN SAME) */}
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-4">
                {woopGoals.map((goal: any) => (
                    <button
                        key={goal._id}
                        onClick={() => setSelectedGoalId(goal._id)}
                        className={`w-full flex items-center space-x-3 p-4 rounded-xl border transition-all ${
                            selectedGoalId === goal._id
                                ? 'border-[#3BB77E] bg-[#EBF9F1] text-[#1E1E1E]'
                                : 'border-transparent text-[#888888] hover:bg-gray-50'
                        }`}
                    >
                        <PiTargetLight
                            className={`w-5 h-5 ${
                                selectedGoalId === goal._id
                                    ? 'text-[#3BB77E]'
                                    : 'text-[#888888]'
                            }`}
                        />

                        {/* Only index + title */}
                        <span className="font-medium">
                            {goal.goal?.index}. {goal.goal?.title}
                        </span>
                    </button>
                ))}
            </div>

            {/* Selected Goal Details (WOOP) - SAME OLD DESIGN */}
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm space-y-8">
                <div className="flex items-center space-x-3">
                    <span className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center">
                        <PiTargetLight className="w-4 h-4 text-[#8B5CF6]" />
                    </span>

                    <h2 className="text-xl font-bold text-[#1E1E1E]">
                        Woops: {selectedGoal.goal?.title}
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* WISH */}
                    <div className="bg-[#FAF5FF] p-6 rounded-2xl border-l-4 border-[#8B5CF6] space-y-3">
                        <h3 className="text-[#8B5CF6] font-bold uppercase tracking-wide text-sm">
                            WISH
                        </h3>
                        <ul className="list-disc list-inside text-[#6B7280] text-sm leading-relaxed">
                            <li>{selectedGoal?.wish?.detail}</li>
                        </ul>
                    </div>

                    {/* OUTCOME */}
                    <div className="bg-[#F0F9FF] p-6 rounded-2xl border-l-4 border-[#3B82F6] space-y-3">
                        <h3 className="text-[#3B82F6] font-bold uppercase tracking-wide text-sm">
                            OUTCOME
                        </h3>
                        <ul className="list-disc list-inside text-[#6B7280] text-sm leading-relaxed">
                            <li>{selectedGoal?.outcome?.detail}</li>
                        </ul>
                    </div>

                    {/* OBSTACLE */}
                    <div className="bg-[#FFF7ED] p-6 rounded-2xl border-l-4 border-[#F97316] space-y-3">
                        <h3 className="text-[#F97316] font-bold uppercase tracking-wide text-sm">
                            OBSTACLE
                        </h3>
                        <ul className="list-disc list-inside text-[#6B7280] text-sm leading-relaxed">
                            <li>{selectedGoal?.obstacle?.detail}</li>
                        </ul>
                    </div>

                    {/* PLAN */}
                    <div className="bg-[#F0FDF4] p-6 rounded-2xl border-l-4 border-[#22C55E] space-y-3">
                        <h3 className="text-[#22C55E] font-bold uppercase tracking-wide text-sm">
                            PLAN
                        </h3>
                        <ul className="list-disc list-inside text-[#6B7280] text-sm leading-relaxed">
                            <li>{selectedGoal?.plan?.detail}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GoalResults;
