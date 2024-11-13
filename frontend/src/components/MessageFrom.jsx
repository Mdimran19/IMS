
import axios from 'axios';
import React, { useState } from 'react';
import { toast } from 'react-toastify';

const MessageFrom = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleMessage = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8000/api/v1/message/send",
        { firstName, lastName, phone, email, message },
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      toast.success(response.data.message);
      setFirstName("");
      setLastName("");
      setEmail("");
      setPhone("");
      setMessage("");
    } catch (error) {
      // নিরাপদভাবে ত্রুটি বার্তা হ্যান্ডেল করা হচ্ছে
      const errorMessage = error.response?.data?.message || 'Unknown error occurred';
      toast.error(errorMessage);
    }
  };

  return (
    <div className='items-center bg-slate-200 pt-5 pb-5'>
      <h2 className='text-center pb-5 '>Sand Us a Message</h2>
      <form className='bg-slate-300 ' onSubmit={handleMessage}>
        <div className='flex flex-col items-center gap-3 px-6 pt-5'>
          <input className='w-full rounded-lg' type='text'placeholder='First Name' value={firstName} onChange={(e)=> setFirstName(e.target.value)} />
          <input className='w-full rounded-lg' type='text'placeholder='Last Name' value={lastName} onChange={(e)=> setLastName(e.target.value)} />
          <input className='w-full rounded-lg' type='email'placeholder='Email' value={email} onChange={(e)=> setEmail(e.target.value)} />
          <input className='w-full rounded-lg' type='Number'placeholder='Phone Number' value={phone} onChange={(e)=> setPhone(e.target.value)} />
          <textarea className='w-full rounded-lg' rows={7} placeholder='Message' value={message} onChange={(e)=> setMessage(e.target.value)}/>
           
            <button className='bg-green-500 rounded-tl-lg rounded-br-lg px-4' type='submit'>Send</button>
        </div>
      </form>

    </div>
  )
}

export default MessageFrom;