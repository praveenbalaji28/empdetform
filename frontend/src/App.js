// frontend/src/App.js
import React from 'react';
import EmployeeForm from './EmployeeForm';
import './App.css'; // Import CSS file for styling

const App = () => {
    return (
        <div className="app-container">
            <div className="header">
                <h1>Employee Management Application</h1>
            </div>
            <div className="form-container">
                <EmployeeForm />
            </div>
        </div>
    );
};

export default App;
