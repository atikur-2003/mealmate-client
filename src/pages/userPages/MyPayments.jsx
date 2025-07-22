import { useQuery } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Loading from "../../components/Loading";

const MyPayments = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: payments = [], isLoading } = useQuery({
    queryKey: ["user-payments", user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments?email=${user.email}`);
      return res.data;
    },
  });

  return (
    <div className="p-4">
      <h2 className="text-2xl md:text-3xl text-blue-500 font-bold mb-5 ">My Payment History</h2>

      {isLoading ? (
        <Loading></Loading>
      ) : payments.length === 0 ? (
        <p className="text-gray-500">You haven't made any payments yet.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="table-auto w-full border border-gray-300 text-center">
            <thead className="bg-gray-100">
              <tr>
                <th>#</th>
                <th>Package</th>
                <th>Price</th>
                <th>Transaction ID</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {payments.map((payment, index) => (
                <tr key={payment._id} className="border-t">
                  <td className="font-medium">{index + 1}</td>
                  <td className="font-medium">{payment.package}</td>
                  <td className="font-medium">taka {payment.price}</td>
                  <td className="font-medium">{payment.transactionId}</td>
                  <td className="font-medium">{new Date(payment.date).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MyPayments;
