import WelcomeBanner from './components/WelcomeBanner';
import MentorCard from './components/MentorCard';
import StatCard from './components/StatCard';
import EventCard from './components/EventCard';
import ActiveAssignmentCard from './components/ActiveAssignmentCard';
import { mockMentor } from '../../../constants/student/mentor';
import { mockEvents } from '../../../constants/student/events';
import { mockAssignments } from '../../../constants/student/assignments';
import { PiBookOpenTextLight, PiCalendarBlankLight, PiUsersLight, PiTargetLight } from 'react-icons/pi';
import HeaderTitle from '../../../components/shared/HeaderTitle';

const StudentOverview = () => {
    const stats = [
        {
            title: 'Assignments',
            count: '02',
            icon: <PiBookOpenTextLight className="w-6 h-6 text-[#3BB77E]" />,
            iconBgColor: '#EBF9F1',
        },
        {
            title: 'Schedule',
            count: '01',
            icon: <PiCalendarBlankLight className="w-6 h-6 text-[#84CC16]" />,
            iconBgColor: '#F7FEE7',
        },
        {
            title: 'Mentor',
            count: '01',
            icon: <PiUsersLight className="w-6 h-6 text-[#F97316]" />,
            iconBgColor: '#FFF7ED',
        },
        {
            title: 'Goals',
            count: '03',
            icon: <PiTargetLight className="w-6 h-6 text-[#8B5CF6]" />,
            iconBgColor: '#F5EEFB',
        },
    ];

    const activeAssignments = mockAssignments.filter((a) => a.status === 'In Process');

    return (
        <section className="space-y-8 pb-10 animate-fadeIn">
            {/* Welcome Banner */}
            <WelcomeBanner name="Tassy" group="Fullstack" />

            {/* Mentor Card */}
            <MentorCard mentor={mockMentor} />

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                    <StatCard key={index} {...stat} />
                ))}
            </div>

            {/* Upcoming Events */}
            <div>
                <HeaderTitle title="Upcoming Events" />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-3">
                    {mockEvents?.map((event) => (
                        <EventCard key={event.id} event={event} />
                    ))}
                </div>
            </div>

            {/* Active Assignments */}
            <div>
                <HeaderTitle title="Active Assignments" />
                <div className="space-y-4 pt-3">
                    {activeAssignments.length > 0 ? (
                        activeAssignments.map((assignment) => (
                            <ActiveAssignmentCard key={assignment.id} assignment={assignment} />
                        ))
                    ) : (
                        <div className="bg-white p-10 rounded-2xl border border-dashed border-gray-200 text-center text-[#888888]">
                            No active assignments at the moment.
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default StudentOverview;
