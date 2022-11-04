import { TextField, Typography } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import LoginIcon from "@mui/icons-material/Login";
import { useState } from "react";

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
  };

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-gray-50">
      <form
        onSubmit={handleSubmit}
        className="py-5 px-10 flex items-start justify-start flex-col space-y-3 w-[25%] rounded-md shadow bg-white"
      >
        <Typography variant="h6">Sign in to you account</Typography>
        <TextField
          type="text"
          variant="outlined"
          label="Username"
          required
          fullWidth
        />
        <TextField
          variant="outlined"
          label="Password"
          required
          fullWidth
          type="password"
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
