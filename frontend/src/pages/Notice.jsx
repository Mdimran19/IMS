
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '@mui/material/Card';
import { toast } from 'react-toastify';
import { Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { Context } from "../main";

const Notice = () => {
  const [notices, setNotices] = useState([]);
  const { isAuthenticated } = useContext(Context);

  useEffect(() => {
    const fetchNotices = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/v1/user/notice", {
          withCredentials: true,
        });
        setNotices(response.data.notice);
      } catch (error) {
        toast.error(error.response?.data?.message || 'An error occurred');
      }
    };
    fetchNotices();
  }, []);

  if (isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return (
    <div>
      <h1 className='text-center font-bold'>OUR Notices</h1>
      <div>
        {notices && notices.length > 0 ? (
          notices.map((notice, index) => (
            <div
              className='hover:bg-cyan-600 hover:text-center'
              key={index}
              style={{ margin: '10px', padding: '10px' }}
            >
           <h4>TITLE: <span>{notice.titleAvatar?.url || "No Title"}</span></h4>
           <h4>FILE: <span>{notice.title}</span></h4>
 
         {notice.titleAvatar?.url && (
                                <img
                                    src={notice.titleAvatar.url}
                                  
                                    style={{ width: '100px', height: 'auto', borderRadius: '5px' }} // Adjust styles as needed
                                />
                            )}
            </div>
          ))
        ) : 
          <h4>Data Not Found</h4>
        }
      </div>
    </div>
  );
};

export default Notice;
