import { Mentor } from '../../../../constants/student/mentor';

export const MentorHeader = ({ mentor }: { mentor: Mentor }) => (
    <div className="bg-white p-6 rounded-2xl border border-gray-100 flex items-center gap-5">
        <img
            src={mentor.avatar}
            alt={mentor.name}
            className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-sm"
        />
        <div>
            <h1 className="text-2xl font-bold text-[#1E293B]">{mentor.name}</h1>
            <p className="text-[#3BB77E] font-medium text-sm">{mentor.role}</p>
            <p className="text-[#64748B] text-sm mt-0.5">{mentor.subtext}</p>
        </div>
    </div>
);
