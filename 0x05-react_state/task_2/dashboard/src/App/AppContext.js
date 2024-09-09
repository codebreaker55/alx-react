import React from "react";

// Default user object
export const defaultUser = {
  email: "",
  password: "",
  isLoggedIn: true,
};

// Function to log out
export function logOut() {
  // Implement logout logic here
}

// Context creation
export const AppContext = React.createContext({
  user: defaultUser,
  logOut,
});

