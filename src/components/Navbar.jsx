import React, { useContext } from 'react';
import { Navigate, NavLink, useLocation, useNavigate } from 'react-router';
import { valueContext } from '../Rootlayout';

const Navbar = () => {
    const navigate=useNavigate()
    const {pathname}=useLocation()

    const {handlelogout,currentUser,handlelogin,pic,loading}=useContext(valueContext)
    console.log(currentUser)
    
     
    return (
        <>
         <div className="navbar flex justify-between bg-base-100 border shadow-sm">
  <div className="flex">
    <a className="btn btn-ghost text-xl">Events</a>
   
  </div>
    <NavLink className={({ isActive }) =>
                  isActive ? 'text-indigo-600' : ''
                }
 to={'/'}>Home</NavLink>
  {/* <button onClick={ currentUser? ()=>navigate('/login'):{handlelogout()}} className={`btn btn-xs sm:btn-sm ${pathname==="/login"?"text-indigo-600":""}`}>{currentUser?"logout":"login"}</button> */}

  
  <button onClick={()=>navigate('/register')} className={` ${currentUser?`hidden`:``} btn btn-xs sm:btn-sm ${pathname==="/register"?"text-indigo-600":""}`}>Register</button>
  <div className="flex gap-6 items-center ">
    <div className="dropdown dropdown-end">
       
               {
                currentUser?<p>{currentUser.displayName}</p>:''
              }
    </div>
          
   
     <div className=" border border-red-600 ">
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
                  isActive ? 'text-indigo-600' : ''
                }
 to={'/extra'}>About us</NavLink>
</div>
       
        </>
    );
};

export default Navbar;