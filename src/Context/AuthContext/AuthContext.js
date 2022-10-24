import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../../firebase/firebase/firebase.init';

const auth = getAuth(app)

export const UseContext = createContext() 
const AuthContext = ({children}) => {
    const [user, setUser] = useState(null)

    const createUser = (email,password)=>{
       return createUserWithEmailAndPassword(auth,email,password)
    }
    const logInUser=(email,password)=>{
       return signInWithEmailAndPassword(auth,email,password)
    }
     const logOutUser =()=>{
      return  signOut(auth)
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser=>{
             setUser(currentUser)
            
        })
        return () =>{unsubscribe()} 
    },[])

    const userInfo = {user,createUser,logInUser,logOutUser}
    return (
        <UseContext.Provider value={userInfo}>
            {children}
        </UseContext.Provider>
    );
};

export default AuthContext;