import { TextField, Typography } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import LoginIcon from "@mui/icons-material/Login";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Navigate } from "react-router-dom";

const Login = () => {
  const { isLoading, login, user } = useContext(AuthContext);
  const [userCreds, setUserCreds] = useState({
    username: "",
    password: "",
  });

  useEffect(() => {
    if (user) {
      <Navigate to="/dashboard" />;
    }
  }, []);

  const handleChange = (e) => {
    setUserCreds((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(userCreds.username, userCreds.password);
  };

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-gray-50">
      <form
        onSubmit={handleSubmit}
        className="py-5 px-10 flex items-start justify-start flex-col space-y-3 w-[35%] rounded-md shadow bg-white"
      >
        <Typography variant="h6">Sign in to you account</Typography>
        <TextField
          value={userCreds.username}
          onChange={(e) => handleChange(e)}
          type="text"
          variant="outlined"
          label="Username"
          required
          fullWidth
          name="username"
        />
        <TextField
          value={userCreds.password}
          onChange={(e) => handleChange(e)}
          variant="outlined"
          label="Password"
          required
          fullWidth
          type="password"
          name="password"
        />
        <LoadingButton
          loading={isLoading}
          loadingPosition="start"
          variant="contained"
          type="submit"
          startIcon={<LoginIcon />}
        >
          Login
        </LoadingButton>
      </form>
    </div>
  );
};

export default Login;
