import { useState, useEffect } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const ManageUsers = () => {
  const [searchEmail, setSearchEmail] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    if (!searchEmail) {
      setUsers([]);
      return;
    }

    const delayDebounce = setTimeout(() => {
      setLoading(true);
      axiosSecure
        .get(`/users/search?email=${searchEmail}`)
        .then((res) => {
          setUsers(res.data || []);
          setError("");
        })
        .catch((err) => {
          console.error("Error fetching users:", err);
          setError("Failed to fetch users.");
          setUsers([]);
        })
        .finally(() => {
          setLoading(false);
        });
    }, 500);

    return () => clearTimeout(delayDebounce);
  }, [searchEmail, axiosSecure]);

  const handleRoleChange = (id, newRole) => {
    axiosSecure
      .patch(`/users/${id}/role`, { role: newRole })
      .then((res) => {
        console.log(res.data);
        const updatedUsers = users.map((user) =>
          user._id === id ? { ...user, role: newRole } : user
        );
        setUsers(updatedUsers);
      })
      .catch((err) => {
        console.error("Error updating user role:", err);
      });
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Manage Users</h2>

      <input
        type="text"
        placeholder="Search by email"
        className="p-2 border rounded w-full mb-4"
        value={searchEmail}
        onChange={(e) => setSearchEmail(e.target.value)}
      />

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {!loading && users.length === 0 && searchEmail && (
        <p className="text-gray-500">No users found.</p>
      )}

      {!loading && users.length > 0 && (
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-2 border">#</th>
                <th className="p-2 border">Email</th>
                <th className="p-2 border">Role</th>
                <th className="p-2 border">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, idx) => (
                <tr key={user._id}>
                  <td className="p-2 border">{idx + 1}</td>
                  <td className="p-2 border">{user.email}</td>
                  <td className="p-2 border capitalize">{user.role}</td>
                  <td className="p-2 border space-x-2">
                    {user.role !== "admin" ? (
                      <button
                        onClick={() => handleRoleChange(user._id, "admin")}
                        className="px-3 py-1 bg-green-500 text-white rounded"
                      >
                        Make Admin
                      </button>
                    ) : (
                      <button
                        onClick={() => handleRoleChange(user._id, "user")}
                        className="px-3 py-1 bg-red-500 text-white rounded"
                      >
                        Remove Admin
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ManageUsers;
