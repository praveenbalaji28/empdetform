// frontend/src/EmployeeForm.js
import React, { useState } from 'react';
import axios from 'axios';
import './empform.css';
axios.defaults.baseURL = 'http://localhost:5000'; // Update port if your backend is running on a different port

const EmployeeForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        employeeId: '',
        department: '',
        dob: '',
        gender: '', 
        designation: '',
        salary: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/submit', formData);
            alert('Form submitted successfully!');
        } catch (error) {
            console.error('Error:', error);
            if (error.response) {
                console.error('Server responded with:', error.response.data);
            } else if (error.request) {
                console.error('No response received from server');
            } else {
                console.error('Error setting up request:', error.message);
            }
            alert('Failed to submit form. Please try again.');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Employee Name:</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required /><br />

            <label htmlFor="employeeId">Employee ID:</label>
            <input type="text" id="employeeId" name="employeeId" value={formData.employeeId} onChange={handleChange} required /><br />

            <label htmlFor="department">Department:</label>
            <input type="text" id="department" name="department" value={formData.department} onChange={handleChange} required /><br />

            <label htmlFor="dob">Date of Birth:</label>
            <input type="date" id="dob" name="dob" value={formData.dob} onChange={handleChange} required /><br />

            <label htmlFor="gender">Gender:</label>
            <select id="gender" name="gender" value={formData.gender} onChange={handleChange} required>
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
            </select><br />

            <label htmlFor="designation">Designation:</label>
            <input type="text" id="designation" name="designation" value={formData.designation} onChange={handleChange} required /><br />

            <label htmlFor="salary">Salary:</label>
            <input type="number" id="salary" name="salary" value={formData.salary} onChange={handleChange} required /><br />

            <button type="submit">Submit</button>
        </form>
    );
};

export default EmployeeForm;