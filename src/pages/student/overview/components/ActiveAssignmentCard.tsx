import { Assignment } from '../../../../constants/student/assignments';
import { PiCalculatorLight } from 'react-icons/pi';
import { HiOutlineComputerDesktop } from 'react-icons/hi2';
import { Link } from 'react-router-dom';

interface ActiveAssignmentCardProps {
    assignment: Assignment;
}

const ActiveAssignmentCard = ({ assignment }: ActiveAssignmentCardProps) => {
    const Icon = assignment.subject === 'MATHEMATICS' ? PiCalculatorLight : HiOutlineComputerDesktop;
    const iconBg = assignment.subject === 'MATHEMATICS' ? '#EBF9F1' : '#F5EEFB';
    const iconColor = assignment.subject === 'MATHEMATICS' ? '#3BB77E' : '#7C3AED';

    return (
        <Link
            to={'/student/assignment'}
            className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center justify-between group hover:border-primary/20 transition-all duration-300"
        >
            <div className="flex items-center gap-5">
                <div
                    className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: iconBg }}
                >
                    <Icon className="w-6 h-6" style={{ color: iconColor }} />
                </div>
                <div>
                    <h3 className="text-lg font-bold text-[#333333] group-hover:text-primary transition-colors">
                        {assignment.title}
                    </h3>
                    <p className="text-[#888888] text-sm mt-1">Due: {assignment.dueDate}</p>
                </div>
            </div>
            <div className="text-[#D97706] font-semibold text-[15px]">{assignment.status==='PENDING'}</div>
        </Link>
    );
};

export default ActiveAssignmentCard;
