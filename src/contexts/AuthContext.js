import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    function getUser() {
      const currentUser = localStorage.getItem("user");

      if (currentUser) {
        setUser(currentUser);
      }
    }
    getUser();
  }, []);

  const login = async (username, password) => {
    setIsLoading(true);

    try {
      const usersList = await axios.get(
        "https://api.airtable.com/v0/appjWdL7YgpxIxCKA/credenitals?maxRecords=3&view=Grid%20view",
        {
          headers: {
            Authorization: "Bearer keyfXgn8PL6pB3x32",
          },
        }
      );

      //check for user existence:
      const user = usersList.data.records.find(
        (user) => user.fields.username === username
      );

      if (!user) {
        throw new Error("User does not exist");
      }

      //check if the password is correct:
      if (user.fields.password !== password) {
        throw new Error("Password is incorrect");
      }

      localStorage.setItem("user", username);

      setUser(user.fields.username);
    } catch (err) {
      console.log(err.message);
    }

    setIsLoading(false);
  };

  return (
    <AuthContext.Provider value={{ user, login, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};
