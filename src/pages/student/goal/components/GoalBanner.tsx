import React from 'react';

interface GoalBannerProps {
    name: string;
}

const GoalBanner: React.FC<GoalBannerProps> = ({ name }) => {
    return (
        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm mb-8">
            <h1 className="text-2xl font-bold text-[#1E1E1E] mb-3">Hi {name}!</h1>
            <p className="text-[#6B7280] leading-relaxed max-w-4xl">
                Thanks for being a mentor! Your guidance and expertise make a real difference in shaping the next
                generation of tech professionals. Together, we're building a stronger, more connected learning
                community.
            </p>
        </div>
    );
};

export default GoalBanner;
