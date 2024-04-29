// AuthContext.js

import React, { createContext, useContext, useState, useEffect } from "react";
import backendapi from "../apis/backendapi";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authToken, setAuthToken] = useState(localStorage.getItem("jwtToken") || null);
  const [isStudentTokenValid, setIsStudentTokenValid] = useState(false);
  const [isRectorTokenValid, setIsRectorTokenValid] = useState(false);

  useEffect(() => {
    const checkTokenValidity = async () => {
      if (authToken) {
        const { isValid, userRole } = await validateToken(authToken);
         console.log(isValid);
         console.log(userRole);
        if (userRole === "student") {
          setIsStudentTokenValid(isValid);
         // console.log("student",isValid);
          setIsRectorTokenValid(false);
        } 
        else if (userRole === "rector") {
          setIsRectorTokenValid(isValid);
         // console.log("rector",isValid);
          setIsStudentTokenValid(false);
        }
      }
    };
    checkTokenValidity();
  }, [authToken]);

  const login = (token) => {
    setAuthToken(token);
    localStorage.setItem("jwtToken", token);
  };

  const logout = () => {
    setAuthToken(null);
    localStorage.removeItem("jwtToken");
    setIsStudentTokenValid(false);
    setIsRectorTokenValid(false);
  };

  const headers = authToken ? { "Content-Type": "application/json", "authorization": authToken } : { "Content-Type": "application/json", "authorization": " " };

  return (
    <AuthContext.Provider value={{ authToken, login, logout, headers, isStudentTokenValid, isRectorTokenValid }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

export const validateToken = async (token) => {
  try {
    const response = await backendapi.post("/validToken", { token });
    // Assuming you have an endpoint to validate the token
    //console.log("Token validation successful");
    // console.log(response.data.data);
    // console.log(response.data.decodedToken.user_role);
    return { isValid: response.data.data, userRole: response.data.decodedToken.user_role};
    // Assuming the response contains a boolean indicating token validity and user role
  } catch (error) {
    console.error("Token validation failed:", error);
    return { isValid: false, userRole: null };
  }
};




// AuthContext.js
//INITIALLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL IF FUCKED UP COME TO THIS
// import React, { createContext, useContext, useState, useEffect } from "react";
// import backendapi from "../apis/backendapi";

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [authToken, setAuthToken] = useState(localStorage.getItem("jwtToken") || null);
//   const [isTokenValid, setIsTokenValid] = useState(false);

//   useEffect(() => {
//     const checkTokenValidity = async () => {
//       if (authToken) {
//         const isValid = await validateToken(authToken);
//         setIsTokenValid(isValid.data);
//       }
//     };
//     checkTokenValidity();
//   }, [authToken]);

//   const login = (token) => {
//     setAuthToken(token);
//     localStorage.setItem("jwtToken", token);
//     setIsTokenValid(true);
//   };

//   const logout = () => {
//     setAuthToken(null);
//     localStorage.removeItem("jwtToken");
//     setIsTokenValid(false); // Invalidate token status on logout
//   };

// const headers = authToken ? { "Content-Type": "application/json", "authorization": authToken } : {"Content-Type": "application/json", "authorization": " " };

//   return (
//     <AuthContext.Provider value={{ authToken, login, logout, headers, isTokenValid }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => useContext(AuthContext);

// export const validateToken = async (token) => {
 
//   try {
//     const response = await backendapi.post("/validToken", { token }); 
//   // Assuming you have an endpoint to validate the token
//     console.log("created");
//     return response.data;
//      // Assuming the response contains a boolean indicating token validity
//   } catch (error) {
//     console.error("Token validation failed:", error);
//     console.log("expired");
//     return false;
    
//   }
// };






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
