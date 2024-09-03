import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState({
    user: null,
    token: null,
  });

  const login = (userData, token) => {
    setAuthState({
      user: userData,
      token,
    });
    localStorage.setItem("authToken", token);
  };

  const logout = () => {
    setAuthState({
      user: null,
      token: null,
    });
    localStorage.removeItem("authToken");
  };

  const isAuthenticated = () => !!authState.token;

  return (
    <AuthContext.Provider value={{ authState, login, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
