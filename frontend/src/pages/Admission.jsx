import { useContext, useState } from 'react'
import React from 'react'
import { Context } from '../main';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';
const Admission = () => {
  const { isAuthenticated, setIsAuthenticated } = useContext(Context);
  const [fullName, setFullName] = useState("");
  const [fatherName, setFatherName] = useState("");
  const [motherName, setMotherName] = useState("");
  const [sscRoll, setSscRoll] = useState("");
  const [sscReg, setSscReg] = useState("");
  const [sscResult, setSscResult] = useState("");
  const [sscSession, setSscSession] = useState("");
  const [hscRoll, setHscRoll] = useState("");
  const [hscReg, setHscReg] = useState("");
  const [hscResult, setHscResult] = useState("");
  const [hscSession, setHscSession] = useState("");
  const [department, setDepartment] = useState("")

  const navigateTo = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    if (!fullName ||
      !fatherName ||
      !motherName ||
      !sscRoll ||
      !sscReg ||
      !sscResult ||
      !sscSession ||
      !hscRoll ||
      !department ||
      !hscReg ||
      !hscResult ||
      !hscSession) {
      toast.error("All fields are required");
      return;
    }
    try {
      const response = await axios.post("http://localhost:8000/api/v1/admission/admit",
        {
          fullName,
          fatherName,
          motherName,
          sscRoll,
          sscReg,
          sscResult,
          sscSession,
          hscRoll,
          department,
          hscReg,
          hscResult,
          hscSession
        },
        {
          withCredentials: true,
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

  if (isAuthenticated) {
    return <Navigate to={"/"} />
  }
  return (
    <div>
      <h1 className='text-center font-bold'>Admission Professional Honerse  </h1>
      <h4 className='text-center '>Please continue Here!</h4>
      <form className='p-6 flex-col w-auto h-auto items-center gap-x-7 gap-y-9 ' onSubmit={handleRegister}>
        <div className='items-center pt-5 pb-5 justify-between' >
          <input className='w-w1' type='text' placeholder='Full Name' value={fullName} onChange={(e) => setFullName(e.target.value)} />
          <input className='w-w1' type='text' placeholder='Father Name' value={fatherName} onChange={(e) => setFatherName(e.target.value)} />
        </div>
        <div className='items-center pb-5'>
          <input className='w-w1' type='text' placeholder='Mother Name' value={motherName} onChange={(e) => setMotherName(e.target.value)} />
          <input className='w-w1' type='text' placeholder='SSC ROLL' value={sscRoll} onChange={(e) => setSscRoll(e.target.value)} />
        </div>
        <div className='items-center pb-5'>

          <input className='w-w1' type='text' placeholder='SSC REG' value={sscReg} onChange={(e) => setSscReg(e.target.value)} />
          <input className='w-w1' type="text" placeholder='SSC RESULT' value={sscResult} onChange={(e) => setSscResult(e.target.value)} />
        </div>
        <div className='items-center pb-5'>

          <input className='w-w1' type='text' placeholder='SSC Session' value={sscSession} onChange={(e) => setSscSession(e.target.value)} />
          <input className='w-w1' type="text" placeholder='HSC ROLL' value={hscRoll} onChange={(e) => setHscRoll(e.target.value)} />
        </div>
        <div className='items-center pb-5'>

          <input className='w-w1' type='text' placeholder='HSC REG' value={hscReg} onChange={(e) => setHscReg(e.target.value)} />
          <input className='w-w1' type="text" placeholder='HSC RESULT' value={hscResult} onChange={(e) => setHscResult(e.target.value)} />
        </div>
        <div>
        <input className='w-w1' type="text" placeholder='HSC SESSION' value={hscSession} onChange={(e) => setHscSession(e.target.value)} />
        </div>
        <div className='pb-5 items-center'>
          <select className='w-w1' value={department} onChange={(e) => setDepartment(e.target.value)} >
            <option className='bg-green-300' value="">Select Department</option>
            <option className='bg-red-500' value="CSE">CSE</option>
            <option className='bg-yellow-500' value="ECE">ECE</option>
            <option className='bg-yellow-900' value="BBA">BBA</option>
            <option className='bg-lime-800' value="AMT">AMT</option>
            <option className='bg-indigo-600' value="KMT">KMT</option>
            <option className='bg-purple-600' value="FDT">FDT</option>
          </select>
         
        </div>
        
        <div className='items-center n px-10 pt-8'>
        
          <button className='bg-green-600 rounded-tr-xl rounded-bl-xl px-5 py-2 items-center' type='submit'>Register</button>
        </div>
      </form>

    </div>
  )
}

export default Admission;