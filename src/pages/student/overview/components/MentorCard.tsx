import { Avatar } from 'antd';
import { Mentor } from '../../../../constants/student/mentor';
import { Link } from 'react-router-dom';

interface MentorCardProps {
    mentor: Mentor;
}

const MentorCard = ({ mentor }: MentorCardProps) => {
    return (
        <Link
            to={'/student/mentor'}
            className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-6"
        >
            <Avatar src={mentor.profile} size={80} className="border-4 border-gray-50 flex-shrink-0" />
            <div className="flex-1">
                <div className="flex items-center gap-2">
                    <h2 className="text-xl font-bold text-[#1E1E1E]">{mentor.name}</h2>
                </div>
                <div className="text-[#3BB77E] text-sm font-semibold mt-0.5">{mentor.role}</div>
                <p className="text-[#888888] text-sm mt-2 leading-relaxed max-w-2xl">{mentor.subtext}</p>
            </div>
        </Link>
    );
};

export default MentorCard;
