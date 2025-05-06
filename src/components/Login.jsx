import React from 'react';
import {  signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase/firebase.config';
import { useNavigate } from 'react-router';
const Login = () => {
    const navigate=useNavigate()
    const handleLogin=(e)=>{
        e.preventDefault()

       const password= e.target.password.value
       const email=e.target.email.value
  console.log(email,password)
       signInWithEmailAndPassword(auth, email, password)
       .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        console.log(user)
        // ...
      })
      .catch((error) => {
        // const errorCode = error.code;
        // const errorMessage = error.message;
        // ..
      });
    }
    return (
        <form onSubmit={handleLogin} class=" bg-base-200 border-base-300 mx-auto mt-24 rounded-box w-xs border p-4">
   

  <label class="label">Email</label>
  <input type="email" class="input" name='email' placeholder="Email" />

  <label class="label">Password</label>
  <input type="password" class="input" name='password' placeholder="Password" />

 <div className='flex justify-between items-center  gap-3'>
 <button type='submit' class="btn btn-neutral mt-4"> Login</button>
 <p className='ml-2 text-yellow-400'>
  If you do not have an account,then{" "}
  <span
    onClick={() => navigate('/register')}
    className='text-blue-800 font-semibold cursor-pointer hover:underline'
  >
    register
  </span>
</p>
 
  
 </div>
</form>
    );
};

export default Login;