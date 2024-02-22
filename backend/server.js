// backend/index.js
const express = require('express');
const bodyParser = require('body-parser');
const { Pool } = require('pg');
const cors = require('cors');

const app = express();
const port = 5000;

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'empdet',
    password: 'Praveen28*',
    port: 5432,
});

app.use(cors()); // Use cors middleware
app.use(bodyParser.json());

app.post('/submit', async (req, res) => {
    const { name, employeeId, department, dob, gender, designation, salary } = req.body;

    try {
        const client = await pool.connect();
        const result = await client.query('INSERT INTO employees (name, employee_id, department, dob, gender, designation, salary) VALUES ($1, $2, $3, $4, $5, $6, $7)', [name, employeeId, department, dob, gender, designation, salary]);
        client.release();
        console.log(`A new employee has been added with ID ${result.insertId}`);
        res.status(200).send("Form submitted successfully!");
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send("Internal Server Error");
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
