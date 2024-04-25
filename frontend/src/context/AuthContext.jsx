import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authToken, setAuthToken] = useState(localStorage.getItem("jwtToken") || null);

  const login = (token) => {
    setAuthToken(token);
    localStorage.setItem("jwtToken", token);
  };

  const logout = () => {
    setAuthToken(null);
    localStorage.removeItem("jwtToken");
  };

  const headers = authToken ? { "Content-Type": "application/json", "Authorization": authToken } : {};

  return (
    <AuthContext.Provider value={{ authToken, login, logout, headers }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);





// import React, { createContext, useContext, useState } from "react";

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [authToken, setAuthToken] = useState(localStorage.getItem("jwtToken") || null);

//   const login = (token) => {
//     setAuthToken(token);
//     localStorage.setItem("jwtToken", token);
//   };

//   const logout = () => {
//     setAuthToken(null);
//     localStorage.removeItem("jwtToken");
//   };

//   const headers = authToken ? { "Content-Type": "application/json", "Authorization": authToken } : {};

//   return (
//     <AuthContext.Provider value={{ authToken, login, logout, headers }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => useContext(AuthContext);




// import React, { createContext, useState, useContext } from 'react';

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//     const [isLoggedIn, setIsLoggedIn] = useState(false);

//     const login = () => {
//         // Implement your login logic here
//         setIsLoggedIn(true);
//     };

//     const logout = () => {
//         // Implement your logout logic here
//         setIsLoggedIn(false);
//     };

//     return (
//         <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
//             {children}
//         </AuthContext.Provider>
//     );
// };

// export const useAuth = () => useContext(AuthContext);

// import React, { createContext, useContext, useState } from "react";

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [authToken, setAuthToken] = useState(localStorage.getItem("jwtToken"));

//   const login = (token) => {
//     setAuthToken(token);
//     localStorage.setItem("jwtToken", token);
//   };

//   const logout = () => {
//     setAuthToken(null);
//     localStorage.removeItem("jwtToken");
//   };

//   const headers = { "content-Type": "application/json" , "Authorization" : authToken }

//   return (
//     <AuthContext.Provider value={{ authToken, login, logout, headers }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => useContext(AuthContext);
