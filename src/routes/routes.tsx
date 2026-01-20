import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Dashboard from '../pages/dashboard/dashboard/Dashboard';
import Login from '../pages/authentication/Login';
import ErrorPage from '../pages/error/ErrorPage';
import Notification from '../pages/dashboard/Notification';
import ForgetPassword from '../pages/authentication/ForgetPassword';
import VerifyOtp from '../pages/authentication/VerifyOtp';
import NewPassword from '../pages/authentication/NewPassword';
import Profile from '../pages/dashboard/profile/Profile';
import Users from '../pages/dashboard/Users';
import BookingHistory from '../pages/dashboard/BookingHistory';
import Transactions from '../pages/dashboard/Transactions';
import Facilities from '../pages/dashboard/Facilities';
import Subscription from '../pages/dashboard/Subscription';
// import PrivateRoute from '../provider/PrivateRoutes';
import SubscriptionList from '../pages/dashboard/SubscriptionList';
import HostList from '../pages/dashboard/HostList';

const router = createBrowserRouter([
    {
        path: '/',
        // element: <PrivateRoute> <App /> </PrivateRoute>,
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            { path: '', element: <Dashboard /> },
            { path: 'users', element: <Users /> },
            { path: 'reviews', element: <BookingHistory /> },
            { path: 'subscription', element: <Subscription/> },
            { path: 'facilities', element: <Facilities /> },
            { path: 'transactions', element: <Transactions /> },
            { path: 'notification', element: <Notification /> },
            { path: 'profile', element: <Profile /> },
             {path:"subscription-list",element:<SubscriptionList/>},
            {
                path:"hosts",
                element:<HostList/>
            }
        ],
    },
    { path: '/login', element: <Login /> },
    { path: '/forget-password', element: <ForgetPassword /> },
    { path: '/verify-otp', element: <VerifyOtp /> },
    { path: '/new-password', element: <NewPassword /> },
   
]);

export default router;
