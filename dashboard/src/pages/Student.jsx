
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

import Card from '@mui/material/Card';
const Student = () => {
  const [students, setUser] = useState([]);


useEffect(()=> {
    const fetchUser = async () =>{
      try {
        const response = await axios.get("http://localhost:8000/api/v1/user/me", {withCredentials: true});
       // setIsAuthenticated(true);
        setUser(response.data.user);
      } catch (error) {
       // setIsAuthenticated(false);
        setUser({});
      }
    };
    fetchUser();
      },[]
    )

  return (
    <div className='homeass'>
      {students && students.length > 0 ? (
        students.map((element, index) => (
          <Card  key={index} style={{ margin: '10px', padding: '10px' }}>
            <h4 className='hover:text-3xl'>First Name: <span>{element.firstName}</span></h4>
            <h4>Last Name: <span>{element.lastName}</span></h4>
            <h4>Email: <span>{element.email}</span></h4>
            <h4>STDID: <span>{element.studentId}</span></h4>
            <h4>Session: <span>{element.session}</span></h4>
            <h4>Department: <span>{element.department}</span></h4>
            <h4>Role: <span>{element.role}</span></h4>
          </Card>
        ))
      ) : (
        <h4>Data Not Found</h4>
      )}
    </div>
  );
};

export default Student;
