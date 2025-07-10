import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContexts";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../firebase.config";


const AuthProvider = ({ children }) => {
    const provider = new GoogleAuthProvider();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) =>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email, password);
  }

  const login = (email, password)=> {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  }

  const googleSignIn = () =>{
    setLoading(true);
    return signInWithPopup(auth, provider);
  }

  const logOut = ()=>{
    setLoading(true);
    return signOut(auth);
  }

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
        setLoading(false);
    });
    return()=>unSubscribe();
  },[])

  const authData = {
    user,
    setUser,
    loading,
    createUser,
    login,
    googleSignIn,
    logOut

  };
  return (
    <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
