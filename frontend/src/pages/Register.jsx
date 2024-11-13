import  { useContext, useState } from 'react'
import React from 'react'
import { Context } from '../main';
import {Link, Navigate, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';
const Register = () => {
  const {isAuthenticated, setIsAuthenticated} = useContext(Context);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [studentId, setStudentId] = useState("");
  const [session, setSession] = useState("");
  const [password, setPassword] = useState("");
  const [department, setDepartment] = useState("");

  const navigateTo = useNavigate();

  const handleRegister =async (e) =>{
    e.preventDefault();
    if (!firstName || !lastName || !email || !phone || !studentId || !session || !department || !password) {
      toast.error("All fields are required");
      return;
    }
    try {
      const response = await axios.post("http://localhost:8000/api/v1/user/register",
          {firstName,lastName, email,phone,studentId,session,department, password, role: "Student"},
          {withCredentials: true,
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        
          toast.success(response.data.message);
          setIsAuthenticated(true);
          navigateTo("/signin");
        
      } catch (error) {
        if (error.response && error.response.data) {
      
          toast.error(error.response.data.message);
        } else {
        
          toast.error("An error occurred. Please try again.");
        }
      }
    
  } 

if(isAuthenticated){
  return <Navigate to={"/"} />
}
  return (
    <div>
       <h1 className='text-center font-bold'>SIGN UP</h1>
       <h4 className='text-center '>Please continue Here!</h4>
       <form className='p-6 flex-col w-auto h-auto items-center gap-x-7 gap-y-9 ' onSubmit={handleRegister}>
          <div className='items-center pt-5 pb-5 justify-between' >
          <input className='w-w1' type='text'placeholder='First Name' value={firstName} onChange={(e)=> setFirstName(e.target.value)} />
          <input className='w-w1' type='text'placeholder='Last Name' value={lastName} onChange={(e)=> setLastName(e.target.value)} />
          </div>
          <div className='items-center pb-5'>
          <input className='w-w1' type='email'placeholder='Email' value={email} onChange={(e)=> setEmail(e.target.value)} />
          <input className='w-w1' type='text'placeholder='Phone Number' value={phone} onChange={(e)=> setPhone(e.target.value)} />
          </div>
          <div className='items-center pb-5'>

          <input className='w-w1' type='text'placeholder='StudentId' value={studentId} onChange={(e)=> setStudentId(e.target.value)} />
          <input className='w-w1' type= "text" placeholder='session' value={session} onChange={(e)=> setSession(e.target.value)} />
          </div>
          <div className='pb-5 items-center'>
          <select className='w-w1' value={department} onChange={(e)=> setDepartment(e.target.value)} >
            <option className='bg-green-300' value="">Select Department</option>
            <option className='bg-red-500' value="CSE">CSE</option>
            <option className='bg-yellow-500' value="ECE">ECE</option>
            <option className='bg-yellow-900' value="BBA">BBA</option>
            <option className='bg-lime-800' value="AMT">AMT</option>
            <option className='bg-indigo-600' value="KMT">KMT</option>
            <option className='bg-purple-600' value="FDT">FDT</option>
          </select>
          <input className='w-w1' type='password'placeholder='Password' value={password} onChange={(e)=> setPassword(e.target.value)} />
          </div>
          <div className="pl-5 animate-bounce w-6 h-6 ...">
          Already Registered!
         </div>
         <div className='items-center flex justify-between px-10 pt-8'>
         <button className='bg-orange-700 rounded-tr-xl rounded-bl-xl px-5 py-2 items-center text-center'>
         <Link className='items-center' to={"/signin"} >SIGN IN</Link>
         </button>
          <button className='bg-green-600 rounded-tr-xl rounded-bl-xl px-5 py-2 items-center' type='submit'>Register</button>
         </div>
       </form>

    </div>
  )
}

export default Register;