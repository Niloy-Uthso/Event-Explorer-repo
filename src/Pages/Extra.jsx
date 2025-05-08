 import React, { useContext } from 'react';
import { valueContext } from '../Rootlayout';
import { Navigate } from 'react-router';
 
 
 const Extra = () => {
    const {currentUser,loading}=useContext(valueContext)
  
    
    
     
    if(loading)
        return <p>Loading,,,,,</p>
    if(!currentUser||!currentUser.email){
         
        return <Navigate to={'/login'}></Navigate>
    }
    
    return (
        <div className="p-6 max-w-2xl mt-24 mx-auto bg-base-200 rounded-lg shadow">
        <h1 className="text-3xl font-bold mb-4 text-center text-indigo-600">Welcome to SocialSphere</h1>
        
        <p className="mb-3 text-gray-700">
          SocialSphere is your hub for discovering and sharing amazing social events happening around you. Whether it's a community meetup, a music festival, or a casual hangout — we've got you covered.
        </p>
  
        <p className="mb-3 text-gray-700">
          Our platform brings together people with shared interests and helps you stay updated on events you'll love. Join, host, or explore — all in one place.
        </p>
  
        <p className="text-gray-700">
          Ready to connect, celebrate, and create unforgettable memories? Dive into the world of events with SocialSphere today!!!
        </p>
      </div>
    );
 };
 
 export default Extra;