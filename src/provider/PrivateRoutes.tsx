import { Navigate, useLocation } from 'react-router-dom';
import { useProfileQuery } from '../redux/apiSlices/authSlice';
import Spinner from '../components/shared/Spinner';

interface PrivateRouteProps {
    children: React.ReactNode;
    role?: string | string[];
}

const PrivateRoute = ({ children, role }: PrivateRouteProps) => {
    const location = useLocation();
    const { data: profile, isLoading, isFetching, isError } = useProfileQuery(undefined);

    if (isLoading || isFetching) {
        return <Spinner />;
    }

    const userRole = profile?.data?.role?.toLowerCase();

    if (isError || !profile?.data) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    const roles = role ? (Array.isArray(role) ? role.map((r) => r.toLowerCase()) : [role.toLowerCase()]) : null;

    if (!roles || roles.includes(userRole)) {
        return <>{children}</>;
    }

    return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoute;
