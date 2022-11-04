import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar";

const Dashboard = () => {
  return (
    <div className="grid grid-cols-6 min-h-screen w-screen">
      <Sidebar />
      <div className="bg-slate-50 col-span-5 p-10">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
