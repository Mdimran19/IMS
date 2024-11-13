import React, { useContext, useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import { Context } from "../main";
import axios from 'axios';
import Card from '@mui/material/Card';
import { Navigate } from 'react-router-dom';

const Courses = () => {

  const [courses, setCourses] = useState([]);
  const { isAuthenticted } = useContext(Context);
  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const { data } = await axios.get("http://localhost:8000/api/v1/user/sub", {
          withCredentials: true,

        });

        setCourses(data.courses);

      } catch (error) {
        toast.error(error.response.data.message)
      }
    };
    fetchCourse()
  }, [])

  if (isAuthenticted) {
    return < Navigate to={"/login"} />;
  }

  return (
    <div>
      <h1 className='text-center font-bold'>OUR COURSES</h1>

      <div>
        {courses && courses.length > 0 ? (
          courses.map((element, index) => (
            <Card className='hover:bg-cyan-600 hover:text-center' key={index} style={{ margin: '10px', padding: '10px' }}>
              <h4 className='hover:text-3xl'>Department: <span>{element.department}</span> </h4>
              <h4>Years: <span>{element.years}</span> </h4>
              <h4>Created: <span>{element.created}</span> </h4>
              <h4>Fee: <span>{element.fee}</span> </h4>
            </Card>
          ))
        ) : (
          <h4>Data Not Found</h4>
        )}
      </div>



    </div>
  )
}

export default Courses