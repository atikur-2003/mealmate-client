import { useEffect, useState } from "react";
import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Loading from "../../components/Loading";
import userLogo from "../../assets/images/profile.png";
import profit from "../../assets/images/profit-up.png";
import meals from "../../assets/images/meals.png";

const AdminOverview = () => {
  const [stats, setStats] = useState(null);
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    const getStats = async () => {
      try {
        const { data } = await axiosSecure.get("/admin/stats");
        setStats(data);
      } catch (err) {
        console.error("Failed to load stats:", err);
      }
    };

    getStats();
  }, [axiosSecure]);

  if (!stats) return <Loading></Loading>;

  const pieData = [
    { name: "Users", value: stats.totalUsers },
    { name: "Meals", value: stats.totalMeals },
    { name: "Requests", value: stats.activeRequests },
  ];

  const barData = [
  { name: "Stats", Revenue: stats.totalRevenue, Meals: stats.totalMeals },
];


  return (
    <div className="p-3 md:px-7">
      {/* Stats Cards (simple divs) */}
      <div className="flex flex-col md:flex-row gap-3 md:gap-10 mb-10">
        <div className="bg-base-200 flex gap-5 md:flex-col lg:flex-row shadow-md rounded-xl p-4">
          <img src={meals} className="w-16" alt="" />
          <div>
            <h2 className="text-lg font-bold">Total Meals</h2>
            <p className="text-xl">{stats.totalMeals}</p>
          </div>
        </div>

        <div className="bg-base-200 flex gap-5 md:flex-col lg:flex-row shadow-md rounded-xl p-4">
          <img src={userLogo} className="w-16" alt="" />
          <div>
            <h2 className="text-lg font-bold">Total Users</h2>
            <p className="text-xl">{stats.totalUsers}</p>
          </div>
        </div>

        <div className="bg-base-200 flex gap-5 md:gap-3 md:flex-col  lg:flex-row shadow-md rounded-xl p-4">
          <img src={profit} className="w-16" alt="" />
          <div>
            <h2 className="text-lg font-bold">Revenue</h2>
            <p className="text-xl">$ {stats.totalRevenue}</p>
          </div>
        </div>
      </div>

      {/* Charts */}
      <div className="bg-base-200 shadow-md rounded-xl p-4 col-span-2 mb-10">
        <h2 className="text-lg font-semibold mb-2">System Distribution</h2>
        <ResponsiveContainer width="100%" height={250}>
          <PieChart>
            <Pie
              data={pieData}
              dataKey="value"
              nameKey="name"
              fill="#8884d8"
              label
            >
              {pieData.map((_, index) => (
                <Cell
                  key={index}
                  fill={["#8884d8", "#82ca9d", "#ffc658"][index % 3]}
                />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="bg-base-200 shadow-md rounded-xl p-4 col-span-2">
        <h2 className="text-lg font-semibold mb-2">Revenue & Meals</h2>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={barData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value">
              {barData.map((entry, index) => {
                let fillColor;
                if (entry.name === "Revenue") fillColor = "red";
                if (entry.name === "Meals") fillColor = "green";
                return <Cell key={`cell-${index}`} fill={fillColor} />;
              })}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AdminOverview;
