import React, { useState } from 'react';
import axios from 'axios';

const AddNewNotice = () => {
    const [formData, setFormData] = useState({
        title: '',
        fileAvatar: null,
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (name === 'fileAvatar') {
            setFormData({ ...formData, fileAvatar: files[0] }); // Get the first selected file
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData();

        // Append title and fileAvatar to FormData
        data.append('fileAvatar', formData.fileAvatar);
        data.append('title', formData.title);

        // Check if title is provided
        if (!formData.title) {
            alert("Please provide the title!");
            return;
        }

        // Check if file is selected
        if (!formData.fileAvatar) {
            alert("Please select an avatar file.");
            return;
        }

        try {
            const response = await axios.post('http://localhost:8000/api/v1/user/add/notice', data, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            alert(response.data.message); // Handle success message
        } catch (error) {
            console.error(error);
            alert(error.response?.data?.message || 'An error occurred'); // Handle error message
        }
    };

    return (<div style={{background: "green", marginLeft: "200px", height: "500px"}}>
        <form onSubmit={handleSubmit} style={{marginLeft: "", marginTop: "-500px", display: "flex",
        background: "", flexDirection: "column", gap: "20px"}}>
            <input
                type="text"
                name="title"
                placeholder="Notice Title"
                value={formData.title}
                onChange={handleChange}
                required
            />
            <input
                type="file"
                name="fileAvatar"
                accept="image/png, image/jpeg, image/webp"
                onChange={handleChange}
                required
            />
            <button type="submit">Add Notice</button>
        </form>
        </div>
    );
};

export default AddNewNotice;
