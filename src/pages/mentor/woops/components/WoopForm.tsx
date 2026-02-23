import React from 'react';
import { StepContent } from '../../../../constants/mentor-data';

interface WoopFormProps {
    stepData: StepContent;
}

const WoopForm: React.FC<WoopFormProps> = ({ stepData }) => {
    return (
        <div className="mt-10">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">{stepData.subtitle}</h2>

            <div className="space-y-6">
                <div>
                    <label className="block text-gray-500 font-semibold mb-3">{stepData.fieldLabel1}</label>
                    <input
                        type="text"
                        placeholder="Type here..."
                        className="w-full p-4 rounded-lg bg-white border border-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-100 transition-all"
                    />
                </div>

                <div>
                    <label className="block text-gray-500 font-semibold mb-3">{stepData.fieldLabel2}</label>
                    <input
                        type="text"
                        placeholder="Type here..."
                        className="w-full p-4 rounded-lg bg-white border border-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-100 transition-all"
                    />
                </div>

                <div>
                    <label className="block text-gray-500 font-semibold mb-3">
                        Describe your wish in a few words ...
                    </label>
                    <textarea
                        rows={4}
                        placeholder="Example: I want to finish my portfolio project by Friday so I can start applying for internships ..."
                        className="w-full p-4 rounded-lg bg-white border border-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-100 transition-all resize-none"
                    />
                </div>
            </div>
        </div>
    );
};

export default WoopForm;
