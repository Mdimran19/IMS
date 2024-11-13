import React, { useContext, useState } from 'react'
import { Context } from '../main';
import { Link,Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

const Signin = () => {
  const {isAuthenticated, setIsAuthenticated} = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigateTo = useNavigate();

const handleLogin = async(e) =>{
  e.preventDefault();
  try {
  const response = await axios.post("http://localhost:8000/api/v1/user/login",
      { email, password,  role: "Student"},
      {withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    
      toast.success(response.data.message);
      setIsAuthenticated(true);
      navigateTo("/");
    
  } catch (error) {
    if (error.response && error.response.data) {
      // Display the error message from the server response
      toast.error(error.response.data.message);
    } else {
      // Fallback error message for unexpected issues
      toast.error("An error occurred. Please try again.");
    }
  }
}
if(isAuthenticated){
  return <Navigate to={"/"} />
}
  return (
    <div>
       <h2 className='text-center'>SIGN-IN</h2>
       <p className='text-center'>Lorem ipsum dolor sit amet, consectetur 
        adipisicing elit. Cupiditate
        
         distinctio fugit tenetur perspiciatis enim 
         totam ab corrupti veniam illum id.</p>
         <form onSubmit={handleLogin} className='items-center flex flex-col gap-y-6 pt-5'>
         <input type='email'placeholder='Email' value={email} onChange={(e)=> setEmail(e.target.value)} />
         <input type='password'placeholder='Password' value={password} onChange={(e)=> setPassword(e.target.value)} />

         <div>
         <p className='animate-bounce pl-5 ...'>Not register?</p>
         <Link className='pl-5 ' to={"/register"} >Register Now </Link>
         </div>
         <div>
          <button className='bg-green-400 rounded-xl px-5' type='submit'>Login</button>
         </div>
         </form>
    </div>
  )
}

export default Signin;