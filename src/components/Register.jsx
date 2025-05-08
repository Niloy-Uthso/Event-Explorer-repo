import React, { useContext } from 'react';
import { useNavigate } from 'react-router';
 
import { valueContext } from '../Rootlayout';
import { updateProfile } from 'firebase/auth';
import { auth } from '../firebase/firebase.config';

const Register = () => {
    const {handleregister, forceSetCurrentUser}=useContext(valueContext)
    
    const navigate=useNavigate()
    const handleRegister=(e)=>{
        e.preventDefault()

       const password= e.target.password.value
       const email=e.target.email.value
       const displayName= e.target.displayName.value;
       const photoURL=e.target.photoURL.value
       console.log( photoURL)
       const regex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
        
if (!regex.test(password)) {
  alert("Password must be at least 6 characters and contain both uppercase and lowercase letters.");
  return;
}
       
       handleregister(email,password,photoURL)
       .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        // console.log(user)
        // ...
        updateProfile(user, {
            displayName: displayName,
            photoURL:photoURL
          }).then(() => {
            console.log("Profile updated");
            forceSetCurrentUser(auth.currentUser);
            // Optionally navigate to another page
            // navigate('/somewhere')
          }).catch((error) => {
            console.error("Profile update failed:", error);
          });
      })
      .catch((error) => {
        // const errorCode = error.code;
        // const errorMessage = error.message;
        // ..
      });
      
    }
    return (
        <form onSubmit={handleRegister} class=" bg-base-200 border-base-300 mx-auto mt-24 rounded-box w-xs border p-4">
   

  <label class="label">Email</label>
  <input type="email" class="input" name='email' placeholder="Email" />

  <label class="label">Password</label>
  <input type="text" class="input" name='password' placeholder="Password" />
  <label className="label">Photo URL</label>
  <input  type="text"  class="input"  name='displayName'  placeholder="Enter photo URL"/>
  <label className="label">Photo URL</label>
  <input  type="url"  class="input"  name='photoURL'  placeholder="Enter photo URL"/>

 <div className='flex justify-between items-center  gap-3'>
 <button type='submit' class="btn btn-neutral mt-4"> Register</button>
 <p className='ml-2 text-yellow-400'>
  If you already have an account, then{" "}
  <span
    onClick={() => navigate('/login')}
    className='text-blue-800 font-semibold cursor-pointer hover:underline'
  >
    login
  </span>
</p>
 
  
 </div>
</form>
    );
};

export default Register;