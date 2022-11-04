import { useContext } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { AuthContext } from "./contexts/AuthContext";
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";
import ErrorPage from "./pages/error-page";

const App = () => {
  const { user } = useContext(AuthContext);

  return (
    <Routes>
      <Route
        path="/login"
        element={!user ? <Login /> : <Navigate to="/dashboard" />}
      />
      <Route
        path="/dashboard"
        element={user ? <Dashboard /> : <Navigate to="/login" />}
      />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default App;
