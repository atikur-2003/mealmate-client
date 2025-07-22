import { useQuery } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Loading from "../../components/Loading";

const AdminProfile = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure()
  const { data: meals = [], isLoading } = useQuery({
    queryKey: ["adminMeals", user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/meals?email=${user.email}`
      );
      return res.data;
    },
  });

  if (isLoading)
    return <Loading></Loading>;

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow rounded-md">
      <div className="flex flex-col md:flex-row items-center gap-6">
        <img
          src={user?.photoURL}
          alt="Admin"
          className="w-24 h-24 rounded-full object-cover border-2 border-blue-500"
        />
        <div>
          <h2 className="text-2xl font-bold">{user?.displayName}</h2>
          <p className="text-gray-600">{user?.email}</p>
          <p className="mt-2 font-semibold">
            Meals Added: <span className="text-blue-600">{meals.length}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminProfile;
