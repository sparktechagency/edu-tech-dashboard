import { ReactNode } from 'react';

interface StatCardProps {
    title: string;
    count: string | number;
    icon: ReactNode;
    iconBgColor: string;
}

const StatCard = ({ title, count, icon, iconBgColor }: StatCardProps) => {
    return (
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center justify-between">
            <div>
                <p className="text-[#888888] text-sm font-medium">{title}</p>
                <h2 className="text-3xl font-bold text-[#1E1E1E] mt-1">{count}</h2>
            </div>
            <div
                className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: iconBgColor }}
            >
                {icon}
            </div>
        </div>
    );
};

export default StatCard;
