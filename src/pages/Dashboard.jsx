import { Button } from "@mui/material";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

const Dashboard = () => {
  const { logout } = useContext(AuthContext);
  return (
    <div>
      <Button onClick={logout}>Logout</Button>
    </div>
  );
};

export default Dashboard;
