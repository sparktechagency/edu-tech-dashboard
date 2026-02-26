import MentorOverviewHeader from './components/MentorOverviewHeader';
import MentorProfileCard from './components/MentorProfileCard';
import MentorStatsCards from './components/MentorStatsCards';
import StudentGoalsSnapshot from './components/StudentGoalsSnapshot';
import WOOPGoals from './components/WOOPGoals';
import UpcomingEvents from './components/UpcomingEvents';

function MentorOverview() {
    return (
        <div className="">
            <MentorOverviewHeader />
            <MentorProfileCard />
            <MentorStatsCards />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                <StudentGoalsSnapshot />
                <WOOPGoals />
            </div>

            <UpcomingEvents />
        </div>
    );
}

export default MentorOverview;
