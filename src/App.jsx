import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./pages/Login/Login";
import Dashboard from "./pages/Dashboard/Dashboard";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const authenticateUser = (username, password) => {
    if (username === password) {
      setIsAuthenticated(true);
      return true;
    }
    return false;
  };

  const logoutUser = () => {
    setIsAuthenticated(false);
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Login authenticateUser={authenticateUser} />}
        />
        <Route
          path="/dashboard"
          element={
            isAuthenticated ? (
              <Dashboard logoutUser={logoutUser} />
            ) : (
              <Navigate to="/" />
            )
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
