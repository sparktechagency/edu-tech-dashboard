import { useState } from 'react';
import { FiEdit2 } from 'react-icons/fi';
import GoalCards from './components/GoalCards';
import WoopStepper from './components/WoopStepper';
import WoopForm from './components/WoopForm';
import WoopTips from './components/WoopTips';
import { stepsData } from '../../../constants/mentor-data';

const Woops = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [showTips, setShowTips] = useState(false);

    const handleNext = () => {
        if (currentStep < 4) {
            setCurrentStep(currentStep + 1);
        } else {
            setShowTips(true);
        }
    };

    const handleBack = () => {
        if (currentStep > 1) {
            setCurrentStep(currentStep - 1);
        }
    };

    const handleReset = () => {
        setCurrentStep(1);
        setShowTips(false);
    };

    if (showTips) {
        return <WoopTips onReset={handleReset} />;
    }

    const currentStepData = stepsData[currentStep];

    return (
        <div className=" mx-auto">
            {/* Header Goals */}
            <GoalCards />

            <div className="flex justify-between items-center mb-6">
                <div>
                    <h2 className="text-xl font-bold text-gray-800 mb-1">WOOP Method</h2>
                    <p className="text-gray-400 text-sm flex items-center gap-2">
                        <span>• Wish</span>
                        <span>• Outcome</span>
                        <span>• Obstacle</span>
                        <span>• Plan</span>
                    </p>
                </div>
                {/* <button className="bg-[#7C3AED] text-white px-5 py-2 rounded-lg flex items-center gap-2 font-semibold">
                    <FiEdit2 />
                    Edit woops
                </button> */}
            </div>

            {/* Stepper */}
            <WoopStepper currentStep={currentStep} />

            {/* Form Section */}
            <WoopForm stepData={currentStepData} />

            {/* Navigation */}
            <div className="mt-12 flex justify-end gap-3">
                {currentStep > 1 && (
                    <button
                        onClick={handleBack}
                        className="px-8 py-3 bg-gray-50 text-gray-500 font-bold rounded-lg hover:bg-gray-100 transition-colors"
                    >
                        Back
                    </button>
                )}
                <button
                    onClick={handleNext}
                    className="px-10 py-3 text-white font-bold rounded-lg transition-all transform active:scale-95 shadow-md"
                    style={{ backgroundColor: currentStepData.color }}
                >
                    {currentStep === 4 ? 'Save Woop' : 'Next Step'}
                </button>
            </div>
        </div>
    );
};

export default Woops;
