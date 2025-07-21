import React from "react";
import useAuth from "../../hooks/useAuth";

const MyProfile = () => {
  const { user } = useAuth();

  if (!user) {
    return <div className="text-center mt-10 text-lg font-semibold">Loading user info...</div>;
  }

  return (
    <div className="max-w-md mx-auto p-6 mt-10 bg-white shadow-lg rounded-lg">
      <div className="flex flex-col items-center space-y-4">
        <img
          src={user.photoURL}
          alt="User"
          className="w-24 h-24 rounded-full object-cover shadow-md"
        />
        <h2 className="text-2xl font-bold">{user.displayName}</h2>
        <p className="text-gray-600">{user.email}</p>
      </div>
    </div>
  );
};

export default MyProfile;
