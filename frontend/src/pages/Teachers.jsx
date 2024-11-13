

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Teachers = () => {
    const [teachers, setTeachers] = useState([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchTeachers = async () => {
            try {
                const response = await axios.get("http://localhost:8000/api/v1/teceher/te", { withCredentials: true });
                setTeachers(response.data.notice); // Adjust based on your API response structure
            } catch (error) {
                setError(error.response?.data?.message || 'An error occurred while fetching teacher details.');
            } finally {
                setLoading(false);
            }
        };

        fetchTeachers();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div>
            <h2>Teacher Details</h2>
            <div className='teacher-list'>
                {teachers && teachers.length > 0 ? (
                    teachers.map((teacher, index) => (
                        <div key={index} style={{ margin: '10px', padding: '10px', border: '1px solid #ccc' }}>
                            <h4>First Name: <span>{teacher.firstName}</span></h4>
                            <h4>Last Name: <span>{teacher.lastName}</span></h4>
                            <h4>Email: <span>{teacher.email}</span></h4>
                            <h4>Phone: <span>{teacher.phone}</span></h4>
                            <h4>NID: <span>{teacher.nid}</span></h4>
                            <h4>Gender: <span>{teacher.gender}</span></h4>
                            <h4>Department: <span>{teacher.department}</span></h4>
                           
                            <h4>File:</h4> 
                             {teacher.fileAvatar?.url && (
                                <img
                                    src={teacher.fileAvatar.url}
                                  
                                    style={{ width: '100px', height: 'auto', borderRadius: '5px' }} // Adjust styles as needed
                                />
                            )}
                        </div>
                    ))
                ) : (
                    <h4>No Teachers Found</h4>
                )}
            </div>
        </div>
    );
};

export default Teachers;



