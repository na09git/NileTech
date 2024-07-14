// context/authContext.tsx
import { createContext, useContext, useEffect, useState } from "react";
import { useSession } from "next-auth/react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  // const { data: session, status } = useSession();
  const { data: session, status, update } = useSession();

  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    if (status === "authenticated" && session) {
      setUser(session.user);
    } else {
      setUser(null);
    }
  }, [status, session]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

// // context/authContext.tsx
// import { createContext, useContext, useEffect, useState } from "react";
// import { useSession } from "next-auth/react";

// const AuthContext = createContext(null);

// export const AuthProvider = ({ children }) => {
//   const { data: session, status } = useSession();

//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     if (status === "authenticated" && session) {
//       setUser(session.user);
//     } else {
//       setUser(null);
//     }
//   }, [status, session]);

//   if (status === "loading") {
//     return <div>Loading...</div>;
//   }

//   return (
//     <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
//   );
// };

// export const useAuth = () => useContext(AuthContext);

// // context/authContext.tsx
// import { createContext, useContext, useState, useEffect } from "react";
// import { PrismaClient } from "@prisma/client";

// const prisma = new PrismaClient();
// const AuthContext = createContext(null);

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchUser = async () => {
//       try {
//         // Replace with real authentication logic
//         const email = "user@example.com"; // This should come from your auth provider
//         const userData = await prisma.user.findUnique({
//           where: { email },
//         });
//         setUser(userData);
//       } catch (error) {
//         console.error("Error fetching user:", error);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchUser();
//   }, []);

//   if (loading) {
//     return <div>Loadings...</div>; // or a custom loading component
//   }

//   return (
//     <AuthContext.Provider value={{ user, setUser }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => useContext(AuthContext);
