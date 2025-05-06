import React from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router';

const Navbar = () => {
    const navigate=useNavigate()
    const {pathname}=useLocation()
    
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
  <button onClick={()=>navigate('/login')} className={`btn btn-xs sm:btn-sm ${pathname==="/login"?"text-indigo-600":""}`}>Log in</button>
  <button onClick={()=>navigate('/register')} className={`btn btn-xs sm:btn-sm ${pathname==="/register"?"text-indigo-600":""}`}>Register</button>
  <div className="flex-none border">
    <div className="dropdown dropdown-end">
      {/* <div tabIndex={0} role="" className=""> */}
        {/* <div className="indicator"> */}
        
        {/* </div> */}
      {/* </div> */}
      
    </div>
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
      </div>
      
    </div>
  </div>
</div>
       
        </>
    );
};

export default Navbar;