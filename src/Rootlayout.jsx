import React, { createContext, useEffect, useState, } from 'react';
import { Outlet } from 'react-router';
import Navbar from './components/Navbar';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import { auth } from './firebase/firebase.config';

 export const valueContext=createContext()
 

 
const Rootlayout = () => {

    const [currentUser,setCurrentUser]=useState(null)
    
    const [loading,setLoading]=useState(true)
     
    const forceSetCurrentUser = (user) => {
        setCurrentUser({ ...user });
      };
    console.log(currentUser)
    const handlelogin=(email,password)=>{
     
      return  signInWithEmailAndPassword(auth, email, password)
        
 }

  
 const handleregister=(email,password)=>{

  return  createUserWithEmailAndPassword(auth, email, password)
   
 }
      
   
 
 const handlelogout=()=>{
    signOut(auth).then(() => {
        // Sign-out successful.
      }).catch((error) => {
        // An error happened.
      });
 }

const context={
    handlelogin,
    handleregister,
    loading,
    currentUser,
    handlelogout,
    forceSetCurrentUser
    
}
//   console.log()
useEffect(()=>{
    
     const unsubscribe=   onAuthStateChanged(auth, (user) => {
          
              
            setCurrentUser(user)
            setLoading(false)
            
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/auth.user
              const uid = user.uid;
              
              // ...
            } else {
              // User is signed out
              // ...
            }
          })

          return()=>{
            unsubscribe()
          }
    
},[]);

    return (
        <div>
            
            
          <valueContext.Provider value={context}>
          <Navbar></Navbar>
          <Outlet></Outlet>
          </valueContext.Provider>
        </div>
    );
};

export default Rootlayout;