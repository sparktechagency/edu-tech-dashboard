import { useState } from 'react';
import GoalBanner from './components/GoalBanner';
import Questionnaire from './components/Questionnaire';
import GoalResults from './components/GoalResults';
import GoalSuccessModal from '../../../components/modals/student/GoalSuccessModal';
import { questionnaireData } from '../../../constants/student-data';
type ViewState = 'questionnaire' | 'results';

const Goal = () => {
    const [view, setView] = useState<ViewState>('questionnaire');
    const [responses, setResponses] = useState<Record<string, string>>({});
    const [showModal, setShowModal] = useState(false);

    const handleResponseChange = (questionId: string, value: string) => {
        setResponses((prev) => ({
            ...prev,
            [questionId]: value,
        }));
    };

    const handleSubmit = () => {
        console.log('Goal Form Submitted:', responses);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setView('results');
    };

    if (view === 'results') {
        return <GoalResults />;
    }

    return (
        <div className="pb-2 animate-fadeIn">
            <GoalBanner name="Tassy" />

            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                <Questionnaire
                    sections={questionnaireData}
                    responses={responses}
                    onResponseChange={handleResponseChange}
                />

                <div className="mt-12 flex justify-start">
                    <button
                        onClick={handleSubmit}
                        className="bg-[#8B5CF6] text-white px-10 py-3 rounded-xl font-semibold hover:bg-[#7C3AED] transition-all transform active:scale-95 shadow-md shadow-purple-100"
                    >
                        Submit
                    </button>
                </div>
            </div>

            {showModal && <GoalSuccessModal onClose={handleCloseModal} isOpen={showModal} />}
        </div>
    );
};

export default Goal;
