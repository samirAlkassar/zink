"use client";

import { useContext, createContext, useState, useEffect } from "react";
import { auth } from "../../lib/firebase/firebase";
import { onAuthStateChanged, User } from "firebase/auth";

interface AuthContextType {
  currentUser: User | null;
  loading: boolean;
  isSigningIn: boolean;
  setIsSigningIn: React.Dispatch<React.SetStateAction<boolean>>;
  setCurrentUser: React.Dispatch<React.SetStateAction<User | null>>;
}


const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};


export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [isSigningIn, setIsSigningIn] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("isLoggedIn");
    if (stored === "true") {
      setIsSigningIn(true);
    }
  }, []);



  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return unsubscribe
  }, []);

  // const initializeUser = async (user: User | null) => {
  //     if (user) {
  //       setCurrentUser({ ...user });
  //       setIsSigningIn(true);
  //     } else {
  //       setCurrentUser(null);
  //       setIsSigningIn(false);
  //     }
  //     setLoading(false);
  // }

  const value = { currentUser, loading, setCurrentUser,isSigningIn, setIsSigningIn };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
