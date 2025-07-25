import React, { useContext } from 'react';
import { Navigate, NavLink, useLocation, useNavigate } from 'react-router';
import { valueContext } from '../Rootlayout';

const Navbar = () => {
    const navigate=useNavigate()
    const {pathname}=useLocation()

    const {handlelogout,currentUser}=useContext(valueContext)
     
    
     
    return (
        <>
         <div className="navbar nav flex justify-between bg-base-100  shadow-sm">
  <div className="flex">
    <a className="font-bold text-pink-700 text-sm md:text-xl">SocialSphere</a>
   
  </div>
    <NavLink className={({ isActive }) =>
                  isActive ? 'text-indigo-600  text-[10px] md:text-xl font-bold' : 'font-bold  text-[10px] md:text-xl'
                }
 to={'/'}>Home</NavLink>

  
  <button onClick={()=>navigate('/register')} className={` ${currentUser?`hidden`:``} btn btn-xs sm:btn-sm ${pathname==="/register"?"text-indigo-600":""}`}>Register</button>
  <div className="flex gap-6 items-center ">
    
          
   
     <div className=" flex gap-1 md:gap-6 items-center ">
        {
            currentUser?<p>{currentUser.displayName}</p>:''
        }
    {
        currentUser?<div onClick={() =>navigate('/profile') } tabIndex={0} role="button"  className="btn btn-ghost  btn-circle avatar tooltip tooltip-right"
        data-tip={currentUser.displayName || 'No name set'}
        >
        
        <div className="w-10 rounded-full">
             
        <img src={currentUser.photoURL}/>
        </div>
      </div>:''
    }
    
  </div>
   
  </div>
  {/* {currentUser ? (
         <button
         onClick={() => {
        //    handlelogout();
            <Navigate to={'/login'}></Navigate>
         }}
         className="btn btn-sm"
       >
         Logout
       </button>
        ) : (
         
        )}
  */}
   {/* <button onClick={handlelogout} className="btn btn-sm">Logout</button> */}
   <button 
  onClick={currentUser ? handlelogout : () => navigate('/login')} 
  className={`btn btn-xs sm:btn-sm ${pathname === "/login" ? "text-indigo-600" : ""}`}
>
  {currentUser ? "Logout" : "Login"}
</button>

 
<NavLink className={({ isActive }) =>
                  isActive ? 'text-indigo-600 text-sm md:text-x font-bold':'text-red-600 text-sm md:text-x font-bold'
                }
 to={'/extra'}>About us</NavLink>
 

</div>
       
        </>
    );
};

export default Navbar;