import TeacherStats from './components/TeacherStats';
import UpcomingClasses from './components/UpcomingClasses';
import PendingReviews from './components/PendingReviews';
import RecentActivity from './components/RecentActivity';

function TeacherOverview() {
    return (
        <div className="">
            <TeacherStats />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div className="h-full">
                    <UpcomingClasses />
                </div>
                <div className="h-full">
                    <PendingReviews />
                </div>
            </div>

            <div>
                <RecentActivity />
            </div>
        </div>
    );
}

export default TeacherOverview;
