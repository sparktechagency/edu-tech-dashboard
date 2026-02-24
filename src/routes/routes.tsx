import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Login from '../pages/authentication/Login';
import ErrorPage from '../components/ui/error/ErrorPage';
import ForgetPassword from '../pages/authentication/ForgetPassword';
import VerifyOtp from '../pages/authentication/VerifyOtp';
import NewPassword from '../pages/authentication/NewPassword';
import Users from '../pages/Users';
import AdminOverview from '../pages/admin/overview';
import MentorCoordinatorOverview from '../pages/mentor-coordinator/mentor-coordinator-overview';
import MentorCoordinatorProfile from '../pages/mentor-coordinator/profile';
import Mentors from '../pages/mentor-coordinator/mentors';
import GroupSchedule from '../pages/mentor-coordinator/group-schedule';
import CoordinatorResources from '../pages/mentor-coordinator/resources';
import AttendanceTeacher from '../pages/teacher/attendance';
import TeacherOverview from '../pages/teacher/overview';
import MyStudent from '../pages/teacher/my-student';
import MessageCenter from '../pages/teacher/chat';
import ClassSchedule from '../pages/teacher/class-schedule';
import Resources from '../pages/teacher/resources';
import Assignment from '../pages/teacher/assignment';
import StudentOverview from '../pages/student/overview';
import StudentProfile from '../pages/student/settings';
import StudentChat from '../pages/student/chat';
import StudentEvents from '../pages/student/events';
import Mentor from '../pages/student/mentor';
import StudentAssignment from '../pages/student/assignment';
import StudentResources from '../pages/student/resources';
import Goal from '../pages/student/goal';
import MentorOverview from '../pages/mentor/overview';
import Students from '../pages/mentor/students';
import MentorChat from '../pages/mentor/chat';
import MentorSetting from '../pages/mentor/setting';
import WeeklyReport from '../pages/mentor/weekly-report';
import TimeTracking from '../pages/mentor/time-tracking';
import LearningMaterials from '../pages/mentor/learning-materials';
import Woops from '../pages/mentor/woops';
import AdminSchedule from '../pages/admin/schdule';
import AdminLearningMaterials from '../pages/admin/materials';
import AdminEvents from '../pages/admin/events';
import AdminWeeklyReport from '../pages/admin/weekly-report';

const router = createBrowserRouter([
    {
        path: '/',
        // element: <PrivateRoute> <App /> </PrivateRoute>,
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            // Admin
            { path: '/admin/overview', element: <AdminOverview /> },
            { path: '/admin/student', element: <Users /> },
            { path: '/admin/mentors', element: <Users /> },
            { path: '/admin/teacher', element: <Users /> },
            { path: '/admin/events', element: <AdminEvents /> },
            { path: '/admin/materials', element: <AdminLearningMaterials /> },
            { path: '/admin/schedule', element: <AdminSchedule /> },
            { path: '/admin/weekly-report', element: <AdminWeeklyReport /> },

            //Teacher
            { path: '/teacher/overview', element: <TeacherOverview /> },
            { path: '/teacher/my-student', element: <MyStudent /> },
            { path: '/teacher/class-schedule', element: <ClassSchedule /> },
            { path: '/teacher/resources', element: <Resources /> },
            { path: '/teacher/assignment', element: <Assignment /> },
            { path: '/teacher/chat', element: <MessageCenter /> },
            { path: '/teacher/attendance', element: <AttendanceTeacher /> },

            //  Mentor Coordinator
            { path: '/mentor-coordinator/overview', element: <MentorCoordinatorOverview /> },
            { path: '/mentor-coordinator/mentors', element: <Mentors /> },
            { path: '/mentor-coordinator/group-schedule', element: <GroupSchedule /> },
            { path: '/mentor-coordinator/resources', element: <CoordinatorResources /> },
            { path: '/mentor-coordinator/profile', element: <MentorCoordinatorProfile /> },

            // Student
            { path: '/student/overview', element: <StudentOverview /> },
            { path: '/student/goal', element: <Goal /> },
            { path: '/student/resources', element: <StudentResources /> },
            { path: '/student/assignment', element: <StudentAssignment /> },
            { path: '/student/mentor', element: <Mentor /> },
            { path: '/student/events', element: <StudentEvents /> },
            { path: '/student/chat', element: <StudentChat /> },
            { path: '/student/profile', element: <StudentProfile /> },
            // { path: '/student/profile', element: <Users /> },

            // Mentor
            { path: '/mentor/overview', element: <MentorOverview /> },
            { path: '/mentor/students', element: <Students /> },
            { path: '/mentor/weekly-report', element: <WeeklyReport /> },
            { path: '/mentor/time-tracking', element: <TimeTracking /> },
            { path: '/mentor/learning-materials', element: <LearningMaterials /> },
            { path: '/mentor/woops', element: <Woops /> },
            { path: '/mentor/chat', element: <MentorChat /> },
            { path: '/mentor/profile', element: <MentorSetting /> },
        ],
    },
    { path: '/login', element: <Login /> },
    { path: '/forget-password', element: <ForgetPassword /> },
    { path: '/verify-otp', element: <VerifyOtp /> },
    { path: '/new-password', element: <NewPassword /> },
]);

export default router;