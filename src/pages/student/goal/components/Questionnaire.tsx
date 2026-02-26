import React from 'react';

export interface Question {
    id: string;
    question: string;
    type: 'radio' | 'text';
    options?: string[];
    placeholder?: string;
    subText?: string;
}

export interface Section {
    title: string;
    questions: Question[];
}

interface QuestionnaireProps {
    sections: Section[];
    responses: Record<string, string>;
    onResponseChange: (questionId: string, value: string) => void;
}

const Questionnaire: React.FC<QuestionnaireProps> = ({ sections, responses, onResponseChange }) => {
    return (
        <div className="space-y-10">
            {sections.map((section, sIndex) => (
                <div key={sIndex} className="space-y-6">
                    <h2 className="text-[#8B5CF6] text-lg font-medium uppercase tracking-tight">{section.title}</h2>
                    <div className="space-y-8">
                        {section.questions.map((q, qIndex) => (
                            <div key={q.id} className="space-y-4">
                                <h3 className="text-[#1E1E1E] text-base font-semibold">
                                    {qIndex + 1 + (sIndex > 0 ? sections[sIndex - 1].questions.length : 0)}.{' '}
                                    {q.question}
                                </h3>
                                {q.subText && <p className="text-[#888888] text-sm -mt-2">{q.subText}</p>}

                                {q.type === 'radio' && q.options && (
                                    <div className="space-y-3">
                                        {q.options.map((option) => (
                                            <label
                                                key={option}
                                                className="flex items-center space-x-3 cursor-pointer group"
                                            >
                                                <div className="relative flex items-center justify-center">
                                                    <input
                                                        type="radio"
                                                        name={q.id}
                                                        value={option}
                                                        checked={responses[q.id] === option}
                                                        onChange={(e) => onResponseChange(q.id, e.target.value)}
                                                        className="appearance-none w-5 h-5 border-2 border-gray-300 rounded-md checked:border-[#8B5CF6] checked:bg-white transition-all cursor-pointer"
                                                    />
                                                    {responses[q.id] === option && (
                                                        <div className="absolute w-2.5 h-2.5 bg-[#8B5CF6] rounded-sm"></div>
                                                    )}
                                                </div>
                                                <span
                                                    className={`text-sm ${responses[q.id] === option ? 'text-[#1E1E1E]' : 'text-[#888888]'} group-hover:text-[#1E1E1E] transition-colors`}
                                                >
                                                    {option}
                                                </span>
                                            </label>
                                        ))}
                                    </div>
                                )}

                                {q.type === 'text' && (
                                    <textarea
                                        placeholder={q.placeholder}
                                        value={responses[q.id] || ''}
                                        onChange={(e) => onResponseChange(q.id, e.target.value)}
                                        className="w-full p-4 rounded-xl border border-gray-100 bg-gray-50/30 focus:outline-none focus:ring-1 focus:ring-[#8B5CF6] transition-all min-h-[100px] text-sm placeholder:text-[#BBBBBB]"
                                    />
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Questionnaire;
