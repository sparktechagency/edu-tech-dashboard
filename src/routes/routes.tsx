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
            { path: '/admin/events', element: <Users /> },
            { path: '/admin/materials', element: <Users /> },
            { path: '/admin/schedule', element: <Users /> },
            { path: '/admin/weekly-report', element: <Users /> },

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
            { path: '/student/goal', element: <Users /> },
            { path: '/student/resources', element: <Users /> },
            { path: '/student/assignment', element: <StudentAssignment /> },
            { path: '/student/mentor', element: <Mentor /> },
            { path: '/student/events', element: <StudentEvents /> },
            { path: '/student/chat', element: <StudentChat /> },
            { path: '/student/profile', element: <StudentProfile /> },
            // { path: '/student/profile', element: <Users /> },

            // Mentor
            { path: '/mentor/overview', element: <Users /> },
            { path: '/mentor/students', element: <Users /> },
            { path: '/mentor/weekly-report', element: <Users /> },
            { path: '/mentor/time-tracking', element: <Users /> },
            { path: '/mentor/learning-materials', element: <Users /> },
            { path: '/mentor/woops', element: <Users /> },
            { path: '/mentor/chat', element: <Users /> },
            { path: '/mentor/profile', element: <Users /> },
        ],
    },
    { path: '/login', element: <Login /> },
    { path: '/forget-password', element: <ForgetPassword /> },
    { path: '/verify-otp', element: <VerifyOtp /> },
    { path: '/new-password', element: <NewPassword /> },
]);

export default router;
