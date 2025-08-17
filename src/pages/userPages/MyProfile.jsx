import React from "react";
import useAuth from "../../hooks/useAuth";
import Loading from "../../components/Loading";

const MyProfile = () => {
  const { user } = useAuth();

  if (!user) {
    return <Loading></Loading>;
  }

  return (
    <div className="max-w-md mx-auto p-6 mt-10 shadow-lg rounded-lg">
      <div className="flex flex-col items-center space-y-4">
        <img
          src={user.photoURL}
          alt="User"
          className="w-24 h-24 rounded-full object-cover shadow-md"
        />
        <h2 className="text-2xl font-bold">{user.displayName}</h2>
        <p>{user.email}</p>
      </div>
    </div>
  );
};

export default MyProfile;
