import { useState } from 'react';
import { Button, Modal, Skeleton } from 'antd';
import { Target, Edit2, Trash2 } from 'lucide-react';
import CreateGoalModal from '../../../../components/modals/admin/CreateGoalModal';
import HeaderTitle from '../../../../components/shared/HeaderTitle';
import { useDeleteGoalMutation, useGetAllGoalsQuery } from '../../../../redux/apiSlices/admin/adminStudentApi';
import { toast } from 'sonner';

const GoalCard = ({
    goal,
    onEdit,
    onDelete,
}: {
    goal: any;
    onEdit: (goal: any) => void;
    onDelete: (id: string) => void;
}) => {
    return (
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden flex flex-col h-full">
            <div className="p-6 flex-grow">
                <h3 className="text-xl font-bold text-gray-800 mb-3 leading-tight">{goal.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{goal.description}</p>
            </div>
            <div className="p-6 pt-0 flex justify-end gap-3">
                <button
                    onClick={() => onEdit(goal)}
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-[#f0f0ff] text-[#8e8eff] hover:bg-[#e0e0ff] transition-colors"
                >
                    <Edit2 size={18} />
                </button>
                <button
                    onClick={() => onDelete(goal._id)}
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-[#fff0f0] text-[#ff8e8e] hover:bg-[#ffe0e0] transition-colors"
                >
                    <Trash2 size={18} />
                </button>
            </div>
        </div>
    );
};

const Goals = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedGoal, setSelectedGoal] = useState<any>(null);

    // api calls
    const { data: goalsApi, isLoading: isGoalsLoading, refetch } = useGetAllGoalsQuery({});
    const [deleteGoal] = useDeleteGoalMutation();
    const allGoals = goalsApi?.goals || [];

    const handleEdit = (goal: any) => {
        setSelectedGoal(goal);
        setIsModalOpen(true);
    };

    const handleDelete = (id: string) => {
        Modal.confirm({
            title: 'Are you sure you want to delete this goal?',
            content: 'This action cannot be undone.',
            okText: 'Yes, Delete',
            okType: 'danger',
            cancelText: 'Cancel',
            centered: true,
            onOk: async () => {
                try {
                    await deleteGoal(id).unwrap();
                    refetch();
                    toast.success('Goal deleted successfully');
                } catch (err: any) {
                    toast.error(err?.data?.message || 'Failed to delete goal');
                }
            },
        });
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedGoal(null);
    };

    return (
        <div className="pb-6">
            <div className="flex justify-between items-center mb-8">
                <HeaderTitle title="Goals" />
                <Button
                    type="primary"
                    icon={<Target size={18} />}
                    onClick={() => setIsModalOpen(true)}
                    className="h-11 bg-[#63d97d] border-none hover:bg-[#52c41a] px-6 rounded-lg font-semibold flex items-center gap-2"
                >
                    New Goal
                </Button>
            </div>

            {isGoalsLoading ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[1, 2, 3].map((n) => (
                        <div key={n} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm h-[200px]">
                            <Skeleton active paragraph={{ rows: 3 }} />
                        </div>
                    ))}
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {allGoals.length > 0 ? (
                        allGoals.map((goal: any) => (
                            <GoalCard key={goal._id} goal={goal} onEdit={handleEdit} onDelete={handleDelete} />
                        ))
                    ) : (
                        <div className="col-span-full py-20 text-center bg-gray-50 rounded-xl border border-dashed border-gray-200">
                            <p className="text-gray-400 font-medium">No goals found. Create your first goal!</p>
                        </div>
                    )}
                </div>
            )}

            <CreateGoalModal open={isModalOpen} onCancel={handleCloseModal} goal={selectedGoal} refetch={refetch} />
        </div>
    );
};

export default Goals;
