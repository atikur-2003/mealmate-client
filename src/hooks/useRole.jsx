import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth"; // Assuming this gives you user.email
import useAxiosSecure from "./useAxiosSecure";

const useRole = () => {
  const { user, loading } = useAuth(); // Your auth context
  const axiosSecure = useAxiosSecure();

  const { data: roleData, isLoading } = useQuery({
    enabled: !!user?.email && !loading,
    queryKey: ["userRole", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/role/${user.email}`);
      
      return res.data;
    },
  });

  return [roleData?.role, isLoading];
};

export default useRole;
