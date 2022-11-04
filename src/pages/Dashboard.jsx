import { Button } from "@mui/material";
import { useContext } from "react";
import Sidebar from "../components/Sidebar";
import { AuthContext } from "../contexts/AuthContext";

const Dashboard = () => {
  const { logout } = useContext(AuthContext);
  return (
    <div className="grid grid-cols-6 min-h-screen w-screen">
      {/*<Button onClick={logout}>Logout</Button>*/}
      {/* Sidebar */}
      <Sidebar />
      {/* Main content */}
      <div className="bg-gray-700 col-span-5"></div>
    </div>
  );
};

export default Dashboard;
