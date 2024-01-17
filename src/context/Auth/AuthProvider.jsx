import React, { useEffect, useState } from "react";
import { AuthContext } from "./context";
import { SERVER_URL } from "../../services";
import { isEmpty } from "lodash";
import axios from "axios";

export default function AuthProvider({ children }) {
  const [user, setUser] = useState({});
  const [isLoggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    checkUserLoggedIn();
  }, []);

  const checkUserLoggedIn = async () => {
    try {
      const token = localStorage.getItem("token");

      if (!isEmpty(token)) {
        const { data, status } = await axios.get(
          `${SERVER_URL}/admins/me`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (status === 200) {
          setLoggedIn(true)
          setUser(data);
        } else {
          setLoggedIn(false);
          setUser(null);
        }
      }
    } catch (err) {
      setUser(null);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        setLoggedIn,
        user,
        setUser
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
