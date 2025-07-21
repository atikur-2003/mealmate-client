import { Link, Outlet } from 'react-router';
import { FaUser, FaUtensils, FaStar, FaMoneyBill } from 'react-icons/fa';
import LogoTitle from '../shared/LogoTitle';

const UserDashboardLayout = () => {
  return (
    <div className="min-h-screen flex bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 text-white shadow-md p-4 bg-slate-800">
        <Link to="/">
        <div className="p-6">
          <LogoTitle></LogoTitle>
        </div>
      </Link>
        <ul className="space-y-4">
          <li>
            <Link to="/dashboard/user/my-profile" className="flex items-center gap-2 hover:text-blue-500">
              <FaUser /> My Profile
            </Link>
          </li>
          <li>
            <Link to="/dashboard/user/requested-meal" className="flex items-center gap-2 hover:text-blue-500">
              <FaUtensils /> Requested Meals
            </Link>
          </li>
          <li>
            <Link to="/dashboard/user/my-reviews" className="flex items-center gap-2 hover:text-blue-500">
              <FaStar /> My Reviews
            </Link>
          </li>
          <li>
            <Link to="/dashboard/user/my-payments" className="flex items-center gap-2 hover:text-blue-500">
              <FaMoneyBill /> Payment History
            </Link>
          </li>
        </ul>
      </aside>

      {/* Content */}
      <main className="flex-1 p-6 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default UserDashboardLayout;
