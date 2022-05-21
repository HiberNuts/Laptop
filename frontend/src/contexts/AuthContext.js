import React, { createContext, useState } from "react";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "../utils/firebase-config";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handlePassword = (password) => {
    setPassword(password);
  };
  const handleEmail = (email) => {
    setEmail(email);
  };

  const handleAuthAction = async (id) => {
    const authentication = getAuth();
    if (id === 1) {
      try {
        const response = await signInWithEmailAndPassword(authentication, email, password);
        sessionStorage.setItem("Auth Token", response._tokenResponse.refreshToken);

        console.log(response);
      } catch (error) {
        if (error.code === "auth/wrong-password") {
          toast.error("Please check the Password");
        }
        if (error.code === "auth/user-not-found") {
          toast.error("Please check the Email");
        }
      }
    }
    if (id === 2) {
      try {
        const response = await createUserWithEmailAndPassword(authentication, email, password);
        sessionStorage.setItem("Auth Token", response._tokenResponse.refreshToken);

        console.log(response);
      } catch (error) {
        if (error.code === "auth/email-already-in-use") {
          toast.error("Email Already in Use");
        }
      }
    }
  };

  return (
    <AuthContext.Provider value={{ handleAuthAction, handlePassword, handleEmail }}>{children}</AuthContext.Provider>
  );
};
