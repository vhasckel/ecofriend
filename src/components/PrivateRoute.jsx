// PrivateRoute.jsx
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("authToken") || false
  );

  // Atualizar o estado quando `localStorage` muda
  useEffect(() => {
    const handleStorageChange = () => {
      const auth = JSON.parse(localStorage.getItem("authToken"));
      setIsAuthenticated(auth);
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
