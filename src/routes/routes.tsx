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
import TeacherOverview from '../pages/teacher/overview';
import MyStudent from '../pages/teacher/my-student';

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
            { path: '/teacher/class-schedule', element: <Users /> },
            { path: '/teacher/resources', element: <Users /> },
            { path: '/teacher/assignment', element: <Users /> },
            { path: '/teacher/chat', element: <Users /> },
            { path: '/teacher/attendance', element: <Users /> },

            //  Mentor Coordinator
            { path: '/mentor-coordinator/overview', element: <MentorCoordinatorOverview /> },
            { path: '/mentor-coordinator/mentors', element: <Mentors /> },
            { path: '/mentor-coordinator/group-schedule', element: <GroupSchedule /> },
            { path: '/mentor-coordinator/resources', element: <CoordinatorResources /> },
            { path: '/mentor-coordinator/profile', element: <MentorCoordinatorProfile /> },

            // Student
            { path: '/student/overview', element: <Users /> },
            { path: '/student/goal', element: <Users /> },
            { path: '/student/resources', element: <Users /> },
            { path: '/student/assignment', element: <Users /> },
            { path: '/student/mentor', element: <Users /> },
            { path: '/student/events', element: <Users /> },
            { path: '/student/chat', element: <Users /> },
            { path: '/student/setting', element: <Users /> },
            { path: '/student/profile', element: <Users /> },

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
