import { Navigate } from 'react-router';
import useAuth from '../hooks/useAuth';
import useRole from '../hooks/useRole';
import Loading from '../components/Loading';

const AdminRoute = ({ children }) => {
  const { loading } = useAuth();
  const [role, isRoleLoading] = useRole();

  if (loading || isRoleLoading) return <Loading></Loading>;

if (role === "admin") return children

  return <Navigate to='/dashboard/admin/admin-profile' replace='true' />
};

export default AdminRoute;
