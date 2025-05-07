import React, { useContext } from 'react';
import { Navigate, NavLink, useLocation, useNavigate } from 'react-router';
import { valueContext } from '../Rootlayout';

const Navbar = () => {
    const navigate=useNavigate()
    const {pathname}=useLocation()

    const {handlelogout,currentUser,handlelogin,pic,loading}=useContext(valueContext)
    console.log(pic)
     
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
  <div className="flex-none border">
    <div className="dropdown dropdown-end">
      
      
    </div>
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
        <img
  alt="Tailwind CSS Navbar component"
  src={currentUser || pic
    ?  pic
    : "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"}
/>
        </div>
      </div>
      
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
</div>
       
        </>
    );
};

export default Navbar;