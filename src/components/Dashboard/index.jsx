import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar";

const Dashboard = () => {
  return (
    <div className="grid grid-cols-6 min-h-screen w-screen">
      {/* Sidebar */}
      <Sidebar />
      {/* Main content */}
      <div className="bg-gray-700 col-span-5">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
