import { useContext } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { AuthContext } from "./contexts/AuthContext";
import Login from "./pages/login";
import Dashboard from "./components/Dashboard";
import ErrorPage from "./pages/error-page";
import Home from "./components/Dashboard/Home";
import Bookmarks from "./components/Dashboard/Bookmarks";

const App = () => {
  const { user } = useContext(AuthContext);

  return (
    <Routes>
      <Route
        path="/"
        element={user ? <Navigate to="/dashboard" /> : <Navigate to="/login" />}
      />
      <Route
        path="/login"
        element={!user ? <Login /> : <Navigate to="/dashboard/home" />}
      />
      <Route
        path="/dashboard"
        element={user ? <Dashboard /> : <Navigate to="/login" />}
      >
        <Route path="home" element={<Home />} />
        <Route path="bookmarks" element={<Bookmarks />} />
      </Route>
      <Route
        path="*"
        element={!user ? <ErrorPage /> : <Navigate to="/dashboard/home" />}
      />
    </Routes>
  );
};

export default App;
