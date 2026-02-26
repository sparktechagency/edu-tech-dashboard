import React from 'react';
import { stepsData } from '../../../../constants/mentor-data';

interface WoopStepperProps {
    currentStep: number;
}

const WoopStepper: React.FC<WoopStepperProps> = ({ currentStep }) => {
    return (
        <div className="grid grid-cols-4 gap-4 mb-8">
            {[1, 2, 3, 4].map((step) => {
                const stepInfo = stepsData[step];
                const isActive = currentStep === step;
                return (
                    <div
                        key={step}
                        className={`p-4 rounded-2xl border transition-all duration-300 ${
                            isActive ? `shadow-md shadow-purple-50` : 'bg-white border-transparent text-gray-400'
                        }`}
                        style={{
                            backgroundColor: isActive ? stepInfo.bgColor : undefined,
                            borderColor: isActive ? stepInfo.borderColor : undefined,
                            borderBottomWidth: isActive ? '4px' : '1px',
                        }}
                    >
                        <p className={`text-[10px] font-bold mb-1 ${isActive ? '' : 'text-gray-400'}`}>
                            <span className="mr-1 inline-block w-1 h-1 rounded-full bg-gray-600"></span>
                            {stepInfo.number}
                        </p>
                        <h3
                            className={`text-2xl font-bold ${isActive ? '' : 'text-gray-400'}`}
                            style={{ color: isActive ? stepInfo.color : undefined }}
                        >
                            {stepInfo.title}
                        </h3>
                    </div>
                );
            })}
        </div>
    );
};

export default WoopStepper;
