import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token"));

  useEffect(() => {
    if (token) {
      // Decode token để lấy thông tin user
      const payload = JSON.parse(atob(token.split(".")[1]));
      setUser({
        id: payload[
          "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"
        ],
        email:
          payload[
            "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress"
          ],
        role: payload[
          "http://schemas.microsoft.com/ws/2008/06/identity/claims/role"
        ],
      });
    }
  }, [token]);

  const loginUser = (newToken) => {
    localStorage.setItem("token", newToken);
    setToken(newToken);
  };

  const logoutUser = () => {
    localStorage.removeItem("token");
    setToken(null);
    setUser(null);
  };

  const isAdmin = () => user?.role === "Admin";
  const isLoggedIn = () => !!token;

  return (
    <AuthContext.Provider
      value={{ user, token, loginUser, logoutUser, isAdmin, isLoggedIn }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
