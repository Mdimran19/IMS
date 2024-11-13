
import React, { useState } from 'react';
import axios from 'axios';
import { yellow } from '@mui/material/colors';

const AddNewTeceher = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        nid: '',
        department: '',
        gender: '',
        fileAvatar: null,
    });


    const departmentsArray = [
          "CSE",
          "ECE",
          "BBA",
          "AMT",
          "KMT",
          "FDT"
      
        ];
    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (name === 'fileAvatar') {
            setFormData({ ...formData, fileAvatar: files[0] });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData();
        data.append('fileAvatar', formData.fileAvatar);
        data.append('firstName', formData.firstName);
        data.append('lastName', formData.lastName);
        data.append('email', formData.email);
        data.append('phone', formData.phone);
        data.append('nid', formData.nid);
        data.append('department', formData.department);
        data.append('gender', formData.gender);
    
        if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone ||
          !formData.nid || !formData.department || !formData.gender || !formData.fileAvatar) {
          alert("Please Provide Full Details!");
          return;
      }
      
        try {
            const response = await axios.post('http://localhost:8000/api/v1/teceher/te', data, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            alert(response.data.message); // Handle success message
        } catch (error) {
            console.error(error);
            alert(error.response.data.message || 'An error occurred'); // Handle error message
        }
    };

    return (
        <form onSubmit={handleSubmit} style={{background: "yellow" , marginLeft: '200px', marginTop: "-700px" , display: "flex", flexDirection: "column-reverse", rowGap: "20px" }}>
            <input type="text" name="firstName" placeholder="First Name" onChange={handleChange} required />
            <input type="text" name="lastName" placeholder="Last Name" onChange={handleChange} required />
            <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
            <input type="tel" name="phone" placeholder="Phone" onChange={handleChange} required />
            <input type="text" name="nid" placeholder="NID" onChange={handleChange} required />
          
            <select type='text' name='department' onChange={handleChange} >
             <option value="">Select Department</option>
            {
               departmentsArray.map((element, index) => {
                return (
                   <option value={element} key={index}>
                    {element}
                   </option>
                 )
               })
             }

         </select>
            <select name="gender" onChange={handleChange} required>
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
            </select>
            <input
    type="file"
    name="fileAvatar"  // This should match
    accept="image/png, image/jpeg, image/webp"
    onChange={handleChange}
    required
/>

            <button type="submit">Add Teacher</button>
        </form>
    );
};

export default AddNewTeceher;
